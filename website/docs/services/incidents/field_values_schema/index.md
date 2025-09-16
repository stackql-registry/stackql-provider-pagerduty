--- 
title: field_values_schema
hide_title: false
hide_table_of_contents: false
keywords:
  - field_values_schema
  - incidents
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

Creates, updates, deletes, gets or lists a <code>field_values_schema</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>field_values_schema</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incidents.field_values_schema" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_schema_for_incident"
    values={[
        { label: 'get_schema_for_incident', value: 'get_schema_for_incident' }
    ]}
>
<TabItem value="get_schema_for_incident">

The schema requested.

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of this schema.</td>
</tr>
<tr>
    <td><CopyableCode code="field_configurations" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>The API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The name of the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
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
    <td><a href="#get_schema_for_incident"><CopyableCode code="get_schema_for_incident" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get detailed information about a Schema for an incident.<br /><br />&lt;!-- theme: warning --&gt;<br /><br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
</tr>
<tr>
    <td><a href="#_get_schema_for_incident"><CopyableCode code="_get_schema_for_incident" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get detailed information about a Schema for an incident.<br /><br />&lt;!-- theme: warning --&gt;<br /><br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /></td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource.</td>
</tr>
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>string</code></td>
    <td>Array of additional details to include. Including `field_options` will also include field options.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_schema_for_incident"
    values={[
        { label: 'get_schema_for_incident', value: 'get_schema_for_incident' }
    ]}
>
<TabItem value="get_schema_for_incident">

Get detailed information about a Schema for an incident.<br /><br />&lt;!-- theme: warning --&gt;<br /><br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
SELECT
id,
description,
field_configurations,
self,
summary,
title,
type
FROM pagerduty.incidents.field_values_schema
WHERE id = '{{ id }}' -- required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' -- required
AND include[] = '{{ include[] }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_schema_for_incident"
    values={[
        { label: '_get_schema_for_incident', value: '_get_schema_for_incident' }
    ]}
>
<TabItem value="_get_schema_for_incident">

Get detailed information about a Schema for an incident.<br /><br />&lt;!-- theme: warning --&gt;<br /><br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />

```sql
EXEC pagerduty.incidents.field_values_schema._get_schema_for_incident 
@id='{{ id }}' --required, 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required, 
@include[]='{{ include[] }}'
;
```
</TabItem>
</Tabs>
