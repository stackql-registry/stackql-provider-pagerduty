--- 
title: service_cache_variables
hide_title: false
hide_table_of_contents: false
keywords:
  - service_cache_variables
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

Creates, updates, deletes, gets or lists a <code>service_cache_variables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_cache_variables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.event_orchestrations.service_cache_variables" /></td></tr>
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

The fetched Cache Variable for this Event Orchestration.

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
<TabItem value="list">

The Cache Variables for this Event Orchestration.

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
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-cache_variable_id"><code>cache_variable_id</code></a></td>
    <td></td>
    <td>Get a Cache Variable for a Service Event Orchestration.&lt;br /&gt;&lt;br /&gt;Cache Variables allow you to store event data on an Event Orchestration, which can then be used in Event Orchestration rules as part of conditions or actions.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a></td>
    <td></td>
    <td>List Cache Variables for a Service Event Orchestration.&lt;br /&gt;&lt;br /&gt;Cache Variables allow you to store event data on an Event Orchestration, which can then be used in Event Orchestration rules as part of conditions or actions.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-cache_variable"><code>cache_variable</code></a></td>
    <td></td>
    <td>Create a Cache Variable for a Service Event Orchestration.&lt;br /&gt;&lt;br /&gt;Cache Variables allow you to store event data on an Event Orchestration, which can then be used in Event Orchestration rules as part of conditions or actions.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-cache_variable_id"><code>cache_variable_id</code></a>, <a href="#parameter-cache_variable"><code>cache_variable</code></a></td>
    <td></td>
    <td>Update a Cache Variable for a Service Event Orchestration.&lt;br /&gt;&lt;br /&gt;Cache Variables allow you to store event data on an Event Orchestration, which can then be used in Event Orchestration rules as part of conditions or actions.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-cache_variable_id"><code>cache_variable_id</code></a></td>
    <td></td>
    <td>Delete a Cache Variable for a Service Event Orchestration.&lt;br /&gt;&lt;br /&gt;Cache Variables allow you to store event data on an Event Orchestration, which can then be used in Event Orchestration rules as part of conditions or actions.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;</td>
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
<tr id="parameter-cache_variable_id">
    <td><CopyableCode code="cache_variable_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a Cache Variable.</td>
</tr>
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>The service ID</td>
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

Get a Cache Variable for a Service Event Orchestration.&lt;br /&gt;&lt;br /&gt;Cache Variables allow you to store event data on an Event Orchestration, which can then be used in Event Orchestration rules as part of conditions or actions.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;

```sql
SELECT
*
FROM pagerduty.event_orchestrations.service_cache_variables
WHERE service_id = '{{ service_id }}' -- required
AND cache_variable_id = '{{ cache_variable_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List Cache Variables for a Service Event Orchestration.&lt;br /&gt;&lt;br /&gt;Cache Variables allow you to store event data on an Event Orchestration, which can then be used in Event Orchestration rules as part of conditions or actions.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;

```sql
SELECT
*
FROM pagerduty.event_orchestrations.service_cache_variables
WHERE service_id = '{{ service_id }}' -- required
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

Create a Cache Variable for a Service Event Orchestration.&lt;br /&gt;&lt;br /&gt;Cache Variables allow you to store event data on an Event Orchestration, which can then be used in Event Orchestration rules as part of conditions or actions.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.event_orchestrations.service_cache_variables (
cache_variable,
service_id
)
SELECT 
'{{ cache_variable }}' /* required */,
'{{ service_id }}'
RETURNING
cache_variable
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_cache_variables
  props:
    - name: service_id
      value: "{{ service_id }}"
      description: Required parameter for the service_cache_variables resource.
    - name: cache_variable
      value: "{{ cache_variable }}"
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

Update a Cache Variable for a Service Event Orchestration.&lt;br /&gt;&lt;br /&gt;Cache Variables allow you to store event data on an Event Orchestration, which can then be used in Event Orchestration rules as part of conditions or actions.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;

```sql
UPDATE pagerduty.event_orchestrations.service_cache_variables
SET 
cache_variable = '{{ cache_variable }}'
WHERE 
service_id = '{{ service_id }}' --required
AND cache_variable_id = '{{ cache_variable_id }}' --required
AND cache_variable = '{{ cache_variable }}' --required
RETURNING
cache_variable;
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

Delete a Cache Variable for a Service Event Orchestration.&lt;br /&gt;&lt;br /&gt;Cache Variables allow you to store event data on an Event Orchestration, which can then be used in Event Orchestration rules as part of conditions or actions.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#event-orchestrations)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.event_orchestrations.service_cache_variables
WHERE service_id = '{{ service_id }}' --required
AND cache_variable_id = '{{ cache_variable_id }}' --required
;
```
</TabItem>
</Tabs>
