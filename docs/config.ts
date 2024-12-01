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
      '/': { base: '/', items: sidebarGuide() },
      '/software/': { base: '/software/', items: sidebarSoftware() },
      '/master/supplier/group/': { base: '/master/supplier/', items: sidebarSupplier() },
      '/master/supplier/': { base: '/master/supplier/', items: sidebarSupplier() },
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
          items: [{ text: 'UI Library', link: 'https://dev.pointhub.net/library/papp' }],
        },
      ],
    },
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
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
        { text: 'Allocation', link: 'master/allocation' },
        { text: 'Supplier', link: 'master/supplier/about' },
        { text: 'Customer', link: 'master/customer' },
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

function sidebarSupplier(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Supplier Group',
      collapsed: true,
      items: [
        { text: 'About', link: 'group/about' },
        { text: 'Schema', link: 'group/schema' },
        { text: 'Create', link: 'group/create' },
        { text: 'Retrieve All', link: 'group/retrieve-all' },
        { text: 'Retrieve', link: 'group/retrieve' },
        { text: 'Update', link: 'group/update' },
        { text: 'Delete', link: 'group/delete' },
        { text: 'Form Approval', link: 'group/form-approval' },
      ],
    },
    {
      text: 'Supplier',
      collapsed: true,
      items: [
        { text: 'About', link: 'about' },
        { text: 'Schema', link: 'schema' },
        { text: 'Create', link: 'create' },
        { text: 'Retrieve All', link: 'retrieve-all' },
        { text: 'Retrieve', link: 'retrieve' },
        { text: 'Update', link: 'update' },
        { text: 'Delete', link: 'delete' },
        { text: 'Form Approval', link: 'form-approval' },
      ],
    },
  ]
}

function sidebarSoftware(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Software & Tools',
      collapsed: false,
      items: [
        { text: 'Introduction', link: 'introduction' },
        { text: 'Text Editor', link: 'text-editor' },
        { text: 'Programming Language', link: 'programming-language' },
      ],
    },
    {
      text: 'Backend',
      collapsed: false,
      items: [
        { text: 'Node.js', link: 'backend/nodejs' },
        { text: 'Bun', link: 'backend/bun' },
        { text: 'Express.js', link: 'backend/expressjs' },
        { text: 'MongoDB', link: 'backend/mongodb' },
      ],
    },
    {
      text: 'Frontend',
      collapsed: false,
      items: [
        { text: 'Vite', link: 'frontend/vite' },
        { text: 'Vue', link: 'frontend/vue' },
        { text: 'Pinia', link: 'frontend/pinia' },
        { text: 'Uno CSS', link: 'frontend/unocss' },
        { text: 'Cypress', link: 'frontend/cypress' },
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
