import { differentials } from '../../data/business'
import Reveal from '../Reveal/Reveal'
import styles from './Commitments.module.css'

function HighlightedTitle({ title, highlight }) {
  const index = title.indexOf(highlight)
  if (index === -1) return title

  const before = title.slice(0, index)
  const after = title.slice(index + highlight.length)

  return (
    <>
      {before}
      <span className={styles.highlight}>{highlight}</span>
      {after}
    </>
  )
}

export default function Commitments() {
  return (
    <section id="compromissos" className={`${styles.section} band`}>
      <div className={styles.grid}>
        {differentials.map((item, index) => (
          <Reveal key={item.label} as="div" className={styles.cell} delay={index * 100}>
            <p className={`eyebrow ${styles.label}`}>{item.label}</p>
            <h3 className={`heading ${styles.title}`}>
              <HighlightedTitle title={item.title} highlight={item.highlight} />
            </h3>
            <p className={styles.text}>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
