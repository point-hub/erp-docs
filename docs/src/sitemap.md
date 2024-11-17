---
layout: home
---

# Sitemap

A visual representation of a website’s structure, showing how different pages and sections are organized and interconnected

:::raw
<script  setup lang="ts">
const sitemap = {
  homepage: {
    link: 'https://dev.pointhub.net/apps/erp',
    name: 'Home',
    desc: ''
  },
  menu: [
    {
      name: 'Getting Started',
      child: [
        {
          link: '/apps/erp/docs/introduction',
          name: 'Introduction'
        },
        {
          link: '/apps/erp/docs/quick-start',
          name: 'Quick Start'
        }
      ]
    },
    {
      name: 'Master',
      child: [
        {
          link: '/apps/erp/master/user',
          name: 'User'
        },
        {
          link: '/apps/erp/master/role',
          name: 'Role'
        },
        {
          link: '/apps/erp/master/branch',
          name: 'Branch'
        },
        {
          link: '/apps/erp/master/warehosue',
          name: 'Warehouse'
        },
        {
          link: '/apps/erp/master/chart-of-account',
          name: 'Chart of Account'
        },
        {
          link: '/apps/erp/master/allocation-group',
          name: 'Allocation Group'
        },
        {
          link: '/apps/erp/master/allocation',
          name: 'Allocation'
        },
        {
          link: '/apps/erp/master/roles',
          name: 'Supplier Group'
        },
        {
          link: '/apps/erp/master/roles',
          name: 'Supplier'
        },
        {
          link: '/apps/erp/master/roles',
          name: 'Customer Group'
        },
        {
          link: '/apps/erp/master/roles',
          name: 'Customer'
        },
        {
          link: '/apps/erp/master/roles',
          name: 'Item Category'
        },
        {
          link: '/apps/erp/master/roles',
          name: 'Item'
        },
      ]
    },
    {
      name: 'Purchasing',
      child: [
        {
          link: '/apps/erp/purchasing/purchase-request',
          name: 'Purchase Request',
        },
        {
          link: '/apps/erp/purchasing/purchase-request',
          name: 'Purchase Order',
        },
        {
          link: '/apps/erp/purchasing/purchase-request',
          name: 'Downpayment',
        },
        {
          link: '/apps/erp/purchasing/purchase-request',
          name: 'Purchase Received',
        },
        {
          link: '/apps/erp/purchasing/purchase-request',
          name: 'Purchase Invoice',
        },
        {
          link: '/apps/erp/purchasing/purchase-request',
          name: 'Purchase Return',
        },
        {
          link: '/apps/erp/purchasing/purchase-request',
          name: 'Payment Order',
        },
      ]
    },
    {
      name: 'Sales',
      child: [
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Sales Quotation',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Sales Order',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Downpayment',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Delivery Order',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Delivery Note',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Invoice',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Sales Return',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Payment Collection',
        },
      ]
    },
    {
      link: '/apps/erp/sales/sales-quotation',
      name: 'Finance',
      child: [
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Payment Order',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Cash Advance',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Cash In',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Cash Out',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Bank In',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Bank Out',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Cash Report',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Bank Report',
        },
      ]
    },
    {
      link: '/apps/erp/sales/sales-quotation',
      name: 'Manufacture',
      child: [
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Machine',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Process',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Formula',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Processing Input',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Processing Output',
        },
      ]
    },
    {
      link: '/apps/erp/sales/sales-quotation',
      name: 'Inventory',
      child: [
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Transfer Item',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Inventory Usage',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Inventory Audit',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Stock Correction',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Inventory Report',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Inventory Value  Report',
        },
      ]
    },
    {
      link: '/apps/erp/sales/sales-quotation',
      name: 'Accounting',
      child: [
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Cut Off',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Memo Journal',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'General Ledger',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Subledger',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Profit & Loss',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Balance Sheet',
        },
        {
          link: '/apps/erp/sales/sales-quotation',
          name: 'Trial Balance',
        },
      ]
    },
  ]
}
</script>

<ClientOnly>
  <base-sitemap :sitemap="sitemap" />
</ClientOnly>
:::
