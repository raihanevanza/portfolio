// Membuat PDF penjelasan proyek (ID dan EN) dari scripts/project-docs/<slug>.mjs, memakai Google Chrome headless.
// Jalankan: npm run docs            → semua proyek
//           npm run docs -- patungan → satu proyek
// Hasilnya di public/projects/<slug>/<slug>-ID.pdf dan -EN.pdf. Path Chrome bisa diganti lewat env CHROME_PATH.

import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, readdirSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { profile, cv } from '../src/data.js'

const root = resolve(fileURLToPath(import.meta.url), '../..')
const docsDir = join(root, 'scripts/project-docs')

const labels = {
  id: {
    kicker: 'Penjelasan proyek',
    role: 'Peran',
    platforms: 'Platform',
    links: 'Tautan',
    overview: 'Ringkasan',
    features: 'Fitur utama',
    architecture: 'Arsitektur & alur data',
    stack: 'Teknologi per lapisan',
    decisions: 'Keputusan teknis',
    guide: 'Panduan penggunaan',
    guideLead: 'Langkah-langkah ini sama dengan urutan di video tutorial.',
    limits: 'Keterbatasan & catatan',
    next: 'Rencana berikutnya',
    step: 'Langkah',
  },
  en: {
    kicker: 'Project overview',
    role: 'Role',
    platforms: 'Platforms',
    links: 'Links',
    overview: 'Overview',
    features: 'Key features',
    architecture: 'Architecture & data flow',
    stack: 'Stack by layer',
    decisions: 'Technical decisions',
    guide: 'How to use it',
    guideLead: 'These steps follow the same order as the tutorial video.',
    limits: 'Limitations & notes',
    next: "What's next",
    step: 'Step',
  },
}

// Sama dengan pick() di src/i18n.js (tidak diimpor karena file itu memuat React).
const pick = (value, lang) =>
  value && typeof value === 'object' && !Array.isArray(value) ? value[lang] ?? value.id : value

const esc = (s) =>
  String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])

const stripProtocol = (url) => url.replace(/^https?:\/\/(www\.)?/, '')

const list = (items) => (items?.length ? `<ul>${items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : '')

function section(title, body, cls = '') {
  return body ? `<section class="${cls}"><h2>${esc(title)}</h2>${body}</section>` : ''
}

function renderHtml(doc, lang) {
  const L = labels[lang]
  const img = (file) => pathToFileURL(join(docsDir, 'img', doc.slug, file)).href
  const hero = doc.hero && existsSync(join(root, 'public', doc.hero)) ? pathToFileURL(join(root, 'public', doc.hero)).href : ''

  const meta = [
    [L.role, esc(pick(doc.role, lang))],
    [L.platforms, esc(pick(doc.platforms, lang))],
    [
      L.links,
      doc.links
        .map((l) => `<a href="${esc(l.url)}">${esc(pick(l.label, lang))}: ${esc(stripProtocol(l.url))}</a>`)
        .join('<br />'),
    ],
  ]
    .filter(([, v]) => v)
    .map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${v}</dd></div>`)
    .join('')

  const features = `<div class="cards">${doc.features
    .map((f) => `<div class="card"><h3>${esc(pick(f.title, lang))}</h3><p>${esc(pick(f.text, lang))}</p></div>`)
    .join('')}</div>`

  const flow = `<div class="flow">${doc.architecture.flow
    .map((b) => `<div class="box"><strong>${esc(b.name)}</strong><span>${esc(pick(b.detail, lang))}</span></div>`)
    .join('<div class="arrow">→</div>')}</div>${list(pick(doc.architecture.notes, lang))}`

  const stack = `<table class="stack">${doc.stack
    .map((s) => `<tr><th>${esc(pick(s.layer, lang))}</th><td>${s.items.map(esc).join(' · ')}</td></tr>`)
    .join('')}</table>`

  const decisions = `<ol class="decisions">${doc.decisions
    .map((d) => `<li><h3>${esc(pick(d.title, lang))}</h3><p>${esc(pick(d.text, lang))}</p></li>`)
    .join('')}</ol>`

  const guide = `<p class="lead">${esc(L.guideLead)}</p><div class="steps">${doc.guide
    .map(
      (g, i) => `<div class="step">
        ${g.image && existsSync(join(docsDir, 'img', doc.slug, g.image)) ? `<img src="${img(g.image)}" alt="" />` : ''}
        <div class="step-body"><span class="num">${i + 1}</span><div><h3>${esc(pick(g.title, lang))}</h3><p>${esc(pick(g.text, lang))}</p></div></div>
      </div>`,
    )
    .join('')}</div>`

  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8" />
<title>${esc(doc.title)} — ${esc(L.kicker)}</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
<style>
  @page {
    size: A4; margin: 15mm 15mm 16mm;
    @bottom-left { content: "${esc(doc.title)} · ${esc(profile.name)}"; font: 600 7.5pt 'Plus Jakarta Sans', sans-serif; color: #7b909c; }
    @bottom-right { content: counter(page) " / " counter(pages); font: 600 7.5pt 'Plus Jakarta Sans', sans-serif; color: #7b909c; }
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Plus Jakarta Sans', 'Helvetica Neue', Arial, sans-serif;
    font-size: 9.4pt; line-height: 1.5; color: #0f1e2b;
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  a { color: #0b6bcb; text-decoration: none; }
  header { padding: 18px 20px; border-radius: 14px; color: #fff; background: linear-gradient(120deg, #0b4f96 0%, #0b6bcb 55%, #0891b2 100%); }
  header .kicker { font-size: 8pt; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; opacity: 0.8; }
  header h1 { font-size: 26pt; font-weight: 800; letter-spacing: -0.02em; line-height: 1.1; margin: 4px 0 6px; }
  header p { font-size: 11pt; opacity: 0.92; max-width: 160mm; }
  header .author { margin-top: 10px; font-size: 8.6pt; opacity: 0.85; }
  .meta { display: grid; grid-template-columns: 1fr 1fr 1.35fr; gap: 14px; margin-top: 12px; }
  .meta dt { font-size: 7.6pt; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #4d6474; }
  .meta dd { font-size: 8.8pt; font-weight: 600; margin-top: 2px; word-break: break-word; }
  .tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 10px; }
  .tags span { font-size: 7.8pt; font-weight: 600; padding: 2px 8px; border-radius: 99px; background: #e8f3fa; color: #0b6bcb; }
  .hero { display: block; width: 100%; margin-top: 12px; border-radius: 10px; border: 1px solid #d5e3ea; }
  section { margin-top: 16px; }
  section > h2 + .lead { break-after: avoid; }
  h2 {
    font-size: 9pt; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: #0b6bcb;
    padding-bottom: 3px; margin-bottom: 8px; border-bottom: 1px solid #d5e3ea; break-after: avoid;
  }
  h3 { font-size: 9.8pt; font-weight: 700; line-height: 1.3; break-after: avoid; }
  section > p + p { margin-top: 5px; }
  ul { margin: 6px 0 0 15px; }
  li + li { margin-top: 3px; }
  .cards { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
  .card { padding: 9px 11px; border: 1px solid #d5e3ea; border-radius: 9px; background: #f7fbfd; break-inside: avoid; }
  .card p { margin-top: 3px; color: #2b3f4d; font-size: 8.8pt; }
  .flow { display: flex; align-items: stretch; gap: 6px; break-inside: avoid; }
  .flow .box { flex: 1; padding: 8px 9px; border-radius: 9px; border: 1px solid #b9d6e8; background: #eef6fb; display: flex; flex-direction: column; gap: 3px; }
  .flow .box strong { font-size: 9pt; color: #0b4f96; }
  .flow .box span { font-size: 7.9pt; color: #2b3f4d; line-height: 1.4; }
  .flow .arrow { align-self: center; color: #0891b2; font-weight: 800; font-size: 13pt; }
  .stack { width: 100%; border-collapse: collapse; break-inside: avoid; }
  .stack th, .stack td { text-align: left; vertical-align: top; padding: 5px 8px; border-bottom: 1px solid #e3edf2; font-size: 8.8pt; }
  .stack th { width: 32mm; font-weight: 700; color: #0b4f96; }
  .decisions { list-style: none; margin: 0; counter-reset: d; }
  .decisions li { position: relative; padding-left: 26px; break-inside: avoid; counter-increment: d; }
  .decisions li + li { margin-top: 8px; }
  .decisions li::before {
    content: counter(d); position: absolute; left: 0; top: 0; width: 18px; height: 18px; border-radius: 6px;
    background: #0b6bcb; color: #fff; font-size: 8pt; font-weight: 800; display: flex; align-items: center; justify-content: center;
  }
  .decisions p { margin-top: 2px; color: #2b3f4d; }
  .lead { color: #4d6474; margin-bottom: 8px; }
  .steps { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 12px; }
  .step { break-inside: avoid; }
  .step img { display: block; width: 100%; border-radius: 8px; border: 1px solid #d5e3ea; margin-bottom: 6px; }
  .step-body { display: flex; gap: 8px; }
  .step .num {
    flex: none; width: 20px; height: 20px; border-radius: 6px; background: #0891b2; color: #fff;
    font-size: 8.5pt; font-weight: 800; display: flex; align-items: center; justify-content: center;
  }
  .step p { margin-top: 2px; color: #2b3f4d; font-size: 8.8pt; }
</style>
</head>
<body>
  <header>
    <div class="kicker">${esc(L.kicker)}</div>
    <h1>${esc(doc.title)}</h1>
    <p>${esc(pick(doc.tagline, lang))}</p>
    <div class="author">${esc(profile.name)} · ${esc(pick(profile.role, lang))} · ${esc(stripProtocol(cv.website))}</div>
  </header>
  <dl class="meta">${meta}</dl>
  <div class="tags">${doc.tech.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
  ${hero ? `<img class="hero" src="${hero}" alt="" />` : ''}
  ${section(L.overview, pick(doc.overview, lang).map((p) => `<p>${esc(p)}</p>`).join(''))}
  ${section(L.features, features)}
  ${section(L.architecture, flow)}
  ${section(L.stack, stack)}
  ${section(L.decisions, decisions)}
  ${section(L.guide, guide)}
  ${section(L.limits, list(pick(doc.limits, lang)))}
  ${section(L.next, list(pick(doc.next, lang)))}
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

const only = process.argv.slice(2)
const slugs = readdirSync(docsDir)
  .filter((f) => f.endsWith('.mjs'))
  .map((f) => f.replace(/\.mjs$/, ''))
  .filter((s) => !only.length || only.includes(s))

const chrome = findChrome()
const tmp = mkdtempSync(join(tmpdir(), 'project-docs-'))

for (const slug of slugs) {
  const { default: doc } = await import(pathToFileURL(join(docsDir, `${slug}.mjs`)).href)
  const outDir = join(root, 'public/projects', slug)
  mkdirSync(outDir, { recursive: true })
  for (const lang of ['id', 'en']) {
    const html = join(tmp, `${slug}-${lang}.html`)
    const pdf = join(outDir, `${slug}-${lang.toUpperCase()}.pdf`)
    writeFileSync(html, renderHtml(doc, lang))
    execFileSync(
      chrome,
      [
        '--headless=new',
        '--disable-gpu',
        '--no-pdf-header-footer',
        '--allow-file-access-from-files',
        '--virtual-time-budget=10000', // beri waktu web font termuat
        `--print-to-pdf=${pdf}`,
        pathToFileURL(html).href,
      ],
      { stdio: 'ignore' },
    )
    console.log(`✓ ${slug} ${lang.toUpperCase()}: public/projects/${slug}/${slug}-${lang.toUpperCase()}.pdf`)
  }
}
