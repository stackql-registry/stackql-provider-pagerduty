--- 
title: event_orchestrations
hide_title: false
hide_table_of_contents: false
keywords:
  - event_orchestrations
  - event_orchestrations
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

Creates, updates, deletes, gets or lists an <code>event_orchestrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_orchestrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.event_orchestrations.event_orchestrations" /></td></tr>
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

The Orchestration object.

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
    <td>ID of the Orchestration.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the Orchestration.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the Orchestration was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Reference to the user that has created the Orchestration.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of this Orchestration's purpose.</td>
</tr>
<tr>
    <td><CopyableCode code="integrations" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="routes" /></td>
    <td><code>integer</code></td>
    <td>Number of different Service Orchestration being routed to</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>The API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="team" /></td>
    <td><code>object</code></td>
    <td>Reference to the team that owns the Orchestration. If none is specified, only admins have access.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the Orchestration was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>object</code></td>
    <td>Reference to the user that has updated the Orchestration last.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version of the Orchestration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated array of Event Orchestration objects.

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
    <td>ID of the Orchestration.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the Orchestration.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the Orchestration was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Reference to the user that has created the Orchestration.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of this Orchestration's purpose.</td>
</tr>
<tr>
    <td><CopyableCode code="routes" /></td>
    <td><code>integer</code></td>
    <td>Number of different Service Orchestration being routed to</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>The API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="team" /></td>
    <td><code>object</code></td>
    <td>Reference to the team that owns the Orchestration. If none is specified, only admins have access.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the Orchestration was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>object</code></td>
    <td>Reference to the user that has updated the Orchestration last.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version of the Orchestration.</td>
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
    <td>Get a Global Event Orchestration.&lt;br /&gt;&lt;br /&gt;Global Event Orchestrations allow you define a set of Global Rules and Router Rules, so that when you ingest events using the Orchestration's Routing Key your events will have actions applied via the Global Rules & then routed to the correct Service by the Router Rules, based on the event's content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a></td>
    <td>List all Global Event Orchestrations on an Account.&lt;br /&gt;&lt;br /&gt;Global Event Orchestrations allow you define a set of Global Rules and Router Rules, so that when you ingest events using the Orchestration's Routing Key your events will have actions applied via the Global Rules & then routed to the correct Service by the Router Rules, based on the event's content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-orchestration"><code>orchestration</code></a></td>
    <td></td>
    <td>Create a Global Event Orchestration.&lt;br /&gt;&lt;br /&gt;Global Event Orchestrations allow you define a set of Global Rules and Router Rules, so that when you ingest events using the Orchestration's Routing Key your events will have actions applied via the Global Rules & then routed to the correct Service by the Router Rules, based on the event's content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-orchestration"><code>orchestration</code></a></td>
    <td></td>
    <td>Update a Global Event Orchestration.&lt;br /&gt;&lt;br /&gt;Global Event Orchestrations allow you define a set of Global Rules and Router Rules, so that when you ingest events using the Orchestration's Routing Key your events will have actions applied via the Global Rules & then routed to the correct Service by the Router Rules, based on the event's content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete a Global Event Orchestration.&lt;br /&gt;&lt;br /&gt;Once deleted, you will no longer be able to ingest events into PagerDuty using this Orchestration's Routing Key.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.write`&lt;br /&gt;</td>
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
    <td>The ID of an Event Orchestration.</td>
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
<tr id="parameter-sort_by">
    <td><CopyableCode code="sort_by" /></td>
    <td><code>string</code></td>
    <td>Used to specify the field you wish to sort the results on.</td>
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

Get a Global Event Orchestration.&lt;br /&gt;&lt;br /&gt;Global Event Orchestrations allow you define a set of Global Rules and Router Rules, so that when you ingest events using the Orchestration's Routing Key your events will have actions applied via the Global Rules & then routed to the correct Service by the Router Rules, based on the event's content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.read`&lt;br /&gt;

```sql
SELECT
id,
name,
created_at,
created_by,
description,
integrations,
routes,
self,
team,
updated_at,
updated_by,
version
FROM pagerduty.event_orchestrations.event_orchestrations
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List all Global Event Orchestrations on an Account.&lt;br /&gt;&lt;br /&gt;Global Event Orchestrations allow you define a set of Global Rules and Router Rules, so that when you ingest events using the Orchestration's Routing Key your events will have actions applied via the Global Rules & then routed to the correct Service by the Router Rules, based on the event's content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.read`&lt;br /&gt;

```sql
SELECT
id,
name,
created_at,
created_by,
description,
routes,
self,
team,
updated_at,
updated_by,
version
FROM pagerduty.event_orchestrations.event_orchestrations
WHERE limit = '{{ limit }}'
AND offset = '{{ offset }}'
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

Create a Global Event Orchestration.&lt;br /&gt;&lt;br /&gt;Global Event Orchestrations allow you define a set of Global Rules and Router Rules, so that when you ingest events using the Orchestration's Routing Key your events will have actions applied via the Global Rules & then routed to the correct Service by the Router Rules, based on the event's content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.event_orchestrations.event_orchestrations (
orchestration
)
SELECT 
'{{ orchestration }}' /* required */
RETURNING
orchestration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: event_orchestrations
  props:
    - name: orchestration
      value:
        id: "{{ id }}"
        self: "{{ self }}"
        name: "{{ name }}"
        description: "{{ description }}"
        team:
          id: "{{ id }}"
          type: "{{ type }}"
          self: "{{ self }}"
        integrations:
          - id: "{{ id }}"
            label: "{{ label }}"
            parameters:
              routing_key: "{{ routing_key }}"
              type: "{{ type }}"
        routes: {{ routes }}
        created_at: "{{ created_at }}"
        created_by:
          id: "{{ id }}"
          type: "{{ type }}"
          self: "{{ self }}"
        updated_at: "{{ updated_at }}"
        updated_by:
          id: "{{ id }}"
          type: "{{ type }}"
          self: "{{ self }}"
        version: "{{ version }}"
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

Update a Global Event Orchestration.&lt;br /&gt;&lt;br /&gt;Global Event Orchestrations allow you define a set of Global Rules and Router Rules, so that when you ingest events using the Orchestration's Routing Key your events will have actions applied via the Global Rules & then routed to the correct Service by the Router Rules, based on the event's content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.write`&lt;br /&gt;

```sql
UPDATE pagerduty.event_orchestrations.event_orchestrations
SET 
orchestration = '{{ orchestration }}'
WHERE 
id = '{{ id }}' --required
AND orchestration = '{{ orchestration }}' --required
RETURNING
orchestration;
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

Delete a Global Event Orchestration.&lt;br /&gt;&lt;br /&gt;Once deleted, you will no longer be able to ingest events into PagerDuty using this Orchestration's Routing Key.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.event_orchestrations.event_orchestrations
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
