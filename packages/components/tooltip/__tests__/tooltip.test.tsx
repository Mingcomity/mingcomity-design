import { describe, test, expect, vi, beforeAll, beforeEach } from 'vitest'
import { VueWrapper, mount, DOMWrapper } from '@vue/test-utils'
import { McTooltip } from '../'

vi.mock('@popperjs/core')

const onVisibleChange = vi.fn()
let wrapper: VueWrapper
let triggerWrapper: DOMWrapper<HTMLButtonElement>

describe('Collapse component', () => {
  // 注册一个回调函数，在当前上下文中的每个测试运行前调用, 如果函数返回一个 Promise ，Vitest 会等待承诺解析后再运行测试
  beforeEach(() => {
    vi.useFakeTimers()
  })
  // 注册一个回调函数，在开始运行当前上下文中的所有测试之前调用一次。
  beforeAll(() => {
    wrapper = mount(
      () => (
        <div>
          <McTooltip content="hello tooltip" trigger="click" onVisible-change={onVisibleChange}>
            <button id="trigger">Trigger</button>
          </McTooltip>
          <div class="outside">外侧区域</div>
        </div>
      ),
      {
        global: {
          stubs: ['McIcon']
        },
        attachTo: document.body
      }
    )
    triggerWrapper = wrapper.find('#trigger')
  })
  test('元素是否正常显示，按钮存在，弹层不存在', () => {
    expect(triggerWrapper.exists()).toBeTruthy()
    expect(wrapper.find('.mc-tooltip__popper').exists()).toBeFalsy()
  })
  test('点击后弹层是否存在', async () => {
    // 点击后因为使用 setTimeout, 使用导致dom还没有被渲染 https://cn.vitest.dev/api/vi.html#fake-timers
    triggerWrapper.trigger('click')
    await vi.runAllTimers()
    expect(wrapper.find('.mc-tooltip__popper').exists()).toBeTruthy()
    expect(wrapper.get('.mc-tooltip__popper').text()).toBe('hello tooltip')
    expect(onVisibleChange).toHaveBeenCalledWith(true)
  })
  test('再次点击后弹层是否存在', async () => {
    triggerWrapper.trigger('click')
    await vi.runAllTimers()
    expect(wrapper.find('.mc-tooltip__popper').exists()).toBeFalsy()
    expect(onVisibleChange).toHaveBeenLastCalledWith(false)
  })
  test('点击区域外侧隐藏', async () => {
    triggerWrapper.trigger('click')
    await vi.runAllTimers()
    expect(wrapper.find('.mc-tooltip__popper').exists()).toBeTruthy()
    wrapper.find('.outside').trigger('click')
    await vi.runAllTimers()
    expect(wrapper.find('.mc-tooltip__popper').exists()).toBeFalsy()
  })
})
