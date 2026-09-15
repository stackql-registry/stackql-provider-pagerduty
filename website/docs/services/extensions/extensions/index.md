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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>extensions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="extensions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.extensions.extensions" /></td></tr>
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
    <td><code>string</code></td>
    <td>The object that contains extension configuration values depending on the extension schema specification. (opaque JSON object)</td>
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
    <td>(opaque JSON object)</td>
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
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td><code>string</code></td>
    <td>The object that contains extension configuration values depending on the extension schema specification. (opaque JSON object)</td>
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
    <td>(opaque JSON object)</td>
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
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details about an existing extension.&lt;br /&gt;&lt;br /&gt;Extensions are representations of Extension Schema objects that are attached to Services.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `extensions.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-extension_object_id"><code>extension_object_id</code></a>, <a href="#parameter-extension_schema_id"><code>extension_schema_id</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List existing extensions.&lt;br /&gt;&lt;br /&gt;Extensions are representations of Extension Schema objects that are attached to Services.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `extensions.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-extension"><code>extension</code></a></td>
    <td></td>
    <td>Create a new Extension.&lt;br /&gt;&lt;br /&gt;Extensions are representations of Extension Schema objects that are attached to Services.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `extensions.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-extension"><code>extension</code></a></td>
    <td></td>
    <td>Update an existing extension.&lt;br /&gt;&lt;br /&gt;Extensions are representations of Extension Schema objects that are attached to Services.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `extensions.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete an existing extension.&lt;br /&gt;&lt;br /&gt;Once the extension is deleted, it will not be accessible from the web UI and new incidents won't be able to be created for this extension.&lt;br /&gt;&lt;br /&gt;Extensions are representations of Extension Schema objects that are attached to Services.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `extensions.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#enable"><CopyableCode code="enable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Enable an extension that is temporarily disabled. (This API does not require a request body.)&lt;br /&gt;&lt;br /&gt;Extensions are representations of Extension Schema objects that are attached to Services.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `extensions.write`&lt;br /&gt;</td>
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

Get details about an existing extension.&lt;br /&gt;&lt;br /&gt;Extensions are representations of Extension Schema objects that are attached to Services.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `extensions.read`&lt;br /&gt;

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
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list">

List existing extensions.&lt;br /&gt;&lt;br /&gt;Extensions are representations of Extension Schema objects that are attached to Services.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `extensions.read`&lt;br /&gt;

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
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Create a new Extension.&lt;br /&gt;&lt;br /&gt;Extensions are representations of Extension Schema objects that are attached to Services.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `extensions.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.extensions.extensions (
extension
)
SELECT 
'{{ extension }}' /* required */
RETURNING
extension
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: extensions
  props:
    - name: extension
      value:
        id: "{{ id }}"
        summary: "{{ summary }}"
        type: "{{ type }}"
        self: "{{ self }}"
        html_url: "{{ html_url }}"
        name: "{{ name }}"
        endpoint_url: "{{ endpoint_url }}"
        extension_objects:
          - id: "{{ id }}"
            summary: "{{ summary }}"
            type: "{{ type }}"
            self: "{{ self }}"
            html_url: "{{ html_url }}"
        extension_schema:
          id: "{{ id }}"
          summary: "{{ summary }}"
          type: "{{ type }}"
          self: "{{ self }}"
          html_url: "{{ html_url }}"
        temporarily_disabled: {{ temporarily_disabled }}
        config: "{{ config }}"
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

Update an existing extension.&lt;br /&gt;&lt;br /&gt;Extensions are representations of Extension Schema objects that are attached to Services.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `extensions.write`&lt;br /&gt;

```sql
UPDATE pagerduty.extensions.extensions
SET 
extension = '{{ extension }}'
WHERE 
id = '{{ id }}' --required
AND extension = '{{ extension }}' --required
RETURNING
extension;
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

Delete an existing extension.&lt;br /&gt;&lt;br /&gt;Once the extension is deleted, it will not be accessible from the web UI and new incidents won't be able to be created for this extension.&lt;br /&gt;&lt;br /&gt;Extensions are representations of Extension Schema objects that are attached to Services.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `extensions.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.extensions.extensions
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="enable"
    values={[
        { label: 'enable', value: 'enable' }
    ]}
>
<TabItem value="enable">

Enable an extension that is temporarily disabled. (This API does not require a request body.)&lt;br /&gt;&lt;br /&gt;Extensions are representations of Extension Schema objects that are attached to Services.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#extensions)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `extensions.write`&lt;br /&gt;

```sql
EXEC pagerduty.extensions.extensions.enable 
@id='{{ id }}' --required
;
```
</TabItem>
</Tabs>
