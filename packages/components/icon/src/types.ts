import type { PropType, SlotsType } from 'vue'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface IconProps {
  border?: boolean
  fixedWidth?: boolean
  flip?: 'horizontal' | 'vertical' | 'both'
  icon: object | Array<string> | string | IconDefinition
  mask?: object | Array<string> | string
  listItem?: boolean
  pull?: 'right' | 'left'
  pulse?: boolean
  rotation?: 90 | 180 | 270 | '90' | '180' | '270'
  swapOpacity?: boolean
  size?:
    | '2xs'
    | 'xs'
    | 'sm'
    | 'lg'
    | 'xl'
    | '2xl'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x'
  spin?: boolean
  transform?: object | string
  symbol?: boolean | string
  title?: string
  inverse?: boolean
  bounce?: boolean
  shake?: boolean
  beat?: boolean
  fade?: boolean
  beatFade?: boolean
  spinPulse?: boolean
  spinReverse?: boolean
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  color?: string
}
export interface IconInstance {}
export const iconProps = {
  border: {
    type: Boolean
  },
  fixedWidth: {
    type: Boolean
  },
  flip: {
    type: String as PropType<IconProps['flip']>
  },
  icon: {
    type: [Object, Array, String] as PropType<IconProps['icon']>,
    default: ''
  },
  mask: {
    type: Object as PropType<IconProps['mask']>
  },
  listItem: {
    type: Boolean
  },
  pull: {
    type: String as PropType<IconProps['pull']>
  },
  pulse: {
    type: Boolean
  },
  rotation: {
    type: [String, Number] as PropType<IconProps['rotation']>
  },
  swapOpacity: {
    type: Boolean
  },
  size: {
    type: String as PropType<IconProps['size']>
  },
  spin: {
    type: Boolean
  },
  transform: {
    type: [Object, String]
  },
  symbol: {
    type: [String, Boolean]
  },
  title: {
    type: String
  },
  inverse: {
    type: Boolean
  },
  bounce: {
    type: Boolean
  },
  shake: {
    type: Boolean
  },
  beat: {
    type: Boolean
  },
  fade: {
    type: Boolean
  },
  beatFade: {
    type: Boolean
  },
  spinPulse: {
    type: Boolean
  },
  spinReverse: {
    type: Boolean
  },
  type: {
    type: String as PropType<IconProps['type']>
  },
  color: {
    type: String
  }
}
export type IconSlots = SlotsType<{
  default?: {}
}>
