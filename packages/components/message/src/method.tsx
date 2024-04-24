import { shallowReactive, render } from 'vue'
import McMessage from './index'
import { CreateMessageProps, MessageProps, MessageContext } from './types'
import { useZIndex } from '@mingcomity-design/hooks'

let seed = 1
const instances: MessageContext[] = shallowReactive([])

const createMessage = (props: CreateMessageProps) => {
  const { nextZIndex } = useZIndex()

  const id = `message_${seed++}`
  const container = document.createElement('div')
  // 清除
  const destroy = () => {
    // 删除数组中的实例
    const idx = instances.findIndex((instance) => instance.id === id)
    if (idx === -1) return
    instances.splice(idx, 1)
    render(null, container)
  }
  // 手动调用删除
  const manualDestroy = () => {
    const instance = instances.find((instance) => instance.id === id)
    if (instance) {
      instance.vm.exposed!.visible.value = false
    }
  }

  const newProps: MessageProps = { ...props, onDestroy: destroy, id, zIndex: nextZIndex() }
  const vnode = <McMessage {...newProps}></McMessage>
  render(vnode, container)
  document.body.appendChild(container.firstElementChild!)

  const instance: MessageContext = {
    id,
    vnode,
    props: newProps,
    vm: vnode.component!,
    destroy: manualDestroy
  }
  instances.push(instance)
  return instance
}

export const getLastInstance = () => {
  return instances[instances.length - 1] ?? null
}

export const getLastBottomOffset = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id)
  if (idx <= 0) {
    return 0
  } else {
    const prev = instances[idx - 1]
    return prev.vm.exposed!.bottomOffset.value
  }
}

export const closeAll = () => {
  instances.forEach((instance) => {
    instance.destroy()
  })
}

export default createMessage
