<template>
  <div class="basic block">
    <mc-tooltip content="hello tooltip" ref="tooltipRef" manual>
      <mc-button> 手动容器 </mc-button>
    </mc-tooltip>

    <br /><br />
    <mc-button type="primary" @click="open"> 点击手动触发显示 </mc-button>
    <mc-button type="danger" @click="close"> 点击手动触发隐藏 </mc-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tooltipRef = ref()
const open = () => {
  tooltipRef.value?.show()
}
const close = () => {
  tooltipRef.value?.hide()
}
</script>
