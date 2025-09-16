--- 
title: outlier_incident
hide_title: false
hide_table_of_contents: false
keywords:
  - outlier_incident
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

Creates, updates, deletes, gets or lists an <code>outlier_incident</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>outlier_incident</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incidents.outlier_incident" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_outlier_incident"
    values={[
        { label: 'get_outlier_incident', value: 'get_outlier_incident' }
    ]}
>
<TabItem value="get_outlier_incident">

Outlier Incident information calculated over the same Service as the given Incident.

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
    <td><CopyableCode code="incident_template" /></td>
    <td><code>object</code></td>
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
    <td><a href="#get_outlier_incident"><CopyableCode code="get_outlier_incident" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-additional_details[]"><code>additional_details[]</code></a></td>
    <td>Gets Outlier Incident information for a given Incident on its Service.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#outlier-incident)<br /><br />Scoped OAuth requires: `incidents.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_outlier_incident"><CopyableCode code="_get_outlier_incident" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-additional_details[]"><code>additional_details[]</code></a></td>
    <td>Gets Outlier Incident information for a given Incident on its Service.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#outlier-incident)<br /><br />Scoped OAuth requires: `incidents.read`<br /></td>
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
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start of the date range over which you want to search.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_outlier_incident"
    values={[
        { label: 'get_outlier_incident', value: 'get_outlier_incident' }
    ]}
>
<TabItem value="get_outlier_incident">

Gets Outlier Incident information for a given Incident on its Service.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#outlier-incident)<br /><br />Scoped OAuth requires: `incidents.read`<br />

```sql
SELECT
incident,
incident_template
FROM pagerduty.incidents.outlier_incident
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND since = '{{ since }}'
AND additional_details[] = '{{ additional_details[] }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_outlier_incident"
    values={[
        { label: '_get_outlier_incident', value: '_get_outlier_incident' }
    ]}
>
<TabItem value="_get_outlier_incident">

Gets Outlier Incident information for a given Incident on its Service.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#outlier-incident)<br /><br />Scoped OAuth requires: `incidents.read`<br />

```sql
EXEC pagerduty.incidents.outlier_incident._get_outlier_incident 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@since='{{ since }}', 
@additional_details[]='{{ additional_details[] }}'
;
```
</TabItem>
</Tabs>
