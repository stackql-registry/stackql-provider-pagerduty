--- 
title: schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - schedules
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

Creates, updates, deletes, gets or lists a <code>schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>schedules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.schedules.schedules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_schedule"
    values={[
        { label: 'get_schedule', value: 'get_schedule' },
        { label: 'list_schedules', value: 'list_schedules' }
    ]}
>
<TabItem value="get_schedule">

The schedule object.

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
    <td>The name of the schedule</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the schedule</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_policies" /></td>
    <td><code>array</code></td>
    <td>An array of all of the escalation policies that uses this schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="final_schedule" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="overrides_subschedule" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="schedule_layers" /></td>
    <td><code>array</code></td>
    <td>A list of schedule layers.</td>
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
    <td><CopyableCode code="teams" /></td>
    <td><code>array</code></td>
    <td>An array of all of the teams on the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string (activesupport-time-zone)</code></td>
    <td>The time zone of the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of object being created. (default: schedule)</td>
</tr>
<tr>
    <td><CopyableCode code="users" /></td>
    <td><code>array</code></td>
    <td>An array of all of the users on the schedule.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_schedules">

A paginated array of schedule objects.

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
    <td>The name of the schedule</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the schedule</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_policies" /></td>
    <td><code>array</code></td>
    <td>An array of all of the escalation policies that uses this schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="final_schedule" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="overrides_subschedule" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="schedule_layers" /></td>
    <td><code>array</code></td>
    <td>A list of schedule layers.</td>
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
    <td><CopyableCode code="teams" /></td>
    <td><code>array</code></td>
    <td>An array of all of the teams on the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string (activesupport-time-zone)</code></td>
    <td>The time zone of the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of object being created. (default: schedule)</td>
</tr>
<tr>
    <td><CopyableCode code="users" /></td>
    <td><code>array</code></td>
    <td>An array of all of the users on the schedule.</td>
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
    <td><a href="#get_schedule"><CopyableCode code="get_schedule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a></td>
    <td>Show detailed information about a schedule, including entries for each layer and sub-schedule.<br />Scoped OAuth requires: `schedules.read`<br /></td>
</tr>
<tr>
    <td><a href="#list_schedules"><CopyableCode code="list_schedules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List the on-call schedules.<br /><br />A Schedule determines the time periods that users are On-Call.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)<br /><br />Scoped OAuth requires: `schedules.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_schedule"><CopyableCode code="create_schedule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__schedule"><code>data__schedule</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-overflow"><code>overflow</code></a></td>
    <td>Create a new on-call schedule.<br /><br />A Schedule determines the time periods that users are On-Call.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)<br /><br />Scoped OAuth requires: `schedules.write`<br /></td>
</tr>
<tr>
    <td><a href="#create_schedule_preview"><CopyableCode code="create_schedule_preview" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__schedule"><code>data__schedule</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-overflow"><code>overflow</code></a></td>
    <td>Preview what an on-call schedule would look like without saving it.<br /><br />A Schedule determines the time periods that users are On-Call.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)<br /><br />Scoped OAuth requires: `schedules.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_schedule"><CopyableCode code="delete_schedule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Delete an on-call schedule.<br /><br />A Schedule determines the time periods that users are On-Call.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)<br /><br />Scoped OAuth requires: `schedules.write`<br /></td>
</tr>
<tr>
    <td><a href="#_list_schedules"><CopyableCode code="_list_schedules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List the on-call schedules.<br /><br />A Schedule determines the time periods that users are On-Call.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)<br /><br />Scoped OAuth requires: `schedules.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_schedule"><CopyableCode code="_get_schedule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a></td>
    <td>Show detailed information about a schedule, including entries for each layer and sub-schedule.<br />Scoped OAuth requires: `schedules.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_schedule"><CopyableCode code="update_schedule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-schedule"><code>schedule</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-overflow"><code>overflow</code></a></td>
    <td>Update an existing on-call schedule.<br /><br />A Schedule determines the time periods that users are On-Call.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)<br /><br />Scoped OAuth requires: `schedules.write`<br /></td>
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
<tr id="parameter-overflow">
    <td><CopyableCode code="overflow" /></td>
    <td><code>boolean</code></td>
    <td>Any on-call schedule entries that pass the date range bounds will be truncated at the bounds, unless the parameter `overflow=true` is passed. This parameter defaults to false. For instance, if your schedule is a rotation that changes daily at midnight UTC, and your date range is from `2011-06-01T10:00:00Z` to `2011-06-01T14:00:00Z`:   - If you don't pass the `overflow=true` parameter, you will get one schedule entry returned with a start of `2011-06-01T10:00:00Z` and end of `2011-06-01T14:00:00Z`. - If you do pass the `overflow=true` parameter, you will get one schedule entry returned with a start of `2011-06-01T00:00:00Z` and end of `2011-06-02T00:00:00Z`. </td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>Filters the result, showing only the records whose name matches the query.</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start of the date range over which you want to show schedule entries. Defaults to 2 weeks before until if an until is given.</td>
</tr>
<tr id="parameter-time_zone">
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string (tzinfo)</code></td>
    <td>Time zone in which dates in the result will be rendered.</td>
</tr>
<tr id="parameter-total">
    <td><CopyableCode code="total" /></td>
    <td><code>boolean</code></td>
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
</tr>
<tr id="parameter-until">
    <td><CopyableCode code="until" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end of the date range over which you want to show schedule entries. Defaults to 2 weeks after since if a since is given.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_schedule"
    values={[
        { label: 'get_schedule', value: 'get_schedule' },
        { label: 'list_schedules', value: 'list_schedules' }
    ]}
>
<TabItem value="get_schedule">

Show detailed information about a schedule, including entries for each layer and sub-schedule.<br />Scoped OAuth requires: `schedules.read`<br />

```sql
SELECT
id,
name,
description,
escalation_policies,
final_schedule,
html_url,
overrides_subschedule,
schedule_layers,
self,
summary,
teams,
time_zone,
type,
users
FROM pagerduty.schedules.schedules
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND time_zone = '{{ time_zone }}'
AND since = '{{ since }}'
AND until = '{{ until }}'
;
```
</TabItem>
<TabItem value="list_schedules">

List the on-call schedules.<br /><br />A Schedule determines the time periods that users are On-Call.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)<br /><br />Scoped OAuth requires: `schedules.read`<br />

```sql
SELECT
id,
name,
description,
escalation_policies,
final_schedule,
html_url,
overrides_subschedule,
schedule_layers,
self,
summary,
teams,
time_zone,
type,
users
FROM pagerduty.schedules.schedules
WHERE Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND query = '{{ query }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_schedule"
    values={[
        { label: 'create_schedule', value: 'create_schedule' },
        { label: 'create_schedule_preview', value: 'create_schedule_preview' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_schedule">

Create a new on-call schedule.<br /><br />A Schedule determines the time periods that users are On-Call.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)<br /><br />Scoped OAuth requires: `schedules.write`<br />

```sql
INSERT INTO pagerduty.schedules.schedules (
data__schedule,
Accept,
Content-Type,
overflow
)
SELECT 
'{{ schedule }}' /* required */,
'{{ Accept }}',
'{{ Content-Type }}',
'{{ overflow }}'
RETURNING
schedule
;
```
</TabItem>
<TabItem value="create_schedule_preview">

Preview what an on-call schedule would look like without saving it.<br /><br />A Schedule determines the time periods that users are On-Call.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)<br /><br />Scoped OAuth requires: `schedules.write`<br />

```sql
INSERT INTO pagerduty.schedules.schedules (
data__schedule,
Accept,
Content-Type,
since,
until,
overflow
)
SELECT 
'{{ schedule }}' /* required */,
'{{ Accept }}',
'{{ Content-Type }}',
'{{ since }}',
'{{ until }}',
'{{ overflow }}'
RETURNING
schedule
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: schedules
  props:
    - name: schedule
      value: object
    - name: Accept
      value: string
      description: The `Accept` header is used as a versioning header.
    - name: Content-Type
      value: string
    - name: overflow
      value: boolean
      description: Any on-call schedule entries that pass the date range bounds will be truncated at the bounds, unless the parameter `overflow=true` is passed. This parameter defaults to false. For instance, if your schedule is a rotation that changes daily at midnight UTC, and your date range is from `2011-06-01T10:00:00Z` to `2011-06-01T14:00:00Z`:   - If you don't pass the `overflow=true` parameter, you will get one schedule entry returned with a start of `2011-06-01T10:00:00Z` and end of `2011-06-01T14:00:00Z`. - If you do pass the `overflow=true` parameter, you will get one schedule entry returned with a start of `2011-06-01T00:00:00Z` and end of `2011-06-02T00:00:00Z`. 
    - name: since
      value: string (date-time)
      description: The start of the date range over which you want to search.
    - name: until
      value: string (date-time)
      description: The end of the date range over which you want to search.
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_schedule"
    values={[
        { label: 'delete_schedule', value: 'delete_schedule' }
    ]}
>
<TabItem value="delete_schedule">

Delete an on-call schedule.<br /><br />A Schedule determines the time periods that users are On-Call.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)<br /><br />Scoped OAuth requires: `schedules.write`<br />

```sql
DELETE FROM pagerduty.schedules.schedules
WHERE id = '{{ id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_schedules"
    values={[
        { label: '_list_schedules', value: '_list_schedules' },
        { label: '_get_schedule', value: '_get_schedule' },
        { label: 'update_schedule', value: 'update_schedule' }
    ]}
>
<TabItem value="_list_schedules">

List the on-call schedules.<br /><br />A Schedule determines the time periods that users are On-Call.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)<br /><br />Scoped OAuth requires: `schedules.read`<br />

```sql
EXEC pagerduty.schedules.schedules._list_schedules 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}, 
@query='{{ query }}', 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="_get_schedule">

Show detailed information about a schedule, including entries for each layer and sub-schedule.<br />Scoped OAuth requires: `schedules.read`<br />

```sql
EXEC pagerduty.schedules.schedules._get_schedule 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@time_zone='{{ time_zone }}', 
@since='{{ since }}', 
@until='{{ until }}'
;
```
</TabItem>
<TabItem value="update_schedule">

Update an existing on-call schedule.<br /><br />A Schedule determines the time periods that users are On-Call.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#schedules)<br /><br />Scoped OAuth requires: `schedules.write`<br />

```sql
EXEC pagerduty.schedules.schedules.update_schedule 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@overflow={{ overflow }} 
@@json=
'{
"schedule": "{{ schedule }}"
}'
;
```
</TabItem>
</Tabs>
