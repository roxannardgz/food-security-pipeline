/* @bruin
name: reporting.regional_pressure_summary
type: duckdb.sql
connection: duckdb_default

depends:
  - mart.country_food_security_yearly

materialization:
  type: table
  strategy: create+replace
@bruin */

WITH regional_metrics AS (
    SELECT
        year,
        un_region,
        COUNT(DISTINCT country_code) AS country_count,
        ROUND(AVG(undernourishment_prevalence_pct), 2) AS avg_undernourishment_pct,
        ROUND(AVG(food_price_inflation_pct), 2) AS avg_food_price_inflation_pct,
        ROUND(AVG(gdp_per_capita_current_usd), 0) AS avg_gdp_per_capita,
        ROUND(AVG(overall_pressure_score), 4) AS avg_overall_pressure_score
    FROM mart.country_food_security_yearly
    WHERE un_region IS NOT NULL
    GROUP BY
        year,
        un_region
),

driver_counts AS (
    SELECT
        year,
        un_region,
        main_pressure_driver,
        COUNT(*) AS driver_country_count,
        ROW_NUMBER() OVER (
            PARTITION BY year, un_region
            ORDER BY COUNT(*) DESC, main_pressure_driver
        ) AS driver_rank
    FROM mart.country_food_security_yearly
    WHERE un_region IS NOT NULL
      AND main_pressure_driver IS NOT NULL
    GROUP BY
        year,
        un_region,
        main_pressure_driver
),

dominant_driver AS (
    SELECT
        year,
        un_region,
        main_pressure_driver AS dominant_pressure_driver,
        driver_country_count AS dominant_driver_country_count
    FROM driver_counts
    WHERE driver_rank = 1
)

SELECT
    rm.year,
    rm.un_region,
    rm.country_count,
    rm.avg_undernourishment_pct,
    rm.avg_food_price_inflation_pct,
    rm.avg_gdp_per_capita,
    rm.avg_overall_pressure_score,
    dd.dominant_pressure_driver,
    dd.dominant_driver_country_count
FROM regional_metrics AS rm
LEFT JOIN dominant_driver AS dd
    ON rm.year = dd.year
   AND rm.un_region = dd.un_region
ORDER BY
    rm.year,
    rm.avg_overall_pressure_score DESC NULLS LAST;