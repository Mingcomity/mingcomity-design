---
title: Message 消息提示
description: Message 组件的文档
---

# Message 消息提示

常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 基础用法

从顶部出现，3 秒后自动消失。 注册了一个 `McMessage` 方法用于调用。 message 可以接收一个字符串或一个 `VNode` 作为参数，它会被显示为正文内容。

:::preview

demo-preview=../../examples/message/basic.vue

:::

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

当需要自定义更多属性时，Message 也可以接收一个对象为参数。 比如，设置 `type` 字段可以定义不同的状态，默认为`info`。 此时正文内容以 `message` 的值传入。

:::preview

demo-preview=../../examples/message/type.vue

:::

## 可关闭的消息提示

可以添加关闭按钮。

默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 `showClose` 设置为 true 此外，同时Message 拥有可控的 `duration`， 默认的关闭时间为 3000 毫秒，当把这个属性的值设置为`0`便表示该消息不会被自动关闭。

:::preview

demo-preview=../../examples/message/close.vue

:::

## 手动关闭实例

可以调用 message 模块提供了一个 `closeAll()` 手动关闭所有实例。

或者调用`McMessage`的返回值的`destroy()`方法手动关闭该实例。

:::preview

demo-preview=../../examples/message/closeAll.vue

:::

## 全局方法

Mingcomity Design 为 app.config.globalProperties 添加了全局方法 $message。 因此在 vue 实例中你可以使用当前页面中的调用方式调用 Message

:::preview

demo-preview=../../examples/message/global.vue

:::

## Message API

### Message 配置项

使用 `McMessage` 创建信息，它接受一个Object，以下是 Object 中的属性列表。

| Name      | Description                                  | Type                                                  | Default |
| :-------- | :------------------------------------------- | :---------------------------------------------------- | :------ |
| message   | 消息文字                                     | `enum` - `'string' \| 'vNode'`                        |         |
| type      | 消息类型                                     | `enum` - `'success' \| 'warning' \|'info' \|'danger'` | `info`  |
| showClose | 是否显示关闭按钮                             | `boolean`                                             | false   |
| duration  | 显示时间，单位为毫秒。 设为 0 则不会自动关闭 | `number`                                              | 3000    |

## Message 方法

调用 `McMessage` 会返回当前 Message 的实例。 如果需要手动关闭实例，可以调用它的 destroy方法。

| Name    | Description        | Type         |
| :------ | :----------------- | :----------- |
| destroy | 关闭当前的 Message | `() => void` |

## 全局方法

提供了的一个 `closeAll()` 方法可以手动关闭所有实例。

| Name     | Description            | Type         |
| :------- | :--------------------- | :----------- |
| closeAll | 关闭当前所有的 Message | `() => void` |
