import DefaultTheme from 'vitepress/theme'
import McDesign from '../../../packages/mingcomity-design'
// 组件展示
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
// 组件展示的样式
import '@mingcomity-design/theme-chalk/src/index.css'
// 自定义主题
import './theme.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(McDesign)
    app.component('demo-preview', ElementPlusContainer)
  }
}
