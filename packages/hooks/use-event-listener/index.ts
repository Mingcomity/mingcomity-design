import { Ref, isRef, onMounted, onUnmounted, unref, watch } from 'vue'

export const useEventListener = (
  target: EventTarget | Ref<EventTarget | null>,
  event: string,
  handler: (e: Event) => any
) => {
  if (isRef(target)) {
    watch(target, (newVal, oldVal) => {
      oldVal?.removeEventListener(event, handler)
      newVal?.addEventListener(event, handler)
    })
  } else {
    onMounted(() => {
      target.addEventListener(event, handler)
    })
  }
  onUnmounted(() => {
    unref(target)?.removeEventListener(event, handler)
  })
}
