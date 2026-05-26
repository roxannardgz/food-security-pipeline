/* @bruin
name: stg.fao_food_security_indicators_yearly
type: duckdb.sql
connection: duckdb_default

depends:
  - raw.fao_food_security
  - seeds.countries

materialization:
  type: table
  strategy: create+replace
@bruin */

SELECT
    c.iso3 AS country_code,
    c.country_name,
    LPAD(TRIM(REPLACE(CAST(fs.area_code_m49x AS VARCHAR), '''', '')), 3, '0') AS country_code_m49,
    fs.item_code AS indicator_code,
    fs.item AS indicator,
    fs.year,
    fs.unit,

    MAX(CASE
        WHEN fs.element = 'Value'
        THEN fs.value
    END) AS value,

    MAX(CASE
        WHEN fs.element = 'Confidence interval: Lower bound'
        THEN fs.value
    END) AS confidence_interval_lower_bound,

    MAX(CASE
        WHEN fs.element = 'Confidence interval: Upper bound'
        THEN fs.value
    END) AS confidence_interval_upper_bound,

    MAX(CASE
        WHEN fs.element = 'Value'
        THEN fs.flag
    END) AS value_flag

FROM raw.fao_food_security AS fs

LEFT JOIN seeds.countries AS c
    ON LPAD(TRIM(REPLACE(CAST(fs.area_code_m49x AS VARCHAR), '''', '')), 3, '0')
     = LPAD(TRIM(CAST(c.m49 AS VARCHAR)), 3, '0')

WHERE c.iso3 IS NOT NULL

GROUP BY
    c.iso3,
    c.country_name,
    country_code_m49,
    fs.item_code,
    fs.item,
    fs.year,
    fs.unit

ORDER BY
    fs.year,
    c.iso3,
    fs.item_code;