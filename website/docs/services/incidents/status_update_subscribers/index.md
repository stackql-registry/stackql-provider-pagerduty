--- 
title: status_update_subscribers
hide_title: false
hide_table_of_contents: false
keywords:
  - status_update_subscribers
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

Creates, updates, deletes, gets or lists a <code>status_update_subscribers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="status_update_subscribers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incidents.status_update_subscribers" /></td></tr>
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
    <td><CopyableCode code="subscriber_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the entity being subscribed</td>
</tr>
<tr>
    <td><CopyableCode code="has_indirect_subscription" /></td>
    <td><code>boolean</code></td>
    <td>If this subcriber has an indirect subscription to this incident via another object</td>
</tr>
<tr>
    <td><CopyableCode code="subscribed_via" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="subscriber_type" /></td>
    <td><code>string</code></td>
    <td>The type of the entity being subscribed (user, team)</td>
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
    <td></td>
    <td>Retrieve a list of Notification Subscribers on the Incident.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; Users must be added through `POST /incident/&#123;id&#125;/status_updates/subscribers` to be returned from this endpoint.&lt;br /&gt;Scoped OAuth requires: `subscribers.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-subscribers"><code>subscribers</code></a></td>
    <td></td>
    <td>Subscribe the given entities to Incident Status Update Notifications.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `subscribers.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#unsubscribe"><CopyableCode code="unsubscribe" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-subscribers"><code>subscribers</code></a></td>
    <td></td>
    <td>Unsubscribes the matching Subscribers from Incident Status Update Notifications.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `subscribers.write`&lt;br /&gt;</td>
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

Retrieve a list of Notification Subscribers on the Incident.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; Users must be added through `POST /incident/&#123;id&#125;/status_updates/subscribers` to be returned from this endpoint.&lt;br /&gt;Scoped OAuth requires: `subscribers.read`&lt;br /&gt;

```sql
SELECT
subscriber_id,
has_indirect_subscription,
subscribed_via,
subscriber_type
FROM pagerduty.incidents.status_update_subscribers
WHERE id = '{{ id }}' -- required
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

Subscribe the given entities to Incident Status Update Notifications.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `subscribers.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.incidents.status_update_subscribers (
subscribers,
id
)
SELECT 
'{{ subscribers }}' /* required */,
'{{ id }}'
RETURNING
subscriptions
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: status_update_subscribers
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the status_update_subscribers resource.
    - name: subscribers
      value:
        - subscriber_id: "{{ subscriber_id }}"
          subscriber_type: "{{ subscriber_type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="unsubscribe"
    values={[
        { label: 'unsubscribe', value: 'unsubscribe' }
    ]}
>
<TabItem value="unsubscribe">

Unsubscribes the matching Subscribers from Incident Status Update Notifications.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `subscribers.write`&lt;br /&gt;

```sql
EXEC pagerduty.incidents.status_update_subscribers.unsubscribe 
@id='{{ id }}' --required 
@@json=
'{
"subscribers": "{{ subscribers }}"
}'
;
```
</TabItem>
</Tabs>
