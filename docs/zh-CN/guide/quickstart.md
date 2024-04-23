# 快速开始

本节将介绍如何在项目中使用 Mingcomity Design。

## 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```typescript
// main.ts
import { createApp } from 'vue'
import McDesign from 'mingcomity-design'
import 'mingcomity-design/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(McDesign)
app.mount('#app')
```

### Volar 支持

如果您使用 Volar，请在 `tsconfig.json` 中通过 `compilerOptions.type` 指定全局组件类型。

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["mingcomity-design/global"]
  }
}
```

## 手动导入

Mingcomity Design 提供了基于 ES Module 的开箱即用的 [Tree Shaking](https://webpack.js.org/guides/tree-shaking/) 功能。但是你需要手动导入组件的样式。

> App.vue

```vue
<template>
  <mc-button>我是 McButton</mc-button>
</template>
<script>
  import { McButton } from 'mingcomity-design'
  import 'mingcomity-design/es/components/button/style/css'
  export default {
    components: { McButton },
  }
</script>
```

