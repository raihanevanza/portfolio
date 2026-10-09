# Isi PDF penjelasan proyek

Satu file `<slug>.mjs` per proyek, dirender jadi `public/projects/<slug>/<slug>-penjelasan-ID.pdf`
dan `...-EN.pdf` oleh `npm run docs` (scripts/project-docs.mjs).

Teks per bahasa ditulis `{ id: '...', en: '...' }`; daftar paragraf/poin per bahasa `{ id: [...], en: [...] }`.

```js
export default {
  slug: 'bola-live',                       // = nama folder di public/projects/
  title: 'Bola Live',
  hero: '/projects/bola-live/overview.jpg',     // gambar sampul, relatif ke public/
  tagline: { id: '...', en: '...' },       // 1 kalimat: apa ini & untuk siapa
  role: { id: '...', en: '...' },          // mis. 'Proyek pribadi · desain, frontend, backend, deploy'
  platforms: { id: '...', en: '...' },     // mis. 'Web (desktop & ponsel)'
  links: [{ label: { id: 'Demo live', en: 'Live demo' }, url: 'https://...' }],
  tech: ['Next.js 16', 'Tailwind CSS'],
  overview: { id: ['paragraf', ...], en: [...] },              // 2–3 paragraf: masalah, solusi, hasil
  features: [{ title: { id, en }, text: { id, en } }],          // 6–10 fitur utama
  architecture: {
    flow: [{ name: 'Browser', detail: { id, en } }],            // 3–5 kotak alur data, kiri → kanan
    notes: { id: ['...'], en: ['...'] },                        // 2–4 poin penjelasan alur
  },
  stack: [{ layer: { id, en }, items: ['...'] }],               // teknologi per lapisan
  decisions: [{ title: { id, en }, text: { id, en } }],         // 3–6 keputusan teknis + alasannya
  guide: [{ title: { id, en }, text: { id, en }, image: 'step-1.jpg' }], // 5–8 langkah tutorial (= video); image opsional, relatif ke scripts/project-docs/img/<slug>/
  limits: { id: ['...'], en: ['...'] },                         // keterbatasan & catatan jujur
  next: { id: ['...'], en: ['...'] },                           // opsional: rencana pengembangan
}
```
