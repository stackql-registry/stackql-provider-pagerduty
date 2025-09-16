--- 
title: log_entries
hide_title: false
hide_table_of_contents: false
keywords:
  - log_entries
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

Creates, updates, deletes, gets or lists a <code>log_entries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>log_entries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incidents.log_entries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_incident_log_entries"
    values={[
        { label: 'list_incident_log_entries', value: 'list_incident_log_entries' }
    ]}
>
<TabItem value="list_incident_log_entries">

A paginated array of the incident's log entries.

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
    <td><a href="#list_incident_log_entries"><CopyableCode code="list_incident_log_entries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-is_overview"><code>is_overview</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List log entries for the specified incident.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />A Log Entry are a record of all events on your account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.read`<br /></td>
</tr>
<tr>
    <td><a href="#_list_incident_log_entries"><CopyableCode code="_list_incident_log_entries" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-is_overview"><code>is_overview</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List log entries for the specified incident.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />A Log Entry are a record of all events on your account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.read`<br /></td>
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
    defaultValue="list_incident_log_entries"
    values={[
        { label: 'list_incident_log_entries', value: 'list_incident_log_entries' }
    ]}
>
<TabItem value="list_incident_log_entries">

List log entries for the specified incident.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />A Log Entry are a record of all events on your account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.read`<br />

```sql
SELECT
*
FROM pagerduty.incidents.log_entries
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND time_zone = '{{ time_zone }}'
AND since = '{{ since }}'
AND until = '{{ until }}'
AND is_overview = '{{ is_overview }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_incident_log_entries"
    values={[
        { label: '_list_incident_log_entries', value: '_list_incident_log_entries' }
    ]}
>
<TabItem value="_list_incident_log_entries">

List log entries for the specified incident.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />A Log Entry are a record of all events on your account.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.read`<br />

```sql
EXEC pagerduty.incidents.log_entries._list_incident_log_entries 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}, 
@time_zone='{{ time_zone }}', 
@since='{{ since }}', 
@until='{{ until }}', 
@is_overview={{ is_overview }}, 
@include[]='{{ include[] }}'
;
```
</TabItem>
</Tabs>
