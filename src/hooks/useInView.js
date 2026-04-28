import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, isInView].
 * Attach `ref` to a DOM element; `isInView` becomes true once it
 * enters the viewport (and stays true — no toggle back).
 */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.disconnect() // fire once
      }
    }, { threshold: 0.15, ...options })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}
