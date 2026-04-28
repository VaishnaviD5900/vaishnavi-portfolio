import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'
import { TESTIMONIALS } from '@/data/portfolio'

export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-5xl mx-auto px-6 py-24">
      <FadeIn>
        <SectionLabel>Kind words</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl mb-10">Testimonials</h2>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-5">
        {TESTIMONIALS.map(({ quote, name, role, initials }, i) => (
          <FadeIn key={name} delay={i * 100}>
            <div className="bg-white dark:bg-ink-500 rounded-2xl p-6 border border-lavender-DEFAULT/30 dark:border-white/5 flex flex-col h-full">
              <p className="font-serif text-5xl text-lavender-DEFAULT dark:text-lavender-dark/70 leading-[0.5] mb-4">"</p>
              <p className="text-sm text-surface-secondary leading-loose italic flex-1">{quote}</p>

              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-surface">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-lavender-DEFAULT to-rose-DEFAULT dark:from-lavender-dark/60 dark:to-rose-dark/60 flex items-center justify-center text-xs text-white font-medium shrink-0">
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-medium">{name}</p>
                  <p className="text-xs text-surface-muted mt-0.5">{role}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
