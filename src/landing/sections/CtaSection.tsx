import { useLayoutEffect, useRef, useState } from 'react'
import { PageContainer } from '../../components/PageContainer/PageContainer'
import { useOrderModal } from '../../features/order-modal/useOrderModal'
import styles from './CtaSection.module.css'

/** Синхрон с --cta-button-w в index.css */
const CTA_BUTTON_W = 328
const PRICE_ACTION_GAP = 24

export function CtaSection() {
  const { open } = useOrderModal()
  const headingRef = useRef<HTMLHeadingElement>(null)
  const priceRef = useRef<HTMLSpanElement>(null)
  const [actionMarginLeft, setActionMarginLeft] = useState<number | null>(null)

  useLayoutEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)')

    const sync = () => {
      if (mq.matches) {
        setActionMarginLeft(null)
        return
      }
      const h = headingRef.current
      const p = priceRef.current
      if (!h || !p) return
      const hRight = h.getBoundingClientRect().right
      const pRight = p.getBoundingClientRect().right
      const ml = Math.max(0, hRight - pRight - PRICE_ACTION_GAP - CTA_BUTTON_W)
      setActionMarginLeft(ml)
    }

    sync()
    const ro = new ResizeObserver(sync)
    if (headingRef.current) ro.observe(headingRef.current)
    if (priceRef.current) ro.observe(priceRef.current)
    window.addEventListener('resize', sync)
    mq.addEventListener('change', sync)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', sync)
      mq.removeEventListener('change', sync)
    }
  }, [])

  return (
    <section className={styles.section} id="cta-section" aria-labelledby="cta-heading">
      <PageContainer>
        {/* Блок СТА (Figma 912:14): внутренняя полоса 1013px по центру контейнера 1440 */}
        <div className={styles.box}>
          <h2 id="cta-heading" ref={headingRef} className={styles.heading}>
            Курьер-бокс — ваш личный стандарт гигиены
          </h2>

          <div className={styles.rowCluster}>
            <span ref={priceRef} className={styles.price}>
              5900 ₽
            </span>
            <div
              className={styles.actionCol}
              style={
                actionMarginLeft != null ? { marginLeft: actionMarginLeft } : undefined
              }
            >
              <button type="button" className={styles.cta} onClick={open}>
                Заказать
              </button>
              <p className={styles.note}>
                Бокс из литого акрила 5 мм,
                <br />
                наклейка-инструкция для курьера в подарок
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
