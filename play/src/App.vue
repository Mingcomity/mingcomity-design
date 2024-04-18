<template>
  <div>
    <McButton disabled>Disabled McButton</McButton>
    <br /><br />
    <McButton type="primary" @click="aaa">Primary</McButton>
    <McButton type="success">Success</McButton>
    <McButton type="info">Info</McButton>
    <McButton type="warning">Warning</McButton>
    <McButton type="danger">Danger</McButton><br /><br />
    <McButton type="primary" plain>Primary</McButton>
    <McButton type="success" plain>Success</McButton>
    <McButton type="info" plain>Info</McButton>
    <McButton type="warning" plain>Warning</McButton>
    <McButton type="danger" plain>Danger</McButton>
    <br /><br />
    <McButton size="large">Large</McButton>
    <McButton size="small">Small</McButton><br /><br />
    <McButton loading>Loading</McButton>
    <McButton icon="arrow-up">Icon</McButton>
    <br /><br />
  </div>
  <div style="width: 500px; margin: 24px 0">
    <McCollapse v-model="openedValue">
      <McCollapseItem name="a">
        <template #title>
          <h1>标题a</h1>
          <h1>标题a</h1>
          <h1>标题a</h1>
        </template>
        <h1>headline title</h1>
        <div>this is content a aaa</div>
      </McCollapseItem>
      <McCollapseItem name="b" title="标题b" disabled>
        <div>
          这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b这是b
        </div>
      </McCollapseItem>
      <McCollapseItem name="C" title="标题c">
        <div>
          这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c这是c
        </div>
      </McCollapseItem>
    </McCollapse>
  </div>
  <div>
    <McIcon icon="fa-user-secret" type="danger" />
    <McIcon
      icon="fa-user-secret"
      type="danger"
      color="#4545aa"
    />
  </div>
</template>

<script lang="ts" setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowUp,
  faUserSecret
} from '@fortawesome/free-solid-svg-icons'
library.add(faArrowUp, faUserSecret)
// import {
//   McIcon,
//   McButton,
//   McCollapse,
//   McCollapseItem
// } from '@mingcomity-design/components'
// import '@mingcomity-design/theme-chalk/src/icon.css'
// import '@mingcomity-design/theme-chalk/src/collapse-item.css'
import { ref } from 'vue'

const openedValue = ref(['a'])

function aaa() {
  console.log('点击了')
  openedValue.value.push('b')
}
</script>
<style scoped></style>
