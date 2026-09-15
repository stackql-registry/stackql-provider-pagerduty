--- 
title: responder_metrics_by_team
hide_title: false
hide_table_of_contents: false
keywords:
  - responder_metrics_by_team
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

Creates, updates, deletes, gets or lists a <code>responder_metrics_by_team</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="responder_metrics_by_team" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.analytics.responder_metrics_by_team" /></td></tr>
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

Only returns data for responders and teams that match the filters and have data.

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
    <td><code>integer</code></td>
    <td>ID of the responder (user). Not included when aggregating by all responders.</td>
</tr>
<tr>
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>ID of the team associated with the responder. Not included when aggregating by all responders.</td>
</tr>
<tr>
    <td><CopyableCode code="responder_name" /></td>
    <td><code>string</code></td>
    <td>Name of the responder (user). Not included when aggregating by all responders.</td>
</tr>
<tr>
    <td><CopyableCode code="team_name" /></td>
    <td><code>string</code></td>
    <td>Name of the team associated with the responder. Not included when aggregating by all responders.</td>
</tr>
<tr>
    <td><CopyableCode code="mean_engaged_seconds" /></td>
    <td><code>integer</code></td>
    <td>Mean engaged time across all responders for incidents that match the given filters. Engaged time is measured from the time a user engages with an incident (by acknowledging or accepting a responder request) until the incident is resolved. This may include periods in which the incidents were snoozed.</td>
</tr>
<tr>
    <td><CopyableCode code="mean_time_to_acknowledge_seconds" /></td>
    <td><code>integer</code></td>
    <td>The average time between when an incident is first assigned to a user and when the incident is first acknowledged by that user. Reassign, resolve, and escalation actions do not imply acknowledgement.</td>
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
    <td><CopyableCode code="total_incident_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of incidents that were created.</td>
</tr>
<tr>
    <td><CopyableCode code="total_incidents_acknowledged" /></td>
    <td><code>integer</code></td>
    <td>The total count of assigned incidents acknowledged by the user.  Only explicit incident acknowledgment counts; reassign, resolve, and escalation actions do not imply acknowledgement.</td>
</tr>
<tr>
    <td><CopyableCode code="total_incidents_manual_escalated_from" /></td>
    <td><code>integer</code></td>
    <td>The total count of the user’s assigned incidents that were manually escalated away from a user without acknowledgement.</td>
</tr>
<tr>
    <td><CopyableCode code="total_incidents_manual_escalated_to" /></td>
    <td><code>integer</code></td>
    <td>The total count of incidents the user was manually escalated to.</td>
</tr>
<tr>
    <td><CopyableCode code="total_incidents_reassigned_from" /></td>
    <td><code>integer</code></td>
    <td>The total count of a user's assigned incidents that were reassigned away from the user to another user or escalation policy.</td>
</tr>
<tr>
    <td><CopyableCode code="total_incidents_reassigned_to" /></td>
    <td><code>integer</code></td>
    <td>The total count of incidents the user was reassigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="total_incidents_timeout_escalated_from" /></td>
    <td><code>integer</code></td>
    <td>The total count of the user’s assigned incidents that were escalated due to timeouts.</td>
</tr>
<tr>
    <td><CopyableCode code="total_incidents_timeout_escalated_to" /></td>
    <td><code>integer</code></td>
    <td>The total count of incidents the user was escalated to due to timeouts.</td>
</tr>
<tr>
    <td><CopyableCode code="total_interruptions" /></td>
    <td><code>integer</code></td>
    <td>Total number of unique interruptions.</td>
</tr>
<tr>
    <td><CopyableCode code="total_notifications" /></td>
    <td><code>integer</code></td>
    <td>The total count of incident notifications sent via email, SMS, phone call and push.</td>
</tr>
<tr>
    <td><CopyableCode code="total_off_hour_interruptions" /></td>
    <td><code>integer</code></td>
    <td>Total number of unique interruptions during off hours; 6pm-10pm Mon-Fri and all day Sat-Sun, based on the user’s time zone.</td>
</tr>
<tr>
    <td><CopyableCode code="total_seconds_on_call" /></td>
    <td><code>integer</code></td>
    <td>Total seconds the responder was on call.</td>
</tr>
<tr>
    <td><CopyableCode code="total_seconds_on_call_level_1" /></td>
    <td><code>integer</code></td>
    <td>Total seconds the responder was on call at level 1 of their escalation policy.</td>
</tr>
<tr>
    <td><CopyableCode code="total_seconds_on_call_level_2_plus" /></td>
    <td><code>integer</code></td>
    <td>Total seconds the responder was on call at level 2 or higher of their escalation policy.</td>
</tr>
<tr>
    <td><CopyableCode code="total_sleep_hour_interruptions" /></td>
    <td><code>integer</code></td>
    <td>Total number of unique interruptions during sleep hours; 10pm-8am every day, based on the user’s time zone.</td>
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
    <td></td>
    <td></td>
    <td>Provides incident metrics aggregated by responder.&lt;br /&gt;&lt;br /&gt;Example metrics include Seconds to Resolve, Seconds to Engage, Snoozed Seconds, and Sleep Hour Interruptions. Metric definitions can be found in our &#91;Knowledge Base&#93;(https:​//support.pagerduty.com/docs/insights#responders-list).&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; **Note:** Data availability reflects &#91;pipeline processing cycles&#93;(https:​//support.pagerduty.com/main/docs/insights#:~:text=Data%20Update%20Schedule) and is generally within 24 hours under normal conditions.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `analytics.write`&lt;br /&gt;</td>
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

Provides incident metrics aggregated by responder.&lt;br /&gt;&lt;br /&gt;Example metrics include Seconds to Resolve, Seconds to Engage, Snoozed Seconds, and Sleep Hour Interruptions. Metric definitions can be found in our &#91;Knowledge Base&#93;(https:​//support.pagerduty.com/docs/insights#responders-list).&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; **Note:** Data availability reflects &#91;pipeline processing cycles&#93;(https:​//support.pagerduty.com/main/docs/insights#:~:text=Data%20Update%20Schedule) and is generally within 24 hours under normal conditions.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `analytics.write`&lt;br /&gt;

```sql
SELECT
responder_id,
team_id,
responder_name,
team_name,
mean_engaged_seconds,
mean_time_to_acknowledge_seconds,
total_business_hour_interruptions,
total_engaged_seconds,
total_incident_count,
total_incidents_acknowledged,
total_incidents_manual_escalated_from,
total_incidents_manual_escalated_to,
total_incidents_reassigned_from,
total_incidents_reassigned_to,
total_incidents_timeout_escalated_from,
total_incidents_timeout_escalated_to,
total_interruptions,
total_notifications,
total_off_hour_interruptions,
total_seconds_on_call,
total_seconds_on_call_level_1,
total_seconds_on_call_level_2_plus,
total_sleep_hour_interruptions
FROM pagerduty.analytics.responder_metrics_by_team
;
```
</TabItem>
</Tabs>
