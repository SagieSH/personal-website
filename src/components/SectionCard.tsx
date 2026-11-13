type SectionCardProps = {
  href: string
  index: number
  title: string
  blurb: string
}

export function SectionCard({ href, index, title, blurb }: SectionCardProps) {
  return (
    <a
      href={href}
      className="flex h-full flex-col gap-1 rounded-xl border border-line bg-surface p-6 text-left transition-[border-color,translate] duration-150 hover:-translate-y-0.5 hover:border-accent focus-visible:-translate-y-0.5 focus-visible:border-accent"
    >
      <span
        className="text-[0.8rem] text-accent tabular-nums"
        aria-hidden="true"
      >
        {String(index).padStart(2, '0')}
      </span>
      <span className="text-2xl font-semibold">{title}</span>
      <span className="text-[0.95rem] text-muted">{blurb}</span>
    </a>
  )
}
