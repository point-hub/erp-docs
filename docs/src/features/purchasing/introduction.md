# Introduction

The purchasing process is tightly integrated with other modules in an ERP system, such as inventory management, accounts payable, and warehouse management

## Flowchart

Purchasing flow streamlined process of managing the procurement and purchasing activities within an organization

```mermaid
flowchart TD
PR[Purchase Request]
PO[Purchase Order]
PO-OPT{"is require
downpayment?
&nbsp;
"}
PRO[Purchase Received]
PD[Downpayment]
FCB1[[Payment]]
FCB2[[Payment]]
PI[Invoice]
PRE[Return]
POR[Payment Order]

PR --> PO
PO --> PO-OPT
PO-OPT -- Yes --> PD
PO-OPT -- NO --> PRO
PRO --> PI
PD --> FCB1
FCB1 --> PRO
PI -.-> PRE
PI --> POR
PRE --> POR
POR --> FCB2
```