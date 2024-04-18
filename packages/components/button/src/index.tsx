import { computed, defineComponent, ref } from 'vue'
import { ButtonSlots, buttonProps } from './types'
import { getComponentCls } from '@mingcomity-design/utils'

import { McIcon } from '../../icon'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
library.add(faSpinner)

export default defineComponent({
  name: 'McButton',
  props: buttonProps,
  slots: Object as ButtonSlots,
  setup(props, { slots, expose }) {
    // class处理
    const prefixCls = getComponentCls('button')
    const classes = computed(() => {
      return {
        [prefixCls]: true,
        [`${prefixCls}--${props.type}`]: props.type,
        [`${prefixCls}--${props.size}`]: props.size,
        'is-plain': props.plain,
        'is-round': props.round,
        'is-circle': props.circle,
        'is-disabled': props.disabled,
        'is-loading': props.loading
      }
    })
    // 暴露属性
    const _ref = ref<HTMLButtonElement>()
    expose({ ref: _ref })
    return () => (
      <button
        ref={_ref}
        class={classes.value}
        disabled={props.disabled || props.loading}
        type={props.nativeType}
        autofocus={props.autofocus}
      >
        {props.loading && <McIcon icon="spinner" spin />}
        {props.icon && <McIcon icon={props.icon} />}
        <span>{slots.default?.({})}</span>
      </button>
    )
  }
})
