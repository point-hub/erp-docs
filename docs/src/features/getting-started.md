# Introduction

| Aspect | Master Data | Transaction Data |
| --- | --- | --- |
| Nature | Static, relatively unchanging | Dynamic, frequently changing |
| Frequency of Update | Rarely changes, updated occasionally | Updated frequently, reflects daily activity |
| Scope | Represents key business entities (customers, products, etc.) | Reflects business events or actions (sales, orders, payments) |
| Use | Used to define entities and key business objects | Used to track events and business operations |
| Example | Product catalog, customer list, supplier list | Sale order, purchase invoice, payment transaction |


## Master

Master data refers to the critical business information that is essential to the operation of an organization. It typically consists of key data entities that are used across multiple systems, processes, and applications within the business. Master data is typically stable and doesn't change often, unlike transactional data, which records day-to-day business activities.

### Characteristics of Master Data

- **Stability:** Master data typically changes infrequently.
- **Reusability:** It is used across various business processes and systems.
- **Consistency:** The data should be consistent across systems and departments to avoid discrepancies.
- **High Quality:** Master data needs to be accurate, complete, and up-to-date to ensure proper decision-making.

### Modules

| # | Modules |
| :---: | --- |
| 1 | [Users](/features/users) |
| 2 | [Roles & Permissions](/features/roles) |
| 3 | [Branches](/features/branches) |
| 4 | [Warehouses](/features/warehouses) |
| 5 | [Chart of Accounts](/features/roles) |
| 6 | [Setting Journals](/features/roles) |
| 7 | [Allocations](/features/roles), [Allocation Groups](/features/roles) |
| 8 | [Suppliers](/features/roles), [Supplier Groups](/features/roles) |
| 9 | [Customers](/features/roles), [Customer Groups](/features/roles) |
| 10 | [Items](/features/roles), [Item Categories](/features/roles) |

## Transaction

Transaction data refers to the detailed records of business activities or events that occur during day-to-day operations. Unlike master data, which remains relatively stable over time, transaction data is dynamic and changes frequently. Each transaction typically involves the use of master data, and together they provide a complete picture of business operations.

### Characteristics of Transaction Data
- **Dynamic:** Unlike master data, transaction data is highly volatile and changes constantly as business activities unfold.
- **Detail-Oriented:** It captures specific details about individual events or transactions, which makes it valuable for operational and financial analysis.
- **Linked to Master Data:** Transaction data relies on master data to provide context. For example, a sales transaction will reference a specific product or customer from the master data set.

### Modules

| # | Modules |
| :---: | --- |
| 1 | [Purchasing](/features/purchasing) |
| 2 | [Sales](/features/purchasing) |
| 3 | [Finance](/features/purchasing) |
| 4 | [Manufacture](/features/purchasing) |
| 5 | [Inventory](/features/purchasing) |
| 6 | [Accounting](/features/purchasing) |