// Isi PDF penjelasan proyek Jejak 42·50 (dulu Logbook 42·50). Skema: lihat README.md di folder ini.
export default {
  slug: 'logbook',
  title: 'Jejak 42·50',
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
  links: [{ label: { id: 'Demo (data contoh)', en: 'Demo (sample data)' }, url: 'https://raihan-evanza-logbook.vercel.app' }],
  tech: ['React 19', 'Vite', 'Rupa Design System', 'PWA + Service Worker', 'Vercel Functions & Cron', 'Supabase Auth & Postgres', 'Gemini API', 'intervals.icu API', 'Web Push', 'jsPDF', 'OpenStreetMap', 'Open-Meteo'],

  overview: {
    id: [
      'Aplikasi lari yang umum mencatat apa yang sudah terjadi, tetapi tidak menyusun program menuju beberapa target sekaligus: relay 14 km, full marathon, pendakian, lalu ultra 50 km. Rencana di spreadsheet juga tidak tahu kalau tidur kurang, nyeri muncul di tempat yang sama, atau volume naik terlalu cepat.',
      'Jejak 42·50 menyusun jadwal mingguan otomatis dari race utama, lalu menyesuaikannya dengan check-in pagi, sesi yang tercatat, dan data jam (Huawei lewat intervals.icu). Aplikasi memberi peringatan beban, memprediksi waktu race, membuat rencana race day, dan punya AI coach (Gemini). Jadwal bisa diubah per hari atau per bulan dengan planner bulanan.',
      'Awalnya satu file index.html untuk satu orang dengan satu kata sandi. Sekarang frontend React 19 dengan design system Rupa (brand latte), 12 Vercel Function, dan Supabase: setiap orang punya akun sendiri, data dijaga row-level security, dan superadmin mengurus akun tanpa bisa membuka data pribadi. Saya memakainya sendiri setiap hari; video dan screenshot di portofolio memakai data demo.',
    ],
    en: [
      "Typical running apps record what already happened, but they don't build a programme toward several goals at once: a 14 km relay leg, a full marathon, mountain hikes, then a 50 km ultra. A spreadsheet plan also can't tell when sleep is short, pain keeps coming back in the same spot, or volume climbs too fast.",
      'Jejak 42·50 generates a weekly plan from the main races and adjusts it using a morning check-in, logged sessions, and watch data (Huawei via intervals.icu). It warns about training load, predicts race times, builds a race-day plan, and has an AI coach (Gemini). The plan can be changed one day at a time or a whole month at once with the month planner.',
      'It started as a single index.html for one person behind one password. It is now a React 19 frontend on the Rupa design system (latte brand), 12 Vercel Functions, and Supabase: everyone has their own account, row-level security guards the data, and a superadmin manages accounts without being able to open personal data. I use it every day; the portfolio video and screenshots use demo data.',
    ],
  },

  features: [
    {
      title: { id: 'Jadwal otomatis dari race utama', en: 'Plan generated from the main races' },
      text: {
        id: 'Setiap race dan pendakian adalah event; tiga di antaranya ditandai race utama (relay, full marathon, ultra). Fase latihan disusun mundur dari tanggal itu, dengan sesi kualitas, long run, easy run, dan strength A/B tiap minggu, termasuk penyesuaian Ramadan dan hari puasa.',
        en: 'Every race and hike is an event; three are marked as main races (relay, full marathon, ultra). Training phases are built backwards from their dates, with quality sessions, a long run, easy runs, and strength A/B each week, including adjustments for Ramadan and fasting days.',
      },
    },
    {
      title: { id: 'Planner bulanan', en: 'Month planner' },
      text: {
        id: 'Selain tampilan mingguan, jadwal bisa dibuka per bulan: pilih menu (easy, tempo, long run, strength, libur, event) lalu ketuk tanggal-tanggal yang mau diganti. Ketuk tanggal tanpa menu untuk membuka detail harinya.',
        en: 'Besides the weekly view, the plan opens as a month: pick a menu (easy, tempo, long run, strength, rest, event) and tap the dates to change. Tapping a date with no menu selected opens that day.',
      },
    },
    {
      title: { id: 'Check-in pagi & peringatan', en: 'Morning check-in & warnings' },
      text: {
        id: 'Tidur, stres, pegal, dan nyeri (dengan peta tubuh) diisi tiap pagi. Aplikasi menandai volume yang naik lebih dari 15%, lonjakan beban sRPE, dan nyeri berulang di area yang sama, lalu menawarkan versi ringan untuk sisa minggu.',
        en: 'Sleep, stress, soreness, and pain (with a body map) are logged each morning. The app flags volume rising more than 15%, sRPE load spikes, and pain recurring in the same area, then offers a lighter version of the rest of the week.',
      },
    },
    {
      title: { id: 'Catat sesi tiga cara', en: 'Three ways to log a session' },
      text: {
        id: 'Form manual menghitung pace dan kategori dari HR & pace. Screenshot Huawei Health dibaca Gemini (atau OCR Tesseract di browser). Sesi dari jam masuk sendiri lewat intervals.icu dan melengkapi sesi manual yang mirip, tidak dobel.',
        en: 'The manual form works out pace and category from HR and pace. Huawei Health screenshots are read by Gemini (or Tesseract OCR in the browser). Watch sessions arrive by themselves through intervals.icu and merge with a similar manual entry instead of duplicating it.',
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
      title: { id: 'Progres & prediksi race', en: 'Progress & race predictions' },
      text: {
        id: 'Grafik volume mingguan, long run, HR easy, VO2max, dan Fitness · Fatigue · Form; pencapaian dan streak; Road to race; rekap bulanan; beban sRPE; serta prediksi waktu race dibanding target.',
        en: 'Charts for weekly volume, long runs, easy-run HR, VO2max, and Fitness · Fatigue · Form; achievements and streaks; Road to race; monthly recaps; sRPE load; and race-time predictions against targets.',
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
      title: { id: 'Akun & superadmin', en: 'Accounts & superadmin' },
      text: {
        id: 'Halaman masuk baru dengan Supabase Auth. Superadmin menambah, mengubah, mereset, dan menghapus akun, mencabut link coach dan kalender, serta membaca riwayat lari tiap akun (baca saja). Check-in, nyeri, profil, dan rencana tetap privat.',
        en: 'A new sign-in page on Supabase Auth. A superadmin adds, edits, resets, and deletes accounts, revokes coach and calendar links, and reads each account’s run history (read-only). Check-ins, pain, profile, and plans stay private.',
      },
    },
    {
      title: { id: 'AI coach, pengingat & laporan', en: 'AI coach, reminders & reports' },
      text: {
        id: 'Review harian, mingguan, dan bulanan oleh Gemini plus tanya bebas; notifikasi push pagi dan malam lewat Vercel Cron; feed kalender .ics; link baca-saja untuk coach; laporan PDF; backup JSON dan ekspor CSV; tema terang dan gelap.',
        en: 'Daily, weekly, and monthly reviews by Gemini plus free-form questions; morning and evening push notifications via Vercel Cron; an .ics calendar feed; a read-only coach link; a PDF report; JSON backup and CSV export; light and dark themes.',
      },
    },
  ],

  architecture: {
    flow: [
      {
        name: 'PWA (React)',
        detail: {
          id: 'UI dan logika jadwal di browser; masuk langsung ke Supabase Auth; antrean tulis saat offline',
          en: 'UI and planning logic in the browser; signs in straight to Supabase Auth; write queue while offline',
        },
      },
      {
        name: 'Vercel Functions',
        detail: {
          id: '12 function: data, doc, account, admin, intervals, import, review, ask, push, calendar, coach, config',
          en: '12 functions: data, doc, account, admin, intervals, import, review, ask, push, calendar, coach, config',
        },
      },
      {
        name: 'Supabase Postgres',
        detail: {
          id: 'Tabel docs: satu baris per record (akun + koleksi + id + JSON), dijaga RLS',
          en: 'A docs table: one row per record (account + collection + id + JSON), guarded by RLS',
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
        'Halaman memuat semua data akun sekali lewat GET /api/data, lalu setiap perubahan dikirim per record lewat POST /api/doc dengan access token Supabase. Function meneruskan token itu ke Supabase, sehingga row-level security memastikan setiap akun hanya membaca dan menulis barisnya sendiri.',
        'Superadmin membaca riwayat sesi lewat fungsi SQL admin_user_logs (security definer, cek peran di database) yang hanya mengembalikan isi sesi soal larinya. Akun dibuat superadmin; pendaftaran terbuka dimatikan.',
        'Service worker menyimpan kulit aplikasi, sedangkan /api tidak pernah di-cache. Tulisan saat offline masuk antrean dan terkirim begitu online. Secret key Supabase, Gemini, dan VAPID hanya ada di env Vercel.',
      ],
      en: [
        'The page loads all of an account’s data once through GET /api/data, then sends each change as a single record through POST /api/doc with the Supabase access token. Functions pass that token on to Supabase, so row-level security makes sure each account only reads and writes its own rows.',
        'The superadmin reads run history through the admin_user_logs SQL function (security definer, role checked in the database), which returns only the running part of each session. Accounts are created by the superadmin; open sign-up is off.',
        'The service worker caches the app shell, while /api is never cached. Writes made offline wait in a queue and go out once online. The Supabase secret key, Gemini, and VAPID keys live only in Vercel env.',
      ],
    },
  },

  stack: [
    { layer: { id: 'Frontend', en: 'Frontend' }, items: ['React 19 + Vite', 'Rupa Design System (@rupa-ui/react, @rupa-ui/tokens, brand latte)', 'Grafik SVG buatan sendiri', 'Tema terang & gelap'] },
    { layer: { id: 'PWA', en: 'PWA' }, items: ['Service Worker', 'Web App Manifest', 'Web Push (VAPID)', 'Antrean tulis offline'] },
    { layer: { id: 'Backend', en: 'Backend' }, items: ['Vercel Functions (Node.js)', 'Vercel Cron', 'web-push'] },
    { layer: { id: 'Data & akun', en: 'Data & accounts' }, items: ['Supabase Auth', 'Supabase Postgres (RLS, fungsi SQL)', 'Tes RLS di Docker', 'Backup JSON, ekspor CSV'] },
    { layer: { id: 'Integrasi', en: 'Integrations' }, items: ['intervals.icu API', 'Gemini API (REST)', 'Tesseract.js (OCR cadangan)', 'Open-Meteo', 'OpenStreetMap'] },
    { layer: { id: 'Dokumen', en: 'Documents' }, items: ['jsPDF (dimuat saat dibutuhkan)', 'Feed kalender .ics'] },
  ],

  decisions: [
    {
      title: { id: 'Dari satu file ke React + Rupa', en: 'From one file to React + Rupa' },
      text: {
        id: 'Versi pertama satu index.html tanpa framework. Saat fitur akun, superadmin, dan planner bulanan masuk, file itu dipecah: logika jadwal dipindah apa adanya ke src/lib, tampilan menjadi satu komponen React per tab, dan semua warna serta komponen dasar memakai Rupa supaya konsisten dengan proyek saya yang lain.',
        en: 'The first version was a single framework-free index.html. When accounts, a superadmin, and the month planner arrived, it was split up: the planning logic moved unchanged into src/lib, each tab became a React component, and every color and base component comes from Rupa to stay consistent with my other projects.',
      },
    },
    {
      title: { id: 'Supabase dengan RLS, bukan kata sandi bersama', en: 'Supabase with RLS instead of a shared password' },
      text: {
        id: 'Satu kata sandi dan Upstash Redis cukup untuk satu orang. Untuk banyak akun, Supabase Auth memberi login per orang, dan row-level security menjaga data di database, bukan hanya di kode function. Data lama dipindahkan sekali ke satu akun dengan skrip migrasi.',
        en: 'One password and Upstash Redis were enough for one person. For many accounts, Supabase Auth gives each person a login, and row-level security guards the data in the database rather than only in function code. The old data was moved once into one account with a migration script.',
      },
    },
    {
      title: { id: 'Satu baris per record', en: 'One row per record' },
      text: {
        id: 'Setiap sesi, check-in, atau event disimpan sebagai baris sendiri dan ditulis satu per satu. Dua perangkat yang mengubah record berbeda tidak saling menimpa, berbeda dengan menyimpan seluruh data sebagai satu dokumen.',
        en: 'Each session, check-in, or event is its own row and is written individually. Two devices editing different records never overwrite each other, unlike saving all the data as a single document.',
      },
    },
    {
      title: { id: 'Rencana dihitung di browser', en: 'The plan is computed in the browser' },
      text: {
        id: 'Server hanya menyimpan data mentah; jadwal, peringatan, dan prediksi dihitung ulang di browser, sehingga tetap jalan saat offline. Untuk notifikasi push, halaman mengunggah jadwal beberapa minggu ke depan supaya cron tahu sesi hari itu.',
        en: 'The server only stores raw data; the plan, warnings, and predictions are recomputed in the browser, so they still work offline. For push notifications the page uploads the next few weeks of the plan so the cron job knows the day’s session.',
      },
    },
    {
      title: { id: 'Superadmin hanya untuk pemeliharaan', en: 'A superadmin only for maintenance' },
      text: {
        id: 'Superadmin tidak menyimpan data latihan sendiri dan tidak bisa membuka check-in, nyeri, profil, atau rencana orang lain; riwayat lari dibaca lewat fungsi SQL yang memilih kolomnya sendiri. Superadmin ditambahkan hanya lewat SQL Editor.',
        en: 'The superadmin keeps no training data and cannot open anyone’s check-ins, pain, profile, or plan; run history is read through an SQL function that picks its own columns. Superadmins are added only from the SQL Editor.',
      },
    },
    {
      title: { id: 'intervals.icu, bukan Strava', en: 'intervals.icu instead of Strava' },
      text: {
        id: 'Jam Huawei tidak punya API publik, dan sejak Juni 2026 API Strava butuh langganan berbayar. intervals.icu gratis, tersambung ke Huawei Health, dan menyediakan aktivitas, stream (peta, pace, HR), serta wellness. Key-nya disimpan per akun di tabel khusus server.',
        en: 'Huawei watches have no public API, and since June 2026 the Strava API requires a paid subscription. intervals.icu is free, connects to Huawei Health, and provides activities, streams (map, pace, HR), and wellness. Each account’s key is kept in a server-only table.',
      },
    },
  ],

  guide: [
    {
      title: { id: 'Buka tab Hari ini', en: 'Open the Today tab' },
      text: {
        id: 'Lihat sesi hari ini sesuai fase, peringatan beban di atas, cuaca dan kualitas udara untuk jam lari berikutnya, lalu isi check-in pagi.',
        en: 'See today’s session for the current phase, load warnings at the top, and the weather and air quality for your next run, then fill in the morning check-in.',
      },
      image: 'step-1.jpg',
    },
    {
      title: { id: 'Catat sesi', en: 'Log a session' },
      text: {
        id: 'Tekan Catat sesi ini atau buka Catat latihan, isi jarak, durasi, dan HR. Pace dan kategori dihitung otomatis; tekan Simpan sesi.',
        en: 'Press Log this session or open Log training, then enter distance, duration, and HR. Pace and category are calculated for you; press Save session.',
      },
      image: 'step-2.jpg',
    },
    {
      title: { id: 'Buka detail sesi dari jam', en: 'Open a watch session’s details' },
      text: {
        id: 'Tekan Detail di riwayat sesi. Sesi dari jam menampilkan peta, grafik pace/HR/cadence/elevasi, zona HR, dan split per km.',
        en: 'Press Detail in the session history. Watch sessions show the map, pace/HR/cadence/elevation charts, HR zones, and per-km splits.',
      },
      image: 'step-3.jpg',
    },
    {
      title: { id: 'Cek jadwal mingguan', en: 'Check the weekly plan' },
      text: {
        id: 'Tab Jadwal mingguan menampilkan menu per hari, target km minggu itu, dan sesi yang sudah terlaksana. Ketuk hari untuk melihat atau mengubah menunya.',
        en: 'The weekly plan tab shows each day’s session, the week’s km target, and which sessions are done. Tap a day to see or change its menu.',
      },
      image: 'step-4.jpg',
    },
    {
      title: { id: 'Atur sebulan sekaligus', en: 'Plan a whole month' },
      text: {
        id: 'Pilih Bulan di pojok kanan, pilih menu di Ganti menu, lalu ketuk tanggal-tanggal yang mau diganti. Ketuk menunya lagi untuk berhenti.',
        en: 'Choose Month at the top right, pick a menu under Change menu, then tap the dates to change. Tap the menu again to stop.',
      },
      image: 'step-5.jpg',
    },
    {
      title: { id: 'Atur race & event', en: 'Set races & events' },
      text: {
        id: 'Di tab Target, tambahkan race, fun run, atau pendakian. Tiga race utama (relay, full marathon, ultra) menyusun seluruh musim.',
        en: 'In the Target tab, add races, fun runs, or hikes. The three main races (relay, full marathon, ultra) shape the whole season.',
      },
      image: 'step-6.jpg',
    },
    {
      title: { id: 'Pantau progres', en: 'Track progress' },
      text: {
        id: 'Tab Progres berisi volume mingguan, long run, VO2max, Fitness · Fatigue · Form, pencapaian, dan prediksi race.',
        en: 'The Progress tab has weekly volume, long runs, VO2max, Fitness · Fatigue · Form, achievements, and race predictions.',
      },
      image: 'step-7.jpg',
    },
    {
      title: { id: 'Siapkan race day', en: 'Plan race day' },
      text: {
        id: 'Di Musim & bulanan, pilih race dan target waktu untuk mendapat pace per segmen dan jadwal makan-minum. Profil menyimpan rekor, zona HR, dan peta nyeri; tema gelap ada di tombol bulan di atas.',
        en: 'In Season & monthly, pick a race and a target time to get pace per segment and an eating and drinking schedule. The profile keeps records, HR zones, and the pain map; dark mode is the moon button at the top.',
      },
      image: 'step-8.jpg',
    },
  ],

  limits: {
    id: [
      'Aturan jadwal dan peringatan adalah heuristik latihan pribadi, bukan saran medis.',
      'Tidak ada pendaftaran terbuka: akun dibuat oleh superadmin. Kuota Gemini dan kunci VAPID dipakai bersama semua akun.',
      'Grafik Fitness · Fatigue · Form, detail sesi dengan peta, dan data wellness butuh sinkron intervals.icu; sesi manual hanya menampilkan statistik.',
      'Paket gratis Gemini dibatasi sekitar 20 permintaan per hari untuk review, tanya, dan import bersama.',
      'Di paket Hobby, Vercel Cron berjalan sekali sehari dalam jam yang ditentukan, jadi jam notifikasi tidak presisi.',
      'Demo publik adalah build terpisah tanpa API dan tanpa akun: berjalan dalam mode lokal dengan data contoh yang direset setiap hari, sehingga sinkron jam, AI coach, notifikasi, dan halaman superadmin tidak aktif di sana. Screenshot halaman masuk dan superadmin memakai data tiruan.',
    ],
    en: [
      'The planning and warning rules are personal training heuristics, not medical advice.',
      'There is no open sign-up: accounts are created by the superadmin. The Gemini quota and VAPID keys are shared by every account.',
      'The Fitness · Fatigue · Form chart, session detail with a map, and wellness data need intervals.icu sync; manual sessions only show their stats.',
      'Gemini’s free tier allows roughly 20 requests per day across reviews, questions, and imports.',
      'On the Hobby plan, Vercel Cron runs once a day within the given hour, so notification times are not exact.',
      'The public demo is a separate build with no API and no accounts: it runs in local mode with sample data that resets daily, so watch sync, the AI coach, notifications, and the superadmin page are off there. The sign-in and superadmin screenshots use mock data.',
    ],
  },
  next: {
    id: [
      'Tes otomatis untuk logika jadwal dan peringatan di src/lib.',
      'Rencana latihan untuk ultra lebih jauh dari 50 km.',
    ],
    en: [
      'Automated tests for the planning and warning logic in src/lib.',
      'Training plans for ultras longer than 50 km.',
    ],
  },
}
