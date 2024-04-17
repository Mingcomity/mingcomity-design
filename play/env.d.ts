/// <reference types="vite/client" />
/// <reference types="../global.d.ts"/>

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}
