"""@bruin
name: raw.fao_consumer_price_indices
type: python
connection: duckdb_default

materialization:
  type: table
  strategy: create+replace
@bruin"""

import io
import zipfile

import pandas as pd
import requests

from bruin import context

CPI_URL = "https://bulks-faostat.fao.org/production/ConsumerPriceIndices_E_All_Data_(Normalized).zip"


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
    start_year = int(context.vars.get("start_year", 2010))
    end_year = int(context.vars.get("end_year", 2024))

    if start_year > end_year:
        raise ValueError(
            f"start_year must be <= end_year, got {start_year} > {end_year}"
        )

    zip_bytes = download_faostat_zip(CPI_URL)
    df = read_main_csv_from_zip(zip_bytes)
    df = filter_years(df, start_year, end_year)

    df = df.drop(columns=["index_level_0"], errors="ignore")
    df = df.reset_index(drop=True)

    df["ingested_at"] = pd.Timestamp.now(tz="UTC")

    return df