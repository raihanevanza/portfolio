import { useMemo, useState } from 'react'
import { experiences, projects, skills } from '../data.ts'
import { useLang } from '../i18n.ts'
import { usesOf } from '../lib.ts'
import { Reveal, Section } from './Section.tsx'

export function TechStack({ onOpenProject }: { onOpenProject: (index: number) => void }) {
  const { t, tr } = useLang()
  const [selected, setSelected] = useState(skills[0]?.items[0] ?? '')
  const uses = useMemo(
    () => Object.fromEntries(skills.flatMap((g) => g.items).map((item) => [item, usesOf(item, experiences, projects)])),
    [],
  )
  const current = uses[selected]
  const count = (item: string) => uses[item].roles.length + uses[item].projects.length

  return (
    <Section id="keahlian" title={t.stackTitle} lead={t.stackLead}>
      <div className="stack">
        <Reveal className="stack-groups">
          {skills.map((g) => (
            <div key={tr(g.group)} className="stack-group">
              <h3>{tr(g.group)}</h3>
              <div className="stack-items">
                {g.items.map((item) => (
                  <button
                    key={item}
                    className={`stack-item ${item === selected ? 'on' : ''} ${count(item) ? '' : 'stack-item-quiet'}`}
                    aria-pressed={item === selected}
                    onClick={() => setSelected(item)}
                  >
                    {item}
                    {count(item) > 0 && <span className="stack-count">{count(item)}</span>}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal as="aside" className="stack-detail" delay={120} aria-live="polite">
          {current ? (
            <>
              <p className="eyebrow">{t.usedIn}</p>
              <h3 className="stack-name">{selected}</h3>
              <p className="stack-sum">
                {current.roles.length} {t.roles} · {current.projects.length} {t.projects}
              </p>
              {count(selected) === 0 && <p className="muted">{t.notUsedYet}</p>}
              <ul className="stack-uses">
                {current.roles.map((x) => (
                  <li key={`${x.company}-${tr(x.role)}`}>
                    <a href="#pengalaman">
                      <strong>{tr(x.role)}</strong>
                      <span>
                        {x.company} · {tr(x.start)} – {tr(x.end) || t.present}
                      </span>
                    </a>
                  </li>
                ))}
                {current.projects.map((p) => (
                  <li key={tr(p.title)}>
                    <button onClick={() => onOpenProject(projects.indexOf(p))}>
                      <strong>{tr(p.title)}</strong>
                      <span>{p.category === 'personal' ? t.personal : t.professional}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="muted">{t.pickTech}</p>
          )}
        </Reveal>
      </div>
    </Section>
  )
}
