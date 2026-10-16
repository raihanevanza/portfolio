import { useEffect, useRef, useState } from 'react'
import { profile } from '../data.ts'
import { useActiveSection, useScrollProgress } from '../hooks.ts'
import { LANGS, SECTIONS, useLang } from '../i18n.ts'
import { initials } from '../lib.ts'
import { Icon } from './Icon.tsx'

export function Header({ onToggleTheme, onOpenPalette }: { onToggleTheme: () => void; onOpenPalette: () => void }) {
  const { t, lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection()
  const ref = useRef<HTMLElement>(null)
  useScrollProgress(ref)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)

  return (
    <header ref={ref} className={`header ${scrolled ? 'header-scrolled' : ''} ${open ? 'header-open' : ''}`}>
      <a className="skip" href="#tentang">
        {t.skip}
      </a>
      <div className="container header-inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)} aria-label={profile.name}>
          <span className="logo-mark">{initials(profile.name)}</span>
          <span className="logo-text">{profile.name}</span>
        </a>
        <nav className="nav" aria-label={t.menu}>
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'on' : ''}
              aria-current={active === id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="kbd-btn" onClick={onOpenPalette} aria-label={t.palette}>
            <Icon name="search" size={15} />
            <kbd>{isMac ? '⌘' : 'Ctrl'} K</kbd>
          </button>
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
          <button className="icon-btn theme-btn" onClick={onToggleTheme} aria-label={t.toggleTheme} title={t.toggleTheme}>
            <span className="theme-icon theme-icon-dark">
              <Icon name="moon" />
            </span>
            <span className="theme-icon theme-icon-light">
              <Icon name="sun" />
            </span>
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen(!open)}
            aria-label={t.menu}
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>
      <div className="progress" aria-hidden="true" />
    </header>
  )
}
