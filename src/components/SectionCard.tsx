import { Card, Text } from '@mantine/core'
import classes from './SectionCard.module.css'

type SectionCardProps = {
  href: string
  index: number
  title: string
  blurb: string
}

export function SectionCard({ href, index, title, blurb }: SectionCardProps) {
  return (
    <Card
      component="a"
      href={href}
      withBorder
      padding="lg"
      h="100%"
      ta="left"
      className={classes.card}
    >
      <Text
        component="span"
        size="xs"
        ff="monospace"
        c="var(--mantine-primary-color-filled)"
        aria-hidden="true"
      >
        {String(index).padStart(2, '0')}
      </Text>
      <Text component="span" fz="xl" fw={600}>
        {title}
      </Text>
      <Text component="span" size="sm" c="dimmed">
        {blurb}
      </Text>
    </Card>
  )
}
