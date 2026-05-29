---
title: Global Food Security Pressure Dashboard
---

# Global Food Security Pressure Dashboard

A country-year analysis tracking undernourishment, food prices, economic vulnerability, and food supply stability across 160+ countries.

<Details title='How to read this dashboard'>

Each country receives an **overall pressure score** from 0 to 1, computed as a percentile rank across four dimensions:

- **Food security** — prevalence of undernourishment
- **Price pressure** — food price inflation
- **Economic vulnerability** — inverse of GDP per capita
- **Food availability** — per capita food supply variability

The **main pressure driver** identifies which of the three explanatory dimensions — price, economic, or food availability — is highest for each country.

Data sources: Our World in Data · FAOSTAT · World Bank · Open-Meteo

</Details>

```sql year_filter
SELECT DISTINCT
    year
FROM food_security.country_food_security_yearly
ORDER BY year DESC
```

<Dropdown
    data={year_filter}
    name=selected_year
    value=year
    defaultValue={2023}
    title="Year"
/>

```sql kpis
SELECT
    COUNT(DISTINCT country_code) AS countries,
    COUNT(DISTINCT year) AS years_covered,
    MIN(year) AS first_year,
    MAX(year) AS last_year,
    ROUND(AVG(overall_pressure_score), 3) AS avg_pressure_score
FROM food_security.country_food_security_yearly
```

<BigValue data={kpis} value=countries title="Countries Tracked" />
<BigValue data={kpis} value=years_covered title="Years Covered" />
<BigValue data={kpis} value=avg_pressure_score title="Avg Pressure Score" fmt=pct />

---

## Where is food security pressure highest?

```sql map_data
SELECT
    country_code,
    country_name,
    overall_pressure_score,
    undernourishment_prevalence_pct,
    main_pressure_driver
FROM food_security.country_food_security_yearly
WHERE year = ${inputs.selected_year.value}
```

<AreaMap
    data={map_data}
    areaCol=country_code
    geoJsonUrl="/world.geojson"
    geoId="ISO3166-1-Alpha-3"
    value=overall_pressure_score
    valueFmt=pct
    colorPalette={['#fee8c8', '#fdbb84', '#e34a33']}
    height=450
    title="Overall Food Security Pressure Score"
/>

---

## Top 20 Most Pressured Countries

```sql top_20
SELECT
    rank_within_year AS rank,
    country_name,
    un_region AS region,
    income_group,
    undernourishment_prevalence_pct AS undernourishment_pct,
    food_price_inflation_pct AS food_price_inflation,
    overall_pressure_score AS pressure_score,
    main_pressure_driver AS main_driver
FROM food_security.top_pressured_countries
WHERE year = ${inputs.selected_year.value}
ORDER BY rank_within_year
LIMIT 20
```

<DataTable data={top_20} rows=20 rowShading=true>
    <Column id=rank />
    <Column id=country_name title="Country" />
    <Column id=region />
    <Column id=income_group title="Income Group" />
    <Column id=undernourishment_pct title="Undernourishment (%)" />
    <Column id=food_price_inflation title="Food Price Inflation (%)" />
    <Column id=pressure_score fmt=pct contentType=colorscale colorPalette={['white','#e34a33']} title="Pressure Score" />
    <Column id=main_driver title="Main Driver" />
</DataTable>

---

## What is driving pressure globally?

```sql drivers
SELECT
    main_pressure_driver AS driver,
    country_count,
    share_pct
FROM food_security.driver_distribution_by_year
WHERE year = ${inputs.selected_year.value}
ORDER BY country_count DESC
```

<BarChart
    data={drivers}
    x=driver
    y=country_count
    yAxisTitle="Number of countries"
    title="Countries by Main Pressure Driver"
    colorPalette={['#e34a33', '#fdbb84', '#fee8c8']}
/>

## How has pressure shifted over time?

```sql drivers_time
SELECT
    year,
    main_pressure_driver AS driver,
    country_count
FROM food_security.driver_distribution_by_year
ORDER BY year, country_count DESC
```

<BarChart
    data={drivers_time}
    x=year
    y=country_count
    series=driver
    type=stacked
    yAxisTitle="Number of countries"
    title="Pressure Driver Distribution Over Time"
/>

---

## Regional Comparison

```sql regional
SELECT
    un_region AS region,
    avg_undernourishment_pct,
    avg_food_price_inflation_pct,
    avg_overall_pressure_score AS avg_pressure_score,
    country_count,
    dominant_pressure_driver
FROM food_security.regional_pressure_summary
WHERE year = ${inputs.selected_year.value}
ORDER BY avg_pressure_score DESC
```

<BarChart
    data={regional}
    x=region
    y=avg_pressure_score
    yAxisTitle="Avg Pressure Score"
    title="Average Pressure Score by Region"
    colorPalette={['#e34a33', '#fdbb84', '#fee8c8']}
/>

<DataTable data={regional} rowShading=true>
    <Column id=region />
    <Column id=country_count title="Countries" />
    <Column id=avg_undernourishment_pct title="Avg Undernourishment (%)" />
    <Column id=avg_food_price_inflation_pct title="Avg Food Price Inflation (%)" />
    <Column id=avg_pressure_score fmt=pct contentType=colorscale colorPalette={['white','#e34a33']} title="Avg Pressure Score" />
    <Column id=dominant_pressure_driver title="Dominant Driver" />
</DataTable>

---

## Countries Worsening Fastest

```sql worsening
SELECT
    country_name,
    un_region AS region,
    income_group,
    first_year,
    last_year,
    first_year_pct,
    last_year_pct,
    absolute_change_pct AS change_pct
FROM food_security.undernourishment_change_by_country
WHERE absolute_change_pct > 0
ORDER BY absolute_change_pct DESC
LIMIT 15
```

<BarChart
    data={worsening}
    x=country_name
    y=change_pct
    title="Largest Increase in Undernourishment (percentage points)"
    yAxisTitle="Change (pp)"
    colorPalette={['#e34a33']}
/>

<DataTable data={worsening} rowShading=true>
    <Column id=country_name title="Country" />
    <Column id=region />
    <Column id=income_group title="Income Group" />
    <Column id=first_year title="From Year" />
    <Column id=last_year title="To Year" />
    <Column id=first_year_pct title="Start %" />
    <Column id=last_year_pct title="End %" />
    <Column id=change_pct contentType=colorscale colorPalette={['white','#e34a33']} title="Change (pp)" />
</DataTable>