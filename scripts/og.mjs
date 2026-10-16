// Membuat gambar pratinjau tautan (Open Graph, 1200×630) dari isi src/data.ts, memakai Google Chrome headless.
// Jalankan: npm run og  → hasilnya public/og.png, dirujuk dari meta og:image di index.html.
// Path Chrome bisa diganti lewat env CHROME_PATH.

import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { profile, cv, experiences, stats } from '../src/data.ts'

const root = resolve(fileURLToPath(import.meta.url), '../..')

// Sama dengan pick() di src/i18n.ts (tidak diimpor karena file itu memuat React).
const pick = (value, lang) =>
  value && typeof value === 'object' && !Array.isArray(value) ? value[lang] ?? value.id : value

const esc = (s) =>
  String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])

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

const [first, ...rest] = profile.name.split(' ')
const current = experiences.find((x) => !pick(x.end, 'en'))
const photo = profile.photo && join(root, 'public', profile.photo)
const site = cv.website.replace(/^https?:\/\//, '')

const html = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;650&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  *{box-sizing:border-box;margin:0}
  html,body{width:1200px;height:630px;overflow:hidden}
  body{position:relative;background:#0a0a0a;color:#fff;font-family:Geist,system-ui,sans-serif;padding:64px 72px}
  body::before{content:'';position:absolute;inset:0;background-image:radial-gradient(#2a2a2a 1.2px,transparent 1.2px);background-size:24px 24px;
    -webkit-mask-image:radial-gradient(520px circle at 85% 30%,#000,transparent 75%)}
  .k{position:relative;font:500 18px 'Geist Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#a1a1a1}
  .k b{display:inline-block;width:10px;height:10px;border-radius:50%;background:#22c55e;margin-right:12px;vertical-align:1px}
  h1{position:relative;margin-top:26px;font-size:116px;font-weight:650;line-height:.92;letter-spacing:-.045em}
  h1 span{display:block}
  h1 span+span{color:transparent;-webkit-text-stroke:2px #fff}
  .role{position:relative;margin-top:30px;font-size:34px;font-weight:500;letter-spacing:-.01em}
  .now{position:relative;margin-top:8px;font-size:22px;color:#a1a1a1}
  .foot{position:absolute;left:72px;right:72px;bottom:56px;display:flex;justify-content:space-between;align-items:center;font:400 20px 'Geist Mono',monospace;color:#a1a1a1}
  .chips{display:flex;gap:10px}
  .chips span{padding:8px 16px;border:1px solid #333;border-radius:999px;color:#e5e5e5}
  .photo{position:absolute;right:72px;top:64px;width:300px;height:375px;border-radius:30px;overflow:hidden;border:1px solid #2a2a2a;transform:rotate(3deg)}
  .photo img{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.05)}
</style></head><body>
  <p class="k">${profile.available ? '<b></b>' : ''}Portfolio · ${esc(stats[0].value)} ${esc(pick(stats[0].label, 'en').toLowerCase())}</p>
  <h1><span>${esc(first)}</span><span>${esc(rest.join(' '))}</span></h1>
  <p class="role">${esc(pick(profile.role, 'en'))}</p>
  ${current ? `<p class="now">${esc(pick(current.role, 'en'))} · ${esc(current.company)}</p>` : ''}
  ${photo && existsSync(photo) ? `<div class="photo"><img src="${pathToFileURL(photo).href}"></div>` : ''}
  <div class="foot"><span>${esc(site)}</span><div class="chips">${profile.focus.slice(0, 4).map((f) => `<span>${esc(f)}</span>`).join('')}</div></div>
</body></html>`

const dir = mkdtempSync(join(tmpdir(), 'og-'))
const file = join(dir, 'og.html')
writeFileSync(file, html)
const out = join(root, 'public/og.png')
execFileSync(
  findChrome(),
  [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    '--virtual-time-budget=10000', // beri waktu web font termuat
    `--screenshot=${out}`,
    pathToFileURL(file).href,
  ],
  { stdio: 'ignore' },
)
console.log('✓ public/og.png')
