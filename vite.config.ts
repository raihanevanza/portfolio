import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
function demoFallback(): Plugin {
  const middleware = (req: { url?: string }, _res: unknown, next: () => void) => {
    const url = new URL(req.url ?? '/', 'http://localhost')
    if (
      (url.pathname === '/demo/pijak' || url.pathname.startsWith('/demo/pijak/')) &&
      !/\.[a-z0-9]+$/i.test(url.pathname)
    )
      req.url = '/demo/pijak/index.html' + url.search
    next()
  }
  return {
    name: 'pijak-demo-fallback',
    configureServer(server) {
      server.middlewares.use(middleware)
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware)
    },
  }
}
export default defineConfig({ plugins: [react(), demoFallback()] })
