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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>log_entries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="log_entries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.log_entries.log_entries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

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
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="acknowledgement_timeout" /></td>
    <td><code>integer</code></td>
    <td>Duration for which the acknowledgement lasts, in seconds. Services can contain an `acknowledgement_timeout` property, which specifies the length of time acknowledgements should last for. Each time an incident is acknowledged, this timeout is copied into the acknowledgement log entry. This property is optional, as older log entries may not contain it. It may also be `null`, as acknowledgements can be performed on incidents whose services have no `acknowledgement_timeout` set.</td>
</tr>
<tr>
    <td><CopyableCode code="agent" /></td>
    <td><code>object</code></td>
    <td>(opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="assignees" /></td>
    <td><code>array</code></td>
    <td>An array of assigned Users for this log entry</td>
</tr>
<tr>
    <td><CopyableCode code="changed_actions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="changeset" /></td>
    <td><code>array</code></td>
    <td>String record of custom field updates</td>
</tr>
<tr>
    <td><CopyableCode code="channel" /></td>
    <td><code>object</code></td>
    <td>Polymorphic object representation of the means by which the action was channeled. Has different formats depending on type, indicated by channel&#91;type&#93;. Will be one of `auto`, `email`, `api`, `nagios`, or `timeout` if `agent&#91;type&#93;` is `service`. Will be one of `email`, `sms`, `website`, `web_trigger`, or `note` if `agent&#91;type&#93;` is `user`. (title: NagiosChannel)</td>
</tr>
<tr>
    <td><CopyableCode code="contexts" /></td>
    <td><code>array</code></td>
    <td>Contexts to be included with the trigger such as links to graphs or images.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time at which the log entry was created.</td>
</tr>
<tr>
    <td><CopyableCode code="event_details" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="incident" /></td>
    <td><code>object</code></td>
    <td>(opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="note" /></td>
    <td><code>string</code></td>
    <td>Optional field containing a note, if one was included with the log entry.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>object</code></td>
    <td>(opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="teams" /></td>
    <td><code>array</code></td>
    <td>Will consist of references unless included</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>(opaque JSON object)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details for a specific incident log entry. This method provides additional information you can use to get at raw event data.&lt;br /&gt;&lt;br /&gt;A log of all the events that happen to an Incident, and these are exposed as Log Entries.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#log-entries)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-is_overview"><code>is_overview</code></a>, <a href="#parameter-include[]"><code>include[]</code></a>, <a href="#parameter-team_ids[]"><code>team_ids[]</code></a></td>
    <td>List all of the incident log entries across the entire account.&lt;br /&gt;&lt;br /&gt;A log of all the events that happen to an Incident, and these are exposed as Log Entries.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#log-entries)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update_channel"><CopyableCode code="update_channel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-channel"><code>channel</code></a></td>
    <td><a href="#parameter-From"><code>From</code></a></td>
    <td>Update an existing incident log entry channel.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#log-entries)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.write`&lt;br /&gt;</td>
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
<tr id="parameter-From">
    <td><CopyableCode code="From" /></td>
    <td><code>string (email)</code></td>
    <td>The email address of a valid user associated with the account making the request.</td>
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
    <td>Time zone in which results will be rendered. This will default to the account time zone.</td>
</tr>
<tr id="parameter-total">
    <td><CopyableCode code="total" /></td>
    <td><code>boolean</code></td>
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our &#91;Pagination Docs&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get details for a specific incident log entry. This method provides additional information you can use to get at raw event data.&lt;br /&gt;&lt;br /&gt;A log of all the events that happen to an Incident, and these are exposed as Log Entries.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#log-entries)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.read`&lt;br /&gt;

```sql
SELECT
id,
acknowledgement_timeout,
agent,
assignees,
changed_actions,
changeset,
channel,
contexts,
created_at,
event_details,
html_url,
incident,
note,
self,
service,
summary,
teams,
type,
user
FROM pagerduty.log_entries.log_entries
WHERE id = '{{ id }}' -- required
AND time_zone = '{{ time_zone }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list">

List all of the incident log entries across the entire account.&lt;br /&gt;&lt;br /&gt;A log of all the events that happen to an Incident, and these are exposed as Log Entries.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#log-entries)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.read`&lt;br /&gt;

```sql
SELECT
*
FROM pagerduty.log_entries.log_entries
WHERE limit = '{{ limit }}'
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
    defaultValue="update_channel"
    values={[
        { label: 'update_channel', value: 'update_channel' }
    ]}
>
<TabItem value="update_channel">

Update an existing incident log entry channel.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#log-entries)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.write`&lt;br /&gt;

```sql
EXEC pagerduty.log_entries.log_entries.update_channel 
@id='{{ id }}' --required, 
@From='{{ From }}' 
@@json=
'{
"channel": "{{ channel }}"
}'
;
```
</TabItem>
</Tabs>
