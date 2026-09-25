import { useEffect, useState } from 'react'
import {
  profile,
  contacts,
  stats,
  skills,
  experiences,
  projects,
  education,
  certifications,
} from './data.js'

const NAV = [
  { id: 'tentang', label: 'Tentang' },
  { id: 'pengalaman', label: 'Pengalaman' },
  { id: 'proyek', label: 'Proyek' },
  { id: 'keahlian', label: 'Keahlian' },
  { id: 'kontak', label: 'Kontak' },
]

function initials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || ''
    } catch {
      return ''
    }
  })
  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme
    else delete document.documentElement.dataset.theme
    try {
      if (theme) localStorage.setItem('theme', theme)
    } catch {}
  }, [theme])
  const toggle = () => {
    const current =
      theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(current === 'dark' ? 'light' : 'dark')
  }
  return toggle
}

function Header() {
  const [open, setOpen] = useState(false)
  const toggleTheme = useTheme()
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">{initials(profile.name)}</span>
          <span className="logo-text">
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </a>
        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Ganti tema">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
          <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="panel hero-panel">
          <div className="hero-inner">
            <div className="hero-text">
              {profile.available && (
                <span className="badge">
                  <span className="dot" /> Terbuka untuk peluang baru
                </span>
              )}
              <p className="hero-hello">Halo, saya</p>
              <h1>{profile.name}</h1>
              <p className="hero-role accent">{profile.role}</p>
              <p className="hero-location">{profile.location}</p>
              <p className="hero-tagline">{profile.tagline}</p>
              <div className="hero-cta">
                <a href="#pengalaman" className="btn btn-primary">
                  Lihat Pengalaman
                </a>
                {profile.cvUrl ? (
                  <a href={profile.cvUrl} className="btn btn-ghost" download>
                    Unduh CV
                  </a>
                ) : (
                  <a href="#kontak" className="btn btn-ghost">
                    Hubungi Saya
                  </a>
                )}
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-avatar">
                {profile.photo ? (
                  <img src={profile.photo} alt={profile.name} />
                ) : (
                  <span>{initials(profile.name)}</span>
                )}
              </div>
            </div>
          </div>
          <div className="stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="panel">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="tentang" eyebrow="Tentang" title="Sedikit tentang saya">
      <div className="about">
        <div>
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="card about-side">
          <h3>Pendidikan</h3>
          {education.map((e) => (
            <div key={e.school} className="edu">
              <strong>{e.degree}</strong>
              <span>{e.school}</span>
              <small>
                {e.period}
                {e.note ? ` · ${e.note}` : ''}
              </small>
            </div>
          ))}
          {certifications.length > 0 && (
            <>
              <h3>Sertifikasi</h3>
              {certifications.map((c) => (
                <div key={c.name} className="edu">
                  <strong>{c.name}</strong>
                  <small>
                    {c.issuer} · {c.year}
                  </small>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="pengalaman" eyebrow="Pengalaman" title="Perjalanan karier">
      <ol className="timeline">
        {experiences.map((x) => (
          <li key={x.company + x.start} className="timeline-item">
            <div className="timeline-dot" />
            <div className="card">
              <div className="exp-head">
                <div>
                  <h3>{x.role}</h3>
                  <p className="exp-company">
                    {x.company}
                    {x.type && <span> · {x.type}</span>}
                  </p>
                </div>
                <div className="exp-meta">
                  <span className={`period ${x.end ? '' : 'period-now'}`}>
                    {x.start} – {x.end || 'Sekarang'}
                  </span>
                  {x.location && <small>{x.location}</small>}
                </div>
              </div>
              {x.summary && <p className="exp-summary">{x.summary}</p>}
              {x.highlights?.length > 0 && (
                <ul className="exp-list">
                  {x.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
              <div className="tags">
                {x.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function Projects() {
  return (
    <Section id="proyek" eyebrow="Portofolio" title="Proyek pilihan">
      <div className="grid">
        {projects.map((p) => (
          <article key={p.title} className="card project">
            {p.image && (
              <img
                className="project-image"
                src={p.image}
                alt={`Tampilan ${p.title}`}
                loading="lazy"
              />
            )}
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tags">
              {p.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            {(p.link || p.repo) && (
              <div className="project-links">
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer">
                    Demo ↗
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    Kode ↗
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="keahlian" eyebrow="Keahlian" title="Yang saya gunakan sehari-hari">
      <div className="grid">
        {skills.map((s) => (
          <div key={s.group} className="card">
            <h3>{s.group}</h3>
            <div className="tags">
              {s.items.map((i) => (
                <span key={i} className="tag tag-lg">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

// Link mailto: tidak berbuat apa-apa jika pengunjung tidak punya aplikasi email default,
// jadi kartu email juga diberi tombol salin.
function EmailCard({ contact }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.value)
    } catch {
      window.prompt('Salin alamat email:', contact.value)
      return
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="card contact contact-email">
      <small>{contact.label}</small>
      <a href={contact.href}>{contact.value}</a>
      <button type="button" className="copy-btn" onClick={copy}>
        {copied ? 'Tersalin ✓' : 'Salin email'}
      </button>
    </div>
  )
}

function Contact() {
  return (
    <Section id="kontak" eyebrow="Kontak" title="Mari terhubung">
      <p className="contact-lead">
        Punya peluang kerja, proyek, atau sekadar ingin berdiskusi? Silakan hubungi saya.
      </p>
      <div className="contacts">
        {contacts.map((c) =>
          c.href.startsWith('mailto:') ? (
            <EmailCard key={c.label} contact={c} />
          ) : (
          <a
            key={c.label}
            href={c.href}
            className="card contact"
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
          >
            <small>{c.label}</small>
            <span>{c.value}</span>
          </a>
          )
        )}
      </div>
    </Section>
  )
}

export default function App() {
  useEffect(() => {
    document.title = `${profile.name} — ${profile.role}`
  }, [])
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} {profile.name}
        </div>
      </footer>
    </>
  )
}
