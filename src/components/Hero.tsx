import { useRef, type PointerEvent } from 'react'
import { profile, skills, stats } from '../data.ts'
import { prefersReducedMotion, useCountUp, useReveal, useTypewriter } from '../hooks.ts'
import { useLang } from '../i18n.ts'
import { initials } from '../lib.ts'
import type { Stat } from '../types.ts'
import { Icon } from './Icon.tsx'

function StatItem({ stat, start }: { stat: Stat; start: boolean }) {
  const { tr } = useLang()
  const value = useCountUp(stat.value, start)
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{tr(stat.label)}</span>
    </div>
  )
}

export function Hero() {
  const { t, tr } = useLang()
  const word = useTypewriter(profile.focus)
  const { ref: statsRef, shown: statsShown } = useReveal<HTMLDivElement>()
  const heroRef = useRef<HTMLElement>(null)
  const marquee = skills.flatMap((s) => s.items)

  // Sorotan grid titik mengikuti kursor.
  const onPointerMove = (e: PointerEvent) => {
    const el = heroRef.current
    if (!el || e.pointerType !== 'mouse' || prefersReducedMotion()) return
    const box = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - box.left}px`)
    el.style.setProperty('--my', `${e.clientY - box.top}px`)
  }

  return (
    <section className="hero" id="top" ref={heroRef} onPointerMove={onPointerMove}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-text">
          {profile.available && (
            <span className="badge rise" style={{ animationDelay: '0ms' }}>
              <span className="dot" /> {t.available}
            </span>
          )}
          <p className="hero-hello rise" style={{ animationDelay: '80ms' }}>
            {t.hello}
          </p>
          <h1 className="rise" style={{ animationDelay: '140ms' }}>
            {profile.name.split(' ').map((part) => (
              <span key={part}>{part}</span>
            ))}
          </h1>
          <p className="hero-role rise" style={{ animationDelay: '220ms' }}>
            {tr(profile.role)}
            <span className="hero-sep">·</span>
            <span className="hero-loc">
              <Icon name="pin" size={15} /> {tr(profile.location)}
            </span>
          </p>
          <p className="hero-type rise" style={{ animationDelay: '300ms' }} aria-label={`${t.buildWith} ${profile.focus.join(', ')}`}>
            <span aria-hidden="true">
              {t.buildWith} <b>{word}</b>
              <span className="caret" />
            </span>
          </p>
          <p className="hero-tagline rise" style={{ animationDelay: '360ms' }}>
            {tr(profile.tagline)}
          </p>
          <div className="hero-cta rise" style={{ animationDelay: '420ms' }}>
            <a href="#proyek" className="btn btn-primary">
              {t.viewWork} <Icon name="arrowRight" size={16} />
            </a>
            {tr(profile.cvUrl) && (
              <a href={tr(profile.cvUrl)} className="btn btn-outline" download>
                <Icon name="download" size={16} /> {t.downloadCv}
              </a>
            )}
            <a href="#kontak" className="btn btn-text">
              {t.contactMe}
            </a>
          </div>
        </div>
        <div className="hero-visual rise" style={{ animationDelay: '200ms' }}>
          <div className="hero-photo">
            {profile.photo ? <img src={profile.photo} alt={profile.name} /> : <span>{initials(profile.name)}</span>}
          </div>
          <span className="hero-photo-tag">
            <Icon name="code" size={14} /> {tr(profile.role)}
          </span>
        </div>
      </div>
      <div className="container">
        <div className="stats" ref={statsRef}>
          {stats.map((s, i) => (
            <StatItem key={i} stat={s} start={statsShown} />
          ))}
        </div>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
