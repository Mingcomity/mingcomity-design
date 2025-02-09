import { Transition, computed, defineComponent, inject } from 'vue'
import { CollapseItemSlots, collapseContextKey, collapseItemProps } from './types'
import { getComponentCls } from '@mingcomity-design/utils'
import { McIcon } from '../../icon'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleRight)

export default defineComponent({
  name: 'McCollapseItem',
  props: collapseItemProps,
  slots: Object as CollapseItemSlots,
  setup(props, { slots }) {
    const prefixCls = getComponentCls('collapse-item')
    const classes = computed(() => {
      return {
        [prefixCls]: true,
        'is-disabled': props.disabled
      }
    })
    const headerClasses = computed(() => {
      return {
        [`${prefixCls}__header`]: true,
        'is-disabled': props.disabled,
        'is-actived': isActive.value
      }
    })
    const contentClasses = computed(() => {
      return {
        [`${prefixCls}__content`]: true
      }
    })

    const collapseContext = inject(collapseContextKey)
    const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name ?? ''))
    const handleClick = () => {
      if (props.disabled) return
      collapseContext?.handleItemClick(props.name ?? '')
    }

    const transitionEvents: Record<string, (el: HTMLElement) => void> = {
      onBeforeEnter(el) {
        el.style.height = '0px'
        el.style.overflow = 'hidden'
      },
      onEnter(el) {
        el.style.height = `${el.scrollHeight}px`
      },
      onAfterEnter(el) {
        el.style.height = ''
        el.style.overflow = ''
      },
      onBeforeLeave(el) {
        el.style.height = `${el.scrollHeight}px`
        el.style.overflow = 'hidden'
      },
      onLeave(el) {
        el.style.height = '0px'
      },
      onAfterLeave(el) {
        el.style.height = ''
        el.style.overflow = ''
      }
    }

    return () => (
      <div class={classes.value}>
        <div
          class={headerClasses.value}
          id={`item-header-${props.name}`}
          onClick={() => handleClick()}
        >
          {slots.title?.({}) ?? props.title}
          <McIcon icon="angle-right" class="header-angle" />
        </div>
        <Transition name="slide" {...transitionEvents}>
          <div class={`${prefixCls}__wrapper`} v-show={isActive.value}>
            <div class={contentClasses.value} id={`item-content-${props.name}`}>
              {slots.default?.({})}
            </div>
          </div>
        </Transition>
      </div>
    )
  }
})
