---
title: Country Detail
---

# Country Detail

Explore how food security pressure has changed over time for a selected country.

[Back to Overview](/)

```sql country_filter
SELECT DISTINCT
    country_code,
    country_name
FROM food_security.country_food_security_yearly
ORDER BY country_name
```

<Dropdown
    data={country_filter}
    name=selected_country
    value=country_code
    label=country_name
    defaultValue="HTI"
    title="Country"
/>

```sql country_kpis
SELECT
    country_name,
    MIN(year) AS first_year,
    MAX(year) AS last_year,

    ROUND(AVG(overall_pressure_score), 2) AS avg_pressure_score,
    ROUND(MAX(undernourishment_prevalence_pct), 1) AS max_undernourishment_percent,
    ROUND(
        MAX(undernourishment_prevalence_pct)
        - MIN(undernourishment_prevalence_pct),
        1
    ) AS undernourishment_change_pp,

    CAST(ROUND(AVG(overall_pressure_score), 2) AS VARCHAR) AS avg_pressure_score_display,
    CAST(ROUND(MAX(undernourishment_prevalence_pct), 1) AS VARCHAR) || '%' AS max_undernourishment_display,
    CAST(ROUND(
        MAX(undernourishment_prevalence_pct)
        - MIN(undernourishment_prevalence_pct),
        1
    ) AS VARCHAR) || ' pp' AS undernourishment_change_display

FROM food_security.country_food_security_yearly
WHERE country_code = '${inputs.selected_country.value}'
GROUP BY country_name
```

<BigValue
    data={country_kpis}
    value=avg_pressure_score_display
    title="Avg Pressure Score"
/>

<BigValue
    data={country_kpis}
    value=max_undernourishment_display
    title="Max Undernourishment"
/>

<BigValue
    data={country_kpis}
    value=undernourishment_change_display
    title="Change"
/>

<div class="grid grid-cols-2 gap-6">

<div>

## Undernourishment Over Time

```sql undernourishment_trend
SELECT
    year,
    undernourishment_prevalence_pct AS undernourishment_percent
FROM food_security.country_food_security_yearly
WHERE country_code = '${inputs.selected_country.value}'
ORDER BY year
```

<LineChart
    data={undernourishment_trend}
    x=year
    y=undernourishment_percent
    xType=category
    title="Undernourishment (% of population)"
/>

</div>

<div>

## Pressure Score Over Time

```sql pressure_trend
SELECT
    year,
    overall_pressure_score AS pressure_score
FROM food_security.country_food_security_yearly
WHERE country_code = '${inputs.selected_country.value}'
ORDER BY year
```

<LineChart
    data={pressure_trend}
    x=year
    y=pressure_score
    xType=category
    yFmt="0.0"
    title="Overall Pressure Score"
/>

</div>

</div>

## Driver Scores Over Time

```sql driver_scores
SELECT
    year,
    'Price pressure' AS driver,
    price_pressure_score AS score
FROM food_security.country_food_security_yearly
WHERE country_code = '${inputs.selected_country.value}'

UNION ALL

SELECT
    year,
    'Economic vulnerability' AS driver,
    economic_vulnerability_score AS score
FROM food_security.country_food_security_yearly
WHERE country_code = '${inputs.selected_country.value}'

UNION ALL

SELECT
    year,
    'Food availability' AS driver,
    food_availability_pressure_score AS score
FROM food_security.country_food_security_yearly
WHERE country_code = '${inputs.selected_country.value}'

ORDER BY year, driver
```

<LineChart 
    data={driver_scores} 
    x=year 
    y=score 
    series=driver 
    xType=category
    yFmt="0.0"
    title="Driver Scores Over Time" 
/>

---

## Country-Year Details

```sql country_detail
SELECT
    year,
    ROUND(undernourishment_prevalence_pct, 1) AS undernourishment_percent,
    ROUND(food_price_inflation_pct, 1) AS food_inflation_percent,
    ROUND(gdp_per_capita_current_usd, 0) AS gdp_per_capita_usd,
    ROUND(TRY_CAST(food_supply_variability_kcal AS DOUBLE), 1) AS supply_variability_kcal,
    ROUND(overall_pressure_score, 2) AS pressure_score,
    main_pressure_driver
FROM food_security.country_food_security_yearly
WHERE country_code = '${inputs.selected_country.value}'
ORDER BY year
```

<DataTable data={country_detail} rowShading=true>
    <Column id=year />
    <Column id=undernourishment_percent title="Undernourishment" />
    <Column id=food_inflation_percent title="Food Inflation" />
    <Column id=gdp_per_capita_usd title="GDP / Capita" />
    <Column id=supply_variability_kcal title="Supply Variability" />
    <Column id=pressure_score title="Pressure Score" fmt="0.00" />
    <Column id=main_pressure_driver title="Main Driver" />
</DataTable>