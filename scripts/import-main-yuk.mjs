// Rebuild the self-contained Main Yuk demo; portfolio builds use committed assets.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const source = path.resolve(process.argv[2] || path.join(root, '..', 'main-yuk'))
const target = path.join(root, 'public', 'demos', 'main-yuk')
const npmCli = process.env.npm_execpath
if (!npmCli) throw new Error('Run npm run demo:main-yuk -- [Main Yuk directory]')
if (JSON.parse(fs.readFileSync(path.join(source, 'package.json'), 'utf8')).name !== 'main-yuk')
  throw new Error('Source must be the Main Yuk repository.')
const result = spawnSync(process.execPath, [npmCli, 'run', 'build:demo'], { cwd: source, stdio: 'inherit' })
if (result.status !== 0) throw new Error('Main Yuk demo build failed; existing demo was kept.')
function walk(dir, prefix = '') {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      if (entry.isSymbolicLink()) throw new Error('Symlinks are not allowed in a demo snapshot.')
      const relative = prefix + entry.name
      return entry.isDirectory() ? walk(path.join(dir, entry.name), relative + '/') : [relative]
    })
    .sort()
}
const built = path.join(source, 'frontend', 'dist-demo')
const files = walk(built).filter((file) => file !== 'manifest.webmanifest')
if (!files.includes('index.html') || files.some((file) => file.endsWith('.map') || file === 'sw.js'))
  throw new Error('Expected a static demo without source maps or service worker.')
const html = fs.readFileSync(path.join(built, 'index.html'), 'utf8')
if (!html.includes('/demos/main-yuk/assets/') || html.includes('rel="manifest"'))
  throw new Error('Demo must use the portfolio base path and have no PWA manifest.')
const previous = fs.existsSync(target) ? walk(target) : []
fs.mkdirSync(target, { recursive: true })
const hashes = {}
for (const file of files) {
  const data = fs.readFileSync(path.join(built, file))
  fs.mkdirSync(path.dirname(path.join(target, file)), { recursive: true })
  fs.writeFileSync(path.join(target, file), data)
  hashes[file] = createHash('sha256').update(data).digest('hex')
}
for (const file of previous) {
  if (files.includes(file) || file === 'build-manifest.json') continue
  const stale = path.resolve(target, file)
  if (!stale.startsWith(target + path.sep)) throw new Error('Invalid stale demo path.')
  fs.unlinkSync(stale)
}
fs.writeFileSync(
  path.join(target, 'build-manifest.json'),
  JSON.stringify(
    {
      source: 'main-yuk',
      base: '/demos/main-yuk/',
      mode: 'demo',
      storage: 'IndexedDB: main-yuk-portfolio-demo',
      api: false,
      serviceWorker: false,
      rupa: JSON.parse(fs.readFileSync(path.join(source, 'vendor', 'rupa-snapshot.json'), 'utf8')),
      sha256: hashes,
    },
    null,
    2,
  ) + '\n',
)
console.log('Imported ' + files.length + ' static files. Demo: /demos/main-yuk/')
