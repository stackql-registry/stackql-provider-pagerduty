--- 
title: event_orchestration_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - event_orchestration_rules
  - recommendations
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

Creates, updates, deletes, gets or lists an <code>event_orchestration_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_orchestration_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.recommendations.event_orchestration_rules" /></td></tr>
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

A list of recommended rules for the account's Service Event Orchestrations.

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
    <td><CopyableCode code="recommendation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this recommendation (rule instance hash). (example: a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4)</td>
</tr>
<tr>
    <td><CopyableCode code="actions" /></td>
    <td><code>object</code></td>
    <td>The action the recommended rule would apply when its condition is matched. One of the following action types will be present.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the recommendation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human-readable description of what the recommended rule does. (example: Suppress alerts where event.summary matches 'disk usage')</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>object</code></td>
    <td>Performance metrics describing the recommendation's historical match rate and effectiveness.</td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code>object</code></td>
    <td>The service this recommendation applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="pcl_expr" /></td>
    <td><code>string</code></td>
    <td>The PagerDuty Condition Language (PCL) expression that defines the rule's matching condition. (example: event.summary matches part 'disk usage')</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The availability status of the recommendation. (available)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of resource this recommendation applies to. (service)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the recommendation was last updated.</td>
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
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-service_ids[]"><code>service_ids[]</code></a>, <a href="#parameter-team_ids[]"><code>team_ids[]</code></a>, <a href="#parameter-actions[]"><code>actions[]</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a></td>
    <td>List AI-generated recommended rules available for an account's Service Event Orchestrations.&lt;br /&gt;&lt;br /&gt;Results can be filtered by service or team. Use cursor-based pagination to retrieve large result sets.&lt;br /&gt;&lt;br /&gt;Note: `service_id` and `service_ids&#91;&#93;` cannot be used together in the same request.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `recommendations.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#dismiss"><CopyableCode code="dismiss" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-recommendation_id"><code>recommendation_id</code></a>, <a href="#parameter-decision"><code>decision</code></a></td>
    <td></td>
    <td>Dismiss a recommended rule for a service, recording feedback on whether the recommendation was useful.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `recommendations.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#accept"><CopyableCode code="accept" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-recommendation_id"><code>recommendation_id</code></a></td>
    <td></td>
    <td>Accept a recommended rule and apply it to the service's Event Orchestration.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `recommendations.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete_accepted_rule"><CopyableCode code="delete_accepted_rule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Remove a previously accepted recommended rule from a service's Event Orchestration.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `recommendations.write`&lt;br /&gt;</td>
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
<tr id="parameter-recommendation_id">
    <td><CopyableCode code="recommendation_id" /></td>
    <td><code>string</code></td>
    <td>The recommendation ID (rule instance hash).</td>
</tr>
<tr id="parameter-rule_id">
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the accepted rule.</td>
</tr>
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>The service ID</td>
</tr>
<tr id="parameter-actions[]">
    <td><CopyableCode code="actions[]" /></td>
    <td><code>array</code></td>
    <td>Filter recommended rules by action type.</td>
</tr>
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td>Optional parameter used to request the "next" set of results from an API.  The value provided here is most commonly obtained from the `next_cursor` field of the previous request.  When no value is provided, the request starts at the beginning of the result set. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page.</td>
</tr>
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>Filter recommended rules for a single service. Cannot be combined with `service_ids&#91;&#93;`.</td>
</tr>
<tr id="parameter-service_ids[]">
    <td><CopyableCode code="service_ids[]" /></td>
    <td><code>array</code></td>
    <td>Filter recommended rules for multiple services. Cannot be combined with `service_id`.</td>
</tr>
<tr id="parameter-team_ids[]">
    <td><CopyableCode code="team_ids[]" /></td>
    <td><code>array</code></td>
    <td>An array of team IDs. Only results related to these teams will be returned. Account must have the `teams` ability to use this parameter.</td>
</tr>
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

List AI-generated recommended rules available for an account's Service Event Orchestrations.&lt;br /&gt;&lt;br /&gt;Results can be filtered by service or team. Use cursor-based pagination to retrieve large result sets.&lt;br /&gt;&lt;br /&gt;Note: `service_id` and `service_ids&#91;&#93;` cannot be used together in the same request.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `recommendations.read`&lt;br /&gt;

```sql
SELECT
recommendation_id,
actions,
created_at,
description,
metrics,
parent,
pcl_expr,
status,
type,
updated_at
FROM pagerduty.recommendations.event_orchestration_rules
WHERE service_id = '{{ service_id }}'
AND service_ids[] = '{{ service_ids[] }}'
AND team_ids[] = '{{ team_ids[] }}'
AND actions[] = '{{ actions[] }}'
AND limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="dismiss"
    values={[
        { label: 'dismiss', value: 'dismiss' },
        { label: 'accept', value: 'accept' },
        { label: 'delete_accepted_rule', value: 'delete_accepted_rule' }
    ]}
>
<TabItem value="dismiss">

Dismiss a recommended rule for a service, recording feedback on whether the recommendation was useful.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `recommendations.write`&lt;br /&gt;

```sql
EXEC pagerduty.recommendations.event_orchestration_rules.dismiss 
@service_id='{{ service_id }}' --required, 
@recommendation_id='{{ recommendation_id }}' --required 
@@json=
'{
"decision": "{{ decision }}"
}'
;
```
</TabItem>
<TabItem value="accept">

Accept a recommended rule and apply it to the service's Event Orchestration.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `recommendations.write`&lt;br /&gt;

```sql
EXEC pagerduty.recommendations.event_orchestration_rules.accept 
@service_id='{{ service_id }}' --required, 
@recommendation_id='{{ recommendation_id }}' --required
;
```
</TabItem>
<TabItem value="delete_accepted_rule">

Remove a previously accepted recommended rule from a service's Event Orchestration.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `recommendations.write`&lt;br /&gt;

```sql
EXEC pagerduty.recommendations.event_orchestration_rules.delete_accepted_rule 
@service_id='{{ service_id }}' --required, 
@rule_id='{{ rule_id }}' --required
;
```
</TabItem>
</Tabs>
