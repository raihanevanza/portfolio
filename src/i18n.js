import { createContext, useContext } from 'react'

export const LANGS = ['id', 'en']

// Teks antarmuka (menu, judul bagian, tombol). Isi portofolio ada di data.js.
export const ui = {
  id: {
    nav: {
      tentang: 'Tentang',
      pengalaman: 'Pengalaman',
      proyek: 'Proyek',
      keahlian: 'Keahlian',
      kontak: 'Kontak',
    },
    toggleTheme: 'Ganti tema',
    toggleLang: 'Switch to English',
    menu: 'Menu',
    available: 'Terbuka untuk peluang baru',
    hello: 'Halo, saya',
    viewExperience: 'Lihat Pengalaman',
    downloadCv: 'Unduh CV',
    contactMe: 'Hubungi Saya',
    aboutEyebrow: 'Tentang',
    aboutTitle: 'Sedikit tentang saya',
    education: 'Pendidikan',
    certifications: 'Sertifikasi',
    experienceEyebrow: 'Pengalaman',
    experienceTitle: 'Perjalanan karier',
    present: 'Sekarang',
    projectsEyebrow: 'Portofolio',
    projectsTitle: 'Proyek pilihan',
    personalProjects: 'Proyek Pribadi',
    professionalProjects: 'Proyek Profesional',
    screenshotOf: 'Tampilan',
    viewDetail: 'Lihat detail',
    photos: 'foto',
    close: 'Tutup',
    previous: 'Sebelumnya',
    next: 'Berikutnya',
    zoomIn: 'Klik untuk ukuran asli',
    zoomOut: 'Klik untuk menyesuaikan layar',
    demo: 'Coba demo ↗',
    video: 'Tonton video ↗',
    code: 'Lihat kode ↗',
    skillsEyebrow: 'Keahlian',
    skillsTitle: 'Yang saya gunakan sehari-hari',
    contactEyebrow: 'Kontak',
    contactTitle: 'Mari terhubung',
    contactLead: 'Punya peluang kerja, proyek, atau sekadar ingin berdiskusi? Silakan hubungi saya.',
    copyEmail: 'Salin email',
    copied: 'Tersalin ✓',
    copyPrompt: 'Salin alamat email:',
  },
  en: {
    nav: {
      tentang: 'About',
      pengalaman: 'Experience',
      proyek: 'Projects',
      keahlian: 'Skills',
      kontak: 'Contact',
    },
    toggleTheme: 'Toggle theme',
    toggleLang: 'Ganti ke Bahasa Indonesia',
    menu: 'Menu',
    available: 'Open to new opportunities',
    hello: "Hi, I'm",
    viewExperience: 'View Experience',
    downloadCv: 'Download CV',
    contactMe: 'Contact Me',
    aboutEyebrow: 'About',
    aboutTitle: 'A little about me',
    education: 'Education',
    certifications: 'Certifications',
    experienceEyebrow: 'Experience',
    experienceTitle: 'Career journey',
    present: 'Present',
    projectsEyebrow: 'Portfolio',
    projectsTitle: 'Selected projects',
    personalProjects: 'Personal Projects',
    professionalProjects: 'Professional Projects',
    screenshotOf: 'Screenshot of',
    viewDetail: 'View details',
    photos: 'photos',
    close: 'Close',
    previous: 'Previous',
    next: 'Next',
    zoomIn: 'Click for full size',
    zoomOut: 'Click to fit the screen',
    demo: 'Try demo ↗',
    video: 'Watch video ↗',
    code: 'View code ↗',
    skillsEyebrow: 'Skills',
    skillsTitle: 'What I use every day',
    contactEyebrow: 'Contact',
    contactTitle: "Let's connect",
    contactLead: 'Have a job opportunity, a project, or just want to chat? Feel free to reach out.',
    copyEmail: 'Copy email',
    copied: 'Copied ✓',
    copyPrompt: 'Copy email address:',
  },
}

// Field di data.js bisa berupa nilai biasa (sama untuk semua bahasa) atau { id, en }.
export function pick(value, lang) {
  if (value && typeof value === 'object' && !Array.isArray(value)) return value[lang] ?? value.id
  return value
}

export const LangContext = createContext({ lang: 'id', setLang: () => {} })

export function useLang() {
  const { lang, setLang } = useContext(LangContext)
  return { lang, setLang, t: ui[lang], tr: (value) => pick(value, lang) }
}
