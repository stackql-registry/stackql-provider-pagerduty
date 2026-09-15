--- 
title: memories
hide_title: false
hide_table_of_contents: false
keywords:
  - memories
  - sre_agent
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

Creates, updates, deletes, gets or lists a <code>memories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="memories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.sre_agent.memories" /></td></tr>
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

An array of SRE Agent memories.

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
    <td>The unique identifier for this memory.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Additional attributes associated with this memory.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The content of the SRE memory.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the memory was created.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the memory was last updated.</td>
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
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>Search SRE Agent memories for the account.&lt;br /&gt;&lt;br /&gt;Memories are knowledge learned by the SRE Agent, including service runbooks, service profiles,&lt;br /&gt;incident playbooks, and incident summaries. Filter by service ID, incident ID, or memory type to retrieve&lt;br /&gt;relevant memories.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-memory"><code>memory</code></a></td>
    <td></td>
    <td>Update an existing SRE Agent memory. Changes to the runbook may not update in a currently ongoing conversation, but will be available to new conversations. To modify the runbook for an in progress conversation update the runbook via the agent instead.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `sre_agent.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Permanently delete an SRE Agent memory. Deleting a runbook may not delete it immediately from a currently running conversation, but will remove it from all future conversations. To modify an in progress conversation ask the agent to delete the runbook instead.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `sre_agent.write`&lt;br /&gt;</td>
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
    <td>Filter memories by incident ID</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The number of results to return per page.</td>
</tr>
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>Filter memories by service ID</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Filter memories by type</td>
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

Search SRE Agent memories for the account.&lt;br /&gt;&lt;br /&gt;Memories are knowledge learned by the SRE Agent, including service runbooks, service profiles,&lt;br /&gt;incident playbooks, and incident summaries. Filter by service ID, incident ID, or memory type to retrieve&lt;br /&gt;relevant memories.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident.read`&lt;br /&gt;

```sql
SELECT
id,
attributes,
content,
created_at,
updated_at
FROM pagerduty.sre_agent.memories
WHERE limit = '{{ limit }}'
AND service_id = '{{ service_id }}'
AND incident_id = '{{ incident_id }}'
AND type = '{{ type }}'
;
```
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

Update an existing SRE Agent memory. Changes to the runbook may not update in a currently ongoing conversation, but will be available to new conversations. To modify the runbook for an in progress conversation update the runbook via the agent instead.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `sre_agent.write`&lt;br /&gt;

```sql
UPDATE pagerduty.sre_agent.memories
SET 
memory = '{{ memory }}'
WHERE 
id = '{{ id }}' --required
AND memory = '{{ memory }}' --required
RETURNING
memory;
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

Permanently delete an SRE Agent memory. Deleting a runbook may not delete it immediately from a currently running conversation, but will remove it from all future conversations. To modify an in progress conversation ask the agent to delete the runbook instead.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `sre_agent.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.sre_agent.memories
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
