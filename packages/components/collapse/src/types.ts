import type { SlotsType, PropType, Ref, InjectionKey } from 'vue'
export type NameType = string | number

export interface CollapseProps {
  modelValue: NameType[]
  accordion?: boolean
}
export interface CollapseInstance {}
export const collapseProps = {
  modelValue: {
    type: Object as PropType<NameType[]>
  },
  accordion: {
    type: Boolean
  }
}

export interface CollapseContext {
  activeNames: Ref<NameType[]>
  handleItemClick: (name: NameType) => void
}

export type CollapseSlots = SlotsType<{
  default?: {}
}>

export const collapseEmits = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  'update:modelValue': (values: NameType[]) => {
    return true
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  change: (values: NameType[]) => {
    return true
  }
}

export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')

/** collapse-item---------------------------- */

export interface CollapseItemProps {
  name: NameType
  title?: string
  disabled?: boolean
}
export interface CollapseItemInstance {}
export const collapseItemProps = {
  name: {
    type: [String, Number],
    default: undefined
  },
  title: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean
  }
}
export type CollapseItemSlots = SlotsType<{
  default?: {}
  title?: {}
}>
