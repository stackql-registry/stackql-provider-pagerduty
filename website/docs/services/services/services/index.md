--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - services
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>services</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.services.services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service"
    values={[
        { label: 'get_service', value: 'get_service' },
        { label: 'list_services', value: 'list_services' }
    ]}
>
<TabItem value="get_service">

The service requested.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="acknowledgement_timeout" /></td>
    <td><code>integer</code></td>
    <td>Time in seconds that an incident changes to the Triggered State after being Acknowledged. Value is `null` if the feature is disabled. Value must not be negative. Setting this field to `0`, `null` (or unset in POST request) will disable the feature.</td>
</tr>
<tr>
    <td><CopyableCode code="addons" /></td>
    <td><code>array</code></td>
    <td>The array of Add-ons associated with this service.</td>
</tr>
<tr>
    <td><CopyableCode code="alert_creation" /></td>
    <td><code>string</code></td>
    <td>Whether a service creates only incidents, or both alerts and incidents. A service must create alerts in order to enable incident merging. * "create_incidents" - The service will create one incident and zero alerts for each incoming event. * "create_alerts_and_incidents" - The service will create one incident and one associated alert for each incoming event. </td>
</tr>
<tr>
    <td><CopyableCode code="alert_grouping" /></td>
    <td><code>string</code></td>
    <td>Defines how alerts on this service will be automatically grouped into incidents. Note that the alert grouping features are available only on certain plans. There are three available options: * null - No alert grouping on the service. Each alert will create a separate incident; * "time" - All alerts within a specified duration will be grouped into the same incident. This duration is set in the `alert_grouping_timeout` setting (described below). Available on Standard, Enterprise, and Event Intelligence plans; * "intelligent" - Alerts will be intelligently grouped based on a machine learning model that looks at the alert summary, timing, and the history of grouped alerts. Available on Enterprise and Event Intelligence plans </td>
</tr>
<tr>
    <td><CopyableCode code="alert_grouping_parameters" /></td>
    <td><code>object</code></td>
    <td>Defines how alerts on this service will be automatically grouped into incidents. Note that the alert grouping features are available only on certain plans. To turn grouping off set the type to null. </td>
</tr>
<tr>
    <td><CopyableCode code="alert_grouping_timeout" /></td>
    <td><code>integer</code></td>
    <td>The duration in minutes within which to automatically group incoming alerts. This setting applies only when `alert_grouping` is set to `time`. To continue grouping alerts until the Incident is resolved, set this value to `0`. </td>
</tr>
<tr>
    <td><CopyableCode code="auto_pause_notifications_parameters" /></td>
    <td><code>object</code></td>
    <td>Defines how alerts on this service are automatically suspended for a period of time before triggering, when identified as likely being transient. Note that automatically pausing notifications is only available on certain plans. (title: AutoPauseNotificationsParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_resolve_timeout" /></td>
    <td><code>integer</code></td>
    <td>Time in seconds that an incident is automatically resolved if left open for that long. Value is `null` if the feature is disabled. Value must not be negative. Setting this field to `0`, `null` (or unset in POST request) will disable the feature.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time when this service was created</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The user-provided description of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_policy" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="incident_urgency_rule" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="integrations" /></td>
    <td><code>array</code></td>
    <td>An array containing Integration objects that belong to this service. If `integrations` is passed as an argument, these are full objects - otherwise, these are references.</td>
</tr>
<tr>
    <td><CopyableCode code="last_incident_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time when the most recent incident was created for this service.</td>
</tr>
<tr>
    <td><CopyableCode code="response_play" /></td>
    <td><code>object</code></td>
    <td>Response plays associated with this service.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_actions" /></td>
    <td><code>array</code></td>
    <td>An array containing scheduled actions for the service.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current state of the Service. Valid statuses are:   - `active`: The service is enabled and has no open incidents. This is the only status a service can be created with. - `warning`: The service is enabled and has one or more acknowledged incidents. - `critical`: The service is enabled and has one or more triggered incidents. - `maintenance`: The service is under maintenance, no new incidents will be triggered during maintenance mode. - `disabled`: The service is disabled and will not have any new triggered incidents.  (default: active)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="support_hours" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="teams" /></td>
    <td><code>array</code></td>
    <td>The set of teams associated with this service.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of object being created. (default: service)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_services">

A paginated array of services.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="acknowledgement_timeout" /></td>
    <td><code>integer</code></td>
    <td>Time in seconds that an incident changes to the Triggered State after being Acknowledged. Value is `null` if the feature is disabled. Value must not be negative. Setting this field to `0`, `null` (or unset in POST request) will disable the feature.</td>
</tr>
<tr>
    <td><CopyableCode code="addons" /></td>
    <td><code>array</code></td>
    <td>The array of Add-ons associated with this service.</td>
</tr>
<tr>
    <td><CopyableCode code="alert_creation" /></td>
    <td><code>string</code></td>
    <td>Whether a service creates only incidents, or both alerts and incidents. A service must create alerts in order to enable incident merging. * "create_incidents" - The service will create one incident and zero alerts for each incoming event. * "create_alerts_and_incidents" - The service will create one incident and one associated alert for each incoming event. </td>
</tr>
<tr>
    <td><CopyableCode code="alert_grouping" /></td>
    <td><code>string</code></td>
    <td>Defines how alerts on this service will be automatically grouped into incidents. Note that the alert grouping features are available only on certain plans. There are three available options: * null - No alert grouping on the service. Each alert will create a separate incident; * "time" - All alerts within a specified duration will be grouped into the same incident. This duration is set in the `alert_grouping_timeout` setting (described below). Available on Standard, Enterprise, and Event Intelligence plans; * "intelligent" - Alerts will be intelligently grouped based on a machine learning model that looks at the alert summary, timing, and the history of grouped alerts. Available on Enterprise and Event Intelligence plans </td>
</tr>
<tr>
    <td><CopyableCode code="alert_grouping_parameters" /></td>
    <td><code>object</code></td>
    <td>Defines how alerts on this service will be automatically grouped into incidents. Note that the alert grouping features are available only on certain plans. To turn grouping off set the type to null. </td>
</tr>
<tr>
    <td><CopyableCode code="alert_grouping_timeout" /></td>
    <td><code>integer</code></td>
    <td>The duration in minutes within which to automatically group incoming alerts. This setting applies only when `alert_grouping` is set to `time`. To continue grouping alerts until the Incident is resolved, set this value to `0`. </td>
</tr>
<tr>
    <td><CopyableCode code="auto_pause_notifications_parameters" /></td>
    <td><code>object</code></td>
    <td>Defines how alerts on this service are automatically suspended for a period of time before triggering, when identified as likely being transient. Note that automatically pausing notifications is only available on certain plans. (title: AutoPauseNotificationsParameters)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_resolve_timeout" /></td>
    <td><code>integer</code></td>
    <td>Time in seconds that an incident is automatically resolved if left open for that long. Value is `null` if the feature is disabled. Value must not be negative. Setting this field to `0`, `null` (or unset in POST request) will disable the feature.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time when this service was created</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The user-provided description of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="escalation_policy" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (url)</code></td>
    <td>a URL at which the entity is uniquely displayed in the Web app</td>
</tr>
<tr>
    <td><CopyableCode code="incident_urgency_rule" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="integrations" /></td>
    <td><code>array</code></td>
    <td>An array containing Integration objects that belong to this service. If `integrations` is passed as an argument, these are full objects - otherwise, these are references.</td>
</tr>
<tr>
    <td><CopyableCode code="last_incident_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time when the most recent incident was created for this service.</td>
</tr>
<tr>
    <td><CopyableCode code="response_play" /></td>
    <td><code>object</code></td>
    <td>Response plays associated with this service.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_actions" /></td>
    <td><code>array</code></td>
    <td>An array containing scheduled actions for the service.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current state of the Service. Valid statuses are:   - `active`: The service is enabled and has no open incidents. This is the only status a service can be created with. - `warning`: The service is enabled and has one or more acknowledged incidents. - `critical`: The service is enabled and has one or more triggered incidents. - `maintenance`: The service is under maintenance, no new incidents will be triggered during maintenance mode. - `disabled`: The service is disabled and will not have any new triggered incidents.  (default: active)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="support_hours" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="teams" /></td>
    <td><code>array</code></td>
    <td>The set of teams associated with this service.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of object being created. (default: service)</td>
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
    <td><a href="#get_service"><CopyableCode code="get_service" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details about an existing service.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.read`<br /></td>
</tr>
<tr>
    <td><a href="#list_services"><CopyableCode code="list_services" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-team_ids[]"><code>team_ids[]</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List existing Services.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_service"><CopyableCode code="create_service" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__service"><code>data__service</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create a new service.<br /><br />If `status` is included in the request, it must have a value of `active` when creating a new service. If a different status is required, make a second request to update the service.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />There is a limit of 25,000 services per account. If the limit is reached, the API will respond with an error. There is also a limit of 100,000 open Incidents per Service. If the limit is reached and `auto_resolve_timeout` is disabled (set to 0 or null), the `auto_resolve_timeout` property will automatically be set to  84600 (1 day).<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_service"><CopyableCode code="delete_service" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Delete an existing service.<br /><br />Once the service is deleted, it will not be accessible from the web UI and new incidents won't be able to be created for this service.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.write`<br /></td>
</tr>
<tr>
    <td><a href="#_list_services"><CopyableCode code="_list_services" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-team_ids[]"><code>team_ids[]</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List existing Services.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_service"><CopyableCode code="_get_service" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details about an existing service.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_service"><CopyableCode code="update_service" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Update an existing service.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />There is a limit of 100,000 open Incidents per Service. If the limit is reached and you disable `auto_resolve_timeout` (set to 0 or null), the API will respond with an error.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.write`<br /></td>
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
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>Filters the result, showing only the records whose name matches the query.</td>
</tr>
<tr id="parameter-sort_by">
    <td><CopyableCode code="sort_by" /></td>
    <td><code>string</code></td>
    <td>Used to specify the field you wish to sort the results on.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_service"
    values={[
        { label: 'get_service', value: 'get_service' },
        { label: 'list_services', value: 'list_services' }
    ]}
>
<TabItem value="get_service">

Get details about an existing service.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.read`<br />

```sql
SELECT
id,
name,
acknowledgement_timeout,
addons,
alert_creation,
alert_grouping,
alert_grouping_parameters,
alert_grouping_timeout,
auto_pause_notifications_parameters,
auto_resolve_timeout,
created_at,
description,
escalation_policy,
html_url,
incident_urgency_rule,
integrations,
last_incident_timestamp,
response_play,
scheduled_actions,
self,
status,
summary,
support_hours,
teams,
type
FROM pagerduty.services.services
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list_services">

List existing Services.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.read`<br />

```sql
SELECT
id,
name,
acknowledgement_timeout,
addons,
alert_creation,
alert_grouping,
alert_grouping_parameters,
alert_grouping_timeout,
auto_pause_notifications_parameters,
auto_resolve_timeout,
created_at,
description,
escalation_policy,
html_url,
incident_urgency_rule,
integrations,
last_incident_timestamp,
response_play,
scheduled_actions,
self,
status,
summary,
support_hours,
teams,
type
FROM pagerduty.services.services
WHERE Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND query = '{{ query }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND team_ids[] = '{{ team_ids[] }}'
AND time_zone = '{{ time_zone }}'
AND sort_by = '{{ sort_by }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service"
    values={[
        { label: 'create_service', value: 'create_service' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service">

Create a new service.<br /><br />If `status` is included in the request, it must have a value of `active` when creating a new service. If a different status is required, make a second request to update the service.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />There is a limit of 25,000 services per account. If the limit is reached, the API will respond with an error. There is also a limit of 100,000 open Incidents per Service. If the limit is reached and `auto_resolve_timeout` is disabled (set to 0 or null), the `auto_resolve_timeout` property will automatically be set to  84600 (1 day).<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.write`<br />

```sql
INSERT INTO pagerduty.services.services (
data__service,
Accept,
Content-Type
)
SELECT 
'{{ service }}' /* required */,
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
service
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: services
  props:
    - name: service
      value: object
    - name: Accept
      value: string
      description: The `Accept` header is used as a versioning header.
    - name: Content-Type
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service"
    values={[
        { label: 'delete_service', value: 'delete_service' }
    ]}
>
<TabItem value="delete_service">

Delete an existing service.<br /><br />Once the service is deleted, it will not be accessible from the web UI and new incidents won't be able to be created for this service.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.write`<br />

```sql
DELETE FROM pagerduty.services.services
WHERE id = '{{ id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_services"
    values={[
        { label: '_list_services', value: '_list_services' },
        { label: '_get_service', value: '_get_service' },
        { label: 'update_service', value: 'update_service' }
    ]}
>
<TabItem value="_list_services">

List existing Services.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.read`<br />

```sql
EXEC pagerduty.services.services._list_services 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@query='{{ query }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}, 
@team_ids[]='{{ team_ids[] }}', 
@time_zone='{{ time_zone }}', 
@sort_by='{{ sort_by }}', 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="_get_service">

Get details about an existing service.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.read`<br />

```sql
EXEC pagerduty.services.services._get_service 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="update_service">

Update an existing service.<br /><br />A service may represent an application, component, or team you wish to open incidents against.<br /><br />There is a limit of 100,000 open Incidents per Service. If the limit is reached and you disable `auto_resolve_timeout` (set to 0 or null), the API will respond with an error.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)<br /><br />Scoped OAuth requires: `services.write`<br />

```sql
EXEC pagerduty.services.services.update_service 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"service": "{{ service }}"
}'
;
```
</TabItem>
</Tabs>
