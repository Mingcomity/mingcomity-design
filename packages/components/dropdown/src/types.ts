import type { PropType, SlotsType, VNode } from 'vue'
import { TooltipProps, tooltipProps } from '../../tooltip'

export interface DropdownProps extends TooltipProps {
  menuOptions: MenuOption[]
  hideAfterClick?: boolean
}
export interface MenuOption {
  label: string | VNode
  key: string | number
  disabled?: boolean
  divided?: boolean
}
export interface DropdownInstance {
  show: () => void
  hide: () => void
}

export const dropdownEmits = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  'visible-change': (value: Boolean) => true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  select: (value: MenuOption) => true
}

export const dropdownProps = {
  menuOptions: {
    type: Array as PropType<DropdownProps['menuOptions']>
  },
  hideAfterClick: {
    type: Boolean,
    default: true
  },
  ...tooltipProps
}
export type DropdownSlots = SlotsType<{
  default?: {}
}>
