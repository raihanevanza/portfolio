// ============================================================
//  EDIT FILE INI SAJA untuk mengganti seluruh isi portofolio.
//  Semua teks, pengalaman, proyek, dan kontak diambil dari sini.
// ============================================================

export const profile = {
  name: 'Raihan Evanza',
  role: 'Frontend & Mobile Developer',
  location: 'Bogor, Indonesia',
  tagline:
    'Membangun aplikasi web dan mobile untuk sektor perbankan dan keuangan dengan React, React Native, dan Vue — dari kebutuhan bisnis menjadi kode yang rapi dan mudah dirawat.',
  about: [
    'Saya frontend developer dengan pengalaman lebih dari 6 tahun di bidang rekayasa perangkat lunak. Fokus utama saya adalah ReactJS, VueJS, dan React Native, dan saat ini saya menjadi Lead Mobile Developer untuk aplikasi Madani Tumbuh di PT Permodalan Nasional Madani.',
    'Saya juga menguasai pengembangan backend dengan Laravel dan CodeIgniter, serta terbiasa mengintegrasikan REST API dan gRPC. Saya senang menerjemahkan kebutuhan bisnis menjadi produk yang fungsional, dan terus mengeksplorasi teknologi baru untuk meningkatkan pengalaman pengguna — khususnya di aplikasi Android.',
  ],
  // Letakkan file CV di folder /public, lalu isi path-nya, misal '/cv.pdf'. Kosongkan ('') untuk menyembunyikan tombol.
  cvUrl: '',
  // Foto profil: taruh di /public lalu isi misal '/foto.jpg'. Kosongkan untuk memakai inisial.
  photo: '',
  available: true, // tampilkan badge "Terbuka untuk peluang baru"
}

export const contacts = [
  { label: 'Email', value: 'raihan.evanza20@gmail.com', href: 'mailto:raihan.evanza20@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/raihan-evanza', href: 'https://www.linkedin.com/in/raihan-evanza' },
  { label: 'GitHub', value: 'github.com/raihanevanza', href: 'https://github.com/raihanevanza' },
]

export const stats = [
  { value: '6+', label: 'Tahun pengalaman' },
  { value: '5', label: 'Perusahaan' },
  { value: '2', label: 'Aplikasi perbankan & pembiayaan' },
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
  { group: 'Tools & Lainnya', items: ['Git', 'GitHub', 'Bitbucket', 'Figma', 'Axios', 'jQuery / Ajax'] },
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
    summary:
      'Memimpin pengembangan dan pemeliharaan aplikasi mobile MT (Madani Tumbuh), aplikasi untuk proses pembiayaan nasabah.',
    highlights: [
      // TODO: tambahkan 1–2 poin khas peran lead, misal ukuran tim, code review, keputusan arsitektur, atau mentoring.
      'Pipeline: pengelolaan data nasabah untuk pengajuan pinjaman.',
      'Community: penanganan kelompok nasabah yang mengajukan pinjaman.',
      'Prospect: penilaian peluang dan risiko sebagai panduan perencanaan jangka pendek dan panjang.',
      'Survey: survei permintaan dan penawaran pembiayaan untuk memetakan kebutuhan finansial pelaku usaha dan rumah tangga.',
    ],
    tech: ['React Native', 'TypeScript', 'Redux', 'Redux Saga', 'WatermelonDB', 'Axios'],
  },
  {
    company: 'PT Permodalan Nasional Madani',
    role: 'Staff Frontend Developer – Mobile',
    type: '',
    location: '',
    start: 'Apr 2024',
    end: 'Jun 2026',
    summary:
      'Mengembangkan dan memelihara fitur Pipeline, Community, Prospect, dan Survey pada aplikasi mobile MT (Madani Tumbuh).',
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
    summary: 'Mengembangkan dan memelihara modul Loan pada proyek NDS.',
    highlights: [
      'Mengembangkan fitur setoran, pelunasan, dan pencairan dana tunai maupun non-tunai.',
      'Mendesain dan mengembangkan modul pinjaman Brimitra.',
      'Membangun fitur split manual transaksi tunai dan non-tunai untuk fleksibilitas operasional.',
      'Merilis fitur baru: laporan pembayaran kolektif dan transaksi massal untuk setoran skala besar.',
      'Membuat laporan inquiry rekening pinjaman.',
    ],
    tech: ['Vue 2 & 3', 'Vuex', 'Options & Composition API', 'gRPC'],
  },
  {
    company: 'MNC Media',
    role: 'Fullstack Developer',
    type: '',
    location: '',
    start: 'Sep 2022',
    end: 'Feb 2023',
    summary: 'Menangani sistem pelaporan permintaan iklan dari tim sales ke tim marketing.',
    highlights: [
      'Mengoptimalkan query dan menambahkan indeks tabel untuk meningkatkan performa aplikasi.',
      'Membangun alur pengajuan iklan dari tim sales hingga ditindaklanjuti tim marketing.',
      'Memelihara aplikasi agar sesuai dengan alur kerja iklan dan promosi yang terus berkembang.',
      'Merancang mockup antarmuka di Figma.',
    ],
    tech: ['Laravel', 'React', 'Redux', 'Figma', 'Bitbucket'],
  },
  {
    company: 'PT Haistar Bintang Dagang International',
    role: 'Fullstack Developer',
    type: '',
    location: '',
    start: 'Agu 2021',
    end: 'Jul 2022',
    summary: 'Bertanggung jawab atas pelaporan pergerakan paket dari pabrik hingga ke pelanggan.',
    highlights: [
      'Membangun sistem antrean untuk unduhan laporan agar proses unduh tetap lancar.',
      'Mengembangkan modul pelaporan (Excel dan grafik) untuk data pengiriman, barang keluar, dan barang masuk.',
      'Mengoptimalkan query dan indeks database untuk mempercepat pengambilan data.',
      'Membuat scheduler dengan Python dan mengelola dua database (PostgreSQL dan MySQL) untuk pelaporan.',
    ],
    tech: ['CodeIgniter', 'React', 'Redux', 'Python', 'PostgreSQL', 'MySQL'],
  },
  {
    company: 'Dbisnis Network Indonesia',
    role: 'Frontend Developer',
    type: '',
    location: '',
    start: 'Jun 2020',
    end: 'Jun 2021',
    summary: 'Mengembangkan antarmuka aplikasi dan situs web untuk pemesanan (booking) pelanggan.',
    highlights: [],
    tech: ['CodeIgniter', 'CSS', 'SQL'],
  },
]

// `link`, `repo`, dan `image` opsional — kosongkan jika tidak ada.
// `image`: taruh gambar di /public/projects lalu isi path-nya, misal '/projects/nama.png'.
export const projects = [
  {
    title: 'Asisten — Chatbot AI',
    description:
      'Proyek pribadi: chatbot web dengan jawaban yang mengalir kata per kata lewat Server-Sent Events dan bisa dihentikan di tengah jalan. Backend Go tanpa dependency eksternal mendukung Gemini, OpenAI, dan Anthropic (dipilih otomatis sesuai API key), lengkap dengan mode demo tanpa API key.',
    tech: ['Go', 'React', 'Vite', 'SSE', 'Gemini API'],
    image: '/projects/chat-bot-go.png',
    link: '',
    repo: 'https://github.com/raihanevanza/chat-bot-go',
  },
  {
    title: 'Madani Tumbuh (MT)',
    description:
      'Aplikasi mobile PNM untuk pengelolaan pipeline nasabah, kelompok peminjam, prospek, dan survei kebutuhan pembiayaan — dengan dukungan data lokal menggunakan WatermelonDB.',
    tech: ['React Native', 'TypeScript', 'Redux Saga', 'WatermelonDB'],
    link: '',
    repo: '',
  },
  {
    title: 'NDS — Modul Loan BRI',
    description:
      'Modul pinjaman untuk setoran, pelunasan, pencairan, split transaksi, pinjaman Brimitra, laporan pembayaran kolektif, dan transaksi massal.',
    tech: ['Vue.js', 'Vuex', 'gRPC'],
    link: '',
    repo: '',
  },
  {
    title: 'Sistem Pelaporan Pengiriman',
    description:
      'Modul laporan pergerakan paket dari pabrik ke pelanggan, dengan antrean unduhan, ekspor Excel, grafik, dan scheduler Python.',
    tech: ['CodeIgniter', 'React', 'PostgreSQL', 'MySQL'],
    link: '',
    repo: '',
  },
]

export const education = [
  {
    school: 'Universitas Esa Unggul',
    degree: 'S2 Ilmu Komputer',
    period: '2025 – Sekarang',
    note: '',
  },
  {
    school: 'Politeknik Negeri Jakarta',
    degree: 'D4 Teknik Informatika',
    period: '2018 – 2022',
    note: 'Juara 3 IT Business Competition KMIPN · Top 10 Finalis Codig 3.0',
  },
  {
    school: 'CCIT – FTUI',
    degree: 'Teknik Informatika',
    period: '2018 – 2020',
    note: '',
  },
]

export const certifications = []
