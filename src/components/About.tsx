import { cv, education, experiences, profile } from '../data.ts'
import { useLang } from '../i18n.ts'
import { Icon, type IconName } from './Icon.tsx'
import { Reveal, Section } from './Section.tsx'

export function About() {
  const { t, tr } = useLang()
  const current = experiences.find((x) => !x.end)
  const studying = education.find((e) => /sekarang|present/i.test(tr(e.period)))

  const facts: [IconName, string, string][] = [
    ...(current ? [['layers', t.facts.now, `${tr(current.role)} · ${current.company}`] as [IconName, string, string]] : []),
    ['pin', t.facts.base, tr(profile.location)],
    ...(studying ? [['file', t.facts.study, `${tr(studying.degree)} · ${studying.school}`] as [IconName, string, string]] : []),
    ['globe', t.facts.langs, cv.languages.map((l) => tr(l)).join(' · ')],
  ]

  return (
    <Section id="tentang" title={t.aboutTitle} lead={t.aboutLead}>
      <div className="about">
        <Reveal className="about-text">
          {tr(profile.about).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
        <Reveal as="dl" className="facts" delay={120}>
          {facts.map(([icon, label, value]) => (
            <div key={label} className="fact">
              <dt>
                <Icon name={icon} size={16} /> {label}
              </dt>
              <dd>{value}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}
