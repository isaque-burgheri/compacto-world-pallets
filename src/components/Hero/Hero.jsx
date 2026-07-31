import { business, heroFacts } from '../../data/business'
import { useReveal } from '../../hooks/useReveal'
import styles from './Hero.module.css'

export default function Hero() {
  const revealRef = useReveal()

  return (
    <section className={styles.hero}>
      <div className={`${styles.copy} reveal`} ref={revealRef}>
        <p className={`eyebrow ${styles.eyebrow}`}>PBR-1 · 1,20 × 1,00 m · madeira de pinus</p>

        <h1 className={`heading ${styles.title}`}>
          Paletes PBR novos,
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
          <a className={styles.ctaGhost} href={`tel:+5511921218541`}>
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

      <div className={styles.diagramWrap}>
        <img
          className={styles.emblem}
          src="/media/brand/emblem.webp"
          alt="Marca Compacto World Pallets: globo com caminhão, guindaste e paletes, letreiro em madeira e dourado"
          width="860"
          height="900"
        />
      </div>
    </section>
  )
}
