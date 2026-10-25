# Main Yuk dalam portfolio

Demo interaktif tersedia di **/demos/main-yuk/** dan ditautkan dari proyek Main Yuk.
Seluruh 12 game dan 245 kartu bawaan dapat dimainkan langsung. Paket kustom,
favorit, dan sesi disimpan lewat WatermelonDB/IndexedDB di browser pengunjung.
Game dimainkan bergantian pada satu perangkat; bukan multiplayer antar-HP.

Demo tidak menggunakan API, login, cookie akun, atau service worker. Database dan
Web Lock memakai namespace khusus portfolio agar tidak berbagi data dengan
aplikasi lengkap. Browser perlu mendukung IndexedDB dan Web Locks pada localhost
atau HTTPS. Penyimpanan mengikuti profil browser dan dapat dihapus oleh browser.
Setelah pertama kali dimuat, permainan tidak membutuhkan API; memuat ulang
halaman demo tetap membutuhkan akses ke file situs.

## Menjalankan dan build

    npm ci
    npm run dev
    # Buka http://localhost:5173/demos/main-yuk/
    npm run build
    npm run preview

File demo produksi ikut disimpan di public/demos/main-yuk sehingga build
portfolio dari checkout bersih **tidak membutuhkan repo Main Yuk atau Rupa**.
Build portfolio tidak mengganti dependency Rupa yang sudah digunakan portfolio;
bundle demo memiliki React dan Rupa sendiri dalam halaman terpisah.

## Memperbarui demo

Siapkan dependency frontend pada checkout Main Yuk terlebih dahulu, lalu:

    npm run demo:main-yuk -- ../main-yuk
    npm run build

Importer menjalankan build:demo pada Main Yuk lalu menyalin hasil statis ke
public/demos/main-yuk/. Base path wajib /demos/main-yuk/. Hanya berkas usang di
folder demo itu yang dibuang. build-manifest.json mencatat SHA-256 setiap berkas
dan identitas snapshot Rupa. Sertakan aset hasil import bersama perubahan kode.
Sumber aplikasi dan seluruh komponen UI tetap berada di repo Main Yuk dan Rupa.

Screenshot ada di public/projects/main-yuk/. Konten PDF ID/EN ada di
scripts/project-docs/main-yuk.mjs; buat ulang dengan npm run docs -- main-yuk
(set CHROME_PATH bila Chrome tidak terdeteksi).

## Vercel

Deploy dilakukan pemilik nanti. Pengaturan Vite biasa tetap berlaku:
Build Command: npm run build; Output Directory: dist. Tidak perlu environment
variable, database, backend Rails, atau rewrite API untuk demo ini. Folder
/demos/main-yuk/ beserta index.html dan asetnya disalin Vite ke dist.

## Verifikasi integrasi · 25 Oktober 2026

- Build TypeScript dan Vite portfolio berhasil tanpa dependensi repo tetangga pada tahap build.
- Tautan Coba demo pada modal proyek membuka katalog berisi 12 game.
- Seluruh game berhasil dimulai; Sambung Kata menerima jawaban dan sesi bisa dibuka setelah reload.
- Paket kustom tetap ada setelah reload. Tidak ada request API, service worker, error browser, atau aset 404 saat pengujian demo.
- Katalog tidak meluap horizontal pada lebar 320, 390, 768, dan 1440 piksel.
- Lima gambar galeri, video WebM 23 detik, dan PDF ID/EN berhasil dimuat dari hasil build.
- SHA-256 keempat berkas demo cocok dengan build-manifest.json.
