import type { SectionConfig } from '../sections'
import styles from './Hero.module.css'
import { SectionCard } from './SectionCard'

type HeroProps = {
  ownerName: string
  sections: readonly Pick<SectionConfig, 'id' | 'title' | 'blurb'>[]
}

export function Hero({ ownerName, sections }: HeroProps) {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Hello, I'm {ownerName}</h1>
      <p className={styles.tagline}>
        Welcome to my corner of the internet. Pick a section to start.
      </p>
      <ul className={styles.cards}>
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
