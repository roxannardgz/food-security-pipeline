/* @bruin
name: mart.country_food_security_yearly
type: duckdb.sql
connection: duckdb_default

depends:
  - stg.owid_undernourishment_yearly
  - stg.fao_food_security_indicators_yearly
  - stg.fao_consumer_price_indices_yearly
  - stg.worldbank_indicators_yearly
  - stg.open_meteo_country_yearly
  - seeds.countries

materialization:
  type: table
  strategy: create+replace

columns:
  - name: country_code
    checks:
      - name: not_null
  - name: country_name
    checks:
      - name: not_null
  - name: year
    checks:
      - name: not_null
  - name: undernourishment_prevalence_pct
    checks:
      - name: not_null

custom_checks:
  - name: unique_country_year
    description: "Each country/year combination should be unique"
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

  - name: pressure_scores_between_0_and_1
    description: "Pressure scores should be between 0 and 1"
    count: 0
    query: |
      SELECT *
      FROM {{ this }}
      WHERE overall_pressure_score < 0
         OR overall_pressure_score > 1
         OR food_security_pressure_score < 0
         OR food_security_pressure_score > 1
         OR price_pressure_score < 0
         OR price_pressure_score > 1
         OR economic_vulnerability_score < 0
         OR economic_vulnerability_score > 1
         OR food_availability_pressure_score < 0
         OR food_availability_pressure_score > 1

  - name: mart_years_within_analysis_range
    description: "Mart should only contain years within the configured analysis range"
    count: 0
    query: |
      SELECT *
      FROM {{ this }}
      WHERE year < {{ var.analysis_start_year }}
         OR year > {{ var.analysis_end_year }}

  - name: analysis_years_have_weather_coverage
    description: "Every year in the analysis range should exist in the yearly weather staging table"
    count: 0
    query: |
      WITH expected_years AS (
          SELECT generate_series AS year
          FROM generate_series(
              {{ var.analysis_start_year }},
              {{ var.analysis_end_year }}
          )
      ),

      weather_years AS (
          SELECT DISTINCT year
          FROM stg.open_meteo_country_yearly
      )

      SELECT
          expected_years.year
      FROM expected_years
      LEFT JOIN weather_years
          ON expected_years.year = weather_years.year
      WHERE weather_years.year IS NULL

  - name: analysis_years_have_undernourishment_coverage
    description: "Every year in the analysis range should exist in the undernourishment staging table"
    count: 0
    query: |
      WITH expected_years AS (
          SELECT generate_series AS year
          FROM generate_series(
              {{ var.analysis_start_year }},
              {{ var.analysis_end_year }}
          )
      ),

      undernourishment_years AS (
          SELECT DISTINCT CAST(year AS INTEGER) AS year
          FROM stg.owid_undernourishment_yearly
      )

      SELECT
          expected_years.year
      FROM expected_years
      LEFT JOIN undernourishment_years
          ON expected_years.year = undernourishment_years.year
      WHERE undernourishment_years.year IS NULL
@bruin */

WITH spine AS (
    SELECT
        country_code,
        country_name,
        CAST(year AS INTEGER) AS year,
        undernourishment_prevalence_pct
    FROM stg.owid_undernourishment_yearly
    WHERE CAST(year AS INTEGER)
        BETWEEN {{ var.analysis_start_year }} AND {{ var.analysis_end_year }}
),

country_meta AS (
    SELECT
        iso3 AS country_code,
        un_region,
        un_subregion,
        income_group
    FROM seeds.countries
),

food_prices AS (
    SELECT
        country_code,
        CAST(year AS INTEGER) AS year,
        value AS food_price_inflation_pct,
        monthly_observation_count AS food_price_inflation_months
    FROM stg.fao_consumer_price_indices_yearly
    WHERE CAST(indicator_code AS VARCHAR) = '23014'
),

fao_indicators AS (
    SELECT
        country_code,
        CAST(year AS INTEGER) AS year,

        MAX(CASE
            WHEN indicator_code = '220001'
            THEN value
        END) AS dietary_energy_supply_kcal,

        MAX(CASE
            WHEN indicator_code = '21031'
            THEN value
        END) AS food_supply_variability_kcal,

        MAX(CASE
            WHEN indicator_code = '21058'
            THEN value
        END) AS caloric_consumption_cv,

        MAX(CASE
            WHEN indicator_code = '21059'
            THEN value
        END) AS caloric_losses_retail_pct

    FROM stg.fao_food_security_indicators_yearly
    GROUP BY
        country_code,
        CAST(year AS INTEGER)
),

economics AS (
    SELECT
        country_code,
        CAST(year AS INTEGER) AS year,

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

    FROM stg.worldbank_indicators_yearly
    GROUP BY
        country_code,
        CAST(year AS INTEGER)
),

climate AS (
    SELECT
        country_code,
        CAST(year AS INTEGER) AS year,
        avg_temp_mean,
        avg_temp_max,
        avg_temp_min,
        total_precipitation,
        weather_observation_days
    FROM stg.open_meteo_country_yearly
),

joined AS (
    SELECT
        s.country_code,
        s.country_name,
        cm.un_region,
        cm.un_subregion,
        cm.income_group,
        s.year,

        -- Outcome / severity metric
        s.undernourishment_prevalence_pct,

        ROUND(
            s.undernourishment_prevalence_pct
                - LAG(s.undernourishment_prevalence_pct)
                    OVER (PARTITION BY s.country_code ORDER BY s.year),
            2
        ) AS undernourishment_yoy_change,

        -- Price pressure
        fp.food_price_inflation_pct,
        fp.food_price_inflation_months,

        -- Food availability / stability indicators
        fi.dietary_energy_supply_kcal,
        fi.food_supply_variability_kcal,
        fi.caloric_consumption_cv,
        fi.caloric_losses_retail_pct,

        -- Economic indicators
        e.gdp_per_capita_current_usd,
        e.poverty_headcount_215_pct,
        e.inflation_consumer_prices_pct,
        e.population_total,

        -- Climate context, not scored yet
        cl.avg_temp_mean,
        cl.avg_temp_max,
        cl.avg_temp_min,
        cl.total_precipitation,
        cl.weather_observation_days

    FROM spine AS s

    LEFT JOIN country_meta AS cm
        ON s.country_code = cm.country_code

    LEFT JOIN food_prices AS fp
        ON s.country_code = fp.country_code
       AND s.year = fp.year

    LEFT JOIN fao_indicators AS fi
        ON s.country_code = fi.country_code
       AND s.year = fi.year

    LEFT JOIN economics AS e
        ON s.country_code = e.country_code
       AND s.year = e.year

    LEFT JOIN climate AS cl
        ON s.country_code = cl.country_code
       AND s.year = cl.year
),

scored AS (
    SELECT
        *,

        -- Outcome severity: higher PoU = higher food security pressure
        ROUND(PERCENT_RANK() OVER (
            PARTITION BY year
            ORDER BY undernourishment_prevalence_pct ASC
        ), 4) AS food_security_pressure_score,

        -- Driver: higher food price inflation = higher price pressure
        CASE
            WHEN food_price_inflation_pct IS NOT NULL
            THEN ROUND(PERCENT_RANK() OVER (
                PARTITION BY year
                ORDER BY food_price_inflation_pct ASC NULLS LAST
            ), 4)
        END AS price_pressure_score,

        -- Driver: lower GDP per capita = higher economic vulnerability
        CASE
            WHEN gdp_per_capita_current_usd IS NOT NULL
            THEN ROUND(PERCENT_RANK() OVER (
                PARTITION BY year
                ORDER BY gdp_per_capita_current_usd DESC NULLS LAST
            ), 4)
        END AS economic_vulnerability_score,

        -- Driver: higher food supply variability = higher food availability pressure
        CASE
            WHEN food_supply_variability_kcal IS NOT NULL
            THEN ROUND(PERCENT_RANK() OVER (
                PARTITION BY year
                ORDER BY food_supply_variability_kcal ASC NULLS LAST
            ), 4)
        END AS food_availability_pressure_score

    FROM joined
),

final AS (
    SELECT
        *,

        ROUND((
            COALESCE(food_security_pressure_score, 0) +
            COALESCE(price_pressure_score, 0) +
            COALESCE(economic_vulnerability_score, 0) +
            COALESCE(food_availability_pressure_score, 0)
        ) / NULLIF((
            CASE WHEN food_security_pressure_score IS NOT NULL THEN 1 ELSE 0 END +
            CASE WHEN price_pressure_score IS NOT NULL THEN 1 ELSE 0 END +
            CASE WHEN economic_vulnerability_score IS NOT NULL THEN 1 ELSE 0 END +
            CASE WHEN food_availability_pressure_score IS NOT NULL THEN 1 ELSE 0 END
        ), 0), 4) AS overall_pressure_score,

        -- Main driver excludes food_security_pressure_score because PoU is the outcome,
        -- not an explanatory driver. Ties are resolved by CASE order.
        CASE
            WHEN price_pressure_score IS NULL
             AND economic_vulnerability_score IS NULL
             AND food_availability_pressure_score IS NULL
            THEN NULL

            WHEN GREATEST(
                COALESCE(price_pressure_score, -1),
                COALESCE(economic_vulnerability_score, -1),
                COALESCE(food_availability_pressure_score, -1)
            ) = COALESCE(price_pressure_score, -1)
            THEN 'price'

            WHEN GREATEST(
                COALESCE(price_pressure_score, -1),
                COALESCE(economic_vulnerability_score, -1),
                COALESCE(food_availability_pressure_score, -1)
            ) = COALESCE(economic_vulnerability_score, -1)
            THEN 'economic'

            ELSE 'food_availability'
        END AS main_pressure_driver

    FROM scored
)

SELECT *
FROM final
ORDER BY
    year,
    overall_pressure_score DESC NULLS LAST;