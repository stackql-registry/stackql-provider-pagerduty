--- 
title: add_ons
hide_title: false
hide_table_of_contents: false
keywords:
  - add_ons
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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>add_ons</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="add_ons" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.add_ons.add_ons" /></td></tr>
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
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The user entered name of the Addon.</td>
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
    <td>The URL source of the Addon</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
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
    <td>Get details about an existing Add-on.&lt;br /&gt;&lt;br /&gt;Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `addons.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-include[]"><code>include[]</code></a>, <a href="#parameter-service_ids[]"><code>service_ids[]</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>List all of the Add-ons installed on your account.&lt;br /&gt;&lt;br /&gt;Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `addons.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-addon"><code>addon</code></a></td>
    <td></td>
    <td>Install an Add-on for your account.&lt;br /&gt;&lt;br /&gt;Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.&lt;br /&gt;&lt;br /&gt;Given a configuration containing a `src` parameter, that URL will be embedded in an `iframe` on a page that's available to users from a drop-down menu.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `addons.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-addon"><code>addon</code></a></td>
    <td></td>
    <td>Update an existing Add-on.&lt;br /&gt;&lt;br /&gt;Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.&lt;br /&gt;&lt;br /&gt;Given a configuration containing a `src` parameter, that URL will be embedded in an `iframe` on a page that's available to users from a drop-down menu.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `addons.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Remove an existing Add-on.&lt;br /&gt;&lt;br /&gt;Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `addons.write`&lt;br /&gt;</td>
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
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our &#91;Pagination Docs&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
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

Get details about an existing Add-on.&lt;br /&gt;&lt;br /&gt;Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `addons.read`&lt;br /&gt;

```sql
SELECT
id,
name,
html_url,
self,
src,
summary,
type
FROM pagerduty.add_ons.add_ons
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List all of the Add-ons installed on your account.&lt;br /&gt;&lt;br /&gt;Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `addons.read`&lt;br /&gt;

```sql
SELECT
id,
name,
html_url,
self,
src,
summary,
type
FROM pagerduty.add_ons.add_ons
WHERE limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND include[] = '{{ include[] }}'
AND service_ids[] = '{{ service_ids[] }}'
AND filter = '{{ filter }}'
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

Install an Add-on for your account.&lt;br /&gt;&lt;br /&gt;Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.&lt;br /&gt;&lt;br /&gt;Given a configuration containing a `src` parameter, that URL will be embedded in an `iframe` on a page that's available to users from a drop-down menu.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `addons.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.add_ons.add_ons (
addon
)
SELECT 
'{{ addon }}' /* required */
RETURNING
addon
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: add_ons
  props:
    - name: addon
      value:
        id: "{{ id }}"
        summary: "{{ summary }}"
        type: "{{ type }}"
        self: "{{ self }}"
        html_url: "{{ html_url }}"
        name: "{{ name }}"
        src: "{{ src }}"
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

Update an existing Add-on.&lt;br /&gt;&lt;br /&gt;Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.&lt;br /&gt;&lt;br /&gt;Given a configuration containing a `src` parameter, that URL will be embedded in an `iframe` on a page that's available to users from a drop-down menu.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `addons.write`&lt;br /&gt;

```sql
UPDATE pagerduty.add_ons.add_ons
SET 
addon = '{{ addon }}'
WHERE 
id = '{{ id }}' --required
AND addon = '{{ addon }}' --required
RETURNING
addon;
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

Remove an existing Add-on.&lt;br /&gt;&lt;br /&gt;Addon's are pieces of functionality that developers can write to insert new functionality into PagerDuty's UI.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#add-ons)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `addons.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.add_ons.add_ons
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
