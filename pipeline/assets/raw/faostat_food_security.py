""" @bruin

name: raw.fao_food_security
type: python

@bruin """


"""Ingest FAOSTAT Food Security bulk data into DuckDB."""


import io
import zipfile
from datetime import datetime, timezone

import duckdb
import pandas as pd
import requests

FS_URL = "https://bulks-faostat.fao.org/production/Food_Security_Data_E_All_Data_(Normalized).zip"
DUCKDB_PATH = "data/warehouse/food_security.duckdb"
RAW_TABLE = "raw_faostat_food_security"


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


def write_to_duckdb(df: pd.DataFrame, db_path: str, table_name: str) -> None:
    df = df.copy()
    df["ingested_at"] = datetime.now(timezone.utc)

    with duckdb.connect(db_path) as con:
        con.register("df", df)
        con.execute(f"CREATE OR REPLACE TABLE {table_name} AS SELECT * FROM df")


def main() -> None:
    start_year = 2020
    end_year = 2024

    print("Downloading FAOSTAT Food Security data...")
    zip_bytes = download_faostat_zip(FS_URL)

    print("Reading normalized CSV...")
    df = read_main_csv_from_zip(zip_bytes)

    print(f"Rows before filtering: {len(df):,}")
    df = filter_years(df, start_year, end_year)
    print(f"Rows after filtering {start_year}-{end_year}: {len(df):,}")

    print(f"Writing to DuckDB table: {RAW_TABLE}")
    write_to_duckdb(df, DUCKDB_PATH, RAW_TABLE)

    print("Done.")


if __name__ == "__main__":
    main()