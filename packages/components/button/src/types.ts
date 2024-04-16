import type { PropType, SlotsType } from 'vue'
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'large' | 'small'
// 支持button原生的属性
export type ButtonNativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  nativeType?: ButtonNativeType
  autofocus?: boolean
  icon?: string
  loading?: boolean
}
export interface ButtonInstance {
  ref: HTMLButtonElement
}
export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>
  },
  size: {
    type: String as PropType<ButtonSize>
  },
  plain: {
    type: Boolean
  },
  round: {
    type: Boolean
  },
  circle: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: 'button'
  },
  autofocus: {
    type: Boolean
  },
  icon: {
    type: Boolean
  },
  loading: {
    type: Boolean
  }
}
export type ButtonSlots = SlotsType<{
  default: {}
}>
