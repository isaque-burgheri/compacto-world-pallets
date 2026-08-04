import { useEffect, useRef, useState } from 'react'
import { galleryPhotos, galleryVideos, galleryAssetUrl } from '../../data/gallery'
import Reveal from '../Reveal/Reveal'
import styles from './Gallery.module.css'

function ChevronIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path
        d={direction === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CarouselRow({ children, label }) {
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateEdges = () => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4)
  }

  useEffect(() => {
    updateEdges()
    const el = trackRef.current
    if (!el) return
    const onScroll = () => updateEdges()
    el.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const scrollByPage = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.86, behavior: 'smooth' })
  }

  return (
    <div className={styles.carousel}>
      <button
        type="button"
        className={styles.arrow}
        data-side="prev"
        onClick={() => scrollByPage(-1)}
        disabled={atStart}
        aria-label={`${label}: ver anteriores`}
      >
        <ChevronIcon direction="left" />
      </button>

      <div className={styles.track} ref={trackRef}>
        {children}
      </div>

      <button
        type="button"
        className={styles.arrow}
        data-side="next"
        onClick={() => scrollByPage(1)}
        disabled={atEnd}
        aria-label={`${label}: ver próximas`}
      >
        <ChevronIcon direction="right" />
      </button>
    </div>
  )
}

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    if (openIndex === null) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpenIndex(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [openIndex])

  const openPhoto = openIndex !== null ? galleryPhotos[openIndex] : null

  return (
    <section id="galeria" className={`${styles.section} band`}>
      <Reveal as="div">
        <p className={`eyebrow ${styles.eyebrow}`}>Galpão, produto e equipe</p>
        <h2 className={`heading ${styles.title}`}>Como é de perto</h2>

        <CarouselRow label="Fotos">
          {galleryPhotos.map((photo, index) => (
            <button
              key={photo.file}
              type="button"
              className={styles.photoItem}
              onClick={() => setOpenIndex(index)}
              aria-label={`Ampliar foto: ${photo.alt}`}
            >
              <img src={galleryAssetUrl(photo.file)} alt={photo.alt} loading="lazy" decoding="async" />
            </button>
          ))}
        </CarouselRow>

        <p className={styles.videoHeading}>Bastidores em vídeo</p>
        <CarouselRow label="Vídeos">
          {galleryVideos.map((video) => (
            <div key={video.file} className={styles.videoItem}>
              <video
                src={galleryAssetUrl(video.file)}
                poster={galleryAssetUrl(video.poster)}
                controls
                preload="none"
                playsInline
                aria-label={`${video.label}: registro em vídeo do galpão e da produção de paletes PBR da Compacto World Pallets`}
              />
            </div>
          ))}
        </CarouselRow>
      </Reveal>

      {openPhoto && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={openPhoto.alt}
          onClick={() => setOpenIndex(null)}
        >
          <button type="button" className={styles.close} onClick={() => setOpenIndex(null)}>
            Fechar ✕
          </button>
          <img
            className={styles.lightboxImg}
            src={galleryAssetUrl(openPhoto.file)}
            alt={openPhoto.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
