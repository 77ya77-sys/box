import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** После перехода по ссылке с #hash прокручивает к элементу с id */
export function useScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    const id = location.hash.replace(/^#/, '')
    if (!id) return
    const run = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    requestAnimationFrame(run)
  }, [location.pathname, location.hash])
}
