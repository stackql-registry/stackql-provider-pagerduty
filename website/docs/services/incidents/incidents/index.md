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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>incidents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incidents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incidents.incidents" /></td></tr>
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
    <td>List of all acknowledgements for this incident. This list will be empty if the `Incident.status` is `resolved` or `triggered`. If the `include&#91;&#93;=acknowledgers` query parameter is provided, the full user or service definitions will be returned for each acknowledgement entry.</td>
</tr>
<tr>
    <td><CopyableCode code="alert_counts" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="alert_grouping" /></td>
    <td><code>object</code></td>
    <td>Describes the alert grouping state of this incident. Will be null if the incident has no alerts.</td>
</tr>
<tr>
    <td><CopyableCode code="assigned_via" /></td>
    <td><code>string</code></td>
    <td>How the current incident assignments were decided.  Note that `direct_assignment` incidents will not escalate up the attached `escalation_policy` (escalation_policy, direct_assignment)</td>
</tr>
<tr>
    <td><CopyableCode code="assignments" /></td>
    <td><code>array</code></td>
    <td>List of all assignments for this incident. This list will be empty if the `Incident.status` is `resolved`. Returns a user reference for each assignment. Full user definitions will be returned if the `include&#91;&#93;=assignees` query parameter is provided.</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>object</code></td>
    <td>The additional incident body details. Only returned if the `include&#91;&#93;=body` query parameter is provided.</td>
</tr>
<tr>
    <td><CopyableCode code="conference_bridge" /></td>
    <td><code>object</code></td>
    <td>The conference bridge information attached to the incident. Only returned if the `include&#91;&#93;=conference_bridge` query parameter is provided.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the incident was first triggered. (example: 2019-12-01T20:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_policy" /></td>
    <td><code></code></td>
    <td>The escalation policy attached to the service that the incident is on. If the `include&#91;&#93;=escalation_policies` query parameter is provided, the full escalation policy definition will be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="first_trigger_log_entry" /></td>
    <td><code></code></td>
    <td>The first log entry on the incident. The log entry will be of type `TriggerLogEntry` and will represent information about how the incident was triggered. If the `include&#91;&#93;=first_trigger_log_entries` query parameter is provided, the full log entry definition will be returned.</td>
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
    <td><CopyableCode code="incident_type" /></td>
    <td><code>object</code></td>
    <td>The incident type of the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="incidents_responders" /></td>
    <td><code>array</code></td>
    <td>The responders on the incident. Only returned if the account has access to the &#91;responder requests&#93;(https:​//support.pagerduty.com/docs/add-responders) feature.</td>
</tr>
<tr>
    <td><CopyableCode code="is_mergeable" /></td>
    <td><code>boolean</code></td>
    <td>Whether the incident is mergeable. Only incidents that have alerts, or that are manually created can be merged.</td>
</tr>
<tr>
    <td><CopyableCode code="last_status_change_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the status of the incident last changed. If the incident is not currently acknowledged or resolved, this will be the incident's `updated_at`. (example: 2019-12-01T21:01:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="last_status_change_by" /></td>
    <td><code></code></td>
    <td>The entity that last changed the status of the incident. If the `include&#91;&#93;=agents` query parameter is provided, the full user/service/integration definition will be returned.</td>
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
    <td><CopyableCode code="resolved_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the incident became "resolved" or `null` if the incident is not resolved. (example: 2019-12-01T21:01:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="responder_requests" /></td>
    <td><code>array</code></td>
    <td>Previous responder requests made on this incident. Only returned if the account has access to the &#91;responder requests&#93;(https:​//support.pagerduty.com/docs/add-responders) feature.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code></code></td>
    <td>The service the incident is on. If the `include&#91;&#93;=services` query parameter is provided, the full service definition will be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the incident. (triggered, acknowledged, resolved)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="teams" /></td>
    <td><code>array</code></td>
    <td>The teams involved in the incident’s lifecycle. If the `include&#91;&#93;=teams` query parameter is provided, the full team definitions will be returned.</td>
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
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the incident was last modified. (example: 2019-12-01T21:02:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="urgency" /></td>
    <td><code>string</code></td>
    <td>The current urgency of the incident. (high, low)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td>List of all acknowledgements for this incident. This list will be empty if the `Incident.status` is `resolved` or `triggered`. If the `include&#91;&#93;=acknowledgers` query parameter is provided, the full user or service definitions will be returned for each acknowledgement entry.</td>
</tr>
<tr>
    <td><CopyableCode code="alert_counts" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="alert_grouping" /></td>
    <td><code>object</code></td>
    <td>Describes the alert grouping state of this incident. Will be null if the incident has no alerts.</td>
</tr>
<tr>
    <td><CopyableCode code="assigned_via" /></td>
    <td><code>string</code></td>
    <td>How the current incident assignments were decided.  Note that `direct_assignment` incidents will not escalate up the attached `escalation_policy` (escalation_policy, direct_assignment)</td>
</tr>
<tr>
    <td><CopyableCode code="assignments" /></td>
    <td><code>array</code></td>
    <td>List of all assignments for this incident. This list will be empty if the `Incident.status` is `resolved`. Returns a user reference for each assignment. Full user definitions will be returned if the `include&#91;&#93;=assignees` query parameter is provided.</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>object</code></td>
    <td>The additional incident body details. Only returned if the `include&#91;&#93;=body` query parameter is provided.</td>
</tr>
<tr>
    <td><CopyableCode code="conference_bridge" /></td>
    <td><code>object</code></td>
    <td>The conference bridge information attached to the incident. Only returned if the `include&#91;&#93;=conference_bridge` query parameter is provided.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the incident was first triggered. (example: 2019-12-01T20:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_policy" /></td>
    <td><code></code></td>
    <td>The escalation policy attached to the service that the incident is on. If the `include&#91;&#93;=escalation_policies` query parameter is provided, the full escalation policy definition will be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="first_trigger_log_entry" /></td>
    <td><code></code></td>
    <td>The first log entry on the incident. The log entry will be of type `TriggerLogEntry` and will represent information about how the incident was triggered. If the `include&#91;&#93;=first_trigger_log_entries` query parameter is provided, the full log entry definition will be returned.</td>
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
    <td><CopyableCode code="incident_type" /></td>
    <td><code>object</code></td>
    <td>The incident type of the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="incidents_responders" /></td>
    <td><code>array</code></td>
    <td>The responders on the incident. Only returned if the account has access to the &#91;responder requests&#93;(https:​//support.pagerduty.com/docs/add-responders) feature.</td>
</tr>
<tr>
    <td><CopyableCode code="is_mergeable" /></td>
    <td><code>boolean</code></td>
    <td>Whether the incident is mergeable. Only incidents that have alerts, or that are manually created can be merged.</td>
</tr>
<tr>
    <td><CopyableCode code="last_status_change_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the status of the incident last changed. If the incident is not currently acknowledged or resolved, this will be the incident's `updated_at`. (example: 2019-12-01T21:01:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="last_status_change_by" /></td>
    <td><code></code></td>
    <td>The entity that last changed the status of the incident. If the `include&#91;&#93;=agents` query parameter is provided, the full user/service/integration definition will be returned.</td>
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
    <td><CopyableCode code="resolved_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the incident became "resolved" or `null` if the incident is not resolved. (example: 2019-12-01T21:01:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="responder_requests" /></td>
    <td><code>array</code></td>
    <td>Previous responder requests made on this incident. Only returned if the account has access to the &#91;responder requests&#93;(https:​//support.pagerduty.com/docs/add-responders) feature.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code></code></td>
    <td>The service the incident is on. If the `include&#91;&#93;=services` query parameter is provided, the full service definition will be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the incident. (triggered, acknowledged, resolved)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="teams" /></td>
    <td><code>array</code></td>
    <td>The teams involved in the incident’s lifecycle. If the `include&#91;&#93;=teams` query parameter is provided, the full team definitions will be returned.</td>
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
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the incident was last modified. (example: 2019-12-01T21:02:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="urgency" /></td>
    <td><code>string</code></td>
    <td>The current urgency of the incident. (high, low)</td>
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
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Show detailed information about an incident. Accepts either an incident id, or an incident number.&lt;br /&gt;&lt;br /&gt;An incident represents a problem or an issue that needs to be addressed and resolved.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-date_range"><code>date_range</code></a>, <a href="#parameter-incident_key"><code>incident_key</code></a>, <a href="#parameter-service_ids[]"><code>service_ids[]</code></a>, <a href="#parameter-team_ids[]"><code>team_ids[]</code></a>, <a href="#parameter-user_ids[]"><code>user_ids[]</code></a>, <a href="#parameter-urgencies[]"><code>urgencies[]</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-statuses[]"><code>statuses[]</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a>, <a href="#parameter-include[]"><code>include[]</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a></td>
    <td>List existing incidents.&lt;br /&gt;&lt;br /&gt;An incident represents a problem or an issue that needs to be addressed and resolved.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-incident"><code>incident</code></a></td>
    <td><a href="#parameter-From"><code>From</code></a></td>
    <td>Create an incident synchronously without a corresponding event from a monitoring service.&lt;br /&gt;&lt;br /&gt;An incident represents a problem or an issue that needs to be addressed and resolved.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.write`&lt;br /&gt;&lt;br /&gt;This API operation has operation specific rate limits. See the &#91;Rate Limits&#93;(https:​//developer.pagerduty.com/docs/72d3b724589e3-rest-api-rate-limits) page for more information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-incident"><code>incident</code></a></td>
    <td><a href="#parameter-From"><code>From</code></a></td>
    <td>Acknowledge, resolve, escalate or reassign an incident.&lt;br /&gt;&lt;br /&gt;An incident represents a problem or an issue that needs to be addressed and resolved.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update_bulk"><CopyableCode code="update_bulk" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-incidents"><code>incidents</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-From"><code>From</code></a></td>
    <td>Acknowledge, resolve, escalate or reassign one or more incidents.&lt;br /&gt;&lt;br /&gt;An incident represents a problem or an issue that needs to be addressed and resolved.&lt;br /&gt;&lt;br /&gt;A maximum of 250 incidents may be updated at a time. If more than this number of incidents are given, the API will respond with status 413 (Request Entity Too Large).&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.write`&lt;br /&gt;&lt;br /&gt;This API operation has operation specific rate limits. See the &#91;Rate Limits&#93;(https:​//developer.pagerduty.com/docs/72d3b724589e3-rest-api-rate-limits) page for more information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#merge"><CopyableCode code="merge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-source_incidents"><code>source_incidents</code></a></td>
    <td><a href="#parameter-From"><code>From</code></a></td>
    <td>Merge a list of source incidents into the target &#91;incident&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents).&lt;br /&gt;&lt;br /&gt;After the merge is performed the target incident will contain the source incidents' &#91;alerts&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#alerts),&lt;br /&gt;and the source incidents will be resolved.&lt;br /&gt;&lt;br /&gt;Only incidents that have alerts or incidents that were created manually in the UI can be merged.&lt;br /&gt;&lt;br /&gt;Open incidents cannot be merged into a resolved incident. The target incident must be open.&lt;br /&gt;&lt;br /&gt;An incident cannot have more than 1000 alerts. The server will return an error if merging the source incidents&lt;br /&gt;will result in the target incident having more than 1000 alerts.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#snooze"><CopyableCode code="snooze" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-From"><code>From</code></a></td>
    <td>Snooze an incident.&lt;br /&gt;&lt;br /&gt;An incident represents a problem or an issue that needs to be addressed and resolved.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.write`&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;StackQL: call this method with the raw JSON body, for example `EXEC incidents.incidents.snooze @id = '...' @@json='&#123;"duration": &lt;integer&gt;&#125;'` - the duration attribute is integer-typed, which the EXEC parameter form does not accept.</td>
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
    <td>Return only incidents with the given statuses. To query multiple statuses, pass `statuses&#91;&#93;` more than once, for example: `https:​//api.pagerduty.com/incidents?statuses&#91;&#93;=triggered&statuses&#91;&#93;=acknowledged`. (More status codes may be introduced in the future.)</td>
</tr>
<tr id="parameter-team_ids[]">
    <td><CopyableCode code="team_ids[]" /></td>
    <td><code>array</code></td>
    <td>An array of team IDs. Only results related to these teams will be returned. Account must have the `teams` ability to use this parameter.</td>
</tr>
<tr id="parameter-time_zone">
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string (tzinfo)</code></td>
    <td>Time zone used to render timestamps and to interpret `since/until` values before filtering. Rendering defaults to UTC if omitted. `since/until` default to the account's time zone if omitted.</td>
</tr>
<tr id="parameter-total">
    <td><CopyableCode code="total" /></td>
    <td><code>boolean</code></td>
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our &#91;Pagination Docs&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Show detailed information about an incident. Accepts either an incident id, or an incident number.&lt;br /&gt;&lt;br /&gt;An incident represents a problem or an issue that needs to be addressed and resolved.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.read`&lt;br /&gt;

```sql
SELECT
id,
acknowledgements,
alert_counts,
alert_grouping,
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
incident_type,
incidents_responders,
is_mergeable,
last_status_change_at,
last_status_change_by,
pending_actions,
priority,
resolve_reason,
resolved_at,
responder_requests,
self,
service,
status,
summary,
teams,
title,
type,
updated_at,
urgency
FROM pagerduty.incidents.incidents
WHERE id = '{{ id }}' -- required
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list">

List existing incidents.&lt;br /&gt;&lt;br /&gt;An incident represents a problem or an issue that needs to be addressed and resolved.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.read`&lt;br /&gt;

```sql
SELECT
id,
acknowledgements,
alert_counts,
alert_grouping,
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
incident_type,
incidents_responders,
is_mergeable,
last_status_change_at,
last_status_change_by,
pending_actions,
priority,
resolve_reason,
resolved_at,
responder_requests,
self,
service,
status,
summary,
teams,
title,
type,
updated_at,
urgency
FROM pagerduty.incidents.incidents
WHERE limit = '{{ limit }}'
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
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Create an incident synchronously without a corresponding event from a monitoring service.&lt;br /&gt;&lt;br /&gt;An incident represents a problem or an issue that needs to be addressed and resolved.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.write`&lt;br /&gt;&lt;br /&gt;This API operation has operation specific rate limits. See the &#91;Rate Limits&#93;(https:​//developer.pagerduty.com/docs/72d3b724589e3-rest-api-rate-limits) page for more information.&lt;br /&gt;

```sql
INSERT INTO pagerduty.incidents.incidents (
incident,
"From"
)
SELECT 
'{{ incident }}' /* required */,
'{{ From }}'
RETURNING
incident
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: incidents
  props:
    - name: incident
      description: |
        Details of the incident to be created.
      value:
        type: "{{ type }}"
        title: "{{ title }}"
        service:
          id: "{{ id }}"
          summary: "{{ summary }}"
          type: "{{ type }}"
          self: "{{ self }}"
          html_url: "{{ html_url }}"
        priority:
          id: "{{ id }}"
          summary: "{{ summary }}"
          type: "{{ type }}"
          self: "{{ self }}"
          html_url: "{{ html_url }}"
        urgency: "{{ urgency }}"
        body:
          details: "{{ details }}"
        incident_key: "{{ incident_key }}"
        assignments:
          - assignee:
              id: "{{ id }}"
              summary: "{{ summary }}"
              type: "{{ type }}"
              self: "{{ self }}"
              html_url: "{{ html_url }}"
        incident_type:
          id: "{{ id }}"
          name: "{{ name }}"
        escalation_policy:
          id: "{{ id }}"
          summary: "{{ summary }}"
          type: "{{ type }}"
          self: "{{ self }}"
          html_url: "{{ html_url }}"
        conference_bridge:
          conference_number: "{{ conference_number }}"
          conference_url: "{{ conference_url }}"
    - name: From
      value: "{{ From }}"
      description: The email address of a valid user associated with the account making the request.
      description: The email address of a valid user associated with the account making the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Acknowledge, resolve, escalate or reassign an incident.&lt;br /&gt;&lt;br /&gt;An incident represents a problem or an issue that needs to be addressed and resolved.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.write`&lt;br /&gt;

```sql
UPDATE pagerduty.incidents.incidents
SET 
incident = '{{ incident }}'
WHERE 
id = '{{ id }}' --required
AND incident = '{{ incident }}' --required
AND From = '{{ From}}'
RETURNING
incident;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_bulk"
    values={[
        { label: 'update_bulk', value: 'update_bulk' },
        { label: 'merge', value: 'merge' },
        { label: 'snooze', value: 'snooze' }
    ]}
>
<TabItem value="update_bulk">

Acknowledge, resolve, escalate or reassign one or more incidents.&lt;br /&gt;&lt;br /&gt;An incident represents a problem or an issue that needs to be addressed and resolved.&lt;br /&gt;&lt;br /&gt;A maximum of 250 incidents may be updated at a time. If more than this number of incidents are given, the API will respond with status 413 (Request Entity Too Large).&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.write`&lt;br /&gt;&lt;br /&gt;This API operation has operation specific rate limits. See the &#91;Rate Limits&#93;(https:​//developer.pagerduty.com/docs/72d3b724589e3-rest-api-rate-limits) page for more information.&lt;br /&gt;

```sql
EXEC pagerduty.incidents.incidents.update_bulk 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}, 
@From='{{ From }}' 
@@json=
'{
"incidents": "{{ incidents }}"
}'
;
```
</TabItem>
<TabItem value="merge">

Merge a list of source incidents into the target &#91;incident&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents).&lt;br /&gt;&lt;br /&gt;After the merge is performed the target incident will contain the source incidents' &#91;alerts&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#alerts),&lt;br /&gt;and the source incidents will be resolved.&lt;br /&gt;&lt;br /&gt;Only incidents that have alerts or incidents that were created manually in the UI can be merged.&lt;br /&gt;&lt;br /&gt;Open incidents cannot be merged into a resolved incident. The target incident must be open.&lt;br /&gt;&lt;br /&gt;An incident cannot have more than 1000 alerts. The server will return an error if merging the source incidents&lt;br /&gt;will result in the target incident having more than 1000 alerts.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.write`&lt;br /&gt;

```sql
EXEC pagerduty.incidents.incidents.merge 
@id='{{ id }}' --required, 
@From='{{ From }}' 
@@json=
'{
"source_incidents": "{{ source_incidents }}"
}'
;
```
</TabItem>
<TabItem value="snooze">

Snooze an incident.&lt;br /&gt;&lt;br /&gt;An incident represents a problem or an issue that needs to be addressed and resolved.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.write`&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;StackQL: call this method with the raw JSON body, for example `EXEC incidents.incidents.snooze @id = '...' @@json='&#123;"duration": &lt;integer&gt;&#125;'` - the duration attribute is integer-typed, which the EXEC parameter form does not accept.

```sql
EXEC pagerduty.incidents.incidents.snooze 
@id='{{ id }}' --required, 
@From='{{ From }}' 
@@json=
'{
"duration": {{ duration }}
}'
;
```
</TabItem>
</Tabs>
