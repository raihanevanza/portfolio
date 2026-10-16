import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { contacts, profile, projects } from '../data.ts'
import { useBodyLock, useCopy } from '../hooks.ts'
import { SECTIONS, useLang } from '../i18n.ts'
import { Icon, type IconName } from './Icon.tsx'

interface Command {
  id: string
  group: string
  label: string
  icon: IconName
  run: () => void
}

export function CommandPalette({
  onClose,
  onToggleTheme,
  onOpenProject,
}: {
  onClose: () => void
  onToggleTheme: () => void
  onOpenProject: (index: number) => void
}) {
  const { t, tr, lang, setLang } = useLang()
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const { copy } = useCopy(t.copyPrompt)
  useBodyLock()

  const commands = useMemo<Command[]>(() => {
    const email = contacts.find((c) => c.href.startsWith('mailto:'))
    const cv = tr(profile.cvUrl)
    return [
      ...SECTIONS.map((id) => ({
        id: `go-${id}`,
        group: t.commands.goTo,
        label: t.nav[id],
        icon: 'hash' as IconName,
        run: () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }),
      })),
      ...projects.map((p, i) => ({
        id: `project-${i}`,
        group: t.commands.project,
        label: tr(p.title),
        icon: 'layers' as IconName,
        run: () => onOpenProject(i),
      })),
      { id: 'theme', group: t.menu, label: t.commands.theme, icon: 'moon', run: onToggleTheme },
      { id: 'lang', group: t.menu, label: t.commands.lang, icon: 'globe', run: () => setLang(lang === 'id' ? 'en' : 'id') },
      ...(cv
        ? [{ id: 'cv', group: t.menu, label: t.commands.cv, icon: 'download' as IconName, run: () => window.open(cv, '_blank') }]
        : []),
      ...(email
        ? [{ id: 'email', group: t.menu, label: `${t.commands.email} (${email.value})`, icon: 'copy' as IconName, run: () => copy(email.value) }]
        : []),
    ]
  }, [t, tr, lang, setLang, onToggleTheme, onOpenProject, copy])

  const q = query.trim().toLowerCase()
  const results = q ? commands.filter((c) => `${c.group} ${c.label}`.toLowerCase().includes(q)) : commands

  useEffect(() => setActive(0), [query])
  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null
    inputRef.current?.focus()
    return () => previousFocus?.focus?.()
  }, [])
  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' })
  }, [active])

  const run = (c: Command | undefined) => {
    if (!c) return
    onClose()
    // Tunggu palet tertutup (scroll terbuka lagi) sebelum menggulir.
    requestAnimationFrame(() => c.run())
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((a) => Math.min(results.length - 1, a + 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((a) => Math.max(0, a - 1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      run(results[active])
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  let lastGroup = ''
  return createPortal(
    <div className="palette-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="palette" role="dialog" aria-modal="true" aria-label={t.paletteHint} onKeyDown={onKeyDown}>
        <div className="palette-input">
          <Icon name="search" size={18} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.palette}
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={results[active] ? `cmd-${results[active].id}` : undefined}
          />
          <kbd>Esc</kbd>
        </div>
        <ul className="palette-list" id="palette-list" role="listbox" ref={listRef}>
          {results.length === 0 && <li className="palette-empty">{t.paletteEmpty}</li>}
          {results.map((c, i) => {
            const header = c.group !== lastGroup ? c.group : ''
            lastGroup = c.group
            return (
              <li key={c.id} role="presentation">
                {header && <p className="palette-group">{header}</p>}
                <button
                  id={`cmd-${c.id}`}
                  role="option"
                  aria-selected={i === active}
                  className="palette-item"
                  onMouseMove={() => setActive(i)}
                  onClick={() => run(c)}
                  tabIndex={-1}
                >
                  <Icon name={c.icon} size={16} />
                  <span>{c.label}</span>
                  <Icon name="arrowRight" size={14} />
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>,
    document.body,
  )
}
