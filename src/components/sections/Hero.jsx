import FadeIn from '@/components/ui/FadeIn'

const CHIPS = ['React', 'Vue.js', 'Angular', 'Javascript', 'TypeScript']

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-20">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -right-16 -top-16 w-[420px] h-[420px] rounded-[60%_40%_55%_45%_/_45%_55%_40%_60%] bg-gradient-to-br from-rose-light to-lavender-light dark:from-rose-dark/20 dark:to-lavender-dark/15 opacity-70 animate-morph" />
      <div className="pointer-events-none absolute left-8 bottom-8 w-48 h-48 rounded-[50%_50%_40%_60%] bg-sage-light dark:bg-sage-dark/10 opacity-50 animate-morph-slow" />

      <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <FadeIn>
            <p className="text-sm tracking-widest text-surface-muted uppercase mb-3">Hello, I'm</p>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] mb-3">
              Vaishnavi<br />
              <em className="text-rose-dark dark:text-rose-DEFAULT not-italic">Deshpande</em>
            </h1>
            <p className="text-lg text-surface-secondary font-light mb-6">
              Frontend Engineer · MSc Computer Science
            </p>
            <p className="text-sm text-surface-secondary leading-relaxed max-w-md">
              Crafting delightful, scalable web experiences with 4+ years of expertise
              across Angular, React, and Vue — from enterprise dashboards to research tools.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#projects"
                className="bg-rose-dark text-white px-7 py-3 rounded-full text-sm font-medium hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose-dark/30 transition-all duration-200"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="border border-rose-dark/60 text-rose-dark dark:text-rose-DEFAULT px-7 py-3 rounded-full text-sm font-medium hover:bg-rose-light dark:hover:bg-rose-dark/20 transition-all duration-200"
              >
                Get in touch
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Avatar */}
        <FadeIn delay={150} className="flex flex-col items-center">
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-[40%_60%_55%_45%_/_45%_55%_60%_40%] overflow-hidden border border-white/20 animate-morph shadow-2xl">
            <img
              src="/avatar.PNG"
              alt="Vaishnavi Deshpande"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-5 justify-center">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="text-xs px-3.5 py-1.5 rounded-full bg-surface-secondary dark:bg-ink-500 border border-surface text-sage-dark dark:text-sage-DEFAULT"
              >
                {chip}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
