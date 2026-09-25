# Portofolio

Situs portofolio React + Vite.

## Menjalankan lokal

```bash
npm install
npm run dev
```

## Mengganti isi

Semua konten ada di `src/data.js` — profil, pengalaman kerja, proyek, keahlian, pendidikan, dan kontak.
Foto profil / CV: taruh di folder `public/` lalu isi `profile.photo` / `profile.cvUrl` (misal `/foto.jpg`, `/cv.pdf`).

## Deploy ke Vercel

**Opsi A — lewat GitHub (disarankan):** push folder ini ke repo GitHub, lalu di vercel.com pilih *Add New → Project*, import repo-nya. Vercel otomatis mendeteksi Vite (build: `npm run build`, output: `dist`). Klik *Deploy*.

**Opsi B — lewat CLI:**

```bash
npm i -g vercel
vercel        # preview
vercel --prod # produksi
```
