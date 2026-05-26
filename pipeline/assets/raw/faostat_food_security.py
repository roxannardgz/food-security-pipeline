"""@bruin
name: raw.fao_food_security
type: python
connection: duckdb_default

materialization:
  type: table
  strategy: create+replace
@bruin"""


import io
import zipfile
from datetime import datetime, timezone

import pandas as pd
import requests

FS_URL = "https://bulks-faostat.fao.org/production/Food_Security_Data_E_All_Data_(Normalized).zip"


def download_faostat_zip(url: str) -> bytes:
    response = requests.get(url, timeout=120)
    response.raise_for_status()
    return response.content


def read_main_csv_from_zip(zip_bytes: bytes) -> pd.DataFrame:
    with zipfile.ZipFile(io.BytesIO(zip_bytes)) as z:
        csv_files = [f for f in z.namelist() if f.endswith(".csv")]
        main_files = [
            f for f in csv_files
            if "All_Data" in f and "Normalized" in f
        ]

        if not main_files:
            raise FileNotFoundError(
                f"No normalized All_Data CSV found. Files: {z.namelist()}"
            )

        main_file = main_files[0]

        with z.open(main_file) as f:
            df = pd.read_csv(f, encoding="latin-1")

    return df


def filter_years(df: pd.DataFrame, start_year: int, end_year: int) -> pd.DataFrame:
    df = df.copy()
    df["Year"] = pd.to_numeric(df["Year"], errors="coerce")

    return df[
        df["Year"].between(start_year, end_year)
    ].copy()


def materialize() -> pd.DataFrame:
    start_year = 2020
    end_year = 2024

    zip_bytes = download_faostat_zip(FS_URL)
    df = read_main_csv_from_zip(zip_bytes)
    df = filter_years(df, start_year, end_year)

    df["ingested_at"] = datetime.now(timezone.utc)

    return df

