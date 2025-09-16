--- 
title: rules
hide_title: false
hide_table_of_contents: false
keywords:
  - rules
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

Creates, updates, deletes, gets or lists a <code>rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.rulesets.rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ruleset_event_rule"
    values={[
        { label: 'get_ruleset_event_rule', value: 'get_ruleset_event_rule' },
        { label: 'list_ruleset_event_rules', value: 'list_ruleset_event_rules' }
    ]}
>
<TabItem value="get_ruleset_event_rule">

The Event Rule object.

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
    <td>ID of the Event Rule.</td>
</tr>
<tr>
    <td><CopyableCode code="actions" /></td>
    <td><code>object</code></td>
    <td>When an event matches this Event Rule, the actions that will be taken to change the resulting Alert and Incident.</td>
</tr>
<tr>
    <td><CopyableCode code="catch_all" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the Event Rule is the last Event Rule of the Ruleset that serves as a catch-all. It has limited functionality compared to other rules and always matches.</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>object</code></td>
    <td>Conditions evaluated to check if an event matches this Event Rule. Is always empty for the catch_all rule, though.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the Event Rule is disabled and would therefore not be evaluated.</td>
</tr>
<tr>
    <td><CopyableCode code="position" /></td>
    <td><code>integer</code></td>
    <td>Position/index of the Event Rule in the Ruleset.  Starting from position 0 (the first rule), rules are evaluated one-by-one until a matching rule is found.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible.</td>
</tr>
<tr>
    <td><CopyableCode code="time_frame" /></td>
    <td><code>object</code></td>
    <td>Time-based conditions for limiting when the rule is active.</td>
</tr>
<tr>
    <td><CopyableCode code="variables" /></td>
    <td><code>array</code></td>
    <td>[Early Access] Populate variables from event payloads and use those variables in other event actions.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ruleset_event_rules">

A paginated array of Event Rule objects.

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
    <td>ID of the Event Rule.</td>
</tr>
<tr>
    <td><CopyableCode code="actions" /></td>
    <td><code>object</code></td>
    <td>When an event matches this Event Rule, the actions that will be taken to change the resulting Alert and Incident.</td>
</tr>
<tr>
    <td><CopyableCode code="catch_all" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the Event Rule is the last Event Rule of the Ruleset that serves as a catch-all. It has limited functionality compared to other rules and always matches.</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>object</code></td>
    <td>Conditions evaluated to check if an event matches this Event Rule. Is always empty for the catch_all rule, though.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the Event Rule is disabled and would therefore not be evaluated.</td>
</tr>
<tr>
    <td><CopyableCode code="position" /></td>
    <td><code>integer</code></td>
    <td>Position/index of the Event Rule in the Ruleset.  Starting from position 0 (the first rule), rules are evaluated one-by-one until a matching rule is found.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>the API show URL at which the object is accessible.</td>
</tr>
<tr>
    <td><CopyableCode code="time_frame" /></td>
    <td><code>object</code></td>
    <td>Time-based conditions for limiting when the rule is active.</td>
</tr>
<tr>
    <td><CopyableCode code="variables" /></td>
    <td><code>array</code></td>
    <td>[Early Access] Populate variables from event payloads and use those variables in other event actions.</td>
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
    <td><a href="#get_ruleset_event_rule"><CopyableCode code="get_ruleset_event_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get an Event Rule.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Note: Create and Update on rules will accept 'description' or 'summary' interchangeably as an extraction action target. Get and List on rules will always return 'summary' as the target. If you are expecting 'description' please change your automation code to expect 'summary' instead.<br /><br />Scoped OAuth requires: `event_rules.read`<br /></td>
</tr>
<tr>
    <td><a href="#list_ruleset_event_rules"><CopyableCode code="list_ruleset_event_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td>List all Event Rules on a Ruleset.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Note: Create and Update on rules will accept 'description' or 'summary' interchangeably as an extraction action target. Get and List on rules will always return 'summary' as the target. If you are expecting 'description' please change your automation code to expect 'summary' instead.<br /><br />Scoped OAuth requires: `event_rules.read`<br /></td>
</tr>
<tr>
    <td><a href="#create_ruleset_event_rule"><CopyableCode code="create_ruleset_event_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-data__rule"><code>data__rule</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Create a new Event Rule.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Note: Create and Update on rules will accept 'description' or 'summary' interchangeably as an extraction action target. Get and List on rules will always return 'summary' as the target. If you are expecting 'description' please change your automation code to expect 'summary' instead.<br /><br />Scoped OAuth requires: `event_rules.write`<br /></td>
</tr>
<tr>
    <td><a href="#delete_ruleset_event_rule"><CopyableCode code="delete_ruleset_event_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Delete an Event Rule.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Scoped OAuth requires: `event_rules.write`<br /></td>
</tr>
<tr>
    <td><a href="#_list_ruleset_event_rules"><CopyableCode code="_list_ruleset_event_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td>List all Event Rules on a Ruleset.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Note: Create and Update on rules will accept 'description' or 'summary' interchangeably as an extraction action target. Get and List on rules will always return 'summary' as the target. If you are expecting 'description' please change your automation code to expect 'summary' instead.<br /><br />Scoped OAuth requires: `event_rules.read`<br /></td>
</tr>
<tr>
    <td><a href="#_get_ruleset_event_rule"><CopyableCode code="_get_ruleset_event_rule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Get an Event Rule.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Note: Create and Update on rules will accept 'description' or 'summary' interchangeably as an extraction action target. Get and List on rules will always return 'summary' as the target. If you are expecting 'description' please change your automation code to expect 'summary' instead.<br /><br />Scoped OAuth requires: `event_rules.read`<br /></td>
</tr>
<tr>
    <td><a href="#update_ruleset_event_rule"><CopyableCode code="update_ruleset_event_rule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td><a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a></td>
    <td>Update an Event Rule. Note that the endpoint supports partial updates, so any number of the writable fields can be provided.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Note: Create and Update on rules will accept 'description' or 'summary' interchangeably as an extraction action target. Get and List on rules will always return 'summary' as the target. If you are expecting 'description' please change your automation code to expect 'summary' instead.<br /><br />Scoped OAuth requires: `event_rules.write`<br /></td>
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
<tr id="parameter-rule_id">
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>The id of the Event Rule to retrieve.</td>
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
    defaultValue="get_ruleset_event_rule"
    values={[
        { label: 'get_ruleset_event_rule', value: 'get_ruleset_event_rule' },
        { label: 'list_ruleset_event_rules', value: 'list_ruleset_event_rules' }
    ]}
>
<TabItem value="get_ruleset_event_rule">

Get an Event Rule.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Note: Create and Update on rules will accept 'description' or 'summary' interchangeably as an extraction action target. Get and List on rules will always return 'summary' as the target. If you are expecting 'description' please change your automation code to expect 'summary' instead.<br /><br />Scoped OAuth requires: `event_rules.read`<br />

```sql
SELECT
id,
actions,
catch_all,
conditions,
disabled,
position,
self,
time_frame,
variables
FROM pagerduty.rulesets.rules
WHERE id = '{{ id }}' -- required
AND rule_id = '{{ rule_id }}' -- required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="list_ruleset_event_rules">

List all Event Rules on a Ruleset.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Note: Create and Update on rules will accept 'description' or 'summary' interchangeably as an extraction action target. Get and List on rules will always return 'summary' as the target. If you are expecting 'description' please change your automation code to expect 'summary' instead.<br /><br />Scoped OAuth requires: `event_rules.read`<br />

```sql
SELECT
id,
actions,
catch_all,
conditions,
disabled,
position,
self,
time_frame,
variables
FROM pagerduty.rulesets.rules
WHERE id = '{{ id }}' -- required
AND Accept = '{{ Accept }}'
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
    defaultValue="create_ruleset_event_rule"
    values={[
        { label: 'create_ruleset_event_rule', value: 'create_ruleset_event_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ruleset_event_rule">

Create a new Event Rule.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Note: Create and Update on rules will accept 'description' or 'summary' interchangeably as an extraction action target. Get and List on rules will always return 'summary' as the target. If you are expecting 'description' please change your automation code to expect 'summary' instead.<br /><br />Scoped OAuth requires: `event_rules.write`<br />

```sql
INSERT INTO pagerduty.rulesets.rules (
data__rule,
id,
Accept,
Content-Type
)
SELECT 
'{{ rule }}' /* required */,
'{{ id }}',
'{{ Accept }}',
'{{ Content-Type }}'
RETURNING
rule
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: rules
  props:
    - name: id
      value: string
      description: Required parameter for the rules resource.
    - name: rule
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
    defaultValue="delete_ruleset_event_rule"
    values={[
        { label: 'delete_ruleset_event_rule', value: 'delete_ruleset_event_rule' }
    ]}
>
<TabItem value="delete_ruleset_event_rule">

Delete an Event Rule.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Scoped OAuth requires: `event_rules.write`<br />

```sql
DELETE FROM pagerduty.rulesets.rules
WHERE id = '{{ id }}' --required
AND rule_id = '{{ rule_id }}' --required
AND Accept = '{{ Accept }}'
AND Content-Type = '{{ Content-Type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="_list_ruleset_event_rules"
    values={[
        { label: '_list_ruleset_event_rules', value: '_list_ruleset_event_rules' },
        { label: '_get_ruleset_event_rule', value: '_get_ruleset_event_rule' },
        { label: 'update_ruleset_event_rule', value: 'update_ruleset_event_rule' }
    ]}
>
<TabItem value="_list_ruleset_event_rules">

List all Event Rules on a Ruleset.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Note: Create and Update on rules will accept 'description' or 'summary' interchangeably as an extraction action target. Get and List on rules will always return 'summary' as the target. If you are expecting 'description' please change your automation code to expect 'summary' instead.<br /><br />Scoped OAuth requires: `event_rules.read`<br />

```sql
EXEC pagerduty.rulesets.rules._list_ruleset_event_rules 
@id='{{ id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}', 
@limit='{{ limit }}', 
@offset='{{ offset }}', 
@total={{ total }}
;
```
</TabItem>
<TabItem value="_get_ruleset_event_rule">

Get an Event Rule.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Note: Create and Update on rules will accept 'description' or 'summary' interchangeably as an extraction action target. Get and List on rules will always return 'summary' as the target. If you are expecting 'description' please change your automation code to expect 'summary' instead.<br /><br />Scoped OAuth requires: `event_rules.read`<br />

```sql
EXEC pagerduty.rulesets.rules._get_ruleset_event_rule 
@id='{{ id }}' --required, 
@rule_id='{{ rule_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}'
;
```
</TabItem>
<TabItem value="update_ruleset_event_rule">

Update an Event Rule. Note that the endpoint supports partial updates, so any number of the writable fields can be provided.<br />&lt;!-- theme: warning --&gt;<br />&gt; ### End-of-life<br />&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you [migrate to Event Orchestration](https://support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.<br /><br />Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.<br /><br />For more information see the [API Concepts Document](https://developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)<br /><br />Note: Create and Update on rules will accept 'description' or 'summary' interchangeably as an extraction action target. Get and List on rules will always return 'summary' as the target. If you are expecting 'description' please change your automation code to expect 'summary' instead.<br /><br />Scoped OAuth requires: `event_rules.write`<br />

```sql
EXEC pagerduty.rulesets.rules.update_ruleset_event_rule 
@id='{{ id }}' --required, 
@rule_id='{{ rule_id }}' --required, 
@Accept='{{ Accept }}', 
@Content-Type='{{ Content-Type }}' 
@@json=
'{
"rule": "{{ rule }}", 
"rule_id": "{{ rule_id }}"
}'
;
```
</TabItem>
</Tabs>
