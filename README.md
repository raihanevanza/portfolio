# Raihan Evanza — Portofolio

Situs portofolio pribadi saya sebagai **Fullstack & Mobile Developer**, dengan gaya *modern interactive* dan tema putih–hitam minimal. Isinya Hero, Tentang, Pengalaman, Proyek, Tech Stack, Resume, dan Kontak.

<!-- Tambahkan link situs di sini setelah deploy, misal: **Live:** https://raihan-evanza.vercel.app -->

## Fitur

- **Hero**: nama besar, kata yang diketik bergantian ("Saya membangun aplikasi dengan …"), grid titik yang mengikuti kursor, angka ringkas yang menghitung naik, dan pita teknologi berjalan.
- **Pengalaman**: garis karier proporsional per tahun plus tab per peran (bisa dipilih dengan klik atau ←/→/↑/↓); panel detail menampilkan lama bekerja, ringkasan, poin, dan teknologi.
- **Proyek**: filter Semua/Pribadi/Profesional dengan kartu bento. Klik kartu untuk membuka detail berisi galeri, video tutorial/demo yang bisa diputar langsung, deskripsi lengkap, dan tautan (demo, PDF, kode). Gambar bisa dibuka layar penuh (geser/←→, zoom ukuran asli).
- **Tech Stack**: pilih teknologi untuk melihat peran dan proyek yang memakainya; angka di tiap chip dihitung otomatis dari data.
- **Resume**: pratinjau CV yang miring mengikuti kursor, pilihan CV Indonesia/Inggris, tombol unduh dan buka, plus pendidikan dan bahasa.
- **Kontak**: email besar dengan tombol salin, LinkedIn/GitHub, jam lokal WIB, dan form singkat yang membuka aplikasi email dengan subjek dan pesan terisi.
- **Palet perintah** (⌘K / Ctrl+K): lompat ke bagian, buka proyek, ganti tema/bahasa, unduh CV, salin email.
- Menu aktif mengikuti bagian yang sedang dibaca, garis progres gulir di header, dan animasi muncul saat menggulir. Semua animasi mati jika pengunjung memilih *reduce motion*.
- Mode terang (putih) dan gelap (hitam), mengikuti sistem dan bisa diganti manual. Dua bahasa (ID/EN), bahasa awal mengikuti browser.
- Tiap proyek pribadi punya video tutorial dan PDF penjelasan (fitur, arsitektur, keputusan teknis, panduan) dalam bahasa Indonesia dan Inggris.
- Semua konten diambil dari satu file data bertipe, jadi mengganti isi tidak perlu menyentuh komponen.

## Teknologi

| Bagian  | Teknologi                    |
|---------|------------------------------|
| UI      | React 18 + TypeScript (strict) |
| Build   | Vite 5                       |
| Styling | CSS biasa dengan variabel tema |
| Font    | Geist & Geist Mono (Google Fonts) |
| Hosting | Vercel                       |

Tidak ada dependency runtime lain selain React; animasi, palet perintah, dan galeri ditulis sendiri.

## Menjalankan di komputer lokal

**Kebutuhan:** Node.js 22.18 atau lebih baru (`npm run cv` dan `npm run docs` membaca `src/data.ts` langsung dengan type stripping bawaan Node), serta Google Chrome untuk membuat PDF.

```bash
git clone https://github.com/raihanevanza/portfolio.git
cd portfolio
npm install
npm run dev
```

Buka http://localhost:5173.

| Perintah          | Fungsi                                  |
|-------------------|-----------------------------------------|
| `npm run dev`     | Server development dengan hot reload    |
| `npm run build`   | Cek tipe (tsc) lalu build produksi ke `dist/` |
| `npm run typecheck` | Cek tipe TypeScript saja             |
| `npm run preview` | Menjalankan hasil build secara lokal    |
| `npm run cv`      | Membuat ulang CV PDF (ID/EN) dari `src/data.ts` |
| `npm run docs`    | Membuat ulang PDF penjelasan proyek (ID/EN) dari `scripts/project-docs/` |

## Mengubah isi

Semua konten ada di [`src/data.ts`](src/data.ts). Bentuk tiap bagian didefinisikan di [`src/types.ts`](src/types.ts), jadi salah ketik nama field langsung ketahuan saat `npm run typecheck`.

| Export           | Isi                                                    |
|------------------|--------------------------------------------------------|
| `profile`        | Nama, peran, lokasi, tagline, paragraf tentang, kata yang bergantian di hero (`focus`), foto, file CV, zona waktu |
| `contacts`       | Email, LinkedIn, GitHub                                |
| `stats`          | Angka ringkas di bawah hero                            |
| `experiences`    | Riwayat kerja, dari yang terbaru. `end: ''` berarti masih bekerja di sana |
| `projects`       | Proyek. `link`, `video`, `tutorial`, `doc`, `repo`, `image`, dan `gallery` opsional. `gallery('slug', [...])` membuat daftar gambar dari `public/projects/<slug>/` |
| `skills`         | Tech stack per kelompok. Jika nama tidak sama persis dengan tag teknologi, tambahkan alias di `TECH_ALIASES` ([`src/lib.ts`](src/lib.ts)) |
| `education`      | Riwayat pendidikan                                     |
| `certifications` | Sertifikasi. Kosongkan array untuk menyembunyikan bagian ini |

Teks yang berbeda per bahasa ditulis sebagai objek `{ id, en }`. Teks yang sama di kedua bahasa, seperti nama perusahaan atau teknologi, cukup ditulis biasa:

```js
summary: {
  id: 'Mengembangkan modul Loan pada proyek NDS.',
  en: 'Developed the Loan module of the NDS project.',
},
tech: ['Vue.js', 'Vuex', 'gRPC'],
```

Teks antarmuka seperti menu, judul bagian, dan tombol ada di [`src/i18n.ts`](src/i18n.ts).

Isi PDF penjelasan proyek ada di [`scripts/project-docs/`](scripts/project-docs/), satu file per proyek (skemanya di [README](scripts/project-docs/README.md) folder itu). Screenshot untuk bagian panduan ada di `scripts/project-docs/img/<slug>/`. Setelah mengedit, jalankan `npm run docs` (atau `npm run docs -- <slug>`); hasilnya di `public/projects/<slug>/<slug>-ID.pdf` dan `-EN.pdf`.

File statis seperti foto profil, CV, dan screenshot proyek ditaruh di folder `public/`, lalu dirujuk dengan path yang diawali `/`. Contohnya `photo: '/foto.jpg'`, `cvUrl: '/cv.pdf'`, dan `image: '/projects/chat-bot-go.png'`.

## Struktur folder

```
.
├── public/
│   ├── favicon.svg
│   └── projects/        # screenshot, video demo & tutorial, PDF penjelasan
├── scripts/
│   ├── cv.mjs           # CV PDF
│   ├── project-docs.mjs # PDF penjelasan proyek
│   └── project-docs/    # isi PDF per proyek + screenshot panduan
├── src/
│   ├── components/      # Header, Hero, About, Experience, Projects, ProjectModal,
│   │                    # Lightbox, TechStack, Resume, Contact, CommandPalette, Section, Icon
│   ├── App.tsx          # susunan halaman, palet ⌘K, dan detail proyek
│   ├── data.ts          # semua konten
│   ├── types.ts         # bentuk data
│   ├── i18n.ts          # teks antarmuka ID/EN
│   ├── hooks.ts         # tema, bahasa, menu aktif, animasi, jam, salin
│   ├── lib.ts           # durasi kerja, pencocokan teknologi
│   ├── main.tsx
│   └── styles.css       # tema putih/hitam dan layout
├── index.html
├── tsconfig.json
└── vite.config.ts
```

## Deploy

Situs ini di-deploy di Vercel dan terhubung dengan repo GitHub, jadi setiap push ke branch `main` otomatis memicu build ulang. Vercel mendeteksi Vite secara otomatis: perintah build-nya `npm run build` dan folder output-nya `dist`.

Untuk deploy manual lewat CLI:

```bash
npm i -g vercel
vercel --prod
```

## Kontak

- Email: raihan.evanza20@gmail.com
- LinkedIn: [linkedin.com/in/raihan-evanza](https://www.linkedin.com/in/raihan-evanza)
- GitHub: [github.com/raihanevanza](https://github.com/raihanevanza)

## Main Yuk

Proyek Main Yuk menyediakan demo 12 game di /demos/main-yuk/, galeri, dan PDF ID/EN. Demo sudah dibundel di repo; build portfolio tidak membutuhkan backend atau repo tetangga. Lihat [panduan demo](docs/main-yuk-demo.md) untuk menjalankan, memperbarui snapshot, dan pengaturan Vercel.
