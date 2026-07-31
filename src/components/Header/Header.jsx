import { business } from '../../data/business'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wordmark}>
        <span>Compacto</span>
        <span>World Pallets</span>
      </div>

      <nav className={styles.nav} aria-label="Navegação principal">
        <a href="#padrao-pbr">O padrão PBR</a>
        <a href="#compromissos">Compromissos</a>
        <a href="#galeria">Galeria</a>
        <a href="#entrega">Entrega</a>
        <a href="#orcamento">Orçamento</a>
      </nav>

      <div className={styles.actions}>
        <a className={styles.cta} href={business.whatsapp[0].url} target="_blank" rel="noopener noreferrer">
          Pedir orçamento
        </a>
      </div>
    </header>
  )
}
