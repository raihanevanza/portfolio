# Raihan Evanza — Portofolio

Situs portofolio pribadi saya sebagai **Frontend & Mobile Developer**. Isinya ringkasan pengalaman kerja, proyek, keahlian, pendidikan, dan kontak.

<!-- Tambahkan link situs di sini setelah deploy, misal: **Live:** https://raihan-evanza.vercel.app -->

## Fitur

- Satu halaman dengan navigasi ke bagian Tentang, Pengalaman, Proyek, Keahlian, dan Kontak.
- Mode terang dan gelap, mengikuti pengaturan sistem, dan bisa diganti manual.
- Responsif di desktop dan mobile.
- Timeline pengalaman kerja dan kartu proyek dengan screenshot opsional.
- Tombol salin email untuk pengunjung yang tidak memakai aplikasi email default.
- Semua konten diambil dari satu file data, jadi mengganti isi tidak perlu menyentuh komponen.

## Teknologi

| Bagian  | Teknologi                    |
|---------|------------------------------|
| UI      | React 18                     |
| Build   | Vite 5                       |
| Styling | CSS biasa dengan variabel tema |
| Hosting | Vercel                       |

Tidak ada dependency lain selain React.

## Menjalankan di komputer lokal

**Kebutuhan:** Node.js 18 atau lebih baru.

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
| `npm run build`   | Build produksi ke folder `dist/`        |
| `npm run preview` | Menjalankan hasil build secara lokal    |

## Mengubah isi

Semua konten ada di [`src/data.js`](src/data.js):

| Export           | Isi                                                    |
|------------------|--------------------------------------------------------|
| `profile`        | Nama, peran, lokasi, tagline, paragraf tentang, foto, file CV |
| `contacts`       | Email, LinkedIn, GitHub                                |
| `stats`          | Angka ringkas di bawah hero                            |
| `experiences`    | Riwayat kerja, dari yang terbaru. `end: ''` berarti masih bekerja di sana |
| `projects`       | Proyek. `link`, `repo`, dan `image` opsional           |
| `skills`         | Keahlian per kelompok                                  |
| `education`      | Riwayat pendidikan                                     |
| `certifications` | Sertifikasi. Kosongkan array untuk menyembunyikan bagian ini |

File statis seperti foto profil, CV, dan screenshot proyek ditaruh di folder `public/`, lalu dirujuk dengan path yang diawali `/`. Contohnya `photo: '/foto.jpg'`, `cvUrl: '/cv.pdf'`, dan `image: '/projects/chat-bot-go.png'`.

## Struktur folder

```
.
├── public/
│   ├── favicon.svg
│   └── projects/        # screenshot proyek
├── src/
│   ├── App.jsx          # semua komponen halaman
│   ├── data.js          # semua konten
│   ├── main.jsx
│   └── styles.css       # tema terang/gelap dan layout
├── index.html
└── vite.config.js
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
