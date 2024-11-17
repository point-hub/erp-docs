// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import './../../../node_modules/@point-hub/papp/dist/style.css'
import DefaultTheme from 'vitepress/theme'
import { PluginBaseComponents } from '@point-hub/papp'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  enhanceApp({ app, router, siteData }) {
    app.use(PluginBaseComponents)
  },
} satisfies Theme
