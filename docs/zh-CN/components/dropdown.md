---
title: Dropdown 下拉菜单
description: Dropdown 组件的文档
---

# Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

## 基础用法

悬停在下拉菜单上以展开更多操作。

:::preview

demo-preview=../../examples/dropdown/basic.vue

:::

## 触发方式

可以配置点击激活或者悬停激活。

将 `trigger` 属性设置为 `click` 即可， 默认为 `hover`。

:::preview

demo-preview=../../examples/dropdown/trigger.vue

:::

## 受控模式

可以配置为可控模式，添加`manual`属性即可。然后可以使用实例上面的 `show` 和 `hide` 方法打开关闭下拉菜单。

:::preview

demo-preview=../../examples/dropdown/manual.vue

:::

## Dropdown API

### Dropdown 属性

| 属性名         | 说明                                                   | 类型                                                                                                                                                                         | 默认值 |
| :------------- | :----------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| menuOptions    | 菜单选项                                               | `MenuOption[]`                                                                                                                                                               | []     |
| placement      | 菜单位置                                               | `enum` - `'top'\|'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end' ` | bottom |
| popper-options | [popper.js](https://popper.js.org/docs/v2/) parameters | `object` refer to [popper.js](https://popper.js.org/docs/v2/) doc                                                                                                            | {}     |
| open-delay     | 打开延迟，最小值为50                                   | `number`                                                                                                                                                                     | 50     |
| close-delay    | 关闭延迟，最小值为50                                   | `number`                                                                                                                                                                     | 50     |
| trigger        | 触发方式                                               | `enum` - `'hover'                                                \| 'click'`                                                                                                 | hover  |
| manual         | 是否开启手动触发模式                                   | `boolean`                                                                                                                                                                    | false  |
| transition     | transition name                                        | `string`                                                                                                                                                                     | ''     |
| hideAfterClick | 点击以后是否自动隐藏菜单                               | `boolean`                                                                                                                                                                    | true   |

#### MenuOption

| 属性名   | 说明           | 类型                   | 默认值 |
| :------- | :------------- | :--------------------- | :----- |
| label    | 菜单展示标签   | `'string' \| 'vNode'`  |        |
| key      | 菜单选项 Key   | `'string' \| 'number'` |        |
| disabled | 是否禁用       | `boolean`              | false  |
| divided  | 是否显示分隔符 | `boolean`              | false  |

### Dropdown 事件

| 属性名         | 说明                           | 类型         |
| :------------- | :----------------------------- | :----------- |
| visible-change | 当 tooltip 展示/隐藏时被触发   | `boolean`    |
| select         | 当选择到某一个选项的时候被触发 | `MenuOption` |

### Dropdown 插槽

| 属性名  | 说明                       |
| :------ | :------------------------- |
| default | Dropdown 触发 & 引用的元素 |

### Dropdown 实例方法

| 属性名 | 说明 | 类型                                           |
| :----- | :--- | :--------------------------------------------- |
| show   | 显示 | `Function(event?: Event \| undefined) => void` |
| hide   | 关闭 | `Function(event?: Event \| undefined) => void` |
