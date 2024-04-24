---
title: Icon 图标
description: Icon 组件的文档
---

# Icon 图标

Mingcomity Design 采用了 [fontawersome](https://fontawesome.com/) 图标集合。

## 安装

### 使用包管理器

```
# 选择一个你喜欢的包管理器

# NPM
$ npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons
# Yarn
$ yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons
# pnpm
$ pnpm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons
```

### 注册所有图标

```typescript
// main.ts

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
```

### 按需注册

```typescript
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faUser)
```

## 结合 mc-icon 使用

导入后，在 `icon` 中传入相应值即可

:::preview

demo-preview=../../examples/icon/basic.vue

:::

## 图标集合

具体请查看：https://fontawesome.com/search?m=free&o=r

## Icon API

### Icon 属性

> 具体查看 https://docs.fontawesome.com/web/use-with/vue/style

```typescript
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
interface IconProps {
  border?: boolean
  fixedWidth?: boolean
  flip?: 'horizontal' | 'vertical' | 'both'
  icon: object | Array<string> | string | IconDefinition
  mask?: object | Array<string> | string
  listItem?: boolean
  pull?: 'right' | 'left'
  pulse?: boolean
  rotation?: 90 | 180 | 270 | '90' | '180' | '270'
  swapOpacity?: boolean
  size?:
    | '2xs'
    | 'xs'
    | 'sm'
    | 'lg'
    | 'xl'
    | '2xl'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x'
  spin?: boolean
  transform?: object | string
  symbol?: boolean | string
  title?: string
  inverse?: boolean
  bounce?: boolean
  shake?: boolean
  beat?: boolean
  fade?: boolean
  beatFade?: boolean
  spinPulse?: boolean
  spinReverse?: boolean
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  color?: string
}
```

