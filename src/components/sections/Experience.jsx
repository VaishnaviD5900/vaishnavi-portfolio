import SectionLabel from '@/components/ui/SectionLabel'
import Tag from '@/components/ui/Tag'
import FadeIn from '@/components/ui/FadeIn'
import { EXPERIENCE } from '@/data/portfolio'

const DOT_COLORS = {
  rose:     'bg-rose-dark dark:bg-rose-DEFAULT shadow-[0_0_0_3px_theme(colors.rose.dark/0.2)]',
  lavender: 'bg-lavender-dark dark:bg-lavender-DEFAULT shadow-[0_0_0_3px_theme(colors.lavender.dark/0.2)]',
  sage:     'bg-sage-dark dark:bg-sage-DEFAULT shadow-[0_0_0_3px_theme(colors.sage.dark/0.2)]',
  peach:    'bg-peach-dark dark:bg-peach-DEFAULT shadow-[0_0_0_3px_theme(colors.peach.dark/0.2)]',
}

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
      <FadeIn>
        <SectionLabel>Career journey</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl mb-12">
          Work{' '}
          <em className="text-rose-dark dark:text-rose-DEFAULT">experience</em>
        </h2>
      </FadeIn>

      <div className="relative pl-8">
        {/* Timeline line */}
        <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-rose-DEFAULT via-lavender-DEFAULT to-sage-DEFAULT dark:from-rose-mid dark:via-lavender-DEFAULT dark:to-sage-DEFAULT opacity-50" />

        {EXPERIENCE.map(({ role, company, location, period, color, description, tech }, i) => (
          <FadeIn key={`${company}-${role}`} delay={i * 100}>
            <div className="relative mb-12 last:mb-0">
              {/* Dot */}
              <div className={`absolute -left-[2.1rem] top-1.5 w-3 h-3 rounded-full ${DOT_COLORS[color] ?? DOT_COLORS.rose}`} />

              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-serif text-xl">{role}</h3>
                  <p className="text-sm text-rose-dark dark:text-rose-DEFAULT font-medium mt-0.5">{company} · {location}</p>
                </div>
                <span className="text-xs text-surface-muted bg-rose-light dark:bg-[#3D1E28] text-rose-dark dark:text-[#F0A8B8] px-3 py-1 rounded-full shrink-0">
                  {period}
                </span>
              </div>

              <p className="text-sm text-surface-secondary leading-loose mb-3">{description}</p>

              <div className="flex flex-wrap gap-1.5">
                {tech.map((t) => (
                  <Tag key={t} label={t} color="sage" />
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
