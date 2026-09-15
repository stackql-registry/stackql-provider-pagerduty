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
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.rulesets.rules" /></td></tr>
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
    <td>When an event matches this rule, the actions that will be taken to change the resulting alert and incident.</td>
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
    <td>&#91;Early Access&#93; Populate variables from event payloads and use those variables in other event actions.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td>When an event matches this rule, the actions that will be taken to change the resulting alert and incident.</td>
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
    <td>&#91;Early Access&#93; Populate variables from event payloads and use those variables in other event actions.</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Get an Event Rule.&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### End-of-life&lt;br /&gt;&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you &#91;migrate to Event Orchestration&#93;(https:​//support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.&lt;br /&gt;&lt;br /&gt;Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)&lt;br /&gt;&lt;br /&gt;Note: Create and Update on rules will accept 'description' or 'summary' interchangeably as an extraction action target. Get and List on rules will always return 'summary' as the target. If you are expecting 'description' please change your automation code to expect 'summary' instead.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_rules.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td>List all Event Rules on a Ruleset.&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### End-of-life&lt;br /&gt;&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you &#91;migrate to Event Orchestration&#93;(https:​//support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.&lt;br /&gt;&lt;br /&gt;Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)&lt;br /&gt;&lt;br /&gt;Note: Create and Update on rules will accept 'description' or 'summary' interchangeably as an extraction action target. Get and List on rules will always return 'summary' as the target. If you are expecting 'description' please change your automation code to expect 'summary' instead.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_rules.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-rule"><code>rule</code></a></td>
    <td></td>
    <td>Create a new Event Rule.&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### End-of-life&lt;br /&gt;&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you &#91;migrate to Event Orchestration&#93;(https:​//support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.&lt;br /&gt;&lt;br /&gt;Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)&lt;br /&gt;&lt;br /&gt;Note: Create and Update on rules will accept 'description' or 'summary' interchangeably as an extraction action target. Get and List on rules will always return 'summary' as the target. If you are expecting 'description' please change your automation code to expect 'summary' instead.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_rules.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Update an Event Rule. Note that the endpoint supports partial updates, so any number of the writable fields can be provided.&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### End-of-life&lt;br /&gt;&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you &#91;migrate to Event Orchestration&#93;(https:​//support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.&lt;br /&gt;&lt;br /&gt;Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)&lt;br /&gt;&lt;br /&gt;Note: Create and Update on rules will accept 'description' or 'summary' interchangeably as an extraction action target. Get and List on rules will always return 'summary' as the target. If you are expecting 'description' please change your automation code to expect 'summary' instead.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_rules.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Delete an Event Rule.&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### End-of-life&lt;br /&gt;&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you &#91;migrate to Event Orchestration&#93;(https:​//support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.&lt;br /&gt;&lt;br /&gt;Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_rules.write`&lt;br /&gt;</td>
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

Get an Event Rule.&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### End-of-life&lt;br /&gt;&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you &#91;migrate to Event Orchestration&#93;(https:​//support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.&lt;br /&gt;&lt;br /&gt;Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)&lt;br /&gt;&lt;br /&gt;Note: Create and Update on rules will accept 'description' or 'summary' interchangeably as an extraction action target. Get and List on rules will always return 'summary' as the target. If you are expecting 'description' please change your automation code to expect 'summary' instead.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_rules.read`&lt;br /&gt;

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
;
```
</TabItem>
<TabItem value="list">

List all Event Rules on a Ruleset.&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### End-of-life&lt;br /&gt;&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you &#91;migrate to Event Orchestration&#93;(https:​//support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.&lt;br /&gt;&lt;br /&gt;Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)&lt;br /&gt;&lt;br /&gt;Note: Create and Update on rules will accept 'description' or 'summary' interchangeably as an extraction action target. Get and List on rules will always return 'summary' as the target. If you are expecting 'description' please change your automation code to expect 'summary' instead.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_rules.read`&lt;br /&gt;

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
AND limit = '{{ limit }}'
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

Create a new Event Rule.&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### End-of-life&lt;br /&gt;&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you &#91;migrate to Event Orchestration&#93;(https:​//support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.&lt;br /&gt;&lt;br /&gt;Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)&lt;br /&gt;&lt;br /&gt;Note: Create and Update on rules will accept 'description' or 'summary' interchangeably as an extraction action target. Get and List on rules will always return 'summary' as the target. If you are expecting 'description' please change your automation code to expect 'summary' instead.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_rules.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.rulesets.rules (
rule,
id
)
SELECT 
'{{ rule }}' /* required */,
'{{ id }}'
RETURNING
rule
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rules
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the rules resource.
    - name: rule
      value:
        id: "{{ id }}"
        self: "{{ self }}"
        disabled: {{ disabled }}
        conditions:
          operator: "{{ operator }}"
          subconditions:
            - operator: "{{ operator }}"
              parameters:
                path: "{{ path }}"
                value: "{{ value }}"
                options: "{{ options }}"
        time_frame:
          active_between:
            start_time: {{ start_time }}
            end_time: {{ end_time }}
          scheduled_weekly:
            start_time: {{ start_time }}
            duration: {{ duration }}
            timezone: "{{ timezone }}"
            weekdays:
              - {{ weekdays }}
        variables:
          - type: "{{ type }}"
            name: "{{ name }}"
            parameters:
              value: "{{ value }}"
              path: "{{ path }}"
        position: {{ position }}
        catch_all: {{ catch_all }}
        actions:
          annotate:
            value: "{{ value }}"
          event_action:
            value: "{{ value }}"
          extractions: "{{ extractions }}"
          priority:
            value: "{{ value }}"
          severity:
            value: "{{ value }}"
          suppress:
            value: {{ value }}
            threshold_value: {{ threshold_value }}
            threshold_time_unit: "{{ threshold_time_unit }}"
            threshold_time_amount: {{ threshold_time_amount }}
          suspend:
            value: {{ value }}
          route:
            value: "{{ value }}"
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

Update an Event Rule. Note that the endpoint supports partial updates, so any number of the writable fields can be provided.&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### End-of-life&lt;br /&gt;&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you &#91;migrate to Event Orchestration&#93;(https:​//support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.&lt;br /&gt;&lt;br /&gt;Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)&lt;br /&gt;&lt;br /&gt;Note: Create and Update on rules will accept 'description' or 'summary' interchangeably as an extraction action target. Get and List on rules will always return 'summary' as the target. If you are expecting 'description' please change your automation code to expect 'summary' instead.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_rules.write`&lt;br /&gt;

```sql
UPDATE pagerduty.rulesets.rules
SET 
rule = '{{ rule }}',
rule_id = '{{ rule_id }}'
WHERE 
id = '{{ id }}' --required
AND rule_id = '{{ rule_id }}' --required
AND rule_id = '{{ rule_id }}' --required
RETURNING
rule;
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

Delete an Event Rule.&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&gt; ### End-of-life&lt;br /&gt;&gt; Rulesets and Event Rules will end-of-life soon. We highly recommend that you &#91;migrate to Event Orchestration&#93;(https:​//support.pagerduty.com/docs/migrate-to-event-orchestration) as soon as possible so you can take advantage of the new functionality, such as improved UI, rule creation, APIs and Terraform support, advanced conditions, and rule nesting.&lt;br /&gt;&lt;br /&gt;Rulesets allow you to route events to an endpoint and create collections of Event Rules, which define sets of actions to take based on event content.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#rulesets)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `event_rules.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.rulesets.rules
WHERE id = '{{ id }}' --required
AND rule_id = '{{ rule_id }}' --required
;
```
</TabItem>
</Tabs>
