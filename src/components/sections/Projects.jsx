import SectionLabel from '@/components/ui/SectionLabel'
import Tag from '@/components/ui/Tag'
import FadeIn from '@/components/ui/FadeIn'
import { PROJECTS } from '@/data/portfolio'

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-sage-light dark:bg-[#1A2E1A]/40 border-y border-surface py-24 px-6 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionLabel>What I've built</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl mb-10">
            Featured{' '}
            <em className="text-sage-dark dark:text-sage-DEFAULT">projects</em>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {PROJECTS.map(({ icon, title, description, tech, github, live }, i) => (
            <FadeIn key={title} delay={i * 100}>
              <div className="group bg-white dark:bg-ink-500 rounded-2xl p-6 border border-sage-DEFAULT/30 dark:border-white/5 flex flex-col h-full hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sage-dark/10 dark:hover:shadow-black/30 transition-all duration-200">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-serif text-lg mb-2">{title}</h3>
                <p className="text-xs text-surface-secondary leading-loose flex-1">{description}</p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {tech.map((t) => (
                    <Tag key={t} label={t} color="sage" />
                  ))}
                </div>

                <div className="flex gap-3 mt-5 pt-4 border-t border-surface">
                  <a
                    href={github}
                    className="flex items-center gap-1.5 text-xs text-surface-secondary hover:text-sage-dark dark:hover:text-sage-DEFAULT transition-colors"
                  >
                    <GithubIcon /> GitHub
                  </a>
                  <a
                    href={live}
                    className="flex items-center gap-1.5 text-xs text-surface-secondary hover:text-sage-dark dark:hover:text-sage-DEFAULT transition-colors"
                  >
                    <ExternalIcon /> Live demo
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
