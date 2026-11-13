import { Container, Text, Title } from '@mantine/core'
import type { ReactNode } from 'react'

type SectionPageProps = {
  title: string
  blurb: string
  children: ReactNode
}

export function SectionPage({ title, blurb, children }: SectionPageProps) {
  return (
    <Container component="article" size={720} py={64}>
      <Title order={1} mb="xs">
        {title}
      </Title>
      <Text c="dimmed" mb="lg">
        {blurb}
      </Text>
      {children}
    </Container>
  )
}
