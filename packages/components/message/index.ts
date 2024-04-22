import Message from './src/method'

import { withInstallFunction } from '@mingcomity-design/utils'

export const McMessage = withInstallFunction(Message, '$message')
export default Message

export * from './src/types'
export * from './src/method'
