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
      id: 'Memimpin pengembangan dan pemeliharaan aplikasi mobile MT (Madani Tumbuh), aplikasi untuk proses pembiayaan nasabah.',
      en: 'Leading the development and maintenance of the MT (Madani Tumbuh) mobile app, used to process customer financing.',
    },
    // TODO: tambahkan 1–2 poin khas peran lead, misal ukuran tim, code review, keputusan arsitektur, atau mentoring.
    highlights: {
      id: [
        'Pipeline: pengelolaan data nasabah untuk pengajuan pinjaman.',
        'Community: penanganan kelompok nasabah yang mengajukan pinjaman.',
        'Prospect: penilaian peluang dan risiko sebagai panduan perencanaan jangka pendek dan panjang.',
        'Survey: survei permintaan dan penawaran pembiayaan untuk memetakan kebutuhan finansial pelaku usaha dan rumah tangga.',
      ],
      en: [
        'Pipeline: managing customer data for loan applications.',
        'Community: handling groups of customers applying for loans.',
        'Prospect: assessing opportunities and risks to guide short- and long-term planning.',
        'Survey: financing supply-and-demand surveys to map the financial needs of businesses and households.',
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
      id: 'Mengembangkan dan memelihara fitur Pipeline, Community, Prospect, dan Survey pada aplikasi mobile MT (Madani Tumbuh).',
      en: 'Developed and maintained the Pipeline, Community, Prospect, and Survey features of the MT (Madani Tumbuh) mobile app.',
    },
    highlights: [],
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
      id: 'Mengembangkan dan memelihara modul Loan pada proyek NDS.',
      en: 'Developed and maintained the Loan module of the NDS project.',
    },
    highlights: {
      id: [
        'Mengembangkan fitur setoran, pelunasan, dan pencairan dana tunai maupun non-tunai.',
        'Mendesain dan mengembangkan modul pinjaman Brimitra.',
        'Membangun fitur split manual transaksi tunai dan non-tunai untuk fleksibilitas operasional.',
        'Merilis fitur baru: laporan pembayaran kolektif dan transaksi massal untuk setoran skala besar.',
        'Membuat laporan inquiry rekening pinjaman.',
      ],
      en: [
        'Built cash and non-cash deposit, repayment, and disbursement features.',
        'Designed and developed the Brimitra loan module.',
        'Built manual splitting of cash and non-cash transactions for operational flexibility.',
        'Shipped new features: collective payment reports and bulk transactions for large-scale deposits.',
        'Created loan account inquiry reports.',
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
      id: 'Menangani sistem pelaporan permintaan iklan dari tim sales ke tim marketing.',
      en: 'Handled the reporting system for ad requests from the sales team to the marketing team.',
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
      id: 'Bertanggung jawab atas pelaporan pergerakan paket dari pabrik hingga ke pelanggan.',
      en: 'Responsible for reporting package movements from the factory to the customer.',
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
      id: 'Mengembangkan antarmuka aplikasi dan situs web untuk pemesanan (booking) pelanggan.',
      en: 'Developed application and website interfaces for customer bookings.',
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
      id: 'Aplikasi mobile PNM untuk pengelolaan pipeline nasabah, kelompok peminjam, prospek, dan survei kebutuhan pembiayaan — dengan dukungan data lokal menggunakan WatermelonDB.',
      en: "PNM's mobile app for managing the customer pipeline, borrower groups, prospects, and financing needs surveys — with local data support using WatermelonDB.",
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
