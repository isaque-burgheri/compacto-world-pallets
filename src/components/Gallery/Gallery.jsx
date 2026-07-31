import { useEffect, useState } from 'react'
import { galleryPhotos, galleryVideos, galleryAssetUrl } from '../../data/gallery'
import { useReveal } from '../../hooks/useReveal'
import styles from './Gallery.module.css'

export default function Gallery() {
  const revealRef = useReveal()
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
      <div className="reveal" ref={revealRef}>
        <p className={`eyebrow ${styles.eyebrow}`}>Galpão, produto e equipe</p>
        <h2 className={`heading ${styles.title}`}>Como é de perto</h2>

        <div className={styles.grid}>
          {galleryPhotos.map((photo, index) => (
            <button
              key={photo.file}
              type="button"
              className={styles.tile}
              onClick={() => setOpenIndex(index)}
              aria-label={`Ampliar foto: ${photo.alt}`}
            >
              <img src={galleryAssetUrl(photo.file)} alt={photo.alt} loading="lazy" decoding="async" />
              <span className={styles.tag} aria-hidden="true">
                CWP · {String(index + 1).padStart(2, '0')}
              </span>
            </button>
          ))}
        </div>

        <p className={styles.videoHeading}>Bastidores em vídeo</p>
        <div className={styles.videoGrid}>
          {galleryVideos.map((video) => (
            <video
              key={video.file}
              src={galleryAssetUrl(video.file)}
              controls
              preload="metadata"
              playsInline
              aria-label={`${video.label}: registro em vídeo do galpão e da produção de paletes PBR da Compacto World Pallets`}
            />
          ))}
        </div>
      </div>

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
