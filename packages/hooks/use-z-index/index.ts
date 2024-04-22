import { computed, ref } from 'vue'

const zIndex = ref(0)
export const useZIndex = (initialValue = 2000) => {
  const initialZIndex = ref(initialValue)
  const currentZIndex = computed(() => zIndex.value + initialValue)
  const nextZIndex = () => {
    zIndex.value++
    return currentZIndex.value
  }
  return {
    initialZIndex,
    nextZIndex,
    currentZIndex
  }
}
