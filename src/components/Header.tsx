import { Anchor, AppShell, Group } from '@mantine/core'
import type { MouseEvent } from 'react'
import { routeHref } from '../router'
import type { SectionConfig } from '../sections'
import classes from './Header.module.css'

type HeaderProps = {
  ownerName: string
  sections: readonly Pick<SectionConfig, 'id' | 'title'>[]
  route: string
}

// Hash routing owns the URL fragment, so the skip link moves focus itself
// instead of navigating to #main.
function skipToMain(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
  document.getElementById('main')?.focus()
}

export function Header({ ownerName, sections, route }: HeaderProps) {
  return (
    <AppShell.Header px="md">
      <Anchor href="#main" onClick={skipToMain} className={classes.skipLink}>
        Skip to content
      </Anchor>
      <Group h="100%" justify="space-between">
        <Anchor href={routeHref('')} c="bright" fw={700} underline="never">
          {ownerName}
        </Anchor>
        <Group component="nav" aria-label="Sections" gap="lg">
          {sections.map((s) => {
            const current = s.id === route
            return (
              <Anchor
                key={s.id}
                href={routeHref(s.id)}
                c={current ? 'bright' : 'dimmed'}
                fw={current ? 600 : undefined}
                aria-current={current ? 'page' : undefined}
              >
                {s.title}
              </Anchor>
            )
          })}
        </Group>
      </Group>
    </AppShell.Header>
  )
}
