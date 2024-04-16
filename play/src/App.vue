<template>
  <div>
    <McButton disabled>Disabled McButton</McButton><br /><br />
    <McButton type="primary" @click="aaa">Primary</McButton>
    <McButton type="success">Success</McButton>
    <McButton type="info">Info</McButton>
    <McButton type="warning">Warning</McButton>
    <McButton type="danger">Danger</McButton><br /><br />
    <McButton type="primary" plain>Primary</McButton>
    <McButton type="success" plain>Success</McButton>
    <McButton type="info" plain>Info</McButton>
    <McButton type="warning" plain>Warning</McButton>
    <McButton type="danger" plain>Danger</McButton><br /><br />
    <McButton size="large">Large</McButton>
    <McButton size="small">Small</McButton><br /><br />
    <McButton size="large" loading>Loading</McButton>
  </div>
  <div></div>
</template>

<script lang="ts" setup>
// @ts-ignore
import { McButton } from '../../dist/es/index'
// css
import '../../dist/es/components/button/style/css'

function aaa() {
  console.log('点击了')
}
</script>
<style scoped></style>
