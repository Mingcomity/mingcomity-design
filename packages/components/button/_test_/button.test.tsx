import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../src/index'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { McIcon } from '../../icon'

describe('Button component', () => {
  test('测试 type, 测试 slot, 测试click事件', () => {
    // 只有展示，没有操作，所以主要测试类名是否正确
    const wrapper = mount(Button, {
      props: {
        type: 'primary'
      },
      slots: {
        default: 'button'
      }
    })
    // 类名是否包含
    expect(wrapper.classes()).toContain('mc-button--primary')

    // 测试slot：查找 'button' 这个dom元素， text后， toBe 判断值是否正确
    // get, find 遍历 get找不到则中断测试， find则不会， 所以一直使用get,除非只是检查元素是否存在
    expect(wrapper.get('button').text()).toBe('button')

    // 测试events：查找 'button' 这个dom元素， trigger一个click事件, toHave.. 表示是否包含一个属性
    wrapper.get('button').trigger('click')
    // console.log(wrapper.emitted())
    expect(wrapper.emitted()).toHaveProperty('click')
  })
  test('测试 disabled', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      },
      slots: {
        default: 'disabled'
      }
    })
    // 测试这个组件上的原生属性 disabled 是否存在
    expect(wrapper.attributes('disabled')).toBeDefined()
    // find后拿到的是wrapper, 在.element后拿到这个组件真正的dom节点,在判断是否存在
    expect(wrapper.find('button').element.disabled).toBeDefined()
    // 判断是否会发生事件
    wrapper.get('button').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })
  test('测试 icon', () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'arrow-up'
      },
      slots: {
        default: 'disabled'
      },
      global: {
        // 想模拟掉的组件的名称，这个组件会被替换掉
        stubs: ['FontAwesomeIcon']
      }
    })
    // 判断FontAwesomeIcon组件是否存在
    const iconElement = wrapper.findComponent(FontAwesomeIcon)
    // 是否存在
    expect(iconElement.exists()).toBeTruthy()
    // icon属性是否存在
    expect(iconElement.attributes('icon')).toBe('arrow-up')
  })
  test('测试 loading', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true
      },
      slots: {
        default: 'disabled'
      },
      global: {
        // 想模拟掉的组件的名称，这个组件会被替换掉
        stubs: ['McIcon']
      }
    })
    // 判断McIcon组件是否存在
    const iconElement = wrapper.findComponent(McIcon)
    expect(iconElement.exists()).toBeTruthy()
    expect(iconElement.attributes('icon')).toBe('spinner')
    expect(wrapper.attributes('disabled')).toBeDefined()
  })
})
