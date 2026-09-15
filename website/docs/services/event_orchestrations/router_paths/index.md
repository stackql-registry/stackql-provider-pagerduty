--- 
title: router_paths
hide_title: false
hide_table_of_contents: false
keywords:
  - router_paths
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

Creates, updates, deletes, gets or lists a <code>router_paths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="router_paths" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.event_orchestrations.router_paths" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

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
    <td><code>object</code></td>
    <td>When none of the Rules in a set match an event, we apply the catch_all actions to the event.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the object was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Reference to the user that created the object.</td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sets" /></td>
    <td><code>array</code></td>
    <td>Must contain at least a "start" set, but can contain any number of additional sets that are routed to by other rules to form a directional graph of rules.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (default: service)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the object was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>object</code></td>
    <td>Reference to the user that last updated the object.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version of these Orchestration Rules</td>
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
    <td>Get a Global Orchestration's Routing Rules.&lt;br /&gt;&lt;br /&gt;An Orchestration Router allows you to create a set of Event Rules. The Router evaluates Events you send to this Global Orchestration against each of its rules, one at a time, and routes the event to a specific Service based on the first rule that matches. If an event doesn't match any rules, it'll be sent to service specified in as the `catch_all` or the "Unrouted" Orchestration if no service is specified.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-orchestration_path"><code>orchestration_path</code></a></td>
    <td></td>
    <td>Update a Global Orchestration's Routing Rules.&lt;br /&gt;&lt;br /&gt;An Orchestration Router allows you to create a set of Event Rules. The Router evaluates Events you send to this Global Orchestration against each of its rules, one at a time, and routes the event to a specific Service based on the first rule that matches. If an event doesn't match any rules, it'll be sent to service specified in as the `catch_all` or the "Unrouted" Orchestration if no service is specified.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.write`&lt;br /&gt;</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get a Global Orchestration's Routing Rules.&lt;br /&gt;&lt;br /&gt;An Orchestration Router allows you to create a set of Event Rules. The Router evaluates Events you send to this Global Orchestration against each of its rules, one at a time, and routes the event to a specific Service based on the first rule that matches. If an event doesn't match any rules, it'll be sent to service specified in as the `catch_all` or the "Unrouted" Orchestration if no service is specified.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.read`&lt;br /&gt;

```sql
SELECT
catch_all,
created_at,
created_by,
parent,
sets,
type,
updated_at,
updated_by,
version
FROM pagerduty.event_orchestrations.router_paths
WHERE id = '{{ id }}' -- required
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

Update a Global Orchestration's Routing Rules.&lt;br /&gt;&lt;br /&gt;An Orchestration Router allows you to create a set of Event Rules. The Router evaluates Events you send to this Global Orchestration against each of its rules, one at a time, and routes the event to a specific Service based on the first rule that matches. If an event doesn't match any rules, it'll be sent to service specified in as the `catch_all` or the "Unrouted" Orchestration if no service is specified.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.write`&lt;br /&gt;

```sql
UPDATE pagerduty.event_orchestrations.router_paths
SET 
orchestration_path = '{{ orchestration_path }}'
WHERE 
id = '{{ id }}' --required
AND orchestration_path = '{{ orchestration_path }}' --required
RETURNING
orchestration_path,
warnings;
```
</TabItem>
</Tabs>
