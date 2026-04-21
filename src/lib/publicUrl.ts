/** Файлы из `public/` — с учётом Vite `base` (например GitHub Pages: `/repo/`). */
export function publicUrl(path: string): string {
  const p = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${p}`
}
