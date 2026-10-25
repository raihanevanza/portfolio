export default {
  slug: 'pijak',
  title: 'Pijak',
  hero: '/projects/pijak/cover.jpg',
  tagline: {
    id: 'Panduan sepatu dan ruang lari untuk mengenali pasangan yang dipakai, menyusun sesi, dan mencatat perjalanan.',
    en: 'A shoe guide and running workspace to understand your footwear, plan sessions, and record your miles.',
  },
  role: {
    id: 'Proyek pribadi: desain, frontend, kurasi data bersumber, integrasi, pengujian, dan demo.',
    en: 'Personal project: design, frontend, source-attributed catalog curation, integration, testing, and demo.',
  },
  platforms: {
    id: 'Web responsif untuk desktop dan ponsel. Demo tanpa akun.',
    en: 'Responsive web for desktop and mobile. No account needed for the demo.',
  },
  links: [
    {
      label: { id: 'Demo interaktif', en: 'Interactive demo' },
      url: 'https://portfolio-raihan-evanza.vercel.app/demo/pijak/',
    },
  ],
  tech: [
    'TanStack Start',
    'React',
    'TypeScript',
    'Rupa',
    'CSS Modules',
    'TanStack Query',
    'Zod',
    'Supabase',
    'Vitest',
    'Testing Library',
    'Playwright',
    'axe-core',
  ],
  overview: {
    id: [
      'Memilih sepatu sering berhenti pada katalog produk. Pijak menghubungkan katalog bersumber dengan konteks pemakaian: harian, lari jalan raya, trail, dan jenis sesi yang ingin dicatat.',
      'Pengguna dapat menelusuri 24 model dari tujuh merek, membandingkan sampai tiga model, menyimpan wishlist, lalu mengelola sepatu yang benar-benar dimiliki. Sesi lari, kilometer, durasi, dan harga beli menjadi riwayat pemakaian yang dapat dihitung dan diekspor.',
      'Demo publik menggunakan build browser tersendiri, data ilustratif, dan storage terpisah. Repo source tetap private. Integrasi Supabase dan kebijakan pemilik data disiapkan, tetapi demo tidak mengakses database atau akun sungguhan.',
    ],
    en: [
      'Shoe selection often stops at the product catalog. Pijak connects a source-attributed catalog with actual use: daily wear, road running, trail, and the session being planned.',
      'Users explore 24 models across seven brands, compare up to three models, save a wishlist, and manage the shoes they own. Running sessions, distance, duration, and purchase cost become a usage history that can be calculated and exported.',
      'The public demo uses a separate browser build, illustrative data, and isolated storage. Source remains private. Supabase integration and ownership policies are prepared, but the demo does not access a real database or account.',
    ],
  },
  features: [
    {
      title: { id: 'Katalog dengan sumber', en: 'Source-attributed catalog' },
      text: {
        id: 'Harian, road, dan trail; termasuk On Cloud 6, Cloudsurfer 2, dan Cloudultra 3. Harga yang belum diverifikasi tidak diperkirakan. Berat yang belum memiliki ukuran sampel ditampilkan belum tersedia.',
        en: 'Daily, road, and trail shoes, including On Cloud 6, Cloudsurfer 2, and Cloudultra 3. Unverified prices are not estimated; weights without a sample size remain unavailable.',
      },
    },
    {
      title: { id: 'Filter, pembanding, dan kuis', en: 'Filters, comparison, and finder' },
      text: {
        id: 'Pencarian dan filter berada di URL. Pembanding membatasi tiga model dan dapat dibagikan. Kuis menjelaskan alasan urutan berdasarkan kategori, kegunaan, dan data bantalan yang tersedia.',
        en: 'Search and filters live in the URL. Comparison supports three models and shareable links. The finder explains the ordering using category, purpose, and available cushioning data.',
      },
    },
    {
      title: { id: 'Tujuh sesi lari', en: 'Seven running session types' },
      text: {
        id: 'Easy run, long run, tempo, interval, recovery, race, dan trail, dengan pilihan medan. Kandidat sepatu mengikuti kegunaan yang tercatat pada katalog; kombinasi tanpa bukti tidak diisi secara asal.',
        en: 'Easy, long, tempo, interval, recovery, race, and trail sessions, with surface selection. Shoe candidates follow existing catalog purposes; unsupported combinations remain empty.',
      },
    },
    {
      title: { id: 'Kalender rencana dan hasil', en: 'Plans and recorded results' },
      text: {
        id: 'Tambah, edit, dan hapus rencana mingguan. Rencana tidak menambah jarak; catat hasil dengan jarak dan durasi aktual. Satu ID dipakai untuk penyelesaian rencana agar penyimpanan ulang tidak menggandakan aktivitas.',
        en: 'Create, edit, and delete weekly plans. Plans do not add mileage; results use actual distance and duration. Plan completion reuses one ID so saving again does not duplicate an activity.',
      },
    },
    {
      title: { id: 'Kalkulator pace tiga arah', en: 'Three-way pace calculator' },
      text: {
        id: 'Hitung waktu finis dari jarak dan pace, pace dari waktu dan jarak, atau jarak dari waktu dan pace. Preset 5K, 10K, half marathon, marathon, dan tabel split menyertakan bagian kilometer terakhir.',
        en: 'Calculate finish time from distance and pace, pace from duration and distance, or distance from duration and pace. Includes 5K, 10K, half-marathon and marathon presets, plus fractional finishing splits.',
      },
    },
    {
      title: { id: 'Statistik dan target', en: 'Statistics and goals' },
      text: {
        id: 'Jarak minggu ini, jumlah sesi, sesi terpanjang, pace tertimbang, perbandingan minggu sebelumnya, grafik delapan minggu, dan progres target pribadi. Kilometer awal tidak dimasukkan sebagai aktivitas minggu ini.',
        en: "Current-week distance, session count, longest run, weighted pace, prior-week distance, eight-week history, and personal goal progress. Initial shoe mileage does not count as this week's activity.",
      },
    },
    {
      title: { id: 'Rotasi dan koleksi', en: 'Rotation and collection' },
      text: {
        id: 'Target kilometer opsional, tanggal terakhir dipakai, biaya per kilometer, status aktif atau arsip, serta aktivitas yang dapat diedit. Urutan rotasi mempertimbangkan kegunaan, target pribadi, dan catatan terakhir; bukan prediksi usia sepatu.',
        en: 'Optional mileage goals, last-use date, cost per kilometer, active or archived status, and editable activities. Rotation considers purpose, personal targets, and recorded last use; it does not predict shoe lifespan.',
      },
    },
    {
      title: { id: 'Portabilitas dan aksesibilitas', en: 'Portability and accessibility' },
      text: {
        id: 'Ekspor CSV aktivitas dan JSON lengkap. Komponen Rupa mendukung keyboard, tema terang/gelap, dan form berlabel. Pengujian browser mencakup desktop, ponsel, dan axe.',
        en: 'Activity CSV and complete JSON exports. Rupa components support keyboard use, light and dark themes, and labeled forms. Browser checks cover desktop, mobile, and axe.',
      },
    },
  ],
  architecture: {
    flow: [
      {
        name: 'TanStack Start',
        detail: {
          id: 'Router bertipe dan UI React memakai Rupa serta CSS Modules.',
          en: 'Typed routing and React UI with Rupa and CSS Modules.',
        },
      },
      {
        name: 'Domain logic',
        detail: {
          id: 'Filter, pace, kalender, statistik, rotasi, dan skema Zod.',
          en: 'Filtering, pace, dates, statistics, rotation, and Zod schemas.',
        },
      },
      {
        name: 'Browser demo',
        detail: {
          id: 'Build statis pada subfolder portfolio. Storage contoh terpisah; Supabase dinonaktifkan.',
          en: 'Static build under the portfolio. Isolated sample storage; Supabase disabled.',
        },
      },
      {
        name: 'Supabase ready',
        detail: {
          id: 'Migrasi PostgreSQL, Auth, Storage, dan RLS pemilik untuk mode akun.',
          en: 'PostgreSQL migrations, Auth, Storage, and ownership RLS for account mode.',
        },
      },
    ],
    notes: {
      id: [
        'SSR tersedia pada build utama; demo memakai SPA statis dari source yang sama.',
        'Mode demo memakai prefix storage khusus. Reset hanya menghapus perubahan demo pada browser.',
        'Rencana dan hasil aktual disimpan terpisah. Data lama memiliki default baru tanpa kehilangan catatan.',
      ],
      en: [
        'The main build supports SSR; the demo is a static SPA built from the same source.',
        'Demo storage uses a separate prefix. Reset only removes demo changes in that browser.',
        'Plans and actual results are separate. Existing data receives compatible defaults without discarding records.',
      ],
    },
  },
  stack: [
    {
      layer: { id: 'Antarmuka', en: 'Interface' },
      items: ['TanStack Start', 'React', 'TypeScript', 'Rupa Design System', 'CSS Modules'],
    },
    {
      layer: { id: 'Data dan validasi', en: 'Data and validation' },
      items: ['TanStack Query', 'Zod', 'Local storage', 'Supabase-ready schema'],
    },
    {
      layer: { id: 'Pengujian', en: 'Testing' },
      items: ['Vitest', 'React Testing Library', 'Playwright', 'axe-core'],
    },
    {
      layer: { id: 'Demo', en: 'Demo' },
      items: ['TanStack SPA', 'Vite', 'Portfolio subpath', 'Vercel rewrites'],
    },
  ],
  decisions: [
    {
      title: { id: 'Data kosong lebih baik dari angka tebakan', en: 'Unknown values stay unknown' },
      text: {
        id: 'Harga tanpa sumber tidak masuk filter anggaran. Spesifikasi dan tujuan penggunaan disertai atribusi, bukan dianggap sebagai hasil pengujian sendiri.',
        en: 'Prices without sources do not pass budget filters. Specifications and intended uses are attributed, rather than presented as first-hand test results.',
      },
    },
    {
      title: { id: 'Pace dihitung dari data berdurasi', en: 'Pace uses timed activities' },
      text: {
        id: 'Jumlah durasi dibagi jumlah jarak dari aktivitas yang memiliki durasi. Catatan tanpa durasi tetap menambah jarak, tetapi tidak merusak rata-rata pace.',
        en: 'Total duration is divided by total distance for timed activities. Untimed records still add distance without distorting average pace.',
      },
    },
    {
      title: { id: 'Sumber private, demo bisa dicoba', en: 'Private source, usable demo' },
      text: {
        id: 'Hanya hasil build frontend yang masuk repo portfolio. Demo tidak membutuhkan kredensial, menggunakan data ilustratif, dan dapat di-reset.',
        en: 'Only the frontend build enters the portfolio repository. The demo needs no credentials, uses illustrative data, and can be reset.',
      },
    },
  ],
  guide: [
    {
      title: { id: 'Jelajahi merek dan kegunaan', en: 'Explore brands and purposes' },
      text: {
        id: 'Buka Demo, masuk ke katalog, pilih On atau filter road dan long run. Buka model untuk melihat detail dan sumber resminya.',
        en: 'Open the demo catalog and choose On, or road and long-run filters. Open a model to inspect details and its official source.',
      },
    },
    {
      title: { id: 'Bandingkan tiga model', en: 'Compare three models' },
      text: {
        id: 'Tekan Bandingkan di kartu sepatu, lalu buka pembanding. Tautan Bagikan pilihan mempertahankan model yang dipilih.',
        en: 'Press Compare on shoe cards, then open comparison. Share selections preserves the chosen models in the URL.',
      },
    },
    {
      title: { id: 'Pilih sesi dan susun rencana', en: 'Select a session and plan' },
      text: {
        id: 'Ruang lari menyediakan tujuh sesi. Pilih tanggal lalu Tambah rencana. Isi jarak dan pace opsional; kalender juga bisa berpindah minggu.',
        en: 'The running workspace offers seven session types. Pick a date and add a plan with distance and optional pace; navigate between weeks.',
      },
    },
    {
      title: { id: 'Catat hasil aktual', en: 'Record actual results' },
      text: {
        id: 'Pada rencana, tekan Catat hasil. Pilih sepatu, isi jarak dan durasi yang benar-benar dilakukan. Status berubah menjadi Selesai dan statistik ikut diperbarui.',
        en: 'Use Record result on a plan. Choose a shoe and enter actual distance and duration. The plan becomes completed and statistics update.',
      },
    },
    {
      title: { id: 'Hitung pace dan split', en: 'Calculate pace and splits' },
      text: {
        id: 'Buka Kalkulator pace. Pilih nilai yang ingin dihitung dan isi dua nilai lain. Preset jarak membantu mencoba 5K sampai marathon.',
        en: 'Open the calculator, choose the output, and enter the other two values. Distance presets cover 5K through marathon.',
      },
    },
    {
      title: { id: 'Pantau rotasi dan progres', en: 'Review rotation and progress' },
      text: {
        id: 'Statistik menunjukkan target mingguan dan grafik. Di Sepatu saya, ubah target kilometer, arsipkan pasangan, atau edit aktivitas yang keliru.',
        en: 'Statistics shows the weekly goal and history. In My shoes, change mileage goals, archive a pair, or correct recorded activities.',
      },
    },
    {
      title: { id: 'Simpan salinan atau reset demo', en: 'Export or reset' },
      text: {
        id: 'Ekspor CSV atau JSON dari Statistik. Reset demo mengembalikan data ilustratif; perubahan demo tidak masuk akun asli.',
        en: 'Export CSV or JSON from Statistics. Reset demo restores illustrative data; demo changes never reach a real account.',
      },
    },
  ],
  limits: {
    id: [
      'Harga beli dalam koleksi demo adalah ilustrasi, bukan harga jual Indonesia. Harga katalog yang belum diverifikasi tetap kosong.',
      'Rekomendasi memakai aturan kategori dan kegunaan yang tercatat. Bukan hasil pengujian kenyamanan, fitting, atau rekomendasi medis.',
      'Rencana dan target ditentukan pengguna; aplikasi tidak menyusun program latihan atau memprediksi usia sepatu.',
      'Supabase memerlukan proyek serta konfigurasi nyata untuk verifikasi migrasi, Auth, Storage, dan RLS. Demo publik tidak mengujinya.',
      'Ekspor tersedia; impor, integrasi jam/GPS, dan sinkronisasi Strava belum tersedia. Foto serta merek tetap milik pemegang hak masing-masing.',
    ],
    en: [
      'Demo purchase prices are illustrative, not verified Indonesian retail prices. Unknown catalog prices remain blank.',
      'Selection uses recorded category and purpose rules, not first-hand comfort tests, fitting advice, or medical recommendations.',
      'Users choose plans and targets; the app does not prescribe training or predict shoe lifespan.',
      'Real Supabase configuration is required to verify migrations, Auth, Storage, and RLS. The public demo does not test them.',
      'Export is available; import, watch/GPS integration, and Strava sync are not. Photos and trademarks remain with their owners.',
    ],
  },
  next: {
    id: [
      'Verifikasi mode akun pada proyek Supabase dengan dua pengguna dan peran kurator.',
      'Impor hasil ekspor serta integrasi aktivitas setelah format dan izin sumber ditentukan.',
    ],
    en: [
      'Verify account mode on a Supabase project with two users and a curator role.',
      'Add backup import and activity integration once formats and source permissions are defined.',
    ],
  },
}
