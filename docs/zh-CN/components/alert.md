---
title: Alert 提示
description: Alert 组件的文档
---

# Alert 提示

用于页面中展示重要的提示信息。

## 基础用法

Alert 组件不属于浮层元素，不会自动消失或关闭。

Alert 组件提供四种类型，由 `type` 属性指定，默认值为 `info`。

:::preview

demo-preview=../../examples/alert/basic.vue

:::

## 主题

Alert 组件提供了两个不同的主题：`light` 和 `dark`。

通过设置 `effect` 属性来改变主题，默认为 `light`。

:::preview

demo-preview=../../examples/alert/effect.vue

:::

## 不可关闭

可以设置 Alert 组件是否为可关闭状态， `closable` 属性决定 Alert 组件是否可关闭， 该属性接受一个 Boolean，默认为 false。

:::preview

demo-preview=../../examples/alert/closable.vue

:::

## Alert API

### Alert 属性

| 属性名   | 说明         | 类型                                                 | 默认值 |
| :------- | :----------- | :--------------------------------------------------- | :----- |
| type     | Alert 类型   | `enum` - `'success'\| 'warning'\| 'danger'\| 'info'` | —      |
| title    | 内容         | `string`                                             | —      |
| effect   | 主题样式     | `enum` - `'light' \| 'dark'`                         | light  |
| closable | 是否可以关闭 | `boolean`                                            | false  |

### Alert 插槽

| 名称    | 描述       |
| :------ | :--------- |
| default | Alert 内容 |

### Alert 事件

| 名称  | 描述                    | 类型       |
| :---- | :---------------------- | :--------- |
| close | 关闭 Alert 时触发的事件 | `Function` |
