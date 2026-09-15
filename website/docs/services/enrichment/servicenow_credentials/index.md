--- 
title: servicenow_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - servicenow_credentials
  - enrichment
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

Creates, updates, deletes, gets or lists a <code>servicenow_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="servicenow_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.enrichment.servicenow_credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

The requested ServiceNow credentials. The password is never returned.

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
    <td>Base32-encoded UUID v7 (26 uppercase alphanumeric characters) identifying the credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the credentials were created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the credentials were deleted, or `null` if they have not been deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_endpoint" /></td>
    <td><code>string</code></td>
    <td>The ServiceNow instance URL (for example, `https:​//your-instance.service-now.com`).</td>
</tr>
<tr>
    <td><CopyableCode code="password" /></td>
    <td><code>string</code></td>
    <td>The ServiceNow password. Only accepted in requests and never returned in responses.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the credentials were last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>The ServiceNow username used to authenticate API requests. The user must have read access to the configured CMDB tables.</td>
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
    <td><a href="#parameter-credentials_id"><code>credentials_id</code></a></td>
    <td></td>
    <td>Retrieves the ServiceNow credentials by ID. The password is never returned.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-credentials"><code>credentials</code></a></td>
    <td></td>
    <td>Creates the ServiceNow API credentials used to authenticate synchronization and test requests. Only one credential set is allowed per account, and it is shared across the account's ServiceNow integration. The password is never returned in responses.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-credentials_id"><code>credentials_id</code></a>, <a href="#parameter-credentials"><code>credentials</code></a></td>
    <td></td>
    <td>Updates the ServiceNow credentials. Supports partial updates — only the fields provided in the request are changed. If a password is provided, it replaces the stored password. The password is never returned.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-credentials_id"><code>credentials_id</code></a></td>
    <td></td>
    <td>Deletes the ServiceNow credentials. Credentials cannot be deleted while they are associated with an existing ServiceNow integration; delete the integration first.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;</td>
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
<tr id="parameter-credentials_id">
    <td><CopyableCode code="credentials_id" /></td>
    <td><code>string</code></td>
    <td>Base32-encoded UUID v7 (26 uppercase alphanumeric characters) identifying the ServiceNow credentials.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Retrieves the ServiceNow credentials by ID. The password is never returned.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.read`&lt;br /&gt;

```sql
SELECT
id,
created_at,
deleted_at,
instance_endpoint,
password,
updated_at,
user
FROM pagerduty.enrichment.servicenow_credentials
WHERE credentials_id = '{{ credentials_id }}' -- required
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

Creates the ServiceNow API credentials used to authenticate synchronization and test requests. Only one credential set is allowed per account, and it is shared across the account's ServiceNow integration. The password is never returned in responses.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.enrichment.servicenow_credentials (
credentials
)
SELECT 
'{{ credentials }}' /* required */
RETURNING
credentials
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: servicenow_credentials
  props:
    - name: credentials
      value:
        instance_endpoint: "{{ instance_endpoint }}"
        user: "{{ user }}"
        password: "{{ password }}"
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

Updates the ServiceNow credentials. Supports partial updates — only the fields provided in the request are changed. If a password is provided, it replaces the stored password. The password is never returned.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;

```sql
UPDATE pagerduty.enrichment.servicenow_credentials
SET 
credentials = '{{ credentials }}'
WHERE 
credentials_id = '{{ credentials_id }}' --required
AND credentials = '{{ credentials }}' --required
RETURNING
credentials;
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

Deletes the ServiceNow credentials. Credentials cannot be deleted while they are associated with an existing ServiceNow integration; delete the integration first.&lt;br /&gt;&lt;br /&gt;&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `contextual_data.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.enrichment.servicenow_credentials
WHERE credentials_id = '{{ credentials_id }}' --required
;
```
</TabItem>
</Tabs>
