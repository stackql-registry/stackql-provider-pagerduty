--- 
title: alerts
hide_title: false
hide_table_of_contents: false
keywords:
  - alerts
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

Creates, updates, deletes, gets or lists an <code>alerts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>alerts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incidents.alerts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_incident_alert"
    values={[
        { label: 'get_incident_alert', value: 'get_incident_alert' },
        { label: 'list_incident_alerts', value: 'list_incident_alerts' }
    ]}
>
<TabItem value="get_incident_alert">

The alert requested.

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
    <td><CopyableCode code="alert_key" /></td>
    <td><code>string</code></td>
    <td>The alert's de-duplication key.</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>object</code></td>
    <td>A JSON object containing data describing the alert. (title: Body)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the alert was first triggered.</td>
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
    <td><CopyableCode code="incident" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="integration" /></td>
    <td><code>object</code></td>
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
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The magnitude of the problem as reported by the monitoring tool.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the alert.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="suppressed" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not an alert is suppressed. Suppressed alerts are not created with a parent incident.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of object being created. (default: alert)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_incident_alerts">

A paginated array of the incident's alerts.

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
    <td><CopyableCode code="alert_key" /></td>
    <td><code>string</code></td>
    <td>The alert's de-duplication key.</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>object</code></td>
    <td>A JSON object containing data describing the alert. (title: Body)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the alert was first triggered.</td>
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
    <td><CopyableCode code="incident" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="integration" /></td>
    <td><code>object</code></td>
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
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The magnitude of the problem as reported by the monitoring tool.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the alert.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to `name`, though it is not intended to be an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="suppressed" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not an alert is suppressed. Suppressed alerts are not created with a parent incident.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of object being created. (default: alert)</td>
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
    <td><a href="#get_incident_alert"><CopyableCode code="get_incident_alert" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-alert_id"><code>alert_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Show detailed information about an alert. Accepts an alert id.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />When a service sends an event to PagerDuty, an alert and corresponding incident is triggered in PagerDuty.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.read`<br /></td>
</tr>
<tr>
    <td><a href="#list_incident_alerts"><CopyableCode code="list_incident_alerts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-alert_key"><code>alert_key</code></a>, <a href="#parameter-statuses[]"><code>statuses[]</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List alerts for the specified incident.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.read`<br /></td>
</tr>
<tr>
    <td><a href="#_list_incident_alerts"><CopyableCode code="_list_incident_alerts" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a>, <a href="#parameter-alert_key"><code>alert_key</code></a>, <a href="#parameter-statuses[]"><code>statuses[]</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>List alerts for the specified incident.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_incident_alerts"><CopyableCode code="update_incident_alerts" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-From"><code>From</code></a>, <a href="#parameter-alerts"><code>alerts</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td>Resolve multiple alerts or associate them with different incidents.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved. An alert represents a digital signal that was emitted to PagerDuty by the monitoring systems that detected or identified the issue.<br /><br />A maximum of 500 alerts may be updated at a time. If more than this number of alerts are given, the API will respond with status 413 (Request Entity Too Large).<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.write`<br /></td>
</tr>
<tr>
    <td><a href="#_get_incident_alert"><CopyableCode code="_get_incident_alert" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-alert_id"><code>alert_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Show detailed information about an alert. Accepts an alert id.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />When a service sends an event to PagerDuty, an alert and corresponding incident is triggered in PagerDuty.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_incident_alert"><CopyableCode code="update_incident_alert" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-alert_id"><code>alert_id</code></a>, <a href="#parameter-From"><code>From</code></a>, <a href="#parameter-alert"><code>alert</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Resolve an alert or associate an alert with a new parent incident.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />When a service sends an event to PagerDuty, an alert and corresponding incident is triggered in PagerDuty.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.write`<br /></td>
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
<tr id="parameter-alert_id">
    <td><CopyableCode code="alert_id" /></td>
    <td><code>string</code></td>
    <td>The id of the alert to retrieve.</td>
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
<tr id="parameter-alert_key">
    <td><CopyableCode code="alert_key" /></td>
    <td><code>string</code></td>
    <td>Alert de-duplication key.</td>
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
<tr id="parameter-sort_by">
    <td><CopyableCode code="sort_by" /></td>
    <td><code>string</code></td>
    <td>Used to specify both the field you wish to sort the results on (created_at/resolved_at), as well as the direction (asc/desc) of the results. The sort_by field and direction should be separated by a colon. A maximum of two fields can be included, separated by a comma. Sort direction defaults to ascending.</td>
</tr>
<tr id="parameter-statuses[]">
    <td><CopyableCode code="statuses[]" /></td>
    <td><code>string</code></td>
    <td>Return only alerts with the given statuses. (More status codes may be introduced in the future.)</td>
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
    defaultValue="get_incident_alert"
    values={[
        { label: 'get_incident_alert', value: 'get_incident_alert' },
        { label: 'list_incident_alerts', value: 'list_incident_alerts' }
    ]}
>
<TabItem value="get_incident_alert">

Show detailed information about an alert. Accepts an alert id.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />When a service sends an event to PagerDuty, an alert and corresponding incident is triggered in PagerDuty.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.read`<br />

```sql
SELECT
id,
alert_key,
body,
created_at,
first_trigger_log_entry,
html_url,
incident,
integration,
self,
service,
severity,
status,
summary,
suppressed,
type
FROM pagerduty.incidents.alerts
WHERE id = '{{ id }}' -- required
AND alert_id = '{{ alert_id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="list_incident_alerts">

List alerts for the specified incident.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.read`<br />

```sql
SELECT
id,
alert_key,
body,
created_at,
first_trigger_log_entry,
html_url,
incident,
integration,
self,
service,
severity,
status,
summary,
suppressed,
type
FROM pagerduty.incidents.alerts
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
AND alert_key = '{{ alert_key }}'
AND statuses[] = '{{ statuses[] }}'
AND sort_by = '{{ sort_by }}'
AND include[] = '{{ include[] }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_incident_alerts"
    values={[
        { label: '_list_incident_alerts', value: '_list_incident_alerts' },
        { label: 'update_incident_alerts', value: 'update_incident_alerts' },
        { label: '_get_incident_alert', value: '_get_incident_alert' },
        { label: 'update_incident_alert', value: 'update_incident_alert' }
    ]}
>
<TabItem value="_list_incident_alerts">

List alerts for the specified incident.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.read`<br />

```sql
EXEC pagerduty.incidents.alerts._list_incident_alerts 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}, 
@alert_key='{{ alert_key }}', 
@statuses[]='{{ statuses[] }}', 
@sort_by='{{ sort_by }}', 
@include[]='{{ include[] }}'
;
```
</TabItem>
<TabItem value="update_incident_alerts">

Resolve multiple alerts or associate them with different incidents.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved. An alert represents a digital signal that was emitted to PagerDuty by the monitoring systems that detected or identified the issue.<br /><br />A maximum of 500 alerts may be updated at a time. If more than this number of alerts are given, the API will respond with status 413 (Request Entity Too Large).<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.write`<br />

```sql
EXEC pagerduty.incidents.alerts.update_incident_alerts 
@id='{{ id }}' --required, 
@From='{{ From }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }} 
@@json=
'{
"alerts": "{{ alerts }}"
}'
;
```
</TabItem>
<TabItem value="_get_incident_alert">

Show detailed information about an alert. Accepts an alert id.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />When a service sends an event to PagerDuty, an alert and corresponding incident is triggered in PagerDuty.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.read`<br />

```sql
EXEC pagerduty.incidents.alerts._get_incident_alert 
@id='{{ id }}' --required, 
@alert_id='{{ alert_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="update_incident_alert">

Resolve an alert or associate an alert with a new parent incident.<br /><br />An incident represents a problem or an issue that needs to be addressed and resolved.<br /><br />When a service sends an event to PagerDuty, an alert and corresponding incident is triggered in PagerDuty.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)<br /><br />Scoped OAuth requires: `incidents.write`<br />

```sql
EXEC pagerduty.incidents.alerts.update_incident_alert 
@id='{{ id }}' --required, 
@alert_id='{{ alert_id }}' --required, 
@From='{{ From }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"alert": "{{ alert }}"
}'
;
```
</TabItem>
</Tabs>
