# Form Transaction

Form Transaction is a document or interface used to capture and process specific business transactions like purchasing, sales and others.

Helps maintain a record of transactions for auditing, tracking, and reporting purposes.

## Saving User ID

Saving the user ID when inserting new data into a database is important for several reasons:

- Data Ownership: Associating data with a specific user ID helps identify who created or owns that data. This is essential for accountability and data integrity.
- Access Control: By linking data to user IDs, you can implement permission checks to ensure that only authorized users can access or modify that data.
- Data Retrieval: Storing the user ID allows for easy querying and retrieval of a user's data, enhancing the efficiency of data management.
- User Activity Tracking: Keeping track of user IDs helps in monitoring user activity and generating analytics, which can inform future decisions and improve user experiences.
- Relationships: In relational databases, storing user IDs can facilitate relationships between different tables (e.g., linking users to their posts, comments, or transactions).
- Audit Trails: Storing the user ID creates a history of actions, which is important for auditing and troubleshooting.
- By including the user ID in your database entries, you enhance data organization, security, and overall application functionality.


### State of create form

```ts
created_by: {
  lookup_from: string 
  _id: string 
  label: string 
  email: string
}
created_date: Date
```

- `created_by`: authenticated user who perform create form
  - `lookup_from`: collection `name` reference
  - `_id`: collection `_id` reference
  - `label`: printed user label
- `created_date`: the date of created form

### State of request delete form

Requests to delete can only be made when the user does not have access to permission to delete data on the feature

```ts
request_delete_by: { 
  lookup_from: string
  _id: string
  label: string
  email: string
} 
request_delete_to: { 
  lookup_from: string
  _id: string
  label: string
  email: string
} 
request_delete_date: string
request_delete_reason: string
request_delete_status: 'pending' | 'approved' | 'rejected'
```

- `request_delete_by`: authenticated user who perform create form
- `request_delete_by.lookup_from`: collection `name` reference
- `request_delete_by._id`: collection `_id` reference
- `request_delete_by.label`: printed user label
- `request_delete_to`: authenticated user who perform create form
- `request_delete_to.lookup_from`: collection `name` reference
- `request_delete_to._id`: collection `_id` reference
- `request_delete_to.label`: printed user label
- `request_delete_date`: the date of created form
- `request_delete_reason`: the date of created form
- `request_delete_status`: when the user
  - `pending` is the default value when request delete. 
  - `approved` when request delete approved then the form will be canceled
  - `rejected` when request delete rejected then ...



- State of delete form

```ts
deleted_by: {
  lookup_from: string
  _id: string
  label: string
  email: string
}
deleted_reason: string
deleted_date: Date
is_deleted: boolean
```

- State of revision
  - `revised_count` start from 0 it means this is original form and add increment 1 each updating form
  - `is_revised` is true if this form is revised

```ts
revised_count: number
is_revised: boolean
```

- State of approval

```ts
approval_status: 'pending' | 'approved' | 'rejected'
approval_date: Date
approval_reason: string // only if approval status is rejected
approval_to: {
  lookup_from: string
  _id: string
  label: string
  email: string
}
```

- State of form

```ts
form_status: 'pending' | 'approved' | 'rejected'
form_date: Date
```


## Creating

Each new form should record authenticated user who perform this action.

```ts
created_by: { // [!code ++]
  lookup_from: // [!code ++]
  _id: // [!code ++]
  label: // [!code ++]
  email: // [!code ++]
} // [!code ++]
created_date: // [!code ++]
// state of revision
revised_count: 0 // [!code ++]
is_revised: false // [!code ++]
```

## Updating

Every update insert new data into collection

`revised_count` increment each updating

```ts
updated_by: { // [!code ++]
  lookup_from: string // [!code ++]
  _id: string // [!code ++]
  label: string // [!code ++]
  email: string // [!code ++]
} // [!code ++]
updated_date: Date // [!code ++]
is_revised: true // [!code ++]
```

new Form

```ts
revised_count: 1
is_revised: false
```



## Deleting

### Has Delete Permission

```ts
deleted_date: '2024-01-01T00:00:00.000+00:00' // [!code ++]
deleted_by: { // [!code ++]
  _id: '66f97eff3ba0acf8d0a91fab' // [!code ++]
  lookup_from: 'users' // [!code ++]
  label: 'John Doe' // [!code ++]
  email: 'johndoe@example.com' // [!code ++]
} // [!code ++]
deleted_reason: 'wrong input' // [!code ++]
is_deleted: true // [!code ++]
```

### Doesn't have delete Ppermission

User should ask approval to authorized user

#### Example

- **Step 1:** Request Delete

```ts
request_delete_by: { // [!code ++]
  _id: '66f97eff3ba0acf8d0a91fab' // [!code ++]
  lookup_from: 'users' // [!code ++]
  label: 'John Doe' // [!code ++]
  email: 'johndoe@example.com' // [!code ++]
} // [!code ++]
request_delete_to: { // [!code ++]
  _id: '66f97eff3ba0acf8d0a91fab' // [!code ++]
  lookup_from: 'users' // [!code ++]
  label: 'Jane Doe' // [!code ++]
  email: 'janedoe@example.com' // [!code ++]
} // [!code ++]
request_delete_date: '2024-01-01T00:00:00.000+00:00' // [!code ++]
request_delete_reason: 'wrong input' // [!code ++]
request_delete_status: 'pending' // [!code ++]
is_deleted: false // [!code ++]
```

- **Step 2 (Option A):** Approve Request

```ts
is_deleted: false // [!code --]
is_deleted: true // [!code ++]
deleted_date: '2024-01-01T00:00:00.000+00:00' // [!code ++]
deleted_by: { // [!code ++]
  _id: '66f97eff3ba0acf8d0a91fab' // [!code ++]
  lookup_from: 'users' // [!code ++]
  label: 'John Doe' // [!code ++]
  email: 'johndoe@example.com' // [!code ++]
} // [!code ++]
deleted_reason: 'wrong input' // [!code ++]
is_deleted: true // [!code ++]
```

- **Step 2 (Option B):** Reject Request

```ts
request_delete_status: 'pending' // [!code --]
request_delete_status: 'rejected' // [!code ++]
request_delete_response_date: '2024-01-01T00:00:00.000+00:00' // [!code ++]
request_delete_response_status: 'idk' // [!code ++]
```

## Approval

Some form need approval to be able to
