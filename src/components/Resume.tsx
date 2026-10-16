import { useRef, useState, type PointerEvent } from 'react'
import { certifications, contacts, cv, education, experiences, profile, skills } from '../data.ts'
import { prefersReducedMotion } from '../hooks.ts'
import { LANGS, pick, useLang } from '../i18n.ts'
import type { Lang, Localized } from '../types.ts'
import { Icon } from './Icon.tsx'
import { Reveal, Section } from './Section.tsx'

/** Pratinjau kecil CV (bukan PDF-nya), dirender dari data yang sama dengan `npm run cv`. */
function Paper({ lang }: { lang: Lang }) {
  const tr = <T,>(v: Localized<T>) => pick(v, lang)
  const ref = useRef<HTMLDivElement>(null)
  const onMove = (e: PointerEvent) => {
    const el = ref.current
    if (!el || e.pointerType !== 'mouse' || prefersReducedMotion()) return
    const box = el.getBoundingClientRect()
    const x = (e.clientX - box.left) / box.width - 0.5
    const y = (e.clientY - box.top) / box.height - 0.5
    el.style.setProperty('--rx', `${(-y * 6).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(x * 8).toFixed(2)}deg`)
  }
  const reset = () => {
    ref.current?.style.setProperty('--rx', '0deg')
    ref.current?.style.setProperty('--ry', '0deg')
  }
  return (
    <div className="paper-wrap" onPointerMove={onMove} onPointerLeave={reset}>
      <div className="paper" ref={ref} aria-hidden="true">
        <div className="paper-head">
          <div>
            <strong>{profile.name}</strong>
            <span>{tr(profile.role)}</span>
          </div>
          {profile.photo && <img src={profile.photo} alt="" />}
        </div>
        <p className="paper-line">{[tr(profile.location), ...contacts.map((c) => c.value)].join('  ·  ')}</p>
        <p className="paper-h">{lang === 'id' ? 'Ringkasan' : 'Summary'}</p>
        <p className="paper-p">{tr(profile.about)[0]}</p>
        <p className="paper-h">{lang === 'id' ? 'Pengalaman Kerja' : 'Experience'}</p>
        {experiences.slice(0, 5).map((x, i) => (
          <div key={i} className="paper-row">
            <b>{tr(x.role)}</b>
            <span>{x.company}</span>
            <i>
              {tr(x.start)} – {tr(x.end) || (lang === 'id' ? 'Sekarang' : 'Present')}
            </i>
          </div>
        ))}
        <p className="paper-h">{lang === 'id' ? 'Keahlian' : 'Skills'}</p>
        {skills.map((g) => (
          <p key={tr(g.group)} className="paper-p">
            <b>{tr(g.group)}:</b> {g.items.join(', ')}
          </p>
        ))}
        <p className="paper-h">{lang === 'id' ? 'Pendidikan' : 'Education'}</p>
        {education.map((e) => (
          <div key={e.school} className="paper-row">
            <b>{tr(e.degree)}</b>
            <span>{e.school}</span>
            <i>{tr(e.period)}</i>
          </div>
        ))}
        <div className="paper-fade" />
      </div>
    </div>
  )
}

export function Resume() {
  const { t, tr, lang } = useLang()
  const [cvLang, setCvLang] = useState<Lang>(lang)
  const url = pick(profile.cvUrl, cvLang)

  return (
    <Section id="resume" title={t.resumeTitle} lead={t.resumeLead}>
      <div className="resume">
        <Reveal className="resume-preview">
          <Paper lang={cvLang} />
        </Reveal>
        <Reveal className="resume-side" delay={120}>
          {url && (
            <div className="resume-card">
              <p className="eyebrow">{t.cvIn}</p>
              <div className="seg seg-full" role="group">
                {LANGS.map((l) => (
                  <button key={l} className={cvLang === l ? 'on' : ''} aria-pressed={cvLang === l} onClick={() => setCvLang(l)}>
                    {t.langName[l]}
                  </button>
                ))}
              </div>
              <div className="resume-actions">
                <a className="btn btn-primary" href={url} download>
                  <Icon name="download" size={16} /> {t.downloadCv}
                </a>
                <a className="btn btn-outline" href={url} target="_blank" rel="noreferrer">
                  {t.openCv} <Icon name="arrowUpRight" size={16} />
                </a>
              </div>
            </div>
          )}

          <div className="resume-block">
            <h3>{t.education}</h3>
            <ol className="edu">
              {education.map((e) => (
                <li key={e.school}>
                  <span className="edu-period">{tr(e.period)}</span>
                  <strong>{tr(e.degree)}</strong>
                  <span>{e.school}</span>
                  {tr(e.note) && <small>{tr(e.note)}</small>}
                </li>
              ))}
            </ol>
          </div>

          {certifications.length > 0 && (
            <div className="resume-block">
              <h3>{t.certifications}</h3>
              <ol className="edu">
                {certifications.map((c, i) => (
                  <li key={i}>
                    <span className="edu-period">{c.year}</span>
                    <strong>{tr(c.name)}</strong>
                    <span>{c.issuer}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="resume-block">
            <h3>{t.languages}</h3>
            <p className="muted">{cv.languages.map((l) => tr(l)).join(' · ')}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
