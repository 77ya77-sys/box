import { Helmet } from 'react-helmet-async'
import { CtaSection } from '../landing/sections/CtaSection'
import { FeaturesSection } from '../landing/sections/FeaturesSection'
import { GallerySection } from '../landing/sections/GallerySection'
import { HeroSection } from '../landing/sections/HeroSection'
import { ProblemSection } from '../landing/sections/ProblemSection'
import { StepsSection } from '../landing/sections/StepsSection'

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Курьер-бокс — бесконтактная доставка</title>
        <meta
          name="description"
          content="Эстетичный курьер-бокс: порядок у двери после каждой доставки. Собственное производство, гарантия 1 год."
        />
        <meta property="og:title" content="Курьер-бокс — порядок у двери после каждой доставки" />
        <meta
          property="og:description"
          content="Прозрачный курьер-бокс из акрила. Без монтажа. Доставка по новым правилам."
        />
      </Helmet>
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <GallerySection />
      <StepsSection />
      <CtaSection />
    </>
  )
}
