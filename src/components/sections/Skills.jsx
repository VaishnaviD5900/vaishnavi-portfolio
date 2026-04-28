import SectionLabel from '@/components/ui/SectionLabel'
import Tag from '@/components/ui/Tag'
import FadeIn from '@/components/ui/FadeIn'
import { SKILLS } from '@/data/portfolio'

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-rose-light via-lavender-light to-sage-light dark:from-ink-600 dark:via-ink-600 dark:to-ink-600 border-y border-surface py-24 px-6 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionLabel>What I work with</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl mb-10">
            Technical{' '}
            <em className="text-rose-dark dark:text-rose-DEFAULT">skills</em>
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS.map(({ category, color, items }, i) => (
            <FadeIn key={category} delay={i * 80}>
              <div className="bg-white/85 dark:bg-ink-500 backdrop-blur-sm rounded-2xl p-5 border border-white/60 dark:border-white/5 h-full hover:border-surface-md transition-all duration-200">
                <p className={`text-xs font-medium tracking-widest uppercase mb-4 ${colorClass(color)}`}>
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Tag key={item} label={item} color={color} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function colorClass(color) {
  return {
    rose:     'text-rose-dark dark:text-rose-DEFAULT',
    sage:     'text-sage-dark dark:text-sage-DEFAULT',
    lavender: 'text-lavender-dark dark:text-lavender-DEFAULT',
    peach:    'text-peach-dark dark:text-peach-DEFAULT',
  }[color] ?? 'text-rose-dark'
}
