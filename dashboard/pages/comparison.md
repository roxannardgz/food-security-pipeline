---
title: Compare
hide_title: true
sidebar_position: 4
---

# Compare Countries

Compare food security pressure, undernourishment, selected indicators, and pressure drivers between two countries.

[Back to Overview](/)

<!-- ----------- COUNTRY COMPARISON HEADER ----------- -->

```sql country_filter
SELECT DISTINCT
    country_code,
    country_name
FROM food_security.country_food_security_yearly
ORDER BY country_name
```

```sql latest_year
SELECT
    MAX(year) AS year
FROM food_security.country_food_security_yearly
```

```sql country_a_snapshot
SELECT
    country_name,
    CAST(ROUND(overall_pressure_score * 100, 0) AS INTEGER) || '%' AS pressure_score_display,
    CAST(ROUND(undernourishment_prevalence_pct, 1) AS VARCHAR) || '%' AS undernourishment_display,
    main_pressure_driver
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code = '${inputs.country_a.value}'
```

```sql country_b_snapshot
SELECT
    country_name,
    CAST(ROUND(overall_pressure_score * 100, 0) AS INTEGER) || '%' AS pressure_score_display,
    CAST(ROUND(undernourishment_prevalence_pct, 1) AS VARCHAR) || '%' AS undernourishment_display,
    main_pressure_driver
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code = '${inputs.country_b.value}'
```

<div class="grid grid-cols-2 gap-8">

<div class="pr-8 border-r border-gray-200">

<div class="flex justify-end text-right">

<div class="w-72 text-right">

<Dropdown
    data={country_filter}
    name=country_a
    value=country_code
    label=country_name
    defaultValue="HTI"
    title="Country A"
/>

</div>

</div>

<div class="flex justify-end text-right">

<div class="w-72 text-right">

<Grid cols=1>
    <BigValue
        data={country_a_snapshot}
        value=pressure_score_display
        title="Pressure Score"
    />

    <BigValue
        data={country_a_snapshot}
        value=undernourishment_display
        title="Undernourishment"
    />

    <BigValue
        data={country_a_snapshot}
        value=main_pressure_driver
        title="Main Driver"
    />
</Grid>

</div>

</div>

</div>



<div class="pl-4">

<div class="flex justify-start">

<div class="w-72">

<Dropdown
    data={country_filter}
    name=country_b
    value=country_code
    label=country_name
    defaultValue="DOM"
    title="Country B"
/>

</div>

</div>

<Grid cols=1>
    <BigValue
        data={country_b_snapshot}
        value=pressure_score_display
        title="Pressure Score"
    />

    <BigValue
        data={country_b_snapshot}
        value=undernourishment_display
        title="Undernourishment"
    />

    <BigValue
        data={country_b_snapshot}
        value=main_pressure_driver
        title="Main Driver"
    />
</Grid>

</div>

</div>

<div class="text-sm text-gray-500 mt-2 text-center">
Showing latest available year: <Value data={latest_year} column=year fmt="0" />.
</div>


---

<!-- ----------- PRESSURE SCORE OVER TIME ----------- -->

## Overall Pressure Score Over Time

```sql pressure_comparison
SELECT
    year,
    country_name,
    overall_pressure_score AS pressure_score
FROM food_security.country_food_security_yearly
WHERE country_code IN (
    '${inputs.country_a.value}',
    '${inputs.country_b.value}'
)
ORDER BY year, country_name
```

<LineChart
    data={pressure_comparison}
    x=year
    y=pressure_score
    series=country_name
    xType=category
    yFmt=pct
    colorPalette={['#B85C38', '#D99A74']}
    echartsOptions={{
        color: ['#B85C38', '#D99A74'],
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

<!-- ----------- SELECTED INDICATOR OVER TIME ----------- -->

## Selected Indicator Over Time

```sql indicator_filter
SELECT 'undernourishment_prevalence_pct' AS indicator, 'Undernourishment (%)' AS indicator_label

UNION ALL

SELECT 'food_price_inflation_pct' AS indicator, 'Food Price Inflation (%)' AS indicator_label

UNION ALL

SELECT 'gdp_per_capita_current_usd' AS indicator, 'GDP per Capita (Current USD)' AS indicator_label

UNION ALL

SELECT 'poverty_headcount_215_pct' AS indicator, 'Poverty Headcount (%)' AS indicator_label

UNION ALL

SELECT 'food_supply_variability_kcal' AS indicator, 'Food Supply Variability' AS indicator_label

UNION ALL

SELECT 'avg_temp_mean' AS indicator, 'Average Temperature (°C)' AS indicator_label

UNION ALL

SELECT 'total_precipitation' AS indicator, 'Total Precipitation' AS indicator_label
```

<div class="flex justify-end">

<div class="w-72">

<Dropdown
    data={indicator_filter}
    name=selected_indicator
    value=indicator
    label=indicator_label
    defaultValue="undernourishment_prevalence_pct"
    title="Indicator"
/>

</div>

</div>

```sql selected_indicator_trend
SELECT
    year,
    country_name,
    CASE
        WHEN '${inputs.selected_indicator.value}' = 'undernourishment_prevalence_pct'
            THEN undernourishment_prevalence_pct
        WHEN '${inputs.selected_indicator.value}' = 'food_price_inflation_pct'
            THEN food_price_inflation_pct
        WHEN '${inputs.selected_indicator.value}' = 'gdp_per_capita_current_usd'
            THEN gdp_per_capita_current_usd
        WHEN '${inputs.selected_indicator.value}' = 'poverty_headcount_215_pct'
            THEN poverty_headcount_215_pct
        WHEN '${inputs.selected_indicator.value}' = 'food_supply_variability_kcal'
            THEN TRY_CAST(food_supply_variability_kcal AS DOUBLE)
        WHEN '${inputs.selected_indicator.value}' = 'avg_temp_mean'
            THEN avg_temp_mean
        WHEN '${inputs.selected_indicator.value}' = 'total_precipitation'
            THEN total_precipitation
    END AS indicator_value
FROM food_security.country_food_security_yearly
WHERE country_code IN (
    '${inputs.country_a.value}',
    '${inputs.country_b.value}'
)
ORDER BY year, country_name
```

<LineChart
    data={selected_indicator_trend}
    x=year
    y=indicator_value
    series=country_name
    xType=category
    colorPalette={['#B85C38', '#D99A74']}
    echartsOptions={{
        color: ['#B85C38', '#D99A74'],
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

<!-- ----------- DRIVER SCORE COMPARISON ----------- -->

## Driver Score Comparison

<div class="text-sm text-gray-500">
Driver scores shown for <Value data={latest_year} column=year fmt="0" />.
</div>

```sql driver_score_comparison
SELECT
    country_name,
    'Price Pressure' AS driver,
    price_pressure_score AS score
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code IN (
      '${inputs.country_a.value}',
      '${inputs.country_b.value}'
  )

UNION ALL

SELECT
    country_name,
    'Economic Vulnerability' AS driver,
    economic_vulnerability_score AS score
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code IN (
      '${inputs.country_a.value}',
      '${inputs.country_b.value}'
  )

UNION ALL

SELECT
    country_name,
    'Food Availability' AS driver,
    food_availability_pressure_score AS score
FROM food_security.country_food_security_yearly
WHERE year = (
    SELECT MAX(year)
    FROM food_security.country_food_security_yearly
)
  AND country_code IN (
      '${inputs.country_a.value}',
      '${inputs.country_b.value}'
  )

ORDER BY driver, country_name
```

<BarChart
    data={driver_score_comparison}
    x=driver
    y=score
    series=country_name
    type=grouped
    yFmt=pct
    echartsOptions={{
        color: ['#B85C38', '#D99A74'],
        title: {
            textStyle: {
                color: '#4B4038',
                fontWeight: 'normal'
            }
        },
        yAxis: {
            max: 1,
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