<template>
  <div class="content">
    <div>
      <mc-button>Default</mc-button>
      <mc-button type="primary">Primary</mc-button>
      <mc-button type="success">Success</mc-button>
      <mc-button type="info">Info</mc-button>
      <mc-button type="warning">Warning</mc-button>
      <mc-button type="danger">Danger</mc-button>
    </div>

    <div>
      <mc-button plain>Plain</mc-button>
      <mc-button type="primary" plain>Primary</mc-button>
      <mc-button type="success" plain>Success</mc-button>
      <mc-button type="info" plain>Info</mc-button>
      <mc-button type="warning" plain>Warning</mc-button>
      <mc-button type="danger" plain>Danger</mc-button>
    </div>

    <div>
      <mc-button round>Round</mc-button>
      <mc-button type="primary" round>Primary</mc-button>
      <mc-button type="success" round>Success</mc-button>
      <mc-button type="info" round>Info</mc-button>
      <mc-button type="warning" round>Warning</mc-button>
      <mc-button type="danger" round>Danger</mc-button>
    </div>

    <div>
      <mc-button icon="magnifying-glass" circle />
      <mc-button type="primary" :icon="['fas', 'pen-to-square']" circle />
      <mc-button type="success" icon="check" circle />
      <mc-button type="info" icon="envelope" circle />
      <mc-button type="warning" icon="star" circle />
      <mc-button type="danger" icon="trash-can" circle />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faMagnifyingGlass,
  faPenToSquare,
  faCheck,
  faEnvelope,
  faStar,
  faTrashCan
} from '@fortawesome/free-solid-svg-icons'
library.add(faMagnifyingGlass, faPenToSquare, faCheck, faEnvelope, faStar, faTrashCan)
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
