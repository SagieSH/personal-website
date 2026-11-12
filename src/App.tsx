const sections = [
  {
    id: 'life',
    title: 'Life',
    blurb: 'Where I live, what I care about, and what fills my days outside of work.',
  },
  {
    id: 'projects',
    title: 'Projects',
    blurb: 'Things I have built, am building, or keep meaning to finish.',
  },
] as const

const year = new Date().getFullYear()

function App() {
  return (
    <>
      <header className="site-header">
        <a href="#top" className="brand">
          Sagie
        </a>
        <nav aria-label="Sections">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.title}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <h1>Hello, I'm Sagie</h1>
          <p>Welcome to my corner of the internet. Pick a section to start.</p>
          <div className="cards">
            {sections.map((s, i) => (
              <a key={s.id} href={`#${s.id}`} className="card">
                <span className="card-index">0{i + 1}</span>
                <span className="card-title">{s.title}</span>
                <span className="card-blurb">{s.blurb}</span>
              </a>
            ))}
          </div>
        </section>

        {sections.map((s) => (
          <section key={s.id} id={s.id} className="section">
            <h2>{s.title}</h2>
            <p className="muted">{s.blurb}</p>
            <p className="placeholder">Content coming soon.</p>
          </section>
        ))}
      </main>

      <footer className="site-footer">© {year} Sagie</footer>
    </>
  )
}

export default App
