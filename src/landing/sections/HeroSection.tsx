import { PageContainer } from '../../components/PageContainer/PageContainer'
import { useOrderModal } from '../../features/order-modal/useOrderModal'
import styles from './HeroSection.module.css'

export function HeroSection() {
  const { open } = useOrderModal()

  return (
    <section className={styles.section} id="top" aria-label="Главный экран">
      <div className={styles.bg} aria-hidden />
      <PageContainer>
        <div className="figmaPlate">
          <div className={styles.inner}>
            <h1 className={styles.title}>
              Порядок у двери
              <br />
              после каждой доставки
            </h1>
            <p className={styles.subtitle}>
              Эстетичный курьер-бокс
              <br />
              Сливается с отделкой, не требует монтажа
            </p>
            <div className={styles.ctaStack}>
              <button type="button" className={styles.cta} onClick={open}>
                Заказать
              </button>
              <div className={styles.trusts} role="list">
                <span role="listitem">Собственное производство</span>
                <span className={styles.dot} aria-hidden />
                <span role="listitem">Гарантия 1 год</span>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
