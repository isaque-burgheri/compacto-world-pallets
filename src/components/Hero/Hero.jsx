import ContactBar from '../ContactBar/ContactBar'
import styles from './Hero.module.css'

export default function Hero() {
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

      <ContactBar className={styles.contact} />
    </section>
  )
}
