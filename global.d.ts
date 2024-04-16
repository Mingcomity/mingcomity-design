// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    McButton: (typeof import('mingcomity-design'))['McButton']
  }
}

export {}
