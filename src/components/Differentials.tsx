import { SectionHeading } from './SectionHeading'
import { RevealOnScroll } from './RevealOnScroll'
import { differentials } from '@/data/content'
import { getIcon } from '@/data/icon-map'

export function Differentials() {
  return (
    <section className="relative bg-parchment-elevated/60 px-6 py-28 dark:bg-ink-soft/60 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading numeral="VI" eyebrow="Diferenciais" title="O que muda quando o projeto é seu único foco." />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, i) => {
            const Icon = getIcon(item.icon)
            return (
              <RevealOnScroll key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-ink/8 bg-parchment-soft/70 p-7 text-center transition-all hover:-translate-y-1 hover:border-gold-500/40 dark:border-parchment/8 dark:bg-ink-elevated/50">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/10">
                    <Icon className="h-5 w-5 text-gold-500" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55 dark:text-parchment/55">{item.description}</p>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
