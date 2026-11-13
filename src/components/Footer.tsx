import { Box, Divider, Text } from '@mantine/core'

const year = new Date().getFullYear()

type FooterProps = {
  ownerName: string
}

export function Footer({ ownerName }: FooterProps) {
  return (
    <Box component="footer">
      <Divider />
      <Text ta="center" size="sm" c="dimmed" px="md" py="xl">
        © {year} {ownerName}
      </Text>
    </Box>
  )
}
