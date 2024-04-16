import { defineComponent } from 'vue'
import { <%= pascalCaseName %>Slots, <%= camelCaseName %>Props } from './types'
import { getComponentCls } from '@mingcomity-design/utils'

export default defineComponent({
  name: 'Mc<%= pascalCaseName %>',
  props: <%= camelCaseName %>Props,
  slots: Object as <%= pascalCaseName %>Slots,
  setup(props, { slots, expose }) {
    const prefixCls = getComponentCls('<%= name %>')
    return () => <></>
  }
})
