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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.services.services" /></td></tr>
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
    <td>Whether a service creates only incidents, or both alerts and incidents. A service must create alerts in order to enable incident merging. * "create_incidents" - The service will create one incident and zero alerts for each incoming event. * "create_alerts_and_incidents" - The service will create one incident and one associated alert for each incoming event. This attribute has been deprecated as all services will be migrated to use alerts and incidents. Afterward, the incident only service setting will no longer be available. For details, please refer to the knowledge base: https:​//support.pagerduty.com/docs/alerts#enable-and-disable-alerts-on-a-service.  (create_incidents, create_alerts_and_incidents) (default: create_alerts_and_incidents)</td>
</tr>
<tr>
    <td><CopyableCode code="alert_grouping" /></td>
    <td><code>string</code></td>
    <td>Defines how alerts on this service will be automatically grouped into incidents. Note that the alert grouping features are available only on certain plans. There are three available options: * null - No alert grouping on the service. Each alert will create a separate incident; * "time" - All alerts within a specified duration will be grouped into the same incident. This duration is set in the `alert_grouping_timeout` setting (described below). Available on Standard, Enterprise, and Event Intelligence plans; * "intelligent" - Alerts will be intelligently grouped based on a machine learning model that looks at the alert summary, timing, and the history of grouped alerts. Available on Enterprise and Event Intelligence plans  This attribute has been deprecated and configuration via &#91;Alert Grouping Settings&#93;(https:​//developer.pagerduty.com/api-reference/587edbc8ff416-create-an-alert-grouping-setting) resource is encouraged.  (time, intelligent)</td>
</tr>
<tr>
    <td><CopyableCode code="alert_grouping_parameters" /></td>
    <td><code></code></td>
    <td>Alert Grouping Parameters</td>
</tr>
<tr>
    <td><CopyableCode code="alert_grouping_timeout" /></td>
    <td><code>integer</code></td>
    <td>The duration in minutes within which to automatically group incoming alerts. This setting applies only when `alert_grouping` is set to `time`. To continue grouping alerts until the Incident is resolved, set this value to `0`.  This attribute has been deprecated and configuration via &#91;Alert Grouping Settings&#93;(https:​//developer.pagerduty.com/api-reference/587edbc8ff416-create-an-alert-grouping-setting) resource is encouraged. </td>
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
    <td>(opaque JSON object)</td>
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
    <td><code></code></td>
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
    <td>The current state of the Service. Valid statuses are:   - `active`: The service is enabled and has no open incidents. This is the only status a service can be created with. - `warning`: The service is enabled and has one or more acknowledged incidents. - `critical`: The service is enabled and has one or more triggered incidents. - `maintenance`: The service is under maintenance, no new incidents will be triggered during maintenance mode. - `disabled`: The service is disabled and will not have any new triggered incidents.  (active, warning, critical, maintenance, disabled) (default: active)</td>
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
    <td>A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td>Whether a service creates only incidents, or both alerts and incidents. A service must create alerts in order to enable incident merging. * "create_incidents" - The service will create one incident and zero alerts for each incoming event. * "create_alerts_and_incidents" - The service will create one incident and one associated alert for each incoming event. This attribute has been deprecated as all services will be migrated to use alerts and incidents. Afterward, the incident only service setting will no longer be available. For details, please refer to the knowledge base: https:​//support.pagerduty.com/docs/alerts#enable-and-disable-alerts-on-a-service.  (create_incidents, create_alerts_and_incidents) (default: create_alerts_and_incidents)</td>
</tr>
<tr>
    <td><CopyableCode code="alert_grouping" /></td>
    <td><code>string</code></td>
    <td>Defines how alerts on this service will be automatically grouped into incidents. Note that the alert grouping features are available only on certain plans. There are three available options: * null - No alert grouping on the service. Each alert will create a separate incident; * "time" - All alerts within a specified duration will be grouped into the same incident. This duration is set in the `alert_grouping_timeout` setting (described below). Available on Standard, Enterprise, and Event Intelligence plans; * "intelligent" - Alerts will be intelligently grouped based on a machine learning model that looks at the alert summary, timing, and the history of grouped alerts. Available on Enterprise and Event Intelligence plans  This attribute has been deprecated and configuration via &#91;Alert Grouping Settings&#93;(https:​//developer.pagerduty.com/api-reference/587edbc8ff416-create-an-alert-grouping-setting) resource is encouraged.  (time, intelligent)</td>
</tr>
<tr>
    <td><CopyableCode code="alert_grouping_parameters" /></td>
    <td><code></code></td>
    <td>Alert Grouping Parameters</td>
</tr>
<tr>
    <td><CopyableCode code="alert_grouping_timeout" /></td>
    <td><code>integer</code></td>
    <td>The duration in minutes within which to automatically group incoming alerts. This setting applies only when `alert_grouping` is set to `time`. To continue grouping alerts until the Incident is resolved, set this value to `0`.  This attribute has been deprecated and configuration via &#91;Alert Grouping Settings&#93;(https:​//developer.pagerduty.com/api-reference/587edbc8ff416-create-an-alert-grouping-setting) resource is encouraged. </td>
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
    <td>(opaque JSON object)</td>
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
    <td><code></code></td>
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
    <td>The current state of the Service. Valid statuses are:   - `active`: The service is enabled and has no open incidents. This is the only status a service can be created with. - `warning`: The service is enabled and has one or more acknowledged incidents. - `critical`: The service is enabled and has one or more triggered incidents. - `maintenance`: The service is under maintenance, no new incidents will be triggered during maintenance mode. - `disabled`: The service is disabled and will not have any new triggered incidents.  (active, warning, critical, maintenance, disabled) (default: active)</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Get details about an existing service.&lt;br /&gt;&lt;br /&gt;A service may represent an application, component, or team you wish to open incidents against.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-query"><code>query</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-team_ids[]"><code>team_ids[]</code></a>, <a href="#parameter-time_zone"><code>time_zone</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a>, <a href="#parameter-include[]"><code>include[]</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td>List existing Services.&lt;br /&gt;&lt;br /&gt;A service may represent an application, component, or team you wish to open incidents against.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Create a new service.&lt;br /&gt;&lt;br /&gt;If `status` is included in the request, it must have a value of `active` when creating a new service. If a different status is required, make a second request to update the service.&lt;br /&gt;&lt;br /&gt;A service may represent an application, component, or team you wish to open incidents against.&lt;br /&gt;&lt;br /&gt;There is a limit of 25,000 services per account. If the limit is reached, the API will respond with an error. There is also a limit of 100,000 open Incidents per Service. If the limit is reached and `auto_resolve_timeout` is disabled (set to 0 or null), the `auto_resolve_timeout` property will automatically be set to  84600 (1 day).&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Update an existing service.&lt;br /&gt;&lt;br /&gt;A service may represent an application, component, or team you wish to open incidents against.&lt;br /&gt;&lt;br /&gt;There is a limit of 100,000 open Incidents per Service. If the limit is reached and you disable `auto_resolve_timeout` (set to 0 or null), the API will respond with an error.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete an existing service.&lt;br /&gt;&lt;br /&gt;Once the service is deleted, it will not be accessible from the web UI and new incidents won't be able to be created for this service.&lt;br /&gt;&lt;br /&gt;A service may represent an application, component, or team you wish to open incidents against.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filters the results, showing only services with the specified name.</td>
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
    <td>Time zone in which results will be rendered. This will default to the account time zone.</td>
</tr>
<tr id="parameter-total">
    <td><CopyableCode code="total" /></td>
    <td><code>boolean</code></td>
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our &#91;Pagination Docs&#93;(https:​//developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
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

Get details about an existing service.&lt;br /&gt;&lt;br /&gt;A service may represent an application, component, or team you wish to open incidents against.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;

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
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list">

List existing Services.&lt;br /&gt;&lt;br /&gt;A service may represent an application, component, or team you wish to open incidents against.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.read`&lt;br /&gt;

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
WHERE query = '{{ query }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND team_ids[] = '{{ team_ids[] }}'
AND time_zone = '{{ time_zone }}'
AND sort_by = '{{ sort_by }}'
AND include[] = '{{ include[] }}'
AND name = '{{ name }}'
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

Create a new service.&lt;br /&gt;&lt;br /&gt;If `status` is included in the request, it must have a value of `active` when creating a new service. If a different status is required, make a second request to update the service.&lt;br /&gt;&lt;br /&gt;A service may represent an application, component, or team you wish to open incidents against.&lt;br /&gt;&lt;br /&gt;There is a limit of 25,000 services per account. If the limit is reached, the API will respond with an error. There is also a limit of 100,000 open Incidents per Service. If the limit is reached and `auto_resolve_timeout` is disabled (set to 0 or null), the `auto_resolve_timeout` property will automatically be set to  84600 (1 day).&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.services.services (
service
)
SELECT 
'{{ service }}' /* required */
RETURNING
service
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: services
  props:
    - name: service
      value:
        id: "{{ id }}"
        summary: "{{ summary }}"
        type: "{{ type }}"
        self: "{{ self }}"
        html_url: "{{ html_url }}"
        name: "{{ name }}"
        description: "{{ description }}"
        auto_resolve_timeout: {{ auto_resolve_timeout }}
        acknowledgement_timeout: {{ acknowledgement_timeout }}
        created_at: "{{ created_at }}"
        status: "{{ status }}"
        last_incident_timestamp: "{{ last_incident_timestamp }}"
        escalation_policy:
          id: "{{ id }}"
          summary: "{{ summary }}"
          type: "{{ type }}"
          self: "{{ self }}"
          html_url: "{{ html_url }}"
        response_play: "{{ response_play }}"
        teams:
          - id: "{{ id }}"
            summary: "{{ summary }}"
            type: "{{ type }}"
            self: "{{ self }}"
            html_url: "{{ html_url }}"
        integrations:
          - id: "{{ id }}"
            summary: "{{ summary }}"
            type: "{{ type }}"
            self: "{{ self }}"
            html_url: "{{ html_url }}"
        incident_urgency_rule:
          type: "{{ type }}"
          urgency: "{{ urgency }}"
          during_support_hours:
            type: "{{ type }}"
            urgency: "{{ urgency }}"
          outside_support_hours:
            type: "{{ type }}"
            urgency: "{{ urgency }}"
        support_hours:
          type: "{{ type }}"
          time_zone: "{{ time_zone }}"
          days_of_week:
            - {{ days_of_week }}
          start_time: "{{ start_time }}"
          end_time: "{{ end_time }}"
        scheduled_actions:
          - type: "{{ type }}"
            at:
              type: "{{ type }}"
              name: "{{ name }}"
            to_urgency: "{{ to_urgency }}"
        addons:
          - id: "{{ id }}"
            summary: "{{ summary }}"
            type: "{{ type }}"
            self: "{{ self }}"
            html_url: "{{ html_url }}"
            src: "{{ src }}"
            name: "{{ name }}"
        alert_creation: "{{ alert_creation }}"
        alert_grouping_parameters: "{{ alert_grouping_parameters }}"
        alert_grouping: "{{ alert_grouping }}"
        alert_grouping_timeout: {{ alert_grouping_timeout }}
        auto_pause_notifications_parameters:
          enabled: {{ enabled }}
          timeout: {{ timeout }}
          recommended_timeout: {{ recommended_timeout }}
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

Update an existing service.&lt;br /&gt;&lt;br /&gt;A service may represent an application, component, or team you wish to open incidents against.&lt;br /&gt;&lt;br /&gt;There is a limit of 100,000 open Incidents per Service. If the limit is reached and you disable `auto_resolve_timeout` (set to 0 or null), the API will respond with an error.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;

```sql
UPDATE pagerduty.services.services
SET 
service = '{{ service }}'
WHERE 
id = '{{ id }}' --required
AND service = '{{ service }}' --required
RETURNING
service;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Delete an existing service.&lt;br /&gt;&lt;br /&gt;Once the service is deleted, it will not be accessible from the web UI and new incidents won't be able to be created for this service.&lt;br /&gt;&lt;br /&gt;A service may represent an application, component, or team you wish to open incidents against.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#services)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `services.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.services.services
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
