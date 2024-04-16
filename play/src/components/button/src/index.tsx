import { computed, defineComponent, ref, type SlotsType } from 'vue'
import { buttonProps } from './types'
import { getComponentCls } from '@mingcomity-design/utils'

import '../style/index.css'

export default defineComponent({
  name: 'McButton',
  props: buttonProps,
  slots: Object as SlotsType<{
    default: {}
  }>,
  setup(props, { slots, expose }) {
    // class处理
    const prefixCls = getComponentCls('button')
    const classes = computed(() => {
      return {
        [prefixCls]: true,
        [`${prefixCls}--${props.type}`]: props.type,
        [`${prefixCls}--${props.size}`]: props.size,
        ['is-plain']: props.plain,
        ['is-round']: props.round,
        ['is-circle']: props.circle,
        ['is-disabled']: props.disabled
      }
    })
    // 暴露属性
    const _ref = ref<HTMLButtonElement>()
    expose({ ref: _ref })
    return () => (
      <button
        ref={_ref}
        class={classes.value}
        disabled={props.disabled}
        type={props.nativeType}
        autofocus={props.autofocus}
      >
        <span>{slots.default?.({})}</span>
      </button>
    )
  }
})
