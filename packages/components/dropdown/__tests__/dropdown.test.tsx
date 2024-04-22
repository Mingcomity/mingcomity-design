import { describe, test, expect, beforeAll } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'
import { McDropdown } from '../'

let wrapper: VueWrapper

describe('dropdown component', () => {
  // 调用测试用例前会执行的事
  beforeAll(() => {
    wrapper = mount(() => <McDropdown></McDropdown>, {
      global: {
        stubs: ['McIcon']
      },
      attachTo: document.body
    })
  })
  test('测试基础结构以及对应文本', () => {
    expect(wrapper)
  })
})
