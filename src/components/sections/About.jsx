import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'
import { STATS } from '@/data/portfolio'

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
        {/* Stats */}
        <FadeIn className="flex flex-col gap-4">
          <SectionLabel>By the numbers</SectionLabel>
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="bg-surface-secondary dark:bg-ink-500 border border-surface rounded-2xl p-5 hover:-translate-y-1 transition-transform duration-200"
            >
              <p className="font-serif text-4xl text-rose-dark dark:text-rose-DEFAULT leading-none">{value}</p>
              <p className="text-xs text-surface-muted mt-1">{label}</p>
            </div>
          ))}
        </FadeIn>

        {/* Text */}
        <FadeIn delay={100}>
          <SectionLabel>About me</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl leading-snug mb-5">
            Building the web, one{' '}
            <em className="text-rose-dark dark:text-rose-DEFAULT">thoughtful</em>{' '}
            component at a time.
          </h2>
          <p className="text-sm text-surface-secondary leading-loose mb-4">
            I'm a frontend-focused software engineer who loves turning complex ideas into
            clean, intuitive interfaces. With a background spanning{' '}
            <span className="bg-rose-light dark:bg-[#3D1E28] text-rose-dark dark:text-[#F0A8B8] px-1.5 py-0.5 rounded text-[0.85em]">
              enterprise SaaS
            </span>
            ,{' '}
            <span className="bg-rose-light dark:bg-[#3D1E28] text-rose-dark dark:text-[#F0A8B8] px-1.5 py-0.5 rounded text-[0.85em]">
              data dashboards
            </span>
            , and{' '}
            <span className="bg-rose-light dark:bg-[#3D1E28] text-rose-dark dark:text-[#F0A8B8] px-1.5 py-0.5 rounded text-[0.85em]">
              design systems
            </span>
            , I bring both technical depth and design sensibility to every project.
          </p>
          <p className="text-sm text-surface-secondary leading-loose">
            I hold MSc in Computer Science from the University of
            Southampton with a Distinction, and I'm currently working at SLB in the UK —
            building tools that support real engineering decisions at scale. I also love
            cricket, cooking, and tending to my little plant collection 🌿
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
