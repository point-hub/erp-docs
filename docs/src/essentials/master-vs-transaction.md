# Master Data vs Transaction Data

In data management, master data and transaction data represent two distinct categories of data, each with its own purpose and characteristics. Here’s a breakdown of both:


| Aspect              | Master Data                          | Transaction Data                            |
| ------------------- | ------------------------------------ | ------------------------------------------- |
| Nature              | Static, relatively unchanging        | Dynamic, frequently changing                |
| Frequency of Update | Rarely changes, updated occasionally | Updated frequently, reflects daily activity |
| Scope               | Represents key business entities     | Reflects business events or actions         |
| Example             | Suppliers Customers, Items           | Purchasing, Sales, Payments                 |


## Master

Master data refers to the critical business information that is essential to the operation of an organization. It typically consists of key data entities that are used across multiple systems, processes, and applications within the business. 

|  #  | Modules                                                                                      |
| :-: | -------------------------------------------------------------------------------------------- |
|  1  | [Users](/master/users), [Roles & Permissions](/master/roles)                                 |
|  2  | [Branches](/master/branches), [Warehouses](/master/warehouses)                               |
|  3  | [Chart of Accounts](/master/chart-of-accounts), [Setting Journals](/master/setting-journals) |
|  4  | [Allocations](/master/allocations), [Allocation Groups](/master/allocation-groups)           |
|  5  | [Suppliers](/master/suppliers), [Supplier Groups](/master/supplier-groups)                   |
|  6  | [Customers](/master/customers), [Customer Groups](/master/customer-groups)                   |
|  7  | [Items](/master/items), [Item Categories](/master/item-categories)                           |

## Transaction

Transaction data refers to the detailed records of business activities or events that occur during day-to-day operations. Unlike master data, which remains relatively stable over time, transaction data is dynamic and changes frequently.

|  #  | Modules                             |
| :-: | ----------------------------------- |
|  1  | [Purchasing](/purchasing)  |
|  2  | [Sales](/sales)       |
|  3  | [Finance](/finance)     |
|  4  | [Manufacture](/manufacture) |
|  5  | [Inventory](/inventory)   |
|  6  | [Accounting](/accounting)  |