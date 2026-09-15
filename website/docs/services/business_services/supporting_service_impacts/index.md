--- 
title: supporting_service_impacts
hide_title: false
hide_table_of_contents: false
keywords:
  - supporting_service_impacts
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

Creates, updates, deletes, gets or lists a <code>supporting_service_impacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="supporting_service_impacts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.business_services.supporting_service_impacts" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="additional_fields" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current impact status of the object (impacted, not_impacted)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The kind of object that has been impacted (business_service)</td>
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
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-additional_fields[]"><code>additional_fields[]</code></a>, <a href="#parameter-ids[]"><code>ids[]</code></a></td>
    <td>Retrieve of Business Services that support the given Business Service sorted by highest Impact with `status` included.&lt;br /&gt;This endpoint does not return an exhaustive list of Business Services but rather provides access to the most impacted up to the limit of 200.&lt;br /&gt;&lt;br /&gt;The returned Business Services are sorted first by Impact, secondarily by most recently impacted, and finally by name.&lt;br /&gt;&lt;br /&gt;To get impact information about a specific set of Business Services, use the `ids&#91;&#93;` parameter on the `/business_services/impacts` endpoint.&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;</td>
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
    <td>The ID of the resource.</td>
</tr>
<tr id="parameter-additional_fields[]">
    <td><CopyableCode code="additional_fields[]" /></td>
    <td><code>string</code></td>
    <td>Provides access to additional fields such as highest priority per business service and total impacted count</td>
</tr>
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

Retrieve of Business Services that support the given Business Service sorted by highest Impact with `status` included.&lt;br /&gt;This endpoint does not return an exhaustive list of Business Services but rather provides access to the most impacted up to the limit of 200.&lt;br /&gt;&lt;br /&gt;The returned Business Services are sorted first by Impact, secondarily by most recently impacted, and finally by name.&lt;br /&gt;&lt;br /&gt;To get impact information about a specific set of Business Services, use the `ids&#91;&#93;` parameter on the `/business_services/impacts` endpoint.&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;

```sql
SELECT
id,
name,
additional_fields,
status,
type
FROM pagerduty.business_services.supporting_service_impacts
WHERE id = '{{ id }}' -- required
AND additional_fields[] = '{{ additional_fields[] }}'
AND ids[] = '{{ ids[] }}'
;
```
</TabItem>
</Tabs>
