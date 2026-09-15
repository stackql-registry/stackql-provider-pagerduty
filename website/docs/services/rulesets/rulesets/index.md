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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>rulesets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rulesets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.rulesets.rulesets" /></td></tr>
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
    <td> (global, default_global)</td>
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
<TabItem value="list">

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
    <td> (global, default_global)</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get a Ruleset.&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### End-of-life&lt;br /&gt;&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you &#91;migrate to Event Orchestration&#93;(https:​//support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.&lt;br /&gt;&lt;br /&gt;Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_rules.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td>List all Rulesets&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### End-of-life&lt;br /&gt;&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you &#91;migrate to Event Orchestration&#93;(https:​//support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.&lt;br /&gt;&lt;br /&gt;Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_rules.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ruleset"><code>ruleset</code></a></td>
    <td></td>
    <td>Create a new Ruleset.&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### End-of-life&lt;br /&gt;&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you &#91;migrate to Event Orchestration&#93;(https:​//support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.&lt;br /&gt;&lt;br /&gt;Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_rules.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-ruleset"><code>ruleset</code></a></td>
    <td></td>
    <td>Update a Ruleset.&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### End-of-life&lt;br /&gt;&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you &#91;migrate to Event Orchestration&#93;(https:​//support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.&lt;br /&gt;&lt;br /&gt;Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_rules.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete a Ruleset.&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### End-of-life&lt;br /&gt;&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you &#91;migrate to Event Orchestration&#93;(https:​//support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.&lt;br /&gt;&lt;br /&gt;Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_rules.write`&lt;br /&gt;</td>
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

Get a Ruleset.&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### End-of-life&lt;br /&gt;&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you &#91;migrate to Event Orchestration&#93;(https:​//support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.&lt;br /&gt;&lt;br /&gt;Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_rules.read`&lt;br /&gt;

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
;
```
</TabItem>
<TabItem value="list">

List all Rulesets&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### End-of-life&lt;br /&gt;&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you &#91;migrate to Event Orchestration&#93;(https:​//support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.&lt;br /&gt;&lt;br /&gt;Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_rules.read`&lt;br /&gt;

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
WHERE limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND total = '{{ total }}'
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

Create a new Ruleset.&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### End-of-life&lt;br /&gt;&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you &#91;migrate to Event Orchestration&#93;(https:​//support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.&lt;br /&gt;&lt;br /&gt;Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_rules.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.rulesets.rulesets (
ruleset
)
SELECT 
'{{ ruleset }}' /* required */
RETURNING
ruleset
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rulesets
  props:
    - name: ruleset
      description: |
        (opaque JSON object)
      value:
        id: "{{ id }}"
        self: "{{ self }}"
        type: "{{ type }}"
        name: "{{ name }}"
        routing_keys:
          - "{{ routing_keys }}"
        created_at: "{{ created_at }}"
        creator:
          id: "{{ id }}"
          type: "{{ type }}"
          self: "{{ self }}"
        updated_at: "{{ updated_at }}"
        updater:
          id: "{{ id }}"
          type: "{{ type }}"
          self: "{{ self }}"
        team:
          id: "{{ id }}"
          type: "{{ type }}"
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

Update a Ruleset.&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### End-of-life&lt;br /&gt;&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you &#91;migrate to Event Orchestration&#93;(https:​//support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.&lt;br /&gt;&lt;br /&gt;Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_rules.write`&lt;br /&gt;

```sql
UPDATE pagerduty.rulesets.rulesets
SET 
ruleset = '{{ ruleset }}'
WHERE 
id = '{{ id }}' --required
AND ruleset = '{{ ruleset }}' --required
RETURNING
ruleset;
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

Delete a Ruleset.&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### End-of-life&lt;br /&gt;&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you &#91;migrate to Event Orchestration&#93;(https:​//support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.&lt;br /&gt;&lt;br /&gt;Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_rules.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.rulesets.rulesets
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
