import { Segmented } from '@rupa-ui/react'
import { useState } from 'react'
import { projects } from '../data.ts'
import { useLang } from '../i18n.ts'
import { initials } from '../lib.ts'
import type { Project } from '../types.ts'
import { ButtonLink } from './ButtonLink.tsx'
import { Icon, type IconName } from './Icon.tsx'
import { Reveal, Section, Tags } from './Section.tsx'

type Filter = 'all' | Project['category']

// Tautan pertama (biasanya demo) ditampilkan sebagai tombol utama.
export function ProjectLinks({ project: p, compact = false }: { project: Project; compact?: boolean }) {
  const { t, tr } = useLang()
  const links = (
    [
      [p.link, t.demo, '', 'arrowUpRight'],
      [p.video, t.video, t.videoTitle, 'play'],
      [p.tutorial, t.tutorial, t.tutorialTitle, 'play'],
      [p.doc && tr(p.doc), t.doc, t.docTitle, 'file'],
      [p.repo, t.code, t.codeTitle, 'code'],
    ] as [string | undefined, string, string, IconName][]
  ).filter(([href]) => href)
  if (!links.length) return null
  return (
    <div className={`project-links ${compact ? 'project-links-compact' : ''}`}>
      {links.map(([href, label, title, icon], i) => (
        <ButtonLink
          key={href}
          title={title || undefined}
          variant={i === 0 ? 'primary' : 'secondary'}
          size={compact ? 'sm' : 'md'}
          iconStart={<Icon name={icon} size={14} />}
          href={href}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          {label}
        </ButtonLink>
      ))}
    </div>
  )
}

// Label "Proyek pribadi:" sudah terlihat di kartu, jadi dibuang dari ringkasannya.
function shortDescription(text: string) {
  const rest = text.replace(/^(Proyek pribadi|Personal project): /, '')
  return rest.charAt(0).toUpperCase() + rest.slice(1)
}

function ProjectCard({ project: p, featured, onOpen }: { project: Project; featured: boolean; onOpen: () => void }) {
  const { t, tr } = useLang()
  const title = tr(p.title)
  const photos = p.gallery?.length ?? 0
  return (
    <article className={`project ${featured ? 'project-featured' : ''} ${p.image ? '' : 'project-plain'}`}>
      <button className="project-hit" onClick={onOpen} aria-label={`${t.viewDetail}: ${title}`} />
      <div className="project-media">
        {p.image ? (
          <img src={p.image} alt={`${t.screenshotOf} ${title}`} loading="lazy" />
        ) : (
          <div className="project-mono" aria-hidden="true">
            <span>{initials(title.replace(/[^A-Za-z ]/g, ' ').trim())}</span>
            <small>
              <Icon name="lock" size={12} /> {t.confidential}
            </small>
          </div>
        )}
        <span className="project-open">
          {t.viewDetail}
          {photos > 1 && ` · ${photos} ${t.photos}`} <Icon name="arrowUpRight" size={14} />
        </span>
      </div>
      <div className="project-body">
        <p className="project-cat">{p.category === 'personal' ? t.personal : t.professional}</p>
        <h3>{title}</h3>
        <p className="project-desc">{shortDescription(tr(p.description))}</p>
        <Tags items={p.tech} max={featured ? 7 : 4} />
        <ProjectLinks project={p} compact />
      </div>
    </article>
  )
}

export function Projects({ onOpen }: { onOpen: (index: number) => void }) {
  const { t } = useLang()
  const [filter, setFilter] = useState<Filter>('all')
  const filters: [Filter, string][] = [
    ['all', t.filterAll],
    ['personal', t.personal],
    ['professional', t.professional],
  ]
  const shown = projects.map((p, i) => ({ p, i })).filter(({ p }) => filter === 'all' || p.category === filter)

  return (
    <Section
      id="proyek"
      title={t.projectsTitle}
      lead={t.projectsLead}
      aside={
        <Segmented
          label={t.projectsTitle}
          value={filter}
          onChange={setFilter}
          options={filters.map(([key, label]) => ({
            value: key,
            label: (
              <>
                {label}
                <span className="seg-count">
                  {key === 'all' ? projects.length : projects.filter((p) => p.category === key).length}
                </span>
              </>
            ),
          }))}
        />
      }
    >
      <div className="projects" key={filter}>
        {shown.map(({ p, i }, n) => (
          <Reveal key={i} delay={Math.min(n, 5) * 60} className={n === 0 && p.image ? 'span-2' : ''}>
            <ProjectCard project={p} featured={n === 0 && !!p.image} onOpen={() => onOpen(i)} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
