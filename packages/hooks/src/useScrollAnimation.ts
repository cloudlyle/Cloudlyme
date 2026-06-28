import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useScrollAnimation(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}
