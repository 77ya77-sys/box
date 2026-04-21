import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer/PageContainer'
import { useScrollToHash } from '../hooks/useScrollToHash'
import styles from './LegalPage.module.css'

export function DeliveryPaymentPage() {
  useScrollToHash()

  return (
    <>
      <Helmet>
        <title>Доставка и оплата — Курьер-бокс</title>
        <meta name="description" content="Доставка, оплата, возврат и гарантия." />
      </Helmet>
      <article className={styles.article}>
        <PageContainer>
          <p className={styles.backRow}>
            <Link className={styles.backLink} to="/">
              На главную
            </Link>
          </p>

          <section id="delivery-payment" className={styles.anchorSection} aria-labelledby="delivery-payment-heading">
            <h1 id="delivery-payment-heading" className={styles.h1}>
              Доставка и оплата
            </h1>
            <p className={styles.placeholder}>
              Доставка и оплата. Первый абзац типового текста — здесь будет полный текст по готовности.
            </p>
          </section>

          <section id="return-warranty" className={styles.anchorSection} aria-labelledby="return-warranty-heading">
            <h2 id="return-warranty-heading" className={styles.h2}>
              Возврат и гарантия
            </h2>
            <p className={styles.placeholder}>
              Возврат и гарантия. Второй абзац типового текста — здесь будет полный текст по готовности.
            </p>
          </section>
        </PageContainer>
      </article>
    </>
  )
}
