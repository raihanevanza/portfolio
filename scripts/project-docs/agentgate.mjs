// Isi PDF penjelasan proyek AgentGate (lihat README.md di folder ini untuk skema).
export default {
  slug: 'agentgate',
  title: 'AgentGate',
  hero: '/projects/agentgate-web.png',
  tagline: {
    id: 'Gateway persetujuan untuk tool call AI agent: aksi aman langsung jalan, aksi berisiko menunggu persetujuan manusia, aksi terlarang ditolak, dan semuanya tercatat.',
    en: 'An approval gateway for AI agent tool calls: safe actions run immediately, risky ones wait for a human, forbidden ones are refused, and everything is recorded.',
  },
  role: {
    id: 'Proyek pribadi · desain sistem, backend, web, mobile, deploy',
    en: 'Personal project · system design, backend, web, mobile, deployment',
  },
  platforms: {
    id: 'Web (console) · Android & iOS (aplikasi approver) · API gateway untuk agent',
    en: 'Web (console) · Android & iOS (approver app) · API gateway for agents',
  },
  links: [{ label: { id: 'Demo live', en: 'Live demo' }, url: 'https://raihan-evanza-agentgate.vercel.app/?as=approver' }],
  tech: [
    'Go 1.25',
    'Gin',
    'GORM + pgx',
    'PostgreSQL 17',
    'Server-Sent Events',
    'React 18',
    'TypeScript',
    'Vite',
    'Redux Toolkit (RTK Query)',
    'Tailwind CSS',
    'React Native 0.87',
  ],

  overview: {
    id: [
      'AI agent seperti bot customer service, asisten data, atau bot ops makin sering diberi akses ke tool yang punya efek nyata: refund, menulis ke database, mengirim email, sampai deploy ke production. Tanpa lapisan kontrol, pilihannya hanya dua: beri akses penuh, atau jangan pakai agent sama sekali.',
      'AgentGate berdiri di antara agent dan tool. Setiap panggilan dievaluasi policy per tool: aksi aman langsung dijalankan (HTTP 200), aksi berisiko menunggu keputusan approver (202), dan aksi terlarang ditolak (403). Approver memutuskan dari console web atau aplikasi mobile, pemilik agent tidak boleh menyetujui aksi agent-nya sendiri, dan setiap langkah masuk log audit.',
      'Hasilnya berupa backend Go + PostgreSQL dengan dua API (gateway untuk agent, console untuk manusia), console web React dengan update realtime, dan aplikasi React Native untuk approver. Demo web berjalan penuh di browser, lengkap dengan simulator agent, sehingga bisa dicoba tanpa server.',
    ],
    en: [
      'AI agents such as support bots, data assistants, and ops bots are increasingly given tools with real side effects: refunds, database writes, emails, even production deployments. Without a control layer, the choice is either full access or no agents at all.',
      'AgentGate sits between the agent and its tools. Every call is evaluated against a per-tool policy: safe actions run immediately (HTTP 200), risky ones wait for an approver (202), and forbidden ones are refused (403). Approvers decide from the web console or a mobile app, an agent’s owner may not approve that agent’s actions, and every step goes into an audit log.',
      'The result is a Go + PostgreSQL backend with two APIs (a gateway for agents, a console for people), a React web console with real-time updates, and a React Native app for approvers. The web demo runs entirely in the browser, agent simulator included, so it can be tried without a server.',
    ],
  },

  features: [
    {
      title: { id: 'Gateway untuk agent', en: 'Gateway for agents' },
      text: {
        id: 'Agent memanggil POST /gw/v1/calls dengan API key dan mendapat 200 (sudah dijalankan), 202 (menunggu persetujuan), atau 403 (ditolak policy). Untuk 202, agent menunggu hasil lewat long-poll hingga 30 detik per request.',
        en: 'Agents call POST /gw/v1/calls with an API key and get 200 (ran), 202 (waiting for approval), or 403 (denied by policy). After a 202, the agent waits for the outcome with long polling of up to 30 seconds per request.',
      },
    },
    {
      title: { id: 'Policy engine per tool', en: 'Per-tool policy engine' },
      text: {
        id: 'Setiap tool punya level risiko, efek default, batas waktu persetujuan, dan rule berurutan dengan kondisi pada argumen, misalnya amount > 10.000.000 → Tolak atau sql cocok dengan pola drop|truncate → Tolak. Rule pertama yang semua kondisinya terpenuhi yang menentukan.',
        en: 'Each tool has a risk level, a default effect, an approval window, and ordered rules with conditions on the arguments, such as amount > 10,000,000 → Deny or sql matches drop|truncate → Deny. The first rule whose conditions all hold decides.',
      },
    },
    {
      title: { id: 'Inbox persetujuan', en: 'Approvals inbox' },
      text: {
        id: 'Tool call yang menunggu diurutkan dari yang paling dekat kedaluwarsa, lengkap dengan hitung mundur. Approver bisa menyetujui atau menolak; penolakan wajib disertai catatan yang ikut dikirim ke agent.',
        en: 'Waiting calls are ordered by closest expiry, with a live countdown. Approvers can approve or reject; a rejection requires a note, which is passed back to the agent.',
      },
    },
    {
      title: { id: 'Pemisahan tugas', en: 'Separation of duties' },
      text: {
        id: 'Pemilik agent tidak bisa menyetujui atau menolak tool call agent-nya sendiri, termasuk bila ia admin. Tombol Setujui tetap tampil tetapi terkunci, dengan penjelasan bahwa orang lain yang harus memutuskan.',
        en: 'An agent’s owner cannot approve or reject that agent’s calls, even as an admin. The Approve button is still shown but locked, with a note that someone else has to decide.',
      },
    },
    {
      title: { id: 'Realtime tanpa refresh', en: 'Real time, no refresh' },
      text: {
        id: 'Server-Sent Events mendorong tool call baru dan perubahan status ke console: badge jumlah menunggu, daftar, halaman detail, dan dasbor ikut berubah. Indikator Live di header menunjukkan status koneksi.',
        en: 'Server-Sent Events push new calls and status changes to the console: the pending badge, lists, the detail page, and the dashboard all update. A Live indicator in the header shows the connection state.',
      },
    },
    {
      title: { id: 'Dasbor dan log audit', en: 'Dashboard and audit log' },
      text: {
        id: 'Dasbor menampilkan tool call 24 jam, persentase yang otomatis diizinkan, yang ditolak policy, median waktu persetujuan, grafik per jam per keputusan, dan donat status, masing-masing bisa diganti ke tabel. Log audit mencatat login, keputusan, dan perubahan agent beserta nilai lama/baru dan alamat IP.',
        en: 'The dashboard shows 24-hour tool calls, the share allowed automatically, policy denials, median approval time, an hourly chart by decision, and a status donut, each switchable to a table. The audit log records sign-ins, decisions, and agent changes with old/new values and IP address.',
      },
    },
    {
      title: { id: 'Manajemen agent dan API key', en: 'Agents and API keys' },
      text: {
        id: 'Admin mendaftarkan agent dan menerima API key yang hanya ditampilkan sekali; yang disimpan hanya hash SHA-256-nya. Key bisa dirotasi (key lama langsung tidak berlaku) dan agent bisa ditangguhkan.',
        en: 'Admins register agents and receive an API key that is shown only once; only its SHA-256 hash is stored. Keys can be rotated (the old key stops working at once) and agents can be suspended.',
      },
    },
    {
      title: { id: 'Aplikasi mobile untuk approver', en: 'Mobile app for approvers' },
      text: {
        id: 'Aplikasi React Native (Android + iOS) berisi inbox menunggu dengan badge dan hitung mundur, tombol setujui/tolak, serta feed aktivitas, supaya keputusan bisa diambil dari ponsel.',
        en: 'A React Native app (Android + iOS) with the pending inbox, badge and countdown, approve/reject buttons, and an activity feed, so decisions can be made from a phone.',
      },
    },
    {
      title: { id: 'Simulator agent, dua bahasa, mode gelap', en: 'Agent simulator, two languages, dark mode' },
      text: {
        id: 'Di demo, panel Simulator memanggil gateway sebagai agent dengan enam skenario (cek pesanan, refund kecil/besar, DROP TABLE, deploy production, refund gagal) dan menampilkan respons HTTP-nya. Antarmuka tersedia dalam Bahasa Indonesia dan Inggris, dengan tema terang/gelap.',
        en: 'In the demo, the Simulator panel calls the gateway as an agent with six scenarios (order lookup, small/large refund, DROP TABLE, production deploy, failing refund) and shows the HTTP response. The interface is available in Indonesian and English, with a light/dark theme.',
      },
    },
  ],

  architecture: {
    flow: [
      {
        name: 'AI agent',
        detail: {
          id: 'Memanggil /gw/v1 dengan API key agk_…, opsional Idempotency-Key.',
          en: 'Calls /gw/v1 with an agk_… API key, optionally an Idempotency-Key.',
        },
      },
      {
        name: 'Gateway API (Gin)',
        detail: {
          id: 'Validasi argumen terhadap skema tool, lalu evaluasi policy.',
          en: 'Validates arguments against the tool schema, then evaluates the policy.',
        },
      },
      {
        name: 'Policy & usecase',
        detail: {
          id: 'ALLOW → eksekusi, REQUIRE_APPROVAL → simpan dan tunggu, DENY → tolak.',
          en: 'ALLOW → execute, REQUIRE_APPROVAL → store and wait, DENY → refuse.',
        },
      },
      {
        name: 'PostgreSQL 17',
        detail: {
          id: 'Tool call, hash argumen, timeline, dan audit dalam satu transaksi.',
          en: 'Calls, argument hash, timeline, and audit in one transaction.',
        },
      },
      {
        name: 'Console web / app mobile',
        detail: {
          id: 'Approver menerima event SSE, lalu menyetujui lewat /api dengan JWT.',
          en: 'Approvers receive SSE events, then approve through /api with a JWT.',
        },
      },
    ],
    notes: {
      id: [
        'Satu binary Go melayani dua API: Gateway API untuk agent (API key) dan Console API untuk manusia (JWT). Aturan bisnis ada di lapisan usecase dan policy; controller hanya mem-parsing request dan mengirim respons.',
        'Setelah approver menyetujui, status berpindah ke EXECUTING, tool dijalankan dengan argumen yang tersimpan, lalu hasilnya membangunkan long-poll agent dan dikirim ke console lewat SSE.',
        'Worker latar belakang menandai persetujuan yang lewat batas waktu sebagai kedaluwarsa, dan tool call yang terhenti di EXECUTING karena restart dijadikan FAILED, tidak dijalankan ulang otomatis.',
        'Di demo Vercel, seluruh backend (policy engine, tool sandbox, kedaluwarsa, event realtime) digantikan adapter di browser yang menyimpan data di localStorage.',
      ],
      en: [
        'A single Go binary serves two APIs: the Gateway API for agents (API key) and the Console API for people (JWT). Business rules live in the usecase and policy layers; controllers only parse requests and send responses.',
        'Once an approver approves, the status moves to EXECUTING, the tool runs with the stored arguments, and the result wakes the agent’s long poll and reaches the console over SSE.',
        'Background workers expire approvals that pass their deadline, and calls left in EXECUTING by a restart become FAILED instead of being re-run automatically.',
        'In the Vercel demo, the whole backend (policy engine, sandbox tools, expiry, real-time events) is replaced by an in-browser adapter that keeps data in localStorage.',
      ],
    },
  },

  stack: [
    {
      layer: { id: 'Backend', en: 'Backend' },
      items: ['Go 1.25', 'Gin', 'GORM + pgx', 'Viper', 'golang-jwt + bcrypt', 'go-i18n', 'zap', 'Swaggo (Swagger)', 'Testify + GoMock'],
    },
    {
      layer: { id: 'Database', en: 'Database' },
      items: ['PostgreSQL 17 (Docker)', 'Unique (agent, Idempotency-Key)', 'Guarded status UPDATE'],
    },
    {
      layer: { id: 'Web', en: 'Web' },
      items: ['React 18', 'TypeScript', 'Vite', 'Redux Toolkit (RTK Query)', 'React Router', 'react-hook-form + yup', 'Tailwind CSS', 'Rupa Design System (@rupa-ui/react, signal)', 'Vitest', 'Vercel'],
    },
    {
      layer: { id: 'Mobile', en: 'Mobile' },
      items: ['React Native 0.87 (New Architecture, Hermes)', 'Rupa Design System (@rupa-ui/react-native, signal)', 'React Navigation 7', 'RTK Query', 'react-native-keychain'],
    },
  ],

  decisions: [
    {
      title: { id: 'Gagal-tertutup (fail-closed)', en: 'Fail closed' },
      text: {
        id: 'Bila tidak ada rule yang cocok, efek default tool yang dipakai. Bila sebuah kondisi tidak bisa dievaluasi (tipe tidak cocok atau pola regex rusak), evaluasi berhenti dengan REQUIRE_APPROVAL. Kesalahan policy tidak pernah berujung ALLOW.',
        en: 'If no rule matches, the tool’s default effect applies. If a condition cannot be evaluated (wrong type or a broken regex), evaluation stops with REQUIRE_APPROVAL. A policy mistake never ends in ALLOW.',
      },
    },
    {
      title: { id: 'Yang disetujui = yang dijalankan', en: 'What is approved is what runs' },
      text: {
        id: 'Saat request masuk, hash SHA-256 dari JSON argumen (bentuk kanonik) disimpan. Eksekusi memakai argumen yang tersimpan dan memeriksa ulang hash-nya, jadi argumen tidak bisa diubah setelah approver melihatnya.',
        en: 'When a request arrives, a SHA-256 hash of the canonical JSON arguments is stored. Execution uses the stored arguments and re-checks the hash, so arguments cannot change after the approver has seen them.',
      },
    },
    {
      title: { id: 'Keputusan aman dari balapan', en: 'Race-safe decisions' },
      text: {
        id: 'Setiap perpindahan status berupa UPDATE … WHERE id = ? AND status = ? dalam satu transaksi bersama timeline dan audit. Jika dua approver menekan bersamaan, hanya satu yang berhasil dan yang lain mendapat 409; menyetujui tool call yang sudah lewat batas waktu juga ditolak.',
        en: 'Every status change is an UPDATE … WHERE id = ? AND status = ? inside one transaction with the timeline and audit rows. If two approvers click at once, exactly one succeeds and the other gets a 409; approving a call past its deadline is refused too.',
      },
    },
    {
      title: { id: 'Idempotency dan efek samping paling banyak sekali', en: 'Idempotency and at-most-once side effects' },
      text: {
        id: 'Pasangan (agent, Idempotency-Key) unik di database, sehingga request ganda yang datang bersamaan hanya membuat satu tool call; ini diuji integrasi terhadap PostgreSQL sungguhan. Tool call yang terputus karena crash tidak dijalankan ulang, supaya refund atau deploy tidak terjadi dua kali.',
        en: 'The (agent, Idempotency-Key) pair is unique in the database, so concurrent duplicates create exactly one call; this is covered by integration tests against a real PostgreSQL. A call interrupted by a crash is never re-run, so a refund or deploy cannot happen twice.',
      },
    },
    {
      title: { id: 'Satu set test vector untuk dua engine', en: 'One set of test vectors for two engines' },
      text: {
        id: 'Policy engine ditulis dua kali: di Go untuk backend dan di TypeScript untuk demo browser. Keduanya menjalankan 39 test vector yang sama dari satu file JSON, sehingga demo memutuskan persis seperti server.',
        en: 'The policy engine exists twice: in Go for the backend and in TypeScript for the browser demo. Both run the same 39 test vectors from one JSON file, so the demo decides exactly like the server.',
      },
    },
    {
      title: { id: 'Data sensitif dimasking di mana-mana', en: 'Sensitive data masked everywhere' },
      text: {
        id: 'Field yang ditandai sensitif (misalnya customer_email dan isi email) diganti *** di respons console, pratinjau, dan log audit. Hanya executor yang melihat nilai aslinya.',
        en: 'Fields marked sensitive (such as customer_email and email bodies) are replaced with *** in console responses, previews, and the audit log. Only the executor sees the real values.',
      },
    },
  ],

  guide: [
    {
      image: 'step-1.jpg',
      title: { id: 'Masuk dengan akun demo', en: 'Sign in with a demo account' },
      text: {
        id: 'Buka demo, klik kartu Bima Approver untuk mengisi email dan password otomatis, lalu klik Masuk. Ada lima akun demo per role (Approver, Approver kedua, Admin, Developer, Auditor) dengan password Password123!. Tautan /?as=approver langsung masuk sebagai Bima.',
        en: 'Open the demo, click the Bima Approver card to fill in the email and password, then click Sign in. There are five demo accounts, one per role (Approver, second Approver, Admin, Developer, Auditor), all with the password Password123!. The /?as=approver link signs you in as Bima directly.',
      },
    },
    {
      image: 'step-2.jpg',
      title: { id: 'Lihat dasbor', en: 'Read the dashboard' },
      text: {
        id: 'Kartu di atas menunjukkan tool call 24 jam, yang menunggu persetujuan, persentase yang otomatis diizinkan, yang ditolak policy, dan median waktu persetujuan. Di bawahnya ada grafik tool call per jam per keputusan policy dan donat status.',
        en: 'The cards at the top show 24-hour tool calls, calls awaiting approval, the share allowed automatically, policy denials, and median approval time. Below them are an hourly chart by policy decision and a status donut.',
      },
    },
    {
      image: 'step-3.jpg',
      title: { id: 'Panggil gateway lewat Simulator', en: 'Call the gateway from the Simulator' },
      text: {
        id: 'Klik Simulator di header, lalu jalankan Cek pesanan (HTTP 200, langsung berhasil), DROP TABLE users (403, ditolak rule #4), dan Refund Rp2.500.000 (202, menunggu persetujuan). Badge Persetujuan di sidebar bertambah tanpa refresh.',
        en: 'Click Simulator in the header, then run Look up an order (HTTP 200, succeeds at once), DROP TABLE users (403, denied by rule #4), and Refund Rp2,500,000 (202, waiting for approval). The Approvals badge in the sidebar goes up without a refresh.',
      },
    },
    {
      image: 'step-4.jpg',
      title: { id: 'Buka inbox persetujuan', en: 'Open the approvals inbox' },
      text: {
        id: 'Tutup simulator dan buka Persetujuan. Refund yang baru dikirim muncul dengan label "baru saja", hitung mundur kedaluwarsa, ringkasan argumen, dan alasan dari agent.',
        en: 'Close the simulator and open Approvals. The refund you just sent appears as "just now", with an expiry countdown, an argument summary, and the agent’s reason.',
      },
    },
    {
      image: 'step-5.jpg',
      title: { id: 'Tinjau lalu setujui', en: 'Review, then approve' },
      text: {
        id: 'Klik Tinjau. Halaman detail menampilkan argumen (customer_email dimasking), hash argumen, dan alasan keputusan policy: tidak ada rule yang cocok untuk Rp2.500.000, jadi berlaku default tool (perlu persetujuan). Klik Setujui, isi catatan, lalu konfirmasi; statusnya menjadi Berhasil dan panel Simulator ikut menerima hasilnya.',
        en: 'Click Review. The detail page shows the arguments (customer_email masked), the argument hash, and why the policy decided: no rule matches Rp2,500,000, so the tool default (requires approval) applies. Click Approve, add a note, and confirm; the status becomes Succeeded and the Simulator panel receives the result too.',
      },
    },
    {
      image: 'step-6.jpg',
      title: { id: 'Coba menyetujui aksi agent sendiri', en: 'Try to approve your own agent’s call' },
      text: {
        id: 'Kembali ke Persetujuan dan buka deploy.trigger yang berlabel "Agent Anda". Bima pemilik ops-bot, jadi tombol Setujui dan Tolak terkunci dengan pesan bahwa orang lain yang harus memutuskan. Ganti persona ke Citra Reviewer lewat badge Demo untuk menyetujuinya.',
        en: 'Go back to Approvals and open the deploy.trigger call labelled "Your agent". Bima owns ops-bot, so Approve and Reject are locked with a note that someone else has to decide. Switch persona to Citra Reviewer from the Demo badge to approve it.',
      },
    },
    {
      image: 'step-7.jpg',
      title: { id: 'Baca policy tool', en: 'Read a tool policy' },
      text: {
        id: 'Buka Policy → payments.refund. Rule ditampilkan dalam bahasa manusia sesuai urutan evaluasi: bila amount > 10.000.000 → Tolak, bila amount ≤ 500.000 → Izinkan, selain itu perlu persetujuan. Di bawahnya ada skema argumen tool.',
        en: 'Open Policies → payments.refund. Rules are shown in plain language in evaluation order: if amount > 10,000,000 → Deny, if amount ≤ 500,000 → Allow, otherwise approval is required. The tool’s argument schema is listed below.',
      },
    },
    {
      image: 'step-8.jpg',
      title: { id: 'Cek log audit, tema, dan bahasa', en: 'Check the audit log, theme, and language' },
      text: {
        id: 'Buka Log audit untuk melihat persetujuan yang baru Anda buat, lengkap dengan waktu, pengguna, dan alamat IP. Klik Mode gelap dan EN di sidebar untuk mengganti tema dan bahasa. Menu Reset data demo di badge Demo mengembalikan data ke kondisi awal.',
        en: 'Open Audit log to see the approval you just made, with time, user, and IP address. Click Dark mode and EN in the sidebar to switch theme and language. Reset demo data in the Demo badge menu restores the initial data.',
      },
    },
  ],

  limits: {
    id: [
      'Demo live berjalan tanpa backend: data tersimpan di localStorage browser masing-masing pengunjung, dan aturan gateway ditiru di TypeScript (diuji dengan test vector yang sama dengan backend Go).',
      'Keenam tool adalah sandbox: mensimulasikan latensi 300–900 ms tanpa efek samping nyata. Belum ada executor yang memanggil layanan HTTP sungguhan.',
      'Rule policy masih di-seed lewat SQL; console baru bisa membaca policy, belum mengedit.',
      'Hub realtime ada di memori, jadi backend harus dijalankan sebagai satu instance. Aplikasi mobile butuh backend yang berjalan dan belum dirilis ke Play Store/App Store.',
    ],
    en: [
      'The live demo runs without a backend: data lives in each visitor’s browser localStorage, and the gateway rules are reimplemented in TypeScript (tested with the same vectors as the Go backend).',
      'All six tools are sandboxes: they simulate 300–900 ms of latency with no real side effects. There is no executor that calls a real HTTP service yet.',
      'Policy rules are still seeded through SQL; the console can read policies but not edit them yet.',
      'The real-time hub is in memory, so the backend must run as a single instance. The mobile app needs a running backend and has not been published to the Play Store/App Store.',
    ],
  },

  next: {
    id: [
      'Editor policy dengan simulator dry-run sebelum rule disimpan.',
      'Dua approver untuk tool berisiko Kritis, dan notifikasi push Android (FCM) untuk aplikasi approver.',
      'Adapter MCP di atas gateway dan executor HTTP sungguhan untuk layanan upstream.',
    ],
    en: [
      'A policy editor with a dry-run simulator before rules are saved.',
      'Two approvers for Critical tools, and Android push notifications (FCM) for the approver app.',
      'An MCP adapter on top of the gateway and real HTTP executors for upstream services.',
    ],
  },
}
