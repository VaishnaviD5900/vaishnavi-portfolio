import { useInView } from '@/hooks/useInView'

export default function FadeIn({ children, className = '', delay = 0 }) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transition-all duration-700 ease-out
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
