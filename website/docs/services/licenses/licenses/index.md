--- 
title: licenses
hide_title: false
hide_table_of_contents: false
keywords:
  - licenses
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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>licenses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="licenses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.licenses.licenses" /></td></tr>
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

Licenses associated with your Account

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
    <td>Uniquely identifies the resource</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the License. </td>
</tr>
<tr>
    <td><CopyableCode code="allocations_available" /></td>
    <td><code>integer</code></td>
    <td>How many of these licenses are available to be allocated to a user. If this value is "null" then there is no limit on the number of allocations allowed. </td>
</tr>
<tr>
    <td><CopyableCode code="current_value" /></td>
    <td><code>integer</code></td>
    <td>How many of these Licenses are currently allocated to Users</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the License. May include the names of add-ons associated with the License, if there are any. </td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td>HTML URL to access the License</td>
</tr>
<tr>
    <td><CopyableCode code="role_group" /></td>
    <td><code>string</code></td>
    <td>Indicates whether this License is assignable to full or stakeholder Users (FullUser, Stakeholder) (example: FullUser)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string</code></td>
    <td>API URL to access the License</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>Summary of the License</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of object</td>
</tr>
<tr>
    <td><CopyableCode code="valid_roles" /></td>
    <td><code>array</code></td>
    <td>The roles a User with this License can have</td>
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
    <td></td>
    <td>List the Licenses associated with your Account&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `licenses.read`&lt;br /&gt;</td>
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

List the Licenses associated with your Account&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `licenses.read`&lt;br /&gt;

```sql
SELECT
id,
name,
allocations_available,
current_value,
description,
html_url,
role_group,
self,
summary,
type,
valid_roles
FROM pagerduty.licenses.licenses
;
```
</TabItem>
</Tabs>
