import { Quote } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { RevealOnScroll } from './RevealOnScroll'
import { testimonials } from '@/data/content'

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading numeral="VII" eyebrow="Depoimentos" title="A confiança de quem já viu o processo de perto." />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={t.id} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-ink/8 bg-parchment-soft/70 p-8 dark:border-parchment/8 dark:bg-ink-elevated/50">
                <Quote className="h-6 w-6 text-gold-500/60" aria-hidden="true" />
                <blockquote className="mt-5 flex-1 text-balance text-sm leading-relaxed text-ink/70 dark:text-parchment/70">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold-500/30 to-codex-violetLight/30 font-mono text-xs text-ink dark:text-parchment">
                    {t.avatar}
                  </span>
                  <span>
                    <span className="block text-sm font-medium">{t.name}</span>
                    <span className="block text-xs text-ink/50 dark:text-parchment/50">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
