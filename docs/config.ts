import { type DefaultTheme } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid({
  lang: 'en-US',
  title: 'ERP',
  description: 'Pointhub ERP Documentation',
  cleanUrls: true,
  srcDir: './src',
  base: '/apps/erp',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }],
    ['link', { rel: 'stylesheet', href: 'https://assets.pointhub.net/assets/fontawesome-6/css/all.min.css' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.png',
    nav: nav(),
    sidebar: {
      '/': { base: '/', items: sidebarFeatures() },
      '/purchasing/': { base: '/purchasing/', items: sidebarPurchasing() },
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/point-hub' }],
    search: {
      provider: 'local',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 Pointhub',
    },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home', link: '/' },
    { text: 'Guide', link: '/getting-started' },
    { text: 'Sitemap', link: '/sitemap' },
    {
      text: 'Ecosystem',
      items: [
        { text: 'Dev Documentation', link: 'https://dev.pointhub.net/' },
        {
          text: 'Services',
          items: [
            { text: 'Auth', link: 'https://dev.pointhub.net/services/auth/' },
            { text: 'Storage', link: 'https://dev.pointhub.net/services/storage/' },
            { text: 'Mail', link: 'https://dev.pointhub.net/services/mail/' },
          ],
        },
        {
          text: 'Apps',
          items: [{ text: 'ERP', link: 'https://dev.pointhub.net/apps/erp/' }],
        },
        {
          text: 'Libraries',
          items: [{ text: 'Pointhub App', link: 'https://dev.pointhub.net/library/papp' }],
        },
      ],
    },
  ]
}

function sidebarFeatures(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [{ text: 'Getting Started', link: 'getting-started' }],
    },
    {
      text: 'Essentials',
      collapsed: false,
      items: [
        { text: 'Master vs Transaction', link: 'essentials/master-vs-transaction' },
        { text: 'Inventory Management', link: 'essentials/inventory-management' },
        { text: 'Accounting System', link: 'essentials/accounting-system' },
      ],
    },
    {
      text: 'Master',
      collapsed: false,
      items: [
        { text: 'User', link: 'master/user' },
        { text: 'Role & Permission', link: 'master/role-permission' },
        { text: 'Branch', link: 'master/branch' },
        { text: 'Warehouse', link: 'master/warehouse' },
        { text: 'Chart of Account', link: 'master/chart-of-account' },
        { text: 'Setting Journal', link: 'master/setting-journal' },
        { text: 'Allocation Group', link: 'master/allocation-group' },
        { text: 'Allocation', link: 'master/allocation' },
        { text: 'Supplier Group', link: 'master/supplier-group' },
        { text: 'Supplier', link: 'master/supplier' },
        { text: 'Customer Group', link: 'master/customer-group' },
        { text: 'Customer', link: 'master/customer' },
        { text: 'Item Category', link: 'master/item-category' },
        { text: 'Item', link: 'master/item' },
      ],
    },
    {
      text: 'Transaction',
      collapsed: false,
      items: [
        { text: 'Purchasing', link: 'purchasing' },
        { text: 'Sales', link: 'sales' },
        { text: 'Finance', link: 'finance' },
        { text: 'Manufacture', link: 'manufacture' },
        { text: 'Inventory', link: 'inventory' },
        { text: 'Accounting', link: 'accounting' },
      ],
    },
  ]
}

function sidebarPurchasing(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Purchase Request',
      collapsed: true,
      items: [
        { text: 'About', link: 'purchase-request/about' },
        { text: 'Schema', link: 'purchase-request/schema' },
        { text: 'Create', link: 'purchase-request/create' },
        { text: 'Retrieve All', link: 'purchase-request/retrieve-all' },
        { text: 'Retrieve', link: 'purchase-request/retrieve' },
        { text: 'Update', link: 'purchase-request/update' },
        { text: 'Delete', link: 'purchase-request/delete' },
        { text: 'Form Approval', link: 'purchase-request/form-approval' },
      ],
    },
    {
      text: 'Purchase Order',
      collapsed: true,
      items: [
        { text: 'About', link: 'purchase-order/about' },
        { text: 'Schema', link: 'purchase-order/schema' },
        { text: 'Create', link: 'purchase-order/create' },
        { text: 'Retrieve All', link: 'purchase-order/retrieve-all' },
        { text: 'Retrieve', link: 'purchase-order/retrieve' },
        { text: 'Update', link: 'purchase-order/update' },
        { text: 'Delete', link: 'purchase-order/delete' },
        { text: 'Form Approval', link: 'purchase-order/form-approval' },
      ],
    },
    {
      text: 'Purchase Receive',
      collapsed: true,
      items: [
        { text: 'About', link: 'purchasing/purchase-receive/about' },
        { text: 'Schema', link: 'purchasing/purchase-receive/schema' },
        { text: 'Create', link: 'purchasing/purchase-receive/create' },
        { text: 'Retrieve All', link: 'purchasing/purchase-receive/retrieve-all' },
        { text: 'Retrieve', link: 'purchasing/purchase-receive/retrieve' },
        { text: 'Update', link: 'purchasing/purchase-receive/update' },
        { text: 'Delete', link: 'purchasing/purchase-receive/delete' },
        { text: 'Form Approval', link: 'purchasing/purchase-receive/form-approval' },
      ],
    },
  ]
}
