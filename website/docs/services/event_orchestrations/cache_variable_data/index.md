--- 
title: cache_variable_data
hide_title: false
hide_table_of_contents: false
keywords:
  - cache_variable_data
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

Creates, updates, deletes, gets or lists a <code>cache_variable_data</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cache_variable_data" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.event_orchestrations.cache_variable_data" /></td></tr>
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

The data on an `external_data` type Cache Variable for this Event Orchestration.

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
    <td><CopyableCode code="cache_variable_data" /></td>
    <td><code>string</code></td>
    <td>The string value to set on an external data cache variable configured with `data_type: string`.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the cache variable data was last updated.</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-cache_variable_id"><code>cache_variable_id</code></a></td>
    <td></td>
    <td>Get the data for an `external_data` type Cache Variable on a Global Orchestration.&lt;br /&gt;&lt;br /&gt;Use External Data type Cache Variables to store string, number, or boolean values via a dedicated API endpoint. These stored values can then be used in conditions or actions in Event Orchestration rules.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;Knowledge Base&#93;(https:​//support.pagerduty.com/main/docs/event-orchestration-cache-variables)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-cache_variable_id"><code>cache_variable_id</code></a>, <a href="#parameter-cache_variable_data"><code>cache_variable_data</code></a></td>
    <td></td>
    <td>Update data for an `external_data` type Cache Variable on a Global Event Orchestration&lt;br /&gt;&lt;br /&gt;Use External Data type Cache Variables to store string, number, or boolean values via a dedicated API endpoint. These stored values can then be used in conditions or actions in Event Orchestration rules.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;Knowledge Base&#93;(https:​//support.pagerduty.com/main/docs/event-orchestration-cache-variables)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-cache_variable_id"><code>cache_variable_id</code></a></td>
    <td></td>
    <td>Delete data for an `external_data` type Cache Variable on a Global Event Orchestration&lt;br /&gt;&lt;br /&gt;Use External Data type Cache Variables to store string, number, or boolean values via a dedicated API endpoint. These stored values can then be used in conditions or actions in Event Orchestration rules.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;Knowledge Base&#93;(https:​//support.pagerduty.com/main/docs/event-orchestration-cache-variables)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.write`&lt;br /&gt;</td>
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

Get the data for an `external_data` type Cache Variable on a Global Orchestration.&lt;br /&gt;&lt;br /&gt;Use External Data type Cache Variables to store string, number, or boolean values via a dedicated API endpoint. These stored values can then be used in conditions or actions in Event Orchestration rules.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;Knowledge Base&#93;(https:​//support.pagerduty.com/main/docs/event-orchestration-cache-variables)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.read`&lt;br /&gt;

```sql
SELECT
cache_variable_data,
updated_at
FROM pagerduty.event_orchestrations.cache_variable_data
WHERE id = '{{ id }}' -- required
AND cache_variable_id = '{{ cache_variable_id }}' -- required
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

Update data for an `external_data` type Cache Variable on a Global Event Orchestration&lt;br /&gt;&lt;br /&gt;Use External Data type Cache Variables to store string, number, or boolean values via a dedicated API endpoint. These stored values can then be used in conditions or actions in Event Orchestration rules.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;Knowledge Base&#93;(https:​//support.pagerduty.com/main/docs/event-orchestration-cache-variables)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.write`&lt;br /&gt;

```sql
UPDATE pagerduty.event_orchestrations.cache_variable_data
SET 
cache_variable_data = '{{ cache_variable_data }}'
WHERE 
id = '{{ id }}' --required
AND cache_variable_id = '{{ cache_variable_id }}' --required
AND cache_variable_data = '{{ cache_variable_data }}' --required
RETURNING
cache_variable_data,
updated_at;
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

Delete data for an `external_data` type Cache Variable on a Global Event Orchestration&lt;br /&gt;&lt;br /&gt;Use External Data type Cache Variables to store string, number, or boolean values via a dedicated API endpoint. These stored values can then be used in conditions or actions in Event Orchestration rules.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;Knowledge Base&#93;(https:​//support.pagerduty.com/main/docs/event-orchestration-cache-variables)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_orchestrations.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.event_orchestrations.cache_variable_data
WHERE id = '{{ id }}' --required
AND cache_variable_id = '{{ cache_variable_id }}' --required
;
```
</TabItem>
</Tabs>
