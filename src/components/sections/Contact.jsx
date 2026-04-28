import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-rose-light to-lavender-light dark:from-[#3D1E28] dark:to-[#1E1A35] border-t border-surface py-24 px-6 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <SectionLabel>Say hello</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            Let's work{' '}
            <em className="text-rose-dark dark:text-rose-DEFAULT">together</em>
          </h2>
          <p className="text-sm text-surface-secondary mb-10 max-w-sm mx-auto leading-loose">
            Whether you have a role in mind, a project to discuss, or just want to
            connect — my inbox is open.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:vaishnavipd59@gmail.com"
              className="flex items-center gap-2 bg-rose-dark text-white px-7 py-3.5 rounded-full text-sm font-medium hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose-dark/40 transition-all duration-200"
            >
              ✉ vaishnavipd59@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/vaishnavi-p-deshpande"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-lavender-light dark:bg-lavender-dark/20 text-lavender-dark dark:text-lavender-DEFAULT border border-lavender-DEFAULT/50 px-7 py-3.5 rounded-full text-sm font-medium hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lavender-dark/20 transition-all duration-200"
            >
              🔗 LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
