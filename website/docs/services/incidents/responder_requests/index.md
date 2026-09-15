--- 
title: responder_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - responder_requests
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

Creates, updates, deletes, gets or lists a <code>responder_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="responder_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incidents.responder_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-requester_id"><code>requester_id</code></a>, <a href="#parameter-message"><code>message</code></a>, <a href="#parameter-responder_request_targets"><code>responder_request_targets</code></a></td>
    <td></td>
    <td>Send a new responder request for the specified incident. This endpoint requires the account to have access to the &#91;responder requests&#93;(https:​//support.pagerduty.com/main/docs/add-responders) feature.&lt;br /&gt;&lt;br /&gt;**Account Ability Requirement**: The account must have the `coordinated_responding` ability. Returns 402 Payment Required if the ability is missing. You can use the List Abilities API to check account abilities.&lt;br /&gt;&lt;br /&gt;A user or an escalation policy can be requested. The responder targets will be notified via their high urgency notification rules, until the target user has either accepted or declined the request.&lt;br /&gt;Previous responder requests for a given target can be cancelled (preventing them from further notifying or escalating), with the Cancel Responder Requests endpoint.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-requester_id"><code>requester_id</code></a>, <a href="#parameter-responder_request_targets"><code>responder_request_targets</code></a></td>
    <td></td>
    <td>Cancel pending responder requests for the specified incident.&lt;br /&gt;&lt;br /&gt;This endpoint allows you to cancel responder requests for specified targets that are in a pending state. Only responders who have not yet joined or declined can be cancelled. This endpoint requires the account to have access to the &#91;responder requests&#93;(https:​//support.pagerduty.com/main/docs/add-responders) feature.&lt;br /&gt;&lt;br /&gt;**Account Ability Requirement**: The account must have the `coordinated_responding` ability. Returns 402 Payment Required if the ability is missing. You can use the List Abilities API to check account abilities.&lt;br /&gt;&lt;br /&gt;**State Constraints**: Only responders in the `pending` state can be cancelled. Responders who have already `joined` or `declined` are not affected (the result will indicate their current state).&lt;br /&gt;&lt;br /&gt;**User vs Escalation Policy Behavior**:&lt;br /&gt;- **Users**: Direct cancellation, updates state to `user_cancelled`, stops notifications&lt;br /&gt;- **Escalation Policies**: Stops the escalation process, updates state of all pending users from that escalation policy to `user_cancelled` and stops notifications&lt;br /&gt;&lt;br /&gt;**Result Values**:&lt;br /&gt;- `cancelled`: Successfully cancelled&lt;br /&gt;- `joined`: User already joined (not cancelled)&lt;br /&gt;- `declined`: User already declined (not cancelled)&lt;br /&gt;- `not_found`: Target not found or not part of any responder request&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.write`&lt;br /&gt;</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Send a new responder request for the specified incident. This endpoint requires the account to have access to the &#91;responder requests&#93;(https:​//support.pagerduty.com/main/docs/add-responders) feature.&lt;br /&gt;&lt;br /&gt;**Account Ability Requirement**: The account must have the `coordinated_responding` ability. Returns 402 Payment Required if the ability is missing. You can use the List Abilities API to check account abilities.&lt;br /&gt;&lt;br /&gt;A user or an escalation policy can be requested. The responder targets will be notified via their high urgency notification rules, until the target user has either accepted or declined the request.&lt;br /&gt;Previous responder requests for a given target can be cancelled (preventing them from further notifying or escalating), with the Cancel Responder Requests endpoint.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.incidents.responder_requests (
requester_id,
message,
responder_request_targets,
id
)
SELECT 
'{{ requester_id }}' /* required */,
'{{ message }}' /* required */,
'{{ responder_request_targets }}' /* required */,
'{{ id }}'
RETURNING
responder_request
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: responder_requests
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the responder_requests resource.
    - name: requester_id
      value: "{{ requester_id }}"
      description: |
        The user id of the requester.
    - name: message
      value: "{{ message }}"
      description: |
        The message sent with the responder request.
    - name: responder_request_targets
      value: "{{ responder_request_targets }}"
      description: |
        The array of targets the responder request is sent to.
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="cancel">

Cancel pending responder requests for the specified incident.&lt;br /&gt;&lt;br /&gt;This endpoint allows you to cancel responder requests for specified targets that are in a pending state. Only responders who have not yet joined or declined can be cancelled. This endpoint requires the account to have access to the &#91;responder requests&#93;(https:​//support.pagerduty.com/main/docs/add-responders) feature.&lt;br /&gt;&lt;br /&gt;**Account Ability Requirement**: The account must have the `coordinated_responding` ability. Returns 402 Payment Required if the ability is missing. You can use the List Abilities API to check account abilities.&lt;br /&gt;&lt;br /&gt;**State Constraints**: Only responders in the `pending` state can be cancelled. Responders who have already `joined` or `declined` are not affected (the result will indicate their current state).&lt;br /&gt;&lt;br /&gt;**User vs Escalation Policy Behavior**:&lt;br /&gt;- **Users**: Direct cancellation, updates state to `user_cancelled`, stops notifications&lt;br /&gt;- **Escalation Policies**: Stops the escalation process, updates state of all pending users from that escalation policy to `user_cancelled` and stops notifications&lt;br /&gt;&lt;br /&gt;**Result Values**:&lt;br /&gt;- `cancelled`: Successfully cancelled&lt;br /&gt;- `joined`: User already joined (not cancelled)&lt;br /&gt;- `declined`: User already declined (not cancelled)&lt;br /&gt;- `not_found`: Target not found or not part of any responder request&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.write`&lt;br /&gt;

```sql
EXEC pagerduty.incidents.responder_requests.cancel 
@id='{{ id }}' --required 
@@json=
'{
"requester_id": "{{ requester_id }}", 
"responder_request_targets": "{{ responder_request_targets }}"
}'
;
```
</TabItem>
</Tabs>
