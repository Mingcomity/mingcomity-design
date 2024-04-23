<template>
  <div>
    <McDropdown
      style="margin-right: 24px"
      trigger="hover"
      :menu-options="[
        { key: 1, label: h('b', 'this is bold') },
        { key: 2, label: 'item2', disabled: true },
        { key: 3, label: 'item3', divided: true },
        { key: 4, label: 'item4' }
      ]"
      @visible-change="(e: any) => inlineConsole(e)"
      @select="(e: any) => inlineConsole(e)"
    >
      <McButton type="primary">hover dropdown</McButton>
    </McDropdown>
    <McDropdown
      trigger="click"
      :menu-options="[
        { key: 1, label: h('b', 'this is bold') },
        { key: 2, label: 'item2', disabled: true },
        { key: 3, label: 'item3', divided: true },
        { key: 4, label: 'item4' }
      ]"
      @visible-change="(e: any) => inlineConsole(e)"
      @select="(e: any) => inlineConsole(e)"
    >
      <McButton type="success">click dropdown</McButton>
    </McDropdown>
  </div>
</template>

<script lang="ts" setup>
import { h } from 'vue'
const inlineConsole = (...args: any[]) => {
  console.log(args)
}
</script>
<style scoped></style>
