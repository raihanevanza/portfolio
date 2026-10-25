// Refresh only the compiled Pijak demo; private source stays in its own repository.
import { execFileSync } from 'node:child_process'
import { cpSync, existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const source = resolve(process.argv[2] ?? join(root, '..', 'pijak'))
if (JSON.parse(readFileSync(join(source, 'package.json'), 'utf8')).name !== 'pijak')
  throw new Error('Expected the Pijak source repository.')
execFileSync(process.execPath, [join(source, 'scripts/build-demo.mjs')], { cwd: source, stdio: 'inherit' })
const built = join(source, 'demo-dist')
if (!existsSync(join(built, 'index.html'))) throw new Error('Pijak demo shell missing.')
const manifest = JSON.parse(readFileSync(join(built, 'demo-build.json'), 'utf8'))
if (manifest.mode !== 'browser-local-demo' || manifest.base !== '/demo/pijak/')
  throw new Error('Unexpected demo configuration.')
function verify(directory) {
  for (const name of readdirSync(directory)) {
    const full = join(directory, name)
    const stat = lstatSync(full)
    if (stat.isSymbolicLink() || name === '.git' || name.startsWith('.env'))
      throw new Error('Unexpected demo file: ' + name)
    if (stat.isDirectory()) verify(full)
  }
}
verify(built)
const target = join(root, 'public', 'demo', 'pijak')
if (relative(root, target) !== join('public', 'demo', 'pijak')) throw new Error('Unexpected target.')
mkdirSync(target, { recursive: true })
cpSync(built, target, { recursive: true })
const commit = execFileSync(
  'git',
  ['-c', 'safe.directory=' + source.replaceAll('\\', '/'), '-C', source, 'rev-parse', 'HEAD'],
  { encoding: 'utf8' },
).trim()
writeFileSync(
  join(target, 'source.json'),
  JSON.stringify(
    {
      project: 'Pijak',
      sourceCommit: commit,
      mode: 'browser-local-demo',
      refreshedAt: new Date().toISOString(),
    },
    null,
    2,
  ) + '\n',
)
console.log('Pijak demo imported at public/demo/pijak/. Source: ' + commit)
