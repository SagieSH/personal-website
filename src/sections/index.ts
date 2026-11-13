import type { ComponentType } from 'react'
import { Life } from './Life'
import { Projects } from './Projects'

export type SectionConfig = {
  id: string
  title: string
  blurb: string
  Content: ComponentType
}

export const sections = [
  {
    id: 'life',
    title: 'Life',
    blurb:
      'Where I live, what I care about, and what fills my days outside of work.',
    Content: Life,
  },
  {
    id: 'projects',
    title: 'Projects',
    blurb: 'Things I have built, am building, or keep meaning to finish.',
    Content: Projects,
  },
] as const satisfies readonly SectionConfig[]
