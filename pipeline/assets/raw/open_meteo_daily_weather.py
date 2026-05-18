"""@bruin
name: raw.open_meteo_daily_weather
type: python
connection: duckdb_default

materialization:
  type: table
  strategy: merge

columns:
  - name: iso3
    type: varchar
    primary_key: true
  - name: date
    type: date
    primary_key: true
  - name: country_name
    type: varchar
    update_on_merge: true
  - name: latitude
    type: double
    update_on_merge: true
  - name: longitude
    type: double
    update_on_merge: true
  - name: temperature_2m_mean
    type: double
    update_on_merge: true
  - name: temperature_2m_max
    type: double
    update_on_merge: true
  - name: temperature_2m_min
    type: double
    update_on_merge: true
  - name: precipitation_sum
    type: double
    update_on_merge: true
  - name: ingested_at
    type: timestamp
    update_on_merge: true
@bruin"""

from __future__ import annotations

import json
import os
import random
from datetime import date, datetime, timedelta, timezone
from pathlib import Path
from time import sleep

import duckdb
import pandas as pd
import requests


OPEN_METEO_URL = "https://archive-api.open-meteo.com/v1/archive"

COUNTRIES_SEED_PATH = Path("pipeline/assets/seeds/countries.csv")
DUCKDB_PATH = Path("data/warehouse/food_security.duckdb")
TARGET_TABLE = "raw.open_meteo_daily_weather"

DAILY_VARIABLES = [
    "temperature_2m_mean",
    "temperature_2m_max",
    "temperature_2m_min",
    "precipitation_sum",
]

DEFAULT_BACKFILL_START_DATE = "2020-01-01"
DEFAULT_BACKFILL_END_DATE = "2024-12-31"

DEFAULT_BATCH_SIZE = 5
DEFAULT_REQUEST_DELAY_SECONDS = 5


def get_bruin_vars() -> dict:
    """
    Read Bruin variables from BRUIN_VARS when available.

    This lets the same asset work with hardcoded defaults locally,
    environment variables, or Bruin pipeline variables later.
    """
    raw_vars = os.getenv("BRUIN_VARS")

    if not raw_vars:
        return {}

    try:
        return json.loads(raw_vars)
    except json.JSONDecodeError:
        print("Warning: BRUIN_VARS exists but could not be parsed as JSON.")
        return {}


def get_config_value(
    name: str,
    default: str | int | None = None,
) -> str | int | None:
    """
    Configuration priority:
    1. Environment variable
    2. Bruin variable from BRUIN_VARS
    3. Default value
    """
    env_value = os.getenv(name)

    if env_value is not None:
        return env_value

    bruin_vars = get_bruin_vars()

    if name in bruin_vars:
        return bruin_vars[name]

    return default


def get_yesterday_utc() -> str:
    return (datetime.now(timezone.utc).date() - timedelta(days=1)).isoformat()


def get_run_config() -> dict:
    """
    Supported modes:

    all:
        Fetch all countries from the seed for the selected date window.
        Useful for full historical backfill.

    missing:
        Fetch only countries that do not have complete coverage for the
        selected date window.
        Useful for recovery and resumable backfills.

    list:
        Fetch only countries listed in OPEN_METEO_COUNTRY_LIST.
        Example: OPEN_METEO_COUNTRY_LIST="ISR,ITA,JPN"

    regular:
        Fetch all countries for yesterday by default.
        Useful for scheduled incremental runs.
    """
    run_mode = str(
        get_config_value("OPEN_METEO_RUN_MODE", "missing")
    ).lower()

    if run_mode == "regular":
        default_start_date = get_yesterday_utc()
        default_end_date = get_yesterday_utc()
    else:
        default_start_date = DEFAULT_BACKFILL_START_DATE
        default_end_date = DEFAULT_BACKFILL_END_DATE

    start_date = str(
        get_config_value("OPEN_METEO_START_DATE", default_start_date)
    )

    end_date = str(
        get_config_value("OPEN_METEO_END_DATE", default_end_date)
    )

    batch_size = int(
        get_config_value("OPEN_METEO_BATCH_SIZE", DEFAULT_BATCH_SIZE)
    )

    request_delay_seconds = float(
        get_config_value(
            "OPEN_METEO_REQUEST_DELAY_SECONDS",
            DEFAULT_REQUEST_DELAY_SECONDS,
        )
    )

    country_list_raw = get_config_value("OPEN_METEO_COUNTRY_LIST", "")

    if country_list_raw:
        country_list = [
            country.strip().upper()
            for country in str(country_list_raw).split(",")
            if country.strip()
        ]
    else:
        country_list = []

    return {
        "run_mode": run_mode,
        "start_date": start_date,
        "end_date": end_date,
        "batch_size": batch_size,
        "request_delay_seconds": request_delay_seconds,
        "country_list": country_list,
    }


def validate_date_window(start_date: str, end_date: str) -> None:
    start = date.fromisoformat(start_date)
    end = date.fromisoformat(end_date)

    if start > end:
        raise ValueError(
            f"Invalid date window: start_date {start_date} "
            f"is after end_date {end_date}."
        )


def expected_days_count(start_date: str, end_date: str) -> int:
    start = date.fromisoformat(start_date)
    end = date.fromisoformat(end_date)

    return (end - start).days + 1


def load_countries_seed(seed_path: Path) -> pd.DataFrame:
    countries = pd.read_csv(
        seed_path,
        dtype={
            "iso3": "string",
            "m49": "string",
            "country_name": "string",
        },
    )

    required_columns = [
        "iso3",
        "country_name",
        "latitude",
        "longitude",
    ]

    missing_columns = [
        col for col in required_columns
        if col not in countries.columns
    ]

    if missing_columns:
        raise ValueError(f"Missing required seed columns: {missing_columns}")

    countries = countries.dropna(
        subset=["iso3", "latitude", "longitude"]
    ).copy()

    countries["latitude"] = pd.to_numeric(
        countries["latitude"],
        errors="coerce",
    )

    countries["longitude"] = pd.to_numeric(
        countries["longitude"],
        errors="coerce",
    )

    countries = countries.dropna(
        subset=["latitude", "longitude"]
    ).copy()

    countries["iso3"] = countries["iso3"].astype(str).str.upper()

    return countries


def target_table_exists() -> bool:
    if not DUCKDB_PATH.exists():
        return False

    query = """
        SELECT COUNT(*) AS table_count
        FROM information_schema.tables
        WHERE table_schema = 'raw'
          AND table_name = 'open_meteo_daily_weather'
    """

    with duckdb.connect(str(DUCKDB_PATH), read_only=True) as con:
        result = con.execute(query).fetchone()

    return result[0] > 0


def get_complete_countries_for_window(
    start_date: str,
    end_date: str,
) -> set[str]:
    """
    Return countries that already have complete date coverage
    for the requested window.

    This is what makes recovery/backfill resumable: we do not need
    to fetch countries that are already complete.
    """
    if not target_table_exists():
        return set()

    expected_days = expected_days_count(start_date, end_date)

    query = """
        SELECT iso3
        FROM raw.open_meteo_daily_weather
        WHERE date BETWEEN ? AND ?
        GROUP BY iso3
        HAVING COUNT(DISTINCT date) = ?
    """

    with duckdb.connect(str(DUCKDB_PATH), read_only=True) as con:
        rows = con.execute(
            query,
            [start_date, end_date, expected_days],
        ).fetchall()

    return {row[0] for row in rows}


def select_countries_for_run(
    countries: pd.DataFrame,
    run_mode: str,
    start_date: str,
    end_date: str,
    country_list: list[str],
) -> pd.DataFrame:
    if run_mode == "all":
        return countries.copy()

    if run_mode == "regular":
        return countries.copy()

    if run_mode == "list":
        if not country_list:
            raise ValueError(
                "OPEN_METEO_RUN_MODE='list' requires "
                "OPEN_METEO_COUNTRY_LIST, for example 'ISR,ITA,JPN'."
            )

        selected = countries[countries["iso3"].isin(country_list)].copy()

        missing_from_seed = sorted(set(country_list) - set(selected["iso3"]))

        if missing_from_seed:
            print(
                "Warning: these countries were requested but not found "
                f"in the seed: {missing_from_seed}"
            )

        return selected

    if run_mode == "missing":
        complete_countries = get_complete_countries_for_window(
            start_date=start_date,
            end_date=end_date,
        )

        selected = countries[
            ~countries["iso3"].isin(complete_countries)
        ].copy()

        print(
            f"Countries/entities already complete for this window: "
            f"{len(complete_countries)}"
        )

        print(
            f"Countries/entities selected for this run: "
            f"{len(selected)}"
        )

        return selected

    raise ValueError(
        f"Unsupported OPEN_METEO_RUN_MODE: {run_mode}. "
        "Use one of: all, missing, list, regular."
    )


def get_with_retries(
    url: str,
    params: dict,
    max_retries: int = 5,
) -> requests.Response:
    last_response = None

    for attempt in range(max_retries):
        response = requests.get(url, params=params, timeout=60)
        last_response = response

        if response.status_code == 429:
            retry_after = response.headers.get("Retry-After")

            if retry_after is not None and retry_after.isdigit():
                wait_seconds = int(retry_after)
            else:
                wait_seconds = min(
                    300,
                    30 * (2 ** attempt) + random.uniform(0, 10),
                )

            print(
                f"Rate limited with 429. "
                f"Waiting {wait_seconds:.1f} seconds before retry "
                f"{attempt + 1}/{max_retries}..."
            )

            sleep(wait_seconds)
            continue

        response.raise_for_status()
        return response

    last_response.raise_for_status()
    return last_response


def chunk_dataframe(df: pd.DataFrame, batch_size: int):
    for start in range(0, len(df), batch_size):
        yield df.iloc[start:start + batch_size].copy()


def fetch_weather_for_country_batch(
    countries_batch: pd.DataFrame,
    start_date: str,
    end_date: str,
) -> pd.DataFrame | None:
    latitudes = countries_batch["latitude"].astype(str).tolist()
    longitudes = countries_batch["longitude"].astype(str).tolist()

    params = {
        "latitude": ",".join(latitudes),
        "longitude": ",".join(longitudes),
        "start_date": start_date,
        "end_date": end_date,
        "daily": ",".join(DAILY_VARIABLES),
        "timezone": "UTC",
    }

    try:
        response = get_with_retries(OPEN_METEO_URL, params=params)
        data = response.json()

    except requests.RequestException as e:
        batch_ids = countries_batch["iso3"].tolist()
        print(f"Request failed for batch {batch_ids}: {e}")
        return None

    if isinstance(data, dict):
        data = [data]

    if not isinstance(data, list):
        batch_ids = countries_batch["iso3"].tolist()
        print(f"Unexpected response format for batch {batch_ids}.")
        return None

    if len(data) != len(countries_batch):
        batch_ids = countries_batch["iso3"].tolist()
        print(
            f"Warning: response length does not match batch length "
            f"for {batch_ids}. Expected {len(countries_batch)}, "
            f"got {len(data)}."
        )

    frames = []

    for country_row, location_data in zip(
        countries_batch.itertuples(index=False),
        data,
    ):
        iso3 = country_row.iso3
        country_name = country_row.country_name
        latitude = float(country_row.latitude)
        longitude = float(country_row.longitude)

        if "daily" not in location_data:
            print(f"No daily weather data returned for {iso3} - {country_name}.")
            continue

        weather = pd.DataFrame(location_data["daily"])

        weather["iso3"] = iso3
        weather["country_name"] = country_name
        weather["latitude"] = latitude
        weather["longitude"] = longitude

        frames.append(weather)

    if not frames:
        return None

    return pd.concat(frames, ignore_index=True)


def fetch_all_weather(
    countries: pd.DataFrame,
    start_date: str,
    end_date: str,
    batch_size: int,
    request_delay_seconds: float,
) -> pd.DataFrame:
    frames = []
    failed_batches = []

    batches = list(chunk_dataframe(countries, batch_size))
    total_batches = len(batches)

    for i, countries_batch in enumerate(batches, start=1):
        batch_ids = countries_batch["iso3"].tolist()

        print(
            f"[{i}/{total_batches}] "
            f"Fetching Open-Meteo daily weather for batch: {batch_ids}"
        )

        weather = fetch_weather_for_country_batch(
            countries_batch=countries_batch,
            start_date=start_date,
            end_date=end_date,
        )

        if weather is not None:
            frames.append(weather)
        else:
            failed_batches.append(batch_ids)

        sleep(request_delay_seconds)

    if failed_batches:
        print(f"Failed batches: {failed_batches}")

    if not frames:
        raise RuntimeError("No Open-Meteo weather data was fetched.")

    return pd.concat(frames, ignore_index=True)


def standardize_weather_response(df: pd.DataFrame) -> pd.DataFrame:
    """
    Apply light source-level normalization.

    This keeps the raw table at the original daily weather grain.
    Analytical transformations, such as annual aggregation, should happen
    in staging.
    """
    df = df.rename(columns={"time": "date"})

    df["date"] = pd.to_datetime(df["date"]).dt.date

    numeric_columns = [
        "latitude",
        "longitude",
        "temperature_2m_mean",
        "temperature_2m_max",
        "temperature_2m_min",
        "precipitation_sum",
    ]

    for col in numeric_columns:
        df[col] = pd.to_numeric(df[col], errors="coerce")

    df["ingested_at"] = datetime.now(timezone.utc)

    column_order = [
        "iso3",
        "date",
        "country_name",
        "latitude",
        "longitude",
        "temperature_2m_mean",
        "temperature_2m_max",
        "temperature_2m_min",
        "precipitation_sum",
        "ingested_at",
    ]

    return df[column_order]


def materialize() -> pd.DataFrame:
    config = get_run_config()

    run_mode = config["run_mode"]
    start_date = config["start_date"]
    end_date = config["end_date"]
    batch_size = config["batch_size"]
    request_delay_seconds = config["request_delay_seconds"]
    country_list = config["country_list"]

    validate_date_window(start_date, end_date)

    countries = load_countries_seed(COUNTRIES_SEED_PATH)

    selected_countries = select_countries_for_run(
        countries=countries,
        run_mode=run_mode,
        start_date=start_date,
        end_date=end_date,
        country_list=country_list,
    )

    print(f"Run mode: {run_mode}")
    print(f"Date window: {start_date} to {end_date}")
    print(f"Loaded {len(countries)} countries/entities from seed.")
    print(f"Selected {len(selected_countries)} countries/entities for this run.")
    print(f"Batch size: {batch_size}")
    print(f"Request delay seconds: {request_delay_seconds}")

    if selected_countries.empty:
        print("No countries/entities need loading for this window.")

        return pd.DataFrame(
            columns=[
                "iso3",
                "date",
                "country_name",
                "latitude",
                "longitude",
                "temperature_2m_mean",
                "temperature_2m_max",
                "temperature_2m_min",
                "precipitation_sum",
                "ingested_at",
            ]
        )

    weather = fetch_all_weather(
        countries=selected_countries,
        start_date=start_date,
        end_date=end_date,
        batch_size=batch_size,
        request_delay_seconds=request_delay_seconds,
    )

    weather = standardize_weather_response(weather)

    print(f"Returning {len(weather):,} Open-Meteo daily weather rows.")

    return weather