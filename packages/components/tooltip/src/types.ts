import type { PropType, SlotsType } from 'vue'
import type { Placement, Options } from '@popperjs/core'

export interface TooltipProps {
  content?: string
  trigger?: 'hover' | 'click'
  placement?: Placement
  manual?: boolean
  poperOptions?: Partial<Options>
  transition?: string
  openDelay?: number
  closeDelay?: number
  effect?: 'dark' | 'light'
}
export interface TooltipInstance {
  show: () => void
  hide: () => void
}
export const tooltipProps = {
  content: {
    type: String,
    default: undefined
  },
  trigger: {
    type: String as PropType<TooltipProps['trigger']>,
    default: 'hover'
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom'
  },
  manual: {
    type: Boolean,
    default: false
  },
  popperOptions: {
    type: Object as PropType<TooltipProps['poperOptions']>,
    default: () => ({})
  },
  transition: {
    type: String,
    default: 'fade'
  },
  openDelay: {
    type: Number,
    default: 50
  },
  closeDelay: {
    type: Number,
    default: 50
  },
  effect: {
    type: String as PropType<TooltipProps['effect']>,
    default: 'light'
  }
}
export const tooltipEmits = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  'visible-change': (value: boolean) => true
}

export type TooltipSlots = SlotsType<{
  default?: {}
  content?: {}
}>

export interface TooltipEmits {
  (e: 'visible-change', value: boolean): void
  (e: 'click-outside', value: boolean): void
}
