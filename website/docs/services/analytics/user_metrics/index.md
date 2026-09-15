--- 
title: user_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - user_metrics
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

Creates, updates, deletes, gets or lists a <code>user_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.analytics.user_metrics" /></td></tr>
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

Returns user metrics aggregated across the account

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
    <td><CopyableCode code="total_downloaded_mobile_app_count" /></td>
    <td><code>integer</code></td>
    <td>The number of users who have downloaded the mobile app.</td>
</tr>
<tr>
    <td><CopyableCode code="total_downloaded_mobile_app_percentage" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of users who have downloaded the mobile app.</td>
</tr>
<tr>
    <td><CopyableCode code="total_on_escalation_policy_count" /></td>
    <td><code>integer</code></td>
    <td>The number of users who are on at least one escalation policy.</td>
</tr>
<tr>
    <td><CopyableCode code="total_on_escalation_policy_percentage" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of users who are on at least one escalation policy.</td>
</tr>
<tr>
    <td><CopyableCode code="total_signed_up_count" /></td>
    <td><code>integer</code></td>
    <td>The number of users who have signed up (completed onboarding).</td>
</tr>
<tr>
    <td><CopyableCode code="total_signed_up_percentage" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of users who have signed up.</td>
</tr>
<tr>
    <td><CopyableCode code="total_user_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of users in the account that match the filters.</td>
</tr>
<tr>
    <td><CopyableCode code="total_with_notification_methods_count" /></td>
    <td><code>integer</code></td>
    <td>The number of users who have at least one notification method configured.</td>
</tr>
<tr>
    <td><CopyableCode code="total_with_notification_methods_percentage" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of users who have at least one notification method configured.</td>
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
    <td>Provides aggregated metrics across all users within their account. This endpoint provides summary statistics about user activity and performance.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; **Note:** Data availability reflects &#91;pipeline processing cycles&#93;(https:​//support.pagerduty.com/main/docs/insights#:~:text=Data%20Update%20Schedule) and is generally within 24 hours under normal conditions.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `analytics.write`&lt;br /&gt;</td>
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

Provides aggregated metrics across all users within their account. This endpoint provides summary statistics about user activity and performance.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; **Note:** Data availability reflects &#91;pipeline processing cycles&#93;(https:​//support.pagerduty.com/main/docs/insights#:~:text=Data%20Update%20Schedule) and is generally within 24 hours under normal conditions.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `analytics.write`&lt;br /&gt;

```sql
SELECT
total_downloaded_mobile_app_count,
total_downloaded_mobile_app_percentage,
total_on_escalation_policy_count,
total_on_escalation_policy_percentage,
total_signed_up_count,
total_signed_up_percentage,
total_user_count,
total_with_notification_methods_count,
total_with_notification_methods_percentage
FROM pagerduty.analytics.user_metrics
;
```
</TabItem>
</Tabs>
