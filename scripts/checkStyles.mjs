// Keeps styles easy to find: the only CSS files allowed are src/index.css
// (global element styles) and CSS modules co-located with, and imported only
// by, the component of the same name (Foo.tsx <-> Foo.module.css).
import { readdirSync, readFileSync } from 'node:fs'
import { basename, dirname, join, relative } from 'node:path'

const srcDir = 'src'
const globalCss = join(srcDir, 'index.css')

const files = readdirSync(srcDir, { recursive: true, withFileTypes: true })
  .filter((f) => f.isFile())
  .map((f) => join(f.parentPath, f.name))

const errors = []

for (const file of files.filter((f) => f.endsWith('.css'))) {
  if (file === globalCss) continue
  if (!file.endsWith('.module.css')) {
    errors.push(`${file}: only ${globalCss} and *.module.css are allowed`)
    continue
  }
  const owner = file.replace(/\.module\.css$/, '.tsx')
  if (!files.includes(owner)) {
    errors.push(`${file}: no matching component ${owner}`)
  }
}

const cssImport = /import\s+(?:[\w{}\s,*]+\s+from\s+)?['"]([^'"]+\.css)['"]/g

for (const file of files.filter((f) => /\.tsx?$/.test(f))) {
  for (const [, spec] of readFileSync(file, 'utf8').matchAll(cssImport)) {
    if (spec.startsWith('@mantine/')) continue
    const target = join(dirname(file), spec)
    if (target === globalCss) {
      if (file !== join(srcDir, 'main.tsx')) {
        errors.push(`${file}: only src/main.tsx imports ${globalCss}`)
      }
      continue
    }
    const own = `./${basename(file).replace(/\.tsx?$/, '')}.module.css`
    if (spec !== own) {
      errors.push(
        `${file}: imports ${spec}; a component may only import its own ${own}`,
      )
    }
  }
}

if (errors.length > 0) {
  console.error(
    `Style location check failed (${errors.length}):\n` +
      errors.map((e) => `  ${relative('.', e)}`).join('\n'),
  )
  process.exit(1)
}
