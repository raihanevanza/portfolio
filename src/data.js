// ============================================================
//  EDIT FILE INI SAJA untuk mengganti seluruh isi portofolio.
//  Semua teks, pengalaman, proyek, dan kontak diambil dari sini.
//
//  Teks yang berbeda per bahasa ditulis sebagai { id: '...', en: '...' }.
//  Teks yang sama di kedua bahasa (nama, teknologi, dll.) cukup ditulis biasa.
// ============================================================

export const profile = {
  name: 'Raihan Evanza',
  role: 'Fullstack & Mobile Developer',
  location: 'Bogor, Indonesia',
  tagline: {
    id: 'Membangun aplikasi web dan mobile untuk sektor perbankan dan keuangan dengan React, React Native, dan Vue — dari kebutuhan bisnis menjadi kode yang rapi dan mudah dirawat.',
    en: 'Building web and mobile apps for the banking and finance sector with React, React Native, and Vue — turning business needs into clean, maintainable code.',
  },
  about: {
    id: [
      'Saya fullstack dan mobile developer dengan pengalaman lebih dari 6 tahun di bidang rekayasa perangkat lunak. Keahlian utama saya adalah ReactJS, VueJS, dan React Native, dan saat ini saya menjadi Lead Mobile Developer untuk aplikasi Madani Tumbuh di PT Permodalan Nasional Madani.',
      'Saya berpengalaman mengembangkan backend dengan Laravel dan CodeIgniter, serta terbiasa mengintegrasikan REST API dan gRPC. Saat ini saya juga mempelajari dan memperdalam Go dan Flutter melalui proyek pribadi Patungan, Mini ERP, dan chatbot AI. Saya senang menerjemahkan kebutuhan bisnis menjadi aplikasi web dan mobile yang fungsional dan mudah dirawat.',
    ],
    en: [
      "I'm a fullstack and mobile developer with more than 6 years of experience in software engineering. My core strengths are ReactJS, VueJS, and React Native, and I'm currently the Lead Mobile Developer for the Madani Tumbuh app at PT Permodalan Nasional Madani.",
      "I'm experienced in backend development with Laravel and CodeIgniter, and comfortable integrating REST APIs and gRPC. I'm currently learning Go and Flutter and building my skills through personal projects: Patungan, Mini ERP, and an AI chatbot. I enjoy turning business requirements into functional, maintainable web and mobile apps.",
    ],
  },
  // File CV di folder /public, dibuat otomatis dengan `npm run cv`. Kosongkan ('') untuk menyembunyikan tombol.
  cvUrl: { id: '/Raihan-Evanza-CV-ID.pdf', en: '/Raihan-Evanza-CV-EN.pdf' },
  // Foto profil: taruh di /public lalu isi misal '/foto.jpg'. Kosongkan untuk memakai inisial.
  photo: '/foto.jpg',
  available: true, // tampilkan badge "Terbuka untuk peluang baru"
}

export const contacts = [
  { label: 'Email', value: 'raihan.evanza20@gmail.com', href: 'mailto:raihan.evanza20@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/raihan-evanza', href: 'https://www.linkedin.com/in/raihan-evanza' },
  { label: 'GitHub', value: 'github.com/raihanevanza', href: 'https://github.com/raihanevanza' },
]

export const stats = [
  { value: '6+', label: { id: 'Tahun pengalaman', en: 'Years of experience' } },
  { value: '5', label: { id: 'Perusahaan', en: 'Companies' } },
  { value: '2', label: { id: 'Aplikasi perbankan & pembiayaan', en: 'Banking & financing apps' } },
]

export const skills = [
  {
    group: 'Frontend & Mobile',
    items: ['React', 'React Native', 'Flutter', 'Vue.js', 'Redux', 'Redux Saga', 'Vuex', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Sass'],
  },
  {
    group: 'Backend & Database',
    items: ['Laravel', 'CodeIgniter', 'REST API', 'gRPC', 'MySQL', 'PostgreSQL', 'WatermelonDB', 'Node.js', 'Python', 'Go'],
  },
  {
    group: { id: 'Tools & Lainnya', en: 'Tools & Others' },
    items: ['Git', 'GitHub', 'Bitbucket', 'Figma', 'Axios', 'jQuery / Ajax'],
  },
]

// Urutkan dari yang terbaru. `end: ''` berarti masih bekerja di sana (ditampilkan "Sekarang").
export const experiences = [
  {
    company: 'PT Permodalan Nasional Madani',
    role: 'Lead Mobile Developer',
    type: '',
    location: '',
    start: 'Jun 2026',
    end: '',
    summary: {
      id: 'Mengoordinasikan pengembangan dan pemeliharaan aplikasi mobile Madani Tumbuh untuk mendukung operasional pembiayaan nasabah, mencakup menu Pipeline, Community, Prospect, Survey, Top Up, 3R, DNPT, dan INI.',
      en: 'Coordinating the development and maintenance of the Madani Tumbuh mobile app to support customer financing operations across the Pipeline, Community, Prospect, Survey, Top Up, 3R, DNPT, and INI menus.',
    },
    // TODO: tambahkan 1–2 poin khas peran lead, misal ukuran tim, code review, keputusan arsitektur, atau mentoring.
    highlights: {
      id: [
        'Mengoordinasikan pengembangan fitur Pipeline dan Community untuk mendukung pengelolaan data pengajuan pinjaman dan kelompok nasabah.',
        'Mengoordinasikan pengembangan fitur Prospect dan Survey untuk mendukung penilaian peluang pembiayaan dan pencatatan kebutuhan nasabah.',
        'Mengoordinasikan pengembangan fitur Top Up untuk mendukung pengajuan tambahan pembiayaan nasabah.',
      ],
      en: [
        'Coordinating development of Pipeline and Community features to support loan application data and customer group management.',
        'Coordinating development of Prospect and Survey features to support financing opportunity assessments and records of customer needs.',
        'Coordinating development of the Top Up feature to support customer requests for additional financing.',
      ],
    },
    tech: ['React Native', 'TypeScript', 'Redux', 'Redux Saga', 'WatermelonDB', 'Axios'],
  },
  {
    company: 'PT Permodalan Nasional Madani',
    role: 'Staff Frontend Developer – Mobile',
    type: '',
    location: '',
    start: 'Apr 2024',
    end: 'Jun 2026',
    summary: {
      id: 'Mengembangkan dan memelihara fitur aplikasi mobile Madani Tumbuh menggunakan React Native dan TypeScript untuk mendukung operasional pembiayaan nasabah.',
      en: 'Developed and maintained features for the Madani Tumbuh mobile app using React Native and TypeScript to support customer financing operations.',
    },
    highlights: {
      id: [
        'Mengembangkan fitur Pipeline untuk pengelolaan data nasabah dalam proses pengajuan pinjaman.',
        'Mengembangkan fitur Community untuk pengelolaan kelompok nasabah yang mengajukan pinjaman.',
        'Mengembangkan fitur Prospect untuk mendukung penilaian peluang dan risiko pembiayaan.',
        'Mengembangkan fitur Survey untuk pencatatan survei kebutuhan pembiayaan pelaku usaha dan rumah tangga.',
      ],
      en: [
        'Developed the Pipeline feature to manage customer data for loan applications.',
        'Developed the Community feature to manage customer groups applying for loans.',
        'Developed the Prospect feature to support assessments of financing opportunities and risks.',
        'Developed the Survey feature to record financing needs surveys for businesses and households.',
      ],
    },
    tech: ['React Native', 'TypeScript', 'Redux', 'Redux Saga', 'WatermelonDB', 'Axios'],
  },
  {
    company: 'Satkomindo Mediyasa – PT Bank Rakyat Indonesia Tbk',
    role: 'Frontend Developer',
    type: '',
    location: '',
    start: 'Feb 2023',
    end: 'Apr 2024',
    summary: {
      id: 'Mengembangkan dan memelihara antarmuka modul pinjaman pada proyek NDS di BRI menggunakan Vue.js untuk mendukung transaksi dan pelaporan pinjaman.',
      en: 'Developed and maintained the loan module interface for the NDS project at BRI using Vue.js to support loan transactions and reporting.',
    },
    highlights: {
      id: [
        'Mengembangkan fitur setoran, pelunasan, dan pencairan dana tunai maupun non-tunai.',
        'Mendesain dan mengembangkan modul pinjaman Brimitra.',
        'Mengembangkan fitur pemisahan transaksi tunai dan non-tunai secara manual untuk mendukung kebutuhan operasional pinjaman.',
        'Mengembangkan laporan pembayaran kolektif dan fitur transaksi massal untuk pemrosesan setoran dalam jumlah besar.',
        'Membuat laporan informasi rekening pinjaman untuk mendukung pengecekan data rekening.',
      ],
      en: [
        'Built cash and non-cash deposit, repayment, and disbursement features.',
        'Designed and developed the Brimitra loan module.',
        'Developed a feature for manually splitting cash and non-cash transactions to support loan operations.',
        'Developed collective payment reports and bulk transaction features for processing large volumes of deposits.',
        'Created loan account information reports to support account data checks.',
      ],
    },
    tech: ['Vue 2 & 3', 'Vuex', 'Options & Composition API', 'gRPC'],
  },
  {
    company: 'MNC Media',
    role: 'Fullstack Developer',
    type: '',
    location: '',
    start: 'Sep 2022',
    end: 'Feb 2023',
    summary: {
      id: 'Mengembangkan dan memelihara sistem pengajuan dan pelaporan permintaan iklan menggunakan React dan Laravel, dari pengajuan tim sales hingga tindak lanjut tim marketing.',
      en: 'Developed and maintained an ad request and reporting system using React and Laravel, covering submissions by the sales team through follow-up by the marketing team.',
    },
    highlights: {
      id: [
        'Mengoptimalkan query dan menambahkan indeks tabel untuk meningkatkan performa aplikasi.',
        'Membangun alur pengajuan iklan dari tim sales hingga ditindaklanjuti tim marketing.',
        'Memelihara aplikasi agar sesuai dengan alur kerja iklan dan promosi yang terus berkembang.',
        'Merancang mockup antarmuka di Figma.',
      ],
      en: [
        'Optimized queries and added table indexes to improve application performance.',
        'Built the ad request flow from the sales team through to follow-up by the marketing team.',
        'Maintained the app to keep up with evolving advertising and promotion workflows.',
        'Designed UI mockups in Figma.',
      ],
    },
    tech: ['Laravel', 'React', 'Redux', 'Figma', 'Bitbucket'],
  },
  {
    company: 'PT Haistar Bintang Dagang International',
    role: 'Fullstack Developer',
    type: '',
    location: '',
    start: { id: 'Agu 2021', en: 'Aug 2021' },
    end: 'Jul 2022',
    summary: {
      id: 'Mengembangkan sistem pelaporan pergerakan paket dari pabrik hingga pelanggan menggunakan React dan CodeIgniter, dengan data dari PostgreSQL dan MySQL.',
      en: 'Developed a system for reporting package movements from factories to customers using React and CodeIgniter, with data from PostgreSQL and MySQL.',
    },
    highlights: {
      id: [
        'Membangun sistem antrean untuk unduhan laporan agar proses unduh tetap lancar.',
        'Mengembangkan modul pelaporan (Excel dan grafik) untuk data pengiriman, barang keluar, dan barang masuk.',
        'Mengoptimalkan query dan indeks database untuk mempercepat pengambilan data.',
        'Membuat scheduler dengan Python dan mengelola dua database (PostgreSQL dan MySQL) untuk pelaporan.',
      ],
      en: [
        'Built a queue system for report downloads to keep downloads running smoothly.',
        'Developed reporting modules (Excel and charts) for shipment, outbound, and inbound data.',
        'Optimized database queries and indexes to speed up data retrieval.',
        'Built a scheduler in Python and managed two databases (PostgreSQL and MySQL) for reporting.',
      ],
    },
    tech: ['CodeIgniter', 'React', 'Redux', 'Python', 'PostgreSQL', 'MySQL'],
  },
  {
    company: 'Dbisnis Network Indonesia',
    role: 'Frontend Developer',
    type: '',
    location: '',
    start: 'Jun 2020',
    end: 'Jun 2021',
    summary: {
      id: 'Mengembangkan antarmuka aplikasi dan situs web untuk mendukung proses pemesanan pelanggan menggunakan CodeIgniter dan CSS.',
      en: 'Developed application and website interfaces to support customer bookings using CodeIgniter and CSS.',
    },
    highlights: [],
    tech: ['CodeIgniter', 'CSS', 'SQL'],
  },
]

// `link`, `video`, `tutorial`, `doc`, `repo`, dan `image` opsional — kosongkan jika tidak ada.
// `video`: rekaman demo di /public/projects, misal '/projects/nama.mp4'.
// `tutorial`: video tutorial langkah demi langkah. `doc`: PDF penjelasan { id, en }, dibuat dengan `npm run docs`.
// `category`: gunakan 'personal' untuk proyek pribadi atau 'professional' untuk proyek pekerjaan.
// `image`: taruh gambar di /public/projects lalu isi path-nya, misal '/projects/nama.png'.
// `gallery`: opsional, daftar { src, thumb, caption } yang dibuka saat gambar diklik. Tanpa ini, yang dibuka `image`.
export const projects = [
  {
    title: 'Patungan — Split Bill',
    category: 'personal',
    description: {
      id: 'Proyek pribadi: aplikasi split bill untuk patungan bersama teman. Tagihan bisa dibagi rata, per item (lengkap dengan pajak, servis, dan diskon), atau manual, dan jumlah bagian selalu pas dengan total berkat metode largest remainder. Saldo grup disederhanakan menjadi beberapa transfer saja (paling banyak n−1), dengan konfirmasi pembayaran oleh penerima dan pengingat otomatis. Backend Go dengan API gRPC (Connect), web dashboard React, dan aplikasi Flutter (Android + iOS) yang bisa scan struk on-device.',
      en: 'Personal project: a split bill app for sharing costs with friends. Bills can be split equally, by item (with tax, service charge, and discounts), or manually, and the shares always add up exactly to the total thanks to the largest remainder method. Group balances are simplified into just a few transfers (at most n−1), with payment confirmation by the recipient and automatic reminders. A Go backend with a gRPC (Connect) API, a React web dashboard, and a Flutter app (Android + iOS) with on-device receipt scanning.',
    },
    tech: ['Go', 'gRPC', 'Protocol Buffers', 'PostgreSQL', 'React', 'TypeScript', 'RTK Query', 'Tailwind CSS', 'Flutter', 'Riverpod'],
    image: '/projects/patungan-web-mobile.png',
    gallery: [
      ['overview', { id: 'Web, Android, dan iOS memakai API gRPC yang sama', en: 'Web, Android, and iOS share the same gRPC API' }],
      ['web-dashboard-light', { id: 'Web: ringkasan piutang dan hutang di semua grup', en: 'Web: what you are owed and owe across all groups' }],
      ['web-balances-light', { id: 'Web: saldo grup dan saran transfer seminimal mungkin', en: 'Web: group balances and the fewest suggested transfers' }],
      ['web-bill-form', { id: 'Web: tagihan per item, pajak, servis, dan diskon dibagi proporsional dengan pratinjau langsung', en: 'Web: itemized bill with tax, service, and discount split proportionally, previewed live' }],
      ['web-bill-detail', { id: 'Web: detail tagihan dengan foto struk', en: 'Web: bill details with the receipt photo' }],
      ['web-payments', { id: 'Web: pembayaran menunggu konfirmasi penerima', en: 'Web: payments waiting for the recipient to confirm' }],
      ['web-dashboard-dark', { id: 'Web: mode gelap', en: 'Web: dark mode' }],
      ['android-home', { id: 'Android: beranda', en: 'Android: home' }],
      ['android-balances', { id: 'Android: saldo grup dan saran transfer', en: 'Android: group balances and suggested transfers' }],
      ['android-bill-preview', { id: 'Android: pratinjau pembagian per item', en: 'Android: itemized split preview' }],
      ['android-payments', { id: 'Android: konfirmasi atau tolak pembayaran', en: 'Android: confirm or reject a payment' }],
      ['ios-home', { id: 'iOS: beranda dengan ringkasan saldo', en: 'iOS: home with the balance summary' }],
      ['ios-bill-detail', { id: 'iOS: detail tagihan per item', en: 'iOS: itemized bill details' }],
      ['ios-home-dark', { id: 'iOS: mode gelap dan bahasa Inggris', en: 'iOS: dark mode in English' }],
    ].map(([name, caption]) => ({
      src: `/projects/patungan/${name}.jpg`,
      thumb: `/projects/patungan/thumbs/${name}.jpg`,
      caption,
    })),
    link: 'https://raihan-evanza-patungan.vercel.app/login',
    video: '/projects/patungan-demo.mp4',
    tutorial: '/projects/patungan/tutorial.mp4',
    doc: { id: '/projects/patungan/patungan-ID.pdf', en: '/projects/patungan/patungan-EN.pdf' },
    repo: '',
  },
  {
    title: 'Mini ERP',
    category: 'personal',
    description: {
      id: 'Proyek pribadi: aplikasi inventori dan order dengan purchase order ber-approval, penerimaan barang parsial, sales order dengan reservasi stok otomatis, dan buku besar mutasi stok per gudang. Setiap perubahan stok berjalan dalam satu transaksi database agar stok tidak pernah minus. Dilengkapi hak akses per role, dashboard KPI, dua bahasa, dan dark mode, plus aplikasi mobile React Native (Android + iOS) untuk manager: dashboard, approve/reject PO, serta pantau sales order dan stok.',
      en: 'Personal project: an inventory and order management app with approval-based purchase orders, partial goods receipts, sales orders with automatic stock reservation, and a per-warehouse stock ledger. Every stock change runs in a single database transaction so stock can never go negative. Includes role-based access, a KPI dashboard, two languages, and dark mode, plus a React Native mobile app (Android + iOS) for managers: dashboard, PO approve/reject, and sales order and stock monitoring.',
    },
    tech: ['Go', 'Gin', 'GORM', 'React', 'React Native', 'TypeScript', 'RTK Query', 'Tailwind CSS', 'SQL Server'],
    image: '/projects/project-erp-web-mobile.png',
    link: 'https://raihan-evanza-erp.vercel.app',
    video: '/projects/mini-erp-demo.mp4',
    tutorial: '/projects/mini-erp/tutorial.mp4',
    doc: { id: '/projects/mini-erp/mini-erp-ID.pdf', en: '/projects/mini-erp/mini-erp-EN.pdf' },
    repo: '',
  },
  {
    title: 'Market Live',
    category: 'personal',
    description: {
      id: 'Proyek pribadi: dashboard harga live untuk 80 instrumen (saham IDX & AS, indeks, kripto, emas termasuk Antam, komoditas, dan kurs) dari sumber data gratis tanpa API key. Kripto dan emas spot bergerak real-time lewat WebSocket Binance langsung dari browser, sedangkan data Yahoo Finance diambil lewat Vercel Functions yang di-cache di CDN. Ada rencana trading dengan aturan breakout yang dipilih lewat backtest 5 tahun, screener sinyal harian (Vercel Cron + Blob), grafik prakiraan, kalkulator konversi, dan berita pasar.',
      en: 'Personal project: a live price dashboard for 80 instruments (IDX and US stocks, indices, crypto, gold including Antam, commodities, and currencies) built on free data sources with no API key. Crypto and spot gold update in real time over a Binance WebSocket straight from the browser, while Yahoo Finance data goes through Vercel Functions cached on the CDN. It has a trading plan with a breakout rule chosen through a 5-year backtest, a daily signal screener (Vercel Cron + Blob), price projections, a converter, and market news.',
    },
    tech: ['React', 'Vite', 'Vercel Functions', 'Vercel Cron & Blob', 'WebSocket', 'Lightweight Charts'],
    image: '/projects/market-live/cover.jpg',
    gallery: [
      ['overview', { id: 'Desktop dan ponsel', en: 'Desktop and mobile' }],
      ['web-crypto', { id: 'Kripto real-time lewat WebSocket Binance', en: 'Real-time crypto over the Binance WebSocket' }],
      ['web-chart-forecast', { id: 'Grafik dengan prakiraan dan kisaran 80%', en: 'Chart with a projection and an 80% range' }],
      ['web-trading-plan', { id: 'Rencana trading: entry, stop awal 3×ATR, trailing stop', en: 'Trading plan: entry, 3×ATR initial stop, trailing stop' }],
      ['web-backtest', { id: 'Backtest 5 tahun aturan yang sama di instrumen ini', en: '5-year backtest of the same rule on this instrument' }],
      ['web-screener', { id: 'Screener sinyal breakout harian', en: 'Daily breakout signal screener' }],
      ['web-movers', { id: 'Penggerak pasar dan perbandingan kinerja', en: 'Market movers and performance comparison' }],
      ['web-antam', { id: 'Harga emas Antam: jual, buyback, premi vs spot', en: 'Antam gold: sell, buyback, premium over spot' }],
      ['web-antam-table', { id: 'Tabel harga Antam 0,5–100 gram', en: 'Antam price table, 0.5–100 grams' }],
      ['web-converter-news', { id: 'Dividen, kalkulator konversi, dan berita pasar', en: 'Dividends, converter, and market news' }],
      ['web-light', { id: 'Mode terang', en: 'Light mode' }],
      ['mobile-crypto', { id: 'Ponsel: harga live', en: 'Mobile: live prices' }],
      ['mobile-plan', { id: 'Ponsel: rencana trading', en: 'Mobile: trading plan' }],
      ['mobile-antam', { id: 'Ponsel: emas Antam', en: 'Mobile: Antam gold' }],
    ].map(([name, caption]) => ({
      src: `/projects/market-live/${name}.jpg`,
      thumb: `/projects/market-live/thumbs/${name}.jpg`,
      caption,
    })),
    link: 'https://market-live-raihan-evanza.vercel.app',
    tutorial: '/projects/market-live/tutorial.mp4',
    doc: { id: '/projects/market-live/market-live-ID.pdf', en: '/projects/market-live/market-live-EN.pdf' },
    repo: '',
  },
  {
    title: 'Bola Live',
    category: 'personal',
    description: {
      id: 'Proyek pribadi: situs skor live, jadwal, dan klasemen sepak bola berbahasa Indonesia untuk 28 kompetisi Eropa, Asia, ASEAN, dan timnas, semua dalam WIB. Data ESPN di-cache di server lewat revalidate Next.js, sehingga berapa pun pengunjungnya, API hanya dipanggil sesekali. Ada detail pertandingan, profil tim, tebak skor, notifikasi gol, dan kartu skor untuk dibagikan, semuanya tanpa database dan tanpa akun.',
      en: 'Personal project: an Indonesian-language football site with live scores, fixtures, and standings for 28 European, Asian, Southeast Asian, and national-team competitions, all in Jakarta time. ESPN data is cached on the server with Next.js revalidation, so the API is only called occasionally no matter how many people visit. It has match details, team profiles, score predictions, goal alerts, and shareable score cards, all without a database or user accounts.',
    },
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'ESPN API'],
    image: '/projects/bola-live/cover.jpg',
    gallery: [
      ['overview', { id: 'Desktop dan ponsel', en: 'Desktop and mobile' }],
      ['web-home', { id: 'Beranda: semua laga hari ini dalam WIB, laga live di atas', en: "Home: today's matches in WIB, live matches on top" }],
      ['web-jadwal', { id: 'Jadwal per tanggal dan wilayah', en: 'Fixtures by date and region' }],
      ['web-klasemen', { id: 'Klasemen dengan zona Liga Champions dan degradasi', en: 'Standings with Champions League and relegation zones' }],
      ['web-match', { id: 'Detail laga: momen penting dan statistik', en: 'Match details: key moments and stats' }],
      ['web-team', { id: 'Profil tim, form, dan hitung mundur laga berikutnya', en: 'Team profile, form, and countdown to the next match' }],
      ['web-timnas', { id: 'Timnas Indonesia dan pencarian 193 negara', en: 'Indonesia national team and a search across 193 countries' }],
      ['web-wonderkid', { id: 'Daftar wonderkid Football Manager 26', en: 'Football Manager 26 wonderkids' }],
      ['web-home-dark', { id: 'Mode gelap', en: 'Dark mode' }],
      ['mobile-home', { id: 'Ponsel: beranda', en: 'Mobile: home' }],
      ['mobile-match', { id: 'Ponsel: detail laga dan tombol bagikan', en: 'Mobile: match details and share buttons' }],
      ['mobile-klasemen', { id: 'Ponsel: klasemen', en: 'Mobile: standings' }],
    ].map(([name, caption]) => ({
      src: `/projects/bola-live/${name}.jpg`,
      thumb: `/projects/bola-live/thumbs/${name}.jpg`,
      caption,
    })),
    link: 'https://bola-live-olive.vercel.app',
    tutorial: '/projects/bola-live/tutorial.mp4',
    doc: { id: '/projects/bola-live/bola-live-ID.pdf', en: '/projects/bola-live/bola-live-EN.pdf' },
    repo: '',
  },
  {
    title: { id: 'Asisten — Chatbot AI', en: 'Asisten — AI Chatbot' },
    category: 'personal',
    description: {
      id: 'Proyek pribadi: chatbot web dengan jawaban yang mengalir kata per kata lewat Server-Sent Events dan bisa dihentikan di tengah jalan. Backend Go tanpa dependency eksternal mendukung Gemini, OpenAI, dan Anthropic (dipilih otomatis sesuai API key), lengkap dengan mode demo tanpa API key.',
      en: 'Personal project: a web chatbot whose answers stream word by word over Server-Sent Events and can be stopped mid-response. A dependency-free Go backend supports Gemini, OpenAI, and Anthropic (picked automatically based on the API key), plus a demo mode that needs no API key.',
    },
    tech: ['Go', 'React', 'Vite', 'SSE', 'Gemini API'],
    image: '/projects/chat-bot-go.png',
    link: '',
    tutorial: '/projects/chatbot/tutorial.mp4',
    doc: { id: '/projects/chatbot/chatbot-ID.pdf', en: '/projects/chatbot/chatbot-EN.pdf' },
    repo: 'https://github.com/raihanevanza/chat-bot-go',
  },
  {
    title: 'Madani Tumbuh (MT)',
    category: 'professional',
    description: {
      id: 'Aplikasi mobile PNM untuk mendukung operasional pembiayaan melalui menu Pipeline, Community, Prospect, Survey, Top Up, 3R, DNPT, dan INI. Mencakup pengelolaan data nasabah, kelompok peminjam, prospek, survei kebutuhan pembiayaan, dan pengajuan tambahan pembiayaan, dengan dukungan data lokal menggunakan WatermelonDB.',
      en: "PNM's mobile app supporting financing operations through the Pipeline, Community, Prospect, Survey, Top Up, 3R, DNPT, and INI menus. Covers customer data, borrower groups, prospects, financing needs surveys, and requests for additional financing, with local data support using WatermelonDB.",
    },
    tech: ['React Native', 'TypeScript', 'Redux Saga', 'WatermelonDB'],
    link: '',
    repo: '',
  },
  {
    title: { id: 'NDS — Modul Loan BRI', en: 'NDS — BRI Loan Module' },
    category: 'professional',
    description: {
      id: 'Modul pinjaman untuk setoran, pelunasan, pencairan, split transaksi, pinjaman Brimitra, laporan pembayaran kolektif, dan transaksi massal.',
      en: 'Loan module for deposits, repayments, disbursements, transaction splitting, Brimitra loans, collective payment reports, and bulk transactions.',
    },
    tech: ['Vue.js', 'Vuex', 'gRPC'],
    link: '',
    repo: '',
  },
  {
    title: { id: 'Sistem Pelaporan Pengiriman', en: 'Shipment Reporting System' },
    category: 'professional',
    description: {
      id: 'Modul laporan pergerakan paket dari pabrik ke pelanggan, dengan antrean unduhan, ekspor Excel, grafik, dan scheduler Python.',
      en: 'Reporting module for package movements from factory to customer, with a download queue, Excel export, charts, and a Python scheduler.',
    },
    tech: ['CodeIgniter', 'React', 'PostgreSQL', 'MySQL'],
    link: '',
    repo: '',
  },
]

export const education = [
  {
    school: 'Universitas Esa Unggul',
    degree: { id: 'S2 Ilmu Komputer', en: "Master's in Computer Science" },
    period: { id: '2025 – Sekarang', en: '2025 – Present' },
    note: '',
  },
  {
    school: 'Politeknik Negeri Jakarta',
    degree: { id: 'D4 Teknik Informatika', en: "Applied Bachelor's in Informatics Engineering" },
    period: '2018 – 2022',
    note: {
      id: 'Juara 3 IT Business Competition KMIPN · Top 10 Finalis Codig 3.0',
      en: '3rd Place, KMIPN IT Business Competition · Top 10 Finalist, Codig 3.0',
    },
  },
  {
    school: 'CCIT – FTUI',
    degree: { id: 'Teknik Informatika', en: 'Informatics Engineering' },
    period: '2018 – 2020',
    note: '',
  },
]

export const certifications = []

// Data tambahan yang hanya muncul di CV PDF (tidak ditampilkan di web).
// Catatan: CV bisa diunduh publik dari web, jadi nomor HP ikut terlihat. Kosongkan ('') jika tidak mau.
export const cv = {
  website: 'https://portfolio-raihanevanza.vercel.app',
  phone: '0821-1182-8461',
  languages: [
    { id: 'Indonesia (Bahasa ibu)', en: 'Indonesian (Native)' },
    { id: 'Inggris (Menengah)', en: 'English (Intermediate)' },
  ],
}
