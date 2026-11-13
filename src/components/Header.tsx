import type { SectionConfig } from '../sections'

type HeaderProps = {
  ownerName: string
  sections: readonly Pick<SectionConfig, 'id' | 'title'>[]
}

export function Header({ ownerName, sections }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-page/85 px-4 py-4 backdrop-blur-sm">
      <a
        href="#main"
        className="absolute -top-full left-4 rounded-lg border border-accent bg-surface px-4 py-2 focus:top-2"
      >
        Skip to content
      </a>
      <a href="#main" className="font-bold">
        {ownerName}
      </a>
      <nav aria-label="Sections" className="flex gap-6">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="text-muted hover:text-accent"
          >
            {s.title}
          </a>
        ))}
      </nav>
    </header>
  )
}
