--- 
title: event_enrichments
hide_title: false
hide_table_of_contents: false
keywords:
  - event_enrichments
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

Creates, updates, deletes, gets or lists an <code>event_enrichments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_enrichments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.enrichment.event_enrichments" /></td></tr>
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

The Event Enrichment object.

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
    <td>ID of the Event Enrichment.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Event Enrichment.</td>
</tr>
<tr>
    <td><CopyableCode code="associated_event_orchestrations" /></td>
    <td><code>integer</code></td>
    <td>The number of Event Orchestrations associated with this Event Enrichment.</td>
</tr>
<tr>
    <td><CopyableCode code="associated_services" /></td>
    <td><code>integer</code></td>
    <td>The number of Services associated with this Event Enrichment.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the Event Enrichment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Reference to the user that created the Event Enrichment.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of this Event Enrichment's purpose.</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this Event Enrichment is the account default.</td>
</tr>
<tr>
    <td><CopyableCode code="privileges" /></td>
    <td><code>object</code></td>
    <td>Details about the read/update permissions of the current user for this Event Enrichment. Only present when `include&#91;&#93;=privileges` is requested.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>The API show URL at which the object is accessible.</td>
</tr>
<tr>
    <td><CopyableCode code="team" /></td>
    <td><code>object</code></td>
    <td>Reference to the team that owns this Event Enrichment.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the Event Enrichment was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>object</code></td>
    <td>Reference to the user that last updated the Event Enrichment.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A list of Event Enrichments for the account.

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
    <td>ID of the Event Enrichment.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Event Enrichment.</td>
</tr>
<tr>
    <td><CopyableCode code="associated_event_orchestrations" /></td>
    <td><code>integer</code></td>
    <td>The number of Event Orchestrations associated with this Event Enrichment.</td>
</tr>
<tr>
    <td><CopyableCode code="associated_services" /></td>
    <td><code>integer</code></td>
    <td>The number of Services associated with this Event Enrichment.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the Event Enrichment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Reference to the user that created the Event Enrichment.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of this Event Enrichment's purpose.</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this Event Enrichment is the account default.</td>
</tr>
<tr>
    <td><CopyableCode code="privileges" /></td>
    <td><code>object</code></td>
    <td>Details about the read/update permissions of the current user for this Event Enrichment. Only present when `include&#91;&#93;=privileges` is requested.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>The API show URL at which the object is accessible.</td>
</tr>
<tr>
    <td><CopyableCode code="team" /></td>
    <td><code>object</code></td>
    <td>Reference to the team that owns this Event Enrichment.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the Event Enrichment was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>object</code></td>
    <td>Reference to the user that last updated the Event Enrichment.</td>
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
    <td>Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Retrieve details of a specific Event Enrichment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-include[]"><code>include[]</code></a></td>
    <td>Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Retrieve a list of all Event Enrichments in the account.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-event_enrichment"><code>event_enrichment</code></a></td>
    <td></td>
    <td>Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Create a new Event Enrichment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-event_enrichment"><code>event_enrichment</code></a></td>
    <td></td>
    <td>Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Update an existing Event Enrichment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Delete a specific Event Enrichment. The user must have "Delete" privileges for both the Event Enrichment and all of its associated items.&lt;br /&gt;</td>
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
<tr id="parameter-include[]">
    <td><CopyableCode code="include[]" /></td>
    <td><code>array</code></td>
    <td>Include additional details. Supported value is "privileges".</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Retrieve details of a specific Event Enrichment.&lt;br /&gt;

```sql
SELECT
id,
name,
associated_event_orchestrations,
associated_services,
created_at,
created_by,
description,
is_default,
privileges,
self,
team,
updated_at,
updated_by
FROM pagerduty.enrichment.event_enrichments
WHERE id = '{{ id }}' -- required
AND include[] = '{{ include[] }}'
;
```
</TabItem>
<TabItem value="list">

Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Retrieve a list of all Event Enrichments in the account.&lt;br /&gt;

```sql
SELECT
id,
name,
associated_event_orchestrations,
associated_services,
created_at,
created_by,
description,
is_default,
privileges,
self,
team,
updated_at,
updated_by
FROM pagerduty.enrichment.event_enrichments
WHERE limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND include[] = '{{ include[] }}'
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

Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Create a new Event Enrichment.&lt;br /&gt;

```sql
INSERT INTO pagerduty.enrichment.event_enrichments (
event_enrichment
)
SELECT 
'{{ event_enrichment }}' /* required */
RETURNING
event_enrichment
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: event_enrichments
  props:
    - name: event_enrichment
      value:
        id: "{{ id }}"
        name: "{{ name }}"
        description: "{{ description }}"
        is_default: {{ is_default }}
        associated_services: {{ associated_services }}
        associated_event_orchestrations: {{ associated_event_orchestrations }}
        team:
          id: "{{ id }}"
          type: "{{ type }}"
          self: "{{ self }}"
        privileges:
          permissions:
            - "{{ permissions }}"
        created_at: "{{ created_at }}"
        created_by:
          id: "{{ id }}"
          type: "{{ type }}"
          self: "{{ self }}"
        updated_at: "{{ updated_at }}"
        updated_by:
          id: "{{ id }}"
          type: "{{ type }}"
          self: "{{ self }}"
        self: "{{ self }}"
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

Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Update an existing Event Enrichment.&lt;br /&gt;

```sql
UPDATE pagerduty.enrichment.event_enrichments
SET 
event_enrichment = '{{ event_enrichment }}'
WHERE 
id = '{{ id }}' --required
AND event_enrichment = '{{ event_enrichment }}' --required
RETURNING
event_enrichment;
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

Event Enrichments allow you to automatically add contextual data to events as they're ingested, so that relevant information is available throughout the event, alert, and incident lifecycle. By leveraging the Contextual Data Platform (CDP), you can define rules that extract values from events or query enrichment schemas to populate event fields.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Delete a specific Event Enrichment. The user must have "Delete" privileges for both the Event Enrichment and all of its associated items.&lt;br /&gt;

```sql
DELETE FROM pagerduty.enrichment.event_enrichments
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
