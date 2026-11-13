import { Anchor, Container, Text, Title } from '@mantine/core'
import { routeHref } from '../router'

export function NotFound() {
  return (
    <Container component="article" size={720} py={64} ta="center">
      <Title order={1} mb="xs">
        Page not found
      </Title>
      <Text c="dimmed">
        Nothing lives here. <Anchor href={routeHref('')}>Go home</Anchor>.
      </Text>
    </Container>
  )
}
