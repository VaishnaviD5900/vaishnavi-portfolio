import SectionLabel from '@/components/ui/SectionLabel'
import Tag from '@/components/ui/Tag'
import FadeIn from '@/components/ui/FadeIn'
import { OPEN_SOURCE } from '@/data/portfolio'

function ExternalIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14L21 3" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#F5C9A0">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

export default function OpenSource() {
  return (
    <section
      id="opensource"
      className="bg-peach-light/40 dark:bg-[#2E1E10]/30 border-y border-surface py-24 px-6 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionLabel>Community contributions</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl mb-3">
            Open Source
          </h2>
          <p className="text-sm text-surface-secondary leading-loose mb-10 max-w-xl">
            Bug fixes contributed to production open source libraries used by thousands of developers worldwide.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-5">
          {OPEN_SOURCE.map((item, i) => (
            <FadeIn key={item.title} delay={i * 100}>
              <div className="bg-white dark:bg-ink-500 rounded-2xl p-6 border border-surface dark:border-white/5 hover:border-surface-md dark:hover:border-white/10 hover:-translate-y-1 transition-all duration-200">

                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-1.5 bg-sage-light dark:bg-[#1A2E1A] text-sage-dark dark:text-sage-DEFAULT text-xs font-medium px-3 py-1.5 rounded-full">
                      <GithubIcon />
                      <a href={item.projectUrl} target="_blank" rel="noreferrer" className="hover:underline">
                        {item.project}
                      </a>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-surface-muted">
                      <StarIcon />
                      <span>{item.stars} stars</span>
                    </div>
                    <div className="text-xs text-surface-muted hidden sm:block">
                      · {item.dependents} dependent repos
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={item.issueUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-xs text-surface-secondary hover:text-rose-dark dark:hover:text-rose-DEFAULT transition-colors"
                    >
                      <ExternalIcon /> Issue
                    </a>
                    <a
                      href={item.prUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-white bg-rose-dark px-3.5 py-1.5 rounded-full hover:opacity-90 transition-opacity"
                    >
                      <ExternalIcon /> View PR
                    </a>
                  </div>
                </div>

                <h3 className="font-serif text-lg mb-4">{item.title}</h3>

                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  <div className="bg-rose-light/50 dark:bg-[#3D1E28]/50 rounded-xl p-4">
                    <p className="text-xs font-medium text-rose-dark dark:text-rose-DEFAULT uppercase tracking-widest mb-2">
                      The Bug
                    </p>
                    <p className="text-xs text-surface-secondary leading-relaxed">{item.problem}</p>
                  </div>
                  <div className="bg-sage-light/50 dark:bg-[#1A2E1A]/50 rounded-xl p-4">
                    <p className="text-xs font-medium text-sage-dark dark:text-sage-DEFAULT uppercase tracking-widest mb-2">
                      The Fix
                    </p>
                    <p className="text-xs text-surface-secondary leading-relaxed">{item.fix}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <Tag key={tag} label={tag} color="lavender" />
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
