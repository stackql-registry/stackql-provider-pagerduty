--- 
title: trigger_services
hide_title: false
hide_table_of_contents: false
keywords:
  - trigger_services
  - incident_workflows
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

Creates, updates, deletes, gets or lists a <code>trigger_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trigger_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incident_workflows.trigger_services" /></td></tr>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Associate a Service with an existing Incident Workflow Trigger&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-trigger_id"><code>trigger_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a></td>
    <td></td>
    <td>Remove a an existing Service from an Incident Workflow Trigger&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.write`&lt;br /&gt;</td>
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
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>Identifier for the Service</td>
</tr>
<tr id="parameter-trigger_id">
    <td><CopyableCode code="trigger_id" /></td>
    <td><code>string</code></td>
    <td>Identifier for the Trigger</td>
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

Associate a Service with an existing Incident Workflow Trigger&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.incident_workflows.trigger_services (
service,
id
)
SELECT 
'{{ service }}' /* required */,
'{{ id }}'
RETURNING
trigger
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: trigger_services
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the trigger_services resource.
    - name: service
      value:
        id: "{{ id }}"
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

Remove a an existing Service from an Incident Workflow Trigger&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.incident_workflows.trigger_services
WHERE trigger_id = '{{ trigger_id }}' --required
AND service_id = '{{ service_id }}' --required
;
```
</TabItem>
</Tabs>
