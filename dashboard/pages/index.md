---
title: Global Food Security Pressure
hide_title: true
sidebar_position: 1
---

> This dashboard is an independent portfolio project, not an official food security report. Data comes from public sources and is transformed for analytical and educational purposes. For methodology and source details, see the [project README](https://github.com/roxannardgz/food-security-pipeline).

# Global Food Security Pressure
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

--- 
<!-- ----------- YEAR FILTER ----------- -->

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


<!-- ----------- KPIS SECTION ----------- -->

```sql kpis
SELECT
    COUNT(DISTINCT country_code) AS countries,
    ROUND(AVG(overall_pressure_score), 3) AS avg_pressure_score,
    ROUND(AVG(undernourishment_prevalence_pct), 1) AS avg_undernourishment
FROM food_security.country_food_security_yearly
WHERE year = ${inputs.selected_year.value}
```

```sql kpi_highest_pressure
SELECT
    country_name AS country
FROM food_security.top_pressured_countries
WHERE year = ${inputs.selected_year.value}
  AND rank_within_year = 1
```

```sql kpi_common_driver
SELECT
    main_pressure_driver
FROM food_security.driver_distribution_by_year
WHERE year = ${inputs.selected_year.value}
ORDER BY share_pct DESC
LIMIT 1
```


```sql kpi_fastest_worsening
WITH yearly_change AS (
    SELECT
        country_code,
        country_name,
        year,
        undernourishment_prevalence_pct,
        LAG(undernourishment_prevalence_pct) OVER (
            PARTITION BY country_code
            ORDER BY year
        ) AS previous_undernourishment_pct
    FROM food_security.country_food_security_yearly
)

SELECT
    country_name AS country,
    ROUND(
        undernourishment_prevalence_pct - previous_undernourishment_pct,
        1
    ) AS change_pp
FROM yearly_change
WHERE year = ${inputs.selected_year.value}
  AND previous_undernourishment_pct IS NOT NULL
  AND undernourishment_prevalence_pct IS NOT NULL
ORDER BY change_pp DESC
LIMIT 1
```

<Grid cols=3>
    <BigValue data={kpis} value=countries title="Countries Tracked" />
    <BigValue data={kpis} value=avg_undernourishment title="Average Undernourishment" fmt="0.0'%'" />
    <BigValue data={kpis} value=avg_pressure_score title="Avg Pressure Score" fmt=pct />

    <BigValue data={kpi_common_driver} value=main_pressure_driver title="Most Common Driver" />
    <BigValue data={kpi_highest_pressure} value=country title="Highest Pressure Country" />
    <BigValue data={kpi_fastest_worsening} value=country title="Fastest Worsening Country" />
</Grid>

---

## Where is food security pressure highest?

```sql map_data
SELECT
    country_code,
    country_name,
    overall_pressure_score,
    undernourishment_prevalence_pct AS undernourishment_pct,
    main_pressure_driver
FROM food_security.country_food_security_yearly
WHERE year = ${inputs.selected_year.value}
```
<div style="font-size: 1rem; font-weight: 400; color: #4B4038; margin-bottom: 0.5rem;">
Overall Food Security Pressure Score
</div>

<AreaMap
    data={map_data}
    areaCol=country_code
    geoJsonUrl="/world.geojson"
    geoId="ISO3166-1-Alpha-3"
    value=overall_pressure_score
    valueFmt=pct
    colorPalette={['#F6EFE7', '#E8D3B9', '#D99A74', '#B85C38', '#7A5C45']}
    height=550
    tooltip={[
        {id: 'country_name', showColumnName: false, valueClass: 'text-xl font-semibold'},
        {id: 'overall_pressure_score', fmt: 'pct', fieldClass: 'text-[grey]'},
        {id: 'undernourishment_pct', fmt: 'num1', fieldClass: 'text-[grey]'},
        {id: 'main_pressure_driver', fieldClass: 'text-[grey]'}
    ]}
/>


---

## Top 10 Most Pressured Countries

```sql top_10
SELECT
    rank_within_year AS rank,
    country_name,
    un_region AS region,
    undernourishment_prevalence_pct AS undernourishment,
    food_price_inflation_pct AS food_price_inflation,
    overall_pressure_score AS pressure_score,
    main_pressure_driver AS main_driver
FROM food_security.top_pressured_countries
WHERE year = ${inputs.selected_year.value}
ORDER BY rank_within_year
LIMIT 10
```

<DataTable data={top_10} rows=10 rowShading=true>
    <Column id=rank />
    <Column id=country_name title="Country" />
    <Column id=region />
    <Column id=undernourishment title="Undernourishment (%)"/>
    <Column id=food_price_inflation title="Food Price Inflation (%)" />
    <Column id=pressure_score fmt=pct contentType=colorscale colorScale=#B85C38 title="Pressure Score" />
    <Column id=main_driver title="Main Driver" />
</DataTable>

---

<Grid cols=2>

<Group>

## Dominant Pressure Drivers

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
    title="Countries by Main Pressure Driver"
    colorPalette={['#B85C38', '#D99A74', '#E8D3B9', '#7A5C45']}
    echartsOptions={{
        color: ['#B85C38', '#D99A74', '#E8D3B9', '#7A5C45'],
        title: {
            textStyle: {
                color: '#4B4038',
                fontWeight: 'normal'
            }
        },
        yAxis: {
            splitLine: {
                show: false
            }
        },
        xAxis: {
            splitLine: {
                show: false
            }
        }
    }}
/>

</Group>

<Group>

## Regional Comparison

```sql regional
SELECT
    un_region AS region,
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
    yFmt=pct
    title="Average Pressure Score by Region"
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
                show: false
            },
            axisLabel: {
                formatter: function(value) {
                    return (value * 100).toFixed(0) + '%';
                }
            }
        },
        xAxis: {
            splitLine: {
                show: false
            }
        },
        tooltip: {
            valueFormatter: function(value) {
                return (value * 100).toFixed(1) + '%';
            }
        }
    }}
/>

</Group>

</Grid>