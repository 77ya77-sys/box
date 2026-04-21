import { useState } from 'react'
import styles from './Layout.module.css'

/** Файлы в public/images/ — реальные файлы PNG (раньше были с расширением .svg) */
const PAYMENT_ASSETS = [
  {
    src: '/images/spb.png',
    label: 'Система быстрых платежей',
    w: 49,
    h: 25,
    /** Чёрный текст и тёмные части на #0f172a не видны — инверсия для читаемости */
    invert: true,
  },
  {
    src: '/images/mir.png',
    label: 'Платёжная система «Мир»',
    w: 83,
    h: 25,
    invert: false,
  },
] as const

export function FooterPaymentIcons() {
  return (
    <div className={styles.footerPayments} role="group" aria-label="Принимаем к оплате">
      {PAYMENT_ASSETS.map(({ src, label, w, h, invert }) => (
        <FooterPaymentSlot key={src} src={src} label={label} width={w} height={h} invert={invert} />
      ))}
    </div>
  )
}

function FooterPaymentSlot({
  src,
  label,
  width,
  height,
  invert,
}: {
  src: string
  label: string
  width: number
  height: number
  invert: boolean
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={styles.footerPaymentSlot}
        style={{ minWidth: width, minHeight: height }}
        role="img"
        aria-label={label}
      >
        <span className={styles.footerPaymentPlaceholder}>{label}</span>
      </div>
    )
  }

  return (
    <div className={styles.footerPaymentSlot}>
      <img
        className={invert ? styles.footerPaymentImgInvert : styles.footerPaymentImg}
        src={src}
        alt={label}
        width={width}
        height={height}
        decoding="async"
        onError={() => setFailed(true)}
      />
    </div>
  )
}
