import { useEffect, useState } from 'react'

/**
 * Faz o vídeo em videoRef avançar/retroceder conforme o scroll dentro de
 * wrapRef (um contêiner mais alto que a viewport). Enquanto o usuário rola
 * pela altura extra desse contêiner, currentTime acompanha a posição do
 * scroll; fora dela, o vídeo fica parado no primeiro ou no último frame.
 *
 * Desativa sozinho (isStatic = true) sob prefers-reduced-motion ou abaixo de
 * `narrowBreakpoint` — nesses casos não expande a área de scroll nem escuta
 * scroll, e quem usa o hook deve renderizar o vídeo em fluxo normal.
 */
export function useScrollScrub(wrapRef, videoRef, { narrowBreakpoint = 900 } = {}) {
  const [isStatic, setIsStatic] = useState(false)

  useEffect(() => {
    const reducedMq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const narrowMq = window.matchMedia(`(max-width: ${narrowBreakpoint}px)`)
    const update = () => setIsStatic(reducedMq.matches || narrowMq.matches)

    update()
    reducedMq.addEventListener('change', update)
    narrowMq.addEventListener('change', update)
    return () => {
      reducedMq.removeEventListener('change', update)
      narrowMq.removeEventListener('change', update)
    }
  }, [narrowBreakpoint])

  useEffect(() => {
    if (isStatic) return

    const wrap = wrapRef.current
    const video = videoRef.current
    if (!wrap || !video) return

    let duration = 0
    const onLoadedMetadata = () => {
      duration = video.duration || 0
    }
    video.addEventListener('loadedmetadata', onLoadedMetadata)
    if (video.readyState >= 1) onLoadedMetadata()

    let rafId = null
    const update = () => {
      rafId = null
      if (!duration) return

      const rect = wrap.getBoundingClientRect()
      const total = wrap.offsetHeight - window.innerHeight
      if (total <= 0) return

      const scrolled = -rect.top
      const progress = Math.min(1, Math.max(0, scrolled / total))
      const target = progress * duration

      if (Math.abs(video.currentTime - target) > 0.02) {
        video.currentTime = target
      }
    }

    const onScroll = () => {
      if (rafId === null) rafId = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      video.removeEventListener('loadedmetadata', onLoadedMetadata)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [wrapRef, videoRef, isStatic])

  return { isStatic }
}
