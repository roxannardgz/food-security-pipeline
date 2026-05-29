/* @bruin
name: stg.open_meteo_country_yearly
type: duckdb.sql
connection: duckdb_default

depends:
  - raw.open_meteo_daily_weather

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
  - name: weather_observation_days
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
    iso3 AS country_code,
    country_name,
    EXTRACT(year FROM date) AS year,
    ROUND(AVG(temperature_2m_mean), 4) AS avg_temp_mean,
    ROUND(AVG(temperature_2m_max), 4) AS avg_temp_max,
    ROUND(AVG(temperature_2m_min), 4) AS avg_temp_min,
    ROUND(SUM(precipitation_sum), 4) AS total_precipitation,
    COUNT(DISTINCT date) AS weather_observation_days
FROM 
    raw.open_meteo_daily_weather
WHERE 
  EXTRACT(YEAR FROM date) BETWEEN {{ var.start_year }} AND {{ var.end_year }}
GROUP BY
    country_code, 
    country_name, 
    year
ORDER BY
    country_code, 
    year;