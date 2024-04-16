import type { App, DefineComponent } from 'vue'
export const makeInstaller = (components: DefineComponent[] = []) => {
  const install = (app: App) => {
    components.forEach((c) => {
      app.component(c.name!, c)
    })
  }
  return {
    install
  }
}
