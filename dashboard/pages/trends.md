---
title: Trends
hide_title: true
sidebar_position: 2
---

# Food Security Pressure Trends

Explore how food security pressure, undernourishment, and dominant pressure drivers have changed over time.

[Back to Overview](/)

<!-- ----------- PAGE FILTER ----------- -->

```sql region_filter
SELECT 'All Regions' AS region

UNION ALL

SELECT DISTINCT
    un_region AS region
FROM food_security.country_food_security_yearly
WHERE un_region IS NOT NULL
ORDER BY region
```

<div class="max-w-md">

<Dropdown
    data={region_filter}
    name=selected_region
    value=region
    label=region
    defaultValue="All Regions"
    title="Region"
/>

</div>

---

<!-- ----------- MAIN TREND CHART ----------- -->

## Main Trend Over Time

```sql metric_filter
SELECT 'avg_pressure_score' AS metric, 'Average Pressure Score' AS metric_label

UNION ALL

SELECT 'avg_undernourishment' AS metric, 'Average Undernourishment' AS metric_label
```

<div class="flex justify-end">

<div class="w-64">

<Dropdown
    data={metric_filter}
    name=selected_metric
    value=metric
    label=metric_label
    defaultValue="avg_pressure_score"
    title="Metric"
/>

</div>

</div>

```sql main_trend
WITH yearly_metrics AS (
    SELECT
        year,
        ROUND(AVG(overall_pressure_score), 3) AS avg_pressure_score,
        ROUND(AVG(undernourishment_prevalence_pct), 1) AS avg_undernourishment
    FROM food_security.country_food_security_yearly
    WHERE (
        '${inputs.selected_region.value}' = 'All Regions'
        OR un_region = '${inputs.selected_region.value}'
    )
    GROUP BY year
),

long_metrics AS (
    SELECT
        year,
        'avg_pressure_score' AS metric,
        'Average Pressure Score' AS metric_label,
        avg_pressure_score AS metric_value
    FROM yearly_metrics

    UNION ALL

    SELECT
        year,
        'avg_undernourishment' AS metric,
        'Average Undernourishment' AS metric_label,
        avg_undernourishment AS metric_value
    FROM yearly_metrics
)

SELECT
    year,
    metric_label,
    metric_value
FROM long_metrics
WHERE metric = '${inputs.selected_metric.value}'
ORDER BY year
```

<LineChart
    data={main_trend}
    x=year
    y=metric_value
    xType=category
    title="Selected Metric Over Time"
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

---

<!-- ----------- WORSENING COUNTRIES ----------- -->

## Largest Increases in Undernourishment

```sql worsening
SELECT
    country_name,
    un_region AS region,
    income_group,
    first_year,
    last_year,
    ROUND(first_year_pct, 1) AS first_year_pct,
    ROUND(last_year_pct, 1) AS last_year_pct,
    ROUND(absolute_change_pct, 1) AS change_pp
FROM food_security.undernourishment_change_by_country
WHERE absolute_change_pct > 0
  AND (
      '${inputs.selected_region.value}' = 'All Regions'
      OR un_region = '${inputs.selected_region.value}'
  )
ORDER BY absolute_change_pct DESC
LIMIT 10
```
```sql worsening_period
SELECT
    MIN(first_year) AS first_year,
    MAX(last_year) AS last_year
FROM ${worsening}
```


<BarChart
    data={worsening}
    x=country_name
    y=change_pp
    title="Largest Increase in Undernourishment"
    yAxisTitle="Change (%)"
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

<DataTable data={worsening} rowShading=true>
    <Column id=country_name title="Country" />
    <Column id=region />
    <Column id=income_group title="Income Group" />
    <Column id=first_year_pct title="Start %" fmt="0.0" />
    <Column id=last_year_pct title="End %" fmt="0.0" />
    <Column id=change_pp title="Change (pp)" fmt="0.0" contentType=colorscale colorScale=#B85C38 />
</DataTable>

<div class="text-sm text-gray-500">
Showing change from <Value data={worsening_period} column=first_year fmt="0" /> to <Value data={worsening_period} column=last_year fmt="0" />.
</div>

---

<!-- ----------- DRIVER DISTRIBUTION OVER TIME ----------- -->

## How Has Pressure Shifted Over Time?

```sql drivers_time
WITH driver_counts AS (
    SELECT
        year,
        main_pressure_driver AS driver,
        COUNT(*) AS country_count
    FROM food_security.country_food_security_yearly
    WHERE main_pressure_driver IS NOT NULL
      AND (
          '${inputs.selected_region.value}' = 'All Regions'
          OR un_region = '${inputs.selected_region.value}'
      )
    GROUP BY year, main_pressure_driver
),

driver_shares AS (
    SELECT
        year,
        driver,
        country_count,
        ROUND(
            country_count * 100.0 / SUM(country_count) OVER (PARTITION BY year),
            0
        ) AS country_share
    FROM driver_counts
)

SELECT
    year,
    driver,
    country_count,
    country_share
FROM driver_shares
ORDER BY year, driver
```

<BarChart
    data={drivers_time}
    x=year
    y=country_share
    series=driver
    type=stacked
    xType=category
    yFmt="0"
    title="Pressure Driver Distribution Over Time"
    yAxisTitle="(%)"
    colorPalette={['#B85C38', '#D99A74', '#E8D3B9', '#7A5C45']}
    labels=true
    stackTotalLabel=false
    seriesLabels=true
    labelPosition=inside
    echartsOptions={{
        color: ['#B85C38', '#D99A74', '#E8D3B9', '#7A5C45'],
        title: {
            textStyle: {
                color: '#4B4038',
                fontWeight: 'normal'
            }
        },
        yAxis: {
            max: 100,
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