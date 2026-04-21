import { DoorOpen, EyeOff, ShieldCheck, Wrench } from 'lucide-react'
import { PageContainer } from '../../components/PageContainer/PageContainer'
import styles from './FeaturesSection.module.css'

const iconProps = { size: 40, strokeWidth: 1.75 }

export function FeaturesSection() {
  return (
    <section
      className={styles.section}
      id="characteristics"
      aria-label="Преимущества курьер-бокса"
    >
      <PageContainer>
        <div className={styles.plate}>
          <div className={styles.rows}>
            <div className={styles.row}>
              <article className={`${styles.card} ${styles.cardDark}`}>
                <ShieldCheck {...iconProps} className={styles.iconOnDark} aria-hidden />
                <h3 className={`${styles.cardTitle} ${styles.cardTitleOnDark}`}>
                  Еда больше не касается грязного пола
                </h3>
                <p className={`${styles.cardText} ${styles.cardTextOnDark}`}>
                  {`Пакеты стоят на чистом ярусе бокса,\nа не на полу подъезда, \nгде соседи и курьеры ходят в уличной обуви`}
                </p>
              </article>

              <article className={`${styles.card} ${styles.cardLight} ${styles.cardDoor}`}>
                <DoorOpen {...iconProps} className={styles.icon} aria-hidden />
                <h3 className={`${styles.cardTitle} ${styles.cardTitleDoor}`}>
                  Свободный выход из квартиры
                </h3>
                <p className={styles.cardText}>
                  {`Бокс вмещает 5-литровую воду \nи 3 больших пакета. \nРазмеры: 45х55х33`}
                </p>
              </article>
            </div>

            <div className={styles.row}>
              <article className={`${styles.card} ${styles.cardLight} ${styles.cardEye}`}>
                <EyeOff {...iconProps} className={styles.icon} aria-hidden />
                <h3 className={styles.cardTitle}>Не раздражает соседей</h3>
                <p className={styles.cardText}>
                  {`Полностью прозрачный материал \nсливается со стенами. \nНикакого визуального мусора \nи захламления общего коридора`}
                </p>
              </article>

              <article className={`${styles.card} ${styles.cardMuted} ${styles.cardWrench}`}>
                <Wrench {...iconProps} className={styles.icon} aria-hidden />
                <h3 className={styles.cardTitle}>Установка за 0 минут</h3>
                <p className={styles.cardText}>
                  {`Никакого сверления, порчи стен и вызова мастера. \nПросто достаньте бокс из коробки и поставьте у двери`}
                </p>
              </article>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
