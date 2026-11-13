import type { ReactNode } from 'react'
import styles from './Section.module.css'

type SectionProps = {
  id: string
  title: string
  blurb: string
  children: ReactNode
}

export function Section({ id, title, blurb, children }: SectionProps) {
  const headingId = `${id}-heading`
  return (
    <section id={id} aria-labelledby={headingId} className={styles.section}>
      <h2 id={headingId} className={styles.title}>
        {title}
      </h2>
      <p className={styles.blurb}>{blurb}</p>
      {children}
    </section>
  )
}
