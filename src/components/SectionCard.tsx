import styles from './SectionCard.module.css'

type SectionCardProps = {
  href: string
  index: number
  title: string
  blurb: string
}

export function SectionCard({ href, index, title, blurb }: SectionCardProps) {
  return (
    <a href={href} className={styles.card}>
      <span className={styles.index} aria-hidden="true">
        {String(index).padStart(2, '0')}
      </span>
      <span className={styles.title}>{title}</span>
      <span className={styles.blurb}>{blurb}</span>
    </a>
  )
}
