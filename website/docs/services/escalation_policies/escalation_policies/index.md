--- 
title: escalation_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - escalation_policies
  - escalation_policies
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

Creates, updates, deletes, gets or lists an <code>escalation_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="escalation_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.escalation_policies.escalation_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

The escalation policy object.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the escalation policy.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Escalation policy description.</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_rules" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="num_loops" /></td>
    <td><code>integer</code></td>
    <td>The number of times the escalation policy will repeat after reaching the end of its escalation.</td>
</tr>
<tr>
    <td><CopyableCode code="on_call_handoff_notifications" /></td>
    <td><code>string</code></td>
    <td>Determines how on call handoff notifications will be sent for users on the escalation policy. Defaults to "if_has_services". (if_has_services, always)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="teams" /></td>
    <td><code>array</code></td>
    <td>Team associated with the policy. Account must have the `teams` ability to use this parameter. Only one team may be associated with the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated array of escalation policy objects.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the escalation policy.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Escalation policy description.</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_rules" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="num_loops" /></td>
    <td><code>integer</code></td>
    <td>The number of times the escalation policy will repeat after reaching the end of its escalation.</td>
</tr>
<tr>
    <td><CopyableCode code="on_call_handoff_notifications" /></td>
    <td><code>string</code></td>
    <td>Determines how on call handoff notifications will be sent for users on the escalation policy. Defaults to "if_has_services". (if_has_services, always)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="teams" /></td>
    <td><code>array</code></td>
    <td>Team associated with the policy. Account must have the `teams` ability to use this parameter. Only one team may be associated with the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get information about an existing escalation policy and its rules.&lt;br /&gt;&lt;br /&gt;Escalation policies define which user should be alerted at which time.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `escalation_policies.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-user_ids[]"><code>user_ids[]</code></a>, <a href="#parameter-team_ids[]"><code>team_ids[]</code></a>, <a href="#parameter-include[]"><code>include[]</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a></td>
    <td>List all of the existing escalation policies.&lt;br /&gt;&lt;br /&gt;Escalation policies define which user should be alerted at which time.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `escalation_policies.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-escalation_policy"><code>escalation_policy</code></a></td>
    <td><a href="#parameter-From"><code>From</code></a></td>
    <td>Creates a new escalation policy. At least one escalation rule must be provided.&lt;br /&gt;&lt;br /&gt;Escalation policies define which user should be alerted at which time.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `escalation_policies.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-escalation_policy"><code>escalation_policy</code></a></td>
    <td></td>
    <td>Updates an existing escalation policy and rules.&lt;br /&gt;&lt;br /&gt;Escalation policies define which user should be alerted at which time.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `escalation_policies.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Deletes an existing escalation policy and rules. The escalation policy must not be in use by any services.&lt;br /&gt;&lt;br /&gt;Escalation policies define which user should be alerted at which time.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `escalation_policies.write`&lt;br /&gt;</td>
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
<tr id="parameter-From">
    <td><CopyableCode code="From" /></td>
    <td><code>string (email)</code></td>
    <td>The email address of a valid user associated with the account making the request. This is optional, and is only used for change tracking.</td>
</tr>
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>string</code></td>
    <td>Array of additional Models to include in response.</td>
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
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>Filters the result, showing only the records whose name matches the query.</td>
</tr>
<tr id="parameter-sort_by">
    <td><CopyableCode code="sort_by" /></td>
    <td><code>string</code></td>
    <td>Used to specify the field you wish to sort the results on.</td>
</tr>
<tr id="parameter-team_ids[]">
    <td><CopyableCode code="team_ids[]" /></td>
    <td><code>array</code></td>
    <td>An array of team IDs. Only results related to these teams will be returned. Account must have the `teams` ability to use this parameter.</td>
</tr>
<tr id="parameter-total">
    <td><CopyableCode code="total" /></td>
    <td><code>boolean</code></td>
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our &#91;Pagination Docs&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
</tr>
<tr id="parameter-user_ids[]">
    <td><CopyableCode code="user_ids[]" /></td>
    <td><code>array</code></td>
    <td>Filters the results, showing only escalation policies on which any of the users is a target.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get information about an existing escalation policy and its rules.&lt;br /&gt;&lt;br /&gt;Escalation policies define which user should be alerted at which time.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `escalation_policies.read`&lt;br /&gt;

```sql
SELECT
id,
name,
description,
escalation_rules,
html_url,
num_loops,
on_call_handoff_notifications,
self,
services,
summary,
teams,
type
FROM pagerduty.escalation_policies.escalation_policies
WHERE id = '{{ id }}' -- required
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list">

List all of the existing escalation policies.&lt;br /&gt;&lt;br /&gt;Escalation policies define which user should be alerted at which time.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `escalation_policies.read`&lt;br /&gt;

```sql
SELECT
id,
name,
description,
escalation_rules,
html_url,
num_loops,
on_call_handoff_notifications,
self,
services,
summary,
teams,
type
FROM pagerduty.escalation_policies.escalation_policies
WHERE limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND query = '{{ query }}'
AND user_ids[] = '{{ user_ids[] }}'
AND team_ids[] = '{{ team_ids[] }}'
AND include[] = '{{ include[] }}'
AND sort_by = '{{ sort_by }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new escalation policy. At least one escalation rule must be provided.&lt;br /&gt;&lt;br /&gt;Escalation policies define which user should be alerted at which time.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `escalation_policies.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.escalation_policies.escalation_policies (
escalation_policy,
"From"
)
SELECT 
'{{ escalation_policy }}' /* required */,
'{{ From }}'
RETURNING
escalation_policy
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: escalation_policies
  props:
    - name: escalation_policy
      value:
        id: "{{ id }}"
        summary: "{{ summary }}"
        type: "{{ type }}"
        self: "{{ self }}"
        html_url: "{{ html_url }}"
        name: "{{ name }}"
        description: "{{ description }}"
        num_loops: {{ num_loops }}
        on_call_handoff_notifications: "{{ on_call_handoff_notifications }}"
        escalation_rules:
          - id: "{{ id }}"
            escalation_delay_in_minutes: {{ escalation_delay_in_minutes }}
            targets: "{{ targets }}"
            escalation_rule_assignment_strategy: "{{ escalation_rule_assignment_strategy }}"
        services:
          - id: "{{ id }}"
            summary: "{{ summary }}"
            type: "{{ type }}"
            self: "{{ self }}"
            html_url: "{{ html_url }}"
        teams:
          - id: "{{ id }}"
            summary: "{{ summary }}"
            type: "{{ type }}"
            self: "{{ self }}"
            html_url: "{{ html_url }}"
    - name: From
      value: "{{ From }}"
      description: The email address of a valid user associated with the account making the request. This is optional, and is only used for change tracking.
      description: The email address of a valid user associated with the account making the request. This is optional, and is only used for change tracking.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates an existing escalation policy and rules.&lt;br /&gt;&lt;br /&gt;Escalation policies define which user should be alerted at which time.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `escalation_policies.write`&lt;br /&gt;

```sql
UPDATE pagerduty.escalation_policies.escalation_policies
SET 
escalation_policy = '{{ escalation_policy }}'
WHERE 
id = '{{ id }}' --required
AND escalation_policy = '{{ escalation_policy }}' --required
RETURNING
escalation_policy;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes an existing escalation policy and rules. The escalation policy must not be in use by any services.&lt;br /&gt;&lt;br /&gt;Escalation policies define which user should be alerted at which time.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `escalation_policies.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.escalation_policies.escalation_policies
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
