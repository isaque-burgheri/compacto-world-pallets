import { pbrSpec } from '../../data/business'
import { useReveal } from '../../hooks/useReveal'
import styles from './PbrStandard.module.css'

export default function PbrStandard() {
  const revealRef = useReveal()

  return (
    <section id="padrao-pbr" className={`${styles.section} band`}>
      <div className={`${styles.grid} reveal`} ref={revealRef}>
        <div>
          <p className={`eyebrow ${styles.eyebrow}`}>Ficha técnica</p>
          <h2 className={`heading ${styles.title}`}>
            O padrão PBR
            <br />
            é a referência do setor
          </h2>

          <div className={styles.text}>
            <p>
              O PBR existe para eliminar a variação: medida única de 1200 × 1000 mm, dupla face e 4
              entradas para empilhadeira, encaixando direto no seu porta-paletes sem adaptação e sem
              perda de espaço no armazenamento.
            </p>
            <p>
              Todos os nossos paletes PBR são novos — não são reformados nem recuperados. Isso significa
              madeira íntegra, pregos firmes e estrutura pronta para suportar carga desde o primeiro uso.
            </p>
          </div>
        </div>

        <div className={styles.table}>
          {pbrSpec.map((item) => (
            <div key={item.label} className={styles.row}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.value}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
