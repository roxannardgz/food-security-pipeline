"""@bruin
name: raw.open_meteo_daily_weather
type: python
connection: duckdb_default

materialization:
  type: table
@bruin"""

from datetime import datetime, timezone
from pathlib import Path
from time import sleep

import pandas as pd
import requests


OPEN_METEO_URL = "https://archive-api.open-meteo.com/v1/archive"

COUNTRIES_SEED_PATH = Path("pipeline/assets/seeds/countries.csv")

START_DATE = "2020-01-01"
END_DATE = "2024-12-31"

BATCH_SIZE = 10
REQUEST_DELAY_SECONDS = 2

DAILY_VARIABLES = [
    "temperature_2m_mean",
    "temperature_2m_max",
    "temperature_2m_min",
    "precipitation_sum",
]


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

    countries["latitude"] = pd.to_numeric(countries["latitude"], errors="coerce")
    countries["longitude"] = pd.to_numeric(countries["longitude"], errors="coerce")

    countries = countries.dropna(
        subset=["latitude", "longitude"]
    ).copy()

    return countries


def get_with_retries(
    url: str,
    params: dict,
    max_retries: int = 5,
) -> requests.Response:
    for attempt in range(max_retries):
        response = requests.get(url, params=params, timeout=60)

        if response.status_code == 429:
            retry_after = response.headers.get("Retry-After")

            if retry_after is not None and retry_after.isdigit():
                wait_seconds = int(retry_after)
            else:
                wait_seconds = 15 * (attempt + 1)

            print(
                f"Rate limited with 429. "
                f"Waiting {wait_seconds} seconds before retry "
                f"{attempt + 1}/{max_retries}..."
            )

            sleep(wait_seconds)
            continue

        response.raise_for_status()
        return response

    response.raise_for_status()
    return response


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
        # This handles the case where the batch has only one coordinate pair.
        data = [data]

    if not isinstance(data, list):
        batch_ids = countries_batch["iso3"].tolist()
        print(f"Unexpected response format for batch {batch_ids}.")
        return None

    if len(data) != len(countries_batch):
        batch_ids = countries_batch["iso3"].tolist()
        print(
            f"Warning: response length does not match batch length for {batch_ids}. "
            f"Expected {len(countries_batch)}, got {len(data)}."
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

        daily = location_data["daily"]

        weather = pd.DataFrame(daily)
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
) -> pd.DataFrame:
    frames = []
    failed_batches = []

    batches = list(chunk_dataframe(countries, BATCH_SIZE))
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

        sleep(REQUEST_DELAY_SECONDS)

    if not frames:
        raise RuntimeError("No Open-Meteo weather data was fetched.")

    if failed_batches:
        print(f"Failed batches: {failed_batches}")

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
        "country_name",
        "latitude",
        "longitude",
        "date",
        "temperature_2m_mean",
        "temperature_2m_max",
        "temperature_2m_min",
        "precipitation_sum",
        "ingested_at",
    ]

    return df[column_order]


def materialize() -> pd.DataFrame:
    countries = load_countries_seed(COUNTRIES_SEED_PATH)

    print(f"Loaded {len(countries)} countries/entities from seed.")
    print(f"Fetching daily weather from {START_DATE} to {END_DATE}.")
    print(f"Using batch size: {BATCH_SIZE}")

    weather = fetch_all_weather(
        countries=countries,
        start_date=START_DATE,
        end_date=END_DATE,
    )

    weather = standardize_weather_response(weather)

    print(f"Returning {len(weather):,} Open-Meteo daily weather rows.")

    return weather