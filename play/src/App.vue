<template>
  <div style="display: flex; gap: 20px">
    <div style="width: 100%">
      <McButton disabled>Disabled McButton</McButton>
      <McButton round>Round Button</McButton>
      <McButton icon="arrow-up" circle></McButton>
      <McButton disabled>Disabled Button</McButton>
      <br /><br />
      <McButton type="primary" @click="aaa"
        >Primary</McButton
      >
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
      <McButton>default</McButton>
      <McButton size="small">Small</McButton><br /><br />
      <McButton loading>Loading</McButton>
      <McButton icon="arrow-up">Icon</McButton>
      <br /><br />
    </div>
    <div style="width: 100%">
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
    <div style="width: 100%">
      <McIcon icon="fa-user-secret" type="danger" />
      <McIcon
        icon="fa-user-secret"
        type="danger"
        color="#4545aa"
      />
    </div>
  </div>
  <div style="margin: 20px 0; display: flex; gap: 20px">
    <div style="width: 100%">
      <McAlert title="this is the alter" />
      <McAlert title="this is the alter" type="primary" />
      <McAlert title="this is the alter" type="warning" />
      <McAlert title="this is the alter" type="danger" />
      <McAlert title="this is the alter" type="success" />
    </div>
    <div style="width: 100%">
      <McAlert title="this is the alter" effect="dark" />
      <McAlert
        title="this is the alter"
        type="primary"
        effect="dark"
      >
        <p>标题</p>
      </McAlert>
      <McAlert
        title="this is the alter"
        type="warning"
        effect="dark"
      />
      <McAlert
        title="this is the alter"
        type="danger"
        effect="dark"
      />
      <McAlert
        title="this is the alter"
        type="success"
        effect="dark"
        @close="close"
      />
    </div>
    <div
      style="
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
      "
    >
      <div
        style="
          width: 100%;
          display: inline-flex;
          gap: 20px;
          align-self: flex-start;
          flex-wrap: wrap;
        "
      >
        <McTooltip
          placement="top"
          :open-delay="200"
          :close-delay="200"
          effect="dark"
        >
          <McButton>hover McTooltip </McButton>
          <template #content>popper!!!</template>
        </McTooltip>
        <McTooltip
          placement="top"
          trigger="click"
          content="popper!!!"
        >
          <McButton>click McTooltip </McButton>
        </McTooltip>
        <McTooltip
          manual
          placement="right"
          ref="tooltipRef"
        >
          <McButton>manual McTooltip </McButton>
          <template #content>popper!!!</template>
        </McTooltip>
        <McButton @click="openManual"
          >show tooltip</McButton
        >
        <McButton @click="closeManual"
          >hide tooltip</McButton
        >
      </div>
      <div
        style="
          width: 100%;
          display: inline-flex;
          gap: 20px;
          align-self: flex-start;
          flex-wrap: wrap;
        "
      >
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
          <McButton>Dropdown</McButton>
        </McDropdown>
      </div>
      <div
        style="
          width: 100%;
          display: inline-flex;
          gap: 20px;
          align-self: flex-start;
          flex-wrap: wrap;
        "
      >
        <McButton @click="() => messageShow('info')">
          info
        </McButton>
        <McButton @click="() => messageShow('success')">
          success
        </McButton>
        <McButton @click="() => messageShow('warning')">
          warning
        </McButton>
        <McButton @click="() => messageShow('danger')">
          danger
        </McButton>
      </div>
    </div>
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
//   McCollapseItem,
//   McAlert,
//   McTooltip,
//   McDropdown,
//   McMessage
// } from '@mingcomity-design/components'
// import '@mingcomity-design/components/message/style'
// @ts-ignore
import { McMessage } from '../../dist/es'
import type { TooltipInstance } from '../../dist/es/components'
import { ref, h, getCurrentInstance } from 'vue'

const tooltipRef = ref<TooltipInstance | null>(null)
function openManual() {
  tooltipRef.value?.show()
}
function closeManual() {
  tooltipRef.value?.hide()
}

const openedValue = ref(['a'])

function aaa() {
  console.log('点击了')
  openedValue.value.push('b')
}
function close() {
  console.log('关闭')
}

const inlineConsole = (...args: any[]) => {
  console.log(args)
}

const instance = getCurrentInstance()
function messageShow(type: any) {
  McMessage({
    message: 'hello message',
    duration: 3000,
    showClose: true,
    type
  })
  instance?.proxy?.$message({
    message: 'hello message 全局方法',
    duration: 4000,
    showClose: true,
    type
  })
}
</script>
<style scoped></style>
