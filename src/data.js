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
      'Saya berpengalaman mengembangkan backend dengan Laravel dan CodeIgniter, serta terbiasa mengintegrasikan REST API dan gRPC. Saat ini saya juga mempelajari dan memperdalam Go melalui proyek pribadi Mini ERP dan chatbot AI. Saya senang menerjemahkan kebutuhan bisnis menjadi aplikasi web dan mobile yang fungsional dan mudah dirawat.',
    ],
    en: [
      "I'm a fullstack and mobile developer with more than 6 years of experience in software engineering. My core strengths are ReactJS, VueJS, and React Native, and I'm currently the Lead Mobile Developer for the Madani Tumbuh app at PT Permodalan Nasional Madani.",
      "I'm experienced in backend development with Laravel and CodeIgniter, and comfortable integrating REST APIs and gRPC. I'm currently learning Go and building my skills through personal projects: Mini ERP and an AI chatbot. I enjoy turning business requirements into functional, maintainable web and mobile apps.",
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
    items: ['React', 'React Native', 'Vue.js', 'Redux', 'Redux Saga', 'Vuex', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Sass'],
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

// `link`, `repo`, dan `image` opsional — kosongkan jika tidak ada.
// `image`: taruh gambar di /public/projects lalu isi path-nya, misal '/projects/nama.png'.
export const projects = [
  {
    title: 'Mini ERP',
    description: {
      id: 'Proyek pribadi: aplikasi inventori dan order dengan purchase order ber-approval, penerimaan barang parsial, sales order dengan reservasi stok otomatis, dan buku besar mutasi stok per gudang. Setiap perubahan stok berjalan dalam satu transaksi database agar stok tidak pernah minus. Dilengkapi hak akses per role, dashboard KPI, dua bahasa, dan dark mode.',
      en: 'Personal project: an inventory and order management app with approval-based purchase orders, partial goods receipts, sales orders with automatic stock reservation, and a per-warehouse stock ledger. Every stock change runs in a single database transaction so stock can never go negative. Includes role-based access, a KPI dashboard, two languages, and dark mode.',
    },
    tech: ['Go', 'Gin', 'GORM', 'React', 'TypeScript', 'RTK Query', 'Tailwind CSS', 'SQL Server'],
    image: '/projects/project-erp.png',
    link: '',
    repo: 'https://github.com/raihanevanza/project-erp',
  },
  {
    title: { id: 'Asisten — Chatbot AI', en: 'Asisten — AI Chatbot' },
    description: {
      id: 'Proyek pribadi: chatbot web dengan jawaban yang mengalir kata per kata lewat Server-Sent Events dan bisa dihentikan di tengah jalan. Backend Go tanpa dependency eksternal mendukung Gemini, OpenAI, dan Anthropic (dipilih otomatis sesuai API key), lengkap dengan mode demo tanpa API key.',
      en: 'Personal project: a web chatbot whose answers stream word by word over Server-Sent Events and can be stopped mid-response. A dependency-free Go backend supports Gemini, OpenAI, and Anthropic (picked automatically based on the API key), plus a demo mode that needs no API key.',
    },
    tech: ['Go', 'React', 'Vite', 'SSE', 'Gemini API'],
    image: '/projects/chat-bot-go.png',
    link: '',
    repo: 'https://github.com/raihanevanza/chat-bot-go',
  },
  {
    title: 'Madani Tumbuh (MT)',
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
