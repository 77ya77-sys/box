import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './CookieBanner.module.css'

const STORAGE_KEY = 'cookie_consent_v1'

function readConsent(): boolean {
  if (typeof window === 'undefined') return true
  try {
    return localStorage.getItem(STORAGE_KEY) !== 'accepted'
  } catch {
    return true
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(readConsent)

  const accept = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted')
    } catch {
      /* ignore */
    }
    setVisible(false)
  }, [])

  if (!visible) return null

  return (
    <div className={styles.bar} role="dialog" aria-label="Уведомление о cookies">
      <div className={styles.inner}>
        <p className={styles.text}>
          Мы используем cookies и похожие технологии для работы сайта и аналитики.
          Продолжая пользоваться сайтом, вы соглашаетесь с{' '}
          <Link to="/privacy/">политикой конфиденциальности</Link>.
        </p>
        <div className={styles.actions}>
          <button type="button" className={styles.button} onClick={accept}>
            Принять
          </button>
        </div>
      </div>
    </div>
  )
}
