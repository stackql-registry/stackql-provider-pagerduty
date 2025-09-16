--- 
title: overrides
hide_title: false
hide_table_of_contents: false
keywords:
  - overrides
  - schedules
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

Creates, updates, deletes, gets or lists an <code>overrides</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>overrides</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.schedules.overrides" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_schedule_overrides"
    values={[
        { label: 'list_schedule_overrides', value: 'list_schedule_overrides' }
    ]}
>
<TabItem value="list_schedule_overrides">

The collection of override objects returned by the query.

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
    <td><CopyableCode code="end" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end date and time for the override.</td>
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
    <td><CopyableCode code="start" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date and time for the override.</td>
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
<tr>
    <td><CopyableCode code="user" /></td>
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
    <td><a href="#list_schedule_overrides"><CopyableCode code="list_schedule_overrides" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-editable"><code>editable</code></a>, <a href="#parameter-overflow"><code>overflow</code></a></td>
    <td>List overrides for a given time range.<br /><br />A Schedule determines the time periods that users are On-Call.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)<br /><br />Scoped OAuth requires: `schedules.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_schedule_override"><CopyableCode code="create_schedule_override" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create one or more overrides, each for a specific user covering a specified time range. If you create an override on top of an existing override, the last created override will have priority.<br /><br />A Schedule determines the time periods that users are On-Call.<br /><br />Note: An older implementation of this endpoint only supported creating a single ocverride per request. That functionality is still supported, but deprecated and may be removed in the future.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)<br /><br />Scoped OAuth requires: `schedules.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_schedule_override"><CopyableCode code="delete_schedule_override" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-override_id"><code>override_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Remove an override.<br /><br />You cannot remove a past override.<br /><br />If the override start time is before the current time, but the end time is after the current time, the override will be truncated to the current time.<br /><br />If the override is truncated, the status code will be 200 OK, as opposed to a 204 No Content for a successful delete.<br /><br />A Schedule determines the time periods that users are On-Call.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)<br /><br />Scoped OAuth requires: `schedules.write`<br /></td>
</tr>
<tr>
    <td><a href="#_list_schedule_overrides"><CopyableCode code="_list_schedule_overrides" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-editable"><code>editable</code></a>, <a href="#parameter-overflow"><code>overflow</code></a></td>
    <td>List overrides for a given time range.<br /><br />A Schedule determines the time periods that users are On-Call.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)<br /><br />Scoped OAuth requires: `schedules.read`<br /></td>
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
<tr id="parameter-override_id">
    <td><CopyableCode code="override_id" /></td>
    <td><code>string</code></td>
    <td>The override ID on the schedule.</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start of the date range over which you want to search.</td>
</tr>
<tr id="parameter-until">
    <td><CopyableCode code="until" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end of the date range over which you want to search.</td>
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
<tr id="parameter-editable">
    <td><CopyableCode code="editable" /></td>
    <td><code>boolean</code></td>
    <td>When this parameter is present, only editable overrides will be returned. The result will only include the id of the override if this parameter is present. Only future overrides are editable.</td>
</tr>
<tr id="parameter-overflow">
    <td><CopyableCode code="overflow" /></td>
    <td><code>boolean</code></td>
    <td>Any on-call schedule entries that pass the date range bounds will be truncated at the bounds, unless the parameter overflow=true is passed. This parameter defaults to false.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_schedule_overrides"
    values={[
        { label: 'list_schedule_overrides', value: 'list_schedule_overrides' }
    ]}
>
<TabItem value="list_schedule_overrides">

List overrides for a given time range.<br /><br />A Schedule determines the time periods that users are On-Call.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)<br /><br />Scoped OAuth requires: `schedules.read`<br />

```sql
SELECT
id,
end,
html_url,
self,
start,
summary,
type,
user
FROM pagerduty.schedules.overrides
WHERE id = '{{ id }}' -- required
AND since = '{{ since }}' -- required
AND until = '{{ until }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND editable = '{{ editable }}'
AND overflow = '{{ overflow }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_schedule_override"
    values={[
        { label: 'create_schedule_override', value: 'create_schedule_override' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_schedule_override">

Create one or more overrides, each for a specific user covering a specified time range. If you create an override on top of an existing override, the last created override will have priority.<br /><br />A Schedule determines the time periods that users are On-Call.<br /><br />Note: An older implementation of this endpoint only supported creating a single ocverride per request. That functionality is still supported, but deprecated and may be removed in the future.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)<br /><br />Scoped OAuth requires: `schedules.write`<br />

```sql
INSERT INTO pagerduty.schedules.overrides (
data__overrides,
id,
Accept,
Content-Type
)
SELECT 
'{{ overrides }}',
'{{ id }}',
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
errors,
override,
status
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: overrides
  props:
    - name: id
      value: string
      description: Required parameter for the overrides resource.
    - name: overrides
      value: array
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
    defaultValue="delete_schedule_override"
    values={[
        { label: 'delete_schedule_override', value: 'delete_schedule_override' }
    ]}
>
<TabItem value="delete_schedule_override">

Remove an override.<br /><br />You cannot remove a past override.<br /><br />If the override start time is before the current time, but the end time is after the current time, the override will be truncated to the current time.<br /><br />If the override is truncated, the status code will be 200 OK, as opposed to a 204 No Content for a successful delete.<br /><br />A Schedule determines the time periods that users are On-Call.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)<br /><br />Scoped OAuth requires: `schedules.write`<br />

```sql
DELETE FROM pagerduty.schedules.overrides
WHERE id = '{{ id }}' --required
AND override_id = '{{ override_id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_schedule_overrides"
    values={[
        { label: '_list_schedule_overrides', value: '_list_schedule_overrides' }
    ]}
>
<TabItem value="_list_schedule_overrides">

List overrides for a given time range.<br /><br />A Schedule determines the time periods that users are On-Call.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)<br /><br />Scoped OAuth requires: `schedules.read`<br />

```sql
EXEC pagerduty.schedules.overrides._list_schedule_overrides 
@id='{{ id }}' --required, 
@since='{{ since }}' --required, 
@until='{{ until }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@editable={{ editable }}, 
@overflow={{ overflow }}
;
```
</TabItem>
</Tabs>
