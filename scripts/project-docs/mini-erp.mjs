// Isi PDF penjelasan proyek Mini ERP (lihat README.md di folder ini untuk skema).
export default {
  slug: 'mini-erp',
  title: 'Mini ERP',
  hero: '/projects/project-erp-web-mobile.png',
  tagline: {
    id: 'Aplikasi inventori dan order untuk usaha dagang kecil–menengah: pembelian, penerimaan barang, penjualan, dan stok per gudang dalam satu alur, ditambah aplikasi mobile untuk manager.',
    en: 'An inventory and order management app for small and mid-sized trading businesses: purchasing, goods receipt, sales, and per-warehouse stock in one flow, plus a mobile app for managers.',
  },
  role: {
    id: 'Proyek pribadi · desain database, backend, web, mobile, deploy',
    en: 'Personal project · database design, backend, web, mobile, deployment',
  },
  platforms: {
    id: 'Web (desktop) · Android & iOS (aplikasi khusus manager)',
    en: 'Web (desktop) · Android & iOS (manager-only app)',
  },
  links: [{ label: { id: 'Demo live', en: 'Live demo' }, url: 'https://raihan-evanza-erp.vercel.app' }],
  tech: [
    'Go 1.22',
    'Gin',
    'GORM',
    'SQL Server 2022',
    'JWT',
    'React 18',
    'TypeScript',
    'Vite',
    'Redux Toolkit (RTK Query)',
    'Tailwind CSS',
    'React Native 0.87',
  ],

  overview: {
    id: [
      'Di usaha dagang, stok sering dicatat di spreadsheet terpisah dari pembelian dan penjualan. Akibatnya angka stok bisa berbeda dengan kenyataan, barang yang sudah dijanjikan ke customer ikut terjual lagi, dan tidak jelas siapa yang menyetujui pembelian.',
      'Mini ERP menyatukan alur itu: purchase order (PO) harus di-approve sebelum barang diterima, penerimaan boleh bertahap, sales order (SO) langsung me-reserve stok saat dikonfirmasi, dan setiap perubahan stok tercatat di buku besar mutasi per gudang. Hak akses dibagi per role (Admin, Manager, Gudang, Sales).',
      'Hasilnya berupa backend Go dengan SQL Server, web React yang bisa dicoba tanpa server lewat mode demo di Vercel, dan aplikasi React Native untuk manager yang dipakai untuk memantau dashboard dan memutuskan approval PO dari ponsel.',
    ],
    en: [
      'Trading businesses often track stock in a spreadsheet that is separate from purchasing and sales. Stock figures drift from reality, goods already promised to a customer get sold again, and it is unclear who approved a purchase.',
      'Mini ERP puts that flow in one place: a purchase order (PO) must be approved before goods are received, receipts can arrive in several batches, a sales order (SO) reserves stock as soon as it is confirmed, and every stock change is written to a per-warehouse movement ledger. Access is split by role (Admin, Manager, Warehouse, Sales).',
      'The result is a Go backend on SQL Server, a React web app that runs without a server through a demo mode on Vercel, and a React Native app that lets managers watch the dashboard and decide on PO approvals from their phone.',
    ],
  },

  features: [
    {
      title: { id: 'Purchase order dengan approval', en: 'Purchase orders with approval' },
      text: {
        id: 'Alurnya Draft → Submitted → Approved → Diterima. Pembuat PO tidak bisa meng-approve atau me-reject PO-nya sendiri, dan penolakan wajib disertai alasan.',
        en: 'The flow is Draft → Submitted → Approved → Received. The person who created a PO cannot approve or reject it, and a rejection requires a reason.',
      },
    },
    {
      title: { id: 'Penerimaan barang parsial', en: 'Partial goods receipt' },
      text: {
        id: 'Gudang mencatat barang yang benar-benar datang; sisanya tetap terbuka dan PO berstatus "Diterima sebagian". Setiap penerimaan mendapat nomor GR sendiri dan tidak bisa melebihi jumlah yang dipesan.',
        en: 'The warehouse records only what actually arrived; the rest stays open and the PO shows "Partially received". Each receipt gets its own GR number and can never exceed the ordered quantity.',
      },
    },
    {
      title: { id: 'Sales order dengan reservasi stok', en: 'Sales orders with stock reservation' },
      text: {
        id: 'Saat SO dikonfirmasi, stok semua item di-reserve sekaligus; jika satu item kurang, konfirmasi dibatalkan seluruhnya dengan pesan berapa yang tersedia. Pengiriman mengurangi on hand, dan pembatalan SO yang sudah dikonfirmasi melepas reservasinya.',
        en: 'When an SO is confirmed, stock for every item is reserved at once; if one item is short, the whole confirmation is rolled back with a message showing how much is available. Shipping reduces on-hand stock, and cancelling a confirmed SO releases its reservation.',
      },
    },
    {
      title: { id: 'Stok & buku besar per gudang', en: 'Per-warehouse stock & ledger' },
      text: {
        id: 'Stok disimpan per produk per gudang sebagai on hand, reserved, dan tersedia (on hand − reserved), dengan penanda stok menipis. Halaman Mutasi Stok mencatat setiap perubahan beserta saldo setelahnya dan dokumen sumbernya (GR atau SO).',
        en: 'Stock is kept per product per warehouse as on hand, reserved, and available (on hand − reserved), with a low-stock flag. The Stock Movements page lists every change with the balance after it and its source document (GR or SO).',
      },
    },
    {
      title: { id: 'Hak akses per role', en: 'Role-based access' },
      text: {
        id: 'Empat role dengan izin berbeda: Admin semua akses, Manager approve PO dan master data, Gudang membuat PO, menerima barang, dan mengirim SO, Sales mengelola SO. Tombol yang tidak boleh dipakai disembunyikan, dan backend tetap menolaknya dengan 403.',
        en: 'Four roles with different permissions: Admin has full access, Manager approves POs and edits master data, Warehouse creates POs, receives goods, and ships SOs, and Sales manages SOs. Buttons a user may not use are hidden, and the backend still rejects the call with a 403.',
      },
    },
    {
      title: { id: 'Dashboard KPI', en: 'KPI dashboard' },
      text: {
        id: 'Penjualan bulan ini, nilai persediaan, PO menunggu approval, dan jumlah stok menipis, ditambah grafik arus barang 14 hari, nilai stok per kategori, dan top customer. Grafiknya SVG buatan sendiri dan bisa diganti ke tampilan tabel.',
        en: 'Sales this month, inventory value, POs awaiting approval, and low-stock count, plus a 14-day goods flow chart, stock value per category, and top customers. The charts are hand-built SVG and can be switched to a table view.',
      },
    },
    {
      title: { id: 'Dua bahasa & dark mode', en: 'Two languages & dark mode' },
      text: {
        id: 'Antarmuka tersedia dalam Bahasa Indonesia dan Inggris, termasuk pesan error dari backend yang mengikuti header Accept-Language. Tema terang/gelap mengikuti setelan sistem dan bisa diganti manual.',
        en: 'The interface is available in Indonesian and English, including backend error messages, which follow the Accept-Language header. The light/dark theme follows the system setting and can be switched manually.',
      },
    },
    {
      title: { id: 'Aplikasi mobile untuk manager', en: 'Mobile app for managers' },
      text: {
        id: 'Aplikasi React Native (Android + iOS) untuk Manager dan Admin: dashboard, kotak approval PO dengan approve/reject, serta pemantauan SO dan stok menipis. Role lain ditolak saat login karena tidak punya izin approval.',
        en: 'A React Native app (Android + iOS) for Managers and Admins: dashboard, a PO approval inbox with approve/reject, and monitoring of SOs and low stock. Other roles are turned away at login because they lack approval permission.',
      },
    },
  ],

  architecture: {
    flow: [
      {
        name: 'Web React / App React Native',
        detail: {
          id: 'RTK Query memanggil REST API dengan token JWT, bahasa aktif, dan header X-Platform.',
          en: 'RTK Query calls the REST API with a JWT, the active language, and an X-Platform header.',
        },
      },
      {
        name: 'Gin (controller)',
        detail: {
          id: 'Middleware memeriksa token dan permission, lalu memvalidasi input.',
          en: 'Middleware checks the token and permission, then validates input.',
        },
      },
      {
        name: 'Usecase',
        detail: {
          id: 'Aturan bisnis: alur status, self-approval, reservasi stok, dalam satu transaksi.',
          en: 'Business rules: status flow, self-approval, stock reservation, inside one transaction.',
        },
      },
      {
        name: 'Repository (GORM)',
        detail: {
          id: 'Query SQL dengan kondisi penjaga di WHERE dan lock baris.',
          en: 'SQL queries with guard conditions in the WHERE clause and row locks.',
        },
      },
      {
        name: 'SQL Server 2022',
        detail: {
          id: 'Tabel dokumen, stok per gudang, mutasi, nomor dokumen, audit log.',
          en: 'Document tables, per-warehouse stock, movements, document numbers, audit log.',
        },
      },
    ],
    notes: {
      id: [
        'Backend Go dibagi tiga lapis (controller → usecase → repository) supaya aturan bisnis bisa diuji unit dengan GoMock tanpa database.',
        'Satu helper transaksi meneruskan transaksi lewat context, jadi semua repository yang dipanggil di dalam satu aksi otomatis memakai transaksi yang sama, termasuk pencatatan audit log.',
        'Di demo Vercel, kotak Gin sampai SQL Server digantikan oleh adapter Axios di browser yang meniru aturan yang sama dan menyimpan data di localStorage.',
      ],
      en: [
        'The Go backend has three layers (controller → usecase → repository) so business rules can be unit-tested with GoMock without a database.',
        'A single transaction helper passes the transaction through the context, so every repository called within one action uses the same transaction automatically, including the audit log write.',
        'In the Vercel demo, everything from Gin to SQL Server is replaced by an in-browser Axios adapter that applies the same rules and keeps data in localStorage.',
      ],
    },
  },

  stack: [
    {
      layer: { id: 'Backend', en: 'Backend' },
      items: ['Go 1.22', 'Gin', 'GORM', 'JWT (HS256) + bcrypt', 'Viper', 'go-i18n', 'Swaggo (Swagger)', 'Testify + GoMock'],
    },
    {
      layer: { id: 'Database', en: 'Database' },
      items: ['SQL Server 2022 (Docker)', 'CHECK constraint', 'Filtered unique index (soft delete)', 'View vw_LowStock'],
    },
    {
      layer: { id: 'Web', en: 'Web' },
      items: ['React 18', 'TypeScript', 'Vite', 'Redux Toolkit (RTK Query)', 'React Router', 'react-hook-form + yup', 'Tailwind CSS', 'Vercel'],
    },
    {
      layer: { id: 'Mobile', en: 'Mobile' },
      items: ['React Native 0.87 (New Architecture, Hermes)', 'React Navigation 7', 'RTK Query', 'react-native-keychain', 'react-native-svg'],
    },
  ],

  decisions: [
    {
      title: { id: 'Setiap perubahan stok dalam satu transaksi', en: 'Every stock change in one transaction' },
      text: {
        id: 'Penerimaan barang menulis GR, menambah qty diterima, menambah stok, dan mencatat mutasi dalam satu transaksi; kalau satu langkah gagal, semuanya dibatalkan. Update stok memakai UPDLOCK/ROWLOCK dengan syarat stok cukup di WHERE, dan tabel stok punya CHECK (reserved ≤ on hand, tidak ada nilai minus) sebagai pengaman terakhir.',
        en: 'A goods receipt writes the GR, increments the received quantity, increases stock, and logs the movement in one transaction; if any step fails, all of it is rolled back. Stock updates use UPDLOCK/ROWLOCK with a "stock is sufficient" condition in the WHERE clause, and the stock table has CHECK constraints (reserved ≤ on hand, nothing negative) as the last safety net.',
      },
    },
    {
      title: { id: 'Penjaga status di query, bukan cek lalu tulis', en: 'Status guards in the query, not check-then-write' },
      text: {
        id: 'Perpindahan status memakai UPDATE … WHERE Status IN (status asal). Jika dua orang menekan tombol bersamaan, hanya satu yang berhasil dan yang lain mendapat 409, sehingga dokumen tidak pernah diproses dua kali.',
        en: 'Status changes use UPDATE … WHERE Status IN (allowed source statuses). If two people press the button at the same time, only one succeeds and the other gets a 409, so a document is never processed twice.',
      },
    },
    {
      title: { id: 'Reservasi saat konfirmasi SO', en: 'Reserve on SO confirmation' },
      text: {
        id: 'Stok baru dipotong saat barang dikirim, tetapi sudah di-reserve saat SO dikonfirmasi. Dengan begitu stok yang sudah dijanjikan ke satu customer tidak bisa dijual lagi ke customer lain, dan form SO menampilkan stok tersedia sebelum dikonfirmasi.',
        en: 'Stock is deducted only when goods ship, but it is reserved as soon as the SO is confirmed. That way stock promised to one customer cannot be sold to another, and the SO form shows available stock before confirmation.',
      },
    },
    {
      title: { id: 'Pemetaan role → permission di satu tempat', en: 'Role → permission mapping in one place' },
      text: {
        id: 'Daftar izin per role hanya ada di satu map di backend dan dikirim ke frontend lewat /auth/me. Web dan mobile memeriksa izin (mis. po.approve), bukan nama role, jadi mengubah hak akses cukup di satu file.',
        en: 'The permission list per role lives in a single map in the backend and is sent to the client through /auth/me. Web and mobile check permissions (e.g. po.approve) rather than role names, so changing access rules touches one file.',
      },
    },
    {
      title: { id: 'Mode demo tanpa server di Vercel', en: 'Serverless demo mode on Vercel' },
      text: {
        id: 'Supaya bisa dicoba tanpa hosting Go dan SQL Server, build demo mengganti adapter Axios dengan backend tiruan di browser yang memakai aturan yang sama: permission, alur status, reservasi, larangan self-approval, dan pesan error dua bahasa. Riwayat 14 hari dibuat ulang relatif terhadap hari ini, dan kode demo tidak ikut di build biasa.',
        en: 'So the app can be tried without hosting Go and SQL Server, the demo build swaps the Axios adapter for an in-browser backend that applies the same rules: permissions, status flow, reservation, the self-approval ban, and bilingual errors. A 14-day history is regenerated relative to today, and the demo code is excluded from the normal build.',
      },
    },
    {
      title: { id: 'Aplikasi mobile hanya untuk manager', en: 'Mobile app for managers only' },
      text: {
        id: 'Pekerjaan input harian (membuat PO/SO, terima barang) lebih nyaman di layar besar, sedangkan manager butuh memutuskan approval di mana saja. Karena itu aplikasi mobile hanya berisi pemantauan dan approve/reject, dengan tombol terkunci selama request berjalan agar tidak ada keputusan ganda.',
        en: 'Daily data entry (creating POs/SOs, receiving goods) is easier on a large screen, while managers need to approve from anywhere. So the mobile app only covers monitoring and approve/reject, with buttons locked while a request is in flight to prevent duplicate decisions.',
      },
    },
  ],

  guide: [
    {
      image: 'step-1.jpg',
      title: { id: 'Masuk dengan akun demo', en: 'Sign in with a demo account' },
      text: {
        id: 'Buka demo, lalu klik salah satu kartu akun demo (misalnya Admin Sistem) untuk mengisi email dan password otomatis, kemudian klik Masuk. Setiap akun memakai password Password123! dan menampilkan menu sesuai role-nya.',
        en: 'Open the demo, click one of the demo account cards (for example Admin Sistem) to fill in the email and password, then click Sign in. Every account uses the password Password123! and shows the menus its role allows.',
      },
    },
    {
      image: 'step-2.jpg',
      title: { id: 'Lihat dashboard', en: 'Read the dashboard' },
      text: {
        id: 'Empat kartu KPI di atas menunjukkan penjualan bulan ini, nilai persediaan, PO menunggu approval, dan stok menipis. Di bawahnya ada grafik arus barang 14 hari, nilai stok per kategori, dan top customer.',
        en: 'Four KPI cards at the top show sales this month, inventory value, POs awaiting approval, and low stock. Below them are the 14-day goods flow chart, stock value per category, and top customers.',
      },
    },
    {
      image: 'step-3.jpg',
      title: { id: 'Approve purchase order', en: 'Approve a purchase order' },
      text: {
        id: 'Buka Purchase Order, pilih filter "Menunggu approval", lalu buka PO dari PT Sumber Elektronik dan klik Approve. PO ini dibuat oleh akun Gudang; pembuat PO sendiri tidak akan melihat tombol Approve.',
        en: 'Open Purchase Order, set the filter to "Awaiting approval", open the PO from PT Sumber Elektronik, and click Approve. This PO was created by the Warehouse account; its creator would not see the Approve button.',
      },
    },
    {
      image: 'step-4.jpg',
      title: { id: 'Terima barang sebagian', en: 'Receive goods partially' },
      text: {
        id: 'Klik Terima barang, ubah jumlah Keyboard Mechanical menjadi 10 dari 15, lalu simpan. Status PO berubah menjadi "Diterima sebagian" dan nomor GR muncul di riwayat penerimaan.',
        en: 'Click Receive goods, change Keyboard Mechanical to 10 of 15, and save. The PO status becomes "Partially received" and a GR number appears in the receipt history.',
      },
    },
    {
      image: 'step-5.jpg',
      title: { id: 'Buat sales order dan reserve stok', en: 'Create a sales order and reserve stock' },
      text: {
        id: 'Buka Sales Order → Buat SO, pilih customer, Gudang Jakarta, dan Keyboard Mechanical qty 5; form langsung menampilkan stok tersedia. Simpan sebagai draft, lalu klik "Konfirmasi & reserve stok".',
        en: 'Go to Sales Order → Create SO, pick a customer, Gudang Jakarta, and Keyboard Mechanical with qty 5; the form shows available stock right away. Save it as a draft, then click "Confirm & reserve stock".',
      },
    },
    {
      image: 'step-6.jpg',
      title: { id: 'Cek stok dan buku besar mutasi', en: 'Check stock and the movement ledger' },
      text: {
        id: 'Di halaman Stok, cari "Keyboard" untuk melihat on hand, reserved, dan tersedia yang berubah dari dua langkah tadi. Halaman Mutasi Stok menampilkan baris "Pembelian masuk" +10 dengan saldo setelahnya dan nomor GR sebagai referensi.',
        en: 'On the Stock page, search "Keyboard" to see on hand, reserved, and available change after the last two steps. The Stock Movements page shows a "Purchase in" row of +10 with the balance after it and the GR number as its reference.',
      },
    },
    {
      image: 'step-7.jpg',
      title: { id: 'Ganti tema dan bahasa', en: 'Switch theme and language' },
      text: {
        id: 'Di bagian bawah sidebar, klik Mode gelap lalu pilih EN untuk melihat seluruh antarmuka dalam bahasa Inggris. Tombol Reset data di header mengembalikan data demo ke kondisi awal.',
        en: 'At the bottom of the sidebar, click Dark mode and pick EN to see the whole interface in English. The Reset data button in the header restores the demo data to its initial state.',
      },
    },
  ],

  limits: {
    id: [
      'Demo live berjalan tanpa backend: data tersimpan di localStorage browser masing-masing pengunjung dan aturan bisnisnya ditiru di TypeScript, bukan dijalankan oleh server Go.',
      'Aplikasi mobile butuh backend Go yang berjalan (lokal atau di-hosting) dan belum dirilis ke Play Store/App Store; signing iOS belum disiapkan.',
      'Kolom ROWVERSION sudah ada di schema, tetapi API belum memakainya; edit draft PO/SO yang bersamaan masih "yang terakhir menang". Perpindahan status dan stok sudah aman lewat penjaga di WHERE.',
      'Belum ada refresh token (sesi berakhir saat JWT kedaluwarsa), dan tabel penyesuaian stok (stock opname) belum punya endpoint maupun halaman.',
    ],
    en: [
      'The live demo runs without a backend: data lives in each visitor\'s browser localStorage and the business rules are reimplemented in TypeScript rather than executed by the Go server.',
      'The mobile app needs a running Go backend (local or hosted) and has not been published to the Play Store/App Store; iOS signing is not set up yet.',
      'ROWVERSION columns exist in the schema but the API does not use them yet, so concurrent edits of the same PO/SO draft are still last-write-wins. Status and stock changes are already protected by WHERE guards.',
      'There is no refresh token yet (the session ends when the JWT expires), and the stock adjustment (stock count) tables have no endpoint or page yet.',
    ],
  },

  next: {
    id: [
      'Penyesuaian stok (stock opname) dengan approval, memakai tabel yang sudah disiapkan.',
      'Notifikasi push ke aplikasi manager saat PO di-submit, plus refresh token dan deep link ke detail PO.',
      'Hosting backend Go + SQL Server agar demo web dan mobile memakai server sungguhan.',
    ],
    en: [
      'Stock adjustments (stock counts) with approval, using the tables already in the schema.',
      'Push notifications to the manager app when a PO is submitted, plus refresh tokens and deep links to PO details.',
      'Hosting the Go backend and SQL Server so the web and mobile demos run against a real server.',
    ],
  },
}
