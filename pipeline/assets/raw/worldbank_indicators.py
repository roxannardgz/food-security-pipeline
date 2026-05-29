"""@bruin
name: raw.worldbank_indicators
type: python
connection: duckdb_default

materialization:
  type: table
  strategy: create+replace
@bruin"""

import pandas as pd
import wbgapi as wb

from bruin import context


WORLD_BANK_INDICATORS = {
    "NY.GDP.PCAP.CD": "gdp_per_capita_current_usd",
    "SI.POV.DDAY": "poverty_headcount_215_pct",
    "FP.CPI.TOTL.ZG": "inflation_consumer_prices_pct",
    "SP.POP.TOTL": "population_total",
}


def fetch_indicator_data(indicator_code: str, start_year: int, end_year: int) -> pd.DataFrame:
    df = wb.data.DataFrame(
        indicator_code,
        time=range(start_year, end_year + 1),
        labels=True,
    ).reset_index()

    return df


def convert_df_to_long(df: pd.DataFrame) -> pd.DataFrame:
    id_cols = [c for c in df.columns if not str(c).startswith("YR")]
    year_cols = [c for c in df.columns if str(c).startswith("YR")]

    df_long = df.melt(
        id_vars=id_cols,
        value_vars=year_cols,
        var_name="year",
        value_name="value",
    )

    df_long["year"] = (
        df_long["year"]
        .str.replace("YR", "", regex=False)
        .astype(int)
    )

    return df_long


def add_indicator_metadata(df: pd.DataFrame, indicator_code: str, indicator_name: str) -> pd.DataFrame:
    df = df.copy()
    df["indicator_code"] = indicator_code
    df["indicator_name"] = indicator_name

    return df


def materialize() -> pd.DataFrame:
    start_year = int(context.vars.get("start_year", 2010))
    end_year = int(context.vars.get("end_year", 2024))

    if start_year > end_year:
        raise ValueError(
            f"start_year must be <= end_year, got {start_year} > {end_year}"
        )

    frames = []

    for indicator_code, indicator_name in WORLD_BANK_INDICATORS.items():
        df = fetch_indicator_data(indicator_code, start_year, end_year)
        df_long = convert_df_to_long(df)
        df_long = add_indicator_metadata(
            df_long,
            indicator_code,
            indicator_name,
        )
        frames.append(df_long)

    all_indicators_df = pd.concat(frames, ignore_index=True)
    all_indicators_df = all_indicators_df.reset_index(drop=True)
    all_indicators_df["ingested_at"] = pd.Timestamp.now(tz="UTC")

    return all_indicators_df