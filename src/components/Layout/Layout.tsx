import { Link, Outlet } from 'react-router-dom'
import { CookieBanner } from '../../features/cookie-banner/CookieBanner'
import { YandexMetrika } from '../../features/analytics/YandexMetrika'
import { PageContainer } from '../PageContainer/PageContainer'
import { useOrderModal } from '../../features/order-modal/useOrderModal'
import { CONTACT } from '../../config/external'
import { publicUrl } from '../../lib/publicUrl'
import { FooterPaymentIcons } from './FooterPaymentIcons'
import styles from './Layout.module.css'

function Header() {
  const { open } = useOrderModal()
  const hash = (id: string) => `${import.meta.env.BASE_URL}#${id}`

  return (
    <header className={styles.header}>
      <PageContainer className={styles.headerInner}>
        <Link className={styles.brand} to="/">
          Курьер бокс
        </Link>
        <nav className={styles.nav} aria-label="Навигация по странице">
          <a className={styles.navLink} href={hash('design')}>
            Дизайн
          </a>
          <a className={styles.navLink} href={hash('characteristics')}>
            Характеристики
          </a>
          <a className={styles.navLink} href={hash('delivery')}>
            Доставка
          </a>
        </nav>
        <button type="button" className={styles.cta} onClick={open}>
          Заказать
        </button>
      </PageContainer>
    </header>
  )
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerShell}>
        <div className={styles.footerContent}>
        <div className={styles.footerMainRow}>
          <div className={styles.footerCol}>
            <p className={styles.footerBrand}>Курьер бокс</p>
            <nav className={styles.footerLinks} aria-label="Документы">
              <Link className={styles.footerLink} to="/documents/#public-offer">
                Публичная оферта
              </Link>
              <Link className={styles.footerLink} to="/documents/#user-agreement">
                Пользовательское соглашение
              </Link>
              <Link className={styles.footerLink} to="/documents/#privacy-policy">
                Политика конфиденциальности
              </Link>
            </nav>
            <nav className={styles.footerLinksSecondary} aria-label="Условия">
              <Link className={styles.footerLink} to="/delivery-payment/#delivery-payment">
                Доставка и оплата
              </Link>
              <Link className={styles.footerLink} to="/delivery-payment/#return-warranty">
                Возврат и гарантия
              </Link>
            </nav>
          </div>

          <address className={styles.footerAddress}>
            <span>ИП Анюта</span>
            <span>ИНН 1234567890</span>
            <span>ОГРНИП 123456789012345</span>
            <span>email: info@mail.ru</span>
            <span>Тел.: +7(920)333-44-22</span>
          </address>

          <div className={styles.footerSocial}>
            <a href={CONTACT.telegram} target="_blank" rel="noreferrer" aria-label="Telegram">
              <img src={publicUrl('images/social-tg.png')} alt="" width={44} height={44} />
            </a>
            <a href={CONTACT.max} target="_blank" rel="noreferrer" aria-label="MAX">
              <img src={publicUrl('images/social-max.png')} alt="" width={44} height={44} />
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <img src={publicUrl('images/social-wa.png')} alt="" width={44} height={44} />
            </a>
          </div>
        </div>

        <div className={styles.footerPaymentsRow}>
          <FooterPaymentIcons />
        </div>

        <p className={styles.footerCopy}>© 2026. Все права защищены</p>
        </div>
      </div>

      <div className={styles.footerBar}>
        <PageContainer className={styles.footerBarInner}>
          <span className={styles.footerCredit}>Создано студией VGX</span>
        </PageContainer>
      </div>
    </footer>
  )
}

export function Layout() {
  return (
    <>
      <YandexMetrika />
      <div className={styles.shell}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
      <CookieBanner />
    </>
  )
}
