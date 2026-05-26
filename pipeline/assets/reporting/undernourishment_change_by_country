/* @bruin
name: reporting.undernourishment_change_by_country
type: duckdb.sql
connection: duckdb_default

depends:
  - mart.country_food_security_yearly

materialization:
  type: table
  strategy: create+replace
@bruin */

WITH valid_rows AS (
    SELECT
        country_code,
        country_name,
        un_region,
        un_subregion,
        income_group,
        year,
        undernourishment_prevalence_pct
    FROM mart.country_food_security_yearly
    WHERE undernourishment_prevalence_pct IS NOT NULL
),

ranked AS (
    SELECT
        *,
        ROW_NUMBER() OVER (
            PARTITION BY country_code
            ORDER BY year ASC
        ) AS first_year_rank,
        ROW_NUMBER() OVER (
            PARTITION BY country_code
            ORDER BY year DESC
        ) AS last_year_rank,
        COUNT(*) OVER (
            PARTITION BY country_code
        ) AS years_of_data
    FROM valid_rows
),

country_bounds AS (
    SELECT
        country_code,
        country_name,
        un_region,
        un_subregion,
        income_group,
        years_of_data,

        MAX(CASE
            WHEN first_year_rank = 1
            THEN year
        END) AS first_year,

        MAX(CASE
            WHEN first_year_rank = 1
            THEN undernourishment_prevalence_pct
        END) AS first_year_pct,

        MAX(CASE
            WHEN last_year_rank = 1
            THEN year
        END) AS last_year,

        MAX(CASE
            WHEN last_year_rank = 1
            THEN undernourishment_prevalence_pct
        END) AS last_year_pct

    FROM ranked
    GROUP BY
        country_code,
        country_name,
        un_region,
        un_subregion,
        income_group,
        years_of_data
)

SELECT
    country_code,
    country_name,
    un_region,
    un_subregion,
    income_group,
    first_year,
    last_year,
    years_of_data,
    first_year_pct,
    last_year_pct,
    ROUND(last_year_pct - first_year_pct, 2) AS absolute_change_pct,
    ROUND(
        (last_year_pct - first_year_pct) / NULLIF(first_year_pct, 0) * 100,
        2
    ) AS relative_change_pct
FROM country_bounds
WHERE years_of_data >= 2
ORDER BY absolute_change_pct DESC NULLS LAST;