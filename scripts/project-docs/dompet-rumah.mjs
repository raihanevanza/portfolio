// Isi PDF penjelasan proyek Dompet Rumah (lihat README.md di folder ini untuk skema).
export default {
  slug: 'dompet-rumah',
  title: 'Dompet Rumah',
  hero: '/projects/dompet-rumah/overview.jpg',
  tagline: {
    id: 'Aplikasi keuangan rumah tangga untuk suami-istri: gaji, THR dan bonus prorata, tagihan rutin, rencana bulanan, target tabungan, dan proyeksi dalam satu tempat, dipakai bersama dari dua HP.',
    en: 'A household finance app for couples: salaries, prorated THR and bonuses, recurring bills, monthly plans, savings goals, and projections in one place, shared from two phones.',
  },
  role: {
    id: 'Proyek pribadi · desain, frontend, skema database & RLS, deploy',
    en: 'Personal project · design, frontend, database schema & RLS, deployment',
  },
  platforms: {
    id: 'Web (desktop & ponsel), bisa di-install sebagai PWA',
    en: 'Web (desktop & mobile), installable as a PWA',
  },
  links: [{ label: { id: 'Demo live', en: 'Live demo' }, url: 'https://raihan-evanza-dompet-rumah.vercel.app' }],
  tech: [
    'React 18',
    'TypeScript',
    'Vite',
    'TanStack Query',
    'Supabase (Postgres 17, Auth, Realtime)',
    'Row Level Security',
    'Tailwind CSS',
    'Rupa Design System',
    'Recharts',
    'pdf.js + Tesseract.js',
    'SheetJS',
    'Vitest',
  ],

  overview: {
    id: [
      'Keuangan rumah tangga biasanya tersebar: gaji suami dan istri cair di tanggal berbeda, THR dan bonus dihitung prorata untuk yang baru pindah kerja, tagihan rutin jatuh tempo sepanjang bulan, dan saldo ada di beberapa rekening, e-wallet, serta kartu kredit. Spreadsheet bersama cepat berantakan dan sulit diisi dari HP.',
      'Dompet Rumah menyatukan semuanya untuk satu rumah tangga. Setiap orang punya akun sendiri dan pasangan bergabung lewat kode undangan, lalu keduanya melihat data yang sama: transaksi, tagihan yang dicentang saat dibayar, rencana anggaran per kategori, target tabungan, dan proyeksi saldo 1–3 tahun yang memperhitungkan THR/bonus di bulan cairnya.',
      'Aplikasinya frontend React yang langsung bicara dengan Supabase. Karena database diakses dari browser, keamanan dijaga Row Level Security di setiap tabel dan diuji otomatis. Demo publiknya build terpisah yang menjalankan seluruh data di browser, dengan keluarga fiktif sebagai contoh.',
    ],
    en: [
      'Household money is usually scattered: two salaries paid on different days, THR and bonuses prorated for whoever changed jobs, recurring bills due across the month, and balances spread over bank accounts, e-wallets, and a credit card. A shared spreadsheet gets messy fast and is hard to fill in from a phone.',
      'Dompet Rumah brings it together for one household. Each person has their own account and a partner joins with an invite code, after which both see the same data: transactions, bills ticked off when paid, a monthly budget per category, savings goals, and a 1–3 year balance projection that counts THR and bonuses in the month they are paid.',
      'The app is a React frontend that talks to Supabase directly. Because the database is reached from the browser, every table is guarded by Row Level Security, and the policies are tested automatically. The public demo is a separate build that keeps all data in the browser, with a fictional family as sample data.',
    ],
  },

  features: [
    {
      title: { id: 'Ringkasan dan sisa saldo', en: 'Overview and remaining balance' },
      text: {
        id: 'Sisa saldo dari semua rekening, e-wallet, tunai, dan investasi dikurangi tagihan kartu kredit; batas belanja bulan ini terhadap rencana; arus kas 6 bulan; pengeluaran per kategori; tagihan belum dibayar; progres target; dan THR/bonus berikutnya.',
        en: 'The remaining balance across bank accounts, e-wallets, cash, and investments minus the credit card bill; this month’s spending against the plan; six months of cash flow; spending by category; unpaid bills; goal progress; and the next THR or bonus.',
      },
    },
    {
      title: { id: 'Transaksi dan import', en: 'Transactions and import' },
      text: {
        id: 'Pemasukan dan pengeluaran per bulan dengan filter kategori, orang, dan pencarian. Bisa salin dari bulan lalu, import CSV/Excel termasuk mutasi rekening berkolom Debit/Kredit dengan deteksi duplikat, dan export CSV/Excel.',
        en: 'Income and expenses per month, filtered by category, person, or search. Copy from last month, import CSV/Excel including bank statements with Debit/Credit columns (duplicates detected), and export to CSV/Excel.',
      },
    },
    {
      title: { id: 'Catat dari resi', en: 'Record from a receipt' },
      text: {
        id: 'PDF atau screenshot bukti transfer dibaca di browser (pdf.js untuk PDF, Tesseract untuk gambar) tanpa diunggah ke server. Tanggal, nominal, dan penerima terisi otomatis; rekeningnya dikenali dari nama bank atau 4 digit terakhir.',
        en: 'A PDF or screenshot of a payment receipt is read in the browser (pdf.js for PDFs, Tesseract for images) without being uploaded. The date, amount, and recipient are filled in, and the account is recognised from the bank name or the last four digits.',
      },
    },
    {
      title: { id: 'Tagihan rutin', en: 'Recurring bills' },
      text: {
        id: 'KPR, cicilan, listrik, internet, SPP, dan lainnya dengan tanggal jatuh tempo. Menekan Bayar langsung membuat transaksinya, dan database menolak tagihan yang sama tercatat dua kali dalam sebulan.',
        en: 'Mortgage, instalments, electricity, internet, school fees, and more, each with a due day. Pressing Pay creates the transaction, and the database refuses the same bill being recorded twice in one month.',
      },
    },
    {
      title: { id: 'Gaji, THR, dan bonus prorata', en: 'Salary, THR, and prorated bonuses' },
      text: {
        id: 'Gaji bersih dan upah dasar per orang, termasuk kenaikan gaji dan pekerjaan sebelumnya. THR mengikuti Permenaker 6/2016 (masa kerja < 12 bulan → bulan kerja/12); bonus tahunan bisa kali gaji atau nominal tetap, prorata per bulan atau per hari, dengan estimasi potongan pajak. Gaji bisa dicatat otomatis setiap tanggal gajian.',
        en: 'Net salary and base pay per person, including raises and previous jobs. THR follows Permenaker 6/2016 (under 12 months of service → months worked/12); annual bonuses can be a salary multiple or a fixed amount, prorated per month or per day, with an estimated tax deduction. Salaries can be recorded automatically on payday.',
      },
    },
    {
      title: { id: 'Rencana bulanan', en: 'Monthly plan' },
      text: {
        id: 'Anggaran per kategori dan alokasi ke setiap target tabungan, dibandingkan dengan realisasi dan perkiraan pemasukan. Bisa diisi dari tagihan rutin, disalin dari bulan lalu, serta di-import/export Excel.',
        en: 'A budget per category and an allocation to each savings goal, compared with actual spending and expected income. It can be filled from recurring bills, copied from last month, and imported or exported as Excel.',
      },
    },
    {
      title: { id: 'Target tabungan dan proyeksi', en: 'Savings goals and projection' },
      text: {
        id: 'Setor/tarik per target, setoran yang dibutuhkan per bulan (dengan imbal hasil memakai rumus anuitas), dan perkiraan kapan tercapai. Proyeksi 1–3 tahun menghitung saldo bulan demi bulan; halaman Simulasi mencoba skenario seperti DP dan cicilan mobil tanpa mengubah data asli.',
        en: 'Deposits and withdrawals per goal, the monthly amount needed (using the annuity formula when there is a return), and an estimated completion date. The 1–3 year projection computes the balance month by month; the Simulation page tries scenarios such as a car down payment and instalments without touching real data.',
      },
    },
    {
      title: { id: 'Rekening dan Sync', en: 'Accounts and Sync' },
      text: {
        id: 'Saldo rekening diketik sendiri dan langsung terlihat di HP pasangan (Supabase Realtime). Transaksi yang ditandai rekeningnya ditampilkan sebagai “belum masuk saldo”, dan tombol Sync menambahkannya ke saldo.',
        en: 'Account balances are typed in by hand and show up on the partner’s phone right away (Supabase Realtime). Transactions tagged with an account are shown as “not yet in the balance”, and the Sync button adds them.',
      },
    },
  ],

  architecture: {
    flow: [
      {
        name: 'Browser (React + PWA)',
        detail: {
          id: 'Halaman, rumus keuangan, dan pembaca resi berjalan di perangkat.',
          en: 'Pages, finance formulas, and the receipt reader run on the device.',
        },
      },
      {
        name: 'TanStack Query',
        detail: {
          id: 'Cache per rumah tangga; setiap perubahan me-refresh tabel terkait.',
          en: 'A cache per household; every change refreshes the related tables.',
        },
      },
      {
        name: 'Supabase Auth + PostgREST',
        detail: {
          id: 'Login per orang; query langsung dengan kunci publik (anon).',
          en: 'Per-person sign-in; direct queries with the public (anon) key.',
        },
      },
      {
        name: 'Postgres 17 + RLS',
        detail: {
          id: 'Policy per tabel, constraint unik, dan fungsi RPC (copy_plan, sync_account).',
          en: 'Per-table policies, unique constraints, and RPC functions (copy_plan, sync_account).',
        },
      },
    ],
    notes: {
      id: [
        'Tidak ada server aplikasi: browser memanggil Supabase langsung, dan hanya kunci publik yang ada di frontend. Semua batasan akses ditegakkan database lewat Row Level Security.',
        'Aturan yang tidak boleh dilanggar (tagihan sekali sebulan, gaji otomatis sekali per bulan, kategori milik rumah tangga sendiri) dijaga constraint dan foreign key komposit, bukan hanya di UI.',
        'Rumus THR, bonus, target, dan proyeksi adalah fungsi murni di src/lib/finance dengan unit test, jadi hasilnya sama di aplikasi dan di demo.',
      ],
      en: [
        'There is no application server: the browser calls Supabase directly and only the public key is in the frontend. All access rules are enforced by the database through Row Level Security.',
        'Rules that must never break (a bill once a month, one automatic salary per month, categories from the same household) are enforced by constraints and composite foreign keys, not only in the UI.',
        'The THR, bonus, goal, and projection formulas are pure functions in src/lib/finance with unit tests, so the app and the demo compute the same results.',
      ],
    },
  },

  stack: [
    { layer: { id: 'Frontend', en: 'Frontend' }, items: ['React 18', 'TypeScript (strict)', 'Vite 5', 'React Router 6', 'TanStack Query 5'] },
    { layer: { id: 'Tampilan', en: 'UI' }, items: ['Rupa Design System (brand latte)', 'Tailwind CSS 3', 'Recharts', 'lucide-react'] },
    { layer: { id: 'Data & login', en: 'Data & auth' }, items: ['Supabase (Postgres 17, Auth, Realtime)', 'Row Level Security', 'Fungsi RPC PL/pgSQL'] },
    { layer: { id: 'File', en: 'Files' }, items: ['pdf.js', 'Tesseract.js', 'SheetJS', 'Papa Parse'] },
    { layer: { id: 'Kualitas', en: 'Quality' }, items: ['Vitest (98 unit test)', 'Uji RLS di Postgres 17 sementara (Docker)', 'ESLint', 'Prettier', 'GitHub Actions'] },
    { layer: { id: 'Deploy', en: 'Deployment' }, items: ['Vercel', 'Supabase (region Singapura)'] },
  ],

  decisions: [
    {
      title: { id: 'Tanpa backend, keamanan di database', en: 'No backend, security in the database' },
      text: {
        id: 'Untuk aplikasi keluarga, server sendiri hanya menambah biaya dan hal yang harus dirawat. Browser memanggil Supabase langsung, dan setiap tabel dilindungi RLS: akun hanya bisa membaca dan mengubah data rumah tangganya sendiri. Policy-nya diuji otomatis, termasuk orang luar, anggota biasa, dan created_by yang tidak bisa dipalsukan.',
        en: 'For a family app, a server of its own only adds cost and upkeep. The browser calls Supabase directly, and every table is protected by RLS: an account can only read and change its own household’s data. The policies are tested automatically, covering outsiders, regular members, and a created_by that cannot be forged.',
      },
    },
    {
      title: { id: 'Rumus keuangan sebagai fungsi murni', en: 'Finance formulas as pure functions' },
      text: {
        id: 'THR, bonus prorata, setoran target, dan proyeksi dihitung di fungsi tanpa efek samping dengan tanggal berupa string YYYY-MM-DD, sehingga tidak bergeser karena zona waktu dan mudah diuji kasus tepinya (masuk kerja tengah bulan, tahun kabisat, cutoff THR).',
        en: 'THR, prorated bonuses, goal deposits, and projections are side-effect-free functions with dates as YYYY-MM-DD strings, so nothing shifts with the time zone and edge cases are easy to test (starting mid-month, leap years, the THR cut-off).',
      },
    },
    {
      title: { id: 'Resi dibaca di perangkat', en: 'Receipts read on the device' },
      text: {
        id: 'Bukti transfer berisi nomor rekening dan nama. Daripada mengunggahnya ke layanan OCR, PDF dibaca dengan pdf.js dan gambar dengan Tesseract langsung di browser; hasilnya selalu ditinjau dulu sebelum disimpan.',
        en: 'Receipts contain account numbers and names. Instead of uploading them to an OCR service, PDFs are read with pdf.js and images with Tesseract in the browser, and the result is always reviewed before saving.',
      },
    },
    {
      title: { id: 'Saldo diketik, bukan dihitung', en: 'Balances typed in, not computed' },
      text: {
        id: 'Saldo yang dihitung dari transaksi cepat meleset karena ada transaksi yang lupa dicatat. Saldo rekening diketik sesuai aplikasi bank, lalu transaksi yang dicatat sesudahnya ditampilkan sebagai selisih dan baru ditambahkan saat Sync.',
        en: 'A balance computed from transactions drifts as soon as something is not recorded. Account balances are typed in as the bank app shows them; transactions recorded afterwards are shown as a pending difference and only added on Sync.',
      },
    },
    {
      title: { id: 'Demo publik tanpa data asli', en: 'A public demo without real data' },
      text: {
        id: 'Aplikasi aslinya berisi data keuangan keluarga, jadi demo dibangun terpisah (npm run build:demo): klien Supabase diganti versi di browser yang menyimpan data di localStorage, diisi keluarga fiktif yang tanggalnya mengikuti hari ini dan diatur ulang setiap hari. Tidak ada kunci Supabase di bundle demo.',
        en: 'The real app holds a family’s finances, so the demo is a separate build (npm run build:demo): the Supabase client is swapped for an in-browser one that keeps data in localStorage, seeded with a fictional family whose dates follow today and reset daily. No Supabase keys are in the demo bundle.',
      },
    },
  ],

  guide: [
    {
      image: 'step-1.jpg',
      title: { id: 'Buka Ringkasan', en: 'Open the overview' },
      text: {
        id: 'Demo langsung masuk sebagai Dimas di Keluarga Pratama. Ringkasan menunjukkan sisa saldo, batas belanja bulan ini, dan rekening. Rekening dengan transaksi “belum masuk saldo” bisa di-Sync untuk memperbarui saldonya.',
        en: 'The demo signs you in as Dimas of the Pratama family. The overview shows the remaining balance, this month’s spending limit, and the accounts. An account with transactions “not yet in the balance” can be synced to update it.',
      },
    },
    {
      image: 'step-2.jpg',
      title: { id: 'Catat transaksi', en: 'Record a transaction' },
      text: {
        id: 'Klik Catat, isi nominal, kategori, siapa yang membayar, rekening, dan catatan, lalu Simpan. Di ponsel, tombol + di navigasi bawah membuka form yang sama.',
        en: 'Click Catat (Record), fill in the amount, category, who paid, the account, and a note, then save. On a phone, the + button in the bottom bar opens the same form.',
      },
    },
    {
      image: 'step-3.jpg',
      title: { id: 'Catat dari resi', en: 'Record from a receipt' },
      text: {
        id: 'Di Transaksi, klik Dari resi lalu pilih PDF atau screenshot bukti bayar. Tanggal, nominal, catatan, dan rekening terisi otomatis; pilih kategorinya lalu simpan. Pemakaian pertama mengunduh pembaca gambar.',
        en: 'On Transaksi, click Dari resi (From receipt) and pick a PDF or screenshot. The date, amount, note, and account are filled in; choose a category and save. The first use downloads the image reader.',
      },
    },
    {
      image: 'step-4.jpg',
      title: { id: 'Bayar tagihan rutin', en: 'Pay a recurring bill' },
      text: {
        id: 'Di Tagihan Rutin, tagihan yang lewat jatuh tempo ditandai merah. Tekan Bayar, periksa nominal dan tanggal, lalu Simpan: tagihan ditandai dibayar dan transaksinya tercatat.',
        en: 'On Tagihan Rutin (Recurring bills), overdue bills are marked red. Press Bayar (Pay), check the amount and date, then save: the bill is marked paid and its transaction is recorded.',
      },
    },
    {
      image: 'step-5.jpg',
      title: { id: 'Bandingkan rencana dengan realisasi', en: 'Compare the plan with actuals' },
      text: {
        id: 'Rencana Bulanan menampilkan anggaran per kategori dengan bar realisasi; kategori yang melewati anggaran berwarna merah. Di kanan ada perkiraan pemasukan dan alokasi ke setiap target tabungan.',
        en: 'Rencana Bulanan (Monthly plan) shows each category’s budget with an actuals bar; categories over budget turn red. On the right are expected income and the allocation to each savings goal.',
      },
    },
    {
      image: 'step-6.jpg',
      title: { id: 'Hitung THR dan bonus', en: 'Work out THR and bonuses' },
      text: {
        id: 'Gaji & Bonus menunjukkan gaji, THR, dan bonus setiap orang beserta jadwal pemasukan setahun. Kalkulator prorata bisa diisi dari data, misalnya bonus akhir tahun Sekar yang baru bekerja sejak Februari, dan menunjukkan langkah hitungnya.',
        en: 'Gaji & Bonus shows each person’s salary, THR, and bonuses plus a yearly income schedule. The proration calculator can be filled from the data, for example Sekar’s year-end bonus after starting in February, and shows each step of the calculation.',
      },
    },
    {
      image: 'step-7.jpg',
      title: { id: 'Pantau target tabungan', en: 'Track savings goals' },
      text: {
        id: 'Setiap target menunjukkan progres, setoran yang dibutuhkan per bulan, rata-rata setoran 3 bulan, dan perkiraan kapan tercapai. Setor dan Tarik mencatat perubahan saldonya.',
        en: 'Each goal shows its progress, the monthly deposit needed, the three-month average, and an estimated completion date. Setor and Tarik record deposits and withdrawals.',
      },
    },
    {
      image: 'step-8.jpg',
      title: { id: 'Lihat proyeksi', en: 'See the projection' },
      text: {
        id: 'Proyeksi menghitung saldo tabungan bulan demi bulan untuk 1, 2, atau 3 tahun dari gaji, THR/bonus di bulan cairnya, dan pengeluaran. Saldo awal dan pengeluaran harian bisa diubah untuk mencoba skenario lain.',
        en: 'Proyeksi (Projection) computes the savings balance month by month for 1, 2, or 3 years from salaries, THR/bonuses in the month they are paid, and spending. The starting balance and daily spending can be changed to try other scenarios.',
      },
    },
  ],

  limits: {
    id: [
      'Demo live berjalan tanpa Supabase: data contoh tersimpan di localStorage browser masing-masing pengunjung dan diatur ulang setiap hari. Login, undangan pasangan, dan Realtime antar-HP hanya ada di versi aslinya.',
      'Versi asli memakai Supabase gratis, yang di-pause bila tidak dipakai sekitar seminggu; data tidak hilang, tetapi project harus di-restore dari dashboard. Email konfirmasi bawaan Supabase juga dibatasi beberapa email per jam.',
      'Pembacaan resi mengandalkan pola umum bukti transfer; resi dengan tata letak tidak biasa bisa salah baca, jadi hasilnya selalu ditinjau sebelum disimpan.',
      'Belum ada sinkronisasi otomatis dengan bank: saldo dan mutasi masuk lewat ketik manual, resi, atau import file.',
    ],
    en: [
      'The live demo runs without Supabase: sample data lives in each visitor’s browser localStorage and resets every day. Sign-in, partner invites, and Realtime between phones exist only in the real app.',
      'The real app uses Supabase’s free tier, which pauses after about a week without use; data is kept, but the project has to be restored from the dashboard. Supabase’s built-in confirmation emails are also limited to a few per hour.',
      'Receipt reading relies on common receipt patterns; unusual layouts can be misread, which is why every result is reviewed before saving.',
      'There is no automatic bank sync: balances and statements come in by typing, receipts, or file import.',
    ],
  },

  next: {
    id: [
      'Rekap bulanan otomatis dan pengingat tagihan lewat notifikasi push.',
      'Lampiran resi yang tersimpan bersama transaksinya (Supabase Storage dengan policy per rumah tangga).',
      'Laporan tahunan untuk persiapan SPT pajak.',
    ],
    en: [
      'Automatic monthly recaps and bill reminders through push notifications.',
      'Receipt attachments stored with their transactions (Supabase Storage with per-household policies).',
      'A yearly report to prepare the annual tax return.',
    ],
  },
}
