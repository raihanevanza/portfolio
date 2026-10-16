// Bentuk data portofolio. Isinya ada di data.ts.

export type Lang = 'id' | 'en'

/** Nilai yang sama di semua bahasa, atau berbeda per bahasa: { id, en }. */
export type Localized<T = string> = T | { id: T; en: T }

export interface Profile {
  name: string
  role: Localized
  location: Localized
  tagline: Localized
  about: Localized<string[]>
  /** Kata yang bergantian di hero ("Saya membangun aplikasi dengan …"). */
  focus: string[]
  /** File CV di /public, dibuat dengan `npm run cv`. Kosongkan ('') untuk menyembunyikan tombol. */
  cvUrl: Localized
  /** Foto profil di /public, misal '/foto.jpg'. Kosongkan untuk memakai inisial. */
  photo: string
  /** Tampilkan badge "Terbuka untuk peluang baru". */
  available: boolean
  /** Zona waktu jam lokal di bagian Kontak. */
  timeZone: string
}

export interface Contact {
  label: Localized
  value: string
  href: string
}

export interface Stat {
  value: string
  label: Localized
}

export interface SkillGroup {
  group: Localized
  items: string[]
}

export interface Experience {
  company: string
  role: Localized
  type: Localized
  location: Localized
  start: Localized
  /** '' berarti masih bekerja di sana (ditampilkan "Sekarang"). */
  end: Localized
  summary: Localized
  highlights: Localized<string[]> | []
  tech: string[]
}

export interface GalleryImage {
  src: string
  thumb?: string
  caption?: Localized
}

export interface Project {
  title: Localized
  category: 'personal' | 'professional'
  description: Localized
  tech: string[]
  image?: string
  gallery?: GalleryImage[]
  link: string
  video?: string
  tutorial?: string
  doc?: Localized
  repo: string
}

export interface Education {
  school: string
  degree: Localized
  period: Localized
  note: Localized
}

export interface Certification {
  name: Localized
  issuer: string
  year: string
}

export interface CvExtra {
  website: string
  phone: string
  languages: Localized[]
}
