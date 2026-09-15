--- 
title: oauth_delegations
hide_title: false
hide_table_of_contents: false
keywords:
  - oauth_delegations
  - oauth_delegations
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

Creates, updates, deletes, gets or lists an <code>oauth_delegations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="oauth_delegations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="pagerduty.oauth_delegations.oauth_delegations" /></td></tr>
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
    <td><a href="#revoke"><CopyableCode code="revoke" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Delete all OAuth delegations as per provided query parameters.&lt;br /&gt;&lt;br /&gt;An OAuth delegation represents an instance of a user or account's authorization to an app (via OAuth) to access their PagerDuty account.&lt;br /&gt;Common apps include the PagerDuty mobile app, Slack, Microsoft Teams, and third-party apps. It also represents a user session in the PagerDuty web app.&lt;br /&gt;&lt;br /&gt;Deleting an OAuth delegation will revoke that instance of an app's access to that user or account.&lt;br /&gt;To grant access again, reauthorization/reauthentication will be required.&lt;br /&gt;&lt;br /&gt;This endpoint supports deleting mobile app OAuth delegations for a given user, which is equivalent to signing users out of the mobile app. It also supports deleting delegations of type web, which is equivalent to signing users out of the web app.&lt;br /&gt;&lt;br /&gt;This is a synchronous API.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `oauth_delegations.write`&lt;br /&gt;</td>
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
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of OAuth delegations this request should target. Allowed values are 'mobile' (to sign users out of the mobile app) and 'web' (to sign users out of the web app). You can pass one or more types in, separated by commas (e.g., `type=web,mobile`).</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user for whom this request is applicable.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="revoke"
    values={[
        { label: 'revoke', value: 'revoke' }
    ]}
>
<TabItem value="revoke">

Delete all OAuth delegations as per provided query parameters.&lt;br /&gt;&lt;br /&gt;An OAuth delegation represents an instance of a user or account's authorization to an app (via OAuth) to access their PagerDuty account.&lt;br /&gt;Common apps include the PagerDuty mobile app, Slack, Microsoft Teams, and third-party apps. It also represents a user session in the PagerDuty web app.&lt;br /&gt;&lt;br /&gt;Deleting an OAuth delegation will revoke that instance of an app's access to that user or account.&lt;br /&gt;To grant access again, reauthorization/reauthentication will be required.&lt;br /&gt;&lt;br /&gt;This endpoint supports deleting mobile app OAuth delegations for a given user, which is equivalent to signing users out of the mobile app. It also supports deleting delegations of type web, which is equivalent to signing users out of the web app.&lt;br /&gt;&lt;br /&gt;This is a synchronous API.&lt;br /&gt;&lt;br /&gt;Scoped OAuth requires: `oauth_delegations.write`&lt;br /&gt;

```sql
EXEC pagerduty.oauth_delegations.oauth_delegations.revoke 
@user_id='{{ user_id }}' --required, 
@type='{{ type }}' --required
;
```
</TabItem>
</Tabs>
