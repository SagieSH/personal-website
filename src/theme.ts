import { createTheme } from '@mantine/core'

const systemFont = "system-ui, -apple-system, 'Segoe UI', roboto, sans-serif"

// Single source of design tokens and shared component defaults. Mantine
// exposes every value here as a --mantine-* CSS variable. Prefer changing
// this (including `components: { X: X.extend({ defaultProps }) }`) over
// repeating props or values in components.
export const theme = createTheme({
  primaryColor: 'blue',
  fontFamily: systemFont,
  headings: { fontFamily: systemFont },
  defaultRadius: 'md',
})

// Height of the sticky AppShell header, in px.
export const headerHeight = 60
