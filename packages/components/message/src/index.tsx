import { StyleValue, Transition, computed, defineComponent, onMounted, ref } from 'vue'
import { MessageSlots, messageProps } from './types'
import { getComponentCls } from '@mingcomity-design/utils'
import { useEventListener } from '@mingcomity-design/hooks'
import { getLastBottomOffset } from './method'
import { McIcon } from '../../icon'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
library.add(faXmark)

export default defineComponent({
  name: 'McMessage',
  props: messageProps,
  slots: Object as MessageSlots,
  setup(props, { slots, expose }) {
    const prefixCls = getComponentCls('message')
    const classes = computed(() => {
      return {
        [prefixCls]: true,
        [`${prefixCls}--${props.type}`]: props.type,
        'is-close': props.showClose
      }
    })

    const messageRef = ref<HTMLDivElement | null>(null)

    /* 计算偏移高度 */
    // 当前元素的高
    const height = ref(0)
    // 上一个元素的底部距离
    const lastOffset = computed(() => getLastBottomOffset(props.id ?? ''))
    // 当前元素顶部距离
    const topOffset = computed(() => props.offset + lastOffset.value)
    // 当前元素底部距离
    const bottomOffset = computed(() => height.value + topOffset.value)

    const cssStyle = computed<StyleValue>(() => ({
      top: topOffset.value + 'px',
      zIndex: props.zIndex
    }))

    const visible = ref(false)
    let timer: any
    function startTimer() {
      if (props.duration === 0) return
      timer = setTimeout(() => {
        visible.value = false
      }, props.duration)
    }
    function clearTimer() {
      clearTimeout(timer)
    }

    function destroyComponent() {
      props.onDestory!()
    }
    function updateHeight() {
      height.value = messageRef.value!.getBoundingClientRect().height
    }

    onMounted(async () => {
      visible.value = true
      startTimer()
    })

    function keydown(e: Event) {
      const event = e as KeyboardEvent
      if (event.code === 'Escape') {
        visible.value = false
      }
    }
    useEventListener(document, 'keydown', keydown)

    expose({
      bottomOffset,
      visible
    })

    return () => (
      <Transition
        name={props.transitionName}
        onEnter={() => updateHeight()}
        onAfterLeave={() => destroyComponent()}
      >
        <div
          v-show={visible.value}
          ref={messageRef}
          style={cssStyle.value}
          class={classes.value}
          role="alert"
          onMouseenter={() => clearTimer()}
          onMouseleave={() => startTimer()}
        >
          <div class={`${prefixCls}__content`}>
            {slots.default?.() ? slots.default?.() : props.message}
          </div>
          {props.showClose && (
            <div
              class={`${prefixCls}__close`}
              onClick={(e: Event) => {
                e.stopPropagation()
                visible.value = false
              }}
            >
              <McIcon icon="xmark" />
            </div>
          )}
        </div>
      </Transition>
    )
  }
})
