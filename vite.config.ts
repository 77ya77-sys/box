import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * GitHub Pages (project site): `https://user.github.io/<repo>/`
 * В CI задаётся `GITHUB_REPOSITORY=owner/repo`. Локально для ручной сборки: `VITE_BASE=/repo/`.
 */
function resolveBase(): string {
  const gr = process.env.GITHUB_REPOSITORY
  if (gr) {
    const repo = gr.split('/')[1]
    if (repo) return `/${repo}/`
  }
  const b = process.env.VITE_BASE?.trim()
  if (b && b !== '/') return b.endsWith('/') ? b : `${b}/`
  return '/'
}

const base = resolveBase()

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  server: {
    // Явно IPv4: иначе на macOS Vite часто висит только на ::1,
    // и http://127.0.0.1:5173/ даёт connection refused.
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true,
      },
    },
  },
})
