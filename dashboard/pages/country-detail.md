---
title: Country Detail
hide_title: true
sidebar_position: 3
---

# Country Details

Explore how food security pressure has changed over time for a selected country.

[Back to Overview](/)


<!-- ----------- FILTERS ----------- -->

```sql country_filter
SELECT DISTINCT
    country_code,
    country_name
FROM food_security.country_food_security_yearly
ORDER BY country_name
```



```sql year_window_options
SELECT
    5 AS min_years,
    COUNT(DISTINCT year) AS max_years,
    LEAST(5, COUNT(DISTINCT year)) AS default_years
FROM food_security.country_food_security_yearly
WHERE country_code = '${inputs.selected_country.value}'
```

<div class="max-w-xl">
<div class="grid grid-cols-2 gap-4">

<div>

<Dropdown
    data={country_filter}
    name=selected_country
    value=country_code
    label=country_name
    defaultValue="HTI"
    title="Country"
/>

</div>

<div>

<Slider
    data={year_window_options}
    name=years_to_show
    title="Years to Show"
    minColumn=min_years
    maxColumn=max_years
    defaultValue=default_years
    step=1
/>

</div>

</div>
</div>


<!-- ----------- KPIS SECTION ----------- -->

```sql country_kpis
WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${inputs.selected_country.value}'
),

country_data AS (
    SELECT
        c.country_name,
        c.year,
        c.overall_pressure_score,
        c.undernourishment_prevalence_pct
    FROM food_security.country_food_security_yearly AS c
    CROSS JOIN country_years AS cy
    WHERE c.country_code = '${inputs.selected_country.value}'
      AND c.year >= cy.max_year - ${inputs.years_to_show} + 1
),

ranked AS (
    SELECT
        *,
        ROW_NUMBER() OVER (ORDER BY year ASC) AS first_year_rank,
        ROW_NUMBER() OVER (ORDER BY year DESC) AS last_year_rank
    FROM country_data
)

SELECT
    country_name,
    MIN(year) AS first_year,
    MAX(year) AS last_year,

    ROUND(AVG(overall_pressure_score), 2) AS avg_pressure_score,
    ROUND(MAX(undernourishment_prevalence_pct), 1) AS max_undernourishment_percent,

    ROUND(
        MAX(CASE WHEN last_year_rank = 1 THEN undernourishment_prevalence_pct END)
        -
        MAX(CASE WHEN first_year_rank = 1 THEN undernourishment_prevalence_pct END),
        1
    ) AS undernourishment_change_pp,

    CAST(ROUND(AVG(overall_pressure_score), 2) AS VARCHAR) AS avg_pressure_score_display,
    CAST(ROUND(MAX(undernourishment_prevalence_pct), 1) AS VARCHAR) || '%' AS max_undernourishment_display,
    CAST(ROUND(
        MAX(CASE WHEN last_year_rank = 1 THEN undernourishment_prevalence_pct END)
        -
        MAX(CASE WHEN first_year_rank = 1 THEN undernourishment_prevalence_pct END),
        1
    ) AS VARCHAR) || ' pp' AS undernourishment_change_display

FROM ranked
GROUP BY country_name
```

--- 

<div class="max-w-4xl mx-auto">

<Grid cols=3>
    <BigValue
        data={country_kpis}
        value=avg_pressure_score_display
        title="Avg Pressure Score"
        fmt=pct
    />

    <BigValue
        data={country_kpis}
        value=max_undernourishment_display
        title="Max Undernourishment"
    />

    <BigValue
        data={country_kpis}
        value=undernourishment_change_display
        title="Change in Selected Period"
    />
</Grid>

</div>

---

<div class="grid grid-cols-2 gap-6">

<div>


<!-- ----------- 1ST ROW ----------- -->
<!-- ----------- UNDERNOURISHMENT ----------- -->

## Undernourishment Over Time

```sql undernourishment_trend
WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${inputs.selected_country.value}'
)

SELECT
    c.year,
    c.undernourishment_prevalence_pct AS undernourishment_percent
FROM food_security.country_food_security_yearly AS c
CROSS JOIN country_years AS cy
WHERE c.country_code = '${inputs.selected_country.value}'
  AND c.year >= cy.max_year - ${inputs.years_to_show} + 1
ORDER BY c.year
```

<LineChart
    data={undernourishment_trend}
    x=year
    y=undernourishment_percent
    xType=category
    yFmt="0'%'"
    title="Undernourishment (% of population)"
    colorPalette={['#B85C38']}
    echartsOptions={{
        color: ['#B85C38'],
        title: {
            textStyle: {
                color: '#4B4038',
                fontWeight: 'normal'
            }
        },
        yAxis: {
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#F5F5F5',
                    width: 1,
                    type: 'solid'
                }
            }
        },
        xAxis: {
            splitLine: {
                show: false
            }
        }
    }}
/>

</div>

<div>

<!-- ----------- PRESSURE SCORE ----------- -->
## Pressure Score Over Time

```sql pressure_trend
WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${inputs.selected_country.value}'
)

SELECT
    c.year,
    c.overall_pressure_score * 100 AS pressure_score_pct
FROM food_security.country_food_security_yearly AS c
CROSS JOIN country_years AS cy
WHERE c.country_code = '${inputs.selected_country.value}'
  AND c.year >= cy.max_year - ${inputs.years_to_show} + 1
ORDER BY c.year
```

<LineChart
    data={pressure_trend}
    x=year
    y=pressure_score_pct
    xType=category
    yFmt="0'%'"
    title="Overall Pressure Score"
    colorPalette={['#B85C38']}
    echartsOptions={{
        color: ['#B85C38'],
        title: {
            textStyle: {
                color: '#4B4038',
                fontWeight: 'normal'
            }
        },
        yAxis: {
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#F5F5F5',
                    width: 1,
                    type: 'solid'
                }
            }
        },
        xAxis: {
            splitLine: {
                show: false
            }
        }
    }}
/>

</div>

</div>

<!-- ----------- 2nd ROW ----------- -->
<!-- ----------- DRIVER SCORES ----------- -->
## Driver Scores Over Time

```sql driver_scores
WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${inputs.selected_country.value}'
),

filtered_country AS (
    SELECT
        c.*
    FROM food_security.country_food_security_yearly AS c
    CROSS JOIN country_years AS cy
    WHERE c.country_code = '${inputs.selected_country.value}'
      AND c.year >= cy.max_year - ${inputs.years_to_show} + 1
)

SELECT
    year,
    'Price pressure' AS driver,
    price_pressure_score * 100 AS score_pct
FROM filtered_country

UNION ALL

SELECT
    year,
    'Economic vulnerability' AS driver,
    economic_vulnerability_score * 100 AS score_pct
FROM filtered_country

UNION ALL

SELECT
    year,
    'Food availability' AS driver,
    food_availability_pressure_score * 100 AS score_pct
FROM filtered_country

ORDER BY year, driver
```

<LineChart 
    data={driver_scores} 
    x=year 
    y=score_pct 
    series=driver 
    xType=category
    yFmt="0'%'"
    title="Driver Scores Over Time"
    colorPalette={['#B85C38', '#D99A74', '#7A5C45']}
    echartsOptions={{
        color: ['#B85C38', '#D99A74', '#7A5C45'],
        title: {
            textStyle: {
                color: '#4B4038',
                fontWeight: 'normal'
            }
        },
        yAxis: {
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#F5F5F5',
                    width: 1,
                    type: 'solid'
                }
            }
        },
        xAxis: {
            splitLine: {
                show: false
            }
        }
    }}
/>

---


<!-- ----------- 3rd ROW ----------- -->
<!-- ----------- DETAILS ----------- -->

## Country-Year Details

```sql country_detail
WITH country_years AS (
    SELECT
        MAX(year) AS max_year
    FROM food_security.country_food_security_yearly
    WHERE country_code = '${inputs.selected_country.value}'
)

SELECT
    c.year,
    ROUND(c.undernourishment_prevalence_pct, 1) AS undernourishment_percent,
    ROUND(c.food_price_inflation_pct, 1) AS food_inflation_percent,
    ROUND(c.gdp_per_capita_current_usd, 0) AS gdp_per_capita_usd,
    ROUND(TRY_CAST(c.food_supply_variability_kcal AS DOUBLE), 1) AS supply_variability_kcal,
    ROUND(c.overall_pressure_score, 2) AS pressure_score,
    c.main_pressure_driver
FROM food_security.country_food_security_yearly AS c
CROSS JOIN country_years AS cy
WHERE c.country_code = '${inputs.selected_country.value}'
  AND c.year >= cy.max_year - ${inputs.years_to_show} + 1
ORDER BY c.year
```

<DataTable data={country_detail} rowShading=true>
    <Column id=year />
    <Column id=undernourishment_percent title="Undernourishment" />
    <Column id=food_inflation_percent title="Food Inflation" />
    <Column id=gdp_per_capita_usd title="GDP / Capita (USD)" />
    <Column id=supply_variability_kcal title="Supply Variability" />
    <Column id=pressure_score title="Pressure Score" fmt=pct />
    <Column id=main_pressure_driver title="Main Driver" />
</DataTable>