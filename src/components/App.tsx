import { AppShell } from '@mantine/core'
import { useEffect } from 'react'
import { useRoute } from '../router'
import { sections } from '../sections'
import { site } from '../site'
import { headerHeight } from '../theme'
import { Footer } from './Footer'
import { Header } from './Header'
import { Hero } from './Hero'
import { NotFound } from './NotFound'
import { SectionPage } from './SectionPage'

export function App() {
  const route = useRoute()
  const section = sections.find((s) => s.id === route)

  let page
  if (route === '') {
    page = <Hero ownerName={site.ownerName} sections={sections} />
  } else if (section) {
    const { title, blurb, Content } = section
    page = (
      <SectionPage title={title} blurb={blurb}>
        <Content />
      </SectionPage>
    )
  } else {
    page = <NotFound />
  }

  const pageTitle = route === '' ? undefined : (section?.title ?? 'Not found')

  // Each route is its own page: start at the top with a matching tab title.
  useEffect(() => {
    document.title = pageTitle
      ? `${pageTitle} · ${site.ownerName}`
      : site.ownerName
    window.scrollTo(0, 0)
  }, [pageTitle])

  return (
    <AppShell header={{ height: headerHeight }} padding={0}>
      <Header ownerName={site.ownerName} sections={sections} route={route} />
      <AppShell.Main id="main" tabIndex={-1}>
        {page}
      </AppShell.Main>
      <Footer ownerName={site.ownerName} />
    </AppShell>
  )
}
