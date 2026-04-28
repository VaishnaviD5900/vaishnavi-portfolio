import { useState } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'
import { TESTIMONIALS, LINKEDIN_RECOMMENDATIONS_URL } from '@/data/portfolio'

const TRUNCATE_LENGTH = 220

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function TestimonialCard({ quote, name, role, initials, date }) {
  const [expanded, setExpanded] = useState(false)
  const isTruncatable = quote.length > TRUNCATE_LENGTH
  const displayedQuote =
    isTruncatable && !expanded
      ? quote.slice(0, TRUNCATE_LENGTH).trimEnd() + '...'
      : quote

  return (
    <div className="bg-white dark:bg-ink-500 rounded-2xl p-6 border border-lavender-DEFAULT/30 dark:border-white/5 flex flex-col h-full">
      <p className="font-serif text-5xl text-lavender-DEFAULT dark:text-lavender-dark/70 leading-[0.5] mb-4 select-none">"</p>

      <div className="flex-1">
        <p className="text-sm text-surface-secondary leading-loose italic">
          {displayedQuote}
        </p>
        {isTruncatable && (
          <button
            onClick={() => setExpanded((e) => !e)}
            className="mt-2 text-xs font-medium text-rose-dark dark:text-rose-DEFAULT hover:underline underline-offset-2 transition-colors"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>

      <div className="border-t border-surface mt-5 pt-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-lavender-dark to-rose-dark flex items-center justify-center text-xs text-white font-medium shrink-0">
              {initials}
            </div>
            <div>
              <p className="text-sm font-medium leading-tight">{name}</p>
              <p className="text-xs text-surface-muted mt-0.5">{role}</p>
              {date && (
                <p className="text-xs text-surface-muted opacity-70">{date}</p>
              )}
            </div>
          </div>
          <a
            href={LINKEDIN_RECOMMENDATIONS_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="View on LinkedIn"
            className="shrink-0 text-surface-muted hover:text-[#0A66C2] transition-colors duration-200"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-5xl mx-auto px-6 py-24">
      <FadeIn>
        <SectionLabel>Kind words</SectionLabel>
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-serif text-3xl md:text-4xl">Testimonials</h2>
          <a
            href={LINKEDIN_RECOMMENDATIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-rose-dark dark:text-rose-DEFAULT border border-rose-dark/30 dark:border-rose-DEFAULT/30 px-4 py-2 rounded-full hover:bg-rose-light dark:hover:bg-rose-dark/20 transition-all duration-200"
          >
            View all on LinkedIn
          </a>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t, i) => (
          <FadeIn key={t.name} delay={i * 100}>
            <TestimonialCard {...t} />
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
