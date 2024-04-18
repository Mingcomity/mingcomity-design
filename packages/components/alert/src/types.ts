import { type PropType, type SlotsType } from 'vue'

export interface AlertProps {
  type: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  effect: 'light' | 'dark'
  closable: boolean
  title: string
}
export interface AlertInstance {}
export const alertProps = {
  type: {
    type: String as PropType<AlertProps['type']>,
    default: 'info'
  },
  effect: {
    type: String as PropType<AlertProps['effect']>,
    default: 'light'
  },
  closable: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  }
}
export const alertEmits = {
  close() {
    return true
  }
}
export type AlertSlots = SlotsType<{
  default?: {}
}>
