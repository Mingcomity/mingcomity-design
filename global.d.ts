// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    McButton: (typeof import('mingcomity-design'))['McButton']
    McCollapse: (typeof import('mingcomity-design'))['McCollapse']
    McCollapseItem: (typeof import('mingcomity-design'))['McCollapseItem']
    McAlert: (typeof import('mingcomity-design'))['McAlert']
    McDropdown: (typeof import('mingcomity-design'))['McDropdown']
    McIcon: (typeof import('mingcomity-design'))['McIcon']
    McTooltip: (typeof import('mingcomity-design'))['McTooltip']
  }
  export interface ComponentCustomProperties {
    $message: (typeof import('mingcomity-design'))['McMessage']
  }
}

export {}
