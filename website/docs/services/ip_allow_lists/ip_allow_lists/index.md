--- 
title: ip_allow_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_allow_lists
  - ip_allow_lists
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

Creates, updates, deletes, gets or lists an <code>ip_allow_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_allow_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.ip_allow_lists.ip_allow_lists" /></td></tr>
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

IP allow list retrieved successfully.

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
    <td>Unique identifier for the allow list (e.g. `AGIS47HYOV6BDODBTMQKMPQPHU`). </td>
</tr>
<tr>
    <td><CopyableCode code="cidr_entries" /></td>
    <td><code>array</code></td>
    <td>The CIDR ranges that are allowed when the allow list is `enabled`. Must be non-empty when `state` is `enabled`. </td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Whether the allow list is enforced for the account. When `enabled`, only requests from IPs matching one of the `cidr_entries` are permitted to access the subdomain. When `disabled`, the allow list is stored but not enforced.  (enabled, disabled)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. (ip_allow_list) (default: ip_allow_list)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

IP allow lists retrieved successfully.

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
    <td>Unique identifier for the allow list (e.g. `AGIS47HYOV6BDODBTMQKMPQPHU`). </td>
</tr>
<tr>
    <td><CopyableCode code="cidr_entries" /></td>
    <td><code>array</code></td>
    <td>The CIDR ranges that are allowed when the allow list is `enabled`. Must be non-empty when `state` is `enabled`. </td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Whether the allow list is enforced for the account. When `enabled`, only requests from IPs matching one of the `cidr_entries` are permitted to access the subdomain. When `disabled`, the allow list is stored but not enforced.  (enabled, disabled)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A string that determines the schema of the object. (ip_allow_list) (default: ip_allow_list)</td>
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
    <td><a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td>&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. You must pass the `X-EARLY-ACCESS: ip-allow-lists` header on every request, and your account must be enrolled in the IP Allow Lists Early Access program. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Return the IP allow list with the given `id`.&lt;br /&gt;&lt;br /&gt;Only Account Owners, Global Admins, and Account API Keys can call this endpoint.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `ip_allow_lists.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td>&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. You must pass the `X-EARLY-ACCESS: ip-allow-lists` header on every request, and your account must be enrolled in the IP Allow Lists Early Access program. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Return all IP allow lists for the account.&lt;br /&gt;&lt;br /&gt;Only Account Owners, Global Admins, and Account API Keys can call this endpoint.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `ip_allow_lists.read`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ip_allow_list"><code>ip_allow_list</code></a></td>
    <td><a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td>&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. You must pass the `X-EARLY-ACCESS: ip-allow-lists` header on every request, and your account must be enrolled in the IP Allow Lists Early Access program. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Create the account's IP allow list.&lt;br /&gt;&lt;br /&gt;Only Account Owners, Global Admins, and Account API Keys can call this endpoint.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `ip_allow_lists.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-ip_allow_list"><code>ip_allow_list</code></a></td>
    <td><a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td>&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. You must pass the `X-EARLY-ACCESS: ip-allow-lists` header on every request, and your account must be enrolled in the IP Allow Lists Early Access program. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Update the IP allow list with the given `id`. The request body fully replaces the writable fields.&lt;br /&gt;&lt;br /&gt;Only Account Owners, Global Admins, and Account API Keys can call this endpoint.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `ip_allow_lists.write`&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-X-EARLY-ACCESS"><code>X-EARLY-ACCESS</code></a></td>
    <td>&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. You must pass the `X-EARLY-ACCESS: ip-allow-lists` header on every request, and your account must be enrolled in the IP Allow Lists Early Access program. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Delete the IP allow list with the given `id`. Subsequent `GET` and `PUT` requests for the same `id` will return `404`. The list is no longer enforced once deleted.&lt;br /&gt;&lt;br /&gt;Only Account Owners, Global Admins, and Account API Keys can call this endpoint.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `ip_allow_lists.write`&lt;br /&gt;</td>
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
<tr id="parameter-X-EARLY-ACCESS">
    <td><CopyableCode code="X-EARLY-ACCESS" /></td>
    <td><code>string</code></td>
    <td>This API is currently in Early Access. You __MUST__ pass in this header with the value `ip-allow-lists`, and your account must be enrolled in the IP Allow Lists Early Access program. Contact your PagerDuty account team to request access.</td>
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

&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. You must pass the `X-EARLY-ACCESS: ip-allow-lists` header on every request, and your account must be enrolled in the IP Allow Lists Early Access program. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Return the IP allow list with the given `id`.&lt;br /&gt;&lt;br /&gt;Only Account Owners, Global Admins, and Account API Keys can call this endpoint.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `ip_allow_lists.read`&lt;br /&gt;

```sql
SELECT
id,
cidr_entries,
state,
type
FROM pagerduty.ip_allow_lists.ip_allow_lists
WHERE id = '{{ id }}' -- required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}'
;
```
</TabItem>
<TabItem value="list">

&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. You must pass the `X-EARLY-ACCESS: ip-allow-lists` header on every request, and your account must be enrolled in the IP Allow Lists Early Access program. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Return all IP allow lists for the account.&lt;br /&gt;&lt;br /&gt;Only Account Owners, Global Admins, and Account API Keys can call this endpoint.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `ip_allow_lists.read`&lt;br /&gt;

```sql
SELECT
id,
cidr_entries,
state,
type
FROM pagerduty.ip_allow_lists.ip_allow_lists
WHERE X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}'
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

&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. You must pass the `X-EARLY-ACCESS: ip-allow-lists` header on every request, and your account must be enrolled in the IP Allow Lists Early Access program. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Create the account's IP allow list.&lt;br /&gt;&lt;br /&gt;Only Account Owners, Global Admins, and Account API Keys can call this endpoint.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `ip_allow_lists.write`&lt;br /&gt;

```sql
INSERT INTO pagerduty.ip_allow_lists.ip_allow_lists (
ip_allow_list,
X-EARLY-ACCESS
)
SELECT 
'{{ ip_allow_list }}' /* required */,
'{{ X-EARLY-ACCESS }}'
RETURNING
ip_allow_list
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ip_allow_lists
  props:
    - name: ip_allow_list
      description: |
        An IP allow list restricts access to a PagerDuty account's subdomain to a set
        of IPv4 CIDR ranges. Enforcement currently applies to web and mobile
        application traffic.
      value:
        id: "{{ id }}"
        type: "{{ type }}"
        state: "{{ state }}"
        cidr_entries:
          - cidr: "{{ cidr }}"
            description: "{{ description }}"
    - name: X-EARLY-ACCESS
      value: "{{ X-EARLY-ACCESS }}"
      description: This API is currently in Early Access. You __MUST__ pass in this header with the value \`ip-allow-lists\`, and your account must be enrolled in the IP Allow Lists Early Access program. Contact your PagerDuty account team to request access.
      description: This API is currently in Early Access. You __MUST__ pass in this header with the value \`ip-allow-lists\`, and your account must be enrolled in the IP Allow Lists Early Access program. Contact your PagerDuty account team to request access.
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

&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. You must pass the `X-EARLY-ACCESS: ip-allow-lists` header on every request, and your account must be enrolled in the IP Allow Lists Early Access program. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Update the IP allow list with the given `id`. The request body fully replaces the writable fields.&lt;br /&gt;&lt;br /&gt;Only Account Owners, Global Admins, and Account API Keys can call this endpoint.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `ip_allow_lists.write`&lt;br /&gt;

```sql
UPDATE pagerduty.ip_allow_lists.ip_allow_lists
SET 
ip_allow_list = '{{ ip_allow_list }}'
WHERE 
id = '{{ id }}' --required
AND ip_allow_list = '{{ ip_allow_list }}' --required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS}}'
RETURNING
ip_allow_list;
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

&lt;!-- theme: warning --&gt;&lt;br /&gt;&lt;br /&gt;&gt; ### Early Access&lt;br /&gt;&gt; This API is in Early Access and may change at any time. You must pass the `X-EARLY-ACCESS: ip-allow-lists` header on every request, and your account must be enrolled in the IP Allow Lists Early Access program. Contact your PagerDuty account team to request access.&lt;br /&gt;&lt;br /&gt;Delete the IP allow list with the given `id`. Subsequent `GET` and `PUT` requests for the same `id` will return `404`. The list is no longer enforced once deleted.&lt;br /&gt;&lt;br /&gt;Only Account Owners, Global Admins, and Account API Keys can call this endpoint.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `ip_allow_lists.write`&lt;br /&gt;

```sql
DELETE FROM pagerduty.ip_allow_lists.ip_allow_lists
WHERE id = '{{ id }}' --required
AND X-EARLY-ACCESS = '{{ X-EARLY-ACCESS }}'
;
```
</TabItem>
</Tabs>
