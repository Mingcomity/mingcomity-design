import { describe, test, expect, vi, beforeAll } from 'vitest'
import { DOMWrapper, VueWrapper, mount } from '@vue/test-utils'
import { McCollapseItem, McCollapse } from '../'

describe('Collapse components', () => {
  test('basic collapse', async () => {
    const onChange = vi.fn()
    const wrapper = mount(
      () => (
        <McCollapse modelValue={['a']} onChange={onChange}>
          <McCollapseItem name="a" title="title a">
            content a
          </McCollapseItem>
          <McCollapseItem name="b" title="title b">
            content b
          </McCollapseItem>
          <McCollapseItem name="c" title="title c" disabled>
            content c
          </McCollapseItem>
        </McCollapse>
      ),
      {
        global: {
          stubs: ['McIcon']
        },
        // 由于测试时使用的是 v-show 导致的消失，在 jsdom 的 mount 包裹后的 .isVisible() 方法会认为这是还存在的， 并且在 jsdom#3502 有过讨论，认为这应该是浏览器的正确行为
        attachTo: document.body
      }
    )
    const headers = wrapper.findAll('.mc-collapse-item__header')
    const contents = wrapper.findAll('.mc-collapse-item__content')

    // 数量
    expect(headers.length).toBe(3)
    expect(contents.length).toBe(3)

    // 文本
    const firstHeader = headers[0]
    const secondHeader = headers[1]
    expect(firstHeader.text()).toBe('title a')

    // 内容
    const firstConent = contents[0]
    const secondContent = contents[1]
    const disabledContent = contents[2]
    expect(firstConent.isVisible()).toBeTruthy() // 是否为真值
    expect(secondContent.isVisible()).toBeFalsy() // 是否为假值
    expect(firstConent.text()).toBe('content a')

    // 行为
    await firstHeader.trigger('click') // 注意是异步的
    expect(firstConent.isVisible()).toBeFalsy()
    expect(onChange).toHaveBeenCalledWith([]) // 由于全部都被关闭，所以此时传入的参数是一个空数组
    await secondHeader.trigger('click')
    expect(secondContent.isVisible()).toBeTruthy()
    expect(onChange).toHaveBeenLastCalledWith(['b']) // 打开 b 后，所以传递的是 ['b']，toHaveBeenLastCalledWith 方法则是最后一次被调用时的参数，因为onChange能记录调用的次数的

    // disabled
    const disabledHeader = headers[2]
    expect(disabledHeader.classes()).toContain('is-disabled')
    await disabledHeader.trigger('click')
    expect(disabledContent.isVisible()).toBeFalsy()
  })
  test('basic collapse 不同的监听事件的方式', async () => {
    const wrapper = mount(McCollapse, {
      props: {
        modelValue: ['a']
      },
      slots: {
        default: (
          <>
            <McCollapseItem name="a" title="title a">
              content a
            </McCollapseItem>
            <McCollapseItem name="b" title="title b">
              content b
            </McCollapseItem>
            <McCollapseItem name="c" title="title c" disabled>
              content c
            </McCollapseItem>
          </>
        )
      },
      global: {
        stubs: ['McIcon']
      },
      // 由于测试时使用的是 v-show 导致的消失，在 jsdom 的 mount 包裹后的 .isVisible() 方法会认为这是还存在的， 并且在 jsdom#3502 有过讨论，认为这应该是浏览器的正确行为
      attachTo: document.body
    })
    const headers = wrapper.findAll('.mc-collapse-item__header')
    const contents = wrapper.findAll('.mc-collapse-item__content')

    // 文本
    const firstHeader = headers[0]
    const secondHeader = headers[1]
    expect(firstHeader.text()).toBe('title a')

    const firstConent = contents[0]
    const secondContent = contents[1]
    const disabledContent = contents[2]

    // 行为
    await firstHeader.trigger('click') // 注意是异步的
    expect(firstConent.isVisible()).toBeFalsy()
    await secondHeader.trigger('click')
    expect(secondContent.isVisible()).toBeTruthy()

    expect(wrapper.emitted()).toHaveProperty('change')
    const changeEvent = wrapper.emitted('change') as any[]
    expect(changeEvent).toHaveLength(2) // 此时调用两次，所以长度为2
    expect(changeEvent[0]).toEqual([[]]) // 报错
    expect(changeEvent[1]).toEqual([['b']])

    // disabled
    const disabledHeader = headers[2]
    expect(disabledHeader.classes()).toContain('is-disabled')
    await disabledHeader.trigger('click')
    expect(disabledContent.isVisible()).toBeFalsy()
  })
})

const onChange = vi.fn()
let wrapper: VueWrapper
let headers: DOMWrapper<Element>[], contents: DOMWrapper<Element>[]
let firstContent: DOMWrapper<Element>,
  secondContent: DOMWrapper<Element>,
  disabledContent: DOMWrapper<Element>,
  firstHeader: DOMWrapper<Element>,
  secondHeader: DOMWrapper<Element>,
  disabledHeader: DOMWrapper<Element>

describe('Collapse components2', () => {
  // 调用测试用例前会执行的事
  beforeAll(() => {
    wrapper = mount(
      () => (
        <McCollapse modelValue={['a']} onChange={onChange}>
          <McCollapseItem name="a" title="title a">
            content a
          </McCollapseItem>
          <McCollapseItem name="b" title="title b">
            content b
          </McCollapseItem>
          <McCollapseItem name="c" title="title c" disabled>
            content c
          </McCollapseItem>
        </McCollapse>
      ),
      {
        global: {
          stubs: ['McIcon']
        },
        attachTo: document.body
      }
    )
    headers = wrapper.findAll('.mc-collapse-item__header')
    contents = wrapper.findAll('.mc-collapse-item__wrapper')
    firstHeader = headers[0]
    secondHeader = headers[1]
    disabledHeader = headers[2]
    firstContent = contents[0]
    secondContent = contents[1]
    disabledContent = contents[2]
  })
  test('测试基础结构以及对应文本', () => {
    // 长度
    expect(headers.length).toBe(3)
    expect(contents.length).toBe(3)
    // 文本
    expect(firstHeader.text()).toBe('title a')
    // 内容
    expect(firstContent.isVisible()).toBeTruthy()
    expect(secondContent.isVisible()).toBeFalsy()
    expect(firstContent.text()).toBe('content a')
  })
  // .only 表示只测试这一个 可以用于测试加快
  test.only('点击标题展开/关闭内容', async () => {
    // 行为
    await firstHeader.trigger('click')
    expect(firstContent.isVisible()).toBeFalsy()
    await secondHeader.trigger('click')
    expect(secondContent.isVisible()).toBeTruthy()
  })
  // .skip 表示跳过这个案例
  test.skip('发送正确的事件', () => {
    expect(onChange).toHaveBeenCalledTimes(2) // 调用两次
    expect(onChange).toHaveBeenCalledWith([])
    expect(onChange).toHaveBeenLastCalledWith(['b'])
  })
  test('disabled 的内容应该没有反应', async () => {
    // 重置onChange的调用记录
    onChange.mockClear()
    expect(disabledHeader.classes()).toContain('is-disabled')
    await disabledHeader.trigger('click')
    expect(disabledContent.isVisible()).toBeFalsy()
    expect(onChange).not.toHaveBeenCalled()
  })
})
