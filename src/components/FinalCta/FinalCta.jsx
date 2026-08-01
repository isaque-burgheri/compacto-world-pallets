import { business } from '../../data/business'
import { useReveal } from '../../hooks/useReveal'
import QuoteForm from '../QuoteForm/QuoteForm'
import styles from './FinalCta.module.css'

export default function FinalCta() {
  const revealRef = useReveal()

  return (
    <section id="orcamento" className={`${styles.section} band`}>
      <div className={`${styles.inner} reveal`} ref={revealRef}>
        <h2 className={`heading ${styles.title}`}>Diga quantos paletes você precisa</h2>
        <p className={styles.lede}>
          Preencha os dados abaixo e a gente monta a mensagem pra você, ou chame direto no WhatsApp com
          a quantidade, a medida do palete e o endereço de entrega.
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
      </div>
    </section>
  )
}
