--- 
title: extensions
hide_title: false
hide_table_of_contents: false
keywords:
  - extensions
  - extensions
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

Creates, updates, deletes, gets or lists an <code>extensions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>extensions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.extensions.extensions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_extension"
    values={[
        { label: 'get_extension', value: 'get_extension' },
        { label: 'list_extensions', value: 'list_extensions' }
    ]}
>
<TabItem value="get_extension">

The extension that was requested.

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
    <td>The name of the extension.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>The object that contains extension configuration values depending on the extension schema specification.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_url" /></td>
    <td><code>string (url)</code></td>
    <td>The url of the extension.</td>
</tr>
<tr>
    <td><CopyableCode code="extension_objects" /></td>
    <td><code>array</code></td>
    <td>The objects for which the extension applies</td>
</tr>
<tr>
    <td><CopyableCode code="extension_schema" /></td>
    <td><code>object</code></td>
    <td></td>
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
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="temporarily_disabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not this extension is temporarily disabled; for example, a webhook extension that is repeatedly rejected by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of object being created. (default: extension)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_extensions">

A paginated array of extensions.

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
    <td>The name of the extension.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>The object that contains extension configuration values depending on the extension schema specification.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_url" /></td>
    <td><code>string (url)</code></td>
    <td>The url of the extension.</td>
</tr>
<tr>
    <td><CopyableCode code="extension_objects" /></td>
    <td><code>array</code></td>
    <td>The objects for which the extension applies</td>
</tr>
<tr>
    <td><CopyableCode code="extension_schema" /></td>
    <td><code>object</code></td>
    <td></td>
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
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="temporarily_disabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not this extension is temporarily disabled; for example, a webhook extension that is repeatedly rejected by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of object being created. (default: extension)</td>
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
    <td><a href="#get_extension"><CopyableCode code="get_extension" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details about an existing extension.<br /><br />Extensions are representations of Extension Schema objects that are attached to Services.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)<br /><br />Scoped OAuth requires: `extensions.read`<br /></td>
</tr>
<tr>
    <td><a href="#list_extensions"><CopyableCode code="list_extensions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-extension_object_id"><code>extension_object_id</code></a>, <a href="#parameter-extension_schema_id"><code>extension_schema_id</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List existing extensions.<br /><br />Extensions are representations of Extension Schema objects that are attached to Services.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)<br /><br />Scoped OAuth requires: `extensions.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_extension"><CopyableCode code="create_extension" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__extension"><code>data__extension</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create a new Extension.<br /><br />Extensions are representations of Extension Schema objects that are attached to Services.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)<br /><br />Scoped OAuth requires: `extensions.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_extension"><CopyableCode code="delete_extension" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Delete an existing extension.<br /><br />Once the extension is deleted, it will not be accessible from the web UI and new incidents won't be able to be created for this extension.<br /><br />Extensions are representations of Extension Schema objects that are attached to Services.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)<br /><br />Scoped OAuth requires: `extensions.write`<br /></td>
</tr>
<tr>
    <td><a href="#_list_extensions"><CopyableCode code="_list_extensions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-extension_object_id"><code>extension_object_id</code></a>, <a href="#parameter-extension_schema_id"><code>extension_schema_id</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List existing extensions.<br /><br />Extensions are representations of Extension Schema objects that are attached to Services.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)<br /><br />Scoped OAuth requires: `extensions.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_extension"><CopyableCode code="_get_extension" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details about an existing extension.<br /><br />Extensions are representations of Extension Schema objects that are attached to Services.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)<br /><br />Scoped OAuth requires: `extensions.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_extension"><CopyableCode code="update_extension" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-extension"><code>extension</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Update an existing extension.<br /><br />Extensions are representations of Extension Schema objects that are attached to Services.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)<br /><br />Scoped OAuth requires: `extensions.write`<br /></td>
</tr>
<tr>
    <td><a href="#enable_extension"><CopyableCode code="enable_extension" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Enable an extension that is temporarily disabled. (This API does not require a request body.)<br /><br />Extensions are representations of Extension Schema objects that are attached to Services.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)<br /><br />Scoped OAuth requires: `extensions.write`<br /></td>
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
<tr id="parameter-extension_object_id">
    <td><CopyableCode code="extension_object_id" /></td>
    <td><code>string</code></td>
    <td>The id of the extension object you want to filter by.</td>
</tr>
<tr id="parameter-extension_schema_id">
    <td><CopyableCode code="extension_schema_id" /></td>
    <td><code>string</code></td>
    <td>Filter the extensions by extension vendor id.</td>
</tr>
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>string</code></td>
    <td>Array of additional details to include.</td>
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
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>Filters the result, showing only the records whose name matches the query.</td>
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
    defaultValue="get_extension"
    values={[
        { label: 'get_extension', value: 'get_extension' },
        { label: 'list_extensions', value: 'list_extensions' }
    ]}
>
<TabItem value="get_extension">

Get details about an existing extension.<br /><br />Extensions are representations of Extension Schema objects that are attached to Services.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)<br /><br />Scoped OAuth requires: `extensions.read`<br />

```sql
SELECT
id,
name,
config,
endpoint_url,
extension_objects,
extension_schema,
html_url,
self,
summary,
temporarily_disabled,
type
FROM pagerduty.extensions.extensions
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list_extensions">

List existing extensions.<br /><br />Extensions are representations of Extension Schema objects that are attached to Services.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)<br /><br />Scoped OAuth requires: `extensions.read`<br />

```sql
SELECT
id,
name,
config,
endpoint_url,
extension_objects,
extension_schema,
html_url,
self,
summary,
temporarily_disabled,
type
FROM pagerduty.extensions.extensions
WHERE limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND query = '{{ query }}'
AND extension_object_id = '{{ extension_object_id }}'
AND extension_schema_id = '{{ extension_schema_id }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_extension"
    values={[
        { label: 'create_extension', value: 'create_extension' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_extension">

Create a new Extension.<br /><br />Extensions are representations of Extension Schema objects that are attached to Services.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)<br /><br />Scoped OAuth requires: `extensions.write`<br />

```sql
INSERT INTO pagerduty.extensions.extensions (
data__extension,
Accept,
Content-Type
)
SELECT 
'{{ extension }}' /* required */,
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
extension
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: extensions
  props:
    - name: extension
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
    defaultValue="delete_extension"
    values={[
        { label: 'delete_extension', value: 'delete_extension' }
    ]}
>
<TabItem value="delete_extension">

Delete an existing extension.<br /><br />Once the extension is deleted, it will not be accessible from the web UI and new incidents won't be able to be created for this extension.<br /><br />Extensions are representations of Extension Schema objects that are attached to Services.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)<br /><br />Scoped OAuth requires: `extensions.write`<br />

```sql
DELETE FROM pagerduty.extensions.extensions
WHERE id = '{{ id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_extensions"
    values={[
        { label: '_list_extensions', value: '_list_extensions' },
        { label: '_get_extension', value: '_get_extension' },
        { label: 'update_extension', value: 'update_extension' },
        { label: 'enable_extension', value: 'enable_extension' }
    ]}
>
<TabItem value="_list_extensions">

List existing extensions.<br /><br />Extensions are representations of Extension Schema objects that are attached to Services.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)<br /><br />Scoped OAuth requires: `extensions.read`<br />

```sql
EXEC pagerduty.extensions.extensions._list_extensions 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@query='{{ query }}', 
@extension_object_id='{{ extension_object_id }}', 
@extension_schema_id='{{ extension_schema_id }}', 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="_get_extension">

Get details about an existing extension.<br /><br />Extensions are representations of Extension Schema objects that are attached to Services.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)<br /><br />Scoped OAuth requires: `extensions.read`<br />

```sql
EXEC pagerduty.extensions.extensions._get_extension 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="update_extension">

Update an existing extension.<br /><br />Extensions are representations of Extension Schema objects that are attached to Services.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)<br /><br />Scoped OAuth requires: `extensions.write`<br />

```sql
EXEC pagerduty.extensions.extensions.update_extension 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"extension": "{{ extension }}"
}'
;
```
</TabItem>
<TabItem value="enable_extension">

Enable an extension that is temporarily disabled. (This API does not require a request body.)<br /><br />Extensions are representations of Extension Schema objects that are attached to Services.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)<br /><br />Scoped OAuth requires: `extensions.write`<br />

```sql
EXEC pagerduty.extensions.extensions.enable_extension 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
</Tabs>
