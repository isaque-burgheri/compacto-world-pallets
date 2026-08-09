import { business } from '../../data/business'
import Reveal from '../Reveal/Reveal'
import styles from './Delivery.module.css'

export default function Delivery() {
  return (
    <section id="entrega" className={`${styles.section} band`}>
      <Reveal as="div" className={styles.inner}>
        <div>
          <p className={`eyebrow ${styles.eyebrow}`}>Área de entrega</p>
          <h2 className={`heading ${styles.title}`}>
            Entrega
            <br />
            sob consulta,
            <br />
            direto pra você
          </h2>
          <p className={styles.lede}>
            A cobertura de entrega varia de acordo com o pedido — fale com a gente pelo WhatsApp e
            confirme as condições para o seu endereço.
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

        <div className={styles.mapWrap}>
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(business.address)}&output=embed`}
            title={`Mapa: ${business.address}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </Reveal>
    </section>
  )
}
