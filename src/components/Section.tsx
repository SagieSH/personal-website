import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  blurb: string
  children: ReactNode
}

export function Section({ id, title, blurb, children }: SectionProps) {
  const headingId = `${id}-heading`
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="mx-auto max-w-180 border-t border-line px-4 py-16"
    >
      <h2 id={headingId} className="mb-2 text-[2rem] font-bold">
        {title}
      </h2>
      <p className="mb-6 text-muted">{blurb}</p>
      {children}
    </section>
  )
}
