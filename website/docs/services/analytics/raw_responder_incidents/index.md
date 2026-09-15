--- 
title: raw_responder_incidents
hide_title: false
hide_table_of_contents: false
keywords:
  - raw_responder_incidents
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

Creates, updates, deletes, gets or lists a <code>raw_responder_incidents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="raw_responder_incidents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.analytics.raw_responder_incidents" /></td></tr>
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
    <td><CopyableCode code="incident_id" /></td>
    <td><code>string</code></td>
    <td>Incident ID</td>
</tr>
<tr>
    <td><CopyableCode code="incident_priority_id" /></td>
    <td><code>string</code></td>
    <td>ID of the incident's priority level.</td>
</tr>
<tr>
    <td><CopyableCode code="responder_id" /></td>
    <td><code>string</code></td>
    <td>ID of the responder.</td>
</tr>
<tr>
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>ID of the service that the incident triggered on.</td>
</tr>
<tr>
    <td><CopyableCode code="service_team_id" /></td>
    <td><code>string</code></td>
    <td>ID of the team that owns the related service.</td>
</tr>
<tr>
    <td><CopyableCode code="incident_priority_name" /></td>
    <td><code>string</code></td>
    <td>The user-provided short name of the priority.</td>
</tr>
<tr>
    <td><CopyableCode code="responder_name" /></td>
    <td><code>string</code></td>
    <td>Name of the responder.</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Name of the service that the incident triggered on.</td>
</tr>
<tr>
    <td><CopyableCode code="service_team_name" /></td>
    <td><code>string</code></td>
    <td>Name of the team that owns the related service.</td>
</tr>
<tr>
    <td><CopyableCode code="incident_created_at" /></td>
    <td><code>string</code></td>
    <td>Timestamp of when the incident was created.</td>
</tr>
<tr>
    <td><CopyableCode code="incident_description" /></td>
    <td><code>string</code></td>
    <td>The incident description.</td>
</tr>
<tr>
    <td><CopyableCode code="incident_number" /></td>
    <td><code>integer</code></td>
    <td>The PagerDuty incident number.</td>
</tr>
<tr>
    <td><CopyableCode code="incident_priority_order" /></td>
    <td><code>integer</code></td>
    <td>The numerical value used to sort priorities. Higher values are higher priority.</td>
</tr>
<tr>
    <td><CopyableCode code="incident_urgency" /></td>
    <td><code>string</code></td>
    <td>Notification level</td>
</tr>
<tr>
    <td><CopyableCode code="mean_time_to_acknowledge_seconds" /></td>
    <td><code>integer</code></td>
    <td>Mean time from this user being assigned to an incident until this user acknowledges the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="total_acknowledgements" /></td>
    <td><code>integer</code></td>
    <td>Total acknowledgements from the responder on the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="total_business_hour_interruptions" /></td>
    <td><code>integer</code></td>
    <td>Total number of unique interruptions during business hours; 8am-6pm Mon-Fri, based on the user’s time zone.</td>
</tr>
<tr>
    <td><CopyableCode code="total_engaged_seconds" /></td>
    <td><code>integer</code></td>
    <td>Total engaged time across all responders for incidents. Engaged time is measured from the time a user engages with an incident (by acknowledging or accepting a responder request) until the incident is resolved. This may include periods in which the incidents were snoozed.</td>
</tr>
<tr>
    <td><CopyableCode code="total_interruptions" /></td>
    <td><code>integer</code></td>
    <td>Total number of unique interruptions for the responder during the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="total_manual_escalations_from" /></td>
    <td><code>integer</code></td>
    <td>Total times the responder was manually escalated away from the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="total_manual_escalations_to" /></td>
    <td><code>integer</code></td>
    <td>Total times the responder was manually escalated to the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="total_off_hour_interruptions" /></td>
    <td><code>string</code></td>
    <td>Total number of unique interruptions during off hours; 6pm-10pm Mon-Fri and all day Sat-Sun, based on the user’s time zone.</td>
</tr>
<tr>
    <td><CopyableCode code="total_reassignments_from" /></td>
    <td><code>integer</code></td>
    <td>Total times the responder was reassigned away from the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="total_reassignments_to" /></td>
    <td><code>integer</code></td>
    <td>Total times the responder was reassigned to the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="total_sleep_hour_interruptions" /></td>
    <td><code>integer</code></td>
    <td>Total number of unique interruptions during sleep hours; 10pm-8am every day, based on the user’s time zone.</td>
</tr>
<tr>
    <td><CopyableCode code="total_timeout_escalations_from" /></td>
    <td><code>integer</code></td>
    <td>Total times the responder was escalated away from the incident due to timeout.</td>
</tr>
<tr>
    <td><CopyableCode code="total_timeout_escalations_to" /></td>
    <td><code>integer</code></td>
    <td>Total times the responder was escalated to the incident due to timeout.</td>
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
    <td><a href="#parameter-responder_id"><code>responder_id</code></a></td>
    <td></td>
    <td>Provides enriched incident data and metrics for a specific responder.&lt;br /&gt;&lt;br /&gt;Example metrics include Mean Seconds to Resolve, Mean Seconds to Engage, Snoozed Seconds, and Sleep Hour Interruptions. Metric definitions can be found in our &#91;Knowledge Base&#93;(https:​//support.pagerduty.com/docs/insights#incidents-list).&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; **Note:** Data availability reflects &#91;pipeline processing cycles&#93;(https:​//support.pagerduty.com/main/docs/insights#:~:text=Data%20Update%20Schedule) and is generally within 24 hours under normal conditions.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `analytics.write`&lt;br /&gt;</td>
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
<tr id="parameter-responder_id">
    <td><CopyableCode code="responder_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the responder.</td>
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

Provides enriched incident data and metrics for a specific responder.&lt;br /&gt;&lt;br /&gt;Example metrics include Mean Seconds to Resolve, Mean Seconds to Engage, Snoozed Seconds, and Sleep Hour Interruptions. Metric definitions can be found in our &#91;Knowledge Base&#93;(https:​//support.pagerduty.com/docs/insights#incidents-list).&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; **Note:** Data availability reflects &#91;pipeline processing cycles&#93;(https:​//support.pagerduty.com/main/docs/insights#:~:text=Data%20Update%20Schedule) and is generally within 24 hours under normal conditions.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `analytics.write`&lt;br /&gt;

```sql
SELECT
incident_id,
incident_priority_id,
responder_id,
service_id,
service_team_id,
incident_priority_name,
responder_name,
service_name,
service_team_name,
incident_created_at,
incident_description,
incident_number,
incident_priority_order,
incident_urgency,
mean_time_to_acknowledge_seconds,
total_acknowledgements,
total_business_hour_interruptions,
total_engaged_seconds,
total_interruptions,
total_manual_escalations_from,
total_manual_escalations_to,
total_off_hour_interruptions,
total_reassignments_from,
total_reassignments_to,
total_sleep_hour_interruptions,
total_timeout_escalations_from,
total_timeout_escalations_to
FROM pagerduty.analytics.raw_responder_incidents
WHERE responder_id = '{{ responder_id }}' -- required
;
```
</TabItem>
</Tabs>
