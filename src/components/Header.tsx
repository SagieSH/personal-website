import { Anchor, AppShell, Group } from '@mantine/core'
import type { SectionConfig } from '../sections'
import classes from './Header.module.css'

type HeaderProps = {
  ownerName: string
  sections: readonly Pick<SectionConfig, 'id' | 'title'>[]
}

export function Header({ ownerName, sections }: HeaderProps) {
  return (
    <AppShell.Header px="md">
      <Anchor href="#main" className={classes.skipLink}>
        Skip to content
      </Anchor>
      <Group h="100%" justify="space-between">
        <Anchor href="#main" c="bright" fw={700} underline="never">
          {ownerName}
        </Anchor>
        <Group component="nav" aria-label="Sections" gap="lg">
          {sections.map((s) => (
            <Anchor key={s.id} href={`#${s.id}`} c="dimmed">
              {s.title}
            </Anchor>
          ))}
        </Group>
      </Group>
    </AppShell.Header>
  )
}
