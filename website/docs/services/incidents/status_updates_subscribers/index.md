--- 
title: status_updates_subscribers
hide_title: false
hide_table_of_contents: false
keywords:
  - status_updates_subscribers
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

Creates, updates, deletes, gets or lists a <code>status_updates_subscribers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>status_updates_subscribers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incidents.status_updates_subscribers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_incident_notification_subscribers"
    values={[
        { label: 'get_incident_notification_subscribers', value: 'get_incident_notification_subscribers' }
    ]}
>
<TabItem value="get_incident_notification_subscribers">

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
    <td>The type of the entity being subscribed</td>
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
    <td><a href="#get_incident_notification_subscribers"><CopyableCode code="get_incident_notification_subscribers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Retrieve a list of Notification Subscribers on the Incident.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; Users must be added through `POST /incident/&#123;id&#125;/status_updates/subscribers` to be returned from this endpoint.<br />Scoped OAuth requires: `subscribers.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_incident_notification_subscribers"><CopyableCode code="create_incident_notification_subscribers" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-data__subscribers"><code>data__subscribers</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Subscribe the given entities to Incident Status Update Notifications.<br /><br />Scoped OAuth requires: `subscribers.write`<br /></td>
</tr>
<tr>
    <td><a href="#_get_incident_notification_subscribers"><CopyableCode code="_get_incident_notification_subscribers" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Retrieve a list of Notification Subscribers on the Incident.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; Users must be added through `POST /incident/&#123;id&#125;/status_updates/subscribers` to be returned from this endpoint.<br />Scoped OAuth requires: `subscribers.read`<br /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_incident_notification_subscribers"
    values={[
        { label: 'get_incident_notification_subscribers', value: 'get_incident_notification_subscribers' }
    ]}
>
<TabItem value="get_incident_notification_subscribers">

Retrieve a list of Notification Subscribers on the Incident.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; Users must be added through `POST /incident/&#123;id&#125;/status_updates/subscribers` to be returned from this endpoint.<br />Scoped OAuth requires: `subscribers.read`<br />

```sql
SELECT
subscriber_id,
has_indirect_subscription,
subscribed_via,
subscriber_type
FROM pagerduty.incidents.status_updates_subscribers
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_incident_notification_subscribers"
    values={[
        { label: 'create_incident_notification_subscribers', value: 'create_incident_notification_subscribers' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_incident_notification_subscribers">

Subscribe the given entities to Incident Status Update Notifications.<br /><br />Scoped OAuth requires: `subscribers.write`<br />

```sql
INSERT INTO pagerduty.incidents.status_updates_subscribers (
data__subscribers,
id,
Accept
)
SELECT 
'{{ subscribers }}' /* required */,
'{{ id }}',
'{{ Accept }}'
RETURNING
subscriptions
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: status_updates_subscribers
  props:
    - name: id
      value: string
      description: Required parameter for the status_updates_subscribers resource.
    - name: subscribers
      value: array
    - name: Accept
      value: string
      description: The `Accept` header is used as a versioning header.
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_get_incident_notification_subscribers"
    values={[
        { label: '_get_incident_notification_subscribers', value: '_get_incident_notification_subscribers' }
    ]}
>
<TabItem value="_get_incident_notification_subscribers">

Retrieve a list of Notification Subscribers on the Incident.<br /><br />&lt;!-- theme: warning --&gt;<br />&gt; Users must be added through `POST /incident/&#123;id&#125;/status_updates/subscribers` to be returned from this endpoint.<br />Scoped OAuth requires: `subscribers.read`<br />

```sql
EXEC pagerduty.incidents.status_updates_subscribers._get_incident_notification_subscribers 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}'
;
```
</TabItem>
</Tabs>
