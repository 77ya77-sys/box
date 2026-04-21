import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer/PageContainer'
import styles from './ThankYouPage.module.css'

export function ThankYouPage() {
  return (
    <>
      <Helmet>
        <title>Спасибо за заказ — Курьер-бокс</title>
        <meta name="description" content="Заказ принят. Менеджер свяжется с вами." />
      </Helmet>
      <section className={styles.section}>
        <PageContainer>
          <h1 className={styles.title}>Спасибо за заказ</h1>
          <p className={styles.text}>
            Наш менеджер свяжется с вами в ближайшее время. Чек отправлен на указанную почту, когда
            настроена ЮKassa.
          </p>
          <Link className={styles.link} to="/">
            На главную
          </Link>
        </PageContainer>
      </section>
    </>
  )
}
