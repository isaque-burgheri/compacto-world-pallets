import { business } from '../../data/business'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <div className={styles.wordmark}>
            <span>Compacto</span>
            <span>World Pallets</span>
          </div>
          <p className={styles.tagline}>{business.tagline}</p>
        </div>

        <nav className={styles.column} aria-label="Navegação">
          <p className={`eyebrow ${styles.columnTitle}`}>Navegação</p>
          <a href="#padrao-pbr">O padrão PBR</a>
          <a href="#compromissos">Compromissos</a>
          <a href="#galeria">Galeria</a>
          <a href="#entrega">Entrega</a>
          <a href="#orcamento">Orçamento</a>
        </nav>

        <nav className={styles.column} aria-label="Produtos">
          <p className={`eyebrow ${styles.columnTitle}`}>Produtos</p>
          <a href="#padrao-pbr">Paletes PBR novos</a>
          <a href="#padrao-pbr">Paletes sob medida</a>
        </nav>

        <nav className={styles.column} aria-label="Contato">
          <p className={`eyebrow ${styles.columnTitle}`}>Contato</p>
          {business.whatsapp.map((wa) => (
            <a key={wa.label} href={wa.url} target="_blank" rel="noopener noreferrer">
              {wa.label}
            </a>
          ))}
          <a href="#entrega">{business.address}</a>
        </nav>
      </div>

      <div className={styles.bottom}>© {new Date().getFullYear()} Compacto World Pallets</div>
    </footer>
  )
}
