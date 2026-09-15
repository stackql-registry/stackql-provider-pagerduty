--- 
title: event_enrichment_defaults
hide_title: false
hide_table_of_contents: false
keywords:
  - event_enrichment_defaults
  - enrichment
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

Creates, updates, deletes, gets or lists an <code>event_enrichment_defaults</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_enrichment_defaults" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.enrichment.event_enrichment_defaults" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

The account default Event Enrichment.

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
    <td><CopyableCode code="default" /></td>
    <td><code>object</code></td>
    <td>The current account default Event Enrichment. Null if no default is set.</td>
</tr>
<tr>
    <td><CopyableCode code="previous_default" /></td>
    <td><code>object</code></td>
    <td>The previous account default Event Enrichment, if one was replaced. Only present after a PUT request.</td>
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
    <td></td>
    <td></td>
    <td>Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;The default Event Enrichment gets applied to every Event Orchestration or Service that is not already associated to any other Event Enrichment&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Retrieve the account default Event Enrichment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td></td>
    <td></td>
    <td>Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;The default Event Enrichment gets applied to every Event Orchestration or Service that is not already associated to any other Event Enrichment&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Mark a specific Event Enrichment as the account default. Set the request body to `default: null` to clear the current default.&lt;br /&gt;</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;The default Event Enrichment gets applied to every Event Orchestration or Service that is not already associated to any other Event Enrichment&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Retrieve the account default Event Enrichment.&lt;br /&gt;

```sql
SELECT
default,
previous_default
FROM pagerduty.enrichment.event_enrichment_defaults
;
```
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

Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;The default Event Enrichment gets applied to every Event Orchestration or Service that is not already associated to any other Event Enrichment&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Mark a specific Event Enrichment as the account default. Set the request body to `default: null` to clear the current default.&lt;br /&gt;

```sql
UPDATE pagerduty.enrichment.event_enrichment_defaults
SET 
default = '{{ default }}'
RETURNING
default,
previous_default;
```
</TabItem>
</Tabs>
