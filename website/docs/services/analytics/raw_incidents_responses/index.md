--- 
title: raw_incidents_responses
hide_title: false
hide_table_of_contents: false
keywords:
  - raw_incidents_responses
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
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>raw_incidents_responses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>raw_incidents_responses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.analytics.raw_incidents_responses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_analytics_incident_responses_by_id"
    values={[
        { label: 'get_analytics_incident_responses_by_id', value: 'get_analytics_incident_responses_by_id' }
    ]}
>
<TabItem value="get_analytics_incident_responses_by_id">

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
    <td>Type of responder, where `assigned` means the user was added to the Incident via Assignment at Incident creation, `reassigned` means the user was added to the Incident via Reassignment, `escalated` means the user was added via Escalation, and `added_responder` means the user was added via Responder Reqeuest.</td>
</tr>
<tr>
    <td><CopyableCode code="response_status" /></td>
    <td><code>string</code></td>
    <td>Status of the user's interaction with the Incident notification.</td>
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
    <td><a href="#get_analytics_incident_responses_by_id"><CopyableCode code="get_analytics_incident_responses_by_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Provides enriched responder data for a single incident.<br /><br />Example metrics include Time to Respond, Responder Type, and Response Status. See metric definitions below.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />&lt;!-- theme: info --&gt;<br />&gt; **Note:** Analytics data is updated once per day. It takes up to 24 hours before new incident responses appear in the Analytics API.<br />Scoped OAuth requires: `analytics.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_analytics_incident_responses_by_id"><CopyableCode code="_get_analytics_incident_responses_by_id" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Provides enriched responder data for a single incident.<br /><br />Example metrics include Time to Respond, Responder Type, and Response Status. See metric definitions below.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />&lt;!-- theme: info --&gt;<br />&gt; **Note:** Analytics data is updated once per day. It takes up to 24 hours before new incident responses appear in the Analytics API.<br />Scoped OAuth requires: `analytics.read`<br /></td>
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
    defaultValue="get_analytics_incident_responses_by_id"
    values={[
        { label: 'get_analytics_incident_responses_by_id', value: 'get_analytics_incident_responses_by_id' }
    ]}
>
<TabItem value="get_analytics_incident_responses_by_id">

Provides enriched responder data for a single incident.<br /><br />Example metrics include Time to Respond, Responder Type, and Response Status. See metric definitions below.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />&lt;!-- theme: info --&gt;<br />&gt; **Note:** Analytics data is updated once per day. It takes up to 24 hours before new incident responses appear in the Analytics API.<br />Scoped OAuth requires: `analytics.read`<br />

```sql
SELECT
responder_id,
responder_name,
requested_at,
responded_at,
responder_type,
response_status,
time_to_respond_seconds
FROM pagerduty.analytics.raw_incidents_responses
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_analytics_incident_responses_by_id"
    values={[
        { label: '_get_analytics_incident_responses_by_id', value: '_get_analytics_incident_responses_by_id' }
    ]}
>
<TabItem value="_get_analytics_incident_responses_by_id">

Provides enriched responder data for a single incident.<br /><br />Example metrics include Time to Respond, Responder Type, and Response Status. See metric definitions below.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; This endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br />&lt;!-- theme: info --&gt;<br />&gt; **Note:** Analytics data is updated once per day. It takes up to 24 hours before new incident responses appear in the Analytics API.<br />Scoped OAuth requires: `analytics.read`<br />

```sql
EXEC pagerduty.analytics.raw_incidents_responses._get_analytics_incident_responses_by_id 
@id='{{ id }}' --required 
@@json=
'{
"limit": {{ limit }}, 
"order": "{{ order }}", 
"order_by": "{{ order_by }}", 
"time_zone": "{{ time_zone }}"
}'
;
```
</TabItem>
</Tabs>
