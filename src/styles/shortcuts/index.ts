import { componentShortcuts } from './components'
import { layoutShortcuts } from './layout'
import { typographyShortcuts } from './typography'

export const shortcuts = {
  ...componentShortcuts,
  ...layoutShortcuts,
  ...typographyShortcuts,
}

export * from './components'
export * from './layout'
export * from './typography'