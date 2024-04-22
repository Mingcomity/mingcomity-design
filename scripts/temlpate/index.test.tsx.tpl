import { describe, test, expect, vi, beforeAll } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'
import { Mc<%= pascalCaseName %> } from '../'

let wrapper: VueWrapper

describe('<%= pascalCaseName %> component', () => {
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
