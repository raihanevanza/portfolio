import { useRef, useState, type KeyboardEvent } from 'react'
import { experiences } from '../data.ts'
import { useLang } from '../i18n.ts'
import { duration, monthIndex } from '../lib.ts'
import { Reveal, Section, Tags } from './Section.tsx'

export function Experience() {
  const { t, tr } = useLang()
  const [selected, setSelected] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const x = experiences[selected]
  const highlights: string[] = tr(x.highlights) || []

  // Garis karier: tiap peran jadi satu ruas sepanjang lama bekerjanya.
  const first = Math.min(...experiences.map((e) => monthIndex(e.start)))
  const last = Math.max(...experiences.map((e) => monthIndex(e.end)))
  const span = last - first + 1
  const firstYear = Math.floor(first / 12)
  const lastYear = Math.floor(last / 12)
  const years = Array.from({ length: lastYear - firstYear }, (_, i) => firstYear + 1 + i)

  // ↑/↓ (atau ←/→) pindah antarperan, seperti tablist pada umumnya.
  const onKey = (e: KeyboardEvent) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key]
    if (!step) return
    e.preventDefault()
    const next = (selected + step + experiences.length) % experiences.length
    setSelected(next)
    tabs.current[next]?.focus()
  }

  return (
    <Section id="pengalaman" title={t.experienceTitle} lead={t.experienceLead}>
      <Reveal className="career" aria-hidden="true">
        <div className="career-track">
          {experiences.map((e, i) => (
            <button
              key={i}
              tabIndex={-1}
              className={`career-seg ${i === selected ? 'on' : ''}`}
              style={{
                left: `${((monthIndex(e.start) - first) / span) * 100}%`,
                width: `${(duration(e) / span) * 100}%`,
              }}
              onClick={() => setSelected(i)}
              title={`${tr(e.role)} · ${e.company}`}
            />
          ))}
        </div>
        <div className="career-years">
          {years.map((y) => (
            <span key={y} style={{ left: `${((y * 12 - first) / span) * 100}%` }}>
              {y}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal className="exp">
        <div className="exp-tabs" role="tablist" aria-orientation="vertical" onKeyDown={onKey}>
          {experiences.map((e, i) => (
            <button
              key={i}
              ref={(el) => (tabs.current[i] = el)}
              role="tab"
              id={`exp-tab-${i}`}
              aria-selected={i === selected}
              aria-controls="exp-panel"
              tabIndex={i === selected ? 0 : -1}
              className="exp-tab"
              onClick={() => setSelected(i)}
            >
              <span className="exp-tab-role">{tr(e.role)}</span>
              <span className="exp-tab-company">{e.company}</span>
              <span className="exp-tab-period">
                {tr(e.start)} – {tr(e.end) || t.present}
              </span>
            </button>
          ))}
        </div>

        <article
          key={selected}
          id="exp-panel"
          role="tabpanel"
          aria-labelledby={`exp-tab-${selected}`}
          className="exp-panel"
        >
          <header className="exp-head">
            <div>
              <h3>{tr(x.role)}</h3>
              <p className="exp-company">
                {x.company}
                {tr(x.type) && <span> · {tr(x.type)}</span>}
              </p>
            </div>
            <div className="exp-meta">
              <span className={`period ${tr(x.end) ? '' : 'period-now'}`}>
                {tr(x.start)} – {tr(x.end) || t.present}
              </span>
              <small>{t.months(duration(x))}</small>
              {tr(x.location) && <small>{tr(x.location)}</small>}
            </div>
          </header>
          {tr(x.summary) && <p className="exp-summary">{tr(x.summary)}</p>}
          {highlights.length > 0 && (
            <ul className="exp-list">
              {highlights.map((h, j) => (
                <li key={j} style={{ animationDelay: `${60 + j * 50}ms` }}>
                  {h}
                </li>
              ))}
            </ul>
          )}
          <Tags items={x.tech} />
        </article>
      </Reveal>
    </Section>
  )
}
