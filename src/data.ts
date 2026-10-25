// ============================================================
//  EDIT FILE INI SAJA untuk mengganti seluruh isi portofolio.
//  Semua teks, pengalaman, proyek, dan kontak diambil dari sini.
//
//  Teks yang berbeda per bahasa ditulis sebagai { id: '...', en: '...' }.
//  Teks yang sama di kedua bahasa (nama, teknologi, dll.) cukup ditulis biasa.
//  Bentuk tiap bagian ada di types.ts.
// ============================================================

import type {
  Certification,
  Contact,
  CvExtra,
  Education,
  Experience,
  GalleryImage,
  Localized,
  Profile,
  Project,
  SkillGroup,
  Stat,
} from './types.ts'

export const profile: Profile = {
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
      'Saya berpengalaman mengembangkan backend dengan Laravel dan CodeIgniter, serta terbiasa mengintegrasikan REST API dan gRPC. Saat ini saya juga mempelajari dan memperdalam Go, Java (Spring Boot), Kafka, dan Flutter melalui proyek pribadi seperti Main Yuk (party games), BukuBesar (core banking), AgentGate, Rupa (design system), Patungan, Mini ERP, Market Live, Bola Live, Jejak 42·50, Dompet Rumah, dan chatbot AI. Saya senang menerjemahkan kebutuhan bisnis menjadi aplikasi web dan mobile yang fungsional dan mudah dirawat.',
    ],
    en: [
      "I'm a fullstack and mobile developer with more than 6 years of experience in software engineering. My core strengths are ReactJS, VueJS, and React Native, and I'm currently the Lead Mobile Developer for the Madani Tumbuh app at PT Permodalan Nasional Madani.",
      "I'm experienced in backend development with Laravel and CodeIgniter, and comfortable integrating REST APIs and gRPC. I'm currently learning Go, Java (Spring Boot), Kafka, and Flutter and building my skills through personal projects such as Main Yuk (party games), BukuBesar (core banking), AgentGate, Rupa (a design system), Patungan, Mini ERP, Market Live, Bola Live, Jejak 42·50, Dompet Rumah, and an AI chatbot. I enjoy turning business requirements into functional, maintainable web and mobile apps.",
    ],
  },
  // File CV di folder /public, dibuat otomatis dengan `npm run cv`. Kosongkan ('') untuk menyembunyikan tombol.
  cvUrl: { id: '/Raihan-Evanza-CV-ID.pdf', en: '/Raihan-Evanza-CV-EN.pdf' },
  // Foto profil: taruh di /public lalu isi misal '/foto.jpg'. Kosongkan untuk memakai inisial.
  photo: '/foto.jpg',
  available: true, // tampilkan badge "Terbuka untuk peluang baru"
  // Kata yang bergantian di hero: "Saya membangun aplikasi dengan …"
  focus: ['React Native', 'React', 'Vue.js', 'TypeScript', 'Go', 'Flutter'],
  timeZone: 'Asia/Jakarta',
}

export const contacts: Contact[] = [
  { label: 'Email', value: 'raihan.evanza20@gmail.com', href: 'mailto:raihan.evanza20@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/raihan-evanza', href: 'https://www.linkedin.com/in/raihan-evanza' },
  { label: 'GitHub', value: 'github.com/raihanevanza', href: 'https://github.com/raihanevanza' },
]

export const stats: Stat[] = [
  { value: '6+', label: { id: 'Tahun pengalaman', en: 'Years of experience' } },
  { value: '5', label: { id: 'Perusahaan', en: 'Companies' } },
  { value: '2', label: { id: 'Aplikasi perbankan & pembiayaan', en: 'Banking & financing apps' } },
  { value: '11', label: { id: 'Proyek pribadi', en: 'Personal projects' } },
]

export const skills: SkillGroup[] = [
  {
    group: 'Frontend & Mobile',
    items: ['React', 'React Native', 'Flutter', 'Vue.js', 'Redux', 'Redux Saga', 'Vuex', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'Sass'],
  },
  {
    group: 'Backend & Database',
    items: ['Laravel', 'CodeIgniter', 'Java', 'Spring Boot', 'Kafka', 'REST API', 'gRPC', 'MySQL', 'PostgreSQL', 'WatermelonDB', 'Ruby on Rails', 'Redis', 'Node.js', 'Python', 'Go'],
  },
  {
    group: { id: 'Tools & Lainnya', en: 'Tools & Others' },
    items: ['Git', 'GitHub', 'Bitbucket', 'Figma', 'Vercel', 'PWA', 'Gemini API', 'Axios', 'jQuery / Ajax'],
  },
]

// Urutkan dari yang terbaru. `end: ''` berarti masih bekerja di sana (ditampilkan "Sekarang").
export const experiences: Experience[] = [
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
    tech: ['CodeIgniter', 'React', 'Redux', 'Python', 'PostgreSQL', 'MySQL', 'GitHub'],
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
    tech: ['CodeIgniter', 'HTML', 'CSS', 'SQL'],
  },
]

// `link`, `video`, `tutorial`, `doc`, `repo`, dan `image` opsional — kosongkan jika tidak ada.
// `video`: rekaman demo di /public/projects, misal '/projects/nama.mp4'.
// `tutorial`: video tutorial langkah demi langkah. `doc`: PDF penjelasan { id, en }, dibuat dengan `npm run docs`.
// `category`: gunakan 'personal' untuk proyek pribadi atau 'professional' untuk proyek pekerjaan.
// `image`: taruh gambar di /public/projects lalu isi path-nya, misal '/projects/nama.png'.
// `gallery`: opsional, daftar { src, thumb, caption } yang dibuka saat gambar diklik. Tanpa ini, yang dibuka `image`.
//   gallery('slug', [['nama-file', caption], ...]) memakai /projects/<slug>/<nama>.jpg dan thumbs/<nama>.jpg.
function gallery(slug: string, items: [string, Localized][]): GalleryImage[] {
  return items.map(([name, caption]) => ({
    src: `/projects/${slug}/${name}.jpg`,
    thumb: `/projects/${slug}/thumbs/${name}.jpg`,
    caption,
  }))
}

export const projects: Project[] = [
  {
    title: 'Main Yuk',
    category: 'personal',
    description: {
      id: 'Proyek pribadi: 12 party game untuk nongkrong dengan satu HP, dari Tebak Kata dan Impostor sampai Kuis Kilat, Ingat Urutan, dan Sambung Kata. Ada 245 kartu bawaan, paket buatan sendiri, favorit, timer, skor, dan riwayat sesi yang bisa dilanjutkan setelah reload. Semua layar web dan mobile berasal dari komponen Rupa; aplikasi hanya mengirim props dan callback dari mesin game TypeScript yang dipakai bersama. WatermelonDB menyimpan data lokal, sementara API Ruby on Rails dan PostgreSQL menyediakan sinkronisasi akun pada aplikasi lengkap. Demo portfolio berjalan di browser tanpa akun atau server API.',
      en: 'Personal project: 12 party games for sharing one phone, from word guessing and Impostor to quick quizzes, sequence memory, and word chains. Includes 245 built-in cards, custom packs, favorites, timers, scores, and sessions that resume after a reload. Every web and mobile screen comes from Rupa components; the app supplies props and callbacks from a shared TypeScript game engine. WatermelonDB stores data locally, while a Ruby on Rails API and PostgreSQL provide account synchronization in the full app. The portfolio demo runs in the browser without an account or API server.',
    },
    tech: ['React', 'React Native', 'TypeScript', 'Rupa Design System', 'WatermelonDB', 'Ruby on Rails', 'PostgreSQL', 'RxJS', 'Vite', 'Vitest', 'Playwright', 'Docker'],
    image: '/projects/main-yuk/cover.jpg',
    gallery: gallery('main-yuk', [
      ['catalog', { id: 'Katalog 12 game dengan tampilan Rupa', en: 'Twelve-game catalog built with Rupa' }],
      ['mobile', { id: 'Katalog responsif di layar ponsel', en: 'Responsive catalog on a phone' }],
      ['setup', { id: 'Pilih paket dan nama pemain sebelum mulai', en: 'Pick a pack and player names before starting' }],
      ['play', { id: 'Sambung Kata: masukkan jawaban langsung di papan permainan', en: 'Word Chain: enter an answer directly on the game board' }],
      ['packs', { id: 'Paket bawaan dan paket buatan sendiri untuk setiap game', en: 'Built-in and custom packs for each game' }],
    ]),
    link: 'https://raihan-evanza-main-yuk.vercel.app',
    video: '/projects/main-yuk/demo.webm',
    doc: { id: '/projects/main-yuk/main-yuk-ID.pdf', en: '/projects/main-yuk/main-yuk-EN.pdf' },
    repo: '',
  },
  {
    title: 'Dompet Rumah',
    category: 'personal',
    description: {
      id: 'Proyek pribadi: aplikasi keuangan rumah tangga untuk suami-istri yang dipakai bersama dari dua HP. Gaji per orang, THR sesuai Permenaker 6/2016 dan bonus tahunan dihitung prorata per bulan atau per hari, tagihan rutin dicentang saat dibayar dan otomatis jadi transaksi, rencana bulanan dibandingkan dengan realisasi, target tabungan dengan setoran yang dibutuhkan, serta proyeksi saldo 1–3 tahun. Resi PDF atau screenshot dibaca di browser (pdf.js dan Tesseract) tanpa diunggah, mutasi bank bisa di-import dari CSV/Excel, dan saldo rekening langsung terlihat di HP pasangan lewat Realtime. Frontend React langsung ke Supabase, dengan Row Level Security di setiap tabel yang diuji otomatis; demo publiknya build terpisah yang menjalankan seluruh data di browser dengan keluarga fiktif.',
      en: 'Personal project: a household finance app for couples, shared from two phones. Salaries per person, THR under Permenaker 6/2016 and annual bonuses prorated per month or per day, recurring bills ticked off when paid and turned into transactions, a monthly plan compared with actuals, savings goals with the deposit needed, and a 1–3 year balance projection. PDF or screenshot receipts are read in the browser (pdf.js and Tesseract) without being uploaded, bank statements import from CSV/Excel, and account balances show up on the partner’s phone through Realtime. A React frontend talks to Supabase directly, with Row Level Security on every table and tested automatically; the public demo is a separate build that keeps all data in the browser with a fictional family.',
    },
    tech: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Row Level Security', 'TanStack Query', 'Tailwind CSS', 'Rupa Design System', 'Recharts', 'Tesseract.js', 'PWA', 'Vercel'],
    image: '/projects/dompet-rumah/cover.jpg',
    gallery: gallery('dompet-rumah', [
      ['overview', { id: 'Desktop dan ponsel (data demo keluarga fiktif)', en: 'Desktop and mobile (fictional demo family)' }],
      ['web-dashboard', { id: 'Ringkasan: sisa saldo semua rekening, batas belanja bulan ini, dan rekening suami-istri', en: 'Overview: remaining balance across accounts, this month’s spending limit, and both partners’ accounts' }],
      ['web-cashflow', { id: 'Arus kas 6 bulan, transaksi terbaru, pengeluaran per kategori, dan tagihan belum dibayar', en: 'Six months of cash flow, recent transactions, spending by category, and unpaid bills' }],
      ['web-transactions', { id: 'Transaksi per bulan dengan filter kategori, orang, dan pencarian', en: 'Monthly transactions filtered by category, person, or search' }],
      ['web-receipt', { id: 'Catat dari resi: tanggal, nominal, penerima, dan rekening terbaca dari screenshot di browser', en: 'Record from a receipt: date, amount, recipient, and account read from a screenshot in the browser' }],
      ['web-bills', { id: 'Tagihan rutin: dicentang saat dibayar, otomatis jadi transaksi', en: 'Recurring bills: ticked off when paid and recorded as transactions' }],
      ['web-plan', { id: 'Rencana bulanan: anggaran per kategori dan alokasi tabungan dibanding realisasinya', en: 'Monthly plan: budget per category and savings allocation against actuals' }],
      ['web-income', { id: 'Gaji & Bonus: THR dan bonus per orang dengan jadwal pemasukan setahun', en: 'Salary & bonuses: THR and bonuses per person with a yearly income schedule' }],
      ['web-prorate', { id: 'Kalkulator prorata: bonus akhir tahun 334/365 hari untuk karyawan baru, langkah demi langkah', en: 'Proration calculator: a 334/365-day year-end bonus for a new hire, step by step' }],
      ['web-goals', { id: 'Target tabungan: progres, setoran per bulan yang dibutuhkan, dan perkiraan tercapai', en: 'Savings goals: progress, monthly deposit needed, and estimated completion' }],
      ['web-projection', { id: 'Proyeksi saldo tabungan 1–3 tahun dari gaji, THR/bonus, dan pengeluaran', en: '1–3 year savings projection from salaries, THR/bonuses, and spending' }],
      ['web-simulation', { id: 'Simulasi: coba skenario DP dan cicilan mobil tanpa mengubah data asli', en: 'Simulation: try a car down payment and instalments without changing real data' }],
      ['web-dashboard-dark', { id: 'Mode gelap', en: 'Dark mode' }],
      ['mobile-dashboard', { id: 'Ponsel: Ringkasan', en: 'Mobile: overview' }],
      ['mobile-add', { id: 'Ponsel: catat transaksi', en: 'Mobile: record a transaction' }],
      ['mobile-transactions', { id: 'Ponsel: daftar transaksi', en: 'Mobile: transactions' }],
      ['mobile-goals', { id: 'Ponsel: target tabungan', en: 'Mobile: savings goals' }],
      ['mobile-dashboard-dark', { id: 'Ponsel: mode gelap', en: 'Mobile: dark mode' }],
    ]),
    // Demo publik: build terpisah dari repo dompet-rumah (npm run build:demo → demo-dist/), data contoh di browser.
    link: 'https://raihan-evanza-dompet-rumah.vercel.app',
    tutorial: '/projects/dompet-rumah/tutorial.mp4',
    doc: { id: '/projects/dompet-rumah/dompet-rumah-ID.pdf', en: '/projects/dompet-rumah/dompet-rumah-EN.pdf' },
    repo: '',
  },
  {
    title: 'BukuBesar — Core Banking',
    category: 'personal',
    description: {
      id: 'Proyek pribadi: core banking mini berbasis event. Tiga service Spring Boot (rekening dan buku besar, transfer, notifikasi) dengan database masing-masing saling bicara lewat Kafka. Setiap transfer adalah saga: dana ditahan, transfer besar menunggu supervisor, lalu jurnal double-entry diposting; bila jaringan antarbank menolak atau rekening tujuan dibekukan, dana dikembalikan otomatis (kompensasi). Event dikirim lewat transactional outbox dan diproses consumer yang idempoten, pesan yang gagal masuk dead letter topic, dan buku besar tidak bisa diubah serta selalu seimbang (dijaga trigger database). Teruji: 50 transfer bersamaan tidak pernah membuat saldo negatif, service yang dimatikan di tengah saga melanjutkan tanpa kehilangan data, dan 1.700+ event yang diputar ulang tidak mengubah apa pun. Back office Vue 3 dengan Event Inspector live (SSE), aplikasi nasabah React Native, dan demo yang menjalankan seluruh backend di browser, semuanya memakai Rupa Design System (brand ledger) di web dan mobile.',
      en: 'Personal project: an event-driven mini core banking system. Three Spring Boot services (accounts and ledger, transfers, notifications), each with its own database, talk over Kafka. Every transfer is a saga: funds are held, large transfers wait for a supervisor, then a double-entry journal is posted; when the interbank network rejects it or the destination is frozen, the funds are returned automatically (compensation). Events go through a transactional outbox to idempotent consumers, failed messages land in dead letter topics, and the ledger cannot be edited and always balances (enforced by database triggers). Tested: 50 concurrent transfers never overdraw an account, a service killed mid-saga resumes without losing anything, and replaying 1,700+ events changes nothing. A Vue 3 back office with a live Event Inspector (SSE), a React Native customer app, and a demo that runs the whole backend in the browser, all built on the Rupa design system (ledger brand) across web and mobile.',
    },
    tech: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Flyway', 'Testcontainers', 'Vue 3', 'Pinia', 'TanStack Query', 'React Native', 'TypeScript', 'Tailwind CSS', 'Docker', 'Rupa Design System'],
    image: '/projects/bukubesar-web.png',
    gallery: gallery('bukubesar', [
      ['web-dashboard', { id: 'Dashboard: transfer per jam menurut hasil, persetujuan tertunda, dan status buku besar', en: 'Dashboard: hourly transfers by outcome, pending approvals, and the ledger check' }],
      ['web-simulator', { id: 'Simulator: mainkan peran nasabah dan jalankan delapan skenario saga dari browser', en: 'Simulator: play the customer and run eight saga scenarios from the browser' }],
      ['web-transfer-detail', { id: 'Timeline saga transfer antarbank: tahan dana, jaringan antarbank, posting ke buku besar', en: 'Saga timeline of an interbank transfer: hold, interbank network, ledger posting' }],
      ['web-compensation', { id: 'Kompensasi: ditolak bank tujuan, dana yang ditahan dikembalikan otomatis', en: 'Compensation: rejected by the destination bank, the held funds are returned automatically' }],
      ['web-approvals', { id: 'Maker-checker: supervisor tidak bisa menyetujui transfer yang ia buat sendiri', en: 'Maker-checker: a supervisor cannot approve a transfer they created' }],
      ['web-inspector', { id: 'Event Inspector: setiap pesan Kafka live dengan topik, partisi, offset, dan payload', en: 'Event Inspector: every Kafka message live with topic, partition, offset, and payload' }],
      ['web-ledger-entry', { id: 'Jurnal double-entry tiga baris: nasabah, settlement antarbank, dan pendapatan biaya', en: 'A three-line double-entry journal: customer, interbank settlement, and fee income' }],
      ['web-trial-balance', { id: 'Neraca saldo: debit sama dengan kredit dan setiap saldo sama dengan jumlah barisnya', en: 'Trial balance: debits equal credits and every balance equals the sum of its lines' }],
      ['web-account', { id: 'Rekening dengan saldo buku, dana ditahan, dan mutasi dengan saldo berjalan', en: 'An account with ledger balance, held funds, and a statement with running balance' }],
      ['web-audit', { id: 'Log audit dari ketiga service, dengan nilai sebelum dan sesudah', en: 'Audit log from all three services, with before and after values' }],
      ['mobile-home', { id: 'Aplikasi nasabah: saldo tersedia, dana ditahan, dan transfer terakhir', en: 'Customer app: available balance, held funds, and recent transfers' }],
      ['mobile-transfer', { id: 'Ponsel: kirim ke sesama BukuBesar atau bank lain', en: 'Mobile: send to another BukuBesar account or another bank' }],
      ['mobile-transfer-detail', { id: 'Ponsel: detail transfer berhasil dengan perjalanan saganya', en: 'Mobile: a completed transfer with its saga timeline' }],
      ['mobile-transfer-failed', { id: 'Ponsel: transfer ditolak bank tujuan, dana yang ditahan dikembalikan', en: 'Mobile: rejected by the destination bank, the held funds are returned' }],
      ['mobile-notifications', { id: 'Ponsel: notifikasi dari notification-service', en: 'Mobile: notifications from notification-service' }],
      ['mobile-home-dark', { id: 'Ponsel: mode gelap', en: 'Mobile: dark mode' }],
      ['web-dashboard-dark', { id: 'Mode gelap', en: 'Dark mode' }],
      ['web-dashboard-en', { id: 'Dua bahasa: Indonesia dan Inggris', en: 'Two languages: Indonesian and English' }],
      ['web-login', { id: 'Login dengan lima akun staf demo; nasabah memakai aplikasi mobile', en: 'Sign-in with five demo staff accounts; customers use the mobile app' }],
    ]),
    tutorial: '/projects/bukubesar/tutorial.mp4',
    doc: { id: '/projects/bukubesar/bukubesar-ID.pdf', en: '/projects/bukubesar/bukubesar-EN.pdf' },
    link: 'https://raihan-evanza-bukubesar.vercel.app/login?as=teller',
    repo: '',
  },
  {
    title: 'Rupa — Design System',
    category: 'personal',
    description: {
      id: 'Proyek pribadi: design system multi-brand yang dipakai ulang oleh proyek-proyek saya, dirilis sebagai paket npm @rupa-ui/tokens, @rupa-ui/react, dan @rupa-ui/react-native. Semua warna, tipografi, spasi, dan motion berasal dari satu sumber token (Style Dictionary) yang dibangun menjadi CSS variable, preset Tailwind v3/v4, TypeScript, dan palet React Native, dengan lima brand (violet, signal, latte, ledger, dan mono) dalam mode terang dan gelap yang bisa disarangkan. 29 komponen React yang aksesibel (WCAG 2.2 AA) dan 13 komponen React Native untuk Android dan iOS dengan props yang sama, semuanya didokumentasikan di Storybook. Setiap story diuji axe di sepuluh tema (1.850 pengujian), interaksi keyboard diuji otomatis, 470 pasangan kontras dan palet grafik (aman buta warna) dicek setiap build, dan 326 screenshot dibandingkan di setiap pull request. Rilis otomatis lewat Changesets dan GitHub Actions dengan npm trusted publishing dan provenance. Dipakai AgentGate, Dompet Rumah, BukuBesar (web dan mobile), Jejak 42·50, dan portofolio ini; migrasi AgentGate menemukan lima celah (dua fitur baru dan tiga bug, termasuk fokus yang hilang setelah dialog ditutup) yang diperbaiki di versi 0.3.',
      en: 'Personal project: a multi-brand design system reused across my projects and released on npm as @rupa-ui/tokens, @rupa-ui/react, and @rupa-ui/react-native. Every color, type size, spacing, and motion value comes from one token source (Style Dictionary) built into CSS variables, Tailwind v3/v4 presets, TypeScript, and a React Native palette, with five brands (violet, signal, latte, ledger, and mono) in light and dark modes that can be nested. 29 accessible React components (WCAG 2.2 AA) and 13 React Native components for Android and iOS with the same props, all documented in Storybook. Every story runs axe in ten themes (1,850 runs), keyboard interactions are tested automatically, 470 contrast pairs and a color-blind-safe chart palette are checked on every build, and 326 screenshots are compared on each pull request. Releases are automated with Changesets and GitHub Actions using npm trusted publishing with provenance. Used by AgentGate, Dompet Rumah, BukuBesar (web and mobile), Jejak 42·50, and this portfolio; the AgentGate migration surfaced five gaps (two new features and three bugs, including focus lost after closing a dialog), fixed in 0.3.',
    },
    tech: ['React', 'React Native', 'TypeScript', 'Storybook', 'Style Dictionary', 'Design Tokens', 'Vitest', 'Jest', 'Playwright', 'axe-core', 'Changesets', 'GitHub Actions', 'npm'],
    image: '/projects/rupa-storybook.png',
    gallery: gallery('rupa', [
      ['storybook-light', { id: 'Halaman approval yang seluruhnya dibangun dari komponen Rupa (brand violet)', en: 'An approval page built entirely from Rupa components (violet brand)' }],
      ['storybook-dark', { id: 'Halaman yang sama dengan brand signal (kuning, AgentGate) dalam mode gelap, cukup ganti dua atribut', en: 'The same page in the signal brand (yellow, AgentGate) and dark mode, by changing two attributes' }],
      ['storybook-mono', { id: 'Brand mono untuk portofolio ini: hitam-putih, tetap dengan warna status', en: 'The mono brand used by this portfolio: black and white, status colors kept' }],
      ['brands-and-modes', { id: 'Lima brand × dua mode dalam satu halaman: violet, signal, latte, ledger, dan mono', en: 'Five brands × two modes on one page: violet, signal, latte, ledger, and mono' }],
      ['react-native', { id: 'React Native: layar approver dari komponen @rupa-ui/react-native, dirender di Storybook lewat react-native-web', en: 'React Native: an approver screen from @rupa-ui/react-native components, rendered in Storybook via react-native-web' }],
      ['multiselect', { id: 'MultiSelect dengan pencarian, pilih semua, dan navigasi keyboard (brand ledger)', en: 'MultiSelect with search, select all, and keyboard navigation (ledger brand)' }],
      ['accessibility-panel', { id: 'Setiap story diuji axe di CI; 0 pelanggaran di semua tema', en: 'Every story is tested with axe in CI; zero violations in every theme' }],
      ['confirm-dialog', { id: 'ConfirmDialog: fokus awal di Batal untuk aksi berbahaya (brand ledger, mode gelap)', en: 'ConfirmDialog: focus starts on Cancel for destructive actions (ledger brand, dark mode)' }],
      ['component-docs', { id: 'Dokumentasi otomatis Meter: props, kontrol interaktif, dan contoh setiap varian (brand latte)', en: 'Generated docs for Meter: props, interactive controls, and every variant (latte brand)' }],
      ['tokens-colors', { id: 'Token warna semantik dengan nilai terang · gelap, dibaca langsung dari paket token (brand ledger)', en: 'Semantic color tokens with light · dark values, read straight from the token package (ledger brand)' }],
      ['chart-palette', { id: 'Palet seri grafik yang divalidasi aman buta warna di setiap brand dan mode (brand latte, mode gelap)', en: 'Chart series palette validated for color-vision deficiency in every brand and mode (latte brand, dark mode)' }],
    ]),
    link: 'https://raihan-evanza-rupa.vercel.app',
    repo: 'https://github.com/raihanevanza/rupa',
  },
  {
    title: 'AgentGate',
    category: 'personal',
    description: {
      id: 'Proyek pribadi: gateway persetujuan untuk tool call AI agent seperti refund, query atau ubah database, kirim email, dan deploy. Setiap panggilan melewati policy engine per tool: aksi aman langsung jalan, aksi berisiko menunggu persetujuan manusia, aksi terlarang ditolak, dan bila aturan gagal dievaluasi hasilnya dialihkan ke persetujuan (fail-closed). Pemilik agent tidak bisa menyetujui aksi agent-nya sendiri, status dijaga di database sehingga dari dua approver yang menekan bersamaan hanya satu yang berhasil, dan argumen yang disetujui dikunci dengan hash. Perubahan muncul realtime lewat Server-Sent Events, agent menunggu hasil lewat long-poll, dan semua jejak tercatat di audit log. Backend Go + PostgreSQL, console web React, dan aplikasi React Native (Android + iOS) untuk approver; demo berjalan penuh di browser dengan simulator agent.',
      en: 'Personal project: an approval gateway for AI agent tool calls such as refunds, database queries and writes, emails, and deployments. Every call goes through a per-tool policy engine: safe actions run immediately, risky ones wait for a human, forbidden ones are refused, and a rule that cannot be evaluated falls back to approval (fail-closed). An agent’s owner cannot approve that agent’s actions, status changes are guarded in the database so only one of two approvers clicking at once succeeds, and approved arguments are locked with a hash. Changes appear in real time over Server-Sent Events, agents wait for the outcome with long polling, and everything lands in an audit log. A Go + PostgreSQL backend, a React web console, and a React Native app (Android + iOS) for approvers; the demo runs entirely in the browser with an agent simulator.',
    },
    tech: ['Go', 'Gin', 'GORM', 'PostgreSQL', 'Server-Sent Events', 'React', 'React Native', 'TypeScript', 'RTK Query', 'Tailwind CSS', 'Rupa Design System'],
    image: '/projects/agentgate-web.png',
    gallery: gallery('agentgate', [
      ['web-dashboard', { id: 'Dashboard: tool call 24 jam per keputusan policy, status, dan waktu persetujuan', en: 'Dashboard: 24-hour tool calls by policy decision, status, and approval time' }],
      ['web-simulator', { id: 'Simulator agent: panggil gateway sebagai agent dan lihat respons 200 / 202 / 403 secara realtime', en: 'Agent simulator: call the gateway as an agent and watch 200 / 202 / 403 responses live' }],
      ['web-approvals', { id: 'Inbox persetujuan, yang paling dekat kedaluwarsa di atas', en: 'Approvals inbox, closest to expiry first' }],
      ['web-approval-detail', { id: 'Detail tool call: argumen (data sensitif dimasking), hash argumen, dan alasan keputusan policy', en: 'Tool call detail: arguments (sensitive data masked), argument hash, and why the policy decided' }],
      ['web-self-approval-dark', { id: 'Pemisahan tugas: pemilik agent tidak bisa menyetujui aksi agent-nya sendiri (mode gelap)', en: 'Separation of duties: an agent’s owner cannot approve its actions (dark mode)' }],
      ['web-policy', { id: 'Policy per tool dalam bahasa manusia, urut sesuai evaluasi', en: 'Per-tool policy in plain language, in evaluation order' }],
      ['web-playground', { id: 'Playground: form dari skema argumen tool', en: 'Playground: a form generated from the tool’s argument schema' }],
      ['web-audit', { id: 'Log audit untuk login, persetujuan, dan perubahan agent', en: 'Audit log of sign-ins, decisions, and agent changes' }],
      ['web-login', { id: 'Login dengan lima akun demo per role', en: 'Sign-in with five demo accounts, one per role' }],
      ['web-dashboard-id', { id: 'Dua bahasa: Indonesia dan Inggris', en: 'Two languages: Indonesian and English' }],
    ]),
    tutorial: '/projects/agentgate/tutorial.mp4',
    doc: { id: '/projects/agentgate/agentgate-ID.pdf', en: '/projects/agentgate/agentgate-EN.pdf' },
    link: 'https://raihan-evanza-agentgate.vercel.app/?as=approver',
    repo: '',
  },
  {
    title: 'Patungan — Split Bill',
    category: 'personal',
    description: {
      id: 'Proyek pribadi: aplikasi split bill untuk patungan bersama teman. Tagihan bisa dibagi rata, per item (lengkap dengan pajak, servis, dan diskon), atau manual, dan jumlah bagian selalu pas dengan total berkat metode largest remainder. Saldo grup disederhanakan menjadi beberapa transfer saja (paling banyak n−1), dengan konfirmasi pembayaran oleh penerima dan pengingat otomatis. Backend Go dengan API gRPC (Connect), web dashboard React, dan aplikasi Flutter (Android + iOS) yang bisa scan struk on-device.',
      en: 'Personal project: a split bill app for sharing costs with friends. Bills can be split equally, by item (with tax, service charge, and discounts), or manually, and the shares always add up exactly to the total thanks to the largest remainder method. Group balances are simplified into just a few transfers (at most n−1), with payment confirmation by the recipient and automatic reminders. A Go backend with a gRPC (Connect) API, a React web dashboard, and a Flutter app (Android + iOS) with on-device receipt scanning.',
    },
    tech: ['Go', 'gRPC', 'Protocol Buffers', 'PostgreSQL', 'React', 'TypeScript', 'RTK Query', 'Tailwind CSS', 'Flutter', 'Riverpod'],
    image: '/projects/patungan-web-mobile.png',
    gallery: gallery('patungan', [
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
    ]),
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
    gallery: gallery('mini-erp', [
      ['overview', { id: 'Web dan aplikasi mobile manager (Android + iOS)', en: 'Web and the manager mobile app (Android + iOS)' }],
      ['web-login', { id: 'Login dengan empat akun demo per role', en: 'Sign-in with four demo accounts, one per role' }],
      ['web-dashboard', { id: 'Dashboard KPI, arus barang 14 hari, dan nilai stok per kategori', en: 'KPI dashboard, 14-day goods flow, and stock value by category' }],
      ['web-purchase-orders', { id: 'Daftar purchase order dengan status', en: 'Purchase orders with their status' }],
      ['web-po-detail', { id: 'Detail PO menunggu approval: Approve atau Reject oleh manager', en: 'PO awaiting approval: approve or reject as a manager' }],
      ['web-sales-orders', { id: 'Daftar sales order', en: 'Sales orders' }],
      ['web-so-detail', { id: 'SO terkonfirmasi: stok sudah di-reserve', en: 'Confirmed SO: stock already reserved' }],
      ['web-stocks', { id: 'Stok per gudang: on hand, reserved, tersedia, dan stok menipis', en: 'Stock per warehouse: on hand, reserved, available, and low stock' }],
      ['web-movements', { id: 'Buku besar mutasi stok dengan referensi PO/SO/GR', en: 'Stock movement ledger with PO/SO/GR references' }],
      ['web-products', { id: 'Master data produk', en: 'Product master data' }],
      ['web-dark-en', { id: 'Mode gelap dan bahasa Inggris', en: 'Dark mode in English' }],
    ]),
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
    gallery: gallery('market-live', [
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
    ]),
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
    gallery: gallery('bola-live', [
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
    ]),
    link: 'https://bola-live-olive.vercel.app',
    tutorial: '/projects/bola-live/tutorial.mp4',
    doc: { id: '/projects/bola-live/bola-live-ID.pdf', en: '/projects/bola-live/bola-live-EN.pdf' },
    repo: '',
  },
  {
    title: 'Jejak 42·50',
    category: 'personal',
    description: {
      id: 'Proyek pribadi: PWA jadwal latihan dan jurnal lari yang saya pakai setiap hari menuju relay 14 km, full marathon, dan ultra 50 km. Jadwal disusun otomatis dari race utama (termasuk fase ultra sampai 180K), bisa diubah per hari atau sebulan sekaligus, lalu disesuaikan dengan check-in pagi, sesi tercatat, dan data jam Huawei lewat intervals.icu. Ada peringatan beban sebelum cedera, grafik VO2max dan Fitness · Fatigue · Form, rencana race day, AI coach Gemini, notifikasi push, dan mode offline. Frontend React dengan design system Rupa, 12 Vercel Functions, dan Supabase (Auth + Postgres dengan row-level security): setiap orang punya akun sendiri, dan superadmin mengurus akun tanpa bisa membuka data pribadi.',
      en: 'Personal project: a training-plan and running-journal PWA I use every day on the way to a 14 km relay leg, a full marathon, and a 50 km ultra. The plan is generated from the main races (including ultra phases up to 180K), can be changed one day or a whole month at a time, and adjusts to a morning check-in, logged sessions, and Huawei watch data via intervals.icu. It has load warnings before injuries, VO2max and Fitness · Fatigue · Form charts, a race-day plan, a Gemini AI coach, push notifications, and offline mode. A React frontend on the Rupa design system, 12 Vercel Functions, and Supabase (Auth + Postgres with row-level security): everyone has their own account, and a superadmin manages accounts without being able to open personal data.',
    },
    tech: ['React', 'Vite', 'Rupa Design System', 'PWA', 'Vercel Functions', 'Vercel Cron', 'Supabase', 'PostgreSQL', 'Gemini API', 'intervals.icu API', 'Web Push'],
    image: '/projects/logbook/cover.jpg',
    gallery: gallery('logbook', [
      ['overview', { id: 'Desktop dan ponsel (data demo)', en: 'Desktop and mobile (demo data)' }],
      ['web-landing', { id: 'Halaman masuk baru: akun per orang lewat Supabase Auth', en: 'New sign-in page: one account per person on Supabase Auth' }],
      ['web-today', { id: 'Hari ini: sesi sesuai fase, peringatan beban, cuaca, dan jadwal salat saat puasa', en: 'Today: the session for this phase, load warnings, weather, and prayer times on fasting days' }],
      ['web-week', { id: 'Jadwal mingguan: sesi kualitas, long run, dan strength', en: 'Weekly plan: quality sessions, long run, and strength' }],
      ['web-month', { id: 'Planner bulanan: pilih menu lalu ketuk tanggal yang mau diganti', en: 'Month planner: pick a menu, then tap the dates to change' }],
      ['web-season', { id: 'Peta musim, race dan event, serta checklist perlengkapan', en: 'Season map, races and events, and gear checklist' }],
      ['web-race-plan', { id: 'Rencana race day: pace per segmen dan jadwal makan-minum', en: 'Race-day plan: pace per segment and an eating and drinking schedule' }],
      ['web-progress', { id: 'Progres: volume mingguan, long run, dan HR easy', en: 'Progress: weekly volume, long runs, and easy-run HR' }],
      ['web-fitness', { id: 'VO2max dan Fitness · Fatigue · Form', en: 'VO2max and Fitness · Fatigue · Form' }],
      ['web-achievements', { id: 'Pencapaian, Road to race, rekap bulanan, dan beban sRPE', en: 'Achievements, Road to race, monthly recap, and sRPE load' }],
      ['web-log', { id: 'Riwayat sesi dengan pace, HR, RPE, dan nyeri', en: 'Session history with pace, HR, RPE, and pain' }],
      ['web-detail-map', { id: 'Detail sesi dari jam: statistik dan peta rute', en: 'Watch session detail: stats and route map' }],
      ['web-detail-charts', { id: 'Grafik pace, HR, cadence, dan elevasi sepanjang sesi', en: 'Pace, HR, cadence, and elevation across the run' }],
      ['web-profile', { id: 'Profil: data diri, VO2max, HR maks, dan zona', en: 'Profile: body data, VO2max, max HR, and zones' }],
      ['web-admin', { id: 'Superadmin: tambah, ubah, reset, dan hapus akun (data tiruan)', en: 'Superadmin: add, edit, reset, and delete accounts (mock data)' }],
      ['web-admin-history', { id: 'Riwayat lari tiap akun, baca saja; check-in dan profil tetap privat', en: 'Each account’s run history, read-only; check-ins and profile stay private' }],
      ['web-dark', { id: 'Mode gelap', en: 'Dark mode' }],
      ['mobile-landing', { id: 'Ponsel: halaman masuk', en: 'Mobile: sign-in page' }],
      ['mobile-today', { id: 'Ponsel: Hari ini', en: 'Mobile: Today' }],
      ['mobile-week', { id: 'Ponsel: jadwal mingguan', en: 'Mobile: weekly plan' }],
      ['mobile-log', { id: 'Ponsel: riwayat sesi', en: 'Mobile: session history' }],
      ['mobile-progress', { id: 'Ponsel: grafik progres', en: 'Mobile: progress charts' }],
    ]),
    // Demo publik: build terpisah dari repo logbook (npm run demo → demo-dist/, project Vercel raihan-evanza-jejak), data contoh tanpa kata sandi.
    link: 'https://raihan-evanza-jejak.vercel.app',
    tutorial: '/projects/logbook/tutorial.mp4',
    doc: { id: '/projects/logbook/logbook-ID.pdf', en: '/projects/logbook/logbook-EN.pdf' },
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
    gallery: gallery('chatbot', [
      ['overview', { id: 'Tersambung ke Gemini: badge "Gemini aktif"', en: 'Connected to Gemini: the "Gemini aktif" badge' }],
      ['web-welcome', { id: 'Tanpa API key: mode demo dengan contoh pertanyaan', en: 'No API key: demo mode with suggested prompts' }],
      ['web-streaming', { id: 'Jawaban mengalir kata per kata lewat SSE; tombol kirim jadi tombol stop', en: 'The answer streams word by word over SSE; send turns into stop' }],
      ['web-stopped', { id: 'Jawaban dihentikan di tengah jalan', en: 'An answer stopped midway' }],
      ['mobile-welcome', { id: 'Ponsel: halaman awal', en: 'Mobile: welcome screen' }],
      ['mobile-stopped', { id: 'Ponsel: percakapan', en: 'Mobile: conversation' }],
    ]),
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

export const education: Education[] = [
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

export const certifications: Certification[] = []

// Data tambahan yang hanya muncul di CV PDF (tidak ditampilkan di web).
// Catatan: CV bisa diunduh publik dari web, jadi nomor HP ikut terlihat. Kosongkan ('') jika tidak mau.
export const cv: CvExtra = {
  website: 'https://portfolio-raihan-evanza.vercel.app',
  phone: '0821-1182-8461',
  languages: [
    { id: 'Indonesia (Bahasa ibu)', en: 'Indonesian (Native)' },
    { id: 'Inggris (Menengah)', en: 'English (Intermediate)' },
  ],
}
