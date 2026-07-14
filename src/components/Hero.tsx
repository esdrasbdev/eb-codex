                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         import { ArrowRight, PlayCircle } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { TypingLines } from './TypingLines'

export function Hero() {
  const prefersReducedMotion = useReducedMotion() ?? false

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="topo" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      {/* Fundo animado discreto: dois véus de gradiente que derivam lentamente */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-codex-radial" />
        <div
          className={`absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-gold-500/10 blur-3xl ${
            prefersReducedMotion ? '' : 'animate-drift'
          }`}
        />
        <div
          className={`absolute -bottom-32 right-1/5 h-[28rem] w-[28rem] rounded-full bg-codex-violetLight/10 blur-3xl ${
            prefersReducedMotion ? '' : 'animate-drift'
          }`}
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="flex flex-col gap-8">
          <motion.p
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-gold-600 dark:text-gold-400"
          >
            Engenharia de Software · Cedro, CE
          </motion.p>

          <motion.h1
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance text-4xl font-medium leading-[1.08] sm:text-5xl md:text-6xl lg:text-[3.75rem]"
          >
            A <span className="italic text-gold-500">EB CODEX</span> transforma ideias em produtos digitais
            de alto impacto — do design à produção.
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-balance text-lg leading-relaxed text-ink/65 dark:text-parchment/65"
          >
            A EB CODEX constrói produtos digitais extraordinários. Estúdio de engenharia de elite que transforma ideias
            complexas em SaaS rápido, aplicações web seguras e interfaces deslumbrantes — em até 7 dias.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <button
              type="button"
              onClick={() => scrollTo('contato')}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-mono uppercase tracking-widest text-parchment shadow-glow transition-transform hover:scale-[1.03] dark:bg-gold-500 dark:text-ink"
            >
              Iniciar um Projeto
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo('portfolio')}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-mono uppercase tracking-widest text-ink/80 transition-colors hover:border-gold-500/60 hover:text-gold-600 dark:border-parchment/15 dark:text-parchment/80 dark:hover:text-gold-400"
            >
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
              Ver Serviços
            </button>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-4 text-xs font-mono uppercase tracking-widest text-ink/40 dark:text-parchment/40"
          >
            <span>React · TypeScript</span>
            <span className="hidden h-1 w-1 rounded-full bg-current sm:block" />
            <span>Node.js · Supabase</span>
            <span className="hidden h-1 w-1 rounded-full bg-current sm:block" />
            <span>Entrega em 7 dias</span>
          </motion.div>
        </div>

        {/* Painel visual: representação abstrata de "linhas de código" como manuscrito */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden items-center justify-center lg:flex"
        >
          <div className="relative w-full max-w-sm rounded-3xl border border-ink/10 bg-parchment-soft/60 p-8 shadow-soft backdrop-blur-sm dark:border-parchment/10 dark:bg-ink-elevated/60 dark:shadow-soft-dark">
            <div className="flex items-center gap-1.5 pb-6">
              <span className="h-2.5 w-2.5 rounded-full bg-gold-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-codex-violetLight/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/20 dark:bg-parchment/20" />
            </div>
            <TypingLines
              typingSets={[
                [
                  'const codex = criarProduto()',
                  'codex.definir("padrao", "alto")',
                  'codex.implantar({ prazo: "7d" })',
                  'export default codex',
                ],
                [
                  'const plano = escreverEstrategia()',
                  'plano.prototipar().validar()',
                  'plano.entregar({ qualidade: "premium" })',
                  'return plano',
                ],
                [
                  'function arquitetura() {',
                  '  return garantir("escala", "seguranca")',
                  '}',
                  'export const build = arquitetura',
                ],
              ]}
              cycleMs={2400}
              lines={[
                'const codex = criarProduto()',
                'codex.definir("padrao", "alto")',
                'codex.implantar({ prazo: "7d" })',
                'export default codex',
              ]}
              prefersReducedMotion={prefersReducedMotion}
            />
            <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
            <p className="mt-6 font-display italic text-sm text-ink/50 dark:text-parchment/50">
              "Todo produto começa como um manuscrito de intenção."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
