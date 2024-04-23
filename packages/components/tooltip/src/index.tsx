import {
  Transition,
  WatchStopHandle,
  computed,
  defineComponent,
  onUnmounted,
  ref,
  shallowRef,
  watch
} from 'vue'
import { TooltipProps, TooltipSlots, tooltipEmits, tooltipProps } from './types'
import { getComponentCls } from '@mingcomity-design/utils'
import { Instance, createPopper } from '@popperjs/core'
import { useClickOutside } from '@mingcomity-design/hooks'
import { debounce } from 'lodash-es'

export default defineComponent({
  name: 'McTooltip',
  props: tooltipProps,
  emits: tooltipEmits,
  slots: Object as TooltipSlots,
  setup(props, { slots, emit, expose }) {
    const prefixCls = getComponentCls('tooltip')
    const classes = computed(() => {
      return {
        [prefixCls]: true,
        [`is-${props.effect}`]: props.effect
      }
    })
    const triggerClasses = computed(() => ({
      [`${prefixCls}__trigger`]: true
    }))
    const popperClasses = computed(() => ({
      [`${prefixCls}__popper`]: true
    }))

    const triggerNode = ref<HTMLDivElement | null>(null)
    const popperContainerNode = ref<HTMLDivElement | null>(null)
    const popperNode = ref<HTMLDivElement | null>(null)

    const showPopper = shallowRef(false)
    const openPopper = () => {
      showPopper.value = true
      emit('visible-change', showPopper.value)
    }
    const closePopper = () => {
      showPopper.value = false
      emit('visible-change', showPopper.value)
    }
    const openDebounce = debounce(openPopper, props.openDelay < 50 ? 50 : props.openDelay)
    const closeDebounce = debounce(closePopper, props.closeDelay < 50 ? 50 : props.closeDelay)

    const openFinal = () => {
      // 取消关闭
      closeDebounce.cancel()
      openDebounce()
    }

    const closeFinal = () => {
      openDebounce.cancel()
      closeDebounce()
    }

    const toggerPopper = () => {
      if (showPopper.value) {
        closeFinal()
      } else {
        openFinal()
      }
    }
    let popperInstance: null | Instance
    const popperOptions = computed<TooltipProps['poperOptions']>(() => ({
      placement: props.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 9]
          }
        }
      ],
      ...props.popperOptions
    }))
    watch(
      showPopper,
      (newVal) => {
        if (newVal) {
          if (triggerNode.value && popperNode.value) {
            popperInstance = createPopper(triggerNode.value, popperNode.value, popperOptions.value)
          } else {
            popperInstance?.destroy()
          }
        }
      },
      { flush: 'post' }
    )
    onUnmounted(() => {
      popperInstance?.destroy()
    })

    const events = ref<Record<string, any>>({})
    const outerEvents = ref<Record<string, any>>({})
    const attachEvents = () => {
      if (props.trigger === 'click') {
        events.value.onClick = toggerPopper
      } else {
        outerEvents.value.onMouseenter = openFinal
        outerEvents.value.onMouseleave = closeFinal
      }
    }
    let triggerWatchStop: undefined | WatchStopHandle
    if (!props.manual) {
      triggerWatchStop = watch(
        () => props.trigger,
        (newTrigger, oldTrigger) => {
          if (newTrigger !== oldTrigger) {
            events.value = {}
            outerEvents.value = {}
            attachEvents()
          }
        },
        {
          immediate: true
        }
      )
    }
    watch(
      () => props.manual,
      (newMamual) => {
        if (newMamual) {
          events.value = {}
          outerEvents.value = {}
          // 取消对triggerWatch的监听
          triggerWatchStop?.()
        } else {
          attachEvents()
        }
      }
    )
    // 点击区域外外关闭
    useClickOutside(popperContainerNode, () => {
      if (props.trigger === 'click' && !props.manual && showPopper.value) {
        closeFinal()
      }
    })

    expose({ hide: closeFinal, show: openFinal })

    return () => (
      <div ref={popperContainerNode} class={classes.value} {...outerEvents.value}>
        <div ref={triggerNode} class={triggerClasses.value} {...events.value}>
          {slots.default?.()}
        </div>
        <Transition name={props.transition}>
          {showPopper.value && (
            <div ref={popperNode} class={popperClasses.value}>
              {slots.content?.() ?? props.content}
              <div id="arrow" data-popper-arrow></div>
            </div>
          )}
        </Transition>
      </div>
    )
  }
})
