--- 
title: license_allocations
hide_title: false
hide_table_of_contents: false
keywords:
  - license_allocations
  - licenses
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

Creates, updates, deletes, gets or lists a <code>license_allocations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>license_allocations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.licenses.license_allocations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_license_allocations"
    values={[
        { label: 'list_license_allocations', value: 'list_license_allocations' }
    ]}
>
<TabItem value="list_license_allocations">

License allocations to Users within your Account

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
    <td><CopyableCode code="allocated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the date and time the License was allocated to the User</td>
</tr>
<tr>
    <td><CopyableCode code="license" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
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
    <td><a href="#list_license_allocations"><CopyableCode code="list_license_allocations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a></td>
    <td>List the Licenses allocated to Users within your Account<br /><br />Scoped OAuth requires: `licenses.read`<br /></td>
</tr>
<tr>
    <td><a href="#_list_license_allocations"><CopyableCode code="_list_license_allocations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a></td>
    <td>List the Licenses allocated to Users within your Account<br /><br />Scoped OAuth requires: `licenses.read`<br /></td>
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
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page.</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer</code></td>
    <td>Offset to start pagination search results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_license_allocations"
    values={[
        { label: 'list_license_allocations', value: 'list_license_allocations' }
    ]}
>
<TabItem value="list_license_allocations">

List the Licenses allocated to Users within your Account<br /><br />Scoped OAuth requires: `licenses.read`<br />

```sql
SELECT
allocated_at,
license,
user
FROM pagerduty.licenses.license_allocations
WHERE Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_license_allocations"
    values={[
        { label: '_list_license_allocations', value: '_list_license_allocations' }
    ]}
>
<TabItem value="_list_license_allocations">

List the Licenses allocated to Users within your Account<br /><br />Scoped OAuth requires: `licenses.read`<br />

```sql
EXEC pagerduty.licenses.license_allocations._list_license_allocations 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}'
;
```
</TabItem>
</Tabs>
