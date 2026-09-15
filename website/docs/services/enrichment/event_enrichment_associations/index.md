--- 
title: event_enrichment_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - event_enrichment_associations
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

Creates, updates, deletes, gets or lists an <code>event_enrichment_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_enrichment_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.enrichment.event_enrichment_associations" /></td></tr>
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

A list of associations for the Event Enrichment.

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
    <td>The ID of the associated Service or Event Orchestration.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>The API show URL at which the associated resource is accessible.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>The name of the associated Service or Event Orchestration.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the associated resource. (service_reference, event_orchestration_reference)</td>
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
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-association_type"><code>association_type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a></td>
    <td>Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;Associating an Event Orchestration or Service with an Event Enrichment allows for the enrichment to be evaluated when events are ingested for that Event Orchestration or Service&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Retrieve all items (Services or Event Orchestrations) associated with an Event Enrichment. If the API key lacks view access to an associated target, that item will not be returned in the results.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-associations"><code>associations</code></a></td>
    <td></td>
    <td>Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;Associating an Event Orchestration or Service with an Event Enrichment allows for the enrichment to be evaluated when events are ingested for that Event Orchestration or Service&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Add new associations between an Event Enrichment and Services or Event Orchestrations.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;Associating an Event Orchestration or Service with an Event Enrichment allows for the enrichment to be evaluated when events are ingested for that Event Orchestration or Service&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Remove associations between an Event Enrichment and Services or Event Orchestrations.&lt;br /&gt;</td>
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
<tr id="parameter-association_type">
    <td><CopyableCode code="association_type" /></td>
    <td><code>string</code></td>
    <td>Filter associations by type. Either "service" or "event_orchestration".</td>
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

Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;Associating an Event Orchestration or Service with an Event Enrichment allows for the enrichment to be evaluated when events are ingested for that Event Orchestration or Service&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Retrieve all items (Services or Event Orchestrations) associated with an Event Enrichment. If the API key lacks view access to an associated target, that item will not be returned in the results.&lt;br /&gt;

```sql
SELECT
id,
self,
summary,
type
FROM pagerduty.enrichment.event_enrichment_associations
WHERE id = '{{ id }}' -- required
AND association_type = '{{ association_type }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
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

Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;Associating an Event Orchestration or Service with an Event Enrichment allows for the enrichment to be evaluated when events are ingested for that Event Orchestration or Service&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Add new associations between an Event Enrichment and Services or Event Orchestrations.&lt;br /&gt;

```sql
INSERT INTO pagerduty.enrichment.event_enrichment_associations (
associations,
id
)
SELECT 
'{{ associations }}' /* required */,
'{{ id }}'
RETURNING
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: event_enrichment_associations
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the event_enrichment_associations resource.
    - name: associations
      value:
        - type: "{{ type }}"
          id: "{{ id }}"
          summary: "{{ summary }}"
          self: "{{ self }}"
`}</CodeBlock>

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

Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;Associating an Event Orchestration or Service with an Event Enrichment allows for the enrichment to be evaluated when events are ingested for that Event Orchestration or Service&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Remove associations between an Event Enrichment and Services or Event Orchestrations.&lt;br /&gt;

```sql
DELETE FROM pagerduty.enrichment.event_enrichment_associations
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
