--- 
title: incidents
hide_title: false
hide_table_of_contents: false
keywords:
  - incidents
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

Creates, updates, deletes, gets or lists an <code>incidents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>incidents</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incidents.incidents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_incident"
    values={[
        { label: 'get_incident', value: 'get_incident' },
        { label: 'list_incidents', value: 'list_incidents' }
    ]}
>
<TabItem value="get_incident">

The incident requested.

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
    <td><CopyableCode code="acknowledgements" /></td>
    <td><code>array</code></td>
    <td>List of all acknowledgements for this incident. This list will be empty if the `Incident.status` is `resolved` or `triggered`.</td>
</tr>
<tr>
    <td><CopyableCode code="alert_counts" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="assigned_via" /></td>
    <td><code>string</code></td>
    <td>How the current incident assignments were decided.  Note that `direct_assignment` incidents will not escalate up the attached `escalation_policy`</td>
</tr>
<tr>
    <td><CopyableCode code="assignments" /></td>
    <td><code>array</code></td>
    <td>List of all assignments for this incident. This list will be empty if the `Incident.status` is `resolved`.</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="conference_bridge" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the incident was first triggered.</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_policy" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="first_trigger_log_entry" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="incident_key" /></td>
    <td><code>string</code></td>
    <td>The incident's de-duplication key.</td>
</tr>
<tr>
    <td><CopyableCode code="incident_number" /></td>
    <td><code>integer</code></td>
    <td>The number of the incident. This is unique across your account.</td>
</tr>
<tr>
    <td><CopyableCode code="incidents_responders" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="last_status_change_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the status of the incident last changed.</td>
</tr>
<tr>
    <td><CopyableCode code="last_status_change_by" /></td>
    <td><code>object</code></td>
    <td>The agent (user, service or integration) that created or modified the Incident Log Entry.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_actions" /></td>
    <td><code>array</code></td>
    <td>The list of pending_actions on the incident. A pending_action object contains a type of action which can be escalate, unacknowledge, resolve or urgency_change. A pending_action object contains at, the time at which the action will take place. An urgency_change pending_action will contain to, the urgency that the incident will change to.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resolve_reason" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="responder_requests" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="teams" /></td>
    <td><code>array</code></td>
    <td>The teams involved in the incident’s lifecycle.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>A succinct description of the nature, symptoms, cause, or effect of the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
<tr>
    <td><CopyableCode code="urgency" /></td>
    <td><code>string</code></td>
    <td>The current urgency of the incident.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_incidents">

A paginated array of incidents.

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
    <td><CopyableCode code="acknowledgements" /></td>
    <td><code>array</code></td>
    <td>List of all acknowledgements for this incident. This list will be empty if the `Incident.status` is `resolved` or `triggered`.</td>
</tr>
<tr>
    <td><CopyableCode code="alert_counts" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="assigned_via" /></td>
    <td><code>string</code></td>
    <td>How the current incident assignments were decided.  Note that `direct_assignment` incidents will not escalate up the attached `escalation_policy`</td>
</tr>
<tr>
    <td><CopyableCode code="assignments" /></td>
    <td><code>array</code></td>
    <td>List of all assignments for this incident. This list will be empty if the `Incident.status` is `resolved`.</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="conference_bridge" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the incident was first triggered.</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_policy" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="first_trigger_log_entry" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="incident_key" /></td>
    <td><code>string</code></td>
    <td>The incident's de-duplication key.</td>
</tr>
<tr>
    <td><CopyableCode code="incident_number" /></td>
    <td><code>integer</code></td>
    <td>The number of the incident. This is unique across your account.</td>
</tr>
<tr>
    <td><CopyableCode code="incidents_responders" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="last_status_change_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the status of the incident last changed.</td>
</tr>
<tr>
    <td><CopyableCode code="last_status_change_by" /></td>
    <td><code>object</code></td>
    <td>The agent (user, service or integration) that created or modified the Incident Log Entry.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_actions" /></td>
    <td><code>array</code></td>
    <td>The list of pending_actions on the incident. A pending_action object contains a type of action which can be escalate, unacknowledge, resolve or urgency_change. A pending_action object contains at, the time at which the action will take place. An urgency_change pending_action will contain to, the urgency that the incident will change to.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="resolve_reason" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="responder_requests" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="teams" /></td>
    <td><code>array</code></td>
    <td>The teams involved in the incident’s lifecycle.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>A succinct description of the nature, symptoms, cause, or effect of the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
<tr>
    <td><CopyableCode code="urgency" /></td>
    <td><code>string</code></td>
    <td>The current urgency of the incident.</td>
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
    <td><a href="#get_incident"><CopyableCode code="get_incident" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Show detailed information about an incident. Accepts either an incident id, or an incident number.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; The `include[]=field_values` part of this endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /><br />Scoped OAuth requires: `incidents.read`<br /></td>
</tr>
<tr>
    <td><a href="#list_incidents"><CopyableCode code="list_incidents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-date_range"><code>date_range</code></a>, <a href="#parameter-incident_key"><code>incident_key</code></a>, <a href="#parameter-service_ids[]"><code>service_ids[]</code></a>, <a href="#parameter-team_ids[]"><code>team_ids[]</code></a>, <a href="#parameter-user_ids[]"><code>user_ids[]</code></a>, <a href="#parameter-urgencies[]"><code>urgencies[]</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-statuses[]"><code>statuses[]</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a>, <a href="#parameter-include[]"><code>include[]</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a></td>
    <td>List existing incidents.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_incident"><CopyableCode code="create_incident" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-From"><code>From</code></a>, <a href="#parameter-data__incident"><code>data__incident</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create an incident synchronously without a corresponding event from a monitoring service.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.write`<br /></td>
</tr>
<tr>
    <td><a href="#_list_incidents"><CopyableCode code="_list_incidents" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-date_range"><code>date_range</code></a>, <a href="#parameter-incident_key"><code>incident_key</code></a>, <a href="#parameter-service_ids[]"><code>service_ids[]</code></a>, <a href="#parameter-team_ids[]"><code>team_ids[]</code></a>, <a href="#parameter-user_ids[]"><code>user_ids[]</code></a>, <a href="#parameter-urgencies[]"><code>urgencies[]</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-statuses[]"><code>statuses[]</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a>, <a href="#parameter-include[]"><code>include[]</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a></td>
    <td>List existing incidents.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_incidents"><CopyableCode code="update_incidents" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-From"><code>From</code></a>, <a href="#parameter-incidents"><code>incidents</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td>Acknowledge, resolve, escalate or reassign one or more incidents.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />A maximum of 250 incidents may be updated at a time. If more than this number of incidents are given, the API will respond with status 413 (Request Entity Too Large).<br /><br />Note: the manage incidents API endpoint is rate limited to 500 requests per minute.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.write`<br /></td>
</tr>
<tr>
    <td><a href="#_get_incident"><CopyableCode code="_get_incident" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Show detailed information about an incident. Accepts either an incident id, or an incident number.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; The `include[]=field_values` part of this endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /><br />Scoped OAuth requires: `incidents.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_incident"><CopyableCode code="update_incident" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-From"><code>From</code></a>, <a href="#parameter-incident"><code>incident</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Acknowledge, resolve, escalate or reassign an incident.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.write`<br /></td>
</tr>
<tr>
    <td><a href="#merge_incidents"><CopyableCode code="merge_incidents" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-From"><code>From</code></a>, <a href="#parameter-source_incidents"><code>source_incidents</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Merge a list of source incidents into this incident.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.write`<br /></td>
</tr>
<tr>
    <td><a href="#create_incident_responder_request"><CopyableCode code="create_incident_responder_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-From"><code>From</code></a>, <a href="#parameter-requester_id"><code>requester_id</code></a>, <a href="#parameter-message"><code>message</code></a>, <a href="#parameter-responder_request_targets"><code>responder_request_targets</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Send a new responder request for the specified incident.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.write`<br /></td>
</tr>
<tr>
    <td><a href="#create_incident_snooze"><CopyableCode code="create_incident_snooze" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-From"><code>From</code></a>, <a href="#parameter-duration"><code>duration</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Snooze an incident.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.write`<br /></td>
</tr>
<tr>
    <td><a href="#create_incident_status_update"><CopyableCode code="create_incident_status_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-From"><code>From</code></a>, <a href="#parameter-message"><code>message</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create a new status update for the specified incident. Optionally pass `subject` and `html_message` properties in the request body to override the email notification that gets sent.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.write`<br /></td>
</tr>
<tr>
    <td><a href="#remove_incident_notification_subscribers"><CopyableCode code="remove_incident_notification_subscribers" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-subscribers"><code>subscribers</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Unsubscribes the matching Subscribers from Incident Status Update Notifications.<br /><br />Scoped OAuth requires: `subscribers.write`<br /></td>
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
<tr id="parameter-X-EARLY-ACCESS">
    <td><CopyableCode code="X-EARLY-ACCESS" /></td>
    <td><code>string</code></td>
    <td>This header indicates that this API endpoint is __UNDER CONSTRUCTION__ and may change at any time. You __MUST__ pass in this header and the above value. Do not use this endpoint in production, as it may change! </td>
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
<tr id="parameter-date_range">
    <td><CopyableCode code="date_range" /></td>
    <td><code>string</code></td>
    <td>When set to all, the since and until parameters and defaults are ignored.</td>
</tr>
<tr id="parameter-incident_key">
    <td><CopyableCode code="incident_key" /></td>
    <td><code>string</code></td>
    <td>Incident de-duplication key. Incidents with child alerts do not have an incident key; querying by incident key will return incidents whose alerts have alert_key matching the given incident key.</td>
</tr>
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>string</code></td>
    <td>Array of additional details to include.</td>
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
<tr id="parameter-service_ids[]">
    <td><CopyableCode code="service_ids[]" /></td>
    <td><code>array</code></td>
    <td>Returns only the incidents associated with the passed service(s). This expects one or more service IDs.</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string</code></td>
    <td>The start of the date range over which you want to search. Maximum range is 6 months and default is 1 month.</td>
</tr>
<tr id="parameter-sort_by">
    <td><CopyableCode code="sort_by" /></td>
    <td><code>array</code></td>
    <td>Used to specify both the field you wish to sort the results on (incident_number/created_at/resolved_at/urgency), as well as the direction (asc/desc) of the results. The sort_by field and direction should be separated by a colon. A maximum of two fields can be included, separated by a comma. Sort direction defaults to ascending. The account must have the `urgencies` ability to sort by the urgency.</td>
</tr>
<tr id="parameter-statuses[]">
    <td><CopyableCode code="statuses[]" /></td>
    <td><code>string</code></td>
    <td>Return only incidents with the given statuses. To query multiple statuses, pass `statuses[]` more than once, for example: `https://api.pagerduty.com/incidents?statuses[]=triggered&statuses[]=acknowledged`. (More status codes may be introduced in the future.)</td>
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
    <td><code>string</code></td>
    <td>The end of the date range over which you want to search. Maximum range is 6 months and default is 1 month.</td>
</tr>
<tr id="parameter-urgencies[]">
    <td><CopyableCode code="urgencies[]" /></td>
    <td><code>string</code></td>
    <td>Array of the urgencies of the incidents to be returned. Defaults to all urgencies. Account must have the `urgencies` ability to do this.</td>
</tr>
<tr id="parameter-user_ids[]">
    <td><CopyableCode code="user_ids[]" /></td>
    <td><code>array</code></td>
    <td>Returns only the incidents currently assigned to the passed user(s). This expects one or more user IDs. Note: When using the assigned_to_user filter, you will only receive incidents with statuses of triggered or acknowledged. This is because resolved incidents are not assigned to any user.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_incident"
    values={[
        { label: 'get_incident', value: 'get_incident' },
        { label: 'list_incidents', value: 'list_incidents' }
    ]}
>
<TabItem value="get_incident">

Show detailed information about an incident. Accepts either an incident id, or an incident number.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; The `include[]=field_values` part of this endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /><br />Scoped OAuth requires: `incidents.read`<br />

```sql
SELECT
id,
acknowledgements,
alert_counts,
assigned_via,
assignments,
body,
conference_bridge,
created_at,
escalation_policy,
first_trigger_log_entry,
html_url,
incident_key,
incident_number,
incidents_responders,
last_status_change_at,
last_status_change_by,
pending_actions,
priority,
resolve_reason,
responder_requests,
self,
service,
status,
summary,
teams,
title,
type,
urgency
FROM pagerduty.incidents.incidents
WHERE id = '{{ id }}' -- required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list_incidents">

List existing incidents.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.read`<br />

```sql
SELECT
id,
acknowledgements,
alert_counts,
assigned_via,
assignments,
body,
conference_bridge,
created_at,
escalation_policy,
first_trigger_log_entry,
html_url,
incident_key,
incident_number,
incidents_responders,
last_status_change_at,
last_status_change_by,
pending_actions,
priority,
resolve_reason,
responder_requests,
self,
service,
status,
summary,
teams,
title,
type,
urgency
FROM pagerduty.incidents.incidents
WHERE Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND date_range = '{{ date_range }}'
AND incident_key = '{{ incident_key }}'
AND service_ids[] = '{{ service_ids[] }}'
AND team_ids[] = '{{ team_ids[] }}'
AND user_ids[] = '{{ user_ids[] }}'
AND urgencies[] = '{{ urgencies[] }}'
AND time_zone = '{{ time_zone }}'
AND statuses[] = '{{ statuses[] }}'
AND sort_by = '{{ sort_by }}'
AND include[] = '{{ include[] }}'
AND since = '{{ since }}'
AND until = '{{ until }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_incident"
    values={[
        { label: 'create_incident', value: 'create_incident' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_incident">

Create an incident synchronously without a corresponding event from a monitoring service.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.write`<br />

```sql
INSERT INTO pagerduty.incidents.incidents (
data__incident,
From,
Accept,
Content-Type
)
SELECT 
'{{ incident }}' /* required */,
'{{ From }}',
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
incident
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: incidents
  props:
    - name: From
      value: string (email)
      description: Required parameter for the incidents resource.
    - name: incident
      value: object
      description: |
        Details of the incident to be created.
    - name: Accept
      value: string
      description: The `Accept` header is used as a versioning header.
    - name: Content-Type
      value: string
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_incidents"
    values={[
        { label: '_list_incidents', value: '_list_incidents' },
        { label: 'update_incidents', value: 'update_incidents' },
        { label: '_get_incident', value: '_get_incident' },
        { label: 'update_incident', value: 'update_incident' },
        { label: 'merge_incidents', value: 'merge_incidents' },
        { label: 'create_incident_responder_request', value: 'create_incident_responder_request' },
        { label: 'create_incident_snooze', value: 'create_incident_snooze' },
        { label: 'create_incident_status_update', value: 'create_incident_status_update' },
        { label: 'remove_incident_notification_subscribers', value: 'remove_incident_notification_subscribers' }
    ]}
>
<TabItem value="_list_incidents">

List existing incidents.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.read`<br />

```sql
EXEC pagerduty.incidents.incidents._list_incidents 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}, 
@date_range='{{ date_range }}', 
@incident_key='{{ incident_key }}', 
@service_ids[]='{{ service_ids[] }}', 
@team_ids[]='{{ team_ids[] }}', 
@user_ids[]='{{ user_ids[] }}', 
@urgencies[]='{{ urgencies[] }}', 
@time_zone='{{ time_zone }}', 
@statuses[]='{{ statuses[] }}', 
@sort_by='{{ sort_by }}', 
@include[]='{{ include[] }}', 
@since='{{ since }}', 
@until='{{ until }}'
;
```
</TabItem>
<TabItem value="update_incidents">

Acknowledge, resolve, escalate or reassign one or more incidents.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />A maximum of 250 incidents may be updated at a time. If more than this number of incidents are given, the API will respond with status 413 (Request Entity Too Large).<br /><br />Note: the manage incidents API endpoint is rate limited to 500 requests per minute.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.write`<br />

```sql
EXEC pagerduty.incidents.incidents.update_incidents 
@From='{{ From }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }} 
@@json=
'{
"incidents": "{{ incidents }}"
}'
;
```
</TabItem>
<TabItem value="_get_incident">

Show detailed information about an incident. Accepts either an incident id, or an incident number.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; ### Early Access<br />&gt; The `include[]=field_values` part of this endpoint is in Early Access and may change at any time. You must pass in the X-EARLY-ACCESS header to access it.<br /><br />Scoped OAuth requires: `incidents.read`<br />

```sql
EXEC pagerduty.incidents.incidents._get_incident 
@id='{{ id }}' --required, 
@X-EARLY-ACCESS='{{ X-EARLY-ACCESS }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="update_incident">

Acknowledge, resolve, escalate or reassign an incident.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.write`<br />

```sql
EXEC pagerduty.incidents.incidents.update_incident 
@id='{{ id }}' --required, 
@From='{{ From }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"incident": "{{ incident }}"
}'
;
```
</TabItem>
<TabItem value="merge_incidents">

Merge a list of source incidents into this incident.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.write`<br />

```sql
EXEC pagerduty.incidents.incidents.merge_incidents 
@id='{{ id }}' --required, 
@From='{{ From }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"source_incidents": "{{ source_incidents }}"
}'
;
```
</TabItem>
<TabItem value="create_incident_responder_request">

Send a new responder request for the specified incident.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.write`<br />

```sql
EXEC pagerduty.incidents.incidents.create_incident_responder_request 
@id='{{ id }}' --required, 
@From='{{ From }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"requester_id": "{{ requester_id }}", 
"message": "{{ message }}", 
"responder_request_targets": "{{ responder_request_targets }}"
}'
;
```
</TabItem>
<TabItem value="create_incident_snooze">

Snooze an incident.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.write`<br />

```sql
EXEC pagerduty.incidents.incidents.create_incident_snooze 
@id='{{ id }}' --required, 
@From='{{ From }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"duration": {{ duration }}
}'
;
```
</TabItem>
<TabItem value="create_incident_status_update">

Create a new status update for the specified incident. Optionally pass `subject` and `html_message` properties in the request body to override the email notification that gets sent.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.write`<br />

```sql
EXEC pagerduty.incidents.incidents.create_incident_status_update 
@id='{{ id }}' --required, 
@From='{{ From }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"message": "{{ message }}", 
"subject": "{{ subject }}", 
"html_message": "{{ html_message }}"
}'
;
```
</TabItem>
<TabItem value="remove_incident_notification_subscribers">

Unsubscribes the matching Subscribers from Incident Status Update Notifications.<br /><br />Scoped OAuth requires: `subscribers.write`<br />

```sql
EXEC pagerduty.incidents.incidents.remove_incident_notification_subscribers 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}' 
@@json=
'{
"subscribers": "{{ subscribers }}"
}'
;
```
</TabItem>
</Tabs>
