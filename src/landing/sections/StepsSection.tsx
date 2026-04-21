import { PageContainer } from '../../components/PageContainer/PageContainer'
import styles from './StepsSection.module.css'

/** Тексты из Figma 910:217 (Пятый блок) */
const steps = [
  { n: '01', title: 'Заказываете как обычно' },
  { n: '02', title: 'Курьер делает свою работу' },
  { n: '03', title: 'Забираете чистый заказ' },
] as const

export function StepsSection() {
  return (
    <section className={styles.section} id="delivery" aria-labelledby="steps-heading">
      <PageContainer>
        <div className={styles.plate}>
          <h2 id="steps-heading" className={styles.heading}>
            Доставка по новым правилам
          </h2>

          <ol className={styles.list}>
            {steps.map((s) => (
              <li key={s.n} className={styles.card}>
                <span className={styles.number} aria-hidden>
                  {s.n}
                </span>
                <h3 className={styles.cardTitle}>{s.title}</h3>
              </li>
            ))}
          </ol>
        </div>
      </PageContainer>
    </section>
  )
}
