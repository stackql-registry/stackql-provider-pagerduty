--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.incident_workflows.instances" /></td></tr>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-incident_workflow_instance"><code>incident_workflow_instance</code></a></td>
    <td></td>
    <td>Start an Instance of an Incident Workflow. Sometimes referred to as "triggering a workflow on an incident."&lt;br /&gt;&lt;br /&gt;An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows:instances.write`&lt;br /&gt;</td>
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

Start an Instance of an Incident Workflow. Sometimes referred to as "triggering a workflow on an incident."&lt;br /&gt;&lt;br /&gt;An Incident Workflow is a sequence of configurable Steps and associated Triggers that can execute automated Actions for a given Incident.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `incident_workflows:instances.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.incident_workflows.instances (
incident_workflow_instance,
id
)
SELECT 
'{{ incident_workflow_instance }}' /* required */,
'{{ id }}'
RETURNING
incident_workflow_instance
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instances
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the instances resource.
    - name: incident_workflow_instance
      value:
        id: "{{ id }}"
        incident:
          id: "{{ id }}"
          type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>
