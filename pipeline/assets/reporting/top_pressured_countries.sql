/* @bruin
name: reporting.top_pressured_countries
type: duckdb.sql
connection: duckdb_default

depends:
  - mart.country_food_security_yearly

materialization:
  type: table
  strategy: create+replace
@bruin */

WITH ranked AS (
    SELECT
        year,
        country_code,
        country_name,
        un_region,
        un_subregion,
        income_group,
        undernourishment_prevalence_pct,
        food_price_inflation_pct,
        gdp_per_capita_current_usd,
        food_supply_variability_kcal,
        overall_pressure_score,
        main_pressure_driver,
        ROW_NUMBER() OVER (
            PARTITION BY year
            ORDER BY overall_pressure_score DESC NULLS LAST
        ) AS rank_within_year
    FROM mart.country_food_security_yearly
    WHERE overall_pressure_score IS NOT NULL
)

SELECT *
FROM ranked
WHERE rank_within_year <= 20
ORDER BY
    year,
    rank_within_year;