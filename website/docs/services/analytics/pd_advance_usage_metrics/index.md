--- 
title: pd_advance_usage_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - pd_advance_usage_metrics
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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>pd_advance_usage_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pd_advance_usage_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.analytics.pd_advance_usage_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

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
    <td><CopyableCode code="feature_id" /></td>
    <td><code>string</code></td>
    <td>Which feature of PD Advance was used.</td>
</tr>
<tr>
    <td><CopyableCode code="total_credits_used" /></td>
    <td><code>integer</code></td>
    <td>How many credits were used by this feature.</td>
</tr>
<tr>
    <td><CopyableCode code="total_proactive_credits_used" /></td>
    <td><code>integer</code></td>
    <td>How many of the credits used were initiated by PD Advance rather than a user.</td>
</tr>
<tr>
    <td><CopyableCode code="total_proactive_use_count" /></td>
    <td><code>integer</code></td>
    <td>How many times this feature was initiated by PD Advance rather than a user.</td>
</tr>
<tr>
    <td><CopyableCode code="total_use_count" /></td>
    <td><code>integer</code></td>
    <td>How many times this feature was used.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Provides aggregated metrics for the usage of PD Advance.&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; **Note:** Data availability reflects &#91;pipeline processing cycles&#93;(https:​//support.pagerduty.com/main/docs/insights#:~:text=Data%20Update%20Schedule) and is generally within 24 hours under normal conditions.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `analytics.write`&lt;br /&gt;</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Provides aggregated metrics for the usage of PD Advance.&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; **Note:** Data availability reflects &#91;pipeline processing cycles&#93;(https:​//support.pagerduty.com/main/docs/insights#:~:text=Data%20Update%20Schedule) and is generally within 24 hours under normal conditions.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `analytics.write`&lt;br /&gt;

```sql
SELECT
feature_id,
total_credits_used,
total_proactive_credits_used,
total_proactive_use_count,
total_use_count
FROM pagerduty.analytics.pd_advance_usage_metrics
;
```
</TabItem>
</Tabs>
