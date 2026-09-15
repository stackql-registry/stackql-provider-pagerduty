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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.automation_actions.actions" /></td></tr>
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
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: Restart apache)</td>
</tr>
<tr>
    <td><CopyableCode code="action_classification" /></td>
    <td><code>string</code></td>
    <td> (diagnostic, remediation)</td>
</tr>
<tr>
    <td><CopyableCode code="action_data_reference" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="action_type" /></td>
    <td><code>string</code></td>
    <td> (script, process_automation) (example: process_automation)</td>
</tr>
<tr>
    <td><CopyableCode code="allow_invocation_from_event_orchestration" /></td>
    <td><code>boolean</code></td>
    <td>If true, the action can only be invoked automatically by an Event Orchestration.</td>
</tr>
<tr>
    <td><CopyableCode code="allow_invocation_manually" /></td>
    <td><code>boolean</code></td>
    <td>If true, the action can only be invoked manually by a user.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: Restarts apache on the us-west-2-shopping-cart host)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="last_run" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time</td>
</tr>
<tr>
    <td><CopyableCode code="last_run_by" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="map_to_all_services" /></td>
    <td><code>boolean</code></td>
    <td>If true, the action will be associated with every service.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>string</code></td>
    <td>(opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="modify_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time</td>
</tr>
<tr>
    <td><CopyableCode code="only_invocable_on_unresolved_incidents" /></td>
    <td><code>boolean</code></td>
    <td>If true, the action can only be invoked against an unresolved incident.</td>
</tr>
<tr>
    <td><CopyableCode code="privileges" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="runner" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="runner_type" /></td>
    <td><code>string</code></td>
    <td>sidecar -- The runner is backed by an external sidecar that polls for invocations. runbook -- The runner communicates directly with a runbook instance.  (sidecar, runbook) (example: runbook)</td>
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
    <td></td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get an Automation Action&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-runner_id"><code>runner_id</code></a>, <a href="#parameter-classification"><code>classification</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-action_type"><code>action_type</code></a></td>
    <td>Lists Automation Actions matching provided query params.&lt;br /&gt;&lt;br /&gt;The returned records are sorted by action name in alphabetical order.&lt;br /&gt;&lt;br /&gt;See &#91;`Cursor-based pagination`&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-action"><code>action</code></a></td>
    <td></td>
    <td>Create a Script, Process Automation, or Runbook Automation action&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td></td>
    <td>Updates an Automation Action&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete an Automation Action&lt;br /&gt;</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get an Automation Action&lt;br /&gt;

```sql
SELECT
id,
name,
action_classification,
action_data_reference,
action_type,
allow_invocation_from_event_orchestration,
allow_invocation_manually,
creation_time,
description,
html_url,
last_run,
last_run_by,
map_to_all_services,
metadata,
modify_time,
only_invocable_on_unresolved_incidents,
privileges,
runner,
runner_type,
self,
services,
summary,
teams,
type
FROM pagerduty.automation_actions.actions
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Automation Actions matching provided query params.&lt;br /&gt;&lt;br /&gt;The returned records are sorted by action name in alphabetical order.&lt;br /&gt;&lt;br /&gt;See &#91;`Cursor-based pagination`&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/pagination/) for instructions on how to paginate through the result set.&lt;br /&gt;

```sql
SELECT
*
FROM pagerduty.automation_actions.actions
WHERE limit = '{{ limit }}'
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
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Create a Script, Process Automation, or Runbook Automation action&lt;br /&gt;

```sql
INSERT INTO pagerduty.automation_actions.actions (
action
)
SELECT 
'{{ action }}' /* required */
RETURNING
action
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: actions
  props:
    - name: action
      value:
        name: "{{ name }}"
        description: "{{ description }}"
        action_classification: "{{ action_classification }}"
        action_type: "{{ action_type }}"
        runner: "{{ runner }}"
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
        only_invocable_on_unresolved_incidents: {{ only_invocable_on_unresolved_incidents }}
        allow_invocation_manually: {{ allow_invocation_manually }}
        allow_invocation_from_event_orchestration: {{ allow_invocation_from_event_orchestration }}
        map_to_all_services: {{ map_to_all_services }}
        action_data_reference:
          script: "{{ script }}"
          invocation_command: "{{ invocation_command }}"
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

Updates an Automation Action&lt;br /&gt;

```sql
UPDATE pagerduty.automation_actions.actions
SET 
action = '{{ action }}'
WHERE 
id = '{{ id }}' --required
AND action = '{{ action }}' --required
RETURNING
action;
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

Delete an Automation Action&lt;br /&gt;

```sql
DELETE FROM pagerduty.automation_actions.actions
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
