import { defineConfig } from 'vitepress'
import { footer, nav, sidebar } from './.config'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Mingcomity-design',
  description: 'Mingcomity-design-docs',
  vite: {
    plugins: [vueJsx()]
  },
  vue: {
    template: {
      compilerOptions: {}
    }
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  themeConfig: {
    logo: '/images/logo.svg',
    nav,
    footer,
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/mingcomity/mingcomity-design' }]
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/images/logo.svg'
      }
    ]
  ]
})
