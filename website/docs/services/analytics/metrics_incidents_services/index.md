--- 
title: metrics_incidents_services
hide_title: false
hide_table_of_contents: false
keywords:
  - metrics_incidents_services
  - analytics
  - pagerduty
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage pagerduty resources using SQL
custom_edit_url: null
image: /img/stackql-pagerduty-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>metrics_incidents_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>metrics_incidents_services</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.analytics.metrics_incidents_services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_analytics_metrics_incidents_service"
    values={[
        { label: 'get_analytics_metrics_incidents_service', value: 'get_analytics_metrics_incidents_service' }
    ]}
>
<TabItem value="get_analytics_metrics_incidents_service">

Currently the response only returns data for services that match the filters and have data.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="aggregate_unit" /></td>
    <td><code>string</code></td>
    <td>The time unit to aggregate metrics by.  If no value is provided, the metrics will be aggregated for the entire period. (example: day)</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="filters" /></td>
    <td><code>object</code></td>
    <td>Accepts a set of filters to apply to the Incidents before aggregating.  Any incidents that do not match the included filters will be omitted from the results</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>The time zone to use for the results and grouping. (example: Etc/UTC)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_analytics_metrics_incidents_service"><CopyableCode code="get_analytics_metrics_incidents_service" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Provides aggregated metrics for incidents aggregated into units of time by service.<br /><br />Example metrics include Seconds to Resolve, Seconds to Engage, Snoozed Seconds, and Sleep Hour Interruptions. Some metric definitions can be found in our [Knowledge Base](https://support.pagerduty.com/docs/pagerduty-analytics).<br />Data can be aggregated by day, week or month in addition to by service, or provided just as a collection of aggregates for each service in the dataset for the entire period.  If a unit is provided, each row in the returned dataset will include a 'range_start' timestamp.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />&lt;!-- theme: info --&gt;<br />&gt; A `team_ids` or `service_ids` filter is required for [user-level API keys](https://support.pagerduty.com/docs/using-the-api#section-generating-a-personal-rest-api-key) or keys generated through an OAuth flow. Account-level API keys do not have this requirement.<br />&lt;!-- theme: info --&gt;<br />&gt; **Note:** Analytics data is updated once per day. It takes up to 24 hours before new incidents appear in the Analytics API.<br /><br />Scoped OAuth requires: `analytics.read`<br /></td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_analytics_metrics_incidents_service"
    values={[
        { label: 'get_analytics_metrics_incidents_service', value: 'get_analytics_metrics_incidents_service' }
    ]}
>
<TabItem value="get_analytics_metrics_incidents_service">

Provides aggregated metrics for incidents aggregated into units of time by service.<br /><br />Example metrics include Seconds to Resolve, Seconds to Engage, Snoozed Seconds, and Sleep Hour Interruptions. Some metric definitions can be found in our [Knowledge Base](https://support.pagerduty.com/docs/pagerduty-analytics).<br />Data can be aggregated by day, week or month in addition to by service, or provided just as a collection of aggregates for each service in the dataset for the entire period.  If a unit is provided, each row in the returned dataset will include a 'range_start' timestamp.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />&lt;!-- theme: info --&gt;<br />&gt; A `team_ids` or `service_ids` filter is required for [user-level API keys](https://support.pagerduty.com/docs/using-the-api#section-generating-a-personal-rest-api-key) or keys generated through an OAuth flow. Account-level API keys do not have this requirement.<br />&lt;!-- theme: info --&gt;<br />&gt; **Note:** Analytics data is updated once per day. It takes up to 24 hours before new incidents appear in the Analytics API.<br /><br />Scoped OAuth requires: `analytics.read`<br />

```sql
SELECT
aggregate_unit,
data,
filters,
time_zone
FROM pagerduty.analytics.metrics_incidents_services
;
```
</TabItem>
</Tabs>
