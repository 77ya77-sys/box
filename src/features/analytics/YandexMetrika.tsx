import { useEffect } from 'react'

declare global {
  interface Window {
    ym?: (
      id: number | string,
      method: string,
      options?: Record<string, unknown>,
    ) => void
  }
}

const COUNTER_ID = import.meta.env.VITE_YM_ID

/**
 * Счётчик и вебвизор — задайте VITE_YM_ID в .env
 * @see https://yandex.ru/support/metrica/
 */
export function YandexMetrika() {
  useEffect(() => {
    if (!COUNTER_ID) return
    const id = Number(COUNTER_ID)
    if (Number.isNaN(id)) return

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://mc.yandex.ru/metrika/tag.js'
    document.head.appendChild(script)

    const onLoad = () => {
      window.ym?.(id, 'init', {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      })
    }

    script.addEventListener('load', onLoad)

    const noscript = document.createElement('noscript')
    const img = document.createElement('img')
    img.src = `https://mc.yandex.ru/watch/${id}`
    img.style.position = 'absolute'
    img.style.left = '-9999px'
    img.alt = ''
    noscript.appendChild(img)
    document.body.appendChild(noscript)

    return () => {
      script.removeEventListener('load', onLoad)
      script.remove()
      noscript.remove()
    }
  }, [])

  return null
}
