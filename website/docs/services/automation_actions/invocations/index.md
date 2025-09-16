--- 
title: invocations
hide_title: false
hide_table_of_contents: false
keywords:
  - invocations
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

Creates, updates, deletes, gets or lists an <code>invocations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>invocations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.automation_actions.invocations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_automation_actions_invocation"
    values={[
        { label: 'get_automation_actions_invocation', value: 'get_automation_actions_invocation' },
        { label: 'list_automation_action_invocations', value: 'list_automation_action_invocations' }
    ]}
>
<TabItem value="get_automation_actions_invocation">

Invocation information

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
    <td><CopyableCode code="action_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="runner_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="action_snapshot" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>The duration of the invocation's execution time.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>prepared -- the invocation exists and can be referenced, but is NOT available to a Runner <br /> created -- the invocation exists and is waiting for a Runner <br /> sent -- invocation sent to a Runner <br /> queued -- invocation queued by a Runner <br /> running -- invocation is being ran by a Runner <br /> aborted -- invocation was aborted on a Runner <br /> completed -- invocation completed on a Runner <br /> error -- invocation encountered an error on a Runner (example: sent)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="timing" /></td>
    <td><code>array</code></td>
    <td>A list of state transitions with timestamps. Only the 'created' transition is guaranteed to exist at any time.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_automation_action_invocations">

Invocations matching the criteria

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
    <td><CopyableCode code="action_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="runner_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="action_snapshot" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>The duration of the invocation's execution time.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>prepared -- the invocation exists and can be referenced, but is NOT available to a Runner <br /> created -- the invocation exists and is waiting for a Runner <br /> sent -- invocation sent to a Runner <br /> queued -- invocation queued by a Runner <br /> running -- invocation is being ran by a Runner <br /> aborted -- invocation was aborted on a Runner <br /> completed -- invocation completed on a Runner <br /> error -- invocation encountered an error on a Runner (example: sent)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="timing" /></td>
    <td><code>array</code></td>
    <td>A list of state transitions with timestamps. Only the 'created' transition is guaranteed to exist at any time.</td>
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
    <td><a href="#get_automation_actions_invocation"><CopyableCode code="get_automation_actions_invocation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get an Automation Action Invocation<br /></td>
</tr>
<tr>
    <td><a href="#list_automation_action_invocations"><CopyableCode code="list_automation_action_invocations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-invocation_state"><code>invocation_state</code></a></td>
    <td>List Invocations<br /></td>
</tr>
<tr>
    <td><a href="#_list_automation_action_invocations"><CopyableCode code="_list_automation_action_invocations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-invocation_state"><code>invocation_state</code></a></td>
    <td>List Invocations<br /></td>
</tr>
<tr>
    <td><a href="#_get_automation_actions_invocation"><CopyableCode code="_get_automation_actions_invocation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get an Automation Action Invocation<br /></td>
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
<tr id="parameter-incident_id">
    <td><CopyableCode code="incident_id" /></td>
    <td><code>string</code></td>
    <td>Incident ID</td>
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
<tr id="parameter-invocation_state">
    <td><CopyableCode code="invocation_state" /></td>
    <td><code>string</code></td>
    <td>Invocation state</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_automation_actions_invocation"
    values={[
        { label: 'get_automation_actions_invocation', value: 'get_automation_actions_invocation' },
        { label: 'list_automation_action_invocations', value: 'list_automation_action_invocations' }
    ]}
>
<TabItem value="get_automation_actions_invocation">

Get an Automation Action Invocation<br />

```sql
SELECT
id,
action_id,
runner_id,
action_snapshot,
duration,
html_url,
metadata,
self,
state,
summary,
timing,
type
FROM pagerduty.automation_actions.invocations
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="list_automation_action_invocations">

List Invocations<br />

```sql
SELECT
id,
action_id,
runner_id,
action_snapshot,
duration,
html_url,
metadata,
self,
state,
summary,
timing,
type
FROM pagerduty.automation_actions.invocations
WHERE incident_id = '{{ incident_id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND invocation_state = '{{ invocation_state }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_automation_action_invocations"
    values={[
        { label: '_list_automation_action_invocations', value: '_list_automation_action_invocations' },
        { label: '_get_automation_actions_invocation', value: '_get_automation_actions_invocation' }
    ]}
>
<TabItem value="_list_automation_action_invocations">

List Invocations<br />

```sql
EXEC pagerduty.automation_actions.invocations._list_automation_action_invocations 
@incident_id='{{ incident_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@invocation_state='{{ invocation_state }}'
;
```
</TabItem>
<TabItem value="_get_automation_actions_invocation">

Get an Automation Action Invocation<br />

```sql
EXEC pagerduty.automation_actions.invocations._get_automation_actions_invocation 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
</Tabs>
