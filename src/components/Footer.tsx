const year = new Date().getFullYear()

type FooterProps = {
  ownerName: string
}

export function Footer({ ownerName }: FooterProps) {
  return (
    <footer className="border-t border-line px-4 py-8 text-center text-sm text-muted">
      © {year} {ownerName}
    </footer>
  )
}
