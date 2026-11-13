import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { sections } from '../sections'
import { App } from './App'

describe('App', () => {
  it('links every section from the nav and the hero', () => {
    render(<App />)
    const nav = screen.getByRole('navigation', { name: 'Sections' })
    const cards = screen.getByRole('list')

    for (const { id, title } of sections) {
      expect(within(nav).getByRole('link', { name: title })).toHaveAttribute(
        'href',
        `#${id}`,
      )
      expect(
        within(cards).getByRole('link', { name: new RegExp(`^${title}`) }),
      ).toHaveAttribute('href', `#${id}`)
    }
  })

  it('renders each section as a labelled region with a matching id', () => {
    render(<App />)

    for (const { id, title } of sections) {
      const region = screen.getByRole('region', { name: title })
      expect(region).toHaveAttribute('id', id)
    }
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
