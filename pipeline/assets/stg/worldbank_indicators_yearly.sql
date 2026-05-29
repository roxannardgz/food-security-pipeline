/* @bruin
name: stg.worldbank_indicators_yearly
type: duckdb.sql
connection: duckdb_default

depends:
  - raw.worldbank_indicators

materialization:
  type: table
  strategy: create+replace

columns:
  - name: country_code
    checks:
      - name: not_null
  - name: indicator_code
    checks:
      - name: not_null
  - name: year
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
    economy AS country_code,
    country AS country_name,
    year,
    indicator_code,
    indicator_name,
    value
    
FROM raw.worldbank_indicators

WHERE 
    year BETWEEN {{ var.start_year }} AND {{ var.end_year }}

ORDER BY
    country_code,
    year,
    indicator_code;