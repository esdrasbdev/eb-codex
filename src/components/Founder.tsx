import { GraduationCap, Github, Linkedin } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { RevealOnScroll } from './RevealOnScroll'

const VALUES = ['Precisão técnica', 'Transparência total', 'Design intencional', 'Compromisso com o prazo']

export function Founder() {
  return (
    <section id="fundador" className="relative px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          numeral="V"
          eyebrow="Quem está por trás da EB CODEX"
          title="Um único autor, do primeiro commit ao deploy final."
          align="left"
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <RevealOnScroll>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-ink/10 bg-gradient-to-br from-gold-200/30 via-parchment-elevated to-codex-violetLight/20 shadow-soft dark:border-parchment/10 dark:from-codex-violet/20 dark:via-ink-elevated dark:to-gold-500/10 dark:shadow-soft-dark">
              <img
                src="/esdras.jpg"
                alt="Foto do fundador da EB CODEX"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute bottom-0 w-full p-6">
                <p className="font-display text-lg text-parchment">Esdras B.</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-parchment/70">
                  Fundador &amp; Engenheiro de Software
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="flex flex-col gap-6">
            <p className="text-balance text-lg leading-relaxed text-ink/70 dark:text-parchment/70">
              Desenvolvedor full-stack independente, formado tecnicamente pelo IFCE Campus Cedro e em
              formação em Engenharia de Software pela UFC. Construo sistemas de ponta a ponta — da
              arquitetura ao deploy — com a mesma atenção que um autor dedica a cada página de um livro.
            </p>
            <p className="text-balance leading-relaxed text-ink/60 dark:text-parchment/60">
              A EB CODEX é a extensão natural desse trabalho: um espaço para tratar cada projeto como
              autoral, técnico e definitivo — sem atalhos, sem templates genéricos.
            </p>

            <div className="flex items-center gap-3 pt-2 text-sm text-ink/60 dark:text-parchment/60">
              <GraduationCap className="h-4 w-4 text-gold-500" strokeWidth={1.5} aria-hidden="true" />
              Software Engineering — UFC · Técnico — IFCE Campus Cedro
            </div>

            <ul className="mt-2 flex flex-wrap gap-3" aria-label="Valores do fundador">
              {VALUES.map((value) => (
                <li
                  key={value}
                  className="rounded-full border border-gold-500/30 bg-gold-50/50 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-gold-600 dark:bg-codex-violet/10 dark:text-gold-400"
                >
                  {value}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/esdrasbdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil no GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 transition-colors hover:border-gold-500/50 hover:text-gold-600 dark:border-parchment/10 dark:hover:text-gold-400"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil no LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 transition-colors hover:border-gold-500/50 hover:text-gold-600 dark:border-parchment/10 dark:hover:text-gold-400"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
