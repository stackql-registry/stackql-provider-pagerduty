--- 
title: status_updates
hide_title: false
hide_table_of_contents: false
keywords:
  - status_updates
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

Creates, updates, deletes, gets or lists a <code>status_updates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="status_updates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incidents.status_updates" /></td></tr>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-message"><code>message</code></a></td>
    <td><a href="#parameter-From"><code>From</code></a></td>
    <td>Create a new status update for the specified incident. Optionally pass `subject` and `html_message` properties in the request body to override the email notification that gets sent.&lt;br /&gt;&lt;br /&gt;An incident represents a problem or an issue that needs to be addressed and resolved.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.write`&lt;br /&gt;</td>
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
<tr id="parameter-From">
    <td><CopyableCode code="From" /></td>
    <td><code>string (email)</code></td>
    <td>The email address of a valid user associated with the account making the request.</td>
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

Create a new status update for the specified incident. Optionally pass `subject` and `html_message` properties in the request body to override the email notification that gets sent.&lt;br /&gt;&lt;br /&gt;An incident represents a problem or an issue that needs to be addressed and resolved.&lt;br /&gt;&lt;br /&gt;For more information see the &#91;API Concepts Document&#93;(https:​//developer.pagerduty.com/api-reference/a47605517c19a-api-concepts#incidents)&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incidents.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.incidents.status_updates (
message,
subject,
html_message,
id,
"From"
)
SELECT 
'{{ message }}' /* required */,
'{{ subject }}',
'{{ html_message }}',
'{{ id }}',
'{{ From }}'
RETURNING
status_update
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: status_updates
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the status_updates resource.
    - name: message
      value: "{{ message }}"
      description: |
        The message to be posted as a status update.
    - name: subject
      value: "{{ subject }}"
      description: |
        The subject to be sent for the custom html email status update. Required if sending custom html email.
    - name: html_message
      value: "{{ html_message }}"
      description: |
        The html content to be sent for the custom html email status update. Required if sending custom html email.
    - name: From
      value: "{{ From }}"
      description: The email address of a valid user associated with the account making the request.
      description: The email address of a valid user associated with the account making the request.
`}</CodeBlock>

</TabItem>
</Tabs>
