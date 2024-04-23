<template>
  <div class="content">
    <div>
      <mc-button icon="magnifying-glass" round>icon</mc-button>
      <mc-button type="primary" :icon="['fas', 'pen-to-square']" round>icon</mc-button>
      <mc-button type="success" icon="check" round>icon</mc-button>
      <mc-button type="info" icon="envelope" round>icon</mc-button>
      <mc-button type="warning" icon="star" round>icon</mc-button>
      <mc-button type="danger" icon="trash-can" round>icon</mc-button>
    </div>
    <div>
      <mc-button icon="magnifying-glass">icon</mc-button>
      <mc-button type="primary" :icon="['fas', 'pen-to-square']">icon</mc-button>
      <mc-button type="success" icon="check">icon</mc-button>
      <mc-button type="info" icon="envelope">icon</mc-button>
      <mc-button type="warning" icon="star">icon</mc-button>
      <mc-button type="danger" icon="trash-can">icon</mc-button>
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
