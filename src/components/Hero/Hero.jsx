import { useState } from 'react'
import ContactBar from '../ContactBar/ContactBar'
import styles from './Hero.module.css'

// CONFIRMAR COM O CLIENTE: três versões do banner em avaliação. Assim que o
// cliente decidir, troque o <img> abaixo pra usar só o src escolhido e
// remova BANNER_OPTIONS, o useState e o botão de alternar.
const BANNER_OPTIONS = [
  {
    src: '/media/brand/hero-banner-c.webp',
    label: 'Opção 1 · esquerda',
    alt: 'Arte da Compacto World Pallets: globo cercado de paletes, caminhões e guindastes, alinhado à esquerda, sobre fundo de céu'
  },
  {
    src: '/media/brand/hero-banner-a.webp',
    label: 'Opção 2 · com fundo',
    alt: 'Arte da Compacto World Pallets: globo cercado de paletes, caminhões e guindastes, com pátio de armazém, colaboradores e caminhão de entrega ao fundo'
  },
  {
    src: '/media/brand/hero-banner-b.webp',
    label: 'Opção 3 · sem fundo',
    alt: 'Arte da Compacto World Pallets: globo cercado de paletes, caminhões e guindastes, centralizado, sobre fundo de céu'
  }
]

export default function Hero() {
  const [optionIndex, setOptionIndex] = useState(0)
  const option = BANNER_OPTIONS[optionIndex]

  const toggleOption = () => {
    setOptionIndex((i) => (i + 1) % BANNER_OPTIONS.length)
  }

  return (
    <section className={styles.hero}>
      <img
        className={styles.banner}
        src={option.src}
        alt={option.alt}
        width="2200"
        height="801"
        fetchpriority="high"
      />

      {/* Alternador temporário pro cliente comparar as versões do banner. */}
      <button
        type="button"
        className={styles.bannerSwitch}
        onClick={toggleOption}
        aria-label="Ver a próxima versão do banner"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M17 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 22l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {option.label}
      </button>

      <ContactBar className={styles.contact} />
    </section>
  )
}
