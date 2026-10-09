export default {
  slug: 'patungan',
  title: 'Patungan — Split Bill',
  hero: '/projects/patungan-web-mobile.png',
  tagline: {
    id: 'Aplikasi split bill untuk grup teman: catat tagihan bersama, bagi rata atau per item, lalu tahu persis siapa harus transfer ke siapa.',
    en: 'A split bill app for groups of friends: record shared bills, split them equally or by item, and see exactly who should pay whom.',
  },
  role: {
    id: 'Proyek pribadi · desain, backend Go, web React, aplikasi Flutter, deploy demo',
    en: 'Personal project · design, Go backend, React web, Flutter app, demo deployment',
  },
  platforms: {
    id: 'Web (desktop & ponsel), Android, iOS',
    en: 'Web (desktop & mobile), Android, iOS',
  },
  links: [
    {
      label: { id: 'Demo live (web)', en: 'Live demo (web)' },
      url: 'https://raihan-evanza-patungan.vercel.app/login',
    },
  ],
  tech: [
    'Go',
    'Connect (gRPC)',
    'Protocol Buffers + buf',
    'PostgreSQL 16',
    'GORM',
    'React 18',
    'TypeScript',
    'Vite',
    'Tailwind CSS',
    'Redux Toolkit + RTK Query',
    'Connect-ES',
    'Flutter',
    'Riverpod',
    'gRPC Dart',
    'Vision / ML Kit',
    'Docker',
    'GitHub Actions',
    'Vercel',
  ],
  overview: {
    id: [
      'Setelah makan bareng atau trip, hitungan "siapa hutang berapa ke siapa" biasanya berantakan di chat grup. Pajak dan servis dibagi kira-kira, sisa rupiah hilang di pembulatan, dan menagih teman terasa canggung.',
      'Patungan mencatat setiap tagihan di dalam grup dan membaginya rata, per item (lengkap dengan pajak, servis, dan diskon), atau dengan nominal manual. Saldo semua anggota diringkas menjadi saran transfer yang sesedikit mungkin. Pembayaran baru mengubah saldo setelah penerima mengonfirmasi uangnya masuk, dan pengingat dikirim otomatis ke yang belum bayar.',
      'Hasilnya satu backend Go dengan API gRPC (Connect) yang dipakai bersama oleh web dashboard React dan aplikasi Flutter untuk Android dan iOS. Web bisa dicoba langsung di Vercel lewat mode demo yang berjalan sepenuhnya di browser.',
    ],
    en: [
      'After a group dinner or a trip, working out who owes whom usually turns into a mess in the group chat. Tax and service charge get split roughly, rupiah get lost to rounding, and chasing friends for money feels awkward.',
      'Patungan records every bill inside a group and splits it equally, by item (with tax, service charge, and discounts), or by exact amounts. Everyone\'s balance is reduced to as few suggested transfers as possible. A payment only changes balances once the recipient confirms the money arrived, and people who haven\'t paid get automatic reminders.',
      'The result is one Go backend with a gRPC (Connect) API, shared by a React web dashboard and a Flutter app for Android and iOS. The web app can be tried right away on Vercel through a demo mode that runs entirely in the browser.',
    ],
  },
  features: [
    {
      title: { id: 'Tiga cara bagi', en: 'Three ways to split' },
      text: {
        id: 'Rata (sisa rupiah dibagi bergiliran, selisih antarbagian maksimal Rp1), per item, atau nominal manual yang jumlahnya wajib sama dengan total.',
        en: 'Equal (leftover rupiah handed out one by one, so shares differ by at most Rp1), by item, or exact amounts that must add up to the total.',
      },
    },
    {
      title: { id: 'Per item dengan pajak, servis, diskon', en: 'Itemized with tax, service, discount' },
      text: {
        id: 'Tiap item dibagi ke orang yang ikut makan, lalu pajak, servis, dan diskon dialokasikan proporsional terhadap subtotal masing-masing. Ada tombol cepat pajak 10%/11% dan servis 5%/10%.',
        en: 'Each item is split among the people who had it, then tax, service charge, and discount are allocated in proportion to each person\'s subtotal. Quick buttons fill in 10%/11% tax and 5%/10% service.',
      },
    },
    {
      title: { id: 'Pratinjau dari server', en: 'Server-side preview' },
      text: {
        id: 'Saat form diisi, web memanggil RPC PreviewSplit dan menampilkan bagian tiap orang. Angka di layar dihitung oleh kode yang sama dengan saat menyimpan, jadi tidak pernah berbeda.',
        en: 'While the form is filled in, the web app calls the PreviewSplit RPC and shows each person\'s share. The numbers come from the same code that runs on save, so they never differ.',
      },
    },
    {
      title: { id: 'Saldo dan saran transfer', en: 'Balances and suggested transfers' },
      text: {
        id: 'Saldo bersih tiap anggota (dibayar duluan − bagian + transfer keluar − transfer masuk) diubah menjadi paling banyak n−1 transfer. Tombol Bayar dan Ingatkan ada langsung di baris saran.',
        en: 'Each member\'s net balance (paid up front − share + sent − received) becomes at most n−1 transfers. Pay and Remind buttons sit right on each suggested transfer.',
      },
    },
    {
      title: { id: 'Konfirmasi pembayaran', en: 'Payment confirmation' },
      text: {
        id: 'Pembayaran dicatat pengirim sebagai Menunggu, lalu hanya penerima yang bisa Konfirmasi atau Tolak (dengan alasan). Pengirim bisa membatalkan selama masih menunggu.',
        en: 'The sender records a payment as Pending; only the recipient can Confirm or Reject it (with a reason). The sender can cancel while it is still pending.',
      },
    },
    {
      title: { id: 'Pengingat dan notifikasi', en: 'Reminders and notifications' },
      text: {
        id: 'Kreditur bisa mengingatkan manual dengan jeda 12 jam, dan worker mengirim pengingat otomatis tiap 72 jam. Teks notifikasi dirender dalam bahasa pilihan pembacanya.',
        en: 'Creditors can send a manual reminder with a 12-hour cooldown, and a worker sends automatic reminders every 72 hours. Notification text is rendered in each reader\'s chosen language.',
      },
    },
    {
      title: { id: 'Grup dan kode undangan', en: 'Groups and invite codes' },
      text: {
        id: 'Teman bergabung lewat kode 8 karakter tanpa huruf yang mirip. Owner bisa membuat kode baru dan mengeluarkan anggota yang saldonya sudah nol.',
        en: 'Friends join with an 8-character code that avoids look-alike letters. The owner can regenerate the code and remove members whose balance is zero.',
      },
    },
    {
      title: { id: 'Foto struk', en: 'Receipt photos' },
      text: {
        id: 'Foto struk bisa diunggah ke tagihan (JPEG, PNG, atau WebP, maksimal 5 MB). Tipe file dideteksi dari isinya, bukan dari label yang dikirim client.',
        en: 'A receipt photo can be attached to a bill (JPEG, PNG, or WebP, up to 5 MB). The file type is detected from its content, not from the label the client sends.',
      },
    },
    {
      title: { id: 'Scan struk di aplikasi mobile', en: 'Receipt scanning in the mobile app' },
      text: {
        id: 'Aplikasi Flutter membaca struk di perangkat dan mengisi item, pajak, servis, dan diskon. Pengguna tetap memeriksa hasilnya sebelum menyimpan.',
        en: 'The Flutter app reads the receipt on the device and fills in items, tax, service charge, and discount. The user still reviews the result before saving.',
      },
    },
    {
      title: { id: 'Dua bahasa dan mode gelap', en: 'Two languages and dark mode' },
      text: {
        id: 'Antarmuka Indonesia/Inggris, termasuk pesan error dari backend yang mengikuti header Accept-Language. Mode gelap, responsif sampai lebar ponsel, dan animasi mati bila sistem memilih reduce motion.',
        en: 'Indonesian/English UI, including backend error messages that follow the Accept-Language header. Dark mode, responsive down to phone width, and animations turn off when the system asks for reduced motion.',
      },
    },
  ],
  architecture: {
    flow: [
      {
        name: 'Web React',
        detail: {
          id: 'Client Connect-ES hasil generate dari proto, di-cache RTK Query',
          en: 'Connect-ES client generated from the proto, cached by RTK Query',
        },
      },
      {
        name: 'Flutter (Android & iOS)',
        detail: {
          id: 'Client gRPC Dart dari proto yang sama, OCR struk on-device',
          en: 'gRPC Dart client from the same proto, on-device receipt OCR',
        },
      },
      {
        name: 'Go backend (Connect)',
        detail: {
          id: 'Interceptor → handler → usecase → paket split & balance',
          en: 'Interceptor → handler → usecase → split & balance packages',
        },
      },
      {
        name: 'PostgreSQL 16',
        detail: {
          id: 'Nominal BIGINT rupiah, plus penyimpanan foto struk',
          en: 'Amounts as BIGINT rupiah, plus receipt photo storage',
        },
      },
    ],
    notes: {
      id: [
        'Satu port backend melayani gRPC (HTTP/2), gRPC-Web, dan Connect (JSON lewat HTTP/1.1), jadi browser dan aplikasi mobile tidak butuh proxy.',
        'Interceptor menangani log, bahasa, auth JWT, dan mengubah error domain menjadi kode gRPC dengan detail ErrorInfo/BadRequest.',
        'Aturan bisnis ada di usecase; hitungan uang ada di paket split dan balance yang murni (tanpa I/O), sehingga mudah dites. Notifikasi dikirim setelah transaksi commit tanpa menahan request.',
        'Di demo Vercel, transport Connect diganti router in-memory: request tetap berbentuk protobuf, tetapi dijawab di browser oleh port aturan backend dalam TypeScript.',
      ],
      en: [
        'One backend port serves gRPC (HTTP/2), gRPC-Web, and Connect (JSON over HTTP/1.1), so neither the browser nor the mobile app needs a proxy.',
        'Interceptors handle logging, language, JWT auth, and turn domain errors into gRPC codes with ErrorInfo/BadRequest details.',
        'Business rules live in the usecase layer; money math lives in pure split and balance packages (no I/O), which keeps them easy to test. Notifications go out after the transaction commits, without holding up the request.',
        'In the Vercel demo, the Connect transport is swapped for an in-memory router: requests are still protobuf messages, but they are answered in the browser by a TypeScript port of the backend rules.',
      ],
    },
  },
  stack: [
    {
      layer: { id: 'API', en: 'API' },
      items: ['Go', 'Connect (gRPC, gRPC-Web, Connect)', 'Protocol Buffers', 'buf (lint STANDARD)', 'JWT + bcrypt', 'go-i18n', 'slog'],
    },
    {
      layer: { id: 'Data', en: 'Data' },
      items: ['PostgreSQL 16', 'GORM', 'SELECT … FOR UPDATE per grup'],
    },
    {
      layer: { id: 'Web', en: 'Web' },
      items: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Redux Toolkit + RTK Query', 'Connect-ES', 'React Router', 'react-hook-form + yup'],
    },
    {
      layer: { id: 'Mobile', en: 'Mobile' },
      items: ['Flutter', 'Riverpod', 'go_router', 'gRPC Dart', 'flutter_secure_storage', 'Vision (iOS)', 'ML Kit (Android)'],
    },
    {
      layer: { id: 'Tes', en: 'Testing' },
      items: ['Testify', 'GoMock', 'Property test', 'E2E dengan Postgres asli', 'Race detector', 'Vitest', 'flutter_test + integration test'],
    },
    {
      layer: { id: 'Ops', en: 'Ops' },
      items: ['Docker multi-stage (±44 MB, non-root)', 'GitHub Actions', 'Vercel (demo web)'],
    },
  ],
  decisions: [
    {
      title: { id: 'Largest remainder untuk pembulatan', en: 'Largest remainder for rounding' },
      text: {
        id: 'Semua nominal disimpan sebagai int64 rupiah, tanpa float. Pajak, servis, dan diskon dibagi proporsional: tiap bagian dibulatkan ke bawah, lalu sisa rupiah diberikan ke pecahan terbesar (perkalian 128-bit agar tidak overflow). Jumlah bagian selalu sama dengan total, dan ini dibuktikan property test pada 2.000 input acak.',
        en: 'Every amount is stored as int64 rupiah, never as a float. Tax, service, and discount are split proportionally: each share is rounded down, then the leftover rupiah go to the largest fractions (using 128-bit multiplication to avoid overflow). Shares always add up to the total, which a property test checks against 2,000 random inputs.',
      },
    },
    {
      title: { id: 'Penyederhanaan hutang', en: 'Debt simplification' },
      text: {
        id: 'Daripada setiap tagihan menghasilkan transfer sendiri, saldo bersih grup dicocokkan secara greedy: debitur terbesar membayar kreditur terbesar sampai semua nol. Hasilnya paling banyak n−1 transfer, dan pembayaran yang masih menunggu konfirmasi tidak disarankan ulang.',
        en: 'Instead of one transfer per bill, the group\'s net balances are matched greedily: the largest debtor pays the largest creditor until everything is zero. That gives at most n−1 transfers, and payments still awaiting confirmation are not suggested again.',
      },
    },
    {
      title: { id: 'Penerima yang mengonfirmasi', en: 'The recipient confirms' },
      text: {
        id: 'Pengirim bisa saja salah klik atau transfernya gagal, jadi saldo baru berubah setelah penerima mengonfirmasi. Operasi uang per grup dikunci dengan SELECT … FOR UPDATE dan perubahan status dijaga status asal; tes E2E mengirim 5 pembayaran penuh sekaligus dan hanya 1 yang lolos.',
        en: 'A sender can mis-tap or a transfer can fail, so balances only change once the recipient confirms. Money operations in a group are locked with SELECT … FOR UPDATE and status changes check the previous status; an E2E test fires 5 full payments at once and only 1 goes through.',
      },
    },
    {
      title: { id: 'Satu kontrak protobuf untuk web dan Flutter', en: 'One protobuf contract for web and Flutter' },
      text: {
        id: 'Kontrak API ditulis sekali di file .proto dan dicek buf lint. Client TypeScript (Connect-ES) dan Dart (gRPC) di-generate dari file yang sama, jadi perubahan API langsung ketahuan saat compile, bukan saat runtime.',
        en: 'The API contract is written once in .proto files and checked by buf lint. The TypeScript (Connect-ES) and Dart (gRPC) clients are generated from the same files, so API changes surface at compile time instead of at runtime.',
      },
    },
    {
      title: { id: 'OCR struk di perangkat', en: 'On-device receipt OCR' },
      text: {
        id: 'Struk dibaca di ponsel lewat platform channel: Vision di iOS dan ML Kit di Android. Tanpa biaya API, bisa offline, dan foto tidak dikirim ke layanan pihak ketiga; parser Dart lalu menggabungkan baris yang sejajar menjadi item dan harga.',
        en: 'Receipts are read on the phone through a platform channel: Vision on iOS and ML Kit on Android. No API cost, works offline, and photos are never sent to a third-party service; a Dart parser then merges aligned text into items and prices.',
      },
    },
    {
      title: { id: 'Mode demo tanpa server di Vercel', en: 'Serverless demo mode on Vercel' },
      text: {
        id: 'Agar bisa dicoba tanpa menyewa server dan database, build demo mengganti transport Connect dengan createRouterTransport yang menjalankan port aturan backend di browser. Data contoh disimpan di localStorage tiap pengunjung, dan build biasa tidak memuat kode demo sama sekali.',
        en: 'So the app can be tried without paying for a server and database, the demo build swaps the Connect transport for createRouterTransport, which runs a port of the backend rules in the browser. Sample data lives in each visitor\'s localStorage, and the regular build ships none of the demo code.',
      },
    },
  ],
  guide: [
    {
      image: 'step-1.jpg',
      title: { id: 'Masuk dengan akun demo', en: 'Sign in with a demo account' },
      text: {
        id: 'Buka demo, lalu di bagian "Masuk cepat dengan akun contoh" klik Andi Pratama. Tidak perlu mengetik password; semua akun memakai Password123!.',
        en: 'Open the demo and, under "Quick sign-in with a sample account", click Andi Pratama. No need to type a password; every account uses Password123!.',
      },
    },
    {
      image: 'step-2.jpg',
      title: { id: 'Lihat ringkasan di dashboard', en: 'Read the dashboard' },
      text: {
        id: 'Dashboard menunjukkan saldo bersih Andi di semua grup, berapa yang akan diterima dan perlu dibayar, serta daftar grup dengan saldo masing-masing.',
        en: 'The dashboard shows Andi\'s net balance across all groups, how much he will receive and needs to pay, and each group with its own balance.',
      },
    },
    {
      image: 'step-3.jpg',
      title: { id: 'Buka grup dan saran transfer', en: 'Open a group and its suggested transfers' },
      text: {
        id: 'Klik grup Trip Bandung. Tab Saldo menampilkan saran transfer (Budi → Andi) beserta tombol Ingatkan, dan tabel saldo tiap anggota di bawahnya.',
        en: 'Click the Trip Bandung group. The Balances tab shows the suggested transfer (Budi → Andi) with a Remind button, and every member\'s balance in the table below.',
      },
    },
    {
      image: 'step-4.jpg',
      title: { id: 'Catat tagihan per item', en: 'Record an itemized bill' },
      text: {
        id: 'Klik Tambah tagihan, isi judul, lalu pilih cara bagi Per item. Isi nama, jumlah, dan harga tiap item, pilih siapa yang menanggungnya, lalu klik Pajak 10% dan isi diskon.',
        en: 'Click Add bill, enter a title, and choose the Per item split. Fill in each item\'s name, quantity, and price, pick who shares it, then click Tax 10% and enter a discount.',
      },
    },
    {
      image: 'step-5.jpg',
      title: { id: 'Periksa pratinjau, lalu simpan', en: 'Check the preview, then save' },
      text: {
        id: 'Panel Pratinjau pembagian langsung menunjukkan bagian tiap orang, termasuk porsi pajak dan diskonnya, dan totalnya selalu pas. Klik Simpan tagihan untuk membuka detail tagihan.',
        en: 'The Split preview panel immediately shows each person\'s share, including their part of the tax and discount, and the total always matches. Click Save bill to open the bill details.',
      },
    },
    {
      image: 'step-6.jpg',
      title: { id: 'Konfirmasi pembayaran masuk', en: 'Confirm an incoming payment' },
      text: {
        id: 'Kembali ke grup dan buka tab Pembayaran. Pembayaran dari Citra berstatus Menunggu; klik Konfirmasi lalu setujui di dialog, dan saldo grup ikut berubah.',
        en: 'Go back to the group and open the Payments tab. Citra\'s payment is Pending; click Confirm and approve it in the dialog, and the group balance updates.',
      },
    },
    {
      image: 'step-7.jpg',
      title: { id: 'Ganti bahasa dan mode gelap', en: 'Switch language and dark mode' },
      text: {
        id: 'Di bagian bawah menu samping, pilih EN untuk bahasa Inggris dan klik ikon bulan untuk mode gelap. Tombol Reset data di header mengembalikan data contoh ke kondisi awal.',
        en: 'At the bottom of the sidebar, choose EN for English and click the moon icon for dark mode. The Reset data button in the header restores the sample data.',
      },
    },
  ],
  limits: {
    id: [
      'Demo web berjalan tanpa backend: login memakai token demo (bukan JWT), data hanya ada di browser masing-masing pengunjung, dan tidak ada worker pengingat otomatis.',
      'Backend Go dan PostgreSQL belum di-hosting publik; versi lengkapnya dijalankan lokal dengan Docker.',
      'Push notification ke ponsel (FCM) belum ada; aplikasi mobile memakai notifikasi in-app dengan polling. Interface provider push sudah disiapkan.',
      'Sengaja di luar lingkup: multi-mata uang, payment gateway, dan edit tagihan (hapus lalu buat ulang).',
      'Hasil scan struk adalah tebakan dari OCR, jadi tetap perlu diperiksa pengguna. JWT berlaku 7 hari tanpa refresh token.',
    ],
    en: [
      'The web demo runs without a backend: sign-in uses a demo token (not a JWT), data only exists in each visitor\'s browser, and there is no automatic reminder worker.',
      'The Go backend and PostgreSQL are not publicly hosted yet; the full version runs locally with Docker.',
      'Push notifications to phones (FCM) are not done yet; the mobile app uses in-app notifications with polling. The push provider interface is already in place.',
      'Deliberately out of scope: multiple currencies, a payment gateway, and editing bills (delete and recreate instead).',
      'Receipt scan results are OCR guesses, so the user still has to check them. JWTs last 7 days with no refresh token.',
    ],
  },
  next: {
    id: [
      'Push FCM lewat proyek Firebase, termasuk menghapus token perangkat yang tidak valid.',
      'Refresh token untuk aplikasi mobile.',
      'Hosting backend dan PostgreSQL (mis. Fly.io atau Railway) agar demo memakai API sungguhan.',
    ],
    en: [
      'FCM push through a Firebase project, including cleanup of invalid device tokens.',
      'Refresh tokens for the mobile app.',
      'Hosting the backend and PostgreSQL (e.g. Fly.io or Railway) so the demo can use the real API.',
    ],
  },
}
