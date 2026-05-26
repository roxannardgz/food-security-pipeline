/* @bruin
name: stg.owid_undernourishment_yearly
type: duckdb.sql
connection: duckdb_default

depends:
  - raw.owid_undernourishment
  - seeds.countries

materialization:
  type: table
  strategy: create+replace

columns:
  - name: country_code
    checks:
      - name: not_null
  - name: year
    checks:
      - name: not_null
  - name: undernourishment_prevalence_pct
    checks:
      - name: not_null

custom_checks:
  - name: unique_country_year
    description: "Combination of country_code and year should be unique"
    count: 0
    query: |
      SELECT
          country_code,
          year,
          COUNT(*) AS row_count
      FROM {{ this }}
      GROUP BY
          country_code,
          year
      HAVING COUNT(*) > 1
@bruin */

SELECT
    c.iso3 AS country_code,
    c.country_name,
    raw.country_name_source,
    raw.year,
    raw.undernourishment_prevalence_pct,
    raw.source

FROM raw.owid_undernourishment AS raw

LEFT JOIN seeds.countries AS c
    ON raw.country_code = c.iso3

WHERE c.iso3 IS NOT NULL

ORDER BY
    raw.year,
    c.iso3;