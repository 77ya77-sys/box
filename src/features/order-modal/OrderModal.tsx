import { type FormEvent, useState } from 'react'
import { useOrderModal } from './useOrderModal'
import styles from './OrderModal.module.css'

export function OrderModal() {
  const { isOpen, close } = useOrderModal()
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!isOpen) return null

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/payments/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: { name, phone, email: email || undefined },
        }),
      })
      const data: unknown = await res.json().catch(() => ({}))

      if (res.ok && data && typeof data === 'object' && 'confirmationUrl' in data) {
        const url = (data as { confirmationUrl?: string }).confirmationUrl
        if (url) {
          window.location.href = url
          return
        }
      }

      if (res.status === 503) {
        setError(
          'Оплата ещё не настроена: добавьте YOOKASSA_SHOP_ID и YOOKASSA_SECRET_KEY в api/.env',
        )
        return
      }
      if (res.status === 501) {
        setError('Создание платежа ЮKassa пока не реализовано на сервере (следующий шаг).')
        return
      }

      setError('Не удалось создать платёж. Попробуйте позже.')
    } catch {
      setError('Сеть недоступна. Проверьте соединение или запуск API.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className={styles.backdrop}
      role="presentation"
      onMouseDown={(ev) => {
        if (ev.target === ev.currentTarget) close()
      }}
    >
      <div className={styles.sheet} role="dialog" aria-modal="true" aria-labelledby="order-title">
        <div className={styles.head}>
          <h2 id="order-title" className={styles.title}>
            Заказ
          </h2>
          <button type="button" className={styles.close} onClick={close} aria-label="Закрыть">
            ×
          </button>
        </div>
        <form className={styles.form} onSubmit={onSubmit}>
          <label className={styles.label}>
            Имя
            <input
              className={styles.input}
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className={styles.label}>
            Телефон
            <input
              className={styles.input}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
          <label className={styles.label}>
            Email (для чека)
            <input
              className={styles.input}
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          {error ? (
            <p className={styles.error} role="alert">
              {error}
            </p>
          ) : null}
          <p className={styles.hint}>
            После оплаты вы попадёте на страницу благодарности; чек уйдёт на почту при настройке
            ЮKassa.
          </p>
          <button type="submit" className={styles.submit} disabled={loading}>
            {loading ? 'Отправка…' : 'Перейти к оплате'}
          </button>
        </form>
      </div>
    </div>
  )
}
