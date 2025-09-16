--- 
title: counts
hide_title: false
hide_table_of_contents: false
keywords:
  - counts
  - paused_incident_reports
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

Creates, updates, deletes, gets or lists a <code>counts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>counts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.paused_incident_reports.counts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_paused_incident_report_counts"
    values={[
        { label: 'get_paused_incident_report_counts', value: 'get_paused_incident_report_counts' }
    ]}
>
<TabItem value="get_paused_incident_report_counts">

Paused Incident Reporting counts for the Account or scoped to a Service.

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
    <td><CopyableCode code="paused_count" /></td>
    <td><code>number</code></td>
    <td>The total number of paused Alerts for the Account or Servce.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_after_pause_count" /></td>
    <td><code>number</code></td>
    <td>The total number of paused Alerts for the Account or Service that were resolved after being paused and not triggered (transient Alerts).</td>
</tr>
<tr>
    <td><CopyableCode code="since" /></td>
    <td><code>string</code></td>
    <td>The start of the date range over which the report data is represented.</td>
</tr>
<tr>
    <td><CopyableCode code="triggered_after_pause_count" /></td>
    <td><code>number</code></td>
    <td>The total number of paused Alerts for the Account or Service that were triggerd after being paused (non-transient Alerts).</td>
</tr>
<tr>
    <td><CopyableCode code="until" /></td>
    <td><code>string</code></td>
    <td>The end of the date range over which the report data is represented.</td>
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
    <td><a href="#get_paused_incident_report_counts"><CopyableCode code="get_paused_incident_report_counts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-suspended_by"><code>suspended_by</code></a></td>
    <td>Returns reporting counts for paused Incident usage for a given reporting period (maximum 6 months lookback period).  Note: This feature is currently available as part of the Event Intelligence package or Digital Operations plan only.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#paused-incident-reports)<br /><br />Scoped OAuth requires: `incidents.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_paused_incident_report_counts"><CopyableCode code="_get_paused_incident_report_counts" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-suspended_by"><code>suspended_by</code></a></td>
    <td>Returns reporting counts for paused Incident usage for a given reporting period (maximum 6 months lookback period).  Note: This feature is currently available as part of the Event Intelligence package or Digital Operations plan only.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#paused-incident-reports)<br /><br />Scoped OAuth requires: `incidents.read`<br /></td>
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
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>Specifies a filter to limit the scope of reporting to a particular service</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start of the date range over which you want to search.</td>
</tr>
<tr id="parameter-suspended_by">
    <td><CopyableCode code="suspended_by" /></td>
    <td><code></code></td>
    <td>Specifies a filter to scope the response to either alerts suspended by Auto Pause or Event Rules.</td>
</tr>
<tr id="parameter-until">
    <td><CopyableCode code="until" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end of the date range over which you want to search.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_paused_incident_report_counts"
    values={[
        { label: 'get_paused_incident_report_counts', value: 'get_paused_incident_report_counts' }
    ]}
>
<TabItem value="get_paused_incident_report_counts">

Returns reporting counts for paused Incident usage for a given reporting period (maximum 6 months lookback period).  Note: This feature is currently available as part of the Event Intelligence package or Digital Operations plan only.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#paused-incident-reports)<br /><br />Scoped OAuth requires: `incidents.read`<br />

```sql
SELECT
paused_count,
resolved_after_pause_count,
since,
triggered_after_pause_count,
until
FROM pagerduty.paused_incident_reports.counts
WHERE Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND since = '{{ since }}'
AND until = '{{ until }}'
AND service_id = '{{ service_id }}'
AND suspended_by = '{{ suspended_by }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_paused_incident_report_counts"
    values={[
        { label: '_get_paused_incident_report_counts', value: '_get_paused_incident_report_counts' }
    ]}
>
<TabItem value="_get_paused_incident_report_counts">

Returns reporting counts for paused Incident usage for a given reporting period (maximum 6 months lookback period).  Note: This feature is currently available as part of the Event Intelligence package or Digital Operations plan only.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#paused-incident-reports)<br /><br />Scoped OAuth requires: `incidents.read`<br />

```sql
EXEC pagerduty.paused_incident_reports.counts._get_paused_incident_report_counts 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@since='{{ since }}', 
@until='{{ until }}', 
@service_id='{{ service_id }}', 
@suspended_by='{{ suspended_by }}'
;
```
</TabItem>
</Tabs>
