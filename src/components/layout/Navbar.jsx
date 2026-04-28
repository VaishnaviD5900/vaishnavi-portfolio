import { useState } from 'react'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { NAV_LINKS } from '@/data/portfolio'

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace('#', ''))

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-surface transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-xl text-rose-dark dark:text-rose-DEFAULT tracking-tight"
        >
          Vaishnavi.
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '')
            const isActive = activeId === id
            return (
              <a
                key={href}
                href={href}
                className={`
                  text-sm tracking-wide transition-colors duration-200
                  ${isActive
                    ? 'text-rose-dark dark:text-rose-DEFAULT font-medium'
                    : 'text-surface-secondary hover:text-rose-dark dark:hover:text-rose-DEFAULT'
                  }
                `}
              >
                {label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-[5px] p-1.5"
          >
            <span className={`block w-5 h-0.5 bg-surface-secondary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-5 h-0.5 bg-surface-secondary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-surface-secondary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-surface bg-[var(--bg-primary)] px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="py-2.5 text-sm text-surface-secondary hover:text-rose-dark dark:hover:text-rose-DEFAULT border-b border-surface last:border-0 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
