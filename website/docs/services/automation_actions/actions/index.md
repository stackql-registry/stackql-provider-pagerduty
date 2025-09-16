--- 
title: actions
hide_title: false
hide_table_of_contents: false
keywords:
  - actions
  - automation_actions
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

Creates, updates, deletes, gets or lists an <code>actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>actions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.automation_actions.actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_automation_action"
    values={[
        { label: 'get_automation_action', value: 'get_automation_action' },
        { label: 'get_all_automation_actions', value: 'get_all_automation_actions' }
    ]}
>
<TabItem value="get_automation_action">

Action information

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
<TabItem value="get_all_automation_actions">

An array of actions

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
    <td><a href="#get_automation_action"><CopyableCode code="get_automation_action" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get an Automation Action<br /></td>
</tr>
<tr>
    <td><a href="#get_all_automation_actions"><CopyableCode code="get_all_automation_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-runner_id"><code>runner_id</code></a>, <a href="#parameter-classification"><code>classification</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-action_type"><code>action_type</code></a></td>
    <td>Lists Automation Actions matching provided query params.<br /><br />The returned records are sorted by action name in alphabetical order.<br /><br />See [`Cursor-based pagination`](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.<br /></td>
</tr>
<tr>
    <td><a href="#create_automation_action_invocation"><CopyableCode code="create_automation_action_invocation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-data__invocation"><code>data__invocation</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Invokes an Action<br /></td>
</tr>
<tr>
    <td><a href="#create_automation_action"><CopyableCode code="create_automation_action" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__action"><code>data__action</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create a Script, Process Automation, or Runbook Automation action<br /></td>
</tr>
<tr>
    <td><a href="#delete_automation_action"><CopyableCode code="delete_automation_action" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Delete an Automation Action<br /></td>
</tr>
<tr>
    <td><a href="#_get_all_automation_actions"><CopyableCode code="_get_all_automation_actions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-runner_id"><code>runner_id</code></a>, <a href="#parameter-classification"><code>classification</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-action_type"><code>action_type</code></a></td>
    <td>Lists Automation Actions matching provided query params.<br /><br />The returned records are sorted by action name in alphabetical order.<br /><br />See [`Cursor-based pagination`](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.<br /></td>
</tr>
<tr>
    <td><a href="#_get_automation_action"><CopyableCode code="_get_automation_action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get an Automation Action<br /></td>
</tr>
<tr>
    <td><a href="#update_automation_action"><CopyableCode code="update_automation_action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Updates an Automation Action<br /></td>
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
<tr id="parameter-action_type">
    <td><CopyableCode code="action_type" /></td>
    <td><code>string</code></td>
    <td>Filters results to include the ones matching the specified action type</td>
</tr>
<tr id="parameter-classification">
    <td><CopyableCode code="classification" /></td>
    <td><code>string</code></td>
    <td>Filters results to include the ones matching the specified classification (aka category)</td>
</tr>
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td>Optional parameter used to request the "next" set of results from an API.  The value provided here is most commonly obtained from the `next_cursor` field of the previous request.  When no value is provided, the request starts at the beginning of the result set. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The minimum of the `limit` parameter used in the request or the maximum request size of the API.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filters results to include the ones matching the name (case insensitive substring matching)</td>
</tr>
<tr id="parameter-runner_id">
    <td><CopyableCode code="runner_id" /></td>
    <td><code>string</code></td>
    <td>Filters results to include the ones linked to the specified runner. Specifying the value `any` filters results to include the ones linked to runners only, thus omitting the results not linked to runners. </td>
</tr>
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>Filters results to include the ones associated with the specified service</td>
</tr>
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>Filters results to include the ones associated with the specified team.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_automation_action"
    values={[
        { label: 'get_automation_action', value: 'get_automation_action' },
        { label: 'get_all_automation_actions', value: 'get_all_automation_actions' }
    ]}
>
<TabItem value="get_automation_action">

Get an Automation Action<br />

```sql
SELECT
*
FROM pagerduty.automation_actions.actions
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="get_all_automation_actions">

Lists Automation Actions matching provided query params.<br /><br />The returned records are sorted by action name in alphabetical order.<br /><br />See [`Cursor-based pagination`](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.<br />

```sql
SELECT
*
FROM pagerduty.automation_actions.actions
WHERE Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
AND name = '{{ name }}'
AND runner_id = '{{ runner_id }}'
AND classification = '{{ classification }}'
AND team_id = '{{ team_id }}'
AND service_id = '{{ service_id }}'
AND action_type = '{{ action_type }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_automation_action_invocation"
    values={[
        { label: 'create_automation_action_invocation', value: 'create_automation_action_invocation' },
        { label: 'create_automation_action', value: 'create_automation_action' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_automation_action_invocation">

Invokes an Action<br />

```sql
INSERT INTO pagerduty.automation_actions.actions (
data__invocation,
id,
Accept,
Content-Type
)
SELECT 
'{{ invocation }}' /* required */,
'{{ id }}',
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
invocation
;
```
</TabItem>
<TabItem value="create_automation_action">

Create a Script, Process Automation, or Runbook Automation action<br />

```sql
INSERT INTO pagerduty.automation_actions.actions (
data__action,
Accept,
Content-Type
)
SELECT 
'{{ action }}' /* required */,
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
action
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: actions
  props:
    - name: id
      value: string
      description: Required parameter for the actions resource.
    - name: invocation
      value: object
    - name: action
      value: string
    - name: Accept
      value: string
      description: The `Accept` header is used as a versioning header.
    - name: Content-Type
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_automation_action"
    values={[
        { label: 'delete_automation_action', value: 'delete_automation_action' }
    ]}
>
<TabItem value="delete_automation_action">

Delete an Automation Action<br />

```sql
DELETE FROM pagerduty.automation_actions.actions
WHERE id = '{{ id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_all_automation_actions"
    values={[
        { label: '_get_all_automation_actions', value: '_get_all_automation_actions' },
        { label: '_get_automation_action', value: '_get_automation_action' },
        { label: 'update_automation_action', value: 'update_automation_action' }
    ]}
>
<TabItem value="_get_all_automation_actions">

Lists Automation Actions matching provided query params.<br /><br />The returned records are sorted by action name in alphabetical order.<br /><br />See [`Cursor-based pagination`](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.<br />

```sql
EXEC pagerduty.automation_actions.actions._get_all_automation_actions 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@cursor='{{ cursor }}', 
@name='{{ name }}', 
@runner_id='{{ runner_id }}', 
@classification='{{ classification }}', 
@team_id='{{ team_id }}', 
@service_id='{{ service_id }}', 
@action_type='{{ action_type }}'
;
```
</TabItem>
<TabItem value="_get_automation_action">

Get an Automation Action<br />

```sql
EXEC pagerduty.automation_actions.actions._get_automation_action 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="update_automation_action">

Updates an Automation Action<br />

```sql
EXEC pagerduty.automation_actions.actions.update_automation_action 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"action": "{{ action }}"
}'
;
```
</TabItem>
</Tabs>
