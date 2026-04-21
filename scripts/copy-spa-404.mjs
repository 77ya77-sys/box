import { copyFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const index = join(process.cwd(), 'dist', 'index.html')
const notFound = join(process.cwd(), 'dist', '404.html')

if (existsSync(index)) {
  copyFileSync(index, notFound)
}
