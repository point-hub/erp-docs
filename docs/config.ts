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
      items: [{ text: 'Getting Started', link: 'getting-started' }],
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
      text: 'Purchasing',
      collapsed: true,
      items: [
        {
          text: 'Purchase Request',
          items: [
            { text: 'About', link: 'purchasing/purchase-request/index' },
            { text: 'Schema', link: 'purchasing/purchase-request' },
            { text: 'Relationship', link: 'purchasing/purchase-request' },
            { text: 'Create', link: 'purchasing/purchase-request' },
            { text: 'Update', link: 'purchasing/purchase-request' },
            { text: 'Delete', link: 'purchasing/purchase-request' },
            { text: 'Approve', link: 'purchasing/purchase-request' },
          ],
        },
        {
          text: 'Purchase Order',
          items: [
            { text: 'Aboout', link: '/purchasing/purchase-request' },
            { text: 'Schema', link: '/purchasing/purchase-request' },
            { text: 'Relationship', link: '/purchasing/purchase-request' },
            { text: 'Create', link: '/purchasing/purchase-request' },
            { text: 'Update', link: '/purchasing/purchase-request' },
            { text: 'Delete', link: '/purchasing/purchase-request' },
            { text: 'Approve', link: '/purchasing/purchase-request' },
          ],
        },
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
