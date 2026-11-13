import { sections } from '../sections'
import { site } from '../site'
import { Footer } from './Footer'
import { Header } from './Header'
import { Hero } from './Hero'
import { Section } from './Section'

export function App() {
  return (
    <>
      <Header ownerName={site.ownerName} sections={sections} />
      <main id="main" tabIndex={-1}>
        <Hero ownerName={site.ownerName} sections={sections} />
        {sections.map(({ id, title, blurb, Content }) => (
          <Section key={id} id={id} title={title} blurb={blurb}>
            <Content />
          </Section>
        ))}
      </main>
      <Footer ownerName={site.ownerName} />
    </>
  )
}
