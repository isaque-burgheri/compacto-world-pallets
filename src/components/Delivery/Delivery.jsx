import { business } from '../../data/business'
import { useReveal } from '../../hooks/useReveal'
import styles from './Delivery.module.css'

export default function Delivery() {
  const revealRef = useReveal()

  return (
    <section id="entrega" className={`${styles.section} band`}>
      <div className={`${styles.inner} reveal`} ref={revealRef}>
        <div>
          <p className={`eyebrow ${styles.eyebrow}`}>Área de entrega</p>
          <h2 className={`heading ${styles.title}`}>
            Entregamos na capital
            <br />
            e na região
            <br />
            metropolitana
          </h2>
          <p className={styles.lede}>
            Atendemos São Paulo e região com agilidade — do pedido ao recebimento dos seus paletes PBR
            novos.
          </p>
        </div>

        <div className={styles.infoBlock}>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Endereço</span>
            <span className={styles.infoValue}>{business.address}</span>
          </div>
          {business.whatsapp.map((wa) => (
            <div key={wa.label} className={styles.infoRow}>
              <span className={styles.infoLabel}>WhatsApp</span>
              <span className={styles.infoValue}>
                <a href={wa.url} target="_blank" rel="noopener noreferrer">
                  {wa.label}
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
