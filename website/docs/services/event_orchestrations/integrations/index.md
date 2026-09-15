--- 
title: integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - integrations
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

Creates, updates, deletes, gets or lists an <code>integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.event_orchestrations.integrations" /></td></tr>
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

An Integration for this Event Orchestration.

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
    <td>ID of the Integration.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>Name of the Integration.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The Integrations for this Event Orchestration.

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
    <td>ID of the Integration.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>Name of the Integration.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a></td>
    <td></td>
    <td>Get an Integration associated with this Event Orchestrations.&lt;br /&gt;&lt;br /&gt;You can use the Routing Key from this Integration to send events to PagerDuty!&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>List the Integrations associated with this Event Orchestrations.&lt;br /&gt;&lt;br /&gt;You can use a Routing Key from these Integrations to send events to PagerDuty!&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-integration"><code>integration</code></a></td>
    <td></td>
    <td>Create an Integration associated with this Event Orchestration.&lt;br /&gt;&lt;br /&gt;You can then use the Routing Key from this new Integration to send events to PagerDuty!&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-integration"><code>integration</code></a></td>
    <td></td>
    <td>Update an Integration associated with this Event Orchestrations.&lt;br /&gt;&lt;br /&gt;You can use the Routing Key from this Integration to send events to PagerDuty!&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a></td>
    <td></td>
    <td>Delete an Integration and its associated Routing Key.&lt;br /&gt;&lt;br /&gt;Once deleted, PagerDuty will drop all future events sent to PagerDuty using the Routing Key.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#migrate"><CopyableCode code="migrate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-source_id"><code>source_id</code></a>, <a href="#parameter-source_type"><code>source_type</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a></td>
    <td></td>
    <td>Move an Integration and its Routing Key from the Event Orchestration specified in the request payload, to the Event Orchestration specified in the request URL.&lt;br /&gt;&lt;br /&gt;Any future events sent to this Integration's Routing Key will be processed by this Event Orchestration's Rules.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.write`&lt;br /&gt;</td>
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
<tr id="parameter-integration_id">
    <td><CopyableCode code="integration_id" /></td>
    <td><code>string</code></td>
    <td>The ID of an Integration.</td>
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

Get an Integration associated with this Event Orchestrations.&lt;br /&gt;&lt;br /&gt;You can use the Routing Key from this Integration to send events to PagerDuty!&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.read`&lt;br /&gt;

```sql
SELECT
id,
label,
parameters
FROM pagerduty.event_orchestrations.integrations
WHERE id = '{{ id }}' -- required
AND integration_id = '{{ integration_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List the Integrations associated with this Event Orchestrations.&lt;br /&gt;&lt;br /&gt;You can use a Routing Key from these Integrations to send events to PagerDuty!&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.read`&lt;br /&gt;

```sql
SELECT
id,
label,
parameters
FROM pagerduty.event_orchestrations.integrations
WHERE id = '{{ id }}' -- required
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

Create an Integration associated with this Event Orchestration.&lt;br /&gt;&lt;br /&gt;You can then use the Routing Key from this new Integration to send events to PagerDuty!&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.event_orchestrations.integrations (
integration,
id
)
SELECT 
'{{ integration }}' /* required */,
'{{ id }}'
RETURNING
integration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: integrations
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the integrations resource.
    - name: integration
      value:
        label: "{{ label }}"
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

Update an Integration associated with this Event Orchestrations.&lt;br /&gt;&lt;br /&gt;You can use the Routing Key from this Integration to send events to PagerDuty!&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.write`&lt;br /&gt;

```sql
UPDATE pagerduty.event_orchestrations.integrations
SET 
integration = '{{ integration }}'
WHERE 
id = '{{ id }}' --required
AND integration_id = '{{ integration_id }}' --required
AND integration = '{{ integration }}' --required
RETURNING
integration;
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

Delete an Integration and its associated Routing Key.&lt;br /&gt;&lt;br /&gt;Once deleted, PagerDuty will drop all future events sent to PagerDuty using the Routing Key.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.event_orchestrations.integrations
WHERE id = '{{ id }}' --required
AND integration_id = '{{ integration_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="migrate"
    values={[
        { label: 'migrate', value: 'migrate' }
    ]}
>
<TabItem value="migrate">

Move an Integration and its Routing Key from the Event Orchestration specified in the request payload, to the Event Orchestration specified in the request URL.&lt;br /&gt;&lt;br /&gt;Any future events sent to this Integration's Routing Key will be processed by this Event Orchestration's Rules.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.write`&lt;br /&gt;

```sql
EXEC pagerduty.event_orchestrations.integrations.migrate 
@id='{{ id }}' --required 
@@json=
'{
"source_id": "{{ source_id }}", 
"source_type": "{{ source_type }}", 
"integration_id": "{{ integration_id }}"
}'
;
```
</TabItem>
</Tabs>
