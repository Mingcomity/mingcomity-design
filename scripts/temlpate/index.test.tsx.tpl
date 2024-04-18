import { describe, test, expect, vi, beforeAll } from 'vitest'
import { DOMWrapper, VueWrapper, mount } from '@vue/test-utils'
import { Mc<%= pascalCaseName %> } from '../'


const onChange = vi.fn()
let wrapper: VueWrapper

describe('Collapse components2', () => {
  // 调用测试用例前会执行的事
  beforeAll(() => {
    wrapper = mount(
      () => <Mc<%= pascalCaseName %>></Mc<%= pascalCaseName %>>,
      {
        global: {
          stubs: ['McIcon']
        },
        attachTo: document.body
      }
    )
  })
  test('测试基础结构以及对应文本', () => {
    expect(wrapper)
  })
})
