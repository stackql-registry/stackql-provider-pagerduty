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
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>escalation_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>escalation_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.escalation_policies.escalation_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_escalation_policy"
    values={[
        { label: 'get_escalation_policy', value: 'get_escalation_policy' },
        { label: 'list_escalation_policies', value: 'list_escalation_policies' }
    ]}
>
<TabItem value="get_escalation_policy">

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
    <td>Determines how on call handoff notifications will be sent for users on the escalation policy. Defaults to "if_has_services".</td>
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
    <td>The type of object being created. (default: escalation_policy)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_escalation_policies">

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
    <td>Determines how on call handoff notifications will be sent for users on the escalation policy. Defaults to "if_has_services".</td>
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
    <td>The type of object being created. (default: escalation_policy)</td>
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
    <td><a href="#get_escalation_policy"><CopyableCode code="get_escalation_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get information about an existing escalation policy and its rules.<br /><br />Escalation policies define which user should be alerted at which time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)<br /><br />Scoped OAuth requires: `escalation_policies.read`<br /></td>
</tr>
<tr>
    <td><a href="#list_escalation_policies"><CopyableCode code="list_escalation_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-user_ids[]"><code>user_ids[]</code></a>, <a href="#parameter-team_ids[]"><code>team_ids[]</code></a>, <a href="#parameter-include[]"><code>include[]</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a></td>
    <td>List all of the existing escalation policies.<br /><br />Escalation policies define which user should be alerted at which time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)<br /><br />Scoped OAuth requires: `escalation_policies.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_escalation_policy"><CopyableCode code="create_escalation_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__escalation_policy"><code>data__escalation_policy</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-From"><code>From</code></a></td>
    <td>Creates a new escalation policy. At least one escalation rule must be provided.<br /><br />Escalation policies define which user should be alerted at which time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)<br /><br />Scoped OAuth requires: `escalation_policies.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_escalation_policy"><CopyableCode code="delete_escalation_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Deletes an existing escalation policy and rules. The escalation policy must not be in use by any services.<br /><br />Escalation policies define which user should be alerted at which time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)<br /><br />Scoped OAuth requires: `escalation_policies.write`<br /></td>
</tr>
<tr>
    <td><a href="#_list_escalation_policies"><CopyableCode code="_list_escalation_policies" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-user_ids[]"><code>user_ids[]</code></a>, <a href="#parameter-team_ids[]"><code>team_ids[]</code></a>, <a href="#parameter-include[]"><code>include[]</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a></td>
    <td>List all of the existing escalation policies.<br /><br />Escalation policies define which user should be alerted at which time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)<br /><br />Scoped OAuth requires: `escalation_policies.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_escalation_policy"><CopyableCode code="_get_escalation_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get information about an existing escalation policy and its rules.<br /><br />Escalation policies define which user should be alerted at which time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)<br /><br />Scoped OAuth requires: `escalation_policies.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_escalation_policy"><CopyableCode code="update_escalation_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-escalation_policy"><code>escalation_policy</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Updates an existing escalation policy and rules.<br /><br />Escalation policies define which user should be alerted at which time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)<br /><br />Scoped OAuth requires: `escalation_policies.write`<br /></td>
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
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
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
    defaultValue="get_escalation_policy"
    values={[
        { label: 'get_escalation_policy', value: 'get_escalation_policy' },
        { label: 'list_escalation_policies', value: 'list_escalation_policies' }
    ]}
>
<TabItem value="get_escalation_policy">

Get information about an existing escalation policy and its rules.<br /><br />Escalation policies define which user should be alerted at which time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)<br /><br />Scoped OAuth requires: `escalation_policies.read`<br />

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
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list_escalation_policies">

List all of the existing escalation policies.<br /><br />Escalation policies define which user should be alerted at which time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)<br /><br />Scoped OAuth requires: `escalation_policies.read`<br />

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
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
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
    defaultValue="create_escalation_policy"
    values={[
        { label: 'create_escalation_policy', value: 'create_escalation_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_escalation_policy">

Creates a new escalation policy. At least one escalation rule must be provided.<br /><br />Escalation policies define which user should be alerted at which time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)<br /><br />Scoped OAuth requires: `escalation_policies.write`<br />

```sql
INSERT INTO pagerduty.escalation_policies.escalation_policies (
data__escalation_policy,
Accept,
Content-Type,
From
)
SELECT 
'{{ escalation_policy }}' /* required */,
'{{ Accept }}',
'{{ Content-Type }}',
'{{ From }}'
RETURNING
escalation_policy
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: escalation_policies
  props:
    - name: escalation_policy
      value: object
    - name: Accept
      value: string
      description: The `Accept` header is used as a versioning header.
    - name: Content-Type
      value: string
    - name: From
      value: string (email)
      description: The email address of a valid user associated with the account making the request. This is optional, and is only used for change tracking.
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_escalation_policy"
    values={[
        { label: 'delete_escalation_policy', value: 'delete_escalation_policy' }
    ]}
>
<TabItem value="delete_escalation_policy">

Deletes an existing escalation policy and rules. The escalation policy must not be in use by any services.<br /><br />Escalation policies define which user should be alerted at which time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)<br /><br />Scoped OAuth requires: `escalation_policies.write`<br />

```sql
DELETE FROM pagerduty.escalation_policies.escalation_policies
WHERE id = '{{ id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_escalation_policies"
    values={[
        { label: '_list_escalation_policies', value: '_list_escalation_policies' },
        { label: '_get_escalation_policy', value: '_get_escalation_policy' },
        { label: 'update_escalation_policy', value: 'update_escalation_policy' }
    ]}
>
<TabItem value="_list_escalation_policies">

List all of the existing escalation policies.<br /><br />Escalation policies define which user should be alerted at which time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)<br /><br />Scoped OAuth requires: `escalation_policies.read`<br />

```sql
EXEC pagerduty.escalation_policies.escalation_policies._list_escalation_policies 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@query='{{ query }}', 
@user_ids[]='{{ user_ids[] }}', 
@team_ids[]='{{ team_ids[] }}', 
@include[]='{{ include[] }}', 
@sort_by='{{ sort_by }}'
;
```
</TabItem>
<TabItem value="_get_escalation_policy">

Get information about an existing escalation policy and its rules.<br /><br />Escalation policies define which user should be alerted at which time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)<br /><br />Scoped OAuth requires: `escalation_policies.read`<br />

```sql
EXEC pagerduty.escalation_policies.escalation_policies._get_escalation_policy 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="update_escalation_policy">

Updates an existing escalation policy and rules.<br /><br />Escalation policies define which user should be alerted at which time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#escalation-policies)<br /><br />Scoped OAuth requires: `escalation_policies.write`<br />

```sql
EXEC pagerduty.escalation_policies.escalation_policies.update_escalation_policy 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"escalation_policy": "{{ escalation_policy }}"
}'
;
```
</TabItem>
</Tabs>
