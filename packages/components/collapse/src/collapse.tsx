import { computed, defineComponent, provide, ref, watch } from 'vue'
import { CollapseSlots, NameType, collapseContextKey, collapseEmits, collapseProps } from './types'
import { getComponentCls } from '@mingcomity-design/utils'

export default defineComponent({
  name: 'McCollapse',
  props: collapseProps,
  slots: Object as CollapseSlots,
  emits: collapseEmits,
  setup(props, { slots, emit }) {
    const prefixCls = getComponentCls('collapse')
    const classes = computed(() => {
      return {
        [prefixCls]: true
      }
    })

    const activeNames = ref<NameType[]>(props.modelValue ?? [])
    const handleItemClick = (item: NameType) => {
      let _activeNames = [...activeNames.value]
      if (props.accordion) {
        _activeNames = [activeNames.value[0] === item ? '' : item]
        activeNames.value = [activeNames.value[0] === item ? '' : item]
      } else {
        const index = activeNames.value.indexOf(item)
        if (index > -1) {
          _activeNames.splice(index, 1)
        } else {
          _activeNames.push(item)
        }
        activeNames.value = _activeNames
      }
      emit('change', _activeNames)
      emit('update:modelValue', _activeNames)
    }
    provide(collapseContextKey, {
      activeNames,
      handleItemClick
    })

    if (props.accordion && activeNames.value.length > 1) {
      console.warn('Only one entry is allowed in this mode')
    }
    watch(
      () => props.modelValue,
      (newVal) => {
        activeNames.value = newVal ?? []
      }
    )

    return () => <div class={classes.value}>{slots.default?.({})}</div>
  }
})
