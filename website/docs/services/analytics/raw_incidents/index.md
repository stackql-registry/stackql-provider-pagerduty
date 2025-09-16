--- 
title: raw_incidents
hide_title: false
hide_table_of_contents: false
keywords:
  - raw_incidents
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

Creates, updates, deletes, gets or lists a <code>raw_incidents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>raw_incidents</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.analytics.raw_incidents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_analytics_incidents_by_id"
    values={[
        { label: 'get_analytics_incidents_by_id', value: 'get_analytics_incidents_by_id' },
        { label: 'get_analytics_incidents', value: 'get_analytics_incidents' }
    ]}
>
<TabItem value="get_analytics_incidents_by_id">

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
</TabItem>
<TabItem value="get_analytics_incidents">

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
    <td><CopyableCode code="data" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="filters" /></td>
    <td><code>object</code></td>
    <td>A collection of filters that were applied to the results.</td>
</tr>
<tr>
    <td><CopyableCode code="first" /></td>
    <td><code>string</code></td>
    <td>Cursor to identify the first object in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="last" /></td>
    <td><code>string</code></td>
    <td>Cursor to identify the last object in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>Number of results to include in the batch.</td>
</tr>
<tr>
    <td><CopyableCode code="more" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if there are more resources available than were returned.</td>
</tr>
<tr>
    <td><CopyableCode code="order" /></td>
    <td><code>string</code></td>
    <td>The order in which the results were sorted;  asc for ascending, desc for descending.</td>
</tr>
<tr>
    <td><CopyableCode code="order_by" /></td>
    <td><code>string</code></td>
    <td>The column that was used for ordering the results.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>The time zone that the results are in.</td>
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
    <td><a href="#get_analytics_incidents_by_id"><CopyableCode code="get_analytics_incidents_by_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Provides enriched incident data and metrics for a single incident.<br /><br />Example metrics include Seconds to Resolve, Seconds to Engage, Snoozed Seconds, and Sleep Hour Interruptions. Some metric definitions can be found in our [Knowledge Base](https://support.pagerduty.com/docs/pagerduty-analytics).<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />&lt;!-- theme: info --&gt;<br />&gt; **Note:** Analytics data is updated once per day. It takes up to 24 hours before new incidents appear in the Analytics API.<br /><br />Scoped OAuth requires: `analytics.read`<br /></td>
</tr>
<tr>
    <td><a href="#get_analytics_incidents"><CopyableCode code="get_analytics_incidents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Provides enriched incident data and metrics for multiple incidents.<br /><br />Example metrics include Seconds to Resolve, Seconds to Engage, Snoozed Seconds, and Sleep Hour Interruptions. Some metric definitions can be found in our [Knowledge Base](https://support.pagerduty.com/docs/pagerduty-analytics).<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />&lt;!-- theme: info --&gt;<br />&gt; A `team_ids` or `service_ids` filter is required for [user-level API keys](https://support.pagerduty.com/docs/using-the-api#section-generating-a-personal-rest-api-key) or keys generated through an OAuth flow. Account-level API keys do not have this requirement.<br />&lt;!-- theme: info --&gt;<br />&gt; **Note:** Analytics data is updated once per day. It takes up to 24 hours before new incidents appear in the Analytics API.<br /><br />Scoped OAuth requires: `analytics.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_analytics_incidents_by_id"><CopyableCode code="_get_analytics_incidents_by_id" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Provides enriched incident data and metrics for a single incident.<br /><br />Example metrics include Seconds to Resolve, Seconds to Engage, Snoozed Seconds, and Sleep Hour Interruptions. Some metric definitions can be found in our [Knowledge Base](https://support.pagerduty.com/docs/pagerduty-analytics).<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />&lt;!-- theme: info --&gt;<br />&gt; **Note:** Analytics data is updated once per day. It takes up to 24 hours before new incidents appear in the Analytics API.<br /><br />Scoped OAuth requires: `analytics.read`<br /></td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_analytics_incidents_by_id"
    values={[
        { label: 'get_analytics_incidents_by_id', value: 'get_analytics_incidents_by_id' },
        { label: 'get_analytics_incidents', value: 'get_analytics_incidents' }
    ]}
>
<TabItem value="get_analytics_incidents_by_id">

Provides enriched incident data and metrics for a single incident.<br /><br />Example metrics include Seconds to Resolve, Seconds to Engage, Snoozed Seconds, and Sleep Hour Interruptions. Some metric definitions can be found in our [Knowledge Base](https://support.pagerduty.com/docs/pagerduty-analytics).<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />&lt;!-- theme: info --&gt;<br />&gt; **Note:** Analytics data is updated once per day. It takes up to 24 hours before new incidents appear in the Analytics API.<br /><br />Scoped OAuth requires: `analytics.read`<br />

```sql
SELECT
*
FROM pagerduty.analytics.raw_incidents
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="get_analytics_incidents">

Provides enriched incident data and metrics for multiple incidents.<br /><br />Example metrics include Seconds to Resolve, Seconds to Engage, Snoozed Seconds, and Sleep Hour Interruptions. Some metric definitions can be found in our [Knowledge Base](https://support.pagerduty.com/docs/pagerduty-analytics).<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />&lt;!-- theme: info --&gt;<br />&gt; A `team_ids` or `service_ids` filter is required for [user-level API keys](https://support.pagerduty.com/docs/using-the-api#section-generating-a-personal-rest-api-key) or keys generated through an OAuth flow. Account-level API keys do not have this requirement.<br />&lt;!-- theme: info --&gt;<br />&gt; **Note:** Analytics data is updated once per day. It takes up to 24 hours before new incidents appear in the Analytics API.<br /><br />Scoped OAuth requires: `analytics.read`<br />

```sql
SELECT
data,
filters,
first,
last,
limit,
more,
order,
order_by,
time_zone
FROM pagerduty.analytics.raw_incidents
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_analytics_incidents_by_id"
    values={[
        { label: '_get_analytics_incidents_by_id', value: '_get_analytics_incidents_by_id' }
    ]}
>
<TabItem value="_get_analytics_incidents_by_id">

Provides enriched incident data and metrics for a single incident.<br /><br />Example metrics include Seconds to Resolve, Seconds to Engage, Snoozed Seconds, and Sleep Hour Interruptions. Some metric definitions can be found in our [Knowledge Base](https://support.pagerduty.com/docs/pagerduty-analytics).<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />&lt;!-- theme: info --&gt;<br />&gt; **Note:** Analytics data is updated once per day. It takes up to 24 hours before new incidents appear in the Analytics API.<br /><br />Scoped OAuth requires: `analytics.read`<br />

```sql
EXEC pagerduty.analytics.raw_incidents._get_analytics_incidents_by_id 
@id='{{ id }}' --required
;
```
</TabItem>
</Tabs>
