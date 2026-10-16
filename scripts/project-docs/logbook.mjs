// Isi PDF penjelasan proyek Logbook 42·50. Skema: lihat README.md di folder ini.
export default {
  slug: 'logbook',
  title: 'Logbook 42·50',
  hero: '/projects/logbook/cover.jpg',
  tagline: {
    id: 'Aplikasi jadwal latihan dan jurnal lari yang menyusun program sendiri dari tanggal race, membaca data jam, dan memberi peringatan sebelum cedera, untuk perjalanan dari half marathon ke full marathon dan ultra 50 km.',
    en: 'A training-plan and running-journal app that builds its own programme from race dates, reads watch data, and warns before injuries happen, for the road from a half marathon to a full marathon and a 50 km ultra.',
  },
  role: {
    id: 'Proyek pribadi · desain, frontend, backend, deploy · dipakai sendiri setiap hari',
    en: 'Personal project · design, frontend, backend, deployment · used daily by me',
  },
  platforms: {
    id: 'PWA (iPhone, Android, desktop), bisa dipasang di Home Screen dan dibuka tanpa sinyal',
    en: 'PWA (iPhone, Android, desktop), installable on the Home Screen and usable offline',
  },
  links: [],
  tech: ['Vanilla JavaScript', 'PWA + Service Worker', 'Vercel Functions & Cron', 'Upstash Redis', 'Gemini API', 'intervals.icu API', 'Web Push', 'jsPDF', 'OpenStreetMap', 'Open-Meteo'],

  overview: {
    id: [
      'Aplikasi lari yang umum mencatat apa yang sudah terjadi, tetapi tidak menyusun program menuju beberapa target sekaligus: relay 14 km, full marathon, pendakian, lalu ultra 50 km. Rencana di spreadsheet juga tidak tahu kalau tidur kurang, nyeri muncul di tempat yang sama, atau volume naik terlalu cepat.',
      'Logbook 42·50 menyusun jadwal mingguan otomatis dari tanggal race, lalu menyesuaikannya dengan check-in pagi, sesi yang tercatat, dan data jam (Huawei lewat intervals.icu). Aplikasi memberi peringatan beban, memprediksi waktu race, membuat rencana race day, dan punya AI coach (Gemini) untuk review harian, mingguan, dan bulanan.',
      'Hasilnya satu file index.html tanpa framework dan tanpa build, ditambah 9 Vercel Function kecil dengan Upstash Redis sebagai database. Aplikasi bisa dipasang di Home Screen, tetap terbuka tanpa sinyal, dan sinkron antar perangkat. Saya memakainya sendiri setiap hari. Video dan screenshot di portofolio memakai data demo.',
    ],
    en: [
      "Typical running apps record what already happened, but they don't build a programme toward several goals at once: a 14 km relay leg, a full marathon, mountain hikes, then a 50 km ultra. A spreadsheet plan also can't tell when sleep is short, pain keeps coming back in the same spot, or volume climbs too fast.",
      'Logbook 42·50 generates a weekly plan from the race dates and adjusts it using a morning check-in, logged sessions, and watch data (Huawei via intervals.icu). It warns about training load, predicts race times, builds a race-day plan, and has an AI coach (Gemini) for daily, weekly, and monthly reviews.',
      'It is a single index.html with no framework and no build step, plus 9 small Vercel Functions backed by Upstash Redis. It installs to the Home Screen, opens without signal, and syncs across devices. I use it every day; the portfolio video and screenshots use demo data.',
    ],
  },

  features: [
    {
      title: { id: 'Jadwal otomatis dari tanggal race', en: 'Plan generated from race dates' },
      text: {
        id: 'Fase latihan disusun mundur dari tanggal relay, full marathon, pendakian, dan ultra. Tiap minggu berisi sesi kualitas, long run, easy run, dan strength A/B. Mengubah tanggal atau menambah event langsung menyusun ulang seluruh musim, termasuk penyesuaian Ramadan dan puasa Senin–Kamis.',
        en: 'Training phases are built backwards from the relay, marathon, hike, and ultra dates. Each week has quality sessions, a long run, easy runs, and strength A/B. Changing a date or adding an event rebuilds the whole season, including adjustments for Ramadan and Monday/Thursday fasting.',
      },
    },
    {
      title: { id: 'Check-in pagi & rekomendasi', en: 'Morning check-in & readiness' },
      text: {
        id: 'Tidur, stres, pegal, dan nyeri (dengan peta tubuh) diisi tiap pagi; tidur, HR istirahat, dan HRV dari jam terisi otomatis. Hasilnya rekomendasi hari itu: jalankan sesuai rencana, ringankan, atau ganti dengan easy pendek.',
        en: 'Sleep, stress, soreness, and pain (with a body map) are logged each morning; sleep, resting HR, and HRV from the watch fill in automatically. The result is advice for the day: run as planned, go lighter, or swap for a short easy run.',
      },
    },
    {
      title: { id: 'Catat sesi tiga cara', en: 'Three ways to log a session' },
      text: {
        id: 'Form manual menghitung pace dan kategori dari HR & pace. Screenshot Huawei Health dibaca Gemini (atau OCR Tesseract di browser jika tanpa API key). Sesi dari jam masuk sendiri lewat intervals.icu dan melengkapi sesi manual yang mirip, tidak dobel.',
        en: 'The manual form works out pace and category from HR and pace. Huawei Health screenshots are read by Gemini (or Tesseract OCR in the browser without an API key). Watch sessions arrive by themselves through intervals.icu and merge with a similar manual entry instead of duplicating it.',
      },
    },
    {
      title: { id: 'Peringatan sebelum cedera', en: 'Warnings before injuries' },
      text: {
        id: 'Aplikasi menandai volume yang naik lebih dari 15%, lonjakan beban sRPE, nyeri berulang di area yang sama dalam 2 minggu, sesi terlewat, dan sepatu mendekati batas km, lalu menawarkan versi ringan untuk sisa minggu.',
        en: 'The app flags volume rising more than 15%, sRPE load spikes, pain recurring in the same area within two weeks, missed sessions, and shoes nearing their mileage limit, then offers a lighter version of the rest of the week.',
      },
    },
    {
      title: { id: 'Progres & prediksi race', en: 'Progress & race predictions' },
      text: {
        id: 'Grafik volume mingguan, long run, HR easy, VO2max, dan Fitness · Fatigue · Form; pencapaian dan streak; Road to race; rekap bulanan; beban sRPE; serta prediksi waktu race dari rumus Riegel dibanding target.',
        en: 'Charts for weekly volume, long runs, easy-run HR, VO2max, and Fitness · Fatigue · Form; achievements and streaks; Road to race; monthly recaps; sRPE load; and race-time predictions from the Riegel formula against targets.',
      },
    },
    {
      title: { id: 'Detail sesi dari jam', en: 'Session detail from the watch' },
      text: {
        id: 'Untuk sesi hasil sinkron: peta rute (OpenStreetMap), grafik pace, HR, cadence, dan elevasi sepanjang sesi, waktu di tiap zona HR, dan split per km. Tombol Bagikan membuat kartu gambar untuk WhatsApp atau story.',
        en: 'For synced sessions: a route map (OpenStreetMap), pace, HR, cadence, and elevation charts across the run, time in each HR zone, and per-km splits. A Share button renders an image card for WhatsApp or stories.',
      },
    },
    {
      title: { id: 'Rencana race day', en: 'Race-day plan' },
      text: {
        id: 'Untuk tiap race: pace per segmen dari target waktu, jadwal gel dan minum per menit, dan target cairan per jam dari kalkulator sweat rate di Profil. Halaman ini bisa dicetak atau disimpan sebagai PDF.',
        en: 'For each race: pace per segment from the target time, a gel and drink schedule by minute, and an hourly fluid target from the sweat-rate calculator in the profile. The page can be printed or saved as PDF.',
      },
    },
    {
      title: { id: 'AI coach (Gemini)', en: 'AI coach (Gemini)' },
      text: {
        id: 'Review harian, mingguan (otomatis tiap awal minggu), dan bulanan, plus tanya bebas dengan konteks jadwal, sesi 4 minggu terakhir, dan check-in. Prompt melarang mengarang data dan menyarankan fisioterapis untuk nyeri 4/10 ke atas.',
        en: 'Daily, weekly (automatic at the start of each week), and monthly reviews, plus free-form questions with the plan, the last four weeks of sessions, and check-ins as context. The prompt forbids making up data and points to a physiotherapist for pain of 4/10 or more.',
      },
    },
    {
      title: { id: 'Pengingat, kalender & laporan', en: 'Reminders, calendar & reports' },
      text: {
        id: 'Notifikasi push pagi dan malam lewat Vercel Cron, feed kalender .ics dengan alarm untuk Kalender iPhone/Google, link baca-saja untuk coach, laporan PDF (profil, rekor, semua sesi, detail per sesi), serta backup JSON dan ekspor CSV.',
        en: 'Morning and evening push notifications via Vercel Cron, an .ics calendar feed with alarms for Apple/Google Calendar, a read-only coach link, a PDF report (profile, records, every session, per-session detail), plus JSON backup and CSV export.',
      },
    },
  ],

  architecture: {
    flow: [
      {
        name: 'PWA (index.html)',
        detail: {
          id: 'Seluruh UI dan logika jadwal di browser; salinan data lokal + antrean tulis saat offline',
          en: 'All UI and planning logic in the browser; local data copy + write queue while offline',
        },
      },
      {
        name: 'Vercel Functions',
        detail: {
          id: '/api/data, /api/doc, intervals, import, review, ask, push, calendar, coach',
          en: '/api/data, /api/doc, intervals, import, review, ask, push, calendar, coach',
        },
      },
      {
        name: 'Upstash Redis',
        detail: {
          id: 'Satu hash per koleksi, satu record per field (sesi, check-in, minggu, event, review)',
          en: 'One hash per collection, one record per field (sessions, check-ins, weeks, events, reviews)',
        },
      },
      {
        name: 'Layanan luar',
        detail: {
          id: 'intervals.icu (jam Huawei), Gemini, Web Push, Open-Meteo, OpenStreetMap',
          en: 'intervals.icu (Huawei watch), Gemini, Web Push, Open-Meteo, OpenStreetMap',
        },
      },
    ],
    notes: {
      id: [
        'Halaman memuat semua data sekali lewat GET /api/data, lalu setiap perubahan dikirim per record lewat POST /api/doc. Perangkat lain mengambil perubahan tiap 30 detik, saat tab dibuka lagi, dan saat internet kembali.',
        'Service worker menyimpan "kulit" aplikasi dengan strategi network-first, sedangkan /api tidak pernah di-cache. Tulisan saat offline masuk antrean di localStorage dan terkirim otomatis begitu online.',
        'Semua API key (intervals.icu, Gemini, VAPID, Redis) hanya ada di env Vercel. Browser mengirim kata sandi aplikasi di header, dan server membandingkannya dengan timingSafeEqual.',
      ],
      en: [
        'The page loads everything once through GET /api/data, then sends each change as a single record through POST /api/doc. Other devices pull changes every 30 seconds, when the tab is reopened, and when the connection comes back.',
        'The service worker caches the app shell network-first, while /api is never cached. Writes made offline go into a localStorage queue and are sent automatically once online.',
        'Every API key (intervals.icu, Gemini, VAPID, Redis) lives only in Vercel env. The browser sends the app password in a header, and the server compares it with timingSafeEqual.',
      ],
    },
  },

  stack: [
    { layer: { id: 'Frontend', en: 'Frontend' }, items: ['HTML, CSS, JavaScript tanpa framework', 'Grafik SVG buatan sendiri', 'Tema terang & gelap'] },
    { layer: { id: 'PWA', en: 'PWA' }, items: ['Service Worker (network-first)', 'Web App Manifest', 'Web Push (VAPID)', 'localStorage + antrean offline'] },
    { layer: { id: 'Backend', en: 'Backend' }, items: ['Vercel Functions (Node.js)', 'Vercel Cron', 'web-push (satu-satunya dependency)'] },
    { layer: { id: 'Data', en: 'Data' }, items: ['Upstash Redis (REST pipeline)', 'Backup JSON', 'Ekspor CSV'] },
    { layer: { id: 'Integrasi', en: 'Integrations' }, items: ['intervals.icu API', 'Gemini API (REST)', 'Tesseract.js (OCR cadangan)', 'Open-Meteo', 'OpenStreetMap'] },
    { layer: { id: 'Dokumen', en: 'Documents' }, items: ['jsPDF (dimuat saat dibutuhkan)', 'Feed kalender .ics'] },
  ],

  decisions: [
    {
      title: { id: 'Satu file, tanpa framework dan tanpa build', en: 'One file, no framework, no build' },
      text: {
        id: 'Seluruh aplikasi ada di index.html. Deploy cukup push, tidak ada dependency frontend yang perlu diperbarui, dan service worker cukup menyimpan satu halaman agar aplikasi terbuka tanpa sinyal. Konsekuensinya file besar, jadi kode dikelompokkan per fitur dengan komentar penanda.',
        en: 'The whole app lives in index.html. Deploying is just a push, there are no frontend dependencies to update, and the service worker only needs to cache one page for the app to open offline. The trade-off is a large file, so the code is grouped by feature with marker comments.',
      },
    },
    {
      title: { id: 'Satu record per field Redis', en: 'One record per Redis field' },
      text: {
        id: 'Setiap sesi, check-in, atau event disimpan sebagai field tersendiri di hash Redis dan ditulis satu per satu (maks. 64 KB). Dua perangkat yang mengubah record berbeda tidak saling menimpa, berbeda dengan menyimpan seluruh data sebagai satu dokumen.',
        en: 'Each session, check-in, or event is its own field in a Redis hash and is written individually (64 KB max). Two devices editing different records never overwrite each other, unlike saving all the data as a single document.',
      },
    },
    {
      title: { id: 'Rencana dihitung di browser', en: 'The plan is computed in the browser' },
      text: {
        id: 'Server hanya menyimpan data mentah; jadwal, peringatan, dan prediksi dihitung ulang di browser dari data itu, sehingga tetap jalan saat offline. Untuk notifikasi push, halaman mengunggah jadwal beberapa minggu ke depan supaya cron tahu sesi hari itu.',
        en: 'The server only stores raw data; the plan, warnings, and predictions are recomputed in the browser, so they still work offline. For push notifications the page uploads the next few weeks of the plan so the cron job knows the day’s session.',
      },
    },
    {
      title: { id: 'intervals.icu, bukan Strava', en: 'intervals.icu instead of Strava' },
      text: {
        id: 'Jam Huawei tidak punya API publik, dan sejak Juni 2026 API Strava butuh langganan berbayar. intervals.icu gratis, bisa tersambung ke Huawei Health, dan menyediakan aktivitas, stream (peta, pace, HR), serta wellness (VO2max, tidur, HRV, Fitness/Fatigue).',
        en: 'Huawei watches have no public API, and since June 2026 the Strava API requires a paid subscription. intervals.icu is free, connects to Huawei Health, and provides activities, streams (map, pace, HR), and wellness (VO2max, sleep, HRV, fitness/fatigue).',
      },
    },
    {
      title: { id: 'AI opsional dengan cadangan', en: 'Optional AI with fallbacks' },
      text: {
        id: 'Tanpa GEMINI_API_KEY aplikasi tetap lengkap: import screenshot beralih ke OCR di browser. Pemanggil Gemini mencoba beberapa model, memotong permintaan yang menggantung, dan berhenti sebelum batas 60 detik Vercel, lalu memberi tahu jika kuota harian habis.',
        en: 'Without GEMINI_API_KEY the app still works: screenshot import falls back to in-browser OCR. The Gemini caller tries several models, cuts off hung requests, stops before Vercel’s 60-second limit, and tells the user when the daily quota runs out.',
      },
    },
    {
      title: { id: 'Link turunan dari kata sandi', en: 'Links derived from the password' },
      text: {
        id: 'Link coach (baca-saja) dan feed kalender memakai token HMAC dari APP_PASSWORD, karena aplikasi kalender tidak bisa mengirim header. Mengganti kata sandi otomatis mencabut semua link lama tanpa tabel token tambahan.',
        en: 'The read-only coach link and the calendar feed use an HMAC token derived from APP_PASSWORD, since calendar apps can’t send headers. Changing the password revokes every old link automatically, with no extra token table.',
      },
    },
  ],

  guide: [
    {
      title: { id: 'Buka tab Hari ini', en: 'Open the Today tab' },
      text: {
        id: 'Lihat sesi hari ini sesuai fase, peringatan beban di atas, dan cuaca serta kualitas udara untuk jam lari berikutnya.',
        en: 'See today’s session for the current phase, load warnings at the top, and the weather and air quality for your next run.',
      },
      image: 'step-1.jpg',
    },
    {
      title: { id: 'Isi check-in pagi', en: 'Fill in the morning check-in' },
      text: {
        id: 'Masukkan jam tidur, lelah, pegal, dan nyeri, lalu tekan Simpan check-in. Rekomendasi di bawahnya langsung berubah.',
        en: 'Enter sleep hours, fatigue, soreness, and pain, then press Save check-in. The advice below updates immediately.',
      },
      image: 'step-2.jpg',
    },
    {
      title: { id: 'Cek jadwal mingguan', en: 'Check the weekly plan' },
      text: {
        id: 'Tab Jadwal mingguan menampilkan menu per hari, target km minggu itu, dan sesi yang sudah terlaksana.',
        en: 'The weekly plan tab shows each day’s session, the week’s km target, and which sessions are done.',
      },
      image: 'step-3.jpg',
    },
    {
      title: { id: 'Catat sesi', en: 'Log a session' },
      text: {
        id: 'Di Catat latihan, pilih jenis sesi lalu isi jarak, durasi, dan HR. Pace dan kategori dihitung otomatis; tekan Simpan sesi.',
        en: 'In Log training, pick the session type and enter distance, duration, and HR. Pace and category are calculated for you; press Save session.',
      },
      image: 'step-4.jpg',
    },
    {
      title: { id: 'Buka detail sesi', en: 'Open a session’s details' },
      text: {
        id: 'Tekan Detail di riwayat sesi. Sesi dari jam menampilkan peta, grafik pace/HR/cadence/elevasi, zona HR, dan split per km.',
        en: 'Press Detail in the session history. Watch sessions show the map, pace/HR/cadence/elevation charts, HR zones, and per-km splits.',
      },
      image: 'step-5.jpg',
    },
    {
      title: { id: 'Pantau progres', en: 'Track progress' },
      text: {
        id: 'Tab Progres berisi volume mingguan, long run, VO2max, Fitness · Fatigue · Form, pencapaian, dan prediksi race.',
        en: 'The Progress tab has weekly volume, long runs, VO2max, Fitness · Fatigue · Form, achievements, and race predictions.',
      },
      image: 'step-6.jpg',
    },
    {
      title: { id: 'Siapkan race day', en: 'Plan race day' },
      text: {
        id: 'Di Musim & bulanan, pilih race dan target waktu untuk mendapat pace per segmen dan jadwal makan-minum.',
        en: 'In Season & monthly, pick a race and a target time to get pace per segment and an eating and drinking schedule.',
      },
      image: 'step-7.jpg',
    },
    {
      title: { id: 'Profil & tema', en: 'Profile & theme' },
      text: {
        id: 'Profil menyimpan rekor pribadi, zona HR, dan peta nyeri. Tema terang/gelap diatur di Tampilan & notifikasi.',
        en: 'The profile keeps personal records, HR zones, and the pain map. Light/dark theme is set under Display & notifications.',
      },
      image: 'step-8.jpg',
    },
  ],

  limits: {
    id: [
      'Satu pengguna per deploy: akses dikunci dengan satu kata sandi, tanpa sistem akun.',
      'Aturan jadwal dan peringatan adalah heuristik latihan pribadi, bukan saran medis.',
      'Grafik Fitness · Fatigue · Form, detail sesi dengan peta, dan check-in otomatis butuh sinkron intervals.icu; sesi manual hanya menampilkan statistik.',
      'Paket gratis Gemini dibatasi sekitar 20 permintaan per hari untuk review, tanya, dan import bersama.',
      'Di paket Hobby, Vercel Cron berjalan sekali sehari dalam jam yang ditentukan, jadi jam notifikasi tidak presisi.',
      'Aplikasinya pribadi dan dilindungi kata sandi, jadi tidak ada demo publik; video dan screenshot di portofolio memakai data demo dalam mode lokal.',
    ],
    en: [
      'One user per deployment: access is locked with a single password, with no account system.',
      'The planning and warning rules are personal training heuristics, not medical advice.',
      'The Fitness · Fatigue · Form chart, session detail with a map, and automatic check-ins need intervals.icu sync; manual sessions only show their stats.',
      'Gemini’s free tier allows roughly 20 requests per day across reviews, questions, and imports.',
      'On the Hobby plan, Vercel Cron runs once a day within the given hour, so notification times are not exact.',
      'The app is private and password-protected, so there is no public demo; the portfolio video and screenshots use demo data in local mode.',
    ],
  },
  next: {
    id: [
      'Mode demo publik yang memakai data contoh tanpa kata sandi.',
      'Memecah index.html menjadi modul dengan tes untuk logika jadwal dan peringatan.',
      'Dukungan multi-pengguna untuk dipakai bersama teman satu klub lari.',
    ],
    en: [
      'A public demo mode with sample data and no password.',
      'Splitting index.html into modules with tests for the planning and warning logic.',
      'Multi-user support so running-club friends can use it too.',
    ],
  },
}
