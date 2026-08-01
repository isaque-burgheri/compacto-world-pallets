import { business, heroFacts } from '../../data/business'
import { useReveal } from '../../hooks/useReveal'
import styles from './Hero.module.css'

export default function Hero() {
  const revealRef = useReveal()

  return (
    <section className={styles.hero}>
      <img
        className={styles.banner}
        src="/media/brand/hero-banner.webp"
        alt="Arte da Compacto World Pallets: globo cercado de paletes, caminhões e guindastes, com os diferenciais paletes PBR novos, primeira qualidade, qualidade garantida e entrega em São Paulo"
        width="2000"
        height="729"
        fetchpriority="high"
      />

      <div className={`${styles.copy} reveal`} ref={revealRef}>
        <h1 className={`heading ${styles.title}`}>
          Paletes PBR novos e sob medida,
          <br />
          prontos <span className={styles.highlight}>para carga.</span>
        </h1>

        <p className={styles.lede}>{business.materialCall}.</p>

        <div className={styles.ctas}>
          <a
            className={styles.ctaPrimary}
            href={business.whatsapp[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedir orçamento no WhatsApp
          </a>
          <a className={styles.ctaGhost} href="tel:+5511921218541">
            {business.whatsapp[0].label}
          </a>
        </div>

        <div className={styles.facts}>
          {heroFacts.map((fact) => (
            <span key={fact} className={styles.fact}>
              {fact}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
