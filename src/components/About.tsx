import { Target, Eye, Compass } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { RevealOnScroll } from './RevealOnScroll'

const PILLARS = [
  { icon: Target, title: 'Missão', text: 'Transformar ideias e processos reais em produtos digitais precisos, elegantes e prontos para escalar.' },
  { icon: Eye, title: 'Visão', text: 'Ser referência em engenharia de software sob medida, onde cada linha de código serve a um propósito.' },
  { icon: Compass, title: 'Objetivo', text: 'Entregar excelência técnica com a agilidade de um estúdio independente e o rigor de uma equipe sênior.' },
]

export function About() {
  return (
    <section id="sobre" className="relative px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          numeral="I"
          eyebrow="Sobre a EB CODEX"
          title="Um estúdio de engenharia dedicado a poucos projetos — e a cada um deles por inteiro."
          description="A EB CODEX nasceu da convicção de que software sob medida deveria ser tratado como um ofício: pensado, escrito e revisado com o mesmo cuidado dedicado a um manuscrito."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <RevealOnScroll key={pillar.title} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-ink/8 bg-parchment-soft/50 p-8 transition-all hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-soft dark:border-parchment/8 dark:bg-ink-elevated/40 dark:hover:shadow-soft-dark">
                <pillar.icon className="h-6 w-6 text-gold-500" aria-hidden="true" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-xl">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60 dark:text-parchment/60">{pillar.text}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
