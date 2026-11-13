import { Container, Divider, Text, Title } from '@mantine/core'
import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  blurb: string
  children: ReactNode
}

export function Section({ id, title, blurb, children }: SectionProps) {
  const headingId = `${id}-heading`
  return (
    <Container
      component="section"
      id={id}
      aria-labelledby={headingId}
      size={720}
      pb={64}
    >
      <Divider mb={64} />
      <Title order={2} id={headingId} mb="xs">
        {title}
      </Title>
      <Text c="dimmed" mb="lg">
        {blurb}
      </Text>
      {children}
    </Container>
  )
}
