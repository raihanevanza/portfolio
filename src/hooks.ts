import { useCallback, useEffect, useRef, useState } from 'react'
import { LANGS, SECTIONS, type SectionId } from './i18n.ts'
import type { Lang } from './types.ts'

const storage = {
  get(key: string) {
    try {
      return localStorage.getItem(key)
    } catch {
      return null
    }
  },
  set(key: string, value: string) {
    try {
      localStorage.setItem(key, value)
    } catch {}
  },
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Pilihan yang tersimpan menang; tanpa itu, ikuti bahasa browser pengunjung. */
export function useLanguage() {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = storage.get('lang') as Lang | null
    if (saved && LANGS.includes(saved)) return saved
    return navigator.language?.toLowerCase().startsWith('id') ? 'id' : 'en'
  })
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    storage.set('lang', next)
  }, [])
  return { lang, setLang }
}

/** Bagian yang sedang terlihat di tengah layar, untuk menandai menu aktif. */
export function useActiveSection() {
  const [active, setActive] = useState<SectionId | ''>('')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    const onScroll = () => window.scrollY < 200 && setActive('')
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  return active
}

/** 0–1, seberapa jauh halaman sudah digulir. Ditulis ke CSS var supaya tidak memicu render. */
export function useScrollProgress(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      ref.current?.style.setProperty('--progress', String(max > 0 ? window.scrollY / max : 0))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ref])
}

/** Menambahkan class `in` saat elemen pertama kali masuk layar (animasi muncul). */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || shown) return
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      setShown(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [shown])
  return { ref, shown }
}

/** Mengetik kata satu per satu, menghapusnya, lalu lanjut ke kata berikutnya. */
export function useTypewriter(words: string[]) {
  const [text, setText] = useState(words[0] ?? '')
  useEffect(() => {
    if (prefersReducedMotion() || words.length < 2) return
    let word = 0
    let length = words[0].length
    let deleting = false
    let timer: number
    const tick = () => {
      const current = words[word]
      if (!deleting && length === current.length) {
        deleting = true
        timer = window.setTimeout(tick, 1600)
        return
      }
      if (deleting && length === 0) {
        deleting = false
        word = (word + 1) % words.length
      }
      length += deleting ? -1 : 1
      setText(words[word].slice(0, length))
      timer = window.setTimeout(tick, deleting ? 45 : 85)
    }
    timer = window.setTimeout(tick, 1600)
    return () => clearTimeout(timer)
  }, [words])
  return text
}

/** Menghitung naik dari 0 ke angka di `value` (misal '6+') saat `start` true. */
export function useCountUp(value: string, start: boolean) {
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? Number(match[1]) : 0
  const [n, setN] = useState(() => (prefersReducedMotion() ? target : 0))
  useEffect(() => {
    if (!start || !match || prefersReducedMotion()) return
    const begin = performance.now()
    let frame = requestAnimationFrame(function step(now) {
      const p = Math.min(1, (now - begin) / 900)
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) frame = requestAnimationFrame(step)
    })
    return () => cancelAnimationFrame(frame)
  }, [start, target]) // eslint-disable-line react-hooks/exhaustive-deps
  return match ? `${n}${match[2]}` : value
}

/** Jam lokal di zona waktu tertentu, diperbarui tiap 30 detik. */
export function useClock(timeZone: string, lang: Lang) {
  const format = () =>
    new Intl.DateTimeFormat(lang === 'id' ? 'id-ID' : 'en-GB', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    }).format(new Date())
  const [time, setTime] = useState(format)
  useEffect(() => {
    setTime(format())
    const timer = setInterval(() => setTime(format()), 30_000)
    return () => clearInterval(timer)
  }, [timeZone, lang]) // eslint-disable-line react-hooks/exhaustive-deps
  return time
}

/** Salin teks; kalau clipboard diblokir, tampilkan prompt supaya tetap bisa disalin manual. */
export function useCopy(promptLabel: string) {
  const [copied, setCopied] = useState(false)
  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text)
      } catch {
        window.prompt(promptLabel, text)
        return
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    },
    [promptLabel],
  )
  return { copied, copy }
}

/** Mengunci scroll halaman selama komponen ini tampil. Dialog Rupa sudah mengunci scroll sendiri. */
export function useBodyLock() {
  useEffect(() => {
    document.documentElement.classList.add('locked')
    return () => document.documentElement.classList.remove('locked')
  }, [])
}
