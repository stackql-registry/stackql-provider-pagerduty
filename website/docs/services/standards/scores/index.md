--- 
title: scores
hide_title: false
hide_table_of_contents: false
keywords:
  - scores
  - standards
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

Creates, updates, deletes, gets or lists a <code>scores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.standards.scores" /></td></tr>
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
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td> (technical_service)</td>
</tr>
<tr>
    <td><CopyableCode code="score" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="standards" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td> (technical_service)</td>
</tr>
<tr>
    <td><CopyableCode code="score" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="standards" /></td>
    <td><code>array</code></td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-resource_type"><code>resource_type</code></a></td>
    <td></td>
    <td>List standards applied to a specific resource&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `standards.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ids"><code>ids</code></a>, <a href="#parameter-resource_type"><code>resource_type</code></a></td>
    <td></td>
    <td>List standards applied to a set of resources&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `standards.read`&lt;br /&gt;</td>
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
    <td>Id of the resource to apply the standards.</td>
</tr>
<tr id="parameter-ids">
    <td><CopyableCode code="ids" /></td>
    <td><code>array</code></td>
    <td>Ids of resources to apply the standards. Maximum of 100 items</td>
</tr>
<tr id="parameter-resource_type">
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td></td>
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

List standards applied to a specific resource&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `standards.read`&lt;br /&gt;

```sql
SELECT
resource_id,
resource_type,
score,
standards
FROM pagerduty.standards.scores
WHERE id = '{{ id }}' -- required
AND resource_type = '{{ resource_type }}' -- required
;
```
</TabItem>
<TabItem value="list">

List standards applied to a set of resources&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `standards.read`&lt;br /&gt;

```sql
SELECT
resource_id,
resource_type,
score,
standards
FROM pagerduty.standards.scores
WHERE ids = '{{ ids }}' -- required
AND resource_type = '{{ resource_type }}' -- required
;
```
</TabItem>
</Tabs>
