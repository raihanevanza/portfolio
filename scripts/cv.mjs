// Membuat CV PDF (ID dan EN) dari isi src/data.js, memakai Google Chrome headless.
// Jalankan: npm run cv  → hasilnya di public/, sesuai path profile.cvUrl.
// Path Chrome bisa diganti lewat env CHROME_PATH.

import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { profile, contacts, skills, experiences, projects, education, certifications, cv } from '../src/data.js'

const root = resolve(fileURLToPath(import.meta.url), '../..')

const labels = {
  id: {
    summary: 'Ringkasan',
    experience: 'Pengalaman Kerja',
    projects: 'Proyek',
    skills: 'Keahlian',
    education: 'Pendidikan',
    certifications: 'Sertifikasi',
    languages: 'Bahasa',
    present: 'Sekarang',
  },
  en: {
    summary: 'Summary',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    certifications: 'Certifications',
    languages: 'Languages',
    present: 'Present',
  },
}

// Sama dengan pick() di src/i18n.js (tidak diimpor karena file itu memuat React).
const pick = (value, lang) =>
  value && typeof value === 'object' && !Array.isArray(value) ? value[lang] ?? value.id : value

const esc = (s) =>
  String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])

const stripProtocol = (url) => url.replace(/^https?:\/\/(www\.)?/, '')

function section(title, body) {
  return body ? `<section><h2>${esc(title)}</h2>${body}</section>` : ''
}

function renderExperience(lang, L) {
  // Peran berurutan di perusahaan yang sama digabung di bawah satu nama perusahaan.
  const groups = []
  for (const exp of experiences) {
    const last = groups.at(-1)
    if (last && last.company === exp.company) last.roles.push(exp)
    else groups.push({ company: exp.company, roles: [exp] })
  }

  return groups
    .map(
      (g) => `
      <div class="company">
        <h3>${esc(g.company)}</h3>
        ${g.roles
          .map((r) => {
            const highlights = pick(r.highlights, lang) ?? []
            const period = `${esc(pick(r.start, lang))} – ${esc(pick(r.end, lang) || L.present)}`
            return `
            <div class="entry">
              <div class="row"><span class="role">${esc(r.role)}</span><span class="date">${period}</span></div>
              <p>${esc(pick(r.summary, lang))}</p>
              ${highlights.length ? `<ul>${highlights.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>` : ''}
              ${r.tech?.length ? `<p class="tech">${r.tech.map(esc).join(' · ')}</p>` : ''}
            </div>`
          })
          .join('')}
      </div>`,
    )
    .join('')
}

function renderProjects(lang) {
  // Proyek tanpa link/repo sudah tercakup di Pengalaman, jadi hanya proyek publik yang ditampilkan.
  return projects
    .filter((p) => p.link || p.repo)
    .map((p) => {
      const url = p.link || p.repo
      return `
      <div class="entry">
        <div class="row"><span class="role">${esc(pick(p.title, lang))}</span><a class="date" href="${esc(url)}">${esc(stripProtocol(url))}</a></div>
        <p>${esc(pick(p.description, lang))}</p>
        <p class="tech">${p.tech.map(esc).join(' · ')}</p>
      </div>`
    })
    .join('')
}

function renderEducation(lang) {
  return education
    .map((e) => {
      const note = pick(e.note, lang)
      return `
      <div class="entry">
        <div class="row"><span class="role">${esc(pick(e.degree, lang))} <span class="muted">— ${esc(e.school)}</span></span><span class="date">${esc(pick(e.period, lang))}</span></div>
        ${note ? `<p class="muted">${esc(note)}</p>` : ''}
      </div>`
    })
    .join('')
}

function renderHtml(lang) {
  const L = labels[lang]
  const photo = profile.photo && join(root, 'public', profile.photo)
  // Baris 1: kontak langsung. Baris 2: link (portofolio, lalu contacts selain email).
  const email = contacts.find((c) => c.href.startsWith('mailto:'))
  const contactRows = [
    [
      cv?.phone && `<span>${esc(cv.phone)}</span>`,
      email && `<a href="${esc(email.href)}">${esc(email.value)}</a>`,
      `<span>${esc(pick(profile.location, lang))}</span>`,
    ],
    [
      cv?.website && `<a class="web" href="${esc(cv.website)}">${esc(stripProtocol(cv.website))}</a>`,
      ...contacts.filter((c) => c !== email).map((c) => `<a href="${esc(c.href)}">${esc(c.value)}</a>`),
    ],
  ].map((row) => row.filter(Boolean))

  const skillsBody = skills
    .map((s) => `<p><strong>${esc(pick(s.group, lang))}:</strong> ${s.items.map(esc).join(', ')}</p>`)
    .join('')
  const certBody = certifications.length
    ? `<ul>${certifications.map((c) => `<li>${esc(pick(c.name ?? c, lang))}</li>`).join('')}</ul>`
    : ''
  const langBody = cv?.languages?.length ? `<p>${cv.languages.map((l) => esc(pick(l, lang))).join(' · ')}</p>` : ''

  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8" />
<title>${esc(profile.name)} — CV</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
<style>
  @page { size: A4; margin: 14mm 15mm; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Plus Jakarta Sans', 'Helvetica Neue', Arial, sans-serif;
    font-size: 9.6pt; line-height: 1.45; color: #0f1e2b;
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  a { color: inherit; text-decoration: none; }
  header { display: flex; align-items: center; gap: 18px; padding-bottom: 12px; border-bottom: 2px solid #0b6bcb; }
  header .id { flex: 1; }
  header h1 { font-size: 24pt; font-weight: 800; letter-spacing: -0.02em; line-height: 1.1; }
  header .title { font-size: 12pt; font-weight: 600; color: #0b6bcb; margin-top: 2px; }
  header .contacts { font-size: 8.8pt; color: #4d6474; }
  header .title + .contacts { margin-top: 8px; }
  header .contacts > * { white-space: nowrap; }
  header .contacts .web { color: #0b6bcb; font-weight: 600; }
  header .contacts > * + *::before { content: '·'; margin: 0 7px; color: #9bb3c0; }
  header img { width: 78px; height: 78px; border-radius: 50%; object-fit: cover; }
  section { margin-top: 13px; }
  h2 {
    font-size: 9pt; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: #0b6bcb;
    padding-bottom: 3px; margin-bottom: 7px; border-bottom: 1px solid #d5e3ea; break-after: avoid;
  }
  h3 { font-size: 10.5pt; font-weight: 700; margin-bottom: 2px; break-after: avoid; }
  .company + .company { margin-top: 10px; }
  .entry { break-inside: avoid; }
  .entry + .entry { margin-top: 7px; }
  .row { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
  .role { font-weight: 600; }
  .date { flex-shrink: 0; font-size: 8.8pt; color: #4d6474; }
  .muted { color: #4d6474; font-weight: 400; }
  .tech { font-size: 8.6pt; color: #0891b2; margin-top: 2px; }
  ul { margin: 3px 0 0 14px; }
  li + li { margin-top: 1px; }
  section > p + p { margin-top: 2px; }
</style>
</head>
<body>
  <header>
    <div class="id">
      <h1>${esc(profile.name)}</h1>
      <p class="title">${esc(pick(profile.role, lang))}</p>
      ${contactRows.map((row) => `<p class="contacts">${row.join('')}</p>`).join('')}
    </div>
    ${photo && existsSync(photo) ? `<img src="${pathToFileURL(photo)}" alt="" />` : ''}
  </header>
  ${section(L.summary, pick(profile.about, lang).map((p) => `<p>${esc(p)}</p>`).join(''))}
  ${section(L.experience, renderExperience(lang, L))}
  ${section(L.projects, renderProjects(lang))}
  ${section(L.skills, skillsBody)}
  ${section(L.education, renderEducation(lang))}
  ${section(L.certifications, certBody)}
  ${section(L.languages, langBody)}
</body>
</html>`
}

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ]
  const found = candidates.find((p) => p && existsSync(p))
  if (!found) throw new Error('Chrome tidak ditemukan. Set env CHROME_PATH ke lokasi Chrome/Chromium.')
  return found
}

const chrome = findChrome()
const tmp = mkdtempSync(join(tmpdir(), 'cv-'))

for (const lang of ['id', 'en']) {
  const url = pick(profile.cvUrl, lang)
  if (!url) continue
  const html = join(tmp, `cv-${lang}.html`)
  const pdf = join(root, 'public', url)
  writeFileSync(html, renderHtml(lang))
  execFileSync(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-pdf-header-footer',
      '--virtual-time-budget=10000', // beri waktu web font termuat
      `--print-to-pdf=${pdf}`,
      pathToFileURL(html).href,
    ],
    { stdio: 'ignore' },
  )
  console.log(`✓ ${lang.toUpperCase()}: public${url}`)
}
