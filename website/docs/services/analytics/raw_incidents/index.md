--- 
title: raw_incidents
hide_title: false
hide_table_of_contents: false
keywords:
  - raw_incidents
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

Creates, updates, deletes, gets or lists a <code>raw_incidents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="raw_incidents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.analytics.raw_incidents" /></td></tr>
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
    <td>Incident ID</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_policy_id" /></td>
    <td><code>string</code></td>
    <td>ID of the escalation policy the incident was assigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="incident_type_id" /></td>
    <td><code>string</code></td>
    <td>ID of the Incident Type.</td>
</tr>
<tr>
    <td><CopyableCode code="priority_id" /></td>
    <td><code>string</code></td>
    <td>ID of the incident's priority level.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_by_user_id" /></td>
    <td><code>string</code></td>
    <td>ID of the user who resolved the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>ID of the service that the incident triggered on.</td>
</tr>
<tr>
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>ID of the team the incident was assigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_policy_name" /></td>
    <td><code>string</code></td>
    <td>Name of the escalation policy the incident was assigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="incident_type_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Incident Type.</td>
</tr>
<tr>
    <td><CopyableCode code="priority_name" /></td>
    <td><code>string</code></td>
    <td>The user-provided short name of the priority.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_by_user_name" /></td>
    <td><code>string</code></td>
    <td>Name of the user who resolved the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Name of the service that the incident triggered on.</td>
</tr>
<tr>
    <td><CopyableCode code="team_name" /></td>
    <td><code>string</code></td>
    <td>Name of the team the incident was assigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="acknowledged_user_ids" /></td>
    <td><code>array</code></td>
    <td>The IDs of the users who acknowledged the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="acknowledged_user_names" /></td>
    <td><code>array</code></td>
    <td>The names of the users who acknowledged the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="acknowledgement_count" /></td>
    <td><code>integer</code></td>
    <td>Total count of acknowledgements in the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="active_user_count" /></td>
    <td><code>integer</code></td>
    <td>Total number of responders who either acknowledged the incident or accepted a responder request.</td>
</tr>
<tr>
    <td><CopyableCode code="assigned_user_ids" /></td>
    <td><code>array</code></td>
    <td>The IDs of the users who were assigned the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="assigned_user_names" /></td>
    <td><code>array</code></td>
    <td>The names of the users who were assigned the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="assignment_count" /></td>
    <td><code>integer</code></td>
    <td>Total count of instances where responders were assigned an incident (including through reassignment or escalation).</td>
</tr>
<tr>
    <td><CopyableCode code="auto_resolved" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the incident resolved automatically, either via an integration  or &#91;auto-resolved in PagerDuty&#93;(https:​//support.pagerduty.com/docs/configurable-service-settings#auto-resolution).</td>
</tr>
<tr>
    <td><CopyableCode code="business_hour_interruptions" /></td>
    <td><code>integer</code></td>
    <td>Total number of unique interruptions during business hours; 8am-6pm Mon-Fri, based on the user’s time zone.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>Timestamp of when the incident was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The incident description</td>
</tr>
<tr>
    <td><CopyableCode code="engaged_seconds" /></td>
    <td><code>integer</code></td>
    <td>Total engaged time across all responders for this incident.  Engaged time is measured from the time a user engages with an incident (by acknowledging or accepting a responder request) until the incident is resolved.  This may include periods in which the incidents were snoozed.</td>
</tr>
<tr>
    <td><CopyableCode code="engaged_user_count" /></td>
    <td><code>integer</code></td>
    <td>Total number of users who engaged (acknowledged, accepted responder request) in the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_count" /></td>
    <td><code>integer</code></td>
    <td>Total count of instances where an incident is escalated between responders assigned to an escalation policy.</td>
</tr>
<tr>
    <td><CopyableCode code="incident_number" /></td>
    <td><code>integer</code></td>
    <td>The PagerDuty incident number.</td>
</tr>
<tr>
    <td><CopyableCode code="joined_user_ids" /></td>
    <td><code>array</code></td>
    <td>The IDs of the users who either acknowledged the incident or accepted a responder request.</td>
</tr>
<tr>
    <td><CopyableCode code="joined_user_names" /></td>
    <td><code>array</code></td>
    <td>The names of the users who either acknowledged the incident or accepted a responder request.</td>
</tr>
<tr>
    <td><CopyableCode code="major" /></td>
    <td><code>boolean</code></td>
    <td>An incident is classified as a &#91;major incident&#93;(https:​//support.pagerduty.com/docs/operational-reviews#major-incidents) if it has one of the two highest priorities, or if multiple responders are added and acknowledge the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="manual_escalation_count" /></td>
    <td><code>integer</code></td>
    <td>Total count of manual escalations in the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="off_hour_interruptions" /></td>
    <td><code>integer</code></td>
    <td>Total number of unique interruptions during off hours; 6pm-10pm Mon-Fri and all day Sat-Sun, based on the user’s time zone.</td>
</tr>
<tr>
    <td><CopyableCode code="priority_order" /></td>
    <td><code>integer</code></td>
    <td>The numerical value used to sort priorities. Higher values are higher priority.</td>
</tr>
<tr>
    <td><CopyableCode code="reassignment_count" /></td>
    <td><code>integer</code></td>
    <td>Total count of reassignments in the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_at" /></td>
    <td><code>string</code></td>
    <td>Timestamp of when the incident was resolved.</td>
</tr>
<tr>
    <td><CopyableCode code="seconds_to_engage" /></td>
    <td><code>integer</code></td>
    <td>A measure of *people response time*. This metric measures the time from the first user engagement (acknowledge or responder accept) to the last. This metric is only used for incidents with **multiple responders**; for incidents with one or no engaged users, this value is null.</td>
</tr>
<tr>
    <td><CopyableCode code="seconds_to_first_ack" /></td>
    <td><code>integer</code></td>
    <td>Time between the start of an incident, and the first responder to acknowledge.</td>
</tr>
<tr>
    <td><CopyableCode code="seconds_to_mobilize" /></td>
    <td><code>integer</code></td>
    <td>Time between the start of an incident, and the last additional responder to acknowledge. If an incident has one or no responders, the value will be null.</td>
</tr>
<tr>
    <td><CopyableCode code="seconds_to_resolve" /></td>
    <td><code>integer</code></td>
    <td>Time from when an incident was triggered until it was resolved.</td>
</tr>
<tr>
    <td><CopyableCode code="sleep_hour_interruptions" /></td>
    <td><code>integer</code></td>
    <td>Total number of unique interruptions during sleep hours; 10pm-8am every day, based on the user’s time zone.</td>
</tr>
<tr>
    <td><CopyableCode code="snoozed_seconds" /></td>
    <td><code>integer</code></td>
    <td>Total seconds the incident has been snoozed for.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The incident status. Can be one of `triggered`, `acknowledged`, or `resolved`.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout_escalation_count" /></td>
    <td><code>integer</code></td>
    <td>Total count of timeout escalations in the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="total_interruptions" /></td>
    <td><code>integer</code></td>
    <td>Total number of unique interruptions in the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="total_notifications" /></td>
    <td><code>integer</code></td>
    <td>Total number of notifications sent for the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td>Timestamp of when the incident was last updated by the analytics process.  Does not match the updated_at for an incident returned by the standard REST api incidents endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="urgency" /></td>
    <td><code>string</code></td>
    <td>Notification level</td>
</tr>
<tr>
    <td><CopyableCode code="user_defined_effort_seconds" /></td>
    <td><code>integer</code></td>
    <td>The total response effort in seconds, &#91;as defined by the user&#93;(https:​//support.pagerduty.com/docs/editing-incidents#edit-incident-duration).</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Incident ID</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_policy_id" /></td>
    <td><code>string</code></td>
    <td>ID of the escalation policy the incident was assigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="incident_type_id" /></td>
    <td><code>string</code></td>
    <td>ID of the Incident Type.</td>
</tr>
<tr>
    <td><CopyableCode code="priority_id" /></td>
    <td><code>string</code></td>
    <td>ID of the incident's priority level.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_by_user_id" /></td>
    <td><code>string</code></td>
    <td>ID of the user who resolved the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>ID of the service that the incident triggered on.</td>
</tr>
<tr>
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>ID of the team the incident was assigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_policy_name" /></td>
    <td><code>string</code></td>
    <td>Name of the escalation policy the incident was assigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="incident_type_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Incident Type.</td>
</tr>
<tr>
    <td><CopyableCode code="priority_name" /></td>
    <td><code>string</code></td>
    <td>The user-provided short name of the priority.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_by_user_name" /></td>
    <td><code>string</code></td>
    <td>Name of the user who resolved the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Name of the service that the incident triggered on.</td>
</tr>
<tr>
    <td><CopyableCode code="team_name" /></td>
    <td><code>string</code></td>
    <td>Name of the team the incident was assigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="acknowledged_user_ids" /></td>
    <td><code>array</code></td>
    <td>The IDs of the users who acknowledged the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="acknowledged_user_names" /></td>
    <td><code>array</code></td>
    <td>The names of the users who acknowledged the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="acknowledgement_count" /></td>
    <td><code>integer</code></td>
    <td>Total count of acknowledgements in the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="active_user_count" /></td>
    <td><code>integer</code></td>
    <td>Total number of responders who either acknowledged the incident or accepted a responder request.</td>
</tr>
<tr>
    <td><CopyableCode code="assigned_user_ids" /></td>
    <td><code>array</code></td>
    <td>The IDs of the users who were assigned the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="assigned_user_names" /></td>
    <td><code>array</code></td>
    <td>The names of the users who were assigned the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="assignment_count" /></td>
    <td><code>integer</code></td>
    <td>Total count of instances where responders were assigned an incident (including through reassignment or escalation).</td>
</tr>
<tr>
    <td><CopyableCode code="auto_resolved" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the incident resolved automatically, either via an integration  or &#91;auto-resolved in PagerDuty&#93;(https:​//support.pagerduty.com/docs/configurable-service-settings#auto-resolution).</td>
</tr>
<tr>
    <td><CopyableCode code="business_hour_interruptions" /></td>
    <td><code>integer</code></td>
    <td>Total number of unique interruptions during business hours; 8am-6pm Mon-Fri, based on the user’s time zone.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>Timestamp of when the incident was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The incident description</td>
</tr>
<tr>
    <td><CopyableCode code="engaged_seconds" /></td>
    <td><code>integer</code></td>
    <td>Total engaged time across all responders for this incident.  Engaged time is measured from the time a user engages with an incident (by acknowledging or accepting a responder request) until the incident is resolved.  This may include periods in which the incidents were snoozed.</td>
</tr>
<tr>
    <td><CopyableCode code="engaged_user_count" /></td>
    <td><code>integer</code></td>
    <td>Total number of users who engaged (acknowledged, accepted responder request) in the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_count" /></td>
    <td><code>integer</code></td>
    <td>Total count of instances where an incident is escalated between responders assigned to an escalation policy.</td>
</tr>
<tr>
    <td><CopyableCode code="incident_number" /></td>
    <td><code>integer</code></td>
    <td>The PagerDuty incident number.</td>
</tr>
<tr>
    <td><CopyableCode code="joined_user_ids" /></td>
    <td><code>array</code></td>
    <td>The IDs of the users who either acknowledged the incident or accepted a responder request.</td>
</tr>
<tr>
    <td><CopyableCode code="joined_user_names" /></td>
    <td><code>array</code></td>
    <td>The names of the users who either acknowledged the incident or accepted a responder request.</td>
</tr>
<tr>
    <td><CopyableCode code="major" /></td>
    <td><code>boolean</code></td>
    <td>An incident is classified as a &#91;major incident&#93;(https:​//support.pagerduty.com/docs/operational-reviews#major-incidents) if it has one of the two highest priorities, or if multiple responders are added and acknowledge the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="manual_escalation_count" /></td>
    <td><code>integer</code></td>
    <td>Total count of manual escalations in the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="off_hour_interruptions" /></td>
    <td><code>integer</code></td>
    <td>Total number of unique interruptions during off hours; 6pm-10pm Mon-Fri and all day Sat-Sun, based on the user’s time zone.</td>
</tr>
<tr>
    <td><CopyableCode code="priority_order" /></td>
    <td><code>integer</code></td>
    <td>The numerical value used to sort priorities. Higher values are higher priority.</td>
</tr>
<tr>
    <td><CopyableCode code="reassignment_count" /></td>
    <td><code>integer</code></td>
    <td>Total count of reassignments in the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_at" /></td>
    <td><code>string</code></td>
    <td>Timestamp of when the incident was resolved.</td>
</tr>
<tr>
    <td><CopyableCode code="seconds_to_engage" /></td>
    <td><code>integer</code></td>
    <td>A measure of *people response time*. This metric measures the time from the first user engagement (acknowledge or responder accept) to the last. This metric is only used for incidents with **multiple responders**; for incidents with one or no engaged users, this value is null.</td>
</tr>
<tr>
    <td><CopyableCode code="seconds_to_first_ack" /></td>
    <td><code>integer</code></td>
    <td>Time between the start of an incident, and the first responder to acknowledge.</td>
</tr>
<tr>
    <td><CopyableCode code="seconds_to_mobilize" /></td>
    <td><code>integer</code></td>
    <td>Time between the start of an incident, and the last additional responder to acknowledge. If an incident has one or no responders, the value will be null.</td>
</tr>
<tr>
    <td><CopyableCode code="seconds_to_resolve" /></td>
    <td><code>integer</code></td>
    <td>Time from when an incident was triggered until it was resolved.</td>
</tr>
<tr>
    <td><CopyableCode code="sleep_hour_interruptions" /></td>
    <td><code>integer</code></td>
    <td>Total number of unique interruptions during sleep hours; 10pm-8am every day, based on the user’s time zone.</td>
</tr>
<tr>
    <td><CopyableCode code="snoozed_seconds" /></td>
    <td><code>integer</code></td>
    <td>Total seconds the incident has been snoozed for.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The incident status. Can be one of `triggered`, `acknowledged`, or `resolved`.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout_escalation_count" /></td>
    <td><code>integer</code></td>
    <td>Total count of timeout escalations in the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="total_interruptions" /></td>
    <td><code>integer</code></td>
    <td>Total number of unique interruptions in the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="total_notifications" /></td>
    <td><code>integer</code></td>
    <td>Total number of notifications sent for the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td>Timestamp of when the incident was last updated by the analytics process.  Does not match the updated_at for an incident returned by the standard REST api incidents endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="urgency" /></td>
    <td><code>string</code></td>
    <td>Notification level</td>
</tr>
<tr>
    <td><CopyableCode code="user_defined_effort_seconds" /></td>
    <td><code>integer</code></td>
    <td>The total response effort in seconds, &#91;as defined by the user&#93;(https:​//support.pagerduty.com/docs/editing-incidents#edit-incident-duration).</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Provides enriched incident data and metrics for a single incident.&lt;br /&gt;&lt;br /&gt;Example metrics include Seconds to Resolve, Seconds to Engage, Snoozed Seconds, and Sleep Hour Interruptions. Metric definitions can be found in our &#91;Knowledge Base&#93;(https:​//support.pagerduty.com/docs/insights#incidents-list).&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; **Note:** Data availability reflects &#91;pipeline processing cycles&#93;(https:​//support.pagerduty.com/main/docs/insights#:~:text=Data%20Update%20Schedule) and is generally within 24 hours under normal conditions.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `analytics.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Provides enriched incident data and metrics for multiple incidents.&lt;br /&gt;&lt;br /&gt;Example metrics include Seconds to Resolve, Seconds to Engage, Snoozed Seconds, and Sleep Hour Interruptions. Metric definitions can be found in our &#91;Knowledge Base&#93;(https:​//support.pagerduty.com/docs/insights#incidents-list).&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; A `team_ids` or `service_ids` filter is required for &#91;user-level API keys&#93;(https:​//support.pagerduty.com/docs/using-the-api#section-generating-a-personal-rest-api-key) or keys generated through an OAuth flow. Account-level API keys do not have this requirement.&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; **Note:** Data availability reflects &#91;pipeline processing cycles&#93;(https:​//support.pagerduty.com/main/docs/insights#:~:text=Data%20Update%20Schedule) and is generally within 24 hours under normal conditions.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `analytics.write`&lt;br /&gt;</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Provides enriched incident data and metrics for a single incident.&lt;br /&gt;&lt;br /&gt;Example metrics include Seconds to Resolve, Seconds to Engage, Snoozed Seconds, and Sleep Hour Interruptions. Metric definitions can be found in our &#91;Knowledge Base&#93;(https:​//support.pagerduty.com/docs/insights#incidents-list).&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; **Note:** Data availability reflects &#91;pipeline processing cycles&#93;(https:​//support.pagerduty.com/main/docs/insights#:~:text=Data%20Update%20Schedule) and is generally within 24 hours under normal conditions.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `analytics.read`&lt;br /&gt;

```sql
SELECT
id,
escalation_policy_id,
incident_type_id,
priority_id,
resolved_by_user_id,
service_id,
team_id,
escalation_policy_name,
incident_type_name,
priority_name,
resolved_by_user_name,
service_name,
team_name,
acknowledged_user_ids,
acknowledged_user_names,
acknowledgement_count,
active_user_count,
assigned_user_ids,
assigned_user_names,
assignment_count,
auto_resolved,
business_hour_interruptions,
created_at,
description,
engaged_seconds,
engaged_user_count,
escalation_count,
incident_number,
joined_user_ids,
joined_user_names,
major,
manual_escalation_count,
off_hour_interruptions,
priority_order,
reassignment_count,
resolved_at,
seconds_to_engage,
seconds_to_first_ack,
seconds_to_mobilize,
seconds_to_resolve,
sleep_hour_interruptions,
snoozed_seconds,
status,
timeout_escalation_count,
total_interruptions,
total_notifications,
updated_at,
urgency,
user_defined_effort_seconds
FROM pagerduty.analytics.raw_incidents
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Provides enriched incident data and metrics for multiple incidents.&lt;br /&gt;&lt;br /&gt;Example metrics include Seconds to Resolve, Seconds to Engage, Snoozed Seconds, and Sleep Hour Interruptions. Metric definitions can be found in our &#91;Knowledge Base&#93;(https:​//support.pagerduty.com/docs/insights#incidents-list).&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; A `team_ids` or `service_ids` filter is required for &#91;user-level API keys&#93;(https:​//support.pagerduty.com/docs/using-the-api#section-generating-a-personal-rest-api-key) or keys generated through an OAuth flow. Account-level API keys do not have this requirement.&lt;br /&gt;&lt;!-- theme: info --&gt;&lt;br /&gt;&gt; **Note:** Data availability reflects &#91;pipeline processing cycles&#93;(https:​//support.pagerduty.com/main/docs/insights#:~:text=Data%20Update%20Schedule) and is generally within 24 hours under normal conditions.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `analytics.write`&lt;br /&gt;

```sql
SELECT
id,
escalation_policy_id,
incident_type_id,
priority_id,
resolved_by_user_id,
service_id,
team_id,
escalation_policy_name,
incident_type_name,
priority_name,
resolved_by_user_name,
service_name,
team_name,
acknowledged_user_ids,
acknowledged_user_names,
acknowledgement_count,
active_user_count,
assigned_user_ids,
assigned_user_names,
assignment_count,
auto_resolved,
business_hour_interruptions,
created_at,
description,
engaged_seconds,
engaged_user_count,
escalation_count,
incident_number,
joined_user_ids,
joined_user_names,
major,
manual_escalation_count,
off_hour_interruptions,
priority_order,
reassignment_count,
resolved_at,
seconds_to_engage,
seconds_to_first_ack,
seconds_to_mobilize,
seconds_to_resolve,
sleep_hour_interruptions,
snoozed_seconds,
status,
timeout_escalation_count,
total_interruptions,
total_notifications,
updated_at,
urgency,
user_defined_effort_seconds
FROM pagerduty.analytics.raw_incidents
;
```
</TabItem>
</Tabs>
