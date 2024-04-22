import type { App, DefineComponent, Plugin } from 'vue'
export const makeInstaller = (components: DefineComponent[] = [], plugins: Plugin[] = []) => {
  const install = (app: App) => {
    components.forEach((c) => {
      app.component(c.name!, c)
    })
    plugins.forEach((p) => {
      app.use(p)
    })
  }
  return {
    install
  }
}
