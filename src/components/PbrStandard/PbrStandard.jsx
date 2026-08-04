import { useRef } from 'react'
import { business, heroFacts, pbrSpec } from '../../data/business'
import Reveal from '../Reveal/Reveal'
import { useScrollScrub } from '../../hooks/useScrollScrub'
import styles from './PbrStandard.module.css'

function PitchCopy() {
  return (
    <>
      <h1 className={`heading ${styles.pitchTitle}`}>
        Paletes PBR novos e sob medida,
        <br />
        prontos <span className={styles.highlight}>para carga.</span>
      </h1>

      <p className={styles.pitchLede}>{business.materialCall}.</p>

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
    </>
  )
}

export default function PbrStandard() {
  const wrapRef = useRef(null)
  const videoRef = useRef(null)
  const { isStatic } = useScrollScrub(wrapRef, videoRef)

  return (
    <section id="padrao-pbr" className={`${styles.section} band`}>
      <div ref={wrapRef} className={isStatic ? styles.pitchScrubStatic : styles.pitchScrub}>
        <div className={styles.pitchSticky}>
          <Reveal as="div" className={styles.pitch}>
            <PitchCopy />
          </Reveal>

          <div className={styles.pitchVideoCol}>
            {/* Vídeo mudo, sem controles. No desktop avança/retrocede com o
                scroll (useScrollScrub); em reduced-motion ou telas estreitas
                vira um loop ambiente simples. Puramente decorativo. */}
            <video
              ref={videoRef}
              className={styles.pitchVideo}
              src="/media/video/pitch-scroll2.mp4"
              muted
              playsInline
              preload="auto"
              autoPlay={isStatic}
              loop={isStatic}
              aria-hidden="true"
              tabIndex={-1}
            />
            <div className={styles.pitchVideoOverlay} aria-hidden="true" />
          </div>
        </div>
      </div>

      <Reveal as="div" className={styles.grid} delay={150}>
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
            <p>
              Precisa de uma medida diferente da PBR? Também fazemos paletes sob medida, conforme a
              necessidade do seu projeto — dimensões e capacidade sob consulta.
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
      </Reveal>
    </section>
  )
}
