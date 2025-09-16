--- 
title: addons
hide_title: false
hide_table_of_contents: false
keywords:
  - addons
  - add_ons
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

Creates, updates, deletes, gets or lists an <code>addons</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>addons</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.add_ons.addons" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_addon"
    values={[
        { label: 'get_addon', value: 'get_addon' },
        { label: 'list_addon', value: 'list_addon' }
    ]}
>
<TabItem value="get_addon">

The requested Add-on.

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
    <td>The name of the Add-on.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="src" /></td>
    <td><code>string (url)</code></td>
    <td>The source URL to display in a frame in the PagerDuty UI. HTTPS is required.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of Add-on.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_addon">

A paginated array of installed Add-ons.

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
    <td><a href="#get_addon"><CopyableCode code="get_addon" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get details about an existing Add-on.<br /><br />Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)<br /><br />Scoped OAuth requires: `addons.read`<br /></td>
</tr>
<tr>
    <td><a href="#list_addon"><CopyableCode code="list_addon" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a>, <a href="#parameter-service_ids[]"><code>service_ids[]</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>List all of the Add-ons installed on your account.<br /><br />Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)<br /><br />Scoped OAuth requires: `addons.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_addon"><CopyableCode code="create_addon" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__addon"><code>data__addon</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Install an Add-on for your account.<br /><br />Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.<br /><br />Given a configuration containing a `src` parameter, that URL will be embedded in an `iframe` on a page that's available to users from a drop-down menu.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)<br /><br />Scoped OAuth requires: `addons.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_addon"><CopyableCode code="delete_addon" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Remove an existing Add-on.<br /><br />Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)<br /><br />Scoped OAuth requires: `addons.write`<br /></td>
</tr>
<tr>
    <td><a href="#_list_addon"><CopyableCode code="_list_addon" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a>, <a href="#parameter-service_ids[]"><code>service_ids[]</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>List all of the Add-ons installed on your account.<br /><br />Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)<br /><br />Scoped OAuth requires: `addons.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_addon"><CopyableCode code="_get_addon" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get details about an existing Add-on.<br /><br />Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)<br /><br />Scoped OAuth requires: `addons.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_addon"><CopyableCode code="update_addon" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-addon"><code>addon</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Update an existing Add-on.<br /><br />Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.<br /><br />Given a configuration containing a `src` parameter, that URL will be embedded in an `iframe` on a page that's available to users from a drop-down menu.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)<br /><br />Scoped OAuth requires: `addons.write`<br /></td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Filters the results, showing only Add-ons of the given type</td>
</tr>
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>string</code></td>
    <td>Array of additional Models to include in response.</td>
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
<tr id="parameter-service_ids[]">
    <td><CopyableCode code="service_ids[]" /></td>
    <td><code>array</code></td>
    <td>Filters the results, showing only Add-ons for the given services</td>
</tr>
<tr id="parameter-total">
    <td><CopyableCode code="total" /></td>
    <td><code>boolean</code></td>
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_addon"
    values={[
        { label: 'get_addon', value: 'get_addon' },
        { label: 'list_addon', value: 'list_addon' }
    ]}
>
<TabItem value="get_addon">

Get details about an existing Add-on.<br /><br />Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)<br /><br />Scoped OAuth requires: `addons.read`<br />

```sql
SELECT
id,
name,
html_url,
self,
src,
summary,
type
FROM pagerduty.add_ons.addons
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="list_addon">

List all of the Add-ons installed on your account.<br /><br />Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)<br /><br />Scoped OAuth requires: `addons.read`<br />

```sql
SELECT
*
FROM pagerduty.add_ons.addons
WHERE limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND include[] = '{{ include[] }}'
AND service_ids[] = '{{ service_ids[] }}'
AND filter = '{{ filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_addon"
    values={[
        { label: 'create_addon', value: 'create_addon' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_addon">

Install an Add-on for your account.<br /><br />Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.<br /><br />Given a configuration containing a `src` parameter, that URL will be embedded in an `iframe` on a page that's available to users from a drop-down menu.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)<br /><br />Scoped OAuth requires: `addons.write`<br />

```sql
INSERT INTO pagerduty.add_ons.addons (
data__addon,
Accept,
Content-Type
)
SELECT 
'{{ addon }}' /* required */,
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
addon
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: addons
  props:
    - name: addon
      value: object
    - name: Accept
      value: string
      description: The `Accept` header is used as a versioning header.
    - name: Content-Type
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_addon"
    values={[
        { label: 'delete_addon', value: 'delete_addon' }
    ]}
>
<TabItem value="delete_addon">

Remove an existing Add-on.<br /><br />Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)<br /><br />Scoped OAuth requires: `addons.write`<br />

```sql
DELETE FROM pagerduty.add_ons.addons
WHERE id = '{{ id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_addon"
    values={[
        { label: '_list_addon', value: '_list_addon' },
        { label: '_get_addon', value: '_get_addon' },
        { label: 'update_addon', value: 'update_addon' }
    ]}
>
<TabItem value="_list_addon">

List all of the Add-ons installed on your account.<br /><br />Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)<br /><br />Scoped OAuth requires: `addons.read`<br />

```sql
EXEC pagerduty.add_ons.addons._list_addon 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@include[]='{{ include[] }}', 
@service_ids[]='{{ service_ids[] }}', 
@filter='{{ filter }}'
;
```
</TabItem>
<TabItem value="_get_addon">

Get details about an existing Add-on.<br /><br />Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)<br /><br />Scoped OAuth requires: `addons.read`<br />

```sql
EXEC pagerduty.add_ons.addons._get_addon 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="update_addon">

Update an existing Add-on.<br /><br />Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.<br /><br />Given a configuration containing a `src` parameter, that URL will be embedded in an `iframe` on a page that's available to users from a drop-down menu.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)<br /><br />Scoped OAuth requires: `addons.write`<br />

```sql
EXEC pagerduty.add_ons.addons.update_addon 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"addon": "{{ addon }}"
}'
;
```
</TabItem>
</Tabs>
