--- 
title: related_incidents
hide_title: false
hide_table_of_contents: false
keywords:
  - related_incidents
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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>related_incidents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="related_incidents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incidents.related_incidents" /></td></tr>
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

A list of Related Incidents and their relationships.

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
    <td><CopyableCode code="incident" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>array</code></td>
    <td>A list of reasons for why the Incident is considered related.</td>
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
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-additional_details[]"><code>additional_details[]</code></a></td>
    <td>Returns the 20 most recent Related Incidents that are impacting other Responders and Services. Note: This feature is currently available as part of the Event Intelligence package or Digital Operations plan only.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#related_incidents)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.read`&lt;br /&gt;</td>
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
<tr id="parameter-additional_details[]">
    <td><CopyableCode code="additional_details[]" /></td>
    <td><code>string</code></td>
    <td>Array of additional attributes to any of the returned incidents for related incidents.</td>
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

Returns the 20 most recent Related Incidents that are impacting other Responders and Services. Note: This feature is currently available as part of the Event Intelligence package or Digital Operations plan only.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#related_incidents)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.read`&lt;br /&gt;

```sql
SELECT
incident,
relationships
FROM pagerduty.incidents.related_incidents
WHERE id = '{{ id }}' -- required
AND additional_details[] = '{{ additional_details[] }}'
;
```
</TabItem>
</Tabs>
