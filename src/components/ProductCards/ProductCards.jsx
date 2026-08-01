import { business } from '../../data/business'
import { productCards } from '../../data/products'
import Reveal from '../Reveal/Reveal'
import styles from './ProductCards.module.css'

export default function ProductCards() {
  return (
    <section id="produtos" className={`${styles.section} band`}>
      <Reveal as="div">
        <p className={`eyebrow ${styles.eyebrow}`}>Nossos paletes</p>
        <h2 className={`heading ${styles.title}`}>Padrão ou sob medida</h2>
      </Reveal>

      <div className={styles.grid}>
        {productCards.map((card, index) => (
          <Reveal key={card.title} as="article" className={styles.card} delay={index * 150}>
            <div className={styles.imageWrap}>
              <img src={card.image} alt={card.alt} loading="lazy" decoding="async" />
            </div>

            <div className={styles.body}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.description}>{card.description}</p>

              <div className={styles.specs}>
                {card.specs.map((spec) => (
                  <div key={spec.label} className={styles.specRow}>
                    <span className={styles.specLabel}>{spec.label}</span>
                    <span className={styles.specValue}>{spec.value}</span>
                  </div>
                ))}
              </div>

              <a
                className={styles.cta}
                href={business.whatsapp[0].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar orçamento
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
