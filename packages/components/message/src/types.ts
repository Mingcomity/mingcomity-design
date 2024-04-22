import type { PropType, SlotsType, VNode, ComponentInternalInstance } from 'vue'

export interface MessageProps {
  message?: string | VNode
  duration?: number
  showClose?: boolean
  type?: 'success' | 'warning' | 'info' | 'danger'
  onDestory: () => void
  offset?: number
  id: string
  zIndex: number
  transitionName?: string
}
export type CreateMessageProps = Omit<MessageProps, 'onDestory' | 'id' | 'zIndex'>
export interface MessageInstance {
  bottomOffest: number
}
export interface MessageContext {
  id: string
  vnode: VNode
  props: MessageProps
  vm: ComponentInternalInstance
  destory: () => void
}
export const messageProps = {
  message: {
    type: [String, Object] as PropType<MessageProps['message']>
  },
  duration: {
    type: Number,
    default: 3000
  },
  showClose: {
    type: Boolean,
    default: false
  },
  type: {
    type: String as PropType<MessageProps['type']>,
    default: 'info'
  },
  onDestory: {
    type: Function as PropType<MessageProps['onDestory']>
  },
  offset: {
    type: Number,
    default: 20
  },
  id: {
    type: String
  },
  zIndex: {
    type: Number
  },
  transitionName: {
    type: String,
    default: 'fade-up'
  }
}
export type MessageSlots = SlotsType<{
  default?: {}
}>
