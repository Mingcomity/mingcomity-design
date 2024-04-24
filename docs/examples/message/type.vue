<template>
  <mc-button :plain="true" @click="open2" type="success">Success</mc-button>
  <mc-button :plain="true" @click="open3" type="warning">Warning</mc-button>
  <mc-button :plain="true" @click="open1" type="info">Info</mc-button>
  <mc-button :plain="true" @click="open4" type="danger">Danger</mc-button>
</template>

<script lang="ts" setup>
import { McMessage } from 'mingcomity-design'

const open1 = () => {
  McMessage({
    message: 'This is a message.'
  })
}
const open2 = () => {
  McMessage({
    message: 'Congrats, this is a success message.',
    type: 'success'
  })
}
const open3 = () => {
  McMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning'
  })
}
const open4 = () => {
  McMessage({
    message: 'Oops, this is a error message.',
    type: 'danger'
  })
}
</script>
