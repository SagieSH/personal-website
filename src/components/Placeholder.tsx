import { Text } from '@mantine/core'

export function Placeholder() {
  return (
    <Text
      c="dimmed"
      ta="center"
      p="xl"
      bd="1px dashed var(--mantine-color-default-border)"
      bdrs="lg"
    >
      Content coming soon.
    </Text>
  )
}
