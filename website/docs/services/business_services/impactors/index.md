--- 
title: impactors
hide_title: false
hide_table_of_contents: false
keywords:
  - impactors
  - business_services
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

Creates, updates, deletes, gets or lists an <code>impactors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="impactors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.business_services.impactors" /></td></tr>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The kind of object that is impacting (incident)</td>
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
    <td><a href="#parameter-ids[]"><code>ids[]</code></a></td>
    <td>Retrieve a list of Impactors for the top-level Business Services on the account. Impactors are currently limited to Incidents.&lt;br /&gt;&lt;br /&gt;This endpoint does not return an exhaustive list of Impactors but rather provides access to the highest priority Impactors for the Business Services in question up to the limit of 200.&lt;br /&gt;&lt;br /&gt;To get Impactors for a specific set of Business Services, use the `ids&#91;&#93;` parameter.&lt;br /&gt;&lt;br /&gt;The returned Impactors are sorted first by priority and secondarily by their creation date.&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;</td>
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
<tr id="parameter-ids[]">
    <td><CopyableCode code="ids[]" /></td>
    <td><code>string</code></td>
    <td>The IDs of the resources.</td>
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

Retrieve a list of Impactors for the top-level Business Services on the account. Impactors are currently limited to Incidents.&lt;br /&gt;&lt;br /&gt;This endpoint does not return an exhaustive list of Impactors but rather provides access to the highest priority Impactors for the Business Services in question up to the limit of 200.&lt;br /&gt;&lt;br /&gt;To get Impactors for a specific set of Business Services, use the `ids&#91;&#93;` parameter.&lt;br /&gt;&lt;br /&gt;The returned Impactors are sorted first by priority and secondarily by their creation date.&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;

```sql
SELECT
id,
type
FROM pagerduty.business_services.impactors
WHERE ids[] = '{{ ids[] }}'
;
```
</TabItem>
</Tabs>
