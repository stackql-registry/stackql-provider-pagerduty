--- 
title: maintenance_windows
hide_title: false
hide_table_of_contents: false
keywords:
  - maintenance_windows
  - maintenance_windows
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

Creates, updates, deletes, gets or lists a <code>maintenance_windows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>maintenance_windows</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.maintenance_windows.maintenance_windows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_maintenance_window"
    values={[
        { label: 'get_maintenance_window', value: 'get_maintenance_window' },
        { label: 'list_maintenance_windows', value: 'list_maintenance_windows' }
    ]}
>
<TabItem value="get_maintenance_window">

The maintenance window that was updated.

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
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description for this maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>This maintenance window's end time. This is when the services will start creating incidents again. This date must be in the future and after the `start_time`.</td>
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
    <td><CopyableCode code="sequence_number" /></td>
    <td><code>integer</code></td>
    <td>The order in which the maintenance window was created.</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>This maintenance window's start time. This is when the services will stop creating incidents. If this date is in the past, it will be updated to be the current time.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="teams" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of object being created. (default: maintenance_window)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_maintenance_windows">

A paginated array of maintenance windows.

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
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description for this maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>This maintenance window's end time. This is when the services will start creating incidents again. This date must be in the future and after the `start_time`.</td>
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
    <td><CopyableCode code="sequence_number" /></td>
    <td><code>integer</code></td>
    <td>The order in which the maintenance window was created.</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>This maintenance window's start time. This is when the services will stop creating incidents. If this date is in the past, it will be updated to be the current time.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="teams" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of object being created. (default: maintenance_window)</td>
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
    <td><a href="#get_maintenance_window"><CopyableCode code="get_maintenance_window" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get an existing maintenance window.<br /><br />A Maintenance Window is used to temporarily disable one or more Services for a set period of time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#maintenance-windows)<br /><br />Scoped OAuth requires: `services.read`<br /></td>
</tr>
<tr>
    <td><a href="#list_maintenance_windows"><CopyableCode code="list_maintenance_windows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-team_ids[]"><code>team_ids[]</code></a>, <a href="#parameter-service_ids[]"><code>service_ids[]</code></a>, <a href="#parameter-include[]"><code>include[]</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>List existing maintenance windows, optionally filtered by service and/or team, or whether they are from the past, present or future.<br /><br />A Maintenance Window is used to temporarily disable one or more Services for a set period of time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#maintenance-windows)<br /><br />Scoped OAuth requires: `services.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_maintenance_window"><CopyableCode code="create_maintenance_window" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-From"><code>From</code></a>, <a href="#parameter-data__maintenance_window"><code>data__maintenance_window</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create a new maintenance window for the specified services. No new incidents will be created for a service that is in maintenance.<br /><br />A Maintenance Window is used to temporarily disable one or more Services for a set period of time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#maintenance-windows)<br /><br />Scoped OAuth requires: `services.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_maintenance_window"><CopyableCode code="delete_maintenance_window" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Delete an existing maintenance window if it's in the future, or end it if it's currently on-going. If the maintenance window has already ended it cannot be deleted.<br /><br />A Maintenance Window is used to temporarily disable one or more Services for a set period of time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#maintenance-windows)<br /><br />Scoped OAuth requires: `services.write`<br /></td>
</tr>
<tr>
    <td><a href="#_list_maintenance_windows"><CopyableCode code="_list_maintenance_windows" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-team_ids[]"><code>team_ids[]</code></a>, <a href="#parameter-service_ids[]"><code>service_ids[]</code></a>, <a href="#parameter-include[]"><code>include[]</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>List existing maintenance windows, optionally filtered by service and/or team, or whether they are from the past, present or future.<br /><br />A Maintenance Window is used to temporarily disable one or more Services for a set period of time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#maintenance-windows)<br /><br />Scoped OAuth requires: `services.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_maintenance_window"><CopyableCode code="_get_maintenance_window" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get an existing maintenance window.<br /><br />A Maintenance Window is used to temporarily disable one or more Services for a set period of time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#maintenance-windows)<br /><br />Scoped OAuth requires: `services.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_maintenance_window"><CopyableCode code="update_maintenance_window" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-maintenance_window"><code>maintenance_window</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Update an existing maintenance window.<br /><br />A Maintenance Window is used to temporarily disable one or more Services for a set period of time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#maintenance-windows)<br /><br />Scoped OAuth requires: `services.write`<br /></td>
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
<tr id="parameter-From">
    <td><CopyableCode code="From" /></td>
    <td><code>string (email)</code></td>
    <td>The email address of a valid user associated with the account making the request.</td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Only return maintenance windows in a given state.</td>
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
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>Filters the result, showing only the records whose name matches the query.</td>
</tr>
<tr id="parameter-service_ids[]">
    <td><CopyableCode code="service_ids[]" /></td>
    <td><code>array</code></td>
    <td>An array of service IDs. Only results related to these services will be returned.</td>
</tr>
<tr id="parameter-team_ids[]">
    <td><CopyableCode code="team_ids[]" /></td>
    <td><code>array</code></td>
    <td>An array of team IDs. Only results related to these teams will be returned. Account must have the `teams` ability to use this parameter.</td>
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
    defaultValue="get_maintenance_window"
    values={[
        { label: 'get_maintenance_window', value: 'get_maintenance_window' },
        { label: 'list_maintenance_windows', value: 'list_maintenance_windows' }
    ]}
>
<TabItem value="get_maintenance_window">

Get an existing maintenance window.<br /><br />A Maintenance Window is used to temporarily disable one or more Services for a set period of time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#maintenance-windows)<br /><br />Scoped OAuth requires: `services.read`<br />

```sql
SELECT
id,
created_by,
description,
end_time,
html_url,
self,
sequence_number,
services,
start_time,
summary,
teams,
type
FROM pagerduty.maintenance_windows.maintenance_windows
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list_maintenance_windows">

List existing maintenance windows, optionally filtered by service and/or team, or whether they are from the past, present or future.<br /><br />A Maintenance Window is used to temporarily disable one or more Services for a set period of time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#maintenance-windows)<br /><br />Scoped OAuth requires: `services.read`<br />

```sql
SELECT
id,
created_by,
description,
end_time,
html_url,
self,
sequence_number,
services,
start_time,
summary,
teams,
type
FROM pagerduty.maintenance_windows.maintenance_windows
WHERE Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND query = '{{ query }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND team_ids[] = '{{ team_ids[] }}'
AND service_ids[] = '{{ service_ids[] }}'
AND include[] = '{{ include[] }}'
AND filter = '{{ filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_maintenance_window"
    values={[
        { label: 'create_maintenance_window', value: 'create_maintenance_window' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_maintenance_window">

Create a new maintenance window for the specified services. No new incidents will be created for a service that is in maintenance.<br /><br />A Maintenance Window is used to temporarily disable one or more Services for a set period of time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#maintenance-windows)<br /><br />Scoped OAuth requires: `services.write`<br />

```sql
INSERT INTO pagerduty.maintenance_windows.maintenance_windows (
data__maintenance_window,
From,
Accept,
Content-Type
)
SELECT 
'{{ maintenance_window }}' /* required */,
'{{ From }}',
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
maintenance_window
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: maintenance_windows
  props:
    - name: From
      value: string (email)
      description: Required parameter for the maintenance_windows resource.
    - name: maintenance_window
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
    defaultValue="delete_maintenance_window"
    values={[
        { label: 'delete_maintenance_window', value: 'delete_maintenance_window' }
    ]}
>
<TabItem value="delete_maintenance_window">

Delete an existing maintenance window if it's in the future, or end it if it's currently on-going. If the maintenance window has already ended it cannot be deleted.<br /><br />A Maintenance Window is used to temporarily disable one or more Services for a set period of time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#maintenance-windows)<br /><br />Scoped OAuth requires: `services.write`<br />

```sql
DELETE FROM pagerduty.maintenance_windows.maintenance_windows
WHERE id = '{{ id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_maintenance_windows"
    values={[
        { label: '_list_maintenance_windows', value: '_list_maintenance_windows' },
        { label: '_get_maintenance_window', value: '_get_maintenance_window' },
        { label: 'update_maintenance_window', value: 'update_maintenance_window' }
    ]}
>
<TabItem value="_list_maintenance_windows">

List existing maintenance windows, optionally filtered by service and/or team, or whether they are from the past, present or future.<br /><br />A Maintenance Window is used to temporarily disable one or more Services for a set period of time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#maintenance-windows)<br /><br />Scoped OAuth requires: `services.read`<br />

```sql
EXEC pagerduty.maintenance_windows.maintenance_windows._list_maintenance_windows 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@query='{{ query }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}, 
@team_ids[]='{{ team_ids[] }}', 
@service_ids[]='{{ service_ids[] }}', 
@include[]='{{ include[] }}', 
@filter='{{ filter }}'
;
```
</TabItem>
<TabItem value="_get_maintenance_window">

Get an existing maintenance window.<br /><br />A Maintenance Window is used to temporarily disable one or more Services for a set period of time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#maintenance-windows)<br /><br />Scoped OAuth requires: `services.read`<br />

```sql
EXEC pagerduty.maintenance_windows.maintenance_windows._get_maintenance_window 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="update_maintenance_window">

Update an existing maintenance window.<br /><br />A Maintenance Window is used to temporarily disable one or more Services for a set period of time.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#maintenance-windows)<br /><br />Scoped OAuth requires: `services.write`<br />

```sql
EXEC pagerduty.maintenance_windows.maintenance_windows.update_maintenance_window 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"maintenance_window": "{{ maintenance_window }}"
}'
;
```
</TabItem>
</Tabs>
