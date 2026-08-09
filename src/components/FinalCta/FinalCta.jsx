import { business } from '../../data/business'
import Reveal from '../Reveal/Reveal'
import QuoteForm from '../QuoteForm/QuoteForm'
import styles from './FinalCta.module.css'

export default function FinalCta() {
  return (
    <section id="orcamento" className={`${styles.section} band`}>
      <Reveal as="div" className={styles.inner}>
        <h2 className={`heading ${styles.title}`}>Solicite seu orçamento de paletes</h2>
        <p className={styles.lede}>
          Preencha os dados abaixo e montamos a mensagem para você, ou fale direto no WhatsApp com a
          quantidade, a medida do palete e o endereço de entrega.
        </p>

        <QuoteForm />

        <p className={styles.divider}>ou fale direto</p>

        <div className={styles.ctas}>
          {business.whatsapp.map((wa) => (
            <a key={wa.label} className={styles.button} href={wa.url} target="_blank" rel="noopener noreferrer">
              WhatsApp {wa.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
