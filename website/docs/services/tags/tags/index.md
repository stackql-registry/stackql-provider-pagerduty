--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - tags
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.tags.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_entity_type_by_id_tags"
    values={[
        { label: 'get_entity_type_by_id_tags', value: 'get_entity_type_by_id_tags' },
        { label: 'get_tags_by_entity_type', value: 'get_tags_by_entity_type' },
        { label: 'get_tag', value: 'get_tag' },
        { label: 'list_tags', value: 'list_tags' }
    ]}
>
<TabItem value="get_entity_type_by_id_tags">

An array of tags.

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
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The label of the tag.</td>
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
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of object being created. (default: tag)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_tags_by_entity_type">

An array of connected entities.

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
<TabItem value="get_tag">

The tag requested.

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
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The label of the tag.</td>
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
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of object being created. (default: tag)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tags">

An array of tags names.

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
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The label of the tag.</td>
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
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of object being created. (default: tag)</td>
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
    <td><a href="#get_entity_type_by_id_tags"><CopyableCode code="get_entity_type_by_id_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td>Get related tags for Users, Teams or Escalation Policies.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.read`<br /></td>
</tr>
<tr>
    <td><a href="#get_tags_by_entity_type"><CopyableCode code="get_tags_by_entity_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-entity_type"><code>entity_type</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td>Get related Users, Teams or Escalation Policies for the Tag.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.read`<br /></td>
</tr>
<tr>
    <td><a href="#get_tag"><CopyableCode code="get_tag" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get details about an existing Tag.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.read`<br /></td>
</tr>
<tr>
    <td><a href="#list_tags"><CopyableCode code="list_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-query"><code>query</code></a></td>
    <td>List all of your account's tags.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_entity_type_by_id_change_tags"><CopyableCode code="create_entity_type_by_id_change_tags" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Assign existing or new tags.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.write`<br /></td>
</tr>
<tr>
    <td><a href="#create_tags"><CopyableCode code="create_tags" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__tag"><code>data__tag</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create a Tag.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_tag"><CopyableCode code="delete_tag" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Remove an existing Tag.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.write`<br /></td>
</tr>
<tr>
    <td><a href="#_get_entity_type_by_id_tags"><CopyableCode code="_get_entity_type_by_id_tags" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td>Get related tags for Users, Teams or Escalation Policies.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.read`<br /></td>
</tr>
<tr>
    <td><a href="#_list_tags"><CopyableCode code="_list_tags" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-query"><code>query</code></a></td>
    <td>List all of your account's tags.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_tag"><CopyableCode code="_get_tag" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get details about an existing Tag.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_tags_by_entity_type"><CopyableCode code="_get_tags_by_entity_type" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-entity_type"><code>entity_type</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td>Get related Users, Teams or Escalation Policies for the Tag.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.read`<br /></td>
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
<tr id="parameter-entity_type">
    <td><CopyableCode code="entity_type" /></td>
    <td><code>string</code></td>
    <td>Type of entity related with the tag</td>
</tr>
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
    <td>Filters the result, showing only the tags whose label matches the query.</td>
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
    defaultValue="get_entity_type_by_id_tags"
    values={[
        { label: 'get_entity_type_by_id_tags', value: 'get_entity_type_by_id_tags' },
        { label: 'get_tags_by_entity_type', value: 'get_tags_by_entity_type' },
        { label: 'get_tag', value: 'get_tag' },
        { label: 'list_tags', value: 'list_tags' }
    ]}
>
<TabItem value="get_entity_type_by_id_tags">

Get related tags for Users, Teams or Escalation Policies.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.read`<br />

```sql
SELECT
id,
html_url,
label,
self,
summary,
type
FROM pagerduty.tags.tags
WHERE entity_type = '{{ entity_type }}' -- required
AND id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
;
```
</TabItem>
<TabItem value="get_tags_by_entity_type">

Get related Users, Teams or Escalation Policies for the Tag.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.read`<br />

```sql
SELECT
*
FROM pagerduty.tags.tags
WHERE id = '{{ id }}' -- required
AND entity_type = '{{ entity_type }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
;
```
</TabItem>
<TabItem value="get_tag">

Get details about an existing Tag.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.read`<br />

```sql
SELECT
id,
html_url,
label,
self,
summary,
type
FROM pagerduty.tags.tags
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="list_tags">

List all of your account's tags.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.read`<br />

```sql
SELECT
id,
html_url,
label,
self,
summary,
type
FROM pagerduty.tags.tags
WHERE Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND query = '{{ query }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_entity_type_by_id_change_tags"
    values={[
        { label: 'create_entity_type_by_id_change_tags', value: 'create_entity_type_by_id_change_tags' },
        { label: 'create_tags', value: 'create_tags' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_entity_type_by_id_change_tags">

Assign existing or new tags.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.write`<br />

```sql
INSERT INTO pagerduty.tags.tags (
data__add,
data__remove,
entity_type,
id,
Accept,
Content-Type
)
SELECT 
'{{ add }}',
'{{ remove }}',
'{{ entity_type }}',
'{{ id }}',
'{{ Accept }}',
'{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="create_tags">

Create a Tag.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.write`<br />

```sql
INSERT INTO pagerduty.tags.tags (
data__tag,
Accept,
Content-Type
)
SELECT 
'{{ tag }}' /* required */,
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
tag
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: tags
  props:
    - name: entity_type
      value: string
      description: Required parameter for the tags resource.
    - name: id
      value: string
      description: Required parameter for the tags resource.
    - name: add
      value: array
      description: |
        Array of tags and/or tag references to add to the entity.
        For elements with type `tag_reference`, the tag with the corresponding `id` is added to the entity.
        For elements with type `tag`, if there is an existing tag with the given
        label that tag is added to the entity. If there is no existing tag with that label and the user has permission
        to create tags, a new tag is created with that label and assigned to the entity.
    - name: remove
      value: array
      description: |
        Array of tag references to remove from the entity.
    - name: tag
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
    defaultValue="delete_tag"
    values={[
        { label: 'delete_tag', value: 'delete_tag' }
    ]}
>
<TabItem value="delete_tag">

Remove an existing Tag.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.write`<br />

```sql
DELETE FROM pagerduty.tags.tags
WHERE id = '{{ id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_entity_type_by_id_tags"
    values={[
        { label: '_get_entity_type_by_id_tags', value: '_get_entity_type_by_id_tags' },
        { label: '_list_tags', value: '_list_tags' },
        { label: '_get_tag', value: '_get_tag' },
        { label: '_get_tags_by_entity_type', value: '_get_tags_by_entity_type' }
    ]}
>
<TabItem value="_get_entity_type_by_id_tags">

Get related tags for Users, Teams or Escalation Policies.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.read`<br />

```sql
EXEC pagerduty.tags.tags._get_entity_type_by_id_tags 
@entity_type='{{ entity_type }}' --required, 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}
;
```
</TabItem>
<TabItem value="_list_tags">

List all of your account's tags.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.read`<br />

```sql
EXEC pagerduty.tags.tags._list_tags 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}, 
@query='{{ query }}'
;
```
</TabItem>
<TabItem value="_get_tag">

Get details about an existing Tag.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.read`<br />

```sql
EXEC pagerduty.tags.tags._get_tag 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="_get_tags_by_entity_type">

Get related Users, Teams or Escalation Policies for the Tag.<br /><br />A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)<br /><br />Scoped OAuth requires: `tags.read`<br />

```sql
EXEC pagerduty.tags.tags._get_tags_by_entity_type 
@id='{{ id }}' --required, 
@entity_type='{{ entity_type }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}
;
```
</TabItem>
</Tabs>
