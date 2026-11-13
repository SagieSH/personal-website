import type { SectionConfig } from '../sections'
import styles from './Header.module.css'

type HeaderProps = {
  ownerName: string
  sections: readonly Pick<SectionConfig, 'id' | 'title'>[]
}

export function Header({ ownerName, sections }: HeaderProps) {
  return (
    <header className={styles.header}>
      <a href="#main" className={styles.skipLink}>
        Skip to content
      </a>
      <a href="#main" className={styles.brand}>
        {ownerName}
      </a>
      <nav aria-label="Sections" className={styles.nav}>
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`}>
            {s.title}
          </a>
        ))}
      </nav>
    </header>
  )
}
