--- 
title: entity_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - entity_tags
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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>entity_tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="entity_tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.tags.entity_tags" /></td></tr>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td>Get related tags for Users, Teams or Escalation Policies.&lt;br /&gt;&lt;br /&gt;A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `tags.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_tags"><CopyableCode code="change_tags" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Assign existing or new tags.&lt;br /&gt;&lt;br /&gt;A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `tags.write`&lt;br /&gt;</td>
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
<tr id="parameter-total">
    <td><CopyableCode code="total" /></td>
    <td><code>boolean</code></td>
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our &#91;Pagination Docs&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
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

Get related tags for Users, Teams or Escalation Policies.&lt;br /&gt;&lt;br /&gt;A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `tags.read`&lt;br /&gt;

```sql
SELECT
id,
html_url,
label,
self,
summary,
type
FROM pagerduty.tags.entity_tags
WHERE entity_type = '{{ entity_type }}' -- required
AND id = '{{ id }}' -- required
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="change_tags"
    values={[
        { label: 'change_tags', value: 'change_tags' }
    ]}
>
<TabItem value="change_tags">

Assign existing or new tags.&lt;br /&gt;&lt;br /&gt;A Tag is applied to Escalation Policies, Teams or Users and can be used to filter them.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#tags)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `tags.write`&lt;br /&gt;

```sql
EXEC pagerduty.tags.entity_tags.change_tags 
@entity_type='{{ entity_type }}' --required, 
@id='{{ id }}' --required 
@@json=
'{
"add": "{{ add }}", 
"remove": "{{ remove }}"
}'
;
```
</TabItem>
</Tabs>
