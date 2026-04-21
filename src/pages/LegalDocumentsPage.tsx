import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer/PageContainer'
import { useScrollToHash } from '../hooks/useScrollToHash'
import styles from './LegalPage.module.css'

export function LegalDocumentsPage() {
  useScrollToHash()

  return (
    <>
      <Helmet>
        <title>Документы — Курьер-бокс</title>
        <meta name="description" content="Публичная оферта, пользовательское соглашение, политика конфиденциальности." />
      </Helmet>
      <article className={styles.article}>
        <PageContainer>
          <p className={styles.backRow}>
            <Link className={styles.backLink} to="/">
              На главную
            </Link>
          </p>

          <section id="public-offer" className={styles.anchorSection} aria-labelledby="public-offer-heading">
            <h1 id="public-offer-heading" className={styles.h1}>
              Публичная оферта
            </h1>
            <p className={styles.placeholder}>
              Типовой текст по публичной оферте. Полный документ будет размещён позже.
            </p>
            <table className={styles.docTable}>
              <caption className={styles.docTableCaption}>Таблица 1 (пример)</caption>
              <thead>
                <tr>
                  <th>Пункт</th>
                  <th>Описание</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Базовая ячейка — замените содержимым оферты.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="user-agreement" className={styles.anchorSection} aria-labelledby="user-agreement-heading">
            <h2 id="user-agreement-heading" className={styles.h2}>
              Пользовательское соглашение
            </h2>
            <p className={styles.placeholder}>
              Типовой текст по пользовательскому соглашению. Полный документ будет размещён позже.
            </p>
            <table className={styles.docTable}>
              <caption className={styles.docTableCaption}>Таблица 2 (пример)</caption>
              <thead>
                <tr>
                  <th>Раздел</th>
                  <th>Содержание</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>А</td>
                  <td>Базовая ячейка — замените текстом соглашения.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="privacy-policy" className={styles.anchorSection} aria-labelledby="privacy-policy-heading">
            <h2 id="privacy-policy-heading" className={styles.h2}>
              Политика конфиденциальности
            </h2>
            <p className={styles.placeholder}>
              Типовой текст по политике конфиденциальности. Полный документ будет размещён позже.
            </p>
            <table className={styles.docTable}>
              <caption className={styles.docTableCaption}>Таблица 3 (пример)</caption>
              <thead>
                <tr>
                  <th>Категория</th>
                  <th>Обработка данных</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Общие положения</td>
                  <td>Базовая ячейка — замените текстом политики.</td>
                </tr>
              </tbody>
            </table>
          </section>
        </PageContainer>
      </article>
    </>
  )
}
