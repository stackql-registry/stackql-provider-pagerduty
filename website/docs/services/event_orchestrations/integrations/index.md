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
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>integrations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.event_orchestrations.integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_orchestration_integration"
    values={[
        { label: 'get_orchestration_integration', value: 'get_orchestration_integration' },
        { label: 'list_orchestration_integrations', value: 'list_orchestration_integrations' }
    ]}
>
<TabItem value="get_orchestration_integration">

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
<TabItem value="list_orchestration_integrations">

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
    <td><a href="#get_orchestration_integration"><CopyableCode code="get_orchestration_integration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get an Integration associated with this Event Orchestrations.<br /><br />You can use the Routing Key from this Integration to send events to PagerDuty!<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.read`<br /></td>
</tr>
<tr>
    <td><a href="#list_orchestration_integrations"><CopyableCode code="list_orchestration_integrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>List the Integrations associated with this Event Orchestrations.<br /><br />You can use a Routing Key from these Integrations to send events to PagerDuty!<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.read`<br /></td>
</tr>
<tr>
    <td><a href="#delete_orchestration_integration"><CopyableCode code="delete_orchestration_integration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Delete an Integration and its associated Routing Key.<br /><br />Once deleted, PagerDuty will drop all future events sent to PagerDuty using the Routing Key.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.write`<br /></td>
</tr>
<tr>
    <td><a href="#_list_orchestration_integrations"><CopyableCode code="_list_orchestration_integrations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>List the Integrations associated with this Event Orchestrations.<br /><br />You can use a Routing Key from these Integrations to send events to PagerDuty!<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.read`<br /></td>
</tr>
<tr>
    <td><a href="#post_orchestration_integration"><CopyableCode code="post_orchestration_integration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-integration"><code>integration</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create an Integration associated with this Event Orchestration.<br /><br />You can then use the Routing Key from this new Integration to send events to PagerDuty!<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.write`<br /></td>
</tr>
<tr>
    <td><a href="#_get_orchestration_integration"><CopyableCode code="_get_orchestration_integration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get an Integration associated with this Event Orchestrations.<br /><br />You can use the Routing Key from this Integration to send events to PagerDuty!<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_orchestration_integration"><CopyableCode code="update_orchestration_integration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-integration"><code>integration</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Update an Integration associated with this Event Orchestrations.<br /><br />You can use the Routing Key from this Integration to send events to PagerDuty!<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.write`<br /></td>
</tr>
<tr>
    <td><a href="#migrate_orchestration_integration"><CopyableCode code="migrate_orchestration_integration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-source_id"><code>source_id</code></a>, <a href="#parameter-source_type"><code>source_type</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Move an Integration and its Routing Key from the Event Orchestration specified in the request payload, to the Event Orchestration specified in the request URL.<br /><br />Any future events sent to this Integration's Routing Key will be processed by this Event Orchestration's Rules.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.write`<br /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_orchestration_integration"
    values={[
        { label: 'get_orchestration_integration', value: 'get_orchestration_integration' },
        { label: 'list_orchestration_integrations', value: 'list_orchestration_integrations' }
    ]}
>
<TabItem value="get_orchestration_integration">

Get an Integration associated with this Event Orchestrations.<br /><br />You can use the Routing Key from this Integration to send events to PagerDuty!<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.read`<br />

```sql
SELECT
id,
label,
parameters
FROM pagerduty.event_orchestrations.integrations
WHERE id = '{{ id }}' -- required
AND integration_id = '{{ integration_id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="list_orchestration_integrations">

List the Integrations associated with this Event Orchestrations.<br /><br />You can use a Routing Key from these Integrations to send events to PagerDuty!<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.read`<br />

```sql
SELECT
id,
label,
parameters
FROM pagerduty.event_orchestrations.integrations
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_orchestration_integration"
    values={[
        { label: 'delete_orchestration_integration', value: 'delete_orchestration_integration' }
    ]}
>
<TabItem value="delete_orchestration_integration">

Delete an Integration and its associated Routing Key.<br /><br />Once deleted, PagerDuty will drop all future events sent to PagerDuty using the Routing Key.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.write`<br />

```sql
DELETE FROM pagerduty.event_orchestrations.integrations
WHERE id = '{{ id }}' --required
AND integration_id = '{{ integration_id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_orchestration_integrations"
    values={[
        { label: '_list_orchestration_integrations', value: '_list_orchestration_integrations' },
        { label: 'post_orchestration_integration', value: 'post_orchestration_integration' },
        { label: '_get_orchestration_integration', value: '_get_orchestration_integration' },
        { label: 'update_orchestration_integration', value: 'update_orchestration_integration' },
        { label: 'migrate_orchestration_integration', value: 'migrate_orchestration_integration' }
    ]}
>
<TabItem value="_list_orchestration_integrations">

List the Integrations associated with this Event Orchestrations.<br /><br />You can use a Routing Key from these Integrations to send events to PagerDuty!<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.read`<br />

```sql
EXEC pagerduty.event_orchestrations.integrations._list_orchestration_integrations 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="post_orchestration_integration">

Create an Integration associated with this Event Orchestration.<br /><br />You can then use the Routing Key from this new Integration to send events to PagerDuty!<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.write`<br />

```sql
EXEC pagerduty.event_orchestrations.integrations.post_orchestration_integration 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"integration": "{{ integration }}"
}'
;
```
</TabItem>
<TabItem value="_get_orchestration_integration">

Get an Integration associated with this Event Orchestrations.<br /><br />You can use the Routing Key from this Integration to send events to PagerDuty!<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.read`<br />

```sql
EXEC pagerduty.event_orchestrations.integrations._get_orchestration_integration 
@id='{{ id }}' --required, 
@integration_id='{{ integration_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="update_orchestration_integration">

Update an Integration associated with this Event Orchestrations.<br /><br />You can use the Routing Key from this Integration to send events to PagerDuty!<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.write`<br />

```sql
EXEC pagerduty.event_orchestrations.integrations.update_orchestration_integration 
@id='{{ id }}' --required, 
@integration_id='{{ integration_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"integration": "{{ integration }}"
}'
;
```
</TabItem>
<TabItem value="migrate_orchestration_integration">

Move an Integration and its Routing Key from the Event Orchestration specified in the request payload, to the Event Orchestration specified in the request URL.<br /><br />Any future events sent to this Integration's Routing Key will be processed by this Event Orchestration's Rules.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.write`<br />

```sql
EXEC pagerduty.event_orchestrations.integrations.migrate_orchestration_integration 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
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
