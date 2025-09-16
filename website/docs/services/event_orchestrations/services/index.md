--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>services</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.event_orchestrations.services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_orch_path_service"
    values={[
        { label: 'get_orch_path_service', value: 'get_orch_path_service' }
    ]}
>
<TabItem value="get_orch_path_service">

The Service Orchestration object.

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sets" /></td>
    <td><code></code></td>
    <td>A Service Orchestration must contain at least a "start" set, but can contain any number of additional sets that are routed to by other rules to form a directional graph.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code></code></td>
    <td>Indicates that these are sets of rules belonging to a service. (default: service)</td>
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
    <td><a href="#get_orch_path_service"><CopyableCode code="get_orch_path_service" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get a Service Orchestration.<br /><br />A Service Orchestration allows you to create a set of Event Rules. The Service Orchestration evaluates Events sent to this Service against each of its rules, beginning with the rules in the "start" set. When a matching rule is found, it can modify and enhance the event and can route the event to another set of rules within this Service Orchestration for further processing.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `services.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_orch_path_service"><CopyableCode code="_get_orch_path_service" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get a Service Orchestration.<br /><br />A Service Orchestration allows you to create a set of Event Rules. The Service Orchestration evaluates Events sent to this Service against each of its rules, beginning with the rules in the "start" set. When a matching rule is found, it can modify and enhance the event and can route the event to another set of rules within this Service Orchestration for further processing.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `services.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_orch_path_service"><CopyableCode code="update_orch_path_service" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-orchestration_path"><code>orchestration_path</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Update a Service Orchestration.<br /><br />A Service Orchestration allows you to create a set of Event Rules. The Service Orchestration evaluates Events sent to this Service against each of its rules, beginning with the rules in the "start" set. When a matching rule is found, it can modify and enhance the event and can route the event to another set of rules within this Service Orchestration for further processing.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `services.write`<br /></td>
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
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>The service ID</td>
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
    defaultValue="get_orch_path_service"
    values={[
        { label: 'get_orch_path_service', value: 'get_orch_path_service' }
    ]}
>
<TabItem value="get_orch_path_service">

Get a Service Orchestration.<br /><br />A Service Orchestration allows you to create a set of Event Rules. The Service Orchestration evaluates Events sent to this Service against each of its rules, beginning with the rules in the "start" set. When a matching rule is found, it can modify and enhance the event and can route the event to another set of rules within this Service Orchestration for further processing.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `services.read`<br />

```sql
SELECT
catch_all,
parent,
sets,
type
FROM pagerduty.event_orchestrations.services
WHERE service_id = '{{ service_id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_orch_path_service"
    values={[
        { label: '_get_orch_path_service', value: '_get_orch_path_service' },
        { label: 'update_orch_path_service', value: 'update_orch_path_service' }
    ]}
>
<TabItem value="_get_orch_path_service">

Get a Service Orchestration.<br /><br />A Service Orchestration allows you to create a set of Event Rules. The Service Orchestration evaluates Events sent to this Service against each of its rules, beginning with the rules in the "start" set. When a matching rule is found, it can modify and enhance the event and can route the event to another set of rules within this Service Orchestration for further processing.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `services.read`<br />

```sql
EXEC pagerduty.event_orchestrations.services._get_orch_path_service 
@service_id='{{ service_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="update_orch_path_service">

Update a Service Orchestration.<br /><br />A Service Orchestration allows you to create a set of Event Rules. The Service Orchestration evaluates Events sent to this Service against each of its rules, beginning with the rules in the "start" set. When a matching rule is found, it can modify and enhance the event and can route the event to another set of rules within this Service Orchestration for further processing.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)<br /><br />Scoped OAuth requires: `services.write`<br />

```sql
EXEC pagerduty.event_orchestrations.services.update_orch_path_service 
@service_id='{{ service_id }}' --required, 
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
