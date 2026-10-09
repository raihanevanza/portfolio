// Isi PDF penjelasan proyek Market Live. Skema: lihat README.md di folder ini.
// Isi mengikuti versi yang live di Vercel (commit e1c3fe0, 10 Okt 2026).
export default {
  slug: 'market-live',
  title: 'Market Live',
  hero: '/projects/market-live/cover.jpg',
  tagline: {
    id: 'Dashboard harga live untuk 80 instrumen (saham IDX & AS, indeks, kripto, emas termasuk Antam, komoditas, dan kurs), dengan rencana trading yang aturannya dipilih lewat backtest 5 tahun, untuk investor ritel Indonesia.',
    en: 'A live price dashboard for 80 instruments (IDX & US stocks, indices, crypto, gold including Antam bullion, commodities, and FX), with a trading plan whose rule was chosen through a 5-year backtest, for Indonesian retail investors.',
  },
  role: {
    id: 'Proyek pribadi · desain, frontend, backend serverless, riset data, deploy',
    en: 'Personal project · design, frontend, serverless backend, data research, deployment',
  },
  platforms: {
    id: 'Web (desktop & ponsel), tanpa akun',
    en: 'Web (desktop & mobile), no account needed',
  },
  links: [
    { label: { id: 'Demo live', en: 'Live demo' }, url: 'https://market-live-raihan-evanza.vercel.app' },
  ],
  tech: ['React 19', 'Vite', 'Vercel Functions', 'Vercel Cron & Blob', 'TradingView Lightweight Charts', 'WebSocket', 'node:test'],

  overview: {
    id: [
      'Investor ritel di Indonesia biasanya membuka beberapa aplikasi sekaligus: satu untuk saham, satu untuk kripto, satu lagi untuk harga emas Antam dan kurs rupiah. Market Live menggabungkan 80 instrumen (8 indeks, 30 saham IDX, 11 saham AS, 12 kripto, 9 emas & komoditas, 10 kurs) dalam satu dashboard yang bergerak live.',
      'Semua sumber datanya gratis dan tanpa API key, dan aplikasinya berjalan di paket gratis Vercel. Kripto dan emas spot mengalir real-time lewat WebSocket Binance langsung ke browser; saham, kurs, harga Antam, dan berita diambil lewat Vercel Functions yang di-cache di CDN, dan sebuah job harian menyimpan hasil screener ke Vercel Blob.',
      'Di setiap instrumen ada panel Rencana trading dengan aturan breakout yang dipilih lewat riset 5 tahun dengan data uji terpisah. Hasil riset ditampilkan apa adanya di aplikasi, termasuk bahwa aturan itu belum signifikan secara statistik dan sengaja tidak dipakai di saham IDX dan kurs.',
    ],
    en: [
      'Retail investors in Indonesia usually juggle several apps: one for stocks, one for crypto, and another for Antam gold prices and the rupiah rate. Market Live brings 80 instruments (8 indices, 30 IDX stocks, 11 US stocks, 12 cryptocurrencies, 9 gold & commodity instruments, 10 FX pairs) into a single dashboard that updates live.',
      'Every data source is free and needs no API key, and the app runs on the Vercel free tier. Crypto and spot gold stream in real time over a Binance WebSocket straight into the browser; stocks, FX, Antam prices, and news come through Vercel Functions cached at the CDN, and a daily job stores screener results in Vercel Blob.',
      'Every instrument has a Trading plan panel built on a breakout rule chosen through a 5-year study with held-out test data. The research results are shown in the app as they are, including the fact that the rule is not yet statistically significant and is deliberately not applied to IDX stocks or FX.',
    ],
  },

  features: [
    {
      title: { id: 'Harga kripto & emas real-time', en: 'Real-time crypto & gold prices' },
      text: {
        id: '12 kripto (BTC, ETH, SOL, XRP, dan lainnya) serta emas spot (PAX Gold) bergerak setiap tick lewat WebSocket Binance, dengan kilat hijau/merah saat harga berubah. Saham, indeks, komoditas, dan kurs dari Yahoo Finance diperbarui tiap 15 detik.',
        en: '12 cryptocurrencies (BTC, ETH, SOL, XRP, and more) and spot gold (PAX Gold) update on every tick over the Binance WebSocket, flashing green or red as prices change. Stocks, indices, commodities, and FX from Yahoo Finance refresh every 15 seconds.',
      },
    },
    {
      title: { id: 'Watchlist 80 instrumen', en: 'An 80-instrument watchlist' },
      text: {
        id: 'Tab Indeks / Saham / Kripto / Komoditas / Kurs, saham dipisah per bursa (IDX & AS), pencarian, sparkline 1 hari, dan favorit (★) yang tersimpan di browser. Ada juga tema terang/gelap, dan simbol terpilih tersimpan di URL (mis. #BBCA.JK) sehingga bisa dibagikan.',
        en: 'Indices / Stocks / Crypto / Commodities / FX tabs, stocks split by exchange (IDX & US), search, 1-day sparklines, and favourites (★) saved in the browser. There is also a light/dark theme, and the selected symbol is kept in the URL (e.g. #BBCA.JK) so it can be shared.',
      },
    },
    {
      title: { id: 'Grafik live & prakiraan statistik', en: 'Live charts & statistical projection' },
      text: {
        id: 'Grafik 1 hari sampai 1 tahun yang titik terakhirnya ikut bergerak live, plus rentang 52 minggu. Tombol Prakiraan menambahkan garis tren dan kisaran 80% dari model Holt dengan tren teredam, dengan catatan jelas bahwa ini bukan ramalan.',
        en: 'Charts from 1 day to 1 year whose last point moves live, plus the 52-week range. The Prakiraan (projection) button adds a trend line and an 80% band from a damped-trend Holt model, with a clear note that it is not a prediction.',
      },
    },
    {
      title: { id: 'Rencana trading', en: 'Trading plan' },
      text: {
        id: 'Aturan breakout 55 hari dengan trailing stop 3×ATR: status hari ini (sinyal aktif, menunggu breakout, atau di bawah EMA200), level pemicu dan stop awal yang digambar di grafik, serta kalkulator ukuran posisi dari modal dan % risiko. Saham IDX, kurs, dan emas Antam tidak diberi sinyal karena tidak ada aturan yang lolos uji di pasar itu.',
        en: 'A 55-day breakout rule with a 3×ATR trailing stop: today\'s status (active signal, waiting for a breakout, or below the EMA200), the trigger and initial stop drawn on the chart, and a position-size calculator from capital and % risk. IDX stocks, FX, and Antam gold get no signal because no rule passed testing in those markets.',
      },
    },
    {
      title: { id: 'Backtest 5 tahun per instrumen', en: '5-year backtest per instrument' },
      text: {
        id: 'Aturan yang sama disimulasikan di instrumen yang sedang dibuka: kurva ekuitas, rasio menang, rata-rata R, drawdown, trade terakhir, dan perbandingan dengan beli-lalu-tahan. Contoh NVDA: 19 trade, +0,74R per trade, sementara beli-lalu-tahan di periode yang sama naik jauh lebih tinggi.',
        en: 'The same rule is simulated on the instrument being viewed: equity curve, win rate, average R, drawdown, recent trades, and a comparison with buy-and-hold. Example for NVDA: 19 trades at +0.74R per trade, while buy-and-hold over the same period gained far more.',
      },
    },
    {
      title: { id: 'Screener sinyal & forward test', en: 'Signal screener & forward test' },
      text: {
        id: 'Screener mengurutkan semua instrumen yang dicakup aturan dari yang paling dekat ke level pemicu, dengan jarak dihitung dari harga live. Forward test mencatat setiap sinyal baru sejak 10 Okt 2026 dengan entry dan stop yang dibekukan, sehingga hasilnya tidak bisa disesuaikan belakangan.',
        en: 'The screener ranks every instrument the rule covers by how close it is to its trigger level, with the distance computed from live prices. The forward test records every new signal since 10 Oct 2026 with frozen entry and stop levels, so its results cannot be adjusted afterwards.',
      },
    },
    {
      title: { id: 'Harga emas Antam lengkap', en: 'Full Antam gold prices' },
      text: {
        id: 'Harga jual dan buyback Antam 0,5–100 g, selisih jual–buyback, premi terhadap emas spot, dan histori harian yang dicatat sendiri karena Galeri24 tidak menyediakannya. Contoh 9 Okt 2026: 1 g dijual Rp2.611.000, premi +8,5% di atas spot, selisih ke buyback 11,3%.',
        en: 'Antam sell and buyback prices for 0.5–100 g, the sell–buyback spread, the premium over spot gold, and a daily history recorded by the app because Galeri24 does not provide one. Example on 9 Oct 2026: 1 g sold at Rp2,611,000, an 8.5% premium over spot and an 11.3% spread to buyback.',
      },
    },
    {
      title: { id: 'Kalkulator konversi', en: 'Converter' },
      text: {
        id: 'Konversi antara rupiah, 8 mata uang asing, BTC/ETH, emas spot per gram, dan emas Antam (harga jual atau buyback), semuanya memakai harga live.',
        en: 'Converts between rupiah, 8 foreign currencies, BTC/ETH, spot gold per gram, and Antam gold (sell or buyback price), all at live prices.',
      },
    },
    {
      title: { id: 'Penggerak pasar, perbandingan, dividen', en: 'Market movers, comparison, dividends' },
      text: {
        id: '5 naik tertinggi dan 5 turun terdalam per pasar dengan bar naik/tetap/turun, grafik perbandingan hingga 6 instrumen dalam % perubahan (1 bulan sampai 5 tahun), serta yield dividen 12 bulan dan peringkat yield tertinggi saham IDX dan AS.',
        en: 'Top 5 gainers and losers per market with an up/flat/down bar, a comparison chart of up to 6 instruments in % change (1 month to 5 years), and 12-month dividend yield plus a ranking of the highest-yielding IDX and US stocks.',
      },
    },
    {
      title: { id: 'Berita pasar', en: 'Market news' },
      text: {
        id: 'Berita dari RSS CNBC Indonesia, Kontan, dan Antara, diperbarui tiap 10 menit, dengan filter berita yang terkait instrumen yang sedang dibuka.',
        en: 'News from the CNBC Indonesia, Kontan, and Antara RSS feeds, refreshed every 10 minutes, with a filter for stories related to the instrument being viewed.',
      },
    },
  ],

  architecture: {
    flow: [
      {
        name: 'Binance (WebSocket + REST)',
        detail: {
          id: 'Kripto & PAX Gold, diakses langsung dari browser',
          en: 'Crypto & PAX Gold, accessed directly from the browser',
        },
      },
      {
        name: 'Yahoo · Galeri24 · RSS',
        detail: {
          id: 'Saham, indeks, kurs, dividen; tabel Antam; berita',
          en: 'Stocks, indices, FX, dividends; Antam table; news',
        },
      },
      {
        name: 'Vercel Functions + Cron',
        detail: {
          id: '/api/yahoo, history, antam, news, dividends, data; job harian 04.30 UTC',
          en: '/api/yahoo, history, antam, news, dividends, data; daily job at 04:30 UTC',
        },
      },
      {
        name: 'Vercel CDN · Blob',
        detail: {
          id: 'Cache s-maxage 15 dtk–12 jam; hasil job harian',
          en: 's-maxage cache 15 s–12 h; daily job results',
        },
      },
      {
        name: 'Browser (React)',
        detail: {
          id: 'Gabung kuotasi, grafik, prakiraan, rencana trading & backtest',
          en: 'Merges quotes; charts, projection, trading plan & backtest',
        },
      },
    ],
    notes: {
      id: [
        'Binance membuka CORS dan WebSocket untuk publik, jadi kripto dan emas spot mengalir langsung dari Binance ke browser tanpa server perantara.',
        'Yahoo Finance tidak mengirim header CORS, Galeri24 tidak punya API, dan RSS berita perlu di-parse, jadi semuanya diambil di Vercel Functions (region Singapura). CDN menyimpan respons sesuai seberapa cepat datanya berubah: kuotasi 15 detik, histori grafik 1 menit–1 jam, Antam 30 menit, berita 10 menit, dividen 12 jam.',
        'Vercel Cron menjalankan job harian pukul 04.30 UTC (±11.30 WIB): menghitung screener dan forward test dari bar harian yang sudah final, lalu mencatat harga Antam hari itu. Hasilnya disimpan sebagai JSON di Vercel Blob privat dan dibaca lewat /api/data.',
        'Rencana trading dan backtest dihitung di browser dari histori harian 5 tahun, memakai simulator yang sama dengan skrip riset dan job harian.',
      ],
      en: [
        'Binance allows public CORS and WebSocket access, so crypto and spot gold flow from Binance straight to the browser with no server in between.',
        'Yahoo Finance sends no CORS headers, Galeri24 has no API, and the news RSS feeds need parsing, so all of them are fetched in Vercel Functions (Singapore region). The CDN caches each response according to how fast the data changes: quotes 15 seconds, chart history 1 minute–1 hour, Antam 30 minutes, news 10 minutes, dividends 12 hours.',
        'Vercel Cron runs a daily job at 04:30 UTC (about 11:30 Jakarta time): it computes the screener and forward test from finalized daily bars, then records that day\'s Antam price. The results are stored as JSON in a private Vercel Blob store and read through /api/data.',
        'The trading plan and backtest are computed in the browser from 5 years of daily history, using the same simulator as the research scripts and the daily job.',
      ],
    },
  },

  stack: [
    {
      layer: { id: 'Frontend', en: 'Frontend' },
      items: ['React 19 (useReducer, custom hooks)', 'Vite', 'TradingView Lightweight Charts 5', 'Plain CSS (responsive, light/dark)'],
    },
    {
      layer: { id: 'Backend', en: 'Backend' },
      items: ['Vercel Functions (Node.js 20+)', 'Vercel Cron', 'Vercel Blob (private)', 'Vercel CDN cache (s-maxage, stale-while-revalidate)'],
    },
    {
      layer: { id: 'Sumber data', en: 'Data sources' },
      items: ['Binance public WebSocket & REST', 'Yahoo Finance (chart & spark endpoints)', 'Galeri24 / Pegadaian (HTML scraping)', 'RSS: CNBC Indonesia, Kontan, Antara'],
    },
    {
      layer: { id: 'Kualitas & riset', en: 'Quality & research' },
      items: ['node:test unit tests', 'GitHub Actions CI', 'Node.js backtest scripts'],
    },
  ],

  decisions: [
    {
      title: {
        id: 'Binance langsung dari browser, Yahoo lewat serverless',
        en: 'Binance straight from the browser, Yahoo through serverless',
      },
      text: {
        id: 'Vercel Functions tidak bisa menjadi server WebSocket, tetapi Binance mengizinkan browser menyambung langsung, jadi kripto tetap real-time tanpa server. Yahoo tidak mengizinkan akses dari browser, jadi di-poll lewat Functions; karena data IDX dari Yahoo sudah tertunda ±10 menit, polling 15 detik hampir tidak terasa bedanya dibanding streaming.',
        en: 'Vercel Functions cannot act as a WebSocket server, but Binance lets browsers connect directly, so crypto stays real-time with no server at all. Yahoo blocks browser access, so it is polled through Functions; since Yahoo\'s IDX data is already about 10 minutes delayed, a 15-second poll is barely different from streaming.',
      },
    },
    {
      title: { id: 'Cache CDN dan polling yang berhenti saat tab tersembunyi', en: 'CDN caching, and polling that pauses in hidden tabs' },
      text: {
        id: 'Satu panggilan /api/yahoo mengambil 65 simbol dalam 4 request batch dan di-cache 15 detik (s-maxage=15), jadi berapa pun jumlah pengunjung, Yahoo hanya dipanggil sekitar sekali per 15 detik per region. Satu tab yang terbuka terus memakai sekitar 170 ribu request per bulan dari kuota gratis 1 juta, karena itu polling berhenti lewat event visibilitychange saat tab disembunyikan.',
        en: 'One /api/yahoo call fetches 65 symbols in 4 batch requests and is cached for 15 seconds (s-maxage=15), so no matter how many visitors there are, Yahoo is hit roughly once per 15 seconds per region. A tab left open uses about 170 thousand requests a month out of a free quota of 1 million, so polling stops on the visibilitychange event when the tab is hidden.',
      },
    },
    {
      title: { id: 'Antam dari Galeri24, histori dicatat sendiri', en: 'Antam from Galeri24, with a self-recorded history' },
      text: {
        id: 'logammulia.com memblokir request dari server lewat Cloudflare, jadi harga Antam diambil dari Galeri24 (anak usaha Pegadaian) dengan membaca tabel di HTML-nya. Galeri24 tidak menyimpan histori, jadi job harian mencatat harga setiap hari ke Blob; grafik Antam sementara diperkirakan dari emas spot/gram dikali premi hari ini.',
        en: 'logammulia.com blocks server requests through Cloudflare, so Antam prices come from Galeri24 (a Pegadaian subsidiary) by parsing the table in its HTML. Galeri24 keeps no history, so the daily job records the price to Blob every day; meanwhile the Antam chart is estimated from spot gold per gram times today\'s premium.',
      },
    },
    {
      title: { id: 'Prakiraan Holt yang sengaja sederhana', en: 'A deliberately simple Holt projection' },
      text: {
        id: 'Model Holt dengan tren teredam dijalankan pada log harga di browser; parameternya dipilih dari 96 kombinasi dengan error prediksi satu langkah terkecil, dalam waktu kurang dari 1 milidetik. Kisaran 80% melebar seiring jarak (σ√h), dan panjang prakiraan hanya 20% dari rentang grafik, supaya garis itu tidak dibaca sebagai kepastian.',
        en: 'A damped-trend Holt model runs on log prices in the browser; its parameters are picked from 96 combinations by the lowest one-step-ahead error, in under 1 millisecond. The 80% band widens with distance (σ√h), and the horizon is only 20% of the chart range, so the line is not read as a certainty.',
      },
    },
    {
      title: { id: 'Aturan trading dipilih dengan data uji terpisah', en: 'Trading rule chosen with held-out test data' },
      text: {
        id: 'Data harian 5 tahun (Okt 2021–Okt 2026, 77 instrumen) dibagi menjadi train, validasi, dan ujian akhir yang baru dibuka setelah aturan dikunci; 11 kandidat diuji dengan biaya transaksi per pasar. Aturan lama rugi −0,17R per trade (5.456 trade), sedangkan breakout 55 hari + trailing stop 3×ATR mendapat +0,10R di train dan +0,17R di validasi. Di ujian akhir hasilnya +0,04R di semua pasar dan +0,17R (125 trade, profit factor 1,50, t = 1,59) di pasar yang diberi sinyal.',
        en: 'Five years of daily data (Oct 2021–Oct 2026, 77 instruments) were split into train, validation, and a final test opened only after the rule was locked; 11 candidates were tested with per-market trading costs. The old rule lost −0.17R per trade (5,456 trades), while the 55-day breakout with a 3×ATR trailing stop made +0.10R in train and +0.17R in validation. In the final test it made +0.04R across all markets and +0.17R (125 trades, profit factor 1.50, t = 1.59) on the markets that get signals.',
      },
    },
    {
      title: { id: 'Satu simulator untuk riset, aplikasi, dan forward test', en: 'One simulator for research, app, and forward test' },
      text: {
        id: 'Skrip riset, panel backtest di browser, dan job harian memakai file simulator yang sama, dan unit test memastikan sinyal di hari tertentu tidak memakai data sesudahnya. Dengan begitu angka di aplikasi tidak bisa menyimpang diam-diam dari hasil riset.',
        en: 'The research scripts, the in-browser backtest panel, and the daily job all use the same simulator file, and a unit test checks that a signal on a given day never uses later data. That way the numbers in the app cannot silently drift from the research results.',
      },
    },
  ],

  guide: [
    {
      title: { id: 'Buka dashboard', en: 'Open the dashboard' },
      text: {
        id: 'Buka market-live-raihan-evanza.vercel.app. Halaman langsung menampilkan BTC/USDT; perhatikan harga yang berkedip hijau/merah, chip "Binance live", "Yahoo live", dan "Galeri24 live" di header, dan ticker tape yang berjalan.',
        en: 'Open market-live-raihan-evanza.vercel.app. The page opens on BTC/USDT; watch the price flash green or red, the "Binance live", "Yahoo live", and "Galeri24 live" chips in the header, and the scrolling ticker tape.',
      },
      image: 'step-1.jpg',
    },
    {
      title: { id: 'Pilih saham dan baca grafiknya', en: 'Pick a stock and read its chart' },
      text: {
        id: 'Klik tab "Saham" di watchlist, lalu klik MSFT (Microsoft). Klik "1B" untuk histori 1 bulan; garis putus-putus biru di ujung grafik adalah prakiraan, dengan kisaran 80% di bawah grafik.',
        en: 'Click the "Saham" (Stocks) tab in the watchlist, then click MSFT (Microsoft). Click "1B" for one month of history; the dashed blue line at the end of the chart is the projection, with its 80% range shown below the chart.',
      },
      image: 'step-2.jpg',
    },
    {
      title: { id: 'Baca rencana trading', en: 'Read the trading plan' },
      text: {
        id: 'Gulir ke panel "Rencana trading". Panel menunjukkan status hari ini, level entry, stop awal, dan aturan trailing stop, serta kotak "Bukti riset" yang menyebut hasil ujian akhir dan bahwa hasilnya belum signifikan.',
        en: 'Scroll to the "Rencana trading" (Trading plan) panel. It shows today\'s status, the entry level, initial stop, and trailing-stop rule, plus a "Bukti riset" (research evidence) box with the final-test result and the note that it is not yet significant.',
      },
      image: 'step-3.jpg',
    },
    {
      title: { id: 'Lihat backtest dan hitung ukuran posisi', en: 'View the backtest and size a position' },
      text: {
        id: 'Di bawahnya, "Uji historis" menampilkan kurva ekuitas 5 tahun, rasio menang, dan perbandingan dengan beli-lalu-tahan. Isi "Modal (USD)" dengan 100000 untuk melihat jumlah lembar maksimal pada risiko 1%.',
        en: 'Below it, "Uji historis" (historical test) shows the 5-year equity curve, win rate, and a comparison with buy-and-hold. Enter 100000 in "Modal (USD)" (capital) to see the maximum number of shares at 1% risk.',
      },
      image: 'step-4.jpg',
    },
    {
      title: { id: 'Cek screener dan penggerak pasar', en: 'Check the screener and market movers' },
      text: {
        id: 'Gulir ke "Screener sinyal breakout" untuk melihat instrumen yang paling dekat ke level pemicu. Di "Penggerak pasar", klik "Saham AS" untuk melihat 5 saham naik tertinggi dan turun terdalam.',
        en: 'Scroll to "Screener sinyal breakout" (breakout screener) to see which instruments are closest to their trigger level. In "Penggerak pasar" (market movers), click "Saham AS" to see the top 5 US gainers and losers.',
      },
      image: 'step-5.jpg',
    },
    {
      title: { id: 'Cek harga emas Antam', en: 'Check Antam gold prices' },
      text: {
        id: 'Klik tab "Semua", ketik "antam" di kolom pencarian watchlist, lalu klik "Antam 1g". Panel menampilkan harga jual dan buyback 0,5–100 g, premi terhadap emas spot, dan histori harian; rencana trading menjelaskan kenapa Antam tidak diberi sinyal.',
        en: 'Click the "Semua" (All) tab, type "antam" into the watchlist search box, then click "Antam 1g". The panel shows sell and buyback prices for 0.5–100 g, the premium over spot gold, and the daily history; the trading plan explains why Antam gets no signal.',
      },
      image: 'step-6.jpg',
    },
    {
      title: { id: 'Konversi emas ke rupiah', en: 'Convert gold to rupiah' },
      text: {
        id: 'Gulir ke "Kalkulator konversi", isi Jumlah 10, lalu pilih "Emas Antam (harga jual)" di kolom Dari. Hasilnya langsung tampil dalam rupiah memakai harga hari ini.',
        en: 'Scroll to "Kalkulator konversi" (converter), enter 10 as the amount, then choose "Emas Antam (harga jual)" in the From field. The result appears in rupiah at today\'s price.',
      },
      image: 'step-7.jpg',
    },
    {
      title: { id: 'Baca berita dan ganti tema', en: 'Read the news and switch theme' },
      text: {
        id: 'Di "Berita pasar", klik "Semua" untuk melihat berita terbaru dari CNBC Indonesia, Kontan, dan Antara. Terakhir, klik tombol ☀/☾ di header untuk berganti tema terang atau gelap.',
        en: 'In "Berita pasar" (market news), click "Semua" (All) to see the latest stories from CNBC Indonesia, Kontan, and Antara. Finally, click the ☀/☾ button in the header to switch between light and dark themes.',
      },
      image: 'step-8.jpg',
    },
  ],

  limits: {
    id: [
      'Bukan saran investasi. Semua harga, prakiraan, sinyal, dan hasil backtest hanya untuk informasi dan pembelajaran, dan tidak boleh dijadikan satu-satunya dasar keputusan membeli atau menjual.',
      'Aturan breakout positif di ujian akhir (+0,17R per trade, 125 trade, menang 40%), tetapi dengan t = 1,59 hasil itu belum signifikan secara statistik dan masih bisa terjadi karena kebetulan. Median trade sekitar −0,3R: keuntungan datang dari sedikit trade yang naik jauh, dan di saham yang tren naiknya kuat, beli-lalu-tahan sering jauh lebih baik.',
      'Di saham IDX dan kurs, aturan ini negatif di train maupun validasi (mis. IDX −0,04R dan −0,11R), dan tidak ada kandidat lain yang konsisten positif, jadi pasar itu sengaja tidak diberi sinyal. Hasil juga terkena survivorship bias karena watchlist hanya berisi instrumen besar yang masih ada hari ini, dan simulasi belum memperhitungkan batas modal untuk banyak posisi sekaligus.',
      'Forward test baru dimulai 10 Okt 2026 dan belum punya trade yang selesai, jadi belum bisa dipakai untuk menilai aturan. Backtest per instrumen juga hanya berisi 10–20 trade, terlalu sedikit untuk disimpulkan sendiri.',
      'Yahoo Finance dan Galeri24 tidak punya API resmi: endpoint Yahoo bisa berubah atau membatasi IP pusat data, dan scraping Antam bisa rusak bila tampilan situsnya berubah. Di paket gratis Vercel, job harian bisa meleset sampai 1 jam dari jadwal.',
    ],
    en: [
      'Not investment advice. All prices, projections, signals, and backtest results are for information and learning only, and should never be the sole basis for a decision to buy or sell.',
      'The breakout rule was positive in the final test (+0.17R per trade, 125 trades, 40% win rate), but with t = 1.59 the result is not statistically significant and could still be down to chance. The median trade is about −0.3R: profits come from a few trades that run far, and on stocks in a strong uptrend, buy-and-hold often does much better.',
      'On IDX stocks and FX, the rule was negative in both train and validation (e.g. IDX −0.04R and −0.11R), and no other candidate was consistently positive, so those markets deliberately get no signal. The results also carry survivorship bias, since the watchlist only holds large instruments that still exist today, and the simulation does not yet limit capital across many open positions.',
      'The forward test only started on 10 Oct 2026 and has no closed trades yet, so it cannot be used to judge the rule. Per-instrument backtests also contain only 10–20 trades, too few to draw conclusions from on their own.',
      'Yahoo Finance and Galeri24 have no official API: Yahoo\'s endpoints may change or throttle data-center IPs, and the Antam scraper can break if the site layout changes. On the Vercel free tier, the daily job can run up to an hour off schedule.',
    ],
  },

  next: {
    id: [
      'Menilai aturan dari hasil forward test setelah 6–12 bulan data baru, termasuk RSI(2) yang lebih bagus di ujian akhir tetapi kalah di train. Aturan baru diganti hanya bila unggul di data yang benar-benar baru.',
      'Simulasi di tingkat portofolio: batas modal untuk banyak posisi sekaligus dan slippage selain gap, supaya angka backtest lebih dekat ke kondisi nyata.',
    ],
    en: [
      'Judge the rule on 6–12 months of forward-test data, including RSI(2), which did better in the final test but lost in train. The rule is only switched if a candidate wins on truly new data.',
      'Portfolio-level simulation: a capital limit across many open positions and slippage beyond gaps, so backtest numbers come closer to real conditions.',
    ],
  },
}
