import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'
import { EDUCATION } from '@/data/portfolio'

export default function Education() {
  return (
    <section
      id="education"
      className="bg-lavender-light dark:bg-[#1E1A35] border-y border-surface py-24 px-6 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionLabel>Academic background</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl mb-10">Education</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {EDUCATION.map(({ degree, university, period, badge, modules, highlight }, i) => (
            <FadeIn key={degree} delay={i * 100}>
              <div className="relative bg-white dark:bg-ink-500 rounded-2xl p-7 border border-lavender-DEFAULT/30 dark:border-white/5 overflow-hidden hover:-translate-y-1 transition-transform duration-200 h-full">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lavender-DEFAULT to-rose-DEFAULT" />

                <h3 className="font-serif text-xl mt-1 mb-1">{degree}</h3>
                <p className="text-sm font-medium text-lavender-dark dark:text-lavender-DEFAULT mb-1">{university}</p>
                <p className="text-xs text-surface-muted mb-3">{period}</p>

                <span className="inline-block bg-lavender-light dark:bg-lavender-dark/30 text-lavender-dark dark:text-lavender-DEFAULT text-xs px-3 py-1 rounded-full font-medium mb-4">
                  {badge}
                </span>

                <p className="text-xs text-surface-secondary leading-loose mb-3">{modules}</p>
                <p className="text-xs text-surface-secondary leading-loose">
                  <strong className="font-medium text-lavender-dark dark:text-lavender-DEFAULT">
                    {highlight.split(':')[0]}:
                  </strong>
                  {highlight.split(':').slice(1).join(':')}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
