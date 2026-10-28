import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
// Static demos under public/demo/<name>/ get their own index.html for page URLs.
const DEMOS = ['/demo/pijak', '/demo/ootd-planner']
function demoFallback(): Plugin {
  const middleware = (req: { url?: string }, _res: unknown, next: () => void) => {
    const url = new URL(req.url ?? '/', 'http://localhost')
    const demo = DEMOS.find((base) => url.pathname === base || url.pathname.startsWith(base + '/'))
    if (demo && !/\.[a-z0-9]+$/i.test(url.pathname)) req.url = demo + '/index.html' + url.search
    next()
  }
  return {
    name: 'demo-fallback',
    configureServer(server) {
      server.middlewares.use(middleware)
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware)
    },
  }
}
export default defineConfig({ plugins: [react(), demoFallback()] })
