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
    showClose: true,
    message: 'This is a message. no close',
    duration: 0
  })
}
const open2 = () => {
  McMessage({
    showClose: true,
    message: 'Congrats, this is a success message. 5s close',
    type: 'success',
    duration: 5000
  })
}
const open3 = () => {
  McMessage({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'warning'
  })
}
const open4 = () => {
  McMessage({
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'danger'
  })
}
</script>
