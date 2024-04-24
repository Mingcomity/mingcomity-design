<template>
  <div>
    <mc-button @click="open"> 创建三条消息 </mc-button>
    <mc-button @click="close"> 全部关闭 </mc-button>
  </div>
  <div style="margin-top: 24px">
    <mc-button @click="() => openPromise()"> 创建一条消息,一秒后关闭 </mc-button>
  </div>
</template>
<script lang="ts" setup>
import { McMessage, MessageContext, closeAll } from 'mingcomity-design'
const open = () => {
  McMessage({ message: 'hello world1', duration: 0 })
  McMessage({ message: 'hello world2', duration: 0 })
  McMessage({ message: 'hello world3', duration: 0 })
}
const close = () => {
  closeAll()
}
function openPromise() {
  const openOne = new Promise<MessageContext>((resolve) => {
    const messageCtx = McMessage({ message: 'promise示例', duration: 0 })
    setTimeout(() => {
      resolve(messageCtx)
    }, 1000)
  })

  openOne.then((res) => {
    res.destroy()
  })
}
</script>
