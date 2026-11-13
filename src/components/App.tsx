import { AppShell } from '@mantine/core'
import { sections } from '../sections'
import { site } from '../site'
import { headerHeight } from '../theme'
import { Footer } from './Footer'
import { Header } from './Header'
import { Hero } from './Hero'
import { Section } from './Section'

export function App() {
  return (
    <AppShell header={{ height: headerHeight }} padding={0}>
      <Header ownerName={site.ownerName} sections={sections} />
      <AppShell.Main id="main" tabIndex={-1}>
        <Hero ownerName={site.ownerName} sections={sections} />
        {sections.map(({ id, title, blurb, Content }) => (
          <Section key={id} id={id} title={title} blurb={blurb}>
            <Content />
          </Section>
        ))}
      </AppShell.Main>
      <Footer ownerName={site.ownerName} />
    </AppShell>
  )
}
