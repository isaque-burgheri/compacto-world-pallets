import ContactBar from '../ContactBar/ContactBar'
import styles from './Hero.module.css'

const BANNER_SRC = '/media/brand/hero-banner-b.webp'
const BANNER_ALT =
  'Arte da Compacto World Pallets: globo cercado de paletes, caminhões e guindastes, centralizado, sobre fundo de céu'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img
        className={styles.banner}
        src={BANNER_SRC}
        alt={BANNER_ALT}
        width="2200"
        height="801"
        fetchpriority="high"
      />

      <ContactBar className={styles.contact} />
    </section>
  )
}
