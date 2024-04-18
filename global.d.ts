// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    McButton: (typeof import('mingcomity-design'))['McButton']
    McCollapse: (typeof import('mingcomity-design'))['McCollapse']
    McCollapseItem: (typeof import('mingcomity-design'))['McCollapseItem']
  }
}

export {}
