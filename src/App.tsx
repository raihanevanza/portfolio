import { useTheme } from '@rupa-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { About } from './components/About.tsx'
import { CommandPalette } from './components/CommandPalette.tsx'
import { Contact } from './components/Contact.tsx'
import { Experience } from './components/Experience.tsx'
import { Header } from './components/Header.tsx'
import { Hero } from './components/Hero.tsx'
import { Icon } from './components/Icon.tsx'
import { ProjectModal } from './components/ProjectModal.tsx'
import { Projects } from './components/Projects.tsx'
import { Resume } from './components/Resume.tsx'
import { TechStack } from './components/TechStack.tsx'
import { profile, projects } from './data.ts'
import { useLanguage } from './hooks.ts'
import { LangContext, pick, ui } from './i18n.ts'

export default function App() {
  const language = useLanguage()
  const { resolvedMode, setMode } = useTheme()
  const toggleTheme = useCallback(() => setMode(resolvedMode === 'dark' ? 'light' : 'dark'), [resolvedMode, setMode])
  const [palette, setPalette] = useState(false)
  const [project, setProject] = useState<number | null>(null)
  const t = ui[language.lang]

  useEffect(() => {
    document.title = `${profile.name} — ${pick(profile.role, language.lang)}`
  }, [language.lang])

  // ⌘K / Ctrl+K membuka palet perintah dari mana saja, kecuali saat detail proyek (Dialog Rupa) terbuka.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (project === null && (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPalette((open) => !open)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [project])

  const closePalette = useCallback(() => setPalette(false), [])
  const closeProject = useCallback(() => setProject(null), [])

  return (
    <LangContext.Provider value={language}>
      <Header onToggleTheme={toggleTheme} onOpenPalette={() => setPalette(true)} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects onOpen={setProject} />
        <TechStack onOpenProject={setProject} />
        <Resume />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span className="muted">{t.builtWith}</span>
          <a href="#top" className="footer-top">
            {t.backToTop} <Icon name="arrowUp" size={14} />
          </a>
        </div>
      </footer>
      {palette && <CommandPalette onClose={closePalette} onToggleTheme={toggleTheme} onOpenProject={setProject} />}
      {project !== null && <ProjectModal key={project} project={projects[project]} onClose={closeProject} />}
    </LangContext.Provider>
  )
}
