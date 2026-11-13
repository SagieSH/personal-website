import { useSyncExternalStore } from 'react'

// Hash routing: GitHub Pages has no server-side rewrites, so /personal-website/life
// would 404 on reload. Routes look like #/life; anything else is the home page.

function subscribe(onChange: () => void) {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}

function getRoute() {
  const { hash } = window.location
  return hash.startsWith('#/') ? decodeURIComponent(hash.slice(2)) : ''
}

/** Current route id: '' for home, otherwise e.g. 'life'. */
export function useRoute() {
  return useSyncExternalStore(subscribe, getRoute)
}

/** Link target for a route id ('' for home). */
export function routeHref(id: string) {
  return `#/${id}`
}
