--- 
title: service_change_events
hide_title: false
hide_table_of_contents: false
keywords:
  - service_change_events
  - change_events
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

Creates, updates, deletes, gets or lists a <code>service_change_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_change_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.change_events.service_change_events" /></td></tr>
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

The array of Change Events returned by the query.

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
    <td><CopyableCode code="custom_details" /></td>
    <td><code>string</code></td>
    <td>Additional details about the change event. (opaque JSON object) (title: Custom Details)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="images" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="integration" /></td>
    <td><code>object</code></td>
    <td>(opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="links" /></td>
    <td><code>array</code></td>
    <td>List of links to include.</td>
</tr>
<tr>
    <td><CopyableCode code="routing_key" /></td>
    <td><code>string</code></td>
    <td>This is the 32 character Integration Key for an Integration on a Service. The same Integration Key can be used for both alert and change events. (title: Routing Key)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td>An array containing Service objects that this change event is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The unique name of the location where the Change Event occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the emitting tool detected or generated the event.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
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
    <td><a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-team_ids[]"><code>team_ids[]</code></a>, <a href="#parameter-integration_ids[]"><code>integration_ids[]</code></a></td>
    <td>List all of the existing Change Events for a service.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;</td>
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
<tr id="parameter-integration_ids[]">
    <td><CopyableCode code="integration_ids[]" /></td>
    <td><code>array</code></td>
    <td>An array of integration IDs. Only results related to these integrations will be returned.</td>
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
    <td>The start of the date range over which you want to search, as a UTC ISO 8601 datetime string. Will return an HTTP 400 for non-UTC datetimes.</td>
</tr>
<tr id="parameter-team_ids[]">
    <td><CopyableCode code="team_ids[]" /></td>
    <td><code>array</code></td>
    <td>An array of team IDs. Only results related to these teams will be returned. Account must have the `teams` ability to use this parameter.</td>
</tr>
<tr id="parameter-total">
    <td><CopyableCode code="total" /></td>
    <td><code>boolean</code></td>
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our &#91;Pagination Docs&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
</tr>
<tr id="parameter-until">
    <td><CopyableCode code="until" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end of the date range over which you want to search, as a UTC ISO 8601 datetime string. Will return an HTTP 400 for non-UTC datetimes.</td>
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

List all of the existing Change Events for a service.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;

```sql
SELECT
id,
custom_details,
html_url,
images,
integration,
links,
routing_key,
self,
services,
source,
summary,
timestamp,
type
FROM pagerduty.change_events.service_change_events
WHERE id = '{{ id }}' -- required
AND since = '{{ since }}'
AND until = '{{ until }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND team_ids[] = '{{ team_ids[] }}'
AND integration_ids[] = '{{ integration_ids[] }}'
;
```
</TabItem>
</Tabs>
