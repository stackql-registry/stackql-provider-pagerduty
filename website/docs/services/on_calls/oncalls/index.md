--- 
title: oncalls
hide_title: false
hide_table_of_contents: false
keywords:
  - oncalls
  - on_calls
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

Creates, updates, deletes, gets or lists an <code>oncalls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>oncalls</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.on_calls.oncalls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_on_calls"
    values={[
        { label: 'list_on_calls', value: 'list_on_calls' }
    ]}
>
<TabItem value="list_on_calls">

A paginated array of on-call objects.

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
    <td><CopyableCode code="end" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end of the on-call. If `null`, the user does not go off-call.</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_level" /></td>
    <td><code>integer</code></td>
    <td>The escalation level for the on-call.</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_policy" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="start" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start of the on-call. If `null`, the on-call is a permanent user on-call.</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td></td>
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
    <td><a href="#list_on_calls"><CopyableCode code="list_on_calls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-include[]"><code>include[]</code></a>, <a href="#parameter-user_ids[]"><code>user_ids[]</code></a>, <a href="#parameter-escalation_policy_ids[]"><code>escalation_policy_ids[]</code></a>, <a href="#parameter-schedule_ids[]"><code>schedule_ids[]</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-earliest"><code>earliest</code></a></td>
    <td>List the on-call entries during a given time range.<br /><br />An on-call represents a contiguous unit of time for which a User will be on call for a given Escalation Policy and Escalation Rules.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#on-calls)<br /><br />Scoped OAuth requires: `oncalls.read`<br /></td>
</tr>
<tr>
    <td><a href="#_list_on_calls"><CopyableCode code="_list_on_calls" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-include[]"><code>include[]</code></a>, <a href="#parameter-user_ids[]"><code>user_ids[]</code></a>, <a href="#parameter-escalation_policy_ids[]"><code>escalation_policy_ids[]</code></a>, <a href="#parameter-schedule_ids[]"><code>schedule_ids[]</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-earliest"><code>earliest</code></a></td>
    <td>List the on-call entries during a given time range.<br /><br />An on-call represents a contiguous unit of time for which a User will be on call for a given Escalation Policy and Escalation Rules.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#on-calls)<br /><br />Scoped OAuth requires: `oncalls.read`<br /></td>
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
<tr id="parameter-Accept">
    <td><CopyableCode code="Accept" /></td>
    <td><code>string</code></td>
    <td>The `Accept` header is used as a versioning header.</td>
</tr>
<tr id="parameter-Content-Type">
    <td><CopyableCode code="Content-Type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-earliest">
    <td><CopyableCode code="earliest" /></td>
    <td><code>boolean</code></td>
    <td>This will filter on-calls such that only the earliest on-call for each combination of escalation policy, escalation level, and user is returned. This is useful for determining when the "next" on-calls are for a given set of filters.</td>
</tr>
<tr id="parameter-escalation_policy_ids[]">
    <td><CopyableCode code="escalation_policy_ids[]" /></td>
    <td><code>array</code></td>
    <td>Filters the results, showing only on-calls for the specified escalation policy IDs.</td>
</tr>
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>string</code></td>
    <td>Array of additional details to include.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page.</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer</code></td>
    <td>Offset to start pagination search results.</td>
</tr>
<tr id="parameter-schedule_ids[]">
    <td><CopyableCode code="schedule_ids[]" /></td>
    <td><code>array</code></td>
    <td>Filters the results, showing only on-calls for the specified schedule IDs. If `null` is provided in the array, it includes permanent on-calls due to direct user escalation targets.</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start of the time range over which you want to search. If an on-call period overlaps with the range, it will be included in the result. Defaults to current time. On-call shifts are limited to 90 days in the future.</td>
</tr>
<tr id="parameter-time_zone">
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string (tzinfo)</code></td>
    <td>Time zone in which dates in the result will be rendered.</td>
</tr>
<tr id="parameter-total">
    <td><CopyableCode code="total" /></td>
    <td><code>boolean</code></td>
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
</tr>
<tr id="parameter-until">
    <td><CopyableCode code="until" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end of the time range over which you want to search. If an on-call period overlaps with the range, it will be included in the result. Defaults to current time. On-call shifts are limited to 90 days in the future, and the `until` time cannot be before the `since` time.</td>
</tr>
<tr id="parameter-user_ids[]">
    <td><CopyableCode code="user_ids[]" /></td>
    <td><code>array</code></td>
    <td>Filters the results, showing only on-calls for the specified user IDs.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_on_calls"
    values={[
        { label: 'list_on_calls', value: 'list_on_calls' }
    ]}
>
<TabItem value="list_on_calls">

List the on-call entries during a given time range.<br /><br />An on-call represents a contiguous unit of time for which a User will be on call for a given Escalation Policy and Escalation Rules.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#on-calls)<br /><br />Scoped OAuth requires: `oncalls.read`<br />

```sql
SELECT
end,
escalation_level,
escalation_policy,
schedule,
start,
user
FROM pagerduty.on_calls.oncalls
WHERE Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND time_zone = '{{ time_zone }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND include[] = '{{ include[] }}'
AND user_ids[] = '{{ user_ids[] }}'
AND escalation_policy_ids[] = '{{ escalation_policy_ids[] }}'
AND schedule_ids[] = '{{ schedule_ids[] }}'
AND since = '{{ since }}'
AND until = '{{ until }}'
AND earliest = '{{ earliest }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_on_calls"
    values={[
        { label: '_list_on_calls', value: '_list_on_calls' }
    ]}
>
<TabItem value="_list_on_calls">

List the on-call entries during a given time range.<br /><br />An on-call represents a contiguous unit of time for which a User will be on call for a given Escalation Policy and Escalation Rules.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#on-calls)<br /><br />Scoped OAuth requires: `oncalls.read`<br />

```sql
EXEC pagerduty.on_calls.oncalls._list_on_calls 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@time_zone='{{ time_zone }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}, 
@include[]='{{ include[] }}', 
@user_ids[]='{{ user_ids[] }}', 
@escalation_policy_ids[]='{{ escalation_policy_ids[] }}', 
@schedule_ids[]='{{ schedule_ids[] }}', 
@since='{{ since }}', 
@until='{{ until }}', 
@earliest={{ earliest }}
;
```
</TabItem>
</Tabs>
