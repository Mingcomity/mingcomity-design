<template>
  <div style="display: flex; gap: 24px">
    <mc-icon icon="user" />
    <mc-icon :icon="['far', 'user']" />
    <mc-icon icon="user-alt" />
    <mc-icon icon="fa-heart" />
    <mc-icon icon="fa-regular fa-heart" />
  </div>
</template>

<script lang="ts" setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faUserAlt, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faUser as faUserReg, faHeart as faHeartReg } from '@fortawesome/free-regular-svg-icons'
library.add(faUser, faUserAlt, faHeart, faUserReg, faHeartReg)
</script>
<style scoped></style>
