import { computed, defineComponent, ref, Fragment } from 'vue'
import { DropdownSlots, dropdownProps, MenuOption, dropdownEmits } from './types'
import { McTooltip, TooltipInstance } from '../../tooltip'
import { getComponentCls } from '@mingcomity-design/utils'
import { omit } from 'lodash-es'

export default defineComponent({
  name: 'McDropdown',
  props: dropdownProps,
  slots: Object as DropdownSlots,
  emits: dropdownEmits,
  setup(props, { slots, expose, emit }) {
    // 过滤自定义属性
    const filteredProps = computed(() => omit(props, ['menuOptions', 'hideAfterClick']))

    const prefixCls = getComponentCls('dropdown')
    const classes = computed(() => {
      return {
        [prefixCls]: true
      }
    })
    const itemClasses = (item: MenuOption) => {
      return {
        [`${prefixCls}__item`]: true,
        'is-disabled': item.disabled
      }
    }

    const visibleChange = (e: boolean) => {
      emit('visible-change', e)
    }

    const itemClick = (e: MenuOption) => {
      if (e.disabled) return
      emit('select', e)
      if (props.hideAfterClick) {
        tooltipRef.value?.hide()
      }
    }

    const tooltipRef = ref<TooltipInstance | null>(null)
    // 注意此处，因为setup中ref还未注册成功
    expose({
      show: () => tooltipRef.value?.show(),
      hide: () => tooltipRef.value?.hide()
    })
    return () => (
      <div class={classes.value}>
        <McTooltip
          {...filteredProps.value}
          ref={tooltipRef}
          onVisible-change={(e) => visibleChange(e)}
        >
          {{
            default: () => slots.default?.(),
            content: () => (
              <ul class={`${prefixCls}__menu`}>
                {props.menuOptions?.map((item) => {
                  return (
                    <Fragment key={item.key}>
                      {item.divided && <li class="divided-placeholder" />}
                      <li
                        class={itemClasses(item)}
                        id={`#${prefixCls}-item-${item.key}`}
                        onClick={() => itemClick(item)}
                      >
                        {item.label}
                      </li>
                    </Fragment>
                  )
                })}
              </ul>
            )
          }}
        </McTooltip>
      </div>
    )
  }
})
