--- 
title: rulesets
hide_title: false
hide_table_of_contents: false
keywords:
  - rulesets
  - rulesets
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

Creates, updates, deletes, gets or lists a <code>rulesets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>rulesets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.rulesets.rulesets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ruleset"
    values={[
        { label: 'get_ruleset', value: 'get_ruleset' },
        { label: 'list_rulesets', value: 'list_rulesets' }
    ]}
>
<TabItem value="get_ruleset">

The Ruleset object.

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
    <td>ID of the Ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the Ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the Ruleset was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>Reference to the user that has created the Ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="routing_keys" /></td>
    <td><code>array</code></td>
    <td>Routing keys routed to this Ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="team" /></td>
    <td><code>object</code></td>
    <td>Reference to the team that owns the Ruleset. If none is specified, only admins have access.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the Ruleset was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updater" /></td>
    <td><code>object</code></td>
    <td>Reference to the user that has updated the Ruleset last.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_rulesets">

A paginated array of Ruleset objects.

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
    <td>ID of the Ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the Ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the Ruleset was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>Reference to the user that has created the Ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="routing_keys" /></td>
    <td><code>array</code></td>
    <td>Routing keys routed to this Ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible</td>
</tr>
<tr>
    <td><CopyableCode code="team" /></td>
    <td><code>object</code></td>
    <td>Reference to the team that owns the Ruleset. If none is specified, only admins have access.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the Ruleset was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updater" /></td>
    <td><code>object</code></td>
    <td>Reference to the user that has updated the Ruleset last.</td>
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
    <td><a href="#get_ruleset"><CopyableCode code="get_ruleset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get a Ruleset.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Scoped OAuth requires: `event_rules.read`<br /></td>
</tr>
<tr>
    <td><a href="#list_rulesets"><CopyableCode code="list_rulesets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td>List all Rulesets<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Scoped OAuth requires: `event_rules.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_ruleset"><CopyableCode code="create_ruleset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__ruleset"><code>data__ruleset</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create a new Ruleset.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Scoped OAuth requires: `event_rules.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_ruleset"><CopyableCode code="delete_ruleset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Delete a Ruleset.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Scoped OAuth requires: `event_rules.write`<br /></td>
</tr>
<tr>
    <td><a href="#_list_rulesets"><CopyableCode code="_list_rulesets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td>List all Rulesets<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Scoped OAuth requires: `event_rules.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_ruleset"><CopyableCode code="_get_ruleset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get a Ruleset.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Scoped OAuth requires: `event_rules.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_ruleset"><CopyableCode code="update_ruleset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-ruleset"><code>ruleset</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Update a Ruleset.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Scoped OAuth requires: `event_rules.write`<br /></td>
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
<tr id="parameter-total">
    <td><CopyableCode code="total" /></td>
    <td><code>boolean</code></td>
    <td>By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated.  See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information. </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ruleset"
    values={[
        { label: 'get_ruleset', value: 'get_ruleset' },
        { label: 'list_rulesets', value: 'list_rulesets' }
    ]}
>
<TabItem value="get_ruleset">

Get a Ruleset.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Scoped OAuth requires: `event_rules.read`<br />

```sql
SELECT
id,
name,
created_at,
creator,
routing_keys,
self,
team,
type,
updated_at,
updater
FROM pagerduty.rulesets.rulesets
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="list_rulesets">

List all Rulesets<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Scoped OAuth requires: `event_rules.read`<br />

```sql
SELECT
id,
name,
created_at,
creator,
routing_keys,
self,
team,
type,
updated_at,
updater
FROM pagerduty.rulesets.rulesets
WHERE Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ruleset"
    values={[
        { label: 'create_ruleset', value: 'create_ruleset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ruleset">

Create a new Ruleset.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Scoped OAuth requires: `event_rules.write`<br />

```sql
INSERT INTO pagerduty.rulesets.rulesets (
data__ruleset,
Accept,
Content-Type
)
SELECT 
'{{ ruleset }}' /* required */,
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
ruleset
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: rulesets
  props:
    - name: ruleset
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
    defaultValue="delete_ruleset"
    values={[
        { label: 'delete_ruleset', value: 'delete_ruleset' }
    ]}
>
<TabItem value="delete_ruleset">

Delete a Ruleset.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Scoped OAuth requires: `event_rules.write`<br />

```sql
DELETE FROM pagerduty.rulesets.rulesets
WHERE id = '{{ id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_rulesets"
    values={[
        { label: '_list_rulesets', value: '_list_rulesets' },
        { label: '_get_ruleset', value: '_get_ruleset' },
        { label: 'update_ruleset', value: 'update_ruleset' }
    ]}
>
<TabItem value="_list_rulesets">

List all Rulesets<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Scoped OAuth requires: `event_rules.read`<br />

```sql
EXEC pagerduty.rulesets.rulesets._list_rulesets 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}
;
```
</TabItem>
<TabItem value="_get_ruleset">

Get a Ruleset.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Scoped OAuth requires: `event_rules.read`<br />

```sql
EXEC pagerduty.rulesets.rulesets._get_ruleset 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="update_ruleset">

Update a Ruleset.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Scoped OAuth requires: `event_rules.write`<br />

```sql
EXEC pagerduty.rulesets.rulesets.update_ruleset 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"ruleset": "{{ ruleset }}"
}'
;
```
</TabItem>
</Tabs>
