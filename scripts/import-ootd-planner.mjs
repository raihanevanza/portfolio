// Refresh only the compiled OOTD Planner demo; the Angular and Go source stays in its own repository.
import { execFileSync } from 'node:child_process'
import { cpSync, existsSync, lstatSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const source = resolve(process.argv[2] ?? join(root, '..', 'ootd-planner'))
const web = join(source, 'web')
const base = '/demo/ootd-planner/'
if (JSON.parse(readFileSync(join(web, 'package.json'), 'utf8')).name !== 'ootd-web')
  throw new Error('Expected the OOTD Planner source repository.')
const npmCli = process.env.npm_execpath
if (!npmCli) throw new Error('Run npm run demo:ootd-planner -- [OOTD Planner directory]')
execFileSync(process.execPath, [npmCli, 'run', 'build:demo', '--', '--base-href', base], { cwd: web, stdio: 'inherit' })
const built = join(web, 'dist', 'ootd-web', 'browser')
if (!existsSync(join(built, 'index.html'))) throw new Error('OOTD Planner demo shell missing.')
if (!readFileSync(join(built, 'index.html'), 'utf8').includes(`<base href="${base}">`))
  throw new Error('Demo must use the portfolio base path.')
function verify(directory) {
  for (const name of readdirSync(directory)) {
    const full = join(directory, name)
    const stat = lstatSync(full)
    if (stat.isSymbolicLink() || name === '.git' || name.startsWith('.env') || name.endsWith('.map'))
      throw new Error('Unexpected demo file: ' + name)
    if (stat.isDirectory()) verify(full)
  }
}
verify(built)
const target = join(root, 'public', 'demo', 'ootd-planner')
if (relative(root, target) !== join('public', 'demo', 'ootd-planner')) throw new Error('Unexpected target.')
// Chunk names are content hashes, so replace the folder instead of merging into it.
rmSync(target, { recursive: true, force: true })
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
      project: 'OOTD Planner',
      sourceCommit: commit,
      mode: 'browser-local-demo',
      base,
      refreshedAt: new Date().toISOString(),
    },
    null,
    2,
  ) + '\n',
)
console.log('OOTD Planner demo imported at public/demo/ootd-planner/. Source: ' + commit)
