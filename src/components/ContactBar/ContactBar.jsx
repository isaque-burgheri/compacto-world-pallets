import { business } from '../../data/business'
import styles from './ContactBar.module.css'

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 22s7-6.1 7-11.5A7 7 0 0 0 5 10.5C5 15.9 12 22 12 22Z" />
      <circle cx="12" cy="10.2" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2 22l5.34-1.4a9.83 9.83 0 0 0 4.7 1.2h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.48 2 12.04 2Zm5.76 14.06c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.02.24-3.46-.72-2.94-1.16-4.78-4.2-4.92-4.4-.15-.2-1.17-1.56-1.17-2.98 0-1.42.75-2.12 1.01-2.4.27-.3.58-.37.78-.37h.56c.18 0 .42-.7.65.5.24.58.8 1.98.87 2.12.7.15.12.32.02.51-.1.2-.15.32-.3.5l-.44.5c-.15.15-.3.31-.13.6.17.3.75 1.24 1.6 2 1.1.98 2.02 1.29 2.31 1.44.3.15.47.12.64-.7.17-.2.73-.86.93-1.15.2-.3.39-.24.66-.15.27.1 1.68.8 1.97.94.29.15.48.22.55.34.07.13.07.74-.17 1.42Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </svg>
  )
}

export default function ContactBar({ className = '' }) {
  const [wa1, wa2] = business.whatsapp

  return (
    <div className={`${styles.bar} ${className}`}>
      <a
        className={`${styles.group} ${styles.link}`}
        href={business.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.icon}>
          <PinIcon />
        </span>
        <span className={styles.lines}>
          <span>{business.addressLines[0]}</span>
          <span className={styles.muted}>{business.addressLines[1]}</span>
        </span>
      </a>

      <div className={styles.group}>
        <span className={styles.icon}>
          <WhatsAppIcon />
        </span>
        <span className={styles.lines}>
          <a className={styles.link} href={wa1.url} target="_blank" rel="noopener noreferrer">
            {wa1.label}
          </a>
          <a className={styles.link} href={wa2.url} target="_blank" rel="noopener noreferrer">
            {wa2.label}
          </a>
        </span>
      </div>

      {/* CONFIRMAR: e-mail real da Compacto (hoje é placeholder em business.js) */}
      <a className={`${styles.group} ${styles.link}`} href={`mailto:${business.email}`}>
        <span className={styles.icon}>
          <MailIcon />
        </span>
        <span className={styles.lines}>
          <span>Entre em contato</span>
          <span className={styles.gold}>para orçamento.</span>
        </span>
      </a>
    </div>
  )
}
