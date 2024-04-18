import { computed, defineComponent } from 'vue'
import { IconSlots, iconProps } from './types'
import { getComponentCls } from '@mingcomity-design/utils'
import { omit } from 'lodash-es'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default defineComponent({
  name: 'McIcon',
  inheritAttrs: false,
  props: iconProps,
  slots: Object as IconSlots,
  setup(props, { attrs }) {
    // 过滤自定义属性
    const filteredProps = computed(() => omit(props, ['type', 'color']))

    const prefixCls = getComponentCls('icon')
    const classes = computed(() => {
      return {
        [prefixCls]: true,
        [`${prefixCls}--${props.type}`]: props.type
      }
    })

    const customStyles = computed(() => {
      return props.color ? { color: props.color } : {}
    })

    return () => (
      <i class={classes.value} style={customStyles.value} {...attrs}>
        <FontAwesomeIcon {...filteredProps.value} />
      </i>
    )
  }
})
