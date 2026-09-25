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
import { LANGS, LangContext, useLang } from './i18n.js'

const NAV = ['tentang', 'pengalaman', 'proyek', 'keahlian', 'kontak']

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

// Pilihan yang tersimpan menang; tanpa itu, ikuti bahasa browser pengunjung.
function useLanguage() {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem('lang')
      if (LANGS.includes(saved)) return saved
    } catch {}
    return navigator.language?.toLowerCase().startsWith('id') ? 'id' : 'en'
  })
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  const setLang = (next) => {
    setLangState(next)
    try {
      localStorage.setItem('lang', next)
    } catch {}
  }
  return { lang, setLang }
}

function LangSwitch() {
  const { lang, setLang, t } = useLang()
  return (
    <button
      className="lang-btn"
      onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
      aria-label={t.toggleLang}
      title={t.toggleLang}
    >
      {LANGS.map((l) => (
        <span key={l} className={l === lang ? 'on' : ''}>
          {l.toUpperCase()}
        </span>
      ))}
    </button>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const toggleTheme = useTheme()
  const { t } = useLang()
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
          {NAV.map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {t.nav[id]}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <LangSwitch />
          <button className="icon-btn" onClick={toggleTheme} aria-label={t.toggleTheme}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
          <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label={t.menu}>
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
  const { t, tr } = useLang()
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="panel hero-panel">
          <div className="hero-inner">
            <div className="hero-text">
              {profile.available && (
                <span className="badge">
                  <span className="dot" /> {t.available}
                </span>
              )}
              <p className="hero-hello">{t.hello}</p>
              <h1>{profile.name}</h1>
              <p className="hero-role accent">{tr(profile.role)}</p>
              <p className="hero-location">{tr(profile.location)}</p>
              <p className="hero-tagline">{tr(profile.tagline)}</p>
              <div className="hero-cta">
                <a href="#pengalaman" className="btn btn-primary">
                  {t.viewExperience}
                </a>
                {profile.cvUrl ? (
                  <a href={profile.cvUrl} className="btn btn-ghost" download>
                    {t.downloadCv}
                  </a>
                ) : (
                  <a href="#kontak" className="btn btn-ghost">
                    {t.contactMe}
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
            {stats.map((s, i) => (
              <div key={i} className="stat">
                <strong>{s.value}</strong>
                <span>{tr(s.label)}</span>
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
  const { t, tr } = useLang()
  return (
    <Section id="tentang" eyebrow={t.aboutEyebrow} title={t.aboutTitle}>
      <div className="about">
        <div>
          {tr(profile.about).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="card about-side">
          <h3>{t.education}</h3>
          {education.map((e) => (
            <div key={e.school} className="edu">
              <strong>{tr(e.degree)}</strong>
              <span>{e.school}</span>
              <small>
                {tr(e.period)}
                {e.note ? ` · ${tr(e.note)}` : ''}
              </small>
            </div>
          ))}
          {certifications.length > 0 && (
            <>
              <h3>{t.certifications}</h3>
              {certifications.map((c, i) => (
                <div key={i} className="edu">
                  <strong>{tr(c.name)}</strong>
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
  const { t, tr } = useLang()
  return (
    <Section id="pengalaman" eyebrow={t.experienceEyebrow} title={t.experienceTitle}>
      <ol className="timeline">
        {experiences.map((x, i) => {
          const highlights = tr(x.highlights) || []
          return (
            <li key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="card">
                <div className="exp-head">
                  <div>
                    <h3>{tr(x.role)}</h3>
                    <p className="exp-company">
                      {x.company}
                      {x.type && <span> · {tr(x.type)}</span>}
                    </p>
                  </div>
                  <div className="exp-meta">
                    <span className={`period ${x.end ? '' : 'period-now'}`}>
                      {tr(x.start)} – {x.end ? tr(x.end) : t.present}
                    </span>
                    {x.location && <small>{tr(x.location)}</small>}
                  </div>
                </div>
                {x.summary && <p className="exp-summary">{tr(x.summary)}</p>}
                {highlights.length > 0 && (
                  <ul className="exp-list">
                    {highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                )}
                <div className="tags">
                  {x.tech.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}

function Projects() {
  const { t, tr } = useLang()
  return (
    <Section id="proyek" eyebrow={t.projectsEyebrow} title={t.projectsTitle}>
      <div className="grid">
        {projects.map((p, i) => (
          <article key={i} className="card project">
            {p.image && (
              <img
                className="project-image"
                src={p.image}
                alt={`${t.screenshotOf} ${tr(p.title)}`}
                loading="lazy"
              />
            )}
            <h3>{tr(p.title)}</h3>
            <p>{tr(p.description)}</p>
            <div className="tags">
              {p.tech.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
            {(p.link || p.repo) && (
              <div className="project-links">
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer">
                    {t.demo}
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    {t.code}
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
  const { t, tr } = useLang()
  return (
    <Section id="keahlian" eyebrow={t.skillsEyebrow} title={t.skillsTitle}>
      <div className="grid">
        {skills.map((s, i) => (
          <div key={i} className="card">
            <h3>{tr(s.group)}</h3>
            <div className="tags">
              {s.items.map((item) => (
                <span key={item} className="tag tag-lg">
                  {item}
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
  const { t, tr } = useLang()
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.value)
    } catch {
      window.prompt(t.copyPrompt, contact.value)
      return
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="card contact contact-email">
      <small>{tr(contact.label)}</small>
      <a href={contact.href}>{contact.value}</a>
      <button type="button" className="copy-btn" onClick={copy}>
        {copied ? t.copied : t.copyEmail}
      </button>
    </div>
  )
}

function Contact() {
  const { t, tr } = useLang()
  return (
    <Section id="kontak" eyebrow={t.contactEyebrow} title={t.contactTitle}>
      <p className="contact-lead">{t.contactLead}</p>
      <div className="contacts">
        {contacts.map((c) =>
          c.href.startsWith('mailto:') ? (
            <EmailCard key={c.href} contact={c} />
          ) : (
            <a
              key={c.href}
              href={c.href}
              className="card contact"
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              <small>{tr(c.label)}</small>
              <span>{c.value}</span>
            </a>
          )
        )}
      </div>
    </Section>
  )
}

export default function App() {
  const language = useLanguage()
  useEffect(() => {
    document.title = `${profile.name} — ${profile.role}`
  }, [])
  return (
    <LangContext.Provider value={language}>
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
    </LangContext.Provider>
  )
}
