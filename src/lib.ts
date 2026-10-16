import { pick } from './i18n.ts'
import type { Experience, Localized, Project } from './types.ts'

export function initials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

/** 'Aug 2021' → indeks bulan sejak tahun 0. '' = bulan ini. Teks EN dipakai karena singkatannya baku. */
export function monthIndex(value: Localized) {
  const text = pick(value, 'en')
  if (!text) {
    const now = new Date()
    return now.getFullYear() * 12 + now.getMonth()
  }
  const [mon, year] = text.toLowerCase().split(' ')
  return Number(year) * 12 + Math.max(0, MONTHS.indexOf(mon.slice(0, 3)))
}

/** Lama bekerja dalam bulan, termasuk bulan mulai. */
export function duration(x: Experience) {
  return monthIndex(x.end) - monthIndex(x.start) + 1
}

// Nama keahlian di data.skills tidak selalu sama persis dengan tag teknologi di pengalaman/proyek.
const TECH_ALIASES: Record<string, string[]> = {
  'vue.js': ['vue 2 & 3', 'options & composition api'],
  'rest api': ['gin', 'axios'],
  redis: ['upstash redis'],
  vercel: ['vercel functions', 'vercel cron & blob', 'vercel cron'],
  // Vercel Functions di proyek ini berjalan di runtime Node.js
  'node.js': ['vercel functions'],
  // Git dipakai lewat GitHub atau Bitbucket
  git: ['github', 'bitbucket'],
  'jquery / ajax': ['jquery', 'ajax'],
}

/** Apakah tag (misal 'Next.js 16') termasuk keahlian `skill` (misal 'Next.js')? */
export function tagMatches(skill: string, tag: string) {
  const s = skill.toLowerCase()
  const t = tag.toLowerCase()
  return t === s || new RegExp(`^${s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')} \\d`).test(t) || !!TECH_ALIASES[s]?.includes(t)
}

export function usesOf(skill: string, experiences: Experience[], projects: Project[]) {
  return {
    roles: experiences.filter((x) => x.tech.some((tag) => tagMatches(skill, tag))),
    projects: projects.filter((p) => p.tech.some((tag) => tagMatches(skill, tag))),
  }
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}
