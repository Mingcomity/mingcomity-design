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

    const transitionEvents: Record<string, (el: Element) => void> = {
      beforeEnter(el) {
        ;(el as HTMLElement).style.height = '0px'
        ;(el as HTMLElement).style.overflow = 'hidden'
      },
      enter(el) {
        ;(el as HTMLElement).style.height = `${el.scrollHeight}px`
      },
      afterEnter(el) {
        ;(el as HTMLElement).style.height = ''
        ;(el as HTMLElement).style.overflow = ''
      },
      beforeLeave(el) {
        ;(el as HTMLElement).style.height = `${el.scrollHeight}px`
        ;(el as HTMLElement).style.overflow = 'hidden'
      },
      leave(el) {
        ;(el as HTMLElement).style.height = '0px'
      },
      afterLeave(el) {
        ;(el as HTMLElement).style.height = ''
        ;(el as HTMLElement).style.overflow = ''
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
        <Transition
          name="skide"
          onBeforeEnter={transitionEvents.beforeEnter}
          onEnter={transitionEvents.enter}
          onAfterEnter={transitionEvents.afterEnter}
          onBeforeLeave={transitionEvents.beforeLeave}
          onLeave={transitionEvents.leave}
          onAfterLeave={transitionEvents.afterLeave}
        >
          <div class={`${prefixCls}__warpper`} v-show={isActive.value}>
            <div class={contentClasses.value} id={`item-content-${props.name}`}>
              {slots.default?.({})}
            </div>
          </div>
        </Transition>
      </div>
    )
  }
})
