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
GROUP BY
    country_code, 
    country_name, 
    year
ORDER BY
    country_code, 
    year;