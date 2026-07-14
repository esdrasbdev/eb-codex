import { Clock3 } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { RevealOnScroll } from './RevealOnScroll'
import { timelineSteps } from '@/data/content'
import { getIcon } from '@/data/icon-map'

export function Timeline() {
  return (
    <section id="metodo" className="relative px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          numeral="III"
          eyebrow="Como Trabalhamos"
          title="Sete etapas. Um único padrão de exigência."
          description="Um método claro, repetível e transparente — que permite entregar e implantar projetos objetivos em até 7 dias, sem abrir mão de qualidade."
        />

        <div className="relative mt-20">
          {/* Linha vertical no mobile, horizontal a partir de lg */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-gold-500/50 via-codex-violetLight/30 to-transparent lg:left-0 lg:top-6 lg:h-px lg:w-full lg:bg-gradient-to-r" />

          <ol className="flex flex-col gap-10 lg:grid lg:grid-cols-7 lg:gap-4">
            {timelineSteps.map((step, i) => {
              const Icon = getIcon(step.icon)
              return (
                <RevealOnScroll key={step.numeral} delay={i * 0.07} className="relative pl-12 lg:pl-0">
                  <li>
                    <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/50 bg-parchment font-display text-sm italic text-gold-600 dark:bg-ink dark:text-gold-400 lg:relative lg:mx-auto lg:mb-5">
                      {step.numeral}
                    </div>
                    <div className="lg:text-center">
                      <Icon className="mb-2 hidden h-4 w-4 text-gold-500 lg:mx-auto lg:block" strokeWidth={1.5} aria-hidden="true" />
                      <h3 className="font-display text-lg">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink/55 dark:text-parchment/55 lg:mx-auto lg:max-w-[9.5rem]">
                        {step.description}
                      </p>
                    </div>
                  </li>
                </RevealOnScroll>
              )
            })}
          </ol>
        </div>

        <RevealOnScroll className="mt-20 flex flex-col items-center gap-3 rounded-2xl border border-gold-500/25 bg-gold-50/40 px-8 py-8 text-center dark:bg-codex-violet/10">
          <Clock3 className="h-5 w-5 text-gold-500" strokeWidth={1.5} aria-hidden="true" />
          <p className="font-display text-xl italic sm:text-2xl">Do briefing à implantação em até 7 dias.</p>
          <p className="max-w-xl text-sm text-ink/55 dark:text-parchment/55">
            Para escopos objetivos, o ciclo completo — descoberta, design, desenvolvimento e deploy — cabe em uma semana.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
