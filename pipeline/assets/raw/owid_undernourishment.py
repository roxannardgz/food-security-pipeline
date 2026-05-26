"""@bruin
name: raw.owid_undernourishment
type: python
connection: duckdb_default

materialization:
  type: table
  strategy: create+replace
@bruin"""

from datetime import datetime, timezone

import pandas as pd
import requests


UNDERNOURISHMENT_URL = (
    "https://ourworldindata.org/grapher/"
    "prevalence-of-undernourishment.csv"
    "?v=1&csvType=full&useColumnShortNames=false"
)


def download_undernourishment_data(url: str) -> pd.DataFrame:
    response = requests.get(
        url,
        timeout=120,
        headers={"User-Agent": "food-security-pipeline/1.0"},
    )
    response.raise_for_status()

    return pd.read_csv(pd.io.common.BytesIO(response.content))


def materialize() -> pd.DataFrame:
    start_year = 2020
    end_year = 2024

    df = download_undernourishment_data(UNDERNOURISHMENT_URL)
    df = df.drop(columns=["index_level_0"], errors="ignore")
    df = df.reset_index(drop=True)

    value_column = [
        col for col in df.columns
        if col not in ["Entity", "Code", "Year"]
    ][0]

    df = df.rename(
        columns={
            "Entity": "country_name_source",
            "Code": "country_code",
            "Year": "year",
            value_column: "undernourishment_prevalence_pct",
        }
    )

    df["year"] = pd.to_numeric(df["year"], errors="coerce")
    df["undernourishment_prevalence_pct"] = pd.to_numeric(
        df["undernourishment_prevalence_pct"],
        errors="coerce",
    )

    df = df[
        df["year"].between(start_year, end_year)
    ].copy()

    df["source"] = "Our World in Data, based on FAO SDG Indicators"
    df["ingested_at"] = datetime.now(timezone.utc)

    return df[
        [
            "country_code",
            "country_name_source",
            "year",
            "undernourishment_prevalence_pct",
            "source",
            "ingested_at",
        ]
    ]