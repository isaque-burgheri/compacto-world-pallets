import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Divider from './components/Divider/Divider'
import PbrStandard from './components/PbrStandard/PbrStandard'
import Commitments from './components/Commitments/Commitments'
import Gallery from './components/Gallery/Gallery'
import Delivery from './components/Delivery/Delivery'
import FinalCta from './components/FinalCta/FinalCta'
import Footer from './components/Footer/Footer'

export default function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      autoToggle: true,
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1,
      wheelMultiplier: 1,
      syncTouch: true,
      syncTouchLerp: 0.075,
      touchMultiplier: 1.2,
      touchInertiaMultiplier: 20
    })

    return () => lenis.destroy()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Divider />
        <PbrStandard />
        <Divider />
        <Commitments />
        <Divider />
        <Gallery />
        <Delivery />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
