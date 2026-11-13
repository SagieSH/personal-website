import type { SectionConfig } from '../sections'
import { SectionCard } from './SectionCard'

type HeroProps = {
  ownerName: string
  sections: readonly Pick<SectionConfig, 'id' | 'title' | 'blurb'>[]
}

export function Hero({ ownerName, sections }: HeroProps) {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-12 text-center">
      <h1 className="mb-2 text-[clamp(2rem,6vw,3.5rem)] font-bold">
        Hello, I'm {ownerName}
      </h1>
      <p className="text-lg text-muted">
        Welcome to my corner of the internet. Pick a section to start.
      </p>
      <ul className="mt-10 grid w-full max-w-160 grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
        {sections.map((s, i) => (
          <li key={s.id}>
            <SectionCard
              href={`#${s.id}`}
              index={i + 1}
              title={s.title}
              blurb={s.blurb}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
