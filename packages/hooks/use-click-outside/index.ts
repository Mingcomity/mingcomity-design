import { onMounted, onUnmounted, type Ref } from 'vue'

export const useClickOutside = (
  elementRef: Ref<null | HTMLElement>,
  callback: (e?: MouseEvent) => void
) => {
  const hanlder = (e: MouseEvent) => {
    if (elementRef.value && e.target) {
      if (!elementRef.value.contains(e.target as HTMLElement)) {
        callback(e)
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', hanlder)
  })
  onUnmounted(() => {
    document.removeEventListener('click', hanlder)
  })
}
