import { PageContainer } from '../../components/PageContainer/PageContainer'
import { publicUrl } from '../../lib/publicUrl'
import { BeforeAfterSlider } from '../components/BeforeAfterSlider/BeforeAfterSlider'
import styles from './ProblemSection.module.css'

export function ProblemSection() {
  return (
    <section className={styles.section} id="problem" aria-labelledby="problem-heading">
      <PageContainer>
        <div className={styles.center}>
          <h2 id="problem-heading" className={styles.heading}>
            Знакомая картина после каждого заказа курьера?
          </h2>

          <BeforeAfterSlider
            beforeSrc={publicUrl('images/problem-before.webp')}
            afterSrc={publicUrl('images/problem-after.webp')}
          />

          <div className={styles.bulletsWrap}>
            <ul className={styles.bullets}>
              <li>
                <span className={styles.bullet} aria-hidden />
                <span>
                  Свалка доставок
                  <br />
                  портит вид этажа
                </span>
              </li>
              <li>
                <span className={styles.bullet} aria-hidden />
                <span>
                  Пакеты блокируют
                  <br />
                  открывание входной двери
                </span>
              </li>
              <li>
                <span className={styles.bullet} aria-hidden />
                <span>
                  Продукты на грязном
                  <br />
                  полу подъезда
                </span>
              </li>
            </ul>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
