--- 
title: router
hide_title: false
hide_table_of_contents: false
keywords:
  - router
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

Creates, updates, deletes, gets or lists a <code>router</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>router</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.event_orchestrations.router" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_orch_path_router"
    values={[
        { label: 'get_orch_path_router', value: 'get_orch_path_router' }
    ]}
>
<TabItem value="get_orch_path_router">

The Orchestration Router object.

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
    <td><CopyableCode code="catch_all" /></td>
    <td><code></code></td>
    <td>When none of the rules match an event, the event will be routed according to the catch_all settings.</td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sets" /></td>
    <td><code></code></td>
    <td>The Router contains a single set of rules (the "start" set). The Router evaluates Events against these Rules, one at a time, and routes each Event to a specific Service based on the first rule that matches.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code></code></td>
    <td>Indicates that these are a "router" type set of rules. (default: router)</td>
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
    <td><a href="#get_orch_path_router"><CopyableCode code="get_orch_path_router" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get a Global Orchestration's Routing Rules.<br /><br />An Orchestration Router allows you to create a set of Event Rules. The Router evaluates Events you send to this Global Orchestration against each of its rules, one at a time, and routes the event to a specific Service based on the first rule that matches. If an event doesn't match any rules, it'll be sent to service specified in as the `catch_all` or the "Unrouted" Orchestration if no service is specified.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_orch_path_router"><CopyableCode code="_get_orch_path_router" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get a Global Orchestration's Routing Rules.<br /><br />An Orchestration Router allows you to create a set of Event Rules. The Router evaluates Events you send to this Global Orchestration against each of its rules, one at a time, and routes the event to a specific Service based on the first rule that matches. If an event doesn't match any rules, it'll be sent to service specified in as the `catch_all` or the "Unrouted" Orchestration if no service is specified.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_orch_path_router"><CopyableCode code="update_orch_path_router" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-orchestration_path"><code>orchestration_path</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Update a Global Orchestration's Routing Rules.<br /><br />An Orchestration Router allows you to create a set of Event Rules. The Router evaluates Events you send to this Global Orchestration against each of its rules, one at a time, and routes the event to a specific Service based on the first rule that matches. If an event doesn't match any rules, it'll be sent to service specified in as the `catch_all` or the "Unrouted" Orchestration if no service is specified.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.write`<br /></td>
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
    defaultValue="get_orch_path_router"
    values={[
        { label: 'get_orch_path_router', value: 'get_orch_path_router' }
    ]}
>
<TabItem value="get_orch_path_router">

Get a Global Orchestration's Routing Rules.<br /><br />An Orchestration Router allows you to create a set of Event Rules. The Router evaluates Events you send to this Global Orchestration against each of its rules, one at a time, and routes the event to a specific Service based on the first rule that matches. If an event doesn't match any rules, it'll be sent to service specified in as the `catch_all` or the "Unrouted" Orchestration if no service is specified.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.read`<br />

```sql
SELECT
catch_all,
parent,
sets,
type
FROM pagerduty.event_orchestrations.router
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_orch_path_router"
    values={[
        { label: '_get_orch_path_router', value: '_get_orch_path_router' },
        { label: 'update_orch_path_router', value: 'update_orch_path_router' }
    ]}
>
<TabItem value="_get_orch_path_router">

Get a Global Orchestration's Routing Rules.<br /><br />An Orchestration Router allows you to create a set of Event Rules. The Router evaluates Events you send to this Global Orchestration against each of its rules, one at a time, and routes the event to a specific Service based on the first rule that matches. If an event doesn't match any rules, it'll be sent to service specified in as the `catch_all` or the "Unrouted" Orchestration if no service is specified.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.read`<br />

```sql
EXEC pagerduty.event_orchestrations.router._get_orch_path_router 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="update_orch_path_router">

Update a Global Orchestration's Routing Rules.<br /><br />An Orchestration Router allows you to create a set of Event Rules. The Router evaluates Events you send to this Global Orchestration against each of its rules, one at a time, and routes the event to a specific Service based on the first rule that matches. If an event doesn't match any rules, it'll be sent to service specified in as the `catch_all` or the "Unrouted" Orchestration if no service is specified.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `event_orchestrations.write`<br />

```sql
EXEC pagerduty.event_orchestrations.router.update_orch_path_router 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"orchestration_path": "{{ orchestration_path }}"
}'
;
```
</TabItem>
</Tabs>
