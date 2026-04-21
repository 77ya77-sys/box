import { PageContainer } from '../../components/PageContainer/PageContainer'
import { publicUrl } from '../../lib/publicUrl'
import styles from './GallerySection.module.css'

type Item = {
  id: number
  src: string
  title: string
  /** Точные `characters` из Figma (узлы 902:168, 902:174, 902:179, 902:184), \n = перенос в макете */
  text: string
}

const items: Item[] = [
  {
    id: 1,
    src: 'images/1.webp',
    title: 'Незаметен в интерьере',
    text: 'Прозрачный материал сливается \nсо стенами и не выглядит как чужеродный ящик в подъезде',
  },
  {
    id: 2,
    src: 'images/2.webp',
    title: 'Вмещает все заказы',
    text: 'Внутрь легко помещается 5-литровая вода \nи несколько больших пакетов с продуктами',
  },
  {
    id: 3,
    src: 'images/3.webp',
    title: 'Не мешает проходу',
    text: 'Компактный размер. Бокс оставляет коридор свободным \nи не блокирует чужие двери',
  },
  {
    id: 4,
    src: 'images/4.webp',
    title: 'Идеальный порядок',
    text: 'Курьеры больше не бросают еду на грязный пол, а аккуратно составляют пакеты в бокс',
  },
]

export function GallerySection() {
  return (
    <section className={styles.section} id="design" aria-labelledby="gallery-heading">
      <PageContainer>
        <div className={styles.plate}>
          <h2 id="gallery-heading" className={styles.heading}>
            Курьер-бокс в реальных подъездах
          </h2>
          <div className={styles.scroller} tabIndex={0} role="region" aria-label="Галерея">
            <ul className={styles.track}>
              {items.map((it) => (
                <li key={it.id} className={styles.card}>
                  <div className={styles.media}>
                    <img
                      className={styles.mediaImg}
                      src={publicUrl(it.src)}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                  </div>
                  <div className={styles.caption}>
                    <h3 className={styles.cardTitle}>{it.title}</h3>
                    <p className={styles.cardText}>{it.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
