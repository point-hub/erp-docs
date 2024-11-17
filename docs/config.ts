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
      '/features/': { base: '/features/', items: sidebarFeatures() },
      '/features/purchasing/': { base: '/features/purchasing/', items: sidebarPurchasing() },
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
    { text: 'Features', link: '/features/getting-started' },
  ]
}

function sidebarFeatures(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: 'getting-started' },
        { text: 'Workflow', link: 'workflow' },
      ],
    },
    {
      text: 'Essentials',
      collapsed: false,
      items: [
        { text: 'Form Master', link: 'essentials/form-master' },
        { text: 'Form Transaction', link: 'essentials/form-transaction' },
        { text: 'Form Approval', link: '' },
        { text: 'Environment Variable', link: '' },
        { text: 'Activity Logs', link: 'essentials/activity-logs' },
      ],
    },
    {
      text: 'Master',
      collapsed: true,
      items: [
        { text: 'User', link: '' },
        { text: 'Role & Permission', link: '' },
        { text: 'Branch', link: '' },
        { text: 'Warehouse', link: '' },
        { text: 'Chart of Account', link: '' },
      ],
    },
    {
      text: 'Purchase Request',
      collapsed: true,
      items: [
        { text: 'About', link: 'purchasing/purchase-request/about' },
        { text: 'Schema', link: 'purchasing/purchase-request/schema' },
        { text: 'Create', link: 'purchasing/purchase-request/create' },
        { text: 'Retrieve', link: 'purchasing/purchase-request/retrieve' },
        { text: 'Update', link: 'purchasing/purchase-request/update' },
        { text: 'Delete', link: 'purchasing/purchase-request/delete' },
        { text: 'Form Approval', link: 'purchasing/purchase-request/form-approval' },
      ],
    },
    {
      text: 'Purchase Order',
      collapsed: true,
      items: [
        { text: 'About', link: 'purchasing/purchase-order/about' },
        { text: 'Schema', link: 'purchasing/purchase-order/schema' },
        { text: 'Create', link: 'purchasing/purchase-order/create' },
        { text: 'Retrieve', link: 'purchasing/purchase-order/retrieve' },
        { text: 'Update', link: 'purchasing/purchase-order/update' },
        { text: 'Delete', link: 'purchasing/purchase-order/delete' },
        { text: 'Form Approval', link: 'purchasing/purchase-order/form-approval' },
      ],
    },
    {
      text: 'Purchase Receive',
      collapsed: true,
      items: [
        { text: 'About', link: 'purchasing/purchase-receive/about' },
        { text: 'Schema', link: 'purchasing/purchase-receive/schema' },
        { text: 'Create', link: 'purchasing/purchase-receive/create' },
        { text: 'Retrieve', link: 'purchasing/purchase-receive/retrieve' },
        { text: 'Update', link: 'purchasing/purchase-receive/update' },
        { text: 'Delete', link: 'purchasing/purchase-receive/delete' },
        { text: 'Form Approval', link: 'purchasing/purchase-receive/form-approval' },
      ],
    },
    {
      text: 'Sales',
      collapsed: true,
      items: [
        { text: 'Purchase Request', link: '' },
        { text: 'Purchase Order', link: '' },
      ],
    },
    {
      text: 'Finance',
      collapsed: true,
      items: [
        { text: 'Purchase Request', link: '' },
        { text: 'Purchase Order', link: '' },
      ],
    },
    {
      text: 'Manufacture',
      collapsed: true,
      items: [
        { text: 'Purchase Request', link: '' },
        { text: 'Purchase Order', link: '' },
      ],
    },
    {
      text: 'Inventory',
      collapsed: true,
      items: [
        { text: 'Purchase Request', link: '' },
        { text: 'Purchase Order', link: '' },
      ],
    },
    {
      text: 'Accounting',
      collapsed: true,
      items: [
        { text: 'Purchase Request', link: '' },
        { text: 'Purchase Order', link: '' },
      ],
    },
  ]
}

function sidebarPurchasing(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Purchasing',
      collapsed: false,
      items: [{ text: 'Introduction', link: 'introduction' }],
    },
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
