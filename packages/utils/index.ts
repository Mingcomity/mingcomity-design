import type { Plugin, App } from 'vue'

export const CLASS_PREFIX = 'mc'

// 拼装组件className
export const getComponentCls = (componentName: string): string => `${CLASS_PREFIX}-${componentName}`

export type SFCWithInstall<T> = T & Plugin

// 注册插件
export const withInstallFunction = <T>(fn: T, name: string) => {
  ;(fn as SFCWithInstall<T>).install = (app: App) => {
    app.config.globalProperties[name] = fn
  }

  return fn as SFCWithInstall<T>
}
