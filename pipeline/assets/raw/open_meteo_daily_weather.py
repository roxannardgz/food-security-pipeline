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
  - name: latitude
    type: double
  - name: longitude
    type: double
  - name: temperature_2m_mean
    type: double
  - name: temperature_2m_max
    type: double
  - name: temperature_2m_min
    type: double
  - name: precipitation_sum
    type: double
  - name: ingested_at
    type: timestamp
@bruin"""

from pathlib import Path
from time import sleep

import pandas as pd
import requests

from bruin import context


OPEN_METEO_URL = "https://archive-api.open-meteo.com/v1/archive"

COUNTRIES_SEED_PATH = Path("pipeline/seeds/countries.csv")

REQUEST_DELAY_SECONDS = 6
RATE_LIMIT_WAIT_SECONDS = 65

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

    return countries


def get_with_retries(url: str, params: dict, max_retries: int = 5) -> requests.Response:
    last_response = None

    for attempt in range(max_retries):
        response = requests.get(url, params=params, timeout=60)
        last_response = response

        if response.status_code == 429:
            print(f"429 body: {response.text[:500]}")
            print(f"429 headers: {dict(response.headers)}")

            print(
                f"Rate limited with 429. "
                f"Waiting {RATE_LIMIT_WAIT_SECONDS} seconds before retry "
                f"{attempt + 1}/{max_retries}..."
            )

            sleep(RATE_LIMIT_WAIT_SECONDS)
            continue

        response.raise_for_status()
        return response

    last_response.raise_for_status()
    return last_response


def fetch_weather_for_country(iso3: str, country_name: str, latitude: float, longitude: float,start_date: str, end_date: str,) -> pd.DataFrame | None:
    params = {
        "latitude": latitude,
        "longitude": longitude,
        "start_date": start_date,
        "end_date": end_date,
        "daily": ",".join(DAILY_VARIABLES),
        "timezone": "UTC",
    }

    try:
        response = get_with_retries(
            OPEN_METEO_URL,
            params=params,
        )

        data = response.json()

    except requests.RequestException as e:
        print(f"Request failed for {iso3} - {country_name}: {e}")
        return None

    if "daily" not in data:
        print(f"No daily weather data returned for {iso3} - {country_name}.")
        return None

    weather = pd.DataFrame(data["daily"])

    weather["iso3"] = iso3
    weather["country_name"] = country_name
    weather["latitude"] = latitude
    weather["longitude"] = longitude

    return weather


def fetch_all_weather(countries: pd.DataFrame, start_date: str, end_date: str,) -> pd.DataFrame:
    frames = []
    failed_countries = []

    total_countries = len(countries)

    for i, row in enumerate(countries.itertuples(index=False), start=1):
        iso3 = row.iso3
        country_name = row.country_name
        latitude = float(row.latitude)
        longitude = float(row.longitude)

        print(
            f"[{i}/{total_countries}] "
            f"Fetching Open-Meteo daily weather for {iso3} - {country_name}..."
        )

        weather = fetch_weather_for_country(
            iso3=iso3,
            country_name=country_name,
            latitude=latitude,
            longitude=longitude,
            start_date=start_date,
            end_date=end_date,
        )

        if weather is not None:
            frames.append(weather)
        else:
            failed_countries.append(iso3)

        sleep(REQUEST_DELAY_SECONDS)

    if not frames:
        raise RuntimeError("No Open-Meteo weather data was fetched.")

    if failed_countries:
        print(f"Failed countries/entities: {failed_countries}")

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

    df["ingested_at"] = pd.Timestamp.now(tz="UTC")

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

def get_climate_date_range() -> tuple[str, str]:
    climate_start_year = int(context.vars.get("climate_start_year", 2020))
    climate_end_year = int(context.vars.get("climate_end_year", 2024))

    if climate_start_year > climate_end_year:
        raise ValueError(
            f"climate_start_year must be <= climate_end_year, "
            f"got {climate_start_year} > {climate_end_year}"
        )

    start_date = f"{climate_start_year}-01-01"
    end_date = f"{climate_end_year}-12-31"

    return start_date, end_date


def materialize() -> pd.DataFrame:
    start_date, end_date = get_climate_date_range()

    countries = load_countries_seed(COUNTRIES_SEED_PATH)

    print(f"Loaded {len(countries)} countries/entities from seed.")
    print(f"Fetching daily weather from {start_date} to {end_date}.")
    print("Fetching one country per request.")
    print(f"Request delay seconds: {REQUEST_DELAY_SECONDS}")

    weather = fetch_all_weather(
        countries=countries,
        start_date=start_date,
        end_date=end_date,
    )

    weather = standardize_weather_response(weather)

    print(f"Returning {len(weather):,} Open-Meteo daily weather rows.")

    return weather