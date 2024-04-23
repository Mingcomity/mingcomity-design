---
title: Button 按钮
description: Button 组件的文档
---

# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

:::preview

demo-preview=../../examples/button/basic.vue

:::

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

:::preview

demo-preview=../../examples/button/disabled.vue

:::

## 图标按钮

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

:::preview

demo-preview=../../examples/button/icon.vue

:::

## 加载状态按钮

点击按钮来加载数据，并向用户反馈加载状态。

通过设置 `loading` 属性为 `true` 来显示加载中状态。

:::preview

demo-preview=../../examples/button/loading.vue

:::

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `large`和`small`两种值。

:::preview

demo-preview=../../examples/button/size.vue

:::

## Button API

### Button 属性

| 属性名      | 说明                  | 类型                                                             | 默认值 |
| ----------- | --------------------- | ---------------------------------------------------------------- | ------ |
| size        | 大小                  | `enum` - `'large'\| 'small'`                                     | —      |
| type        | 按钮类型              | `enum` - `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | —      |
| plain       | 是否为朴素按钮        | `boolean`                                                        | false  |
| round       | 是否为圆角按钮        | `boolean`                                                        | false  |
| circle      | 是否为圆形按钮        | `boolean`                                                        | false  |
| loading     | 是否为加载中状态      | `boolean`                                                        | false  |
| disabled    | 按钮是否为禁用状态    | `boolean`                                                        | false  |
| icon        | icon component        | `string`                                                         | —      |
| autofocus   | 原生 `autofocus` 属性 | `boolean`                                                        | false  |
| native-type | 原生 `type` 属性      | `enum` - `'button'\| 'submit'\| 'reset'`                         | button |

### Button 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

### Button 方法

| 属性名 | 说明           | 类型                     |
| ------ | -------------- | ------------------------ |
| ref    | 按钮 html 元素 | `Ref<HTMLButtonElement>` |
