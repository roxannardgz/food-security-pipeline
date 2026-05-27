/* @bruin
name: stg.fao_consumer_price_indices_yearly
type: duckdb.sql
connection: duckdb_default

depends:
  - raw.fao_consumer_price_indices
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
  - name: indicator_code
    checks:
      - name: not_null
  - name: value
    checks:
      - name: not_null
  - name: monthly_observation_count
    checks:
      - name: not_null

custom_checks:
  - name: unique_country_year_indicator
    description: "Combination of country_code, year, and indicator_code should be unique"
    count: 0
    query: |
      SELECT
          country_code,
          year,
          indicator_code,
          COUNT(*) AS row_count
      FROM {{ this }}
      GROUP BY
          country_code,
          year,
          indicator_code
      HAVING COUNT(*) > 1
@bruin */

SELECT
    c.iso3 AS country_code,
    c.country_name,
    LPAD(TRIM(REPLACE(CAST(cpi.area_code_m49x AS VARCHAR), '''', '')), 3, '0') AS country_code_m49,
    cpi.item_code AS indicator_code,
    cpi.item AS indicator,
    cpi.year,
    cpi.unit,
    AVG(cpi.value) AS value,
    COUNT(*) AS monthly_observation_count,
    STRING_AGG(DISTINCT cpi.flag, ', ') AS flags

FROM raw.fao_consumer_price_indices AS cpi

LEFT JOIN seeds.countries AS c
    ON LPAD(TRIM(REPLACE(CAST(cpi.area_code_m49x AS VARCHAR), '''', '')), 3, '0')
     = LPAD(TRIM(CAST(c.m49 AS VARCHAR)), 3, '0')

WHERE c.iso3 IS NOT NULL
  AND cpi.element = 'Value'
  AND CAST(cpi.year AS INTEGER) BETWEEN {{ var.start_year }} AND {{ var.end_year }}

GROUP BY
    c.iso3,
    c.country_name,
    country_code_m49,
    cpi.item_code,
    cpi.item,
    cpi.year,
    cpi.unit

ORDER BY
    cpi.year,
    c.iso3,
    cpi.item_code;