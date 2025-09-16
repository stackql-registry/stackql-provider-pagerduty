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
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>related_incidents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>related_incidents</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incidents.related_incidents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_related_incidents"
    values={[
        { label: 'get_related_incidents', value: 'get_related_incidents' }
    ]}
>
<TabItem value="get_related_incidents">

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
    <td><CopyableCode code="incident_details" /></td>
    <td><code>object</code></td>
    <td>Details of the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="relationship_details" /></td>
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
    <td><a href="#get_related_incidents"><CopyableCode code="get_related_incidents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-additional_details[]"><code>additional_details[]</code></a></td>
    <td>Returns the 20 most recent Related Incidents that are impacting other Responders and Services. Note: This feature is currently available as part of the Event Intelligence package or Digital Operations plan only.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#related_incidents)<br /><br />Scoped OAuth requires: `incidents.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_related_incidents"><CopyableCode code="_get_related_incidents" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-additional_details[]"><code>additional_details[]</code></a></td>
    <td>Returns the 20 most recent Related Incidents that are impacting other Responders and Services. Note: This feature is currently available as part of the Event Intelligence package or Digital Operations plan only.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#related_incidents)<br /><br />Scoped OAuth requires: `incidents.read`<br /></td>
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
<tr id="parameter-additional_details[]">
    <td><CopyableCode code="additional_details[]" /></td>
    <td><code>string</code></td>
    <td>Array of additional attributes to any of the returned incidents for related incidents.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_related_incidents"
    values={[
        { label: 'get_related_incidents', value: 'get_related_incidents' }
    ]}
>
<TabItem value="get_related_incidents">

Returns the 20 most recent Related Incidents that are impacting other Responders and Services. Note: This feature is currently available as part of the Event Intelligence package or Digital Operations plan only.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#related_incidents)<br /><br />Scoped OAuth requires: `incidents.read`<br />

```sql
SELECT
incident_details,
relationship_details
FROM pagerduty.incidents.related_incidents
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND additional_details[] = '{{ additional_details[] }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_related_incidents"
    values={[
        { label: '_get_related_incidents', value: '_get_related_incidents' }
    ]}
>
<TabItem value="_get_related_incidents">

Returns the 20 most recent Related Incidents that are impacting other Responders and Services. Note: This feature is currently available as part of the Event Intelligence package or Digital Operations plan only.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#related_incidents)<br /><br />Scoped OAuth requires: `incidents.read`<br />

```sql
EXEC pagerduty.incidents.related_incidents._get_related_incidents 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@additional_details[]='{{ additional_details[] }}'
;
```
</TabItem>
</Tabs>
