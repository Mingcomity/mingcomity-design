<template>
  <mc-tooltip placement="top" :popper-options="{ placement: 'bottom' }" effect="dark">
    <template #content> multiple lines<br />second line </template>
    <mc-button>bottom center</mc-button>
  </mc-tooltip>
</template>
