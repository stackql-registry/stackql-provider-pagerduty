--- 
title: event_enrichment_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - event_enrichment_rules
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

Creates, updates, deletes, gets or lists an <code>event_enrichment_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_enrichment_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.enrichment.event_enrichment_rules" /></td></tr>
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

The Event Enrichment rules (orchestration path).

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the rules were created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Reference to the user that created the rules.</td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code>object</code></td>
    <td>Reference to the parent Event Enrichment.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>The API show URL at which the object is accessible.</td>
</tr>
<tr>
    <td><CopyableCode code="sets" /></td>
    <td><code>array</code></td>
    <td>An array of sets of rules. Must contain a set with id `start`.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of this orchestration path. (event_enrichment)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the rules were last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>object</code></td>
    <td>Reference to the user that last updated the rules.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version of the rules configuration.</td>
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
    <td>Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Get the rules associated with an Event Enrichment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-orchestration_path"><code>orchestration_path</code></a></td>
    <td></td>
    <td>Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Update the enrichment rules for a specific Event Enrichment. Performs a full replacement of the rules set.&lt;br /&gt;</td>
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
    <td>The ID of the Event Enrichment.</td>
</tr>
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

Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Get the rules associated with an Event Enrichment.&lt;br /&gt;

```sql
SELECT
created_at,
created_by,
parent,
self,
sets,
type,
updated_at,
updated_by,
version
FROM pagerduty.enrichment.event_enrichment_rules
WHERE id = '{{ id }}' -- required
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

Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Update the enrichment rules for a specific Event Enrichment. Performs a full replacement of the rules set.&lt;br /&gt;

```sql
UPDATE pagerduty.enrichment.event_enrichment_rules
SET 
orchestration_path = '{{ orchestration_path }}'
WHERE 
id = '{{ id }}' --required
AND orchestration_path = '{{ orchestration_path }}' --required
RETURNING
orchestration_path;
```
</TabItem>
</Tabs>
