import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import { useReveal } from '../hooks.ts'
import { SECTIONS, type SectionId } from '../i18n.ts'

/** Muncul pelan (naik + fade) saat pertama kali masuk layar. `delay` dalam ms. */
export function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  children,
  ...rest
}: {
  as?: ElementType
  delay?: number
  className?: string
  children: ReactNode
} & HTMLAttributes<HTMLElement>) {
  const { ref, shown } = useReveal<HTMLElement>()
  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function Section({
  id,
  title,
  lead,
  aside,
  children,
}: {
  id: SectionId
  title: string
  lead?: string
  aside?: ReactNode
  children: ReactNode
}) {
  const number = String(SECTIONS.indexOf(id) + 1).padStart(2, '0')
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">
              <span>{number}</span> / {title}
            </p>
            <h2 id={`${id}-title`}>{title}</h2>
            {lead && <p className="section-lead">{lead}</p>}
          </div>
          {aside}
        </Reveal>
        {children}
      </div>
    </section>
  )
}

export function Tags({ items, max }: { items: string[]; max?: number }) {
  const shown = max ? items.slice(0, max) : items
  return (
    <ul className="tags">
      {shown.map((tech) => (
        <li key={tech} className="tag">
          {tech}
        </li>
      ))}
      {max && items.length > max && <li className="tag tag-more">+{items.length - max}</li>}
    </ul>
  )
}
