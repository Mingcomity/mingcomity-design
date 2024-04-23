<template>
  <div class="content">
    <div>
      <mc-button size="large">Large</mc-button>
      <mc-button>Default</mc-button>
      <mc-button size="small">Small</mc-button>
      <mc-button size="large" icon="magnifying-glass">Search</mc-button>
      <mc-button icon="magnifying-glass">Search</mc-button>
      <mc-button size="small" icon="magnifying-glass">Search</mc-button>
    </div>
    <div>
      <mc-button size="large" round>Large</mc-button>
      <mc-button round>Default</mc-button>
      <mc-button size="small" round>Small</mc-button>
      <mc-button size="large" icon="magnifying-glass" round>Search</mc-button>
      <mc-button icon="magnifying-glass" round>Search</mc-button>
      <mc-button size="small" icon="magnifying-glass" round>Search</mc-button>
    </div>
    <div>
      <mc-button icon="magnifying-glass" size="large" circle />
      <mc-button icon="magnifying-glass" circle />
      <mc-button icon="magnifying-glass" size="small" circle />
    </div>
  </div>
</template>

<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
library.add(faMagnifyingGlass)
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
