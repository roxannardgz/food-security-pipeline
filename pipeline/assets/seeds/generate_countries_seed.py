"""
Generate the countries seed CSV.
Output: pipeline/seeds/countries.csv

External requirement: requests

Sources:
    - mledoze/countries JSON:
      used for ISO3, M49 numeric code, country names, capital city,
      latitude/longitude, UN-style region/subregion, independent flag,
      and UN membership flag.
    - World Bank Country API:
      used for income group and World Bank region.
"""

import csv
from pathlib import Path

import requests


# Country/reference metadata:
# ISO3, numeric country/area code, names, capital, coordinates, UN-style region/subregion.
COUNTRIES_URL = "https://raw.githubusercontent.com/mledoze/countries/master/countries.json"

# World Bank metadata:
# income group and World Bank region.
WB_COUNTRIES_URL = "https://api.worldbank.org/v2/country?format=json&per_page=300"


def fetch_countries() -> list[dict]:
    response = requests.get(COUNTRIES_URL, timeout=30)
    response.raise_for_status()
    return response.json()


def fetch_wb_country_metadata() -> dict[str, dict]:
    """Return a dict of iso3 -> {income_group, wb_region}."""
    response = requests.get(WB_COUNTRIES_URL, timeout=30)
    response.raise_for_status()
    data = response.json()

    # World Bank API returns [metadata, data]
    countries = data[1]

    result = {}

    for c in countries:
        iso3 = c.get("id", "").strip()

        if not iso3:
            continue

        result[iso3] = {
            "income_group": c.get("incomeLevel", {}).get("value", ""),
            "wb_region": c.get("region", {}).get("value", ""),
        }

    return result


def build_seed_rows(
    countries: list[dict],
    wb_metadata: dict[str, dict],
) -> list[dict]:
    rows = []

    for c in countries:
        iso3 = c.get("cca3", "").strip()
        m49 = c.get("ccn3", "").strip()

        # Keep entries with ISO3 and numeric country/area code.
        # Do not filter to UN members here; keep scope decisions for staging/marts.
        if not iso3 or not m49:
            continue

        name = c.get("name", {}).get("common", "")
        official_name = c.get("name", {}).get("official", "")

        capital_list = c.get("capital", [])
        capital = capital_list[0] if capital_list else ""

        # mledoze provides latlng as [latitude, longitude]
        latlng = c.get("latlng", [])
        if len(latlng) == 2:
            latitude = latlng[0]
            longitude = latlng[1]
        else:
            continue

        wb_data = wb_metadata.get(iso3, {})

        rows.append({
            "iso3": iso3,
            "m49": m49,
            "country_name": name,
            "official_name": official_name,
            "capital_city": capital,
            "latitude": latitude,
            "longitude": longitude,
            "un_region": c.get("region", ""),
            "un_subregion": c.get("subregion", ""),
            "independent": c.get("independent"),
            "un_member": c.get("unMember"),
            "income_group": wb_data.get("income_group", ""),
            "wb_region": wb_data.get("wb_region", ""),
        })

    return sorted(rows, key=lambda x: x["iso3"])


def write_seed_csv(rows: list[dict], output_path: Path) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)

    fieldnames = [
        "iso3",
        "m49",
        "country_name",
        "official_name",
        "capital_city",
        "latitude",
        "longitude",
        "un_region",
        "un_subregion",
        "independent",
        "un_member",
        "income_group",
        "wb_region",
    ]

    with output_path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def print_summary(rows: list[dict], output_path: Path) -> None:
    print(f"Saved to {output_path}")

    print("\nSample rows:")
    for row in rows[:5]:
        print(
            f"  {row['iso3']} | "
            f"{row['m49']} | "
            f"{row['country_name']:<30} | "
            f"{row['capital_city']:<20} | "
            f"{row['latitude']:>8.3f} | "
            f"{row['longitude']:>8.3f} | "
            f"{row['income_group']}"
        )

    missing_capital = [r for r in rows if not r["capital_city"]]
    missing_income = [r for r in rows if not r["income_group"]]
    non_un_members = [r for r in rows if not r["un_member"]]

    print(f"\nRows in seed: {len(rows)}")

    print(f"Countries/entities with no capital: {len(missing_capital)}")
    if missing_capital:
        print(f"  {[r['iso3'] for r in missing_capital]}")

    print(f"Countries/entities with no income group: {len(missing_income)}")
    if missing_income:
        print(f"  {[r['iso3'] for r in missing_income][:10]} ...")

    print(f"Non-UN-member entities kept for reference: {len(non_un_members)}")
    if non_un_members:
        print(f"  {[r['iso3'] for r in non_un_members[:10]]} ...")


def main() -> None:
    output_path = Path("pipeline/seeds/countries.csv")

    print("Fetching country data...")
    countries = fetch_countries()
    print(f"  {len(countries)} entries found")

    print("Fetching World Bank country metadata...")
    wb_metadata = fetch_wb_country_metadata()
    print(f"  {len(wb_metadata)} World Bank entries found")

    print("Building seed rows...")
    rows = build_seed_rows(countries, wb_metadata)
    print(f"  {len(rows)} countries/entities after filtering")

    write_seed_csv(rows, output_path)
    print_summary(rows, output_path)


if __name__ == "__main__":
    main()