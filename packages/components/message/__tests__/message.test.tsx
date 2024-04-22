import { describe, test, expect } from 'vitest'
import { McMessage, closeAll } from '../index'
import { nextTick } from 'vue'

export const rAF = async () => {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(async () => {
        resolve(null)
        await nextTick()
      })
    })
  })
}

function getTopValue(element: Element) {
  const styles = window.getComputedStyle(element)
  const topValue = styles.getPropertyValue('top')
  return Number.parseFloat(topValue)
}

describe('Message component', () => {
  test('调用方法时应该创建对应的 Message 组件', async () => {
    const instance = McMessage({ message: 'hello world', duration: 0 })
    await rAF()
    expect(document.querySelector('.mc-message')).toBeTruthy()
    instance.destory()
    await rAF()
    expect(document.querySelector('.mc-message')).toBeFalsy()
  })
  test('多次调用方法应该创建多个实例', async () => {
    McMessage({ message: 'hello world', duration: 0 })
    McMessage({ message: 'hello world 2', duration: 0 })
    await rAF()
    expect(document.querySelectorAll('.mc-message').length).toBe(2)
    closeAll()
    await rAF()
    expect(document.querySelector('.mc-message')).toBeFalsy()
  })
  test('创建多个实例应该设置正确的offset', async () => {
    McMessage({ message: 'hello world', duration: 0, offset: 100 })
    McMessage({ message: 'hello world 2', duration: 0, offset: 50 })
    await rAF()
    const elements = document.querySelectorAll('.mc-message')
    expect(elements.length).toBe(2)
    const firstElementTop = getTopValue(elements[0])
    const secondElementTop = getTopValue(elements[1])
    // https://github.com/jsdom/jsdom/issues/1590
    // 在JS-dom 中，对应的 height 返回为零
    expect(firstElementTop).toBe(100)
    expect(secondElementTop).toBe(150)
  })
})
