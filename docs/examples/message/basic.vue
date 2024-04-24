<template>
  <div class="basic block">
    <mc-button type="primary" @click="open"> 创建一条消息 </mc-button>
    <mc-button @click="open2"> 创建支持 VNode 的消息 </mc-button>
  </div>
</template>
<script setup>
import { McMessage } from 'mingcomity-design'
import { h } from 'vue'
const open = () => {
  McMessage({ message: 'This is a message' })
}
const open2 = () => {
  McMessage({ message: h('b', 'This is a message VNode') })
}
</script>
