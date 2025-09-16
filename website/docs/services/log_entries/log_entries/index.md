--- 
title: log_entries
hide_title: false
hide_table_of_contents: false
keywords:
  - log_entries
  - log_entries
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

Creates, updates, deletes, gets or lists a <code>log_entries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>log_entries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.log_entries.log_entries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_log_entry"
    values={[
        { label: 'get_log_entry', value: 'get_log_entry' },
        { label: 'list_log_entries', value: 'list_log_entries' }
    ]}
>
<TabItem value="get_log_entry">

A single log entry.

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
<TabItem value="list_log_entries">

A paginated array of log entries.

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
    <td><a href="#get_log_entry"><CopyableCode code="get_log_entry" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details for a specific incident log entry. This method provides additional information you can use to get at raw event data.<br /><br />A log of all the events that happen to an Incident, and these are exposed as Log Entries.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#log-entries)<br /><br />Scoped OAuth requires: `incidents.read`<br /></td>
</tr>
<tr>
    <td><a href="#list_log_entries"><CopyableCode code="list_log_entries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-is_overview"><code>is_overview</code></a>, <a href="#parameter-include[]"><code>include[]</code></a>, <a href="#parameter-team_ids[]"><code>team_ids[]</code></a></td>
    <td>List all of the incident log entries across the entire account.<br /><br />A log of all the events that happen to an Incident, and these are exposed as Log Entries.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#log-entries)<br /><br />Scoped OAuth requires: `incidents.read`<br /></td>
</tr>
<tr>
    <td><a href="#_list_log_entries"><CopyableCode code="_list_log_entries" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-is_overview"><code>is_overview</code></a>, <a href="#parameter-include[]"><code>include[]</code></a>, <a href="#parameter-team_ids[]"><code>team_ids[]</code></a></td>
    <td>List all of the incident log entries across the entire account.<br /><br />A log of all the events that happen to an Incident, and these are exposed as Log Entries.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#log-entries)<br /><br />Scoped OAuth requires: `incidents.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_log_entry"><CopyableCode code="_get_log_entry" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details for a specific incident log entry. This method provides additional information you can use to get at raw event data.<br /><br />A log of all the events that happen to an Incident, and these are exposed as Log Entries.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#log-entries)<br /><br />Scoped OAuth requires: `incidents.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_log_entry_channel"><CopyableCode code="update_log_entry_channel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-From"><code>From</code></a>, <a href="#parameter-channel"><code>channel</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Update an existing incident log entry channel.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#log-entries)<br /><br />Scoped OAuth requires: `incidents.write`<br /></td>
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
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>string</code></td>
    <td>Array of additional Models to include in response.</td>
</tr>
<tr id="parameter-is_overview">
    <td><CopyableCode code="is_overview" /></td>
    <td><code>boolean</code></td>
    <td>If `true`, will return a subset of log entries that show only the most important changes to the incident.</td>
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
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start of the date range over which you want to search.</td>
</tr>
<tr id="parameter-team_ids[]">
    <td><CopyableCode code="team_ids[]" /></td>
    <td><code>array</code></td>
    <td>An array of team IDs. Only results related to these teams will be returned. Account must have the `teams` ability to use this parameter.</td>
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
    <td>The end of the date range over which you want to search.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_log_entry"
    values={[
        { label: 'get_log_entry', value: 'get_log_entry' },
        { label: 'list_log_entries', value: 'list_log_entries' }
    ]}
>
<TabItem value="get_log_entry">

Get details for a specific incident log entry. This method provides additional information you can use to get at raw event data.<br /><br />A log of all the events that happen to an Incident, and these are exposed as Log Entries.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#log-entries)<br /><br />Scoped OAuth requires: `incidents.read`<br />

```sql
SELECT
*
FROM pagerduty.log_entries.log_entries
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND time_zone = '{{ time_zone }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list_log_entries">

List all of the incident log entries across the entire account.<br /><br />A log of all the events that happen to an Incident, and these are exposed as Log Entries.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#log-entries)<br /><br />Scoped OAuth requires: `incidents.read`<br />

```sql
SELECT
*
FROM pagerduty.log_entries.log_entries
WHERE Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND time_zone = '{{ time_zone }}'
AND since = '{{ since }}'
AND until = '{{ until }}'
AND is_overview = '{{ is_overview }}'
AND include[] = '{{ include[] }}'
AND team_ids[] = '{{ team_ids[] }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_log_entries"
    values={[
        { label: '_list_log_entries', value: '_list_log_entries' },
        { label: '_get_log_entry', value: '_get_log_entry' },
        { label: 'update_log_entry_channel', value: 'update_log_entry_channel' }
    ]}
>
<TabItem value="_list_log_entries">

List all of the incident log entries across the entire account.<br /><br />A log of all the events that happen to an Incident, and these are exposed as Log Entries.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#log-entries)<br /><br />Scoped OAuth requires: `incidents.read`<br />

```sql
EXEC pagerduty.log_entries.log_entries._list_log_entries 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}, 
@time_zone='{{ time_zone }}', 
@since='{{ since }}', 
@until='{{ until }}', 
@is_overview={{ is_overview }}, 
@include[]='{{ include[] }}', 
@team_ids[]='{{ team_ids[] }}'
;
```
</TabItem>
<TabItem value="_get_log_entry">

Get details for a specific incident log entry. This method provides additional information you can use to get at raw event data.<br /><br />A log of all the events that happen to an Incident, and these are exposed as Log Entries.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#log-entries)<br /><br />Scoped OAuth requires: `incidents.read`<br />

```sql
EXEC pagerduty.log_entries.log_entries._get_log_entry 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@time_zone='{{ time_zone }}', 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="update_log_entry_channel">

Update an existing incident log entry channel.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#log-entries)<br /><br />Scoped OAuth requires: `incidents.write`<br />

```sql
EXEC pagerduty.log_entries.log_entries.update_log_entry_channel 
@id='{{ id }}' --required, 
@From='{{ From }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"channel": "{{ channel }}"
}'
;
```
</TabItem>
</Tabs>
