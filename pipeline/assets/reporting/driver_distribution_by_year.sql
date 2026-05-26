/* @bruin
name: reporting.driver_distribution_by_year
type: duckdb.sql
connection: duckdb_default

depends:
  - mart.country_food_security_yearly

materialization:
  type: table
  strategy: create+replace
@bruin */

SELECT
    year,
    main_pressure_driver,
    COUNT(*) AS country_count,
    ROUND(
        COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (PARTITION BY year),
        2
    ) AS share_pct
FROM mart.country_food_security_yearly
WHERE main_pressure_driver IS NOT NULL
GROUP BY
    year,
    main_pressure_driver
ORDER BY
    year,
    country_count DESC;