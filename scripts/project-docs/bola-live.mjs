// Isi PDF penjelasan proyek Bola Live. Skema: lihat README.md di folder ini.
export default {
  slug: 'bola-live',
  title: 'Bola Live',
  hero: '/projects/bola-live/cover.jpg',
  tagline: {
    id: 'Situs skor live, jadwal, dan klasemen sepak bola berbahasa Indonesia dengan waktu WIB, untuk penggemar yang mengikuti liga Eropa, Asia, ASEAN, dan timnas.',
    en: 'An Indonesian-language football site with live scores, fixtures, and standings in Jakarta time (WIB), for fans who follow European, Asian, and Southeast Asian leagues and national teams.',
  },
  role: {
    id: 'Proyek pribadi · desain, frontend, backend, deploy',
    en: 'Personal project · design, frontend, backend, deployment',
  },
  platforms: {
    id: 'Web (desktop & ponsel), tanpa akun',
    en: 'Web (desktop & mobile), no account needed',
  },
  links: [
    { label: { id: 'Demo live', en: 'Live demo' }, url: 'https://bola-live-olive.vercel.app' },
  ],
  tech: ['Next.js 16 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'ESPN API', 'TheSportsDB', 'Vercel'],

  overview: {
    id: [
      'Situs skor bola yang umum dipakai biasanya berbahasa Inggris, menampilkan jam sesuai zona waktu Eropa atau AS, dan jarang memuat liga Asia Tenggara. Akibatnya, penggemar di Indonesia harus menghitung sendiri jam tayang dan membuka beberapa situs sekaligus.',
      'Bola Live menggabungkan 28 kompetisi (top 10 liga Eropa, Liga Champions/Europa/Konferensi, ACL, liga Asia & ASEAN, dan turnamen timnas) dalam satu situs berbahasa Indonesia. Semua jam ditampilkan dalam WIB. Datanya diambil dari API publik ESPN, sedangkan liga ASEAN dari TheSportsDB.',
      'Hasilnya berupa situs Next.js yang di-deploy di Vercel dengan skor live yang diperbarui otomatis, halaman detail pertandingan, profil tim, serta fitur per perangkat seperti tim favorit, tebak skor, dan notifikasi gol. Semua fitur itu berjalan tanpa database dan tanpa akun.',
    ],
    en: [
      "Popular football score sites are usually in English, show kick-off times in European or US time zones, and rarely cover Southeast Asian leagues. Fans in Indonesia end up converting times by hand and juggling several sites.",
      'Bola Live brings 28 competitions together in one Indonesian-language site: the top 10 European leagues, the Champions/Europa/Conference League, the AFC Champions League, Asian and ASEAN leagues, and national-team tournaments. Every time is shown in WIB (UTC+7). Data comes from ESPN’s public API, with ASEAN leagues from TheSportsDB.',
      'The result is a Next.js site on Vercel with auto-updating live scores, match detail pages, team profiles, and per-device features such as favourite teams, score predictions, and goal notifications. All of it runs without a database or user accounts.',
    ],
  },

  features: [
    {
      title: { id: 'Skor hari ini & skor live', en: "Today's matches & live scores" },
      text: {
        id: 'Beranda menampilkan semua laga hari ini per kompetisi, dengan laga yang sedang berlangsung di paling atas, plus ringkasan jumlah laga, laga live, dan gol. Saat ada laga live atau yang mulai dalam 3 jam, halaman memuat skor baru tiap 30 detik tanpa reload.',
        en: 'The home page lists every match of the day by competition, with live matches pinned to the top and a summary of matches, live games, and goals. When a match is live or starts within 3 hours, the page pulls new scores every 30 seconds without a reload.',
      },
    },
    {
      title: { id: 'Jadwal per tanggal & wilayah', en: 'Fixtures by date & region' },
      text: {
        id: 'Halaman Jadwal punya deretan 7 hari dan filter wilayah (Timnas, Antarklub Eropa, Top 10 Liga Eropa, Asia, ASEAN). Pilihan tanggal dan wilayah tersimpan di URL, jadi tautannya bisa dibagikan.',
        en: 'The fixtures page has a 7-day date strip and region filters (national teams, European club cups, top 10 European leagues, Asia, ASEAN). The selected date and region live in the URL, so the link can be shared.',
      },
    },
    {
      title: { id: 'Halaman kompetisi', en: 'Competition pages' },
      text: {
        id: 'Tiap kompetisi punya klasemen (termasuk fase grup/fase liga dan zona Liga Champions atau degradasi), top skor & assist, 12 jadwal berikutnya, dan 12 hasil terakhir.',
        en: 'Each competition has a standings table (including group/league phases and Champions League or relegation zones), top scorers and assists, the next 12 fixtures, and the last 12 results.',
      },
    },
    {
      title: { id: 'Detail pertandingan', en: 'Match details' },
      text: {
        id: 'Halaman laga berisi momen penting (gol, kartu, pergantian), susunan pemain dan formasi, statistik, komentar per menit, video, serta info stadion dan wasit. Sebelum kick-off tersedia hitung mundur dan tombol tambah ke Google Calendar atau file .ics.',
        en: 'A match page shows key moments (goals, cards, substitutions), line-ups and formations, stats, minute-by-minute commentary, videos, and venue and referee info. Before kick-off it shows a countdown and buttons to add the match to Google Calendar or download an .ics file.',
      },
    },
    {
      title: { id: 'Profil tim & timnas', en: 'Club & national team profiles' },
      text: {
        id: 'Halaman tim menampilkan peringkat, form 5 laga terakhir, jadwal dan hasil, skuad per posisi, serta profil dan sejarah klub. Halaman Timnas menyorot Timnas Indonesia dan punya pencarian untuk 193 negara.',
        en: 'Team pages show league position, last-five form, fixtures and results, the squad by position, and a club profile with history. The national-team page highlights Indonesia and has a search covering 193 countries.',
      },
    },
    {
      title: { id: 'Timku: favorit, tebak skor, notifikasi gol', en: 'Timku: favourites, predictions, goal alerts' },
      text: {
        id: 'Pengunjung bisa menandai kompetisi dan tim favorit, menebak skor laga yang belum mulai (skor tepat 3 poin, hasil benar 1 poin, dikunci saat kick-off), dan menyalakan notifikasi browser untuk gol tim favorit. Semua tersimpan di perangkat, tanpa daftar akun.',
        en: 'Visitors can star competitions and teams, predict scores for upcoming matches (3 points for the exact score, 1 for the right result, locked at kick-off), and turn on browser notifications for their teams’ goals. Everything is stored on the device, with no sign-up.',
      },
    },
    {
      title: { id: 'Kartu skor untuk dibagikan', en: 'Shareable score cards' },
      text: {
        id: 'Tiap laga punya kartu skor PNG 1200×630 yang dibuat di server. Kartu ini bisa diunduh lewat tombol "Unduh kartu skor", di samping tombol bagikan ke WhatsApp dan salin link.',
        en: 'Every match has a 1200×630 PNG score card rendered on the server. It can be downloaded with the "download score card" button, next to the WhatsApp share and copy-link buttons.',
      },
    },
    {
      title: { id: 'Wonderkid FM26', en: 'FM26 wonderkids' },
      text: {
        id: 'Daftar 43 pemain muda incaran di Football Manager 26 yang bisa difilter per posisi, umur, dan liga, serta dicari berdasarkan nama, klub, atau negara. Datanya dikurasi manual.',
        en: 'A list of 43 sought-after young players in Football Manager 26, filterable by position, age, and league, with search by name, club, or country. The data is curated by hand.',
      },
    },
  ],

  architecture: {
    flow: [
      {
        name: 'Browser',
        detail: {
          id: 'Halaman hasil render server; favorit, tebakan, dan tema disimpan di localStorage',
          en: 'Server-rendered pages; favourites, predictions, and theme kept in localStorage',
        },
      },
      {
        name: 'Next.js (Vercel)',
        detail: {
          id: 'Server Components, route handler /api/live, /api/timku, /api/tebakan, dan kartu skor',
          en: 'Server Components, route handlers /api/live, /api/timku, /api/tebakan, and score cards',
        },
      },
      {
        name: 'Data Cache',
        detail: {
          id: 'Hasil fetch disimpan 30 detik hingga 24 jam, tergantung jenis data',
          en: 'Fetch results cached from 30 seconds to 24 hours, depending on the data',
        },
      },
      {
        name: 'ESPN · TheSportsDB',
        detail: {
          id: 'API publik gratis tanpa API key; ESPN untuk 24 kompetisi, TheSportsDB untuk 4 liga ASEAN',
          en: 'Free public APIs, no key; ESPN for 24 competitions, TheSportsDB for 4 ASEAN leagues',
        },
      },
    ],
    notes: {
      id: [
        'Halaman dirender di server lalu disimpan ulang secara berkala (ISR): beranda dan detail laga tiap 30 detik, halaman kompetisi tiap 60 detik, halaman tim tiap 5 menit. Pengunjung menerima HTML jadi, bukan memanggil ESPN langsung dari browser.',
        'Komponen AutoRefresh memanggil router.refresh() tiap 30 detik hanya saat ada laga live atau yang segera mulai, dan berhenti saat tab tidak terlihat.',
        'Fitur per perangkat (Timku, notifikasi gol, penilaian tebakan) mengirim daftar tim atau laga dari localStorage ke route handler kecil, yang menjawab dari cache yang sama.',
      ],
      en: [
        'Pages are rendered on the server and regenerated periodically (ISR): the home and match pages every 30 seconds, competition pages every 60 seconds, team pages every 5 minutes. Visitors get ready-made HTML instead of calling ESPN from the browser.',
        'An AutoRefresh component calls router.refresh() every 30 seconds only while a match is live or about to start, and pauses while the tab is hidden.',
        'Per-device features (Timku, goal alerts, prediction scoring) send the team or match list from localStorage to small route handlers, which answer from the same cache.',
      ],
    },
  },

  stack: [
    { layer: { id: 'Framework', en: 'Framework' }, items: ['Next.js 16 (App Router, Server Components, ISR)', 'React 19', 'TypeScript'] },
    { layer: { id: 'Tampilan', en: 'UI' }, items: ['Tailwind CSS 4', 'Google Fonts (Fredoka, Nunito)', 'Light & dark mode'] },
    { layer: { id: 'Data', en: 'Data' }, items: ['ESPN public API', 'TheSportsDB (free tier)', 'Next.js Data Cache (fetch revalidate)'] },
    { layer: { id: 'Fitur browser', en: 'Browser features' }, items: ['localStorage + useSyncExternalStore', 'Notification API', 'Web Share API', 'Clipboard API'] },
    { layer: { id: 'Gambar & kalender', en: 'Images & calendar' }, items: ['next/og (ImageResponse)', 'Google Calendar link', 'File .ics'] },
    { layer: { id: 'Deploy', en: 'Deployment' }, items: ['Vercel'] },
  ],

  decisions: [
    {
      title: { id: 'Cache di server dengan durasi sesuai jenis data', en: 'Server-side caching tuned per data type' },
      text: {
        id: 'Setiap request ke API memakai fetch Next.js dengan revalidate: skor kemarin–besok 30 detik, hari yang sudah lewat 6 jam, hari mendatang 15 menit, klasemen 5 menit, top skor 30 menit, profil klub 24 jam. Berapa pun jumlah pengunjung, ESPN hanya dipanggil sesekali, dan API gratis yang tidak resmi ini tidak dibebani.',
        en: "Every API request goes through Next.js fetch with a revalidate window: scores from yesterday to tomorrow 30 s, past days 6 h, future days 15 min, standings 5 min, top scorers 30 min, club profiles 24 h. However many people visit, ESPN is only called occasionally, which keeps load off an unofficial free API.",
      },
    },
    {
      title: { id: 'Tanggal WIB di atas data berbasis zona waktu AS', en: 'WIB dates on top of US-based day boundaries' },
      text: {
        id: 'ESPN membagi hari menurut zona waktu AS, sehingga laga pukul 02:00 WIB tercatat di hari sebelumnya. Untuk satu tanggal WIB, aplikasi mengambil dua hari ESPN (H-1 dan H), menggabungkan, lalu menyaring dengan offset tetap UTC+7. Ini aman karena WIB tidak memakai daylight saving.',
        en: 'ESPN splits days by US time, so a 02:00 WIB kick-off lands on the previous day. For one WIB date the app fetches two ESPN days (D-1 and D), merges them, and filters with a fixed UTC+7 offset, which is safe because WIB has no daylight saving.',
      },
    },
    {
      title: { id: 'Satu kompetisi gagal tidak menjatuhkan halaman', en: 'One failing competition never breaks the page' },
      text: {
        id: 'Data 28 kompetisi diambil paralel dengan Promise.allSettled. Kompetisi yang gagal dimuat dicatat dan ditampilkan sebagai pemberitahuan kecil, sementara laga lain tetap tampil.',
        en: 'Data for all 28 competitions is fetched in parallel with Promise.allSettled. Competitions that fail are listed in a small notice while the rest of the matches still render.',
      },
    },
    {
      title: { id: 'Fitur personal tanpa akun dan database', en: 'Personal features without accounts or a database' },
      text: {
        id: 'Favorit, tebakan, dan tema disimpan di localStorage lewat store kecil berbasis useSyncExternalStore. Semua komponen ikut berubah saat nilainya diganti, termasuk dari tab lain, dan render server memakai nilai bawaan agar tidak ada hydration mismatch. Skrip kecil di <head> memasang tema sebelum halaman tampil supaya mode gelap tidak berkedip.',
        en: 'Favourites, predictions, and theme live in localStorage behind a small useSyncExternalStore-based store. Every component updates when a value changes, even from another tab, and the server render uses defaults to avoid hydration mismatches. A tiny script in <head> applies the saved theme before first paint so dark mode does not flash.',
      },
    },
    {
      title: { id: 'Refresh hemat dan notifikasi gol dari polling', en: 'Lean refreshes and polling-based goal alerts' },
      text: {
        id: 'Auto-refresh hanya aktif saat ada laga live atau yang mulai dalam 3 jam, dan berhenti saat tab disembunyikan. Notifikasi gol memanggil /api/live tiap 60 detik; putaran pertama hanya mencatat skor awal, lalu notifikasi muncul saat total gol bertambah, laga kick-off, atau selesai.',
        en: 'Auto-refresh only runs when a match is live or starts within 3 hours, and pauses while the tab is hidden. Goal alerts poll /api/live every 60 seconds; the first poll only records the baseline, then a notification fires when the goal total rises, a match kicks off, or it ends.',
      },
    },
    {
      title: { id: 'Sumber cadangan untuk liga ASEAN', en: 'A fallback source for ASEAN leagues' },
      text: {
        id: 'ESPN berhenti memperbarui liga Indonesia, Thailand, Malaysia, dan Singapura, jadi kompetisi yang punya ID TheSportsDB otomatis diarahkan ke sana. Karena versi gratisnya dibatasi sekitar 30 request per menit, datanya di-cache 10 menit dan ditandai "terbatas" di tampilan.',
        en: 'ESPN stopped updating the Indonesian, Thai, Malaysian, and Singaporean leagues, so any competition with a TheSportsDB ID is routed there instead. Its free tier allows roughly 30 requests per minute, so that data is cached for 10 minutes and labelled as limited in the UI.',
      },
    },
  ],

  guide: [
    {
      image: 'step-1.jpg',
      title: { id: 'Lihat laga hari ini di Beranda', en: "See today's matches on the home page" },
      text: {
        id: 'Buka bola-live-olive.vercel.app. Bagian atas merangkum jumlah laga, laga live, dan gol hari ini, lalu di bawahnya semua laga dikelompokkan per kompetisi dengan jam WIB.',
        en: "Open bola-live-olive.vercel.app. The top banner sums up today's matches, live games, and goals, and below it every match is grouped by competition with WIB kick-off times.",
      },
    },
    {
      image: 'step-2.jpg',
      title: { id: 'Pilih tanggal dan wilayah di Jadwal', en: 'Pick a date and region in Jadwal' },
      text: {
        id: 'Klik menu "Jadwal", pilih tanggal lain di deretan hari, lalu klik filter wilayah seperti "Top 10 Liga Eropa" untuk mempersempit daftar.',
        en: 'Click "Jadwal" (Fixtures), choose another day from the date strip, then click a region filter such as "Top 10 Liga Eropa" to narrow the list.',
      },
    },
    {
      image: 'step-3.jpg',
      title: { id: 'Buka klasemen sebuah kompetisi', en: 'Open a competition table' },
      text: {
        id: 'Klik menu "Kompetisi", tekan bintang di kartu Premier League untuk menjadikannya favorit, lalu buka kartunya. Di sana ada klasemen, top skor & assist, jadwal berikutnya, dan hasil terakhir.',
        en: 'Click "Kompetisi" (Competitions), tap the star on the Premier League card to favourite it, then open the card to see the table, top scorers and assists, upcoming fixtures, and recent results.',
      },
    },
    {
      image: 'step-4.jpg',
      title: { id: 'Lihat detail pertandingan', en: 'View a match in detail' },
      text: {
        id: 'Di bagian "Hasil terakhir", klik salah satu laga. Halaman detail menampilkan momen penting, susunan pemain, statistik, dan komentar per menit, plus tombol "Unduh kartu skor".',
        en: 'Under "Hasil terakhir" (recent results), click a match. The detail page shows key moments, line-ups, stats, and minute-by-minute commentary, plus a "download score card" button.',
      },
    },
    {
      image: 'step-5.jpg',
      title: { id: 'Tebak skor laga berikutnya', en: 'Predict an upcoming score' },
      text: {
        id: 'Kembali ke halaman kompetisi dan buka laga di "Jadwal berikutnya". Atur skor dengan tombol + dan −, lalu tekan "Simpan tebakan"; poin dihitung otomatis setelah laga selesai.',
        en: 'Go back to the competition and open a match under "Jadwal berikutnya" (upcoming). Set a score with the + and − buttons and press "Simpan tebakan" (save); points are scored automatically after full time.',
      },
    },
    {
      image: 'step-6.jpg',
      title: { id: 'Simpan tim favorit', en: 'Save a favourite team' },
      text: {
        id: 'Klik nama tim di klasemen untuk membuka profilnya (form, skuad, jadwal, sejarah), lalu tekan "Jadikan tim favorit".',
        en: 'Click a team name in the table to open its profile (form, squad, fixtures, history), then press "Jadikan tim favorit" (make favourite).',
      },
    },
    {
      image: 'step-7.jpg',
      title: { id: 'Cek rangkuman di Timku', en: 'Check your summary in Timku' },
      text: {
        id: 'Klik menu "Timku". Tim favorit dirangkum lengkap dengan form, hasil terakhir, dan jadwal, beserta daftar tebakan skor. Dari sini notifikasi gol juga bisa diaktifkan.',
        en: 'Click "Timku" (My teams). Your favourite team is summarised with form, last result, and fixtures, next to your score predictions. Goal notifications can be switched on here too.',
      },
    },
    {
      image: 'step-8.jpg',
      title: { id: 'Jelajahi wonderkid FM26', en: 'Browse FM26 wonderkids' },
      text: {
        id: 'Klik menu "Wonderkid", pilih posisi "Penyerang" atau batas umur, lalu ketik nama pemain di kolom pencarian.',
        en: 'Click "Wonderkid", pick the "Penyerang" (forward) position or an age limit, then type a player name into the search box.',
      },
    },
  ],

  limits: {
    id: [
      'API ESPN tidak resmi dan tanpa dokumentasi, jadi strukturnya bisa berubah sewaktu-waktu. Proyek ini untuk portofolio, bukan penggunaan komersial.',
      'Skor tidak real-time: dengan cache 30 detik dan refresh 30 detik, skor di layar bisa tertinggal sekitar satu menit dari kejadian di lapangan.',
      'Liga ASEAN memakai TheSportsDB versi gratis: tanpa skor live, statistik, atau timeline, dan jumlah laga per hari serta baris klasemen yang tampil dibatasi.',
      'Liga Korea, UEA, Qatar, dan Ceko tidak tersedia di ESPN sehingga tidak dimuat. Berita dan komentar laga tetap berbahasa Inggris sesuai sumbernya.',
      'Notifikasi gol hanya berjalan selama Bola Live terbuka di salah satu tab; belum ada push notification dari server. Favorit dan tebakan tersimpan per perangkat dan tidak tersinkron antar perangkat.',
      'Daftar wonderkid dikurasi manual, bukan data resmi Sports Interactive, dan angka CA/PA sengaja tidak dicantumkan.',
    ],
    en: [
      "ESPN's API is unofficial and undocumented, so its structure can change without notice. This is a portfolio project, not for commercial use.",
      'Scores are not real time: with a 30-second cache and a 30-second refresh, what is on screen can trail the pitch by about a minute.',
      "ASEAN leagues use TheSportsDB's free tier: no live scores, stats, or timelines, and the number of matches per day and standings rows shown are capped.",
      "Korean, UAE, Qatari, and Czech leagues aren't available on ESPN, so they're not included. News and match commentary stay in English, as provided by the source.",
      'Goal alerts only work while Bola Live is open in a tab; there is no server push yet. Favourites and predictions are stored per device and do not sync.',
      'The wonderkid list is hand-curated, not official Sports Interactive data, and CA/PA ratings are deliberately left out.',
    ],
  },

  next: {
    id: [
      'Web Push lewat service worker agar notifikasi gol tetap masuk walau situs ditutup.',
      'Login opsional untuk menyinkronkan favorit dan tebakan antar perangkat, serta papan peringkat tebak skor.',
      'Pengujian otomatis untuk pemetaan data ESPN dan penanganan tanggal WIB.',
    ],
    en: [
      'Web Push via a service worker so goal alerts arrive even when the site is closed.',
      'Optional sign-in to sync favourites and predictions across devices, plus a prediction leaderboard.',
      'Automated tests for the ESPN data mapping and WIB date handling.',
    ],
  },
}
