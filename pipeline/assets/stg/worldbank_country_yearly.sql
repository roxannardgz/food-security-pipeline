/* @bruin
name: stg.worldbank_country_yearly
type: duckdb.sql
connection: duckdb_default

depends:
  - raw.worldbank_indicators

materialization:
  type: table
  strategy: create+replace
@bruin */


SELECT
    economy AS country_code,
    country AS country_name,
    year,

    MAX(CASE
        WHEN indicator_code = 'NY.GDP.PCAP.CD'
        THEN value
    END) AS gdp_per_capita_current_usd,

    MAX(CASE
        WHEN indicator_code = 'SP.POP.TOTL'
        THEN value
    END) AS population_total,

    MAX(CASE
        WHEN indicator_code = 'FP.CPI.TOTL.ZG'
        THEN value
    END) AS inflation_consumer_prices_pct,

    MAX(CASE
        WHEN indicator_code = 'SI.POV.DDAY'
        THEN value
    END) AS poverty_headcount_215_pct

FROM raw.worldbank_indicators

GROUP BY
    country_code,
    country_name,
    year

ORDER BY
    country_code,
    year;