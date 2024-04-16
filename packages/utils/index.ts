export const CLASS_PREFIX = 'mc'

// 拼装组件className
export const getComponentCls = (componentName: string): string => `${CLASS_PREFIX}-${componentName}`
