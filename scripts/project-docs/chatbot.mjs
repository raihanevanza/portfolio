export default {
  slug: 'chatbot',
  title: 'Asisten — AI Chatbot',
  hero: '/projects/chat-bot-go.png',
  tagline: {
    id: 'Chatbot web yang jawabannya mengalir kata per kata dan bisa dihentikan kapan saja, dengan backend Go yang bisa memakai Gemini, OpenAI, atau Anthropic.',
    en: 'A web chatbot whose answers stream word by word and can be stopped at any time, backed by a Go server that can use Gemini, OpenAI, or Anthropic.',
  },
  role: {
    id: 'Proyek pribadi · backend Go, frontend React, desain UI',
    en: 'Personal project · Go backend, React frontend, UI design',
  },
  platforms: {
    id: 'Web (desktop & ponsel), dijalankan lokal',
    en: 'Web (desktop & mobile), runs locally',
  },
  links: [
    { label: { id: 'Kode sumber (GitHub)', en: 'Source code (GitHub)' }, url: 'https://github.com/raihanevanza/chat-bot-go' },
  ],
  tech: ['Go 1.22 (standard library)', 'React 18', 'Vite 5', 'Server-Sent Events', 'Gemini API', 'OpenAI API', 'Anthropic API'],

  overview: {
    id: [
      'Chatbot yang menunggu seluruh jawaban selesai sebelum menampilkannya terasa lambat, karena jawaban model bahasa bisa butuh beberapa detik. Proyek ini saya buat untuk mempelajari cara menampilkan jawaban secara bertahap, sekaligus belajar menulis backend dengan Go.',
      'Hasilnya adalah aplikasi chat dengan backend Go yang hanya memakai standard library dan frontend React + Vite. Backend meneruskan potongan jawaban dari provider AI ke browser lewat Server-Sent Events, dan pengguna bisa menghentikan jawaban di tengah jalan. Provider dipilih otomatis dari API key yang tersedia (Gemini, OpenAI, atau Anthropic).',
      'Tanpa API key sama sekali, backend masuk mode demo yang tetap men-stream jawaban contoh, sehingga siapa pun bisa meng-clone repo dan mencoba alurnya dalam beberapa menit tanpa biaya.',
    ],
    en: [
      'A chatbot that waits for the full answer before showing anything feels slow, because a language model can take several seconds to respond. I built this project to learn how to show answers progressively, and to practise writing a backend in Go.',
      'The result is a chat app with a Go backend that uses only the standard library and a React + Vite frontend. The backend relays answer chunks from the AI provider to the browser over Server-Sent Events, and the user can stop an answer midway. The provider is picked automatically from whichever API key is set (Gemini, OpenAI, or Anthropic).',
      'With no API key at all, the backend runs in demo mode and still streams a sample answer, so anyone can clone the repo and try the full flow in a few minutes at no cost.',
    ],
  },

  features: [
    {
      title: { id: 'Jawaban mengalir real-time', en: 'Real-time streaming answers' },
      text: {
        id: 'Setiap potongan teks dari model langsung dikirim ke browser sebagai event SSE dan ditambahkan ke gelembung chat, jadi kata pertama muncul tanpa menunggu jawaban selesai.',
        en: 'Each text chunk from the model is sent to the browser as an SSE event and appended to the chat bubble, so the first words appear without waiting for the full answer.',
      },
    },
    {
      title: { id: 'Hentikan jawaban di tengah jalan', en: 'Stop an answer midway' },
      text: {
        id: 'Selama jawaban berjalan, tombol kirim berubah menjadi tombol stop. Bagian jawaban yang sudah tampil tetap disimpan di percakapan.',
        en: 'While an answer is streaming, the send button turns into a stop button. The part of the answer already shown stays in the conversation.',
      },
    },
    {
      title: { id: 'Tiga provider AI', en: 'Three AI providers' },
      text: {
        id: 'Gemini, OpenAI, dan Anthropic diimplementasikan di balik satu interface Provider di Go. Backend memilih yang pertama punya API key, dengan urutan Gemini, OpenAI, lalu Anthropic.',
        en: 'Gemini, OpenAI, and Anthropic are implemented behind a single Go Provider interface. The backend uses the first one that has an API key, in the order Gemini, OpenAI, then Anthropic.',
      },
    },
    {
      title: { id: 'Mode demo tanpa API key', en: 'Demo mode without an API key' },
      text: {
        id: 'Jika semua API key kosong, backend memakai provider tiruan yang men-stream jawaban contoh kata per kata (sekitar 35 ms per kata) dan bisa dihentikan seperti jawaban sungguhan.',
        en: 'If every API key is empty, the backend uses a mock provider that streams a sample answer word by word (about 35 ms per word), which can be stopped just like a real one.',
      },
    },
    {
      title: { id: 'Badge status backend', en: 'Backend status badge' },
      text: {
        id: 'Saat halaman dibuka, frontend memanggil /api/health dan menampilkan status di header: "Gemini aktif", "Terhubung", "Mode demo", atau "Backend mati".',
        en: 'When the page loads, the frontend calls /api/health and shows the status in the header: "Gemini aktif", "Terhubung", "Mode demo", or "Backend mati".',
      },
    },
    {
      title: { id: 'Pesan error yang bisa dipahami', en: 'Readable error messages' },
      text: {
        id: 'Error dari API provider diterjemahkan menjadi pesan untuk pengguna, misalnya kuota Gemini habis, kredit OpenAI habis, atau API key ditolak, lalu ditampilkan di atas kolom input.',
        en: 'Provider API errors are translated into user-facing messages, such as Gemini quota exceeded, OpenAI credit exhausted, or API key rejected, and shown above the input box.',
      },
    },
    {
      title: { id: 'Contoh pertanyaan & chat baru', en: 'Suggested prompts & new chat' },
      text: {
        id: 'Layar awal menampilkan tiga contoh pertanyaan yang bisa langsung diklik. Tombol "Chat baru" menghentikan jawaban yang sedang berjalan dan mengosongkan percakapan.',
        en: 'The start screen shows three suggested prompts that can be clicked directly. The "Chat baru" (new chat) button stops any running answer and clears the conversation.',
      },
    },
    {
      title: { id: 'Tampilan ramah & responsif', en: 'Friendly, responsive UI' },
      text: {
        id: 'Desain cerah dengan maskot robot, indikator mengetik sebelum kata pertama tiba, gulir otomatis ke pesan terbaru, dan kolom input yang membesar mengikuti isi. Enter untuk kirim, Shift + Enter untuk baris baru.',
        en: 'A bright design with a robot mascot, a typing indicator before the first word arrives, auto-scroll to the latest message, and an input that grows with its content. Enter sends, Shift + Enter adds a new line.',
      },
    },
  ],

  architecture: {
    flow: [
      {
        name: 'Browser (React)',
        detail: {
          id: 'Menyimpan riwayat chat di state, mengirim POST /api/chat, dan membaca stream dengan fetch + ReadableStream.',
          en: 'Keeps chat history in state, sends POST /api/chat, and reads the stream with fetch + ReadableStream.',
        },
      },
      {
        name: 'Vite proxy',
        detail: {
          id: 'Saat development, request /api diteruskan ke localhost:8080 sehingga tidak perlu CORS.',
          en: 'In development, /api requests are forwarded to localhost:8080, so no CORS is needed.',
        },
      },
      {
        name: 'Go ChatHandler',
        detail: {
          id: 'Memvalidasi dan memotong riwayat, lalu menulis event SSE dan melakukan flush setiap potongan.',
          en: 'Validates and trims the history, then writes SSE events and flushes after every chunk.',
        },
      },
      {
        name: 'Provider',
        detail: {
          id: 'Gemini, OpenAI, Anthropic, atau Mock; dipilih sekali saat server start.',
          en: 'Gemini, OpenAI, Anthropic, or Mock; chosen once at server start.',
        },
      },
      {
        name: 'API model AI',
        detail: {
          id: 'Endpoint streaming milik provider; tidak dipanggil dalam mode demo.',
          en: "The provider's streaming endpoint; not called in demo mode.",
        },
      },
    ],
    notes: {
      id: [
        'Backend stateless: setiap pesan baru mengirim ulang seluruh riwayat, lalu backend hanya meneruskan 40 pesan terakhir (MAX_HISTORY) dan memastikan percakapan diawali pesan user.',
        'Format event ke browser sama untuk semua provider: {"type":"delta"}, {"type":"done"}, atau {"type":"error"}. Frontend tidak perlu tahu provider mana yang dipakai.',
        'Setiap provider membaca stream SSE dari API-nya sendiri dengan bufio.Scanner, mengambil teksnya, lalu memanggil callback onDelta yang menulis event ke browser.',
        'Untuk produksi, backend dibangun jadi satu file binary dan frontend jadi file statis; alamat backend diatur lewat VITE_API_URL dan ALLOWED_ORIGIN.',
      ],
      en: [
        'The backend is stateless: every new message resends the whole history, and the backend forwards only the last 40 messages (MAX_HISTORY), making sure the conversation starts with a user message.',
        'The event format sent to the browser is the same for every provider: {"type":"delta"}, {"type":"done"}, or {"type":"error"}. The frontend does not need to know which provider is in use.',
        "Each provider reads its own API's SSE stream with bufio.Scanner, extracts the text, and calls an onDelta callback that writes the event to the browser.",
        'For production, the backend builds into a single binary and the frontend into static files; the backend address is set with VITE_API_URL and ALLOWED_ORIGIN.',
      ],
    },
  },

  stack: [
    { layer: { id: 'Backend', en: 'Backend' }, items: ['Go 1.22', 'net/http ServeMux', 'encoding/json', 'bufio', 'context'] },
    { layer: { id: 'Frontend', en: 'Frontend' }, items: ['React 18', 'Vite 5', 'Fetch API + ReadableStream', 'AbortController', 'Plain CSS'] },
    { layer: { id: 'AI', en: 'AI' }, items: ['Gemini API (streamGenerateContent)', 'OpenAI API (Chat Completions)', 'Anthropic API (Messages)', 'Mock provider'] },
    { layer: { id: 'Pengujian & build', en: 'Testing & build' }, items: ['go test (httptest)', 'go build', 'vite build'] },
  ],

  decisions: [
    {
      title: { id: 'SSE, bukan WebSocket', en: 'SSE instead of WebSocket' },
      text: {
        id: 'Data hanya mengalir satu arah, dari server ke browser, selama satu jawaban. SSE cukup memakai respons HTTP biasa (text/event-stream + Flush), tanpa protokol tambahan atau koneksi yang harus dijaga. Frontend membacanya dengan fetch, bukan EventSource, karena EventSource hanya mendukung GET dan tidak bisa mengirim riwayat chat di body.',
        en: 'Data only flows one way, from server to browser, for the length of one answer. SSE is just a normal HTTP response (text/event-stream + Flush), with no extra protocol or long-lived connection to manage. The frontend reads it with fetch rather than EventSource, because EventSource only supports GET and cannot send the chat history in a body.',
      },
    },
    {
      title: { id: 'Stop memutus rantai sampai ke provider', en: 'Stop cancels all the way to the provider' },
      text: {
        id: 'Tombol stop memanggil AbortController.abort(), yang memutus request fetch. Di Go, r.Context() ikut dibatalkan, dan karena request ke API provider dibuat dengan NewRequestWithContext, request itu juga terputus sehingga model berhenti menghasilkan token. Handler lalu keluar tanpa mengirim pesan error, dan frontend mengabaikan AbortError supaya jawaban sebagian tetap tampil.',
        en: 'The stop button calls AbortController.abort(), which cancels the fetch request. In Go, r.Context() is cancelled too, and since the upstream API request is built with NewRequestWithContext, it is cut off as well, so the model stops generating tokens. The handler then exits without sending an error, and the frontend ignores the AbortError so the partial answer stays visible.',
      },
    },
    {
      title: { id: 'Provider dipilih dari API key', en: 'Provider picked from the API key' },
      text: {
        id: 'Daripada menambah variabel konfigurasi "provider", backend cukup melihat key mana yang terisi. Gemini diprioritaskan karena key gratisnya mudah dibuat di Google AI Studio. Menambah provider baru cukup dengan satu file yang mengimplementasikan Name() dan Stream().',
        en: 'Instead of adding a separate "provider" setting, the backend simply checks which key is set. Gemini comes first because a free key is easy to get from Google AI Studio. Adding a provider only takes one file that implements Name() and Stream().',
      },
    },
    {
      title: { id: 'Tanpa dependency eksternal di Go', en: 'No external Go dependencies' },
      text: {
        id: 'go.mod tidak punya satu pun require. Routing memakai ServeMux Go 1.22 yang sudah mendukung pola "POST /api/chat", pemanggilan API provider memakai net/http langsung, dan file .env dibaca oleh parser kecil buatan sendiri yang tidak menimpa environment variable yang sudah ada. Tujuannya agar saya memahami tiap lapisan dan agar build cukup "go build".',
        en: 'go.mod has no require entries at all. Routing uses the Go 1.22 ServeMux, which supports patterns like "POST /api/chat", provider APIs are called directly with net/http, and .env is read by a small hand-written parser that never overrides existing environment variables. The goal was to understand every layer and keep the build to a plain "go build".',
      },
    },
    {
      title: { id: 'Mode demo sebagai fallback', en: 'Demo mode as a fallback' },
      text: {
        id: 'Repo publik sebaiknya bisa dicoba tanpa mendaftar ke layanan berbayar. Provider mock memakai interface yang sama dan menghormati pembatalan context, jadi streaming, tombol stop, dan badge status bisa diuji persis seperti dengan model sungguhan.',
        en: 'A public repo should be usable without signing up for a paid service. The mock provider uses the same interface and respects context cancellation, so streaming, the stop button, and the status badge behave exactly as they would with a real model.',
      },
    },
    {
      title: { id: 'Streaming yang tidak tertahan proxy', en: 'Streaming that proxies do not hold back' },
      text: {
        id: 'Handler mengirim header Cache-Control: no-cache dan X-Accel-Buffering: no, lalu memanggil Flush setelah setiap event agar nginx atau proxy lain tidak menumpuk respons. WriteTimeout server sengaja tidak di-set karena jawaban panjang bisa berjalan lama.',
        en: 'The handler sends Cache-Control: no-cache and X-Accel-Buffering: no, then calls Flush after each event so nginx or other proxies do not buffer the response. The server WriteTimeout is deliberately left unset because long answers can take a while.',
      },
    },
  ],

  guide: [
    {
      image: 'step-1.jpg',
      title: { id: 'Clone repo & jalankan backend', en: 'Clone the repo & start the backend' },
      text: {
        id: 'Clone github.com/raihanevanza/chat-bot-go, masuk ke folder backend, lalu jalankan "go run .". Tanpa file .env, log menampilkan "provider: mock" dan server berjalan di http://localhost:8080 dalam mode demo.',
        en: 'Clone github.com/raihanevanza/chat-bot-go, go into the backend folder, and run "go run .". Without a .env file the log shows "provider: mock" and the server runs at http://localhost:8080 in demo mode.',
      },
    },
    {
      image: 'step-2.jpg',
      title: { id: 'Jalankan frontend', en: 'Start the frontend' },
      text: {
        id: 'Di terminal kedua, masuk ke folder frontend lalu jalankan "npm install" dan "npm run dev". Buka http://localhost:5173; badge di header menampilkan "Mode demo".',
        en: 'In a second terminal, go into the frontend folder and run "npm install" then "npm run dev". Open http://localhost:5173; the header badge shows "Mode demo".',
      },
    },
    {
      image: 'step-3.jpg',
      title: { id: 'Kirim pesan pertama', en: 'Send the first message' },
      text: {
        id: 'Layar awal menyapa "Halo!" dan menampilkan tiga contoh pertanyaan. Klik salah satunya, atau ketik di kolom "Tulis pesan…" lalu tekan Enter atau tombol panah.',
        en: 'The start screen greets you with "Halo!" and shows three suggested prompts. Click one, or type in the "Tulis pesan…" box and press Enter or the arrow button.',
      },
    },
    {
      image: 'step-4.jpg',
      title: { id: 'Lihat jawaban mengalir', en: 'Watch the answer stream' },
      text: {
        id: 'Titik-titik mengetik muncul sebentar, lalu jawaban tampil kata per kata di samping maskot, dan daftar pesan bergulir otomatis mengikuti jawaban.',
        en: 'A typing indicator appears briefly, then the answer appears word by word next to the mascot, and the message list scrolls along with it.',
      },
    },
    {
      image: 'step-5.jpg',
      title: { id: 'Hentikan jawaban', en: 'Stop the answer' },
      text: {
        id: 'Selama jawaban berjalan, tombol kirim berubah menjadi tombol kotak (stop). Klik tombol itu: jawaban berhenti saat itu juga dan bagian yang sudah tampil tetap ada.',
        en: 'While the answer is streaming, the send button turns into a square stop button. Click it: the answer stops immediately and the part already shown stays.',
      },
    },
    {
      image: 'step-6.jpg',
      title: { id: 'Lanjutkan atau mulai chat baru', en: 'Continue or start a new chat' },
      text: {
        id: 'Kirim pesan lanjutan untuk melanjutkan percakapan (Shift + Enter untuk baris baru). Klik "Chat baru" di kanan atas untuk mengosongkan percakapan dan kembali ke layar awal.',
        en: 'Send a follow-up message to continue the conversation (Shift + Enter for a new line). Click "Chat baru" at the top right to clear the conversation and return to the start screen.',
      },
    },
    {
      title: { id: 'Opsional: pakai model sungguhan', en: 'Optional: use a real model' },
      text: {
        id: 'Salin backend/.env.example menjadi .env, isi GEMINI_API_KEY (atau key OpenAI/Anthropic), lalu jalankan ulang backend. Setelah halaman dimuat ulang, badge berubah menjadi "Gemini aktif" atau "Terhubung".',
        en: 'Copy backend/.env.example to .env, fill in GEMINI_API_KEY (or an OpenAI/Anthropic key), and restart the backend. After reloading the page, the badge changes to "Gemini aktif" or "Terhubung".',
      },
    },
  ],

  limits: {
    id: [
      'Tidak ada demo live; aplikasi perlu dijalankan lokal karena memanggil API berbayar dengan key milik saya.',
      'Riwayat chat hanya ada di memori browser, jadi hilang saat halaman dimuat ulang. Belum ada login maupun pembatasan jumlah request.',
      'Jawaban ditampilkan sebagai teks biasa; format Markdown dari model (judul, daftar, blok kode) belum dirender.',
      'Mode demo selalu membalas dengan templat yang sama (mengulang pesan pengguna), bukan jawaban yang benar-benar menjawab pertanyaan.',
      'Teks antarmuka hanya berbahasa Indonesia, dan pesan error khusus baru dibuat untuk Gemini dan OpenAI. Unit test baru mencakup provider Gemini.',
    ],
    en: [
      'There is no live demo; the app has to run locally because it calls paid APIs with my own key.',
      'Chat history lives only in browser memory, so it is lost on page reload. There is no login or request rate limiting yet.',
      'Answers are shown as plain text; Markdown from the model (headings, lists, code blocks) is not rendered yet.',
      "Demo mode always replies with the same template (echoing the user's message), not a real answer to the question.",
      'The interface text is Indonesian only, and specific error messages exist only for Gemini and OpenAI. Unit tests currently cover only the Gemini provider.',
    ],
  },

  next: {
    id: [
      'Merender Markdown di jawaban (misalnya dengan react-markdown) agar daftar dan blok kode tampil rapi.',
      'Menyimpan riwayat chat ke database (SQLite atau PostgreSQL) dan menambahkan login serta rate limiting.',
      'Menambah unit test untuk provider OpenAI dan Anthropic, lalu men-deploy versi demo publik.',
    ],
    en: [
      'Render Markdown in answers (e.g. with react-markdown) so lists and code blocks display properly.',
      'Persist chat history in a database (SQLite or PostgreSQL) and add login plus rate limiting.',
      'Add unit tests for the OpenAI and Anthropic providers, then deploy a public demo.',
    ],
  },
};
