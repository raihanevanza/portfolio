export default {
  slug: 'main-yuk',
  title: 'Main Yuk',
  hero: '/projects/main-yuk/cover.jpg',
  tagline: {
    id: 'Satu perangkat, 12 party game, 245 kartu untuk nongkrong bareng.',
    en: 'One device, 12 party games, 245 cards for hanging out together.',
  },
  role: {
    id: 'Proyek pribadi · mesin game, frontend, mobile, API, dan komponen Rupa',
    en: 'Personal project · game engine, frontend, mobile, API, and Rupa components',
  },
  platforms: {
    id: 'Web responsif dan React Native; demo portfolio berbasis browser',
    en: 'Responsive web and React Native; browser-based portfolio demo',
  },
  links: [{ label: { id: 'Demo live', en: 'Live demo' }, url: 'https://raihan-evanza-main-yuk.vercel.app' }],
  tech: [
    'React',
    'React Native',
    'TypeScript',
    'Rupa',
    'WatermelonDB',
    'RxJS',
    'Ruby on Rails',
    'PostgreSQL',
    'Vite',
    'Vitest',
    'Playwright',
  ],
  overview: {
    id: [
      'Main Yuk membuat satu HP menjadi alat main bersama. Pilih game, isi nama pemain, lalu ikuti pergiliran di layar. Tidak perlu setiap orang memasang aplikasi atau membuat akun.',
      'Mesin game TypeScript dipakai bersama oleh web dan mobile. Semua layar dan form disediakan Rupa melalui props dan callback. Paket serta snapshot sesi tersimpan lokal dengan WatermelonDB; aplikasi lengkap dapat menyinkronkannya lewat Rails dan PostgreSQL.',
      'Demo portfolio memakai aplikasi dan komponen yang sama dalam build terpisah tanpa API atau login. Dua belas game dan 245 kartu tersedia langsung; paket kustom dan sesi tetap tersimpan setelah reload pada browser yang sama.',
    ],
    en: [
      'Main Yuk turns one phone into a shared game device. Pick a game, enter player names, and follow the turns on screen. Each player does not need an app installation or an account.',
      'A shared TypeScript game engine powers web and mobile. Rupa supplies every screen and form through props and callbacks. WatermelonDB keeps packs and session snapshots locally; the full app can synchronize them through Rails and PostgreSQL.',
      'The portfolio demo uses the same app and components in a separate build without an API or sign-in. Twelve games and 245 cards are available immediately; custom packs and sessions survive reloads in the same browser.',
    ],
  },
  features: [
    {
      title: { id: '12 pilihan permainan', en: '12 games' },
      text: {
        id: 'Tebak Kata, Impostor, Siapa Paling…, Peragakan!, Jawab 5 Detik, Jujur atau Tantangan, Pilih Mana?, Sambung Cerita, Kuis Kilat, Jangan Bilang!, Ingat Urutan, dan Sambung Kata.',
        en: 'Word guessing, Impostor, Most Likely To, Charades, Five-Second Answers, Truth or Dare, Would You Rather, Story Chain, Quick Quiz, Forbidden Words, Sequence Memory, and Word Chain.',
      },
    },
    {
      title: { id: 'Paket sendiri', en: 'Custom packs' },
      text: {
        id: '245 kartu bawaan, editor paket, favorit, serta validasi format kuis dan kata terlarang.',
        en: '245 built-in cards, a pack editor, favorites, and format validation for quizzes and forbidden-word cards.',
      },
    },
    {
      title: { id: 'Oper HP dengan aman', en: 'Private handoffs' },
      text: {
        id: 'Peran dan pilihan rahasia baru terlihat setelah pemain yang dituju menekan siap.',
        en: 'Secret roles and private choices appear only after the intended player confirms they are ready.',
      },
    },
    {
      title: { id: 'Timer dan skor', en: 'Timers and scoring' },
      text: {
        id: 'Batas waktu berupa deadline dalam snapshot; reload tidak mengulang jatah waktu. Mesin game memvalidasi aksi dan memperbarui skor.',
        en: 'Deadlines live in session snapshots, so reloads do not restart a turn timer. The engine validates actions and updates scores.',
      },
    },
    {
      title: { id: 'Lanjutkan sesi', en: 'Resume a session' },
      text: {
        id: 'Riwayat menyimpan progres dan hasil. Sesi aktif dapat dibuka lagi setelah halaman dimuat ulang.',
        en: 'History stores progress and results. An active session can be reopened after reloading the page.',
      },
    },
    {
      title: { id: 'UI bersama di Rupa', en: 'Shared UI in Rupa' },
      text: {
        id: 'PartyApp, PartyBoard, dan PartyNotice tersedia untuk web dan React Native. Host menangani data serta aturan, lalu mengirim props.',
        en: 'PartyApp, PartyBoard, and PartyNotice are available for web and React Native. The host owns data and rules and passes props to the UI.',
      },
    },
  ],
  architecture: {
    flow: [
      { name: 'Rupa UI', detail: { id: 'Layar, form, dialog, dan input', en: 'Screens, forms, dialogs, and inputs' } },
      {
        name: 'TypeScript',
        detail: { id: 'Controller, presenter, dan transisi game', en: 'Controller, presenter, and game transitions' },
      },
      {
        name: 'WatermelonDB',
        detail: { id: 'Paket, kartu, dan snapshot sesi lokal', en: 'Local packs, cards, and session snapshots' },
      },
      {
        name: 'Rails + PostgreSQL',
        detail: { id: 'Sinkronisasi akun; hanya aplikasi lengkap', en: 'Account sync; full app only' },
      },
    ],
    notes: {
      id: [
        'Demo portfolio berhenti di penyimpanan browser; tidak mengirim request API.',
        'Web dan mobile memakai mesin game serta kontrak props yang sama.',
        'Snapshot Rupa dibundel sehingga build portfolio tidak memerlukan repo Rupa atau Main Yuk di server deploy.',
      ],
      en: [
        'The portfolio demo uses browser storage and sends no API requests.',
        'Web and mobile share a game engine and matching prop contracts.',
        'Rupa is bundled in the demo snapshot, so deploying the portfolio needs neither the Rupa nor Main Yuk repository.',
      ],
    },
  },
  stack: [
    { layer: { id: 'Antarmuka', en: 'Interface' }, items: ['React', 'React Native', 'Rupa', 'TypeScript'] },
    { layer: { id: 'Data lokal', en: 'Local data' }, items: ['WatermelonDB', 'IndexedDB / SQLite', 'RxJS'] },
    { layer: { id: 'Backend lengkap', en: 'Full backend' }, items: ['Ruby on Rails', 'PostgreSQL', 'Docker'] },
    { layer: { id: 'Pengujian', en: 'Testing' }, items: ['Vitest', 'Playwright', 'Rails tests', 'Rupa Storybook'] },
  ],
  decisions: [
    {
      title: { id: 'Mesin game tanpa UI', en: 'Game engine independent of UI' },
      text: {
        id: 'Transisi snapshot dan presenter terpisah dari rendering sehingga aturan dapat diuji sekali dan dipakai kedua platform.',
        en: 'Snapshot transitions and presenters are separate from rendering, allowing rules to be tested once and used on both platforms.',
      },
    },
    {
      title: { id: 'Rupa menerima props', en: 'Rupa receives props' },
      text: {
        id: 'Rupa tidak mengakses database atau API. Input teks, papan permainan, dan mode lokal dikendalikan melalui kontrak data serta callback.',
        en: 'Rupa never accesses the database or API. Text inputs, game boards, and local mode are controlled through data contracts and callbacks.',
      },
    },
    {
      title: { id: 'Demo statis terpisah', en: 'Separate static demo' },
      text: {
        id: 'Build demo menonaktifkan akun dan service worker, memakai namespace data khusus, dan dibundel dalam portfolio agar deploy tidak membutuhkan backend.',
        en: 'The demo build disables accounts and service workers, uses its own data namespace, and ships inside the portfolio so deployment needs no backend.',
      },
    },
  ],
  guide: [
    {
      title: { id: 'Buka demo', en: 'Open the demo' },
      text: {
        id: 'Tekan tombol Demo pada proyek Main Yuk. Katalog langsung terbuka tanpa login.',
        en: 'Select Demo on the Main Yuk project. The catalog opens immediately without sign-in.',
      },
      image: 'catalog.jpg',
    },
    {
      title: { id: 'Pilih game dan pemain', en: 'Choose a game and players' },
      text: {
        id: 'Buka salah satu game, pilih paket, dan ubah nama pemain. Jumlah pemain mengikuti aturan game.',
        en: 'Open a game, select a pack, and change player names. Player limits follow that game’s rules.',
      },
      image: 'setup.jpg',
    },
    {
      title: { id: 'Ikuti instruksi', en: 'Follow the instructions' },
      text: {
        id: 'Tekan Gas, mulai main! lalu oper HP sesuai giliran. Untuk Sambung Kata, ketik kata yang dimulai huruf terakhir kata sebelumnya.',
        en: 'Select Gas, mulai main! and pass the phone as instructed. For Word Chain, type a word starting with the last letter of the previous word.',
      },
      image: 'play.jpg',
    },
    {
      title: { id: 'Coba paket sendiri', en: 'Try a custom pack' },
      text: {
        id: 'Buka Paketku dan Bikin paket. Isi judul, jenis game, serta sedikitnya lima kartu mengikuti petunjuk format.',
        en: 'Open Paketku and Bikin paket. Enter a title, game type, and at least five cards following the format hints.',
      },
      image: 'packs.jpg',
    },
    {
      title: { id: 'Lanjutkan setelah reload', en: 'Resume after reloading' },
      text: {
        id: 'Kembali ke beranda atau buka Riwayat, lalu pilih sesi yang ingin dilanjutkan. Gunakan browser dan profil yang sama.',
        en: 'Return home or open Riwayat, then choose a session to continue. Use the same browser and profile.',
      },
    },
  ],
  limits: {
    id: [
      'Permainan bergantian pada satu perangkat, bukan multiplayer jaringan.',
      'Demo menggunakan browser lokal, tanpa login atau sinkronisasi akun. Data dapat hilang bila penyimpanan situs dihapus.',
      'Demo membutuhkan localhost atau HTTPS, IndexedDB, dan Web Locks. Halaman perlu koneksi ketika dimuat ulang karena tidak memasang service worker.',
      'Penerimaan kata pada Sambung Kata memvalidasi format, huruf awal, dan pengulangan; kelompok pemain menentukan apakah kata benar ada dalam kamus.',
      'UI demo berbahasa Indonesia. Dokumentasi proyek tersedia dalam Bahasa Indonesia dan Inggris.',
    ],
    en: [
      'Games share one device and do not provide network multiplayer.',
      'The demo uses local browser storage, without sign-in or account sync. Clearing site storage removes its data.',
      'The demo requires localhost or HTTPS, IndexedDB, and Web Locks. Reloading needs a connection because no service worker is installed.',
      'Word Chain validates formatting, starting letters, and repeated words; the group judges whether a word exists in the dictionary.',
      'The demo UI is in Indonesian. Project documentation is available in Indonesian and English.',
    ],
  },
}
