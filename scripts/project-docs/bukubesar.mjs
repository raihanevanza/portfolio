// Isi PDF penjelasan proyek BukuBesar (lihat README.md di folder ini untuk skema).
export default {
  slug: 'bukubesar',
  title: 'BukuBesar — Core Banking',
  hero: '/projects/bukubesar/overview.jpg',
  tagline: {
    id: 'Core banking mini berbasis event: setiap transfer adalah saga lewat Kafka, setiap rupiah masuk buku besar double-entry yang selalu seimbang, dan transfer besar menunggu supervisor.',
    en: 'An event-driven mini core banking system: every transfer is a saga over Kafka, every rupiah lands in a double-entry ledger that always balances, and large transfers wait for a supervisor.',
  },
  role: {
    id: 'Proyek pribadi · desain sistem, backend, web, mobile, pengujian, deploy demo',
    en: 'Personal project · system design, backend, web, mobile, testing, demo deployment',
  },
  platforms: {
    id: 'Web (back office staf) · Android & iOS (aplikasi nasabah) · tiga service Spring Boot',
    en: 'Web (staff back office) · Android & iOS (customer app) · three Spring Boot services',
  },
  links: [{ label: { id: 'Demo live', en: 'Live demo' }, url: 'https://raihan-evanza-bukubesar.vercel.app/login?as=teller' }],
  tech: [
    'Java 21',
    'Spring Boot 4.1',
    'Spring Kafka',
    'PostgreSQL 16',
    'Flyway',
    'Testcontainers',
    'Vue 3.5',
    'Pinia',
    'TanStack Query',
    'React Native 0.87',
    'TypeScript',
    'Tailwind CSS 4',
    'Rupa Design System',
    'Docker',
  ],

  overview: {
    id: [
      'Satu transfer di bank menyentuh banyak sistem: cek limit, menahan dana, mendebit, mengkredit, jaringan antarbank, notifikasi, dan audit. Bila satu langkah gagal di tengah jalan, uang tidak boleh hilang dan tidak boleh terhitung dua kali.',
      'BukuBesar menunjukkan cara membangunnya dengan benar. Tiga service Spring Boot (rekening dan buku besar, transfer, notifikasi), masing-masing dengan database sendiri, saling bicara lewat Kafka. Setiap transfer adalah saga: dana ditahan, transfer besar menunggu supervisor, lalu jurnal double-entry diposting; bila jaringan antarbank menolak atau rekening tujuan dibekukan, dana dikembalikan otomatis (kompensasi).',
      'Klaim pentingnya diuji, bukan hanya diklaim: 50 transfer bersamaan dari satu rekening tidak pernah membuat saldo negatif, service yang dimatikan di tengah saga melanjutkan tanpa kehilangan data, dan 1.700+ event yang diputar ulang tidak mengubah apa pun. Back office Vue 3, aplikasi nasabah React Native, dan demo yang menjalankan seluruh backend di browser, semuanya memakai Rupa Design System (brand ledger).',
    ],
    en: [
      'A single bank transfer touches many systems: limit checks, holding funds, debiting, crediting, the interbank network, notifications, and audit. If any step fails halfway, money must never disappear or be counted twice.',
      'BukuBesar shows how to build that properly. Three Spring Boot services (accounts and ledger, transfers, notifications), each with its own database, talk over Kafka. Every transfer is a saga: funds are held, large transfers wait for a supervisor, then a double-entry journal is posted; when the interbank network rejects it or the destination is frozen, the funds are returned automatically (compensation).',
      'The important claims are tested, not just stated: 50 concurrent transfers from one account never overdraw it, a service killed mid-saga resumes without losing anything, and replaying 1,700+ events changes nothing. A Vue 3 back office, a React Native customer app, and a demo that runs the whole backend in the browser, all built on the Rupa design system (ledger brand).',
    ],
  },

  features: [
    {
      title: { id: 'Saga transfer lewat Kafka', en: 'Transfer saga over Kafka' },
      text: {
        id: 'transfer-service mengorkestrasi setiap transfer: HoldFunds → FundsHeld → (jaringan antarbank) → PostTransfer → TransferPosted → selesai. Setiap kegagalan setelah dana ditahan melepas hold-nya (kompensasi), termasuk penolakan, pembatalan, dan persetujuan yang kedaluwarsa.',
        en: 'transfer-service orchestrates every transfer: HoldFunds → FundsHeld → (interbank network) → PostTransfer → TransferPosted → completed. Every failure after the hold releases it (compensation), including rejection, cancellation, and expired approvals.',
      },
    },
    {
      title: { id: 'Buku besar double-entry', en: 'Double-entry ledger' },
      text: {
        id: 'Setiap transfer menjadi satu jurnal: transfer antarbank tiga baris (rekening nasabah, kewajiban settlement antarbank, pendapatan biaya). Buku besar append-only, jurnal yang tidak seimbang ditolak trigger database, dan neraca saldo selalu membuktikan debit = kredit.',
        en: 'Every transfer becomes one journal: an interbank transfer has three lines (customer account, interbank settlement liability, fee income). The ledger is append-only, unbalanced journals are rejected by database triggers, and the trial balance always shows debits = credits.',
      },
    },
    {
      title: { id: 'Maker-checker', en: 'Maker-checker' },
      text: {
        id: 'Transfer mulai Rp10.000.000 dan pembukaan rekening menunggu supervisor. Pembuat pengajuan tidak bisa menyetujuinya sendiri (err_self_approval), dan dua persetujuan bersamaan menghasilkan satu 200 dan satu 409.',
        en: 'Transfers from Rp10,000,000 and account openings wait for a supervisor. The maker cannot approve their own request (err_self_approval), and two approvals at once give one 200 and one 409.',
      },
    },
    {
      title: { id: 'Event Inspector', en: 'Event Inspector' },
      text: {
        id: 'Setiap pesan Kafka, termasuk dead letter topic, dialirkan ke web lewat Server-Sent Events dengan topik, partisi, offset, key, dan payload JSON-nya, sehingga perjalanan saga bisa dilihat langsung.',
        en: 'Every Kafka message, dead letter topics included, is streamed to the web over Server-Sent Events with its topic, partition, offset, key, and JSON payload, so the saga can be watched as it runs.',
      },
    },
    {
      title: { id: 'Back office untuk staf', en: 'Staff back office' },
      text: {
        id: 'Dasbor dengan KPI, grafik per jam, dan cek buku besar live; inbox persetujuan dengan hitung mundur; transfer dengan timeline saga; nasabah dan pembukaan rekening; rekening dengan dana ditahan, mutasi bersaldo berjalan, bekukan, dan setor tunai; buku besar, neraca saldo, log audit, dan pengaturan limit.',
        en: 'A dashboard with KPIs, an hourly chart, and a live ledger check; an approvals inbox with countdowns; transfers with the saga timeline; customers and account opening; accounts with held funds, a running-balance statement, freeze, and cash deposits; the general ledger, trial balance, audit log, and limit settings.',
      },
    },
    {
      title: { id: 'Aplikasi nasabah', en: 'Customer app' },
      text: {
        id: 'Aplikasi React Native (Android + iOS): rekening di beranda, mutasi dengan filter, transfer internal dan antarbank dengan cek penerima dan konfirmasi, status live dengan timeline saga, batalkan selama menunggu, dan notifikasi.',
        en: 'A React Native app (Android + iOS): accounts on the home screen, a filterable statement, internal and interbank transfers with a recipient check and confirmation, live status with the saga timeline, cancel while pending, and notifications.',
      },
    },
    {
      title: { id: 'Lima role, satu peta izin', en: 'Five roles, one permission map' },
      text: {
        id: 'Teller, Supervisor, Admin, Auditor, dan Nasabah dipetakan ke izin di satu file (Role.java). account-service menandatangani JWT RS256 dan dua service lain memverifikasinya lewat JWKS; kedua aplikasi membaca daftar izin dari /api/auth/me untuk menentukan apa yang ditampilkan.',
        en: 'Teller, Supervisor, Admin, Auditor, and Customer map to permissions in one file (Role.java). account-service signs RS256 JWTs and the other two services verify them through JWKS; both apps read the permission list from /api/auth/me to decide what to show.',
      },
    },
    {
      title: { id: 'Simulator, dua bahasa, mode gelap', en: 'Simulator, two languages, dark mode' },
      text: {
        id: 'Di demo, panel Simulator memainkan aplikasi nasabah dengan delapan skenario (internal, antarbank, ditolak jaringan, rekening dibekukan, perlu persetujuan, saldo kurang, kirim dua kali, 20 transfer bersamaan), mengganti persona staf, dan mereset data. Antarmuka tersedia dalam Bahasa Indonesia dan Inggris, terang dan gelap, dan nyaman di ponsel.',
        en: 'In the demo, the Simulator panel plays the customer app with eight scenarios (internal, interbank, network rejection, frozen account, needs approval, insufficient funds, sent twice, 20 at once), switches staff persona, and resets the data. The interface is in Indonesian and English, light and dark, and works on a phone.',
      },
    },
  ],

  architecture: {
    flow: [
      {
        name: 'Web / app mobile',
        detail: {
          id: 'Back office Vue 3 dan aplikasi nasabah React Native memanggil satu pintu /api.',
          en: 'The Vue 3 back office and the React Native customer app call a single /api.',
        },
      },
      {
        name: 'Edge (Caddy)',
        detail: {
          id: 'Meneruskan setiap path ke service pemiliknya.',
          en: 'Routes each path to the service that owns it.',
        },
      },
      {
        name: 'Tiga service Spring Boot',
        detail: {
          id: 'account (auth, rekening, buku besar), transfer (saga, limit, persetujuan), notification (notifikasi, audit, inspector).',
          en: 'account (auth, accounts, ledger), transfer (saga, limits, approvals), notification (notifications, audit, inspector).',
        },
      },
      {
        name: 'Kafka (Redpanda)',
        detail: {
          id: 'Command dan event saga lewat outbox; gagal 3× masuk <topic>.DLT.',
          en: 'Saga commands and events via the outbox; three failures go to <topic>.DLT.',
        },
      },
      {
        name: 'PostgreSQL 16',
        detail: {
          id: 'Satu database per service; tidak ada service yang membaca tabel service lain.',
          en: 'One database per service; no service reads another’s tables.',
        },
      },
    ],
    notes: {
      id: [
        'Event tidak dikirim langsung ke Kafka: service menulis ke tabel outbox dalam transaksi yang sama dengan perubahan datanya, lalu relay mengirimkannya. Data dan event tidak pernah berbeda.',
        'Setiap consumer mencatat event yang sudah diproses (processed_events), jadi pesan yang terkirim ulang diabaikan. Pesan yang gagal 3 kali (jeda 500 ms) atau tidak bisa dibaca masuk dead letter topic dan terlihat di Event Inspector.',
        'Status saga ada di database dan Kafka, tidak di memori, sehingga service yang mati di tengah saga melanjutkan dari posisi terakhir setelah hidup lagi.',
        'Di demo Vercel, ketiga service, Kafka, dan database digantikan backend di browser dengan kontrak API dan aturan yang sama (bus mirip Kafka dengan partisi dan offset, SSE), yang menyimpan data di localStorage.',
      ],
      en: [
        'Events are not sent to Kafka directly: a service writes them to an outbox table in the same transaction as its data change, and a relay publishes them. Data and events never disagree.',
        'Every consumer records the events it has processed (processed_events), so redelivered messages are ignored. A message that fails three times (500 ms apart) or cannot be parsed goes to a dead letter topic and shows up in the Event Inspector.',
        'Saga state lives in the database and in Kafka, never in memory, so a service that dies mid-saga continues from where it stopped once it is back.',
        'In the Vercel demo, the three services, Kafka, and the databases are replaced by an in-browser backend with the same API contract and rules (a Kafka-like bus with partitions and offsets, SSE), keeping its data in localStorage.',
      ],
    },
  },

  stack: [
    {
      layer: { id: 'Backend', en: 'Backend' },
      items: ['Java 21 (virtual threads)', 'Spring Boot 4.1', 'Spring Security (OAuth2 resource server, RS256 + JWKS)', 'Spring Data JPA', 'Flyway', 'springdoc-openapi', 'Maven multi-module'],
    },
    {
      layer: { id: 'Messaging & data', en: 'Messaging & data' },
      items: ['Spring Kafka', 'Redpanda / Apache Kafka (Testcontainers)', 'PostgreSQL 16 (database per service)', 'Caddy 2 (edge)'],
    },
    {
      layer: { id: 'Web', en: 'Web' },
      items: ['Vue 3.5', 'TypeScript', 'Vite', 'Pinia', 'TanStack Query', 'VeeValidate + yup', 'vue-i18n', 'Tailwind CSS 4', 'Rupa tokens (brand ledger)', 'Vercel'],
    },
    {
      layer: { id: 'Mobile', en: 'Mobile' },
      items: ['React Native 0.87 (New Architecture, Hermes)', 'React Navigation 7', 'Redux Toolkit + RTK Query', 'Keychain / Keystore', '@rupa-ui/react-native'],
    },
    {
      layer: { id: 'Pengujian', en: 'Testing' },
      items: ['JUnit 5 + Mockito + AssertJ', 'Testcontainers (PostgreSQL, Kafka)', 'Vitest', 'Jest', 'e2e + chaos scripts (Node)', 'GitHub Actions'],
    },
  ],

  decisions: [
    {
      title: { id: 'Buku besar yang tidak bisa diubah', en: 'A ledger that cannot be edited' },
      text: {
        id: 'Baris jurnal hanya bisa ditambah: trigger database menolak UPDATE/DELETE dan jurnal yang debit-kreditnya tidak sama. Koreksi dilakukan dengan jurnal baru, persis seperti akuntansi sungguhan, dan saldo rekening selalu sama dengan jumlah barisnya.',
        en: 'Journal lines can only be added: database triggers reject UPDATE/DELETE and journals whose debits and credits differ. Corrections are new journals, as in real accounting, and every account balance equals the sum of its lines.',
      },
    },
    {
      title: { id: 'Saldo tidak pernah negatif, bahkan saat balapan', en: 'Balances never go negative, even under races' },
      text: {
        id: 'Setiap hold adalah UPDATE … WHERE available >= amount, ditambah check constraint saldo ≥ 0 dan unique constraint satu hold dan satu jurnal per transfer. Diuji dengan 50 transfer bersamaan dari satu rekening: tepat 33 berhasil, 17 gagal karena saldo kurang, dan saldo akhirnya tepat.',
        en: 'Every hold is an UPDATE … WHERE available >= amount, backed by a balance ≥ 0 check constraint and unique constraints for one hold and one journal per transfer. Tested with 50 concurrent transfers from one account: exactly 33 succeed, 17 fail for insufficient funds, and the final balance is exact.',
      },
    },
    {
      title: { id: 'Outbox + consumer idempoten', en: 'Outbox + idempotent consumers' },
      text: {
        id: 'Kafka menjamin pengiriman at-least-once, jadi pesan ganda pasti terjadi. Dengan outbox tidak ada event yang hilang, dan dengan processed_events tidak ada yang diproses dua kali. Semua consumer group diputar ulang dari awal (1.700+ pesan) dan tidak ada data yang berubah.',
        en: 'Kafka delivers at least once, so duplicates will happen. The outbox means no event is lost, and processed_events means none is applied twice. Rewinding every consumer group to the start (1,700+ messages) changes no data.',
      },
    },
    {
      title: { id: 'Retry yang aman lewat Idempotency-Key', en: 'Safe retries with an Idempotency-Key' },
      text: {
        id: 'Transfer dan setor tunai wajib membawa Idempotency-Key yang disimpan bersama hash request. Key dan body yang sama mengembalikan transfer yang sama; key sama dengan body berbeda ditolak 422. Aplikasi mobile bisa mengulang request saat sinyal putus tanpa risiko transfer ganda.',
        en: 'Transfers and cash deposits require an Idempotency-Key stored with a request hash. The same key and body return the same transfer; the same key with a different body is refused with 422. The mobile app can retry on a flaky connection without risking a double transfer.',
      },
    },
    {
      title: { id: 'Database per service dan Kafka sungguhan di test', en: 'Database per service and real Kafka in tests' },
      text: {
        id: 'Tidak ada service yang membaca tabel service lain; data lintas service hanya lewat event atau API. Lokal memakai Redpanda supaya ringan di laptop 8 GB, tetapi test integrasi menjalankan alur buku besar di Apache Kafka lewat Testcontainers untuk membuktikan kodenya tidak bergantung pada Redpanda.',
        en: 'No service reads another’s tables; data crosses services only through events or APIs. Local development uses Redpanda to stay light on an 8 GB laptop, but an integration test runs the ledger flow on Apache Kafka through Testcontainers to prove the code is not Redpanda-specific.',
      },
    },
  ],

  guide: [
    {
      image: 'step-1.jpg',
      title: { id: 'Masuk ke back office', en: 'Sign in to the back office' },
      text: {
        id: 'Buka demo, klik kartu Teller · Dimas untuk mengisi email dan password otomatis, lalu klik Masuk. Ada lima akun staf (Teller, Supervisor, Supervisor 2, Admin, Auditor) dengan password Password123!; nasabah memakai aplikasi mobile. Tautan /login?as=teller langsung masuk sebagai Dimas.',
        en: 'Open the demo, click the Teller · Dimas card to fill in the email and password, then click Sign in. There are five staff accounts (Teller, Supervisor, Supervisor 2, Admin, Auditor), all with the password Password123!; customers use the mobile app. The /login?as=teller link signs you in as Dimas directly.',
      },
    },
    {
      image: 'step-2.jpg',
      title: { id: 'Lihat dasbor', en: 'Read the dashboard' },
      text: {
        id: 'Kartu di atas menunjukkan transfer hari ini, yang menunggu persetujuan, tingkat keberhasilan, total dana nasabah, dan status buku besar (Seimbang). Di bawahnya ada grafik transfer per jam menurut hasil akhir, jenis transfer, dan transfer terbaru. Semua berubah live tanpa refresh.',
        en: 'The cards at the top show transfers today, pending approvals, success rate, total customer deposits, and the ledger status (Balanced). Below them are hourly transfers by outcome, transfer types, and the latest transfers. Everything updates live without a refresh.',
      },
    },
    {
      image: 'step-3.jpg',
      title: { id: 'Kirim transfer dari Simulator', en: 'Send a transfer from the Simulator' },
      text: {
        id: 'Klik Simulator di kanan bawah. Panel ini memainkan aplikasi nasabah: jalankan Antarbank Rp1.500.000, lalu buka transfernya. Timeline saga menunjukkan setiap pesan Kafka: transfer dibuat, dana ditahan, dikirim ke jaringan antarbank, diterima bank tujuan, diposting, dan tercatat di buku besar.',
        en: 'Click Simulator at the bottom right. The panel plays the customer app: run Interbank Rp1,500,000, then open the transfer. The saga timeline shows every Kafka step: created, funds held, sent to the interbank network, accepted by the destination bank, posted, and recorded in the ledger.',
      },
    },
    {
      image: 'step-4.jpg',
      title: { id: 'Lihat kompensasi', en: 'Watch a compensation' },
      text: {
        id: 'Jalankan Antarbank ke rekening tutup. Jaringan antarbank menolaknya, transfer menjadi Gagal dengan alasan Ditolak bank tujuan, dan saga menjalankan kompensasi: hold dilepas dan dana dikembalikan ke rekening nasabah. Skenario Ke rekening Hana (dibekukan) menunjukkan hal yang sama untuk posting yang ditolak.',
        en: 'Run Interbank to a closed account. The interbank network rejects it, the transfer becomes Failed with the reason Rejected by the destination bank, and the saga compensates: the hold is released and the funds go back to the customer. To Hana’s frozen account shows the same for a refused posting.',
      },
    },
    {
      image: 'step-5.jpg',
      title: { id: 'Setujui sebagai supervisor', en: 'Approve as a supervisor' },
      text: {
        id: 'Jalankan Transfer Rp15.000.000: dana ditahan dan transfer menunggu supervisor. Ganti persona ke Supervisor (Bima) di Simulator, lalu buka Persetujuan. Transfer cabang Rp20.000.000 yang dibuat Bima sendiri terkunci (maker-checker), jadi setujui transfer Fajar; catatan persetujuan opsional.',
        en: 'Run Transfer Rp15,000,000: the funds are held and the transfer waits for a supervisor. Switch persona to Supervisor (Bima) in the Simulator, then open Approvals. The Rp20,000,000 branch transfer Bima created is locked (maker-checker), so approve Fajar’s transfer instead; the note is optional.',
      },
    },
    {
      image: 'step-6.jpg',
      title: { id: 'Ikuti pesan di Event Inspector', en: 'Follow the messages in the Event Inspector' },
      text: {
        id: 'Buka Event Inspector. Setiap pesan Kafka muncul live dengan topik (transfer.commands, ledger.events, audit.events, dan dead letter topic); klik satu baris, misalnya TransferPosted, untuk melihat partisi, offset, dan payload JSON-nya. Filter topik dan cari berdasarkan key atau ID transfer.',
        en: 'Open the Event Inspector. Every Kafka message appears live with its topic (transfer.commands, ledger.events, audit.events, and the dead letter topics); click a row such as TransferPosted to see its partition, offset, and JSON payload. Filter by topic and search by key or transfer ID.',
      },
    },
    {
      image: 'step-7.jpg',
      title: { id: 'Periksa buku besar dan neraca saldo', en: 'Check the ledger and trial balance' },
      text: {
        id: 'Di Simulator, jalankan 20 transfer bersamaan dari Gita: sebagian gagal, saldo tidak pernah negatif. Lalu buka Neraca saldo: total debit sama dengan total kredit dan setiap saldo konsisten dengan jumlah barisnya. Buka Buku besar dan klik satu jurnal untuk melihat baris debit dan kreditnya.',
        en: 'In the Simulator, run 20 transfers at once from Gita: some fail, the balance never goes negative. Then open Trial balance: total debits equal total credits and every balance matches the sum of its lines. Open General ledger and click a journal to see its debit and credit lines.',
      },
    },
    {
      image: 'step-8.jpg',
      title: { id: 'Baca log audit, ganti tema dan bahasa', en: 'Read the audit log, switch theme and language' },
      text: {
        id: 'Ganti persona ke Admin (Ayu) dan buka Log audit: setiap aksi dari ketiga service tercatat dengan nilai sebelum dan sesudah. Gunakan ID/EN dan ikon bulan di header untuk mengganti bahasa dan tema. Reset data demo di Simulator mengembalikan data ke kondisi awal.',
        en: 'Switch persona to Admin (Ayu) and open Audit log: every action from all three services is recorded with before and after values. Use ID/EN and the moon icon in the header to switch language and theme. Reset demo data in the Simulator restores the initial data.',
      },
    },
  ],

  limits: {
    id: [
      'Demo live berjalan tanpa server: ketiga service, Kafka, dan database ditiru oleh backend TypeScript di browser yang menyimpan data di localStorage masing-masing pengunjung. Kontrak API dan aturannya sama, tanpa JVM atau Kafka sungguhan.',
      'Backend asli (tiga JVM, Redpanda, PostgreSQL) hanya berjalan lokal lewat docker compose; belum ada backend yang di-hosting. Klaim konkurensi, kompensasi, dan replay diuji terhadap stack lokal ini (36 test backend, 20 cek e2e, skrip chaos).',
      'Jaringan antarbank adalah simulator, bukan integrasi BI-FAST atau switching sungguhan.',
      'Aplikasi nasabah butuh backend lokal yang berjalan dan belum dirilis ke Play Store/App Store; project native-nya masih memakai nama boilerplate.',
    ],
    en: [
      'The live demo runs without a server: the three services, Kafka, and the databases are emulated by a TypeScript backend in the browser that keeps data in each visitor’s localStorage. Same API contract and rules, but no real JVM or Kafka.',
      'The real backend (three JVMs, Redpanda, PostgreSQL) runs only locally with docker compose; there is no hosted backend. The concurrency, compensation, and replay claims are tested against that local stack (36 backend tests, 20 end-to-end checks, chaos scripts).',
      'The interbank network is a simulator, not a real BI-FAST or switching integration.',
      'The customer app needs a running local backend and has not been published to the Play Store/App Store; its native projects still carry boilerplate names.',
    ],
  },

  next: {
    id: [
      'Tarik tunai dengan persetujuan, PIN transaksi di aplikasi mobile, dan notifikasi push.',
      'Penampil dead letter topic dengan replay, bunga akhir hari (Spring Batch), dan tracing OpenTelemetry.',
    ],
    en: [
      'Cash withdrawals with approval, a transaction PIN in the mobile app, and push notifications.',
      'A dead letter viewer with replay, end-of-day interest (Spring Batch), and OpenTelemetry tracing.',
    ],
  },
}
