import { Box, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import { routeHref } from '../router'
import type { SectionConfig } from '../sections'
import { headerHeight } from '../theme'
import { SectionCard } from './SectionCard'

type HeroProps = {
  ownerName: string
  sections: readonly Pick<SectionConfig, 'id' | 'title' | 'blurb'>[]
}

export function Hero({ ownerName, sections }: HeroProps) {
  return (
    <Stack
      component="section"
      align="center"
      justify="center"
      gap={0}
      mih={`calc(100vh - ${headerHeight}px)`}
      px="md"
      py="xl"
      ta="center"
    >
      <Title order={1} fz="clamp(2rem, 6vw, 3.5rem)" mb="xs">
        Hello, I'm {ownerName}
      </Title>
      <Text size="lg" c="dimmed">
        Welcome to my corner of the internet. Pick a section to start.
      </Text>
      <SimpleGrid
        component="ul"
        cols={{ base: 1, xs: 2 }}
        w="100%"
        maw={640}
        mt={40}
        p={0}
      >
        {sections.map((s, i) => (
          // display: block drops the list marker.
          <Box component="li" key={s.id} display="block">
            <SectionCard
              href={routeHref(s.id)}
              index={i + 1}
              title={s.title}
              blurb={s.blurb}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  )
}
