import { Transition, computed, defineComponent, ref } from 'vue'
import { AlertSlots, alertEmits, alertProps } from './types'
import { getComponentCls } from '@mingcomity-design/utils'
import { McIcon } from '../../icon'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
library.add(faXmark)

export default defineComponent({
  name: 'McAlert',
  props: alertProps,
  slots: Object as AlertSlots,
  emits: alertEmits,
  setup(props, { slots, emit }) {
    const prefixCls = getComponentCls('alert')
    const classes = computed(() => {
      return {
        [prefixCls]: true,
        [`${prefixCls}--${props.type}`]: props.type,
        [`is-${props.effect}`]: props.effect
      }
    })

    const show = ref<boolean>(true)
    const hanldeCloseClick = () => {
      show.value = false
      emit('close')
    }

    return () => (
      <Transition name="mc-alert">
        {show.value && (
          <div class={classes.value}>
            <div class={`${prefixCls}__title`}>
              {slots.default?.() ?? <span>{props.title}</span>}
            </div>
            {!props.closable && (
              <div class={`${prefixCls}__close`} onClick={() => hanldeCloseClick()}>
                <McIcon icon="fa-xmark" />
              </div>
            )}
          </div>
        )}
      </Transition>
    )
  }
})
