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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>invocations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="invocations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.automation_actions.invocations" /></td></tr>
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
    <td>prepared -- the invocation exists and can be referenced, but is NOT available to a Runner &lt;br /&gt; created -- the invocation exists and is waiting for a Runner &lt;br /&gt; sent -- invocation sent to a Runner &lt;br /&gt; queued -- invocation queued by a Runner &lt;br /&gt; running -- invocation is being ran by a Runner &lt;br /&gt; aborted -- invocation was aborted on a Runner &lt;br /&gt; completed -- invocation completed on a Runner &lt;br /&gt; error -- invocation encountered an error on a Runner unknown -- transient error encountered when fetching invocation state (prepared, created, sent, queued, running, aborted, completed, error, unknown) (example: sent)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="timing" /></td>
    <td><code>array</code></td>
    <td>A list of state transitions with timestamps, sorted in ascending order by timestamp. Only the 'created' transition is guaranteed to exist at any time.</td>
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
    <td>prepared -- the invocation exists and can be referenced, but is NOT available to a Runner &lt;br /&gt; created -- the invocation exists and is waiting for a Runner &lt;br /&gt; sent -- invocation sent to a Runner &lt;br /&gt; queued -- invocation queued by a Runner &lt;br /&gt; running -- invocation is being ran by a Runner &lt;br /&gt; aborted -- invocation was aborted on a Runner &lt;br /&gt; completed -- invocation completed on a Runner &lt;br /&gt; error -- invocation encountered an error on a Runner unknown -- transient error encountered when fetching invocation state (prepared, created, sent, queued, running, aborted, completed, error, unknown) (example: sent)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="timing" /></td>
    <td><code>array</code></td>
    <td>A list of state transitions with timestamps, sorted in ascending order by timestamp. Only the 'created' transition is guaranteed to exist at any time.</td>
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
    <td></td>
    <td>Get an Automation Action Invocation&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-invocation_state"><code>invocation_state</code></a>, <a href="#parameter-not_invocation_state"><code>not_invocation_state</code></a>, <a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-action_id"><code>action_id</code></a></td>
    <td>List Invocations&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-invocation"><code>invocation</code></a></td>
    <td></td>
    <td>Invokes an Action&lt;br /&gt;</td>
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
<tr id="parameter-action_id">
    <td><CopyableCode code="action_id" /></td>
    <td><code>string</code></td>
    <td>Action ID</td>
</tr>
<tr id="parameter-incident_id">
    <td><CopyableCode code="incident_id" /></td>
    <td><code>string</code></td>
    <td>Incident ID</td>
</tr>
<tr id="parameter-invocation_state">
    <td><CopyableCode code="invocation_state" /></td>
    <td><code>string</code></td>
    <td>Invocation state</td>
</tr>
<tr id="parameter-not_invocation_state">
    <td><CopyableCode code="not_invocation_state" /></td>
    <td><code>string</code></td>
    <td>Invocation state inverse filter (matches invocations NOT in the specified state)</td>
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

Get an Automation Action Invocation&lt;br /&gt;

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
;
```
</TabItem>
<TabItem value="list">

List Invocations&lt;br /&gt;

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
WHERE invocation_state = '{{ invocation_state }}'
AND not_invocation_state = '{{ not_invocation_state }}'
AND incident_id = '{{ incident_id }}'
AND action_id = '{{ action_id }}'
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

Invokes an Action&lt;br /&gt;

```sql
INSERT INTO pagerduty.automation_actions.invocations (
invocation,
id
)
SELECT 
'{{ invocation }}' /* required */,
'{{ id }}'
RETURNING
invocation
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: invocations
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the invocations resource.
    - name: invocation
      value:
        metadata:
          incident_id: "{{ incident_id }}"
          alert_id: "{{ alert_id }}"
`}</CodeBlock>

</TabItem>
</Tabs>
