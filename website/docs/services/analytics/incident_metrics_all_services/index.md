--- 
title: incident_metrics_all_services
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_metrics_all_services
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

Creates, updates, deletes, gets or lists an <code>incident_metrics_all_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_metrics_all_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.analytics.incident_metrics_all_services" /></td></tr>
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

Only returns data for services that match the filters and have data.

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
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>ID of the service. Only included when aggregating by service. Not included when aggregating by all.</td>
</tr>
<tr>
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>ID of the team to which the incident was assigned. Not included when aggregating by all.</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Name of the service. Only included when aggregating by service. Not included when aggregating by all.</td>
</tr>
<tr>
    <td><CopyableCode code="team_name" /></td>
    <td><code>string</code></td>
    <td>Name of the team to which the incident was assigned. Not included when aggregating by all.</td>
</tr>
<tr>
    <td><CopyableCode code="mean_assignment_count" /></td>
    <td><code>integer</code></td>
    <td>Mean count of instances where responders were assigned an incident (including through reassignment or escalation) or accepted a responder request.</td>
</tr>
<tr>
    <td><CopyableCode code="mean_engaged_seconds" /></td>
    <td><code>integer</code></td>
    <td>Mean engaged time across all responders. Engaged time is measured from the time a user engages with an incident (by acknowledging or accepting a responder request) until the incident is resolved. This may include periods in which the incidents were snoozed.</td>
</tr>
<tr>
    <td><CopyableCode code="mean_engaged_user_count" /></td>
    <td><code>integer</code></td>
    <td>Mean number of users who engaged with an incident. *Engaged* is defined as acknowledging an incident or accepting a responder request in it.</td>
</tr>
<tr>
    <td><CopyableCode code="mean_seconds_to_engage" /></td>
    <td><code>integer</code></td>
    <td>A measure of *people response time*. This metric measures the time from the first user engagement (acknowledge or responder accept) to the last. This metric is only used for incidents with **multiple responders**; for incidents with one or no engaged users, this value is null.</td>
</tr>
<tr>
    <td><CopyableCode code="mean_seconds_to_first_ack" /></td>
    <td><code>integer</code></td>
    <td>Mean time between the start of an incident, and the first responder to acknowledge.</td>
</tr>
<tr>
    <td><CopyableCode code="mean_seconds_to_mobilize" /></td>
    <td><code>integer</code></td>
    <td>Mean time between the start of an incident, and the last additional responder to acknowledge. For incidents with one or no engaged users, this value is null.</td>
</tr>
<tr>
    <td><CopyableCode code="mean_seconds_to_resolve" /></td>
    <td><code>integer</code></td>
    <td>Mean time from when an incident was triggered until it was resolved.</td>
</tr>
<tr>
    <td><CopyableCode code="mean_user_defined_engaged_seconds" /></td>
    <td><code>integer</code></td>
    <td>Mean engaged time across all responders. Engaged time is measured from the time  a user engages with an incident (by acknowledging or accepting a responder request)  until the incident is resolved. This may include periods in which the incidents were snoozed. This metric uses the incident response effort values that  &#91;users have defined&#93;(https:​//support.pagerduty.com/docs/edit-incidents#edit-incident-duration), if they exist.</td>
</tr>
<tr>
    <td><CopyableCode code="range_start" /></td>
    <td><code>string</code></td>
    <td>Start of the date range for which the metrics were calculated. Only included when an aggregate unit is specified in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="total_business_hour_interruptions" /></td>
    <td><code>integer</code></td>
    <td>Total number of unique interruptions during business hours; 8am-6pm Mon-Fri, based on the user’s time zone.</td>
</tr>
<tr>
    <td><CopyableCode code="total_engaged_seconds" /></td>
    <td><code>integer</code></td>
    <td>Total engaged time across all responders. Engaged time is measured from the time a user engages with an incident (by acknowledging or accepting a responder request) until the incident is resolved. This may include periods in which the incidents were snoozed.</td>
</tr>
<tr>
    <td><CopyableCode code="total_escalation_count" /></td>
    <td><code>integer</code></td>
    <td>Total count of instances where an incident is escalated between responders assigned to an escalation policy.</td>
</tr>
<tr>
    <td><CopyableCode code="total_incident_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of incidents that were created.</td>
</tr>
<tr>
    <td><CopyableCode code="total_incidents_acknowledged" /></td>
    <td><code>integer</code></td>
    <td>The total count of assigned incidents acknowledged.  Only explicit incident acknowledgment counts; reassign, resolve, and escalation actions do not imply acknowledgement.</td>
</tr>
<tr>
    <td><CopyableCode code="total_incidents_auto_resolved" /></td>
    <td><code></code></td>
    <td>The total count of incidents that were resolved automatically.  This count includes incidents resolved via an integration and those that were &#91;auto-resolved in PagerDuty&#93;(https:​//support.pagerduty.com/docs/configurable-service-settings#auto-resolution).</td>
</tr>
<tr>
    <td><CopyableCode code="total_incidents_manual_escalated" /></td>
    <td><code>integer</code></td>
    <td>The total count of incidents that were manually escalated.</td>
</tr>
<tr>
    <td><CopyableCode code="total_incidents_reassigned" /></td>
    <td><code>integer</code></td>
    <td>The total count of incidents that were reassigned.</td>
</tr>
<tr>
    <td><CopyableCode code="total_incidents_timeout_escalated" /></td>
    <td><code>integer</code></td>
    <td>The total count of incidents that were escalated due to timeouts.</td>
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
    <td><CopyableCode code="total_sleep_hour_interruptions" /></td>
    <td><code>integer</code></td>
    <td>Total number of unique interruptions during sleep hours. Sleep hours: 10pm-8am every day, based on the user’s time zone.</td>
</tr>
<tr>
    <td><CopyableCode code="total_snoozed_seconds" /></td>
    <td><code>integer</code></td>
    <td>Total number of seconds incidents were snoozed.</td>
</tr>
<tr>
    <td><CopyableCode code="total_user_defined_engaged_seconds" /></td>
    <td><code>integer</code></td>
    <td>Total engaged time across all responders. Engaged time is measured from the time a user engages with an incident (by acknowledging or accepting a responder request) until the incident is resolved. This may include periods in which the incidents were snoozed. This metric uses the edited incident response effort values that  &#91;users have defined&#93;(https:​//support.pagerduty.com/docs/edit-incidents#edit-incident-duration), if they exist.</td>
</tr>
<tr>
    <td><CopyableCode code="up_time_pct" /></td>
    <td><code>number</code></td>
    <td>The percentage of time in the defined date range that the service was not interrupted by a &#91;major incident&#93;(https:​//support.pagerduty.com/docs/operational-reviews#major-incidents). Only included when aggregating by team, escalation policy, service, or all services.</td>
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
    <td>Provides aggregated metrics across all services.&lt;br /&gt;&lt;br /&gt;Example metrics include Seconds to Resolve, Seconds to Engage, Snoozed Seconds, and Sleep Hour Interruptions. Metric definitions can be found in our &#91;Knowledge Base&#93;(https:​//support.pagerduty.com/docs/insights#services-list).&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; A `team_ids` or `service_ids` filter is required for &#91;user-level API keys&#93;(https:​//support.pagerduty.com/docs/using-the-api#section-generating-a-personal-rest-api-key) or keys generated through an OAuth flow. Account-level API keys do not have this requirement.&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; **Note:** Data availability reflects &#91;pipeline processing cycles&#93;(https:​//support.pagerduty.com/main/docs/insights#:~:text=Data%20Update%20Schedule) and is generally within 24 hours under normal conditions.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `analytics.write`&lt;br /&gt;</td>
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

Provides aggregated metrics across all services.&lt;br /&gt;&lt;br /&gt;Example metrics include Seconds to Resolve, Seconds to Engage, Snoozed Seconds, and Sleep Hour Interruptions. Metric definitions can be found in our &#91;Knowledge Base&#93;(https:​//support.pagerduty.com/docs/insights#services-list).&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; A `team_ids` or `service_ids` filter is required for &#91;user-level API keys&#93;(https:​//support.pagerduty.com/docs/using-the-api#section-generating-a-personal-rest-api-key) or keys generated through an OAuth flow. Account-level API keys do not have this requirement.&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; **Note:** Data availability reflects &#91;pipeline processing cycles&#93;(https:​//support.pagerduty.com/main/docs/insights#:~:text=Data%20Update%20Schedule) and is generally within 24 hours under normal conditions.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `analytics.write`&lt;br /&gt;

```sql
SELECT
service_id,
team_id,
service_name,
team_name,
mean_assignment_count,
mean_engaged_seconds,
mean_engaged_user_count,
mean_seconds_to_engage,
mean_seconds_to_first_ack,
mean_seconds_to_mobilize,
mean_seconds_to_resolve,
mean_user_defined_engaged_seconds,
range_start,
total_business_hour_interruptions,
total_engaged_seconds,
total_escalation_count,
total_incident_count,
total_incidents_acknowledged,
total_incidents_auto_resolved,
total_incidents_manual_escalated,
total_incidents_reassigned,
total_incidents_timeout_escalated,
total_interruptions,
total_notifications,
total_off_hour_interruptions,
total_sleep_hour_interruptions,
total_snoozed_seconds,
total_user_defined_engaged_seconds,
up_time_pct
FROM pagerduty.analytics.incident_metrics_all_services
;
```
</TabItem>
</Tabs>
