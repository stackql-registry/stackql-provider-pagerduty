--- 
title: schema_assignments
hide_title: false
hide_table_of_contents: false
keywords:
  - schema_assignments
  - custom_fields
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

Creates, updates, deletes, gets or lists a <code>schema_assignments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>schema_assignments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.custom_fields.schema_assignments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_schema_assignments"
    values={[
        { label: 'list_schema_assignments', value: 'list_schema_assignments' }
    ]}
>
<TabItem value="list_schema_assignments">

The list of Assignments

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
    <td>The ID of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the object was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the object was last updated.</td>
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
    <td><a href="#list_schema_assignments"><CopyableCode code="list_schema_assignments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td>List Schema Assignments by `service_id` or `schema_id`<br /><br />&lt;!-- theme: warning --&gt;<br /><br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#create_custom_fields_schema_assignment"><CopyableCode code="create_custom_fields_schema_assignment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a>, <a href="#parameter-data__schema_assignment"><code>data__schema_assignment</code></a></td>
    <td></td>
    <td>Assign a new Schema to a service<br /><br />&lt;!-- theme: warning --&gt;<br /><br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#delete_schema_assignment"><CopyableCode code="delete_schema_assignment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td></td>
    <td>Remove the Schema assigned to a service<br /><br />&lt;!-- theme: warning --&gt;<br /><br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#_list_schema_assignments"><CopyableCode code="_list_schema_assignments" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td>List Schema Assignments by `service_id` or `schema_id`<br /><br />&lt;!-- theme: warning --&gt;<br /><br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
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
<tr id="parameter-X-EARLY-ACCESS">
    <td><CopyableCode code="X-EARLY-ACCESS" /></td>
    <td><code>string</code></td>
    <td>This header indicates that this API endpoint is __UNDER CONSTRUCTION__ and may change at any time. You __MUST__ pass in this header and the above value. Do not use this endpoint in production, as it may change! </td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>object</code></td>
    <td>One of service_id or schema_id is required.</td>
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
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_schema_assignments"
    values={[
        { label: 'list_schema_assignments', value: 'list_schema_assignments' }
    ]}
>
<TabItem value="list_schema_assignments">

List Schema Assignments by `service_id` or `schema_id`<br /><br />&lt;!-- theme: warning --&gt;<br /><br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
SELECT
id,
created_at,
schema,
service,
type,
updated_at
FROM pagerduty.custom_fields.schema_assignments
WHERE filter = '{{ filter }}' -- required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' -- required
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_fields_schema_assignment"
    values={[
        { label: 'create_custom_fields_schema_assignment', value: 'create_custom_fields_schema_assignment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_fields_schema_assignment">

Assign a new Schema to a service<br /><br />&lt;!-- theme: warning --&gt;<br /><br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
INSERT INTO pagerduty.custom_fields.schema_assignments (
data__schema_assignment,
X-EARLY-ACCESS
)
SELECT 
'{{ schema_assignment }}' /* required */,
'{{ X-EARLY-ACCESS }}'
RETURNING
schema_assignment
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: schema_assignments
  props:
    - name: X-EARLY-ACCESS
      value: string
      description: Required parameter for the schema_assignments resource.
    - name: schema_assignment
      value: object
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_schema_assignment"
    values={[
        { label: 'delete_schema_assignment', value: 'delete_schema_assignment' }
    ]}
>
<TabItem value="delete_schema_assignment">

Remove the Schema assigned to a service<br /><br />&lt;!-- theme: warning --&gt;<br /><br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
DELETE FROM pagerduty.custom_fields.schema_assignments
WHERE id = '{{ id }}' --required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_schema_assignments"
    values={[
        { label: '_list_schema_assignments', value: '_list_schema_assignments' }
    ]}
>
<TabItem value="_list_schema_assignments">

List Schema Assignments by `service_id` or `schema_id`<br /><br />&lt;!-- theme: warning --&gt;<br /><br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
EXEC pagerduty.custom_fields.schema_assignments._list_schema_assignments 
@filter='{{ filter }}' --required, 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required, 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}
;
```
</TabItem>
</Tabs>
