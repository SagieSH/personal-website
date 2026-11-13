import styles from './Footer.module.css'

const year = new Date().getFullYear()

type FooterProps = {
  ownerName: string
}

export function Footer({ ownerName }: FooterProps) {
  return (
    <footer className={styles.footer}>
      © {year} {ownerName}
    </footer>
  )
}
