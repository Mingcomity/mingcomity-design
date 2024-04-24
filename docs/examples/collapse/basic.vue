<template>
  <div class="demo-collapse">
    <mc-collapse v-model="activeNames" @change="handleChange">
      <mc-collapse-item title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real life, and comply
          with languages and habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such as: design style,
          icons and texts, position of elements, etc.
        </div>
      </mc-collapse-item>
      <mc-collapse-item title="Feedback" name="2" disabled>
        <div>
          Operation feedback: enable the users to clearly perceive their operations by style updates
          and interactive effects;
        </div>
        <div>
          Visual feedback: reflect current state by updating or rearranging elements of the page.
        </div>
      </mc-collapse-item>
      <mc-collapse-item title="Efficiency" name="3">
        <div>Simplify the process: keep operating process simple and intuitive;</div>
        <div>
          Definite and clear: enunciate your intentions clearly so that the users can quickly
          understand and make decisions;
        </div>
        <div>
          Easy to identify: the interface should be straightforward, which helps the users to
          identify and frees them from memorizing and recalling.
        </div>
      </mc-collapse-item>
      <mc-collapse-item title="Controllability" name="4">
        <div>
          Decision making: giving advices about operations is acceptable, but do not make decisions
          for the users;
        </div>
        <div>
          Controlled consequences: users should be granted the freedom to operate, including
          canceling, aborting or terminating current operation.
        </div>
      </mc-collapse-item>
    </mc-collapse>
  </div>
</template>

<script lang="ts" setup>
import { NameType } from 'mingcomity-design'
import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val: NameType[]) => {
  console.log(val)
}
</script>
