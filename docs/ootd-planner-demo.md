# OOTD Planner dalam portfolio

- Demo: **/demo/ootd-planner/**. Login sudah terisi (`demo@ootd.app` / `demo1234`), atau daftar akun baru.
- Source: repo `ootd-planner` (Go API, Angular 22, SQL Server). Portfolio hanya menyimpan hasil build demo, screenshot, dan teks proyek.
- Galeri: public/projects/ootd-planner/ (web 1440×1000, ponsel 390×844, thumbnail di thumbs/).

## Cara kerja demo

Build mode demo Angular mengganti environment dan memasang HTTP interceptor yang menjawab setiap panggilan `/api` di browser, dengan envelope, kode status, validasi, paginasi, filter, jumlah pemakaian, dan statistik yang sama dengan API Go. Data disimpan di localStorage (`ootd.demo.v1`); foto yang diunggah diperkecil lalu disimpan sebagai data URL. Hapus data situs untuk reset. Tidak ada backend, database, cookie akun, atau service worker.

Routing demo memakai hash (`/demo/ootd-planner/#/calendar`), jadi deep link tidak membutuhkan fallback server. Bundle dibuild dengan base `/demo/ootd-planner/`; vercel.json dan plugin fallback di vite.config.ts hanya mengarahkan `/demo/ootd-planner` (tanpa garis miring) ke index.html demo.

## Menjalankan dan memperbarui

Demo yang di-commit sudah lengkap; build portfolio tidak membutuhkan repo ootd-planner.

    npm ci
    npm run dev
    # Buka http://localhost:5173/demo/ootd-planner/

Untuk memperbarui bundle, pasang dependency web di repo tetangga (`cd ../ootd-planner/web && npm ci`), lalu dari portfolio:

    npm run demo:ootd-planner -- ../ootd-planner
    npm run build

Importer menjalankan `npm run build:demo -- --base-href /demo/ootd-planner/` di `ootd-planner/web`, memeriksa base path dan isi folder, lalu mengganti seluruh public/demo/ootd-planner/ (nama chunk Angular berupa hash, jadi berkas lama tidak ditimpa satu per satu). source.json mencatat commit sumber. Sertakan bundle hasil import bersama perubahan kode.

Screenshot galeri diambil dari demo ini di dev server portfolio dengan Playwright dan Chrome, satu file utama (JPEG kualitas 82) dan satu thumbnail (kualitas 45) per tampilan.

## Vercel

Integrasi Git ke Vercel yang sudah ada men-deploy bundle yang di-commit; tidak perlu environment variable atau rewrite API. Setelah deploy, cek kartu proyek, tombol demo, serta `/demo/ootd-planner` dan `/demo/ootd-planner/#/stats` langsung.

## Verifikasi integrasi · 28 Oktober 2026

- Demo di /demo/ootd-planner dan /demo/ootd-planner/ termuat dari dev server portfolio; /demo/pijak/ tetap memakai demo Pijak.
- Login, lemari, filter, form item, daftar outfit, outfit builder, kalender, detail hari, dan statistik (terang dan gelap) terbuka tanpa error console atau aset 404.
- Tidak ada scroll horizontal di lebar 390 piksel pada semua halaman setelah perbaikan layout outfit builder (commit 6f81cf9 di ootd-planner).
