import { createContext, useContext } from 'react'
import type { Lang, Localized } from './types.ts'

export const LANGS: Lang[] = ['id', 'en']

export const SECTIONS = ['tentang', 'pengalaman', 'proyek', 'keahlian', 'resume', 'kontak'] as const
export type SectionId = (typeof SECTIONS)[number]

// Teks antarmuka (menu, judul bagian, tombol). Isi portofolio ada di data.ts.
const id = {
  nav: {
    tentang: 'Tentang',
    pengalaman: 'Pengalaman',
    proyek: 'Proyek',
    keahlian: 'Tech Stack',
    resume: 'Resume',
    kontak: 'Kontak',
  } satisfies Record<SectionId, string>,
  skip: 'Lewati ke konten',
  toggleTheme: 'Ganti tema terang/gelap',
  toggleLang: 'Switch to English',
  menu: 'Menu',
  available: 'Terbuka untuk peluang baru',
  hello: 'Halo, saya',
  buildWith: 'Saya membangun aplikasi dengan',
  viewWork: 'Lihat proyek',
  downloadCv: 'Unduh CV',
  contactMe: 'Hubungi saya',
  aboutTitle: 'Tentang saya',
  aboutLead: 'Dari kebutuhan bisnis ke aplikasi yang dipakai setiap hari.',
  facts: {
    now: 'Sekarang',
    base: 'Berbasis di',
    study: 'Sedang menempuh',
    langs: 'Bahasa',
  },
  experienceTitle: 'Pengalaman',
  experienceLead: 'Pilih peran untuk melihat detailnya.',
  present: 'Sekarang',
  months: (n: number) => (n < 12 ? `${n} bln` : `${Math.floor(n / 12)} thn${n % 12 ? ` ${n % 12} bln` : ''}`),
  projectsTitle: 'Proyek',
  projectsLead: 'Proyek pribadi lengkap dengan demo, video, dan PDF. Proyek profesional bersifat rahasia, jadi hanya ringkasannya.',
  filterAll: 'Semua',
  personal: 'Pribadi',
  professional: 'Profesional',
  confidential: 'Rahasia perusahaan',
  screenshotOf: 'Tampilan',
  viewDetail: 'Lihat detail',
  photos: 'foto',
  gallery: 'Galeri',
  close: 'Tutup',
  previous: 'Sebelumnya',
  next: 'Berikutnya',
  zoomIn: 'Klik untuk ukuran asli',
  zoomOut: 'Klik untuk menyesuaikan layar',
  demo: 'Coba demo',
  video: 'Video demo',
  videoTitle: 'Video demo singkat',
  tutorial: 'Tutorial',
  tutorialTitle: 'Video tutorial langkah demi langkah',
  doc: 'PDF',
  docTitle: 'Penjelasan proyek: fitur, arsitektur, keputusan teknis (PDF)',
  code: 'Kode',
  codeTitle: 'Kode sumber di GitHub',
  stackTitle: 'Tech Stack',
  stackLead: 'Pilih teknologi untuk melihat di mana saya memakainya.',
  usedIn: 'Dipakai di',
  notUsedYet: 'Belum tercantum di pengalaman atau proyek.',
  pickTech: 'Pilih salah satu teknologi di kiri.',
  roles: 'peran',
  projects: 'proyek',
  resumeTitle: 'Resume',
  resumeLead: 'CV lengkap dalam bahasa Indonesia dan Inggris, dibuat otomatis dari isi situs ini sehingga selalu sama dengan yang Anda lihat di sini.',
  cvIn: 'CV dalam',
  langName: { id: 'Bahasa Indonesia', en: 'English' } satisfies Record<Lang, string>,
  openCv: 'Buka',
  education: 'Pendidikan',
  certifications: 'Sertifikasi',
  languages: 'Bahasa',
  contactTitle: 'Mari terhubung',
  contactLead: 'Punya peluang kerja, proyek, atau sekadar ingin berdiskusi? Tulis pesan singkat di bawah, atau hubungi langsung.',
  localTime: 'Waktu lokal',
  yourName: 'Nama kamu',
  message: 'Pesan',
  messagePlaceholder: 'Halo Raihan, saya ingin berdiskusi tentang…',
  send: 'Kirim lewat email',
  copyEmail: 'Salin email',
  copied: 'Tersalin ✓',
  copyPrompt: 'Salin alamat email:',
  mailSubject: (name: string) => `Halo dari ${name || 'portofolio'}`,
  palette: 'Cari perintah atau bagian…',
  paletteHint: 'Navigasi cepat',
  paletteEmpty: 'Tidak ada hasil.',
  commands: {
    goTo: 'Ke bagian',
    theme: 'Ganti tema terang/gelap',
    lang: 'Ganti bahasa ke English',
    cv: 'Unduh CV',
    email: 'Salin alamat email',
    project: 'Buka proyek',
  },
  backToTop: 'Kembali ke atas',
  builtWith: 'Dibuat dengan React + TypeScript',
}

export type UiText = typeof id

const en: UiText = {
  nav: {
    tentang: 'About',
    pengalaman: 'Experience',
    proyek: 'Projects',
    keahlian: 'Tech Stack',
    resume: 'Resume',
    kontak: 'Contact',
  },
  skip: 'Skip to content',
  toggleTheme: 'Toggle light/dark theme',
  toggleLang: 'Ganti ke Bahasa Indonesia',
  menu: 'Menu',
  available: 'Open to new opportunities',
  hello: "Hi, I'm",
  buildWith: 'I build apps with',
  viewWork: 'View projects',
  downloadCv: 'Download CV',
  contactMe: 'Contact me',
  aboutTitle: 'About me',
  aboutLead: 'From business needs to apps people use every day.',
  facts: {
    now: 'Currently',
    base: 'Based in',
    study: 'Studying',
    langs: 'Languages',
  },
  experienceTitle: 'Experience',
  experienceLead: 'Pick a role to see the details.',
  present: 'Present',
  months: (n: number) => (n < 12 ? `${n} mo` : `${Math.floor(n / 12)} yr${n % 12 ? ` ${n % 12} mo` : ''}`),
  projectsTitle: 'Projects',
  projectsLead: 'Personal projects come with a demo, videos, and a PDF. Professional projects are confidential, so only a summary is shown.',
  filterAll: 'All',
  personal: 'Personal',
  professional: 'Professional',
  confidential: 'Company confidential',
  screenshotOf: 'Screenshot of',
  viewDetail: 'View details',
  photos: 'photos',
  gallery: 'Gallery',
  close: 'Close',
  previous: 'Previous',
  next: 'Next',
  zoomIn: 'Click for full size',
  zoomOut: 'Click to fit the screen',
  demo: 'Try demo',
  video: 'Demo video',
  videoTitle: 'Short demo video',
  tutorial: 'Tutorial',
  tutorialTitle: 'Step-by-step tutorial video',
  doc: 'PDF',
  docTitle: 'Project overview: features, architecture, technical decisions (PDF)',
  code: 'Code',
  codeTitle: 'Source code on GitHub',
  stackTitle: 'Tech Stack',
  stackLead: 'Pick a technology to see where I have used it.',
  usedIn: 'Used in',
  notUsedYet: 'Not listed in any role or project yet.',
  pickTech: 'Pick a technology on the left.',
  roles: 'roles',
  projects: 'projects',
  resumeTitle: 'Resume',
  resumeLead: 'My full CV in Indonesian and English, generated from this site’s content so it always matches what you see here.',
  cvIn: 'CV in',
  langName: { id: 'Bahasa Indonesia', en: 'English' },
  openCv: 'Open',
  education: 'Education',
  certifications: 'Certifications',
  languages: 'Languages',
  contactTitle: "Let's connect",
  contactLead: 'Have a job opportunity, a project, or just want to chat? Write a short message below, or reach out directly.',
  localTime: 'Local time',
  yourName: 'Your name',
  message: 'Message',
  messagePlaceholder: 'Hi Raihan, I’d like to talk about…',
  send: 'Send by email',
  copyEmail: 'Copy email',
  copied: 'Copied ✓',
  copyPrompt: 'Copy email address:',
  mailSubject: (name: string) => `Hello from ${name || 'your portfolio'}`,
  palette: 'Search commands or sections…',
  paletteHint: 'Quick navigation',
  paletteEmpty: 'No results.',
  commands: {
    goTo: 'Go to',
    theme: 'Toggle light/dark theme',
    lang: 'Switch language to Bahasa Indonesia',
    cv: 'Download CV',
    email: 'Copy email address',
    project: 'Open project',
  },
  backToTop: 'Back to top',
  builtWith: 'Built with React + TypeScript',
}

export const ui: Record<Lang, UiText> = { id, en }

// Field di data.ts bisa berupa nilai biasa (sama untuk semua bahasa) atau { id, en }.
export function pick<T>(value: Localized<T>, lang: Lang): T {
  if (value && typeof value === 'object' && !Array.isArray(value) && 'id' in value) {
    return (value as { id: T; en: T })[lang] ?? (value as { id: T }).id
  }
  return value as T
}

export interface LangState {
  lang: Lang
  setLang: (lang: Lang) => void
}

export const LangContext = createContext<LangState>({ lang: 'id', setLang: () => {} })

export function useLang() {
  const { lang, setLang } = useContext(LangContext)
  return { lang, setLang, t: ui[lang], tr: <T,>(value: Localized<T>) => pick(value, lang) }
}
