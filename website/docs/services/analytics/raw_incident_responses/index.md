--- 
title: raw_incident_responses
hide_title: false
hide_table_of_contents: false
keywords:
  - raw_incident_responses
  - analytics
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

Creates, updates, deletes, gets or lists a <code>raw_incident_responses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="raw_incident_responses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.analytics.raw_incident_responses" /></td></tr>
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
    <td><CopyableCode code="responder_id" /></td>
    <td><code>string</code></td>
    <td>ID of the user associated with the Incident Response.</td>
</tr>
<tr>
    <td><CopyableCode code="responder_name" /></td>
    <td><code>string</code></td>
    <td>Name of the user associated with the Incident Response.</td>
</tr>
<tr>
    <td><CopyableCode code="requested_at" /></td>
    <td><code>string</code></td>
    <td>Timestamp of when the user was requested.</td>
</tr>
<tr>
    <td><CopyableCode code="responded_at" /></td>
    <td><code>string</code></td>
    <td>Timestamp of when the user responded to the request.</td>
</tr>
<tr>
    <td><CopyableCode code="responder_type" /></td>
    <td><code>string</code></td>
    <td>Type of responder, where `assigned` means the user was added to the Incident via Assignment at Incident creation, `reassigned` means the user was added to the Incident via Reassignment, `escalated` means the user was added via Escalation, and `added_responder` means the user was added via Responder Reqeuest. (assigned, reassigned, escalated, added_responder)</td>
</tr>
<tr>
    <td><CopyableCode code="response_status" /></td>
    <td><code>string</code></td>
    <td>Status of the user's interaction with the Incident notification. (joined, pending, declined)</td>
</tr>
<tr>
    <td><CopyableCode code="time_to_respond_seconds" /></td>
    <td><code>integer</code></td>
    <td>Measures the time it took for the user to respond to the Incident request. In other words, `responded_at - requested_at`.</td>
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
    <td></td>
    <td>Provides enriched responder data for a single incident.&lt;br /&gt;&lt;br /&gt;Example metrics include Time to Respond, Responder Type, and Response Status. See metric definitions below.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; **Note:** Data availability reflects &#91;pipeline processing cycles&#93;(https:​//support.pagerduty.com/main/docs/insights#:~:text=Data%20Update%20Schedule) and is generally within 24 hours under normal conditions.&lt;br /&gt;Scoped OAuth requires: `analytics.read`&lt;br /&gt;</td>
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

Provides enriched responder data for a single incident.&lt;br /&gt;&lt;br /&gt;Example metrics include Time to Respond, Responder Type, and Response Status. See metric definitions below.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; **Note:** Data availability reflects &#91;pipeline processing cycles&#93;(https:​//support.pagerduty.com/main/docs/insights#:~:text=Data%20Update%20Schedule) and is generally within 24 hours under normal conditions.&lt;br /&gt;Scoped OAuth requires: `analytics.read`&lt;br /&gt;

```sql
SELECT
responder_id,
responder_name,
requested_at,
responded_at,
responder_type,
response_status,
time_to_respond_seconds
FROM pagerduty.analytics.raw_incident_responses
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
</Tabs>
