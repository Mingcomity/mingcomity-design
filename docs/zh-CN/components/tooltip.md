---
title: Tooltip 文字提示
description: Tooltip 组件的文档
---

# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

使用 `content` 属性来决定 `hover` 时的提示信息。 由 `placement` 属性决定展示效果： `placement`属性值为：`[方向]-[对齐位置]`；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。 如 `placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

:::preview

demo-preview=../../examples/tooltip/basic.vue

:::

## 主题

Tooltip 组件内置了两个主题：`dark`和`light`。

通过设置 `effect` 来修改主题，默认值为 `light`.

:::preview

demo-preview=../../examples/tooltip/effect.vue

:::

## 触发方式

由 trigger 属性决定触发方式： `hover | click`, 默认为 hover

:::preview

demo-preview=../../examples/tooltip/trigger.vue

:::

## 更多内容的文字提示

展示多行文本或者是设置文本内容的格式

用具名 slot `content`，替代`tooltip`中的`content`属性。

:::preview

demo-preview=../../examples/tooltip/slot.vue

:::

## 高级扩展

除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：

`transition` 属性可以定制显隐的动画效果，默认为`fade-in-linear`。

事实上，Tooltip 是一个基于 [popper.js](https://popper.js.org/docs/v2/) 的扩展，您可以使用 popper.js 中允许的任何属性。

:::preview

demo-preview=../../examples/tooltip/popper.vue

:::

## 受控模式

将 `manual` 属性设置为 true 即可， 然后可以使用实例上面的 `show` 和 `hide` 方法打开关闭下拉菜单。

:::preview

demo-preview=../../examples/tooltip/manual.vue

:::

## Tooltip API

### Tooltip 属性

| 属性名         | 说明                                                   | 类型                                                                                                                                                                         | 默认值 |
| :------------- | :----------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| content        | 显示的内容，也可被 `slot#content` 覆盖                 | string                                                                                                                                                                       | ''     |
| placement      | 菜单位置                                               | `enum` - `'top'\|'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end' ` | bottom |
| popper-options | [popper.js](https://popper.js.org/docs/v2/) parameters | `object` refer to [popper.js](https://popper.js.org/docs/v2/) doc                                                                                                            | {}     |
| open-delay     | 打开延迟，最小值为50                                   | `number`                                                                                                                                                                     | 50     |
| close-delay    | 关闭延迟，最小值为50                                   | `number`                                                                                                                                                                     | 50     |
| trigger        | 触发方式                                               | `enum` - `'hover'                                                \| 'click'`                                                                                                 | hover  |
| manual         | 是否开启手动触发模式                                   | `boolean`                                                                                                                                                                    | false  |
| transition     | transition name                                        | `string`                                                                                                                                                                     | ''     |

### Tooltip 事件

| 属性名         | 说明                         | 类型      |
| :------------- | :--------------------------- | :-------- |
| visible-change | 当 tooltip 展示/隐藏时被触发 | `boolean` |

### Tooltip 插槽

| 属性名  | 说明                      |
| :------ | :------------------------ |
| default | Tooltip 触发 & 引用的元素 |
| content | 自定义内容                |

### Tooltip 实例方法

| 属性名 | 说明 | 类型                                           |
| :----- | :--- | :--------------------------------------------- |
| show   | 显示 | `Function(event?: Event \| undefined) => void` |
| hide   | 关闭 | `Function(event?: Event \| undefined) => void` |
