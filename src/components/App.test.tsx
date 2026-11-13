import { act, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { sections } from '../sections'
import { render } from '../testUtils'
import { App } from './App'

function navigate(hash: string) {
  act(() => {
    window.location.hash = hash
    window.dispatchEvent(new HashChangeEvent('hashchange'))
  })
}

afterEach(() => {
  window.location.hash = ''
})

describe('App', () => {
  it('links every section page from the nav and the hero', () => {
    render(<App />)
    const nav = screen.getByRole('navigation', { name: 'Sections' })
    const cards = screen.getByRole('list')

    for (const { id, title } of sections) {
      expect(within(nav).getByRole('link', { name: title })).toHaveAttribute(
        'href',
        `#/${id}`,
      )
      expect(
        within(cards).getByRole('link', { name: new RegExp(`^${title}`) }),
      ).toHaveAttribute('href', `#/${id}`)
    }
  })

  it('renders each section as its own page', () => {
    render(<App />)

    for (const { id, title } of sections) {
      navigate(`#/${id}`)

      expect(
        screen.getByRole('heading', { level: 1, name: title }),
      ).toBeInTheDocument()
      expect(screen.queryByRole('list')).not.toBeInTheDocument()
      expect(
        within(screen.getByRole('navigation', { name: 'Sections' })).getByRole(
          'link',
          { name: title },
        ),
      ).toHaveAttribute('aria-current', 'page')
      expect(document.title).toBe(`${title} · Sagie`)
    }
  })

  it('shows a not-found page for unknown routes', () => {
    render(<App />)
    navigate('#/nope')

    expect(
      screen.getByRole('heading', { level: 1, name: 'Page not found' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Go home' })).toHaveAttribute(
      'href',
      '#/',
    )
  })

  it('has a single h1 and a skip link to main', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(
      screen.getByRole('link', { name: 'Skip to content' }),
    ).toHaveAttribute('href', '#main')
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main')
  })
})
