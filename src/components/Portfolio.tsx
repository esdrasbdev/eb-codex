import { useMemo, useState } from 'react'
import { ArrowUpRight, Github } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { RevealOnScroll } from './RevealOnScroll'
import { projects } from '@/data/content'
import type { ProjectCategory } from '@/types'

const CATEGORIES: ProjectCategory[] = ['Todos', 'Institucional', 'Landing Page', 'Gestão']

export function Portfolio() {
  const [filter, setFilter] = useState<ProjectCategory>('Todos')
  const prefersReducedMotion = useReducedMotion()

  const filtered = useMemo(
    () => (filter === 'Todos' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <section id="portfolio" className="relative bg-parchment-elevated/60 px-6 py-28 dark:bg-ink-soft/60 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          numeral="IV"
          eyebrow="Portfólio"
          title="Produtos construídos com precisão de engenharia."
          description="Uma seleção de projetos reais, do sistema jurídico completo a painéis de gestão e sites institucionais."
        />

        <div role="tablist" aria-label="Filtrar portfólio por categoria" className="mt-12 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                filter === cat
                  ? 'bg-ink text-parchment dark:bg-gold-500 dark:text-ink'
                  : 'border border-ink/12 text-ink/60 hover:border-gold-500/50 dark:border-parchment/12 dark:text-parchment/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -16 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group overflow-hidden rounded-2xl border border-ink/8 bg-parchment-soft/70 dark:border-parchment/8 dark:bg-ink-elevated/50"
              >
                {/* Capa do projeto usando imagem real (public/) */}
                <div className="relative h-48 overflow-hidden">
                  {project.image && (
                    <img
                      src={`/${project.image}`}
                      alt={`Imagem de capa de ${project.title}`}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  )}

                  {/* overlay sutil para legibilidade */}
                  <div className="pointer-events-none absolute inset-0 bg-ink/0 dark:bg-ink/0" />

                  {project.featured && (
                    <span className="absolute right-4 top-4 rounded-full bg-ink/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-parchment dark:bg-gold-500 dark:text-ink">
                      Destaque
                    </span>
                  )}
                </div>

                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-gold-600 dark:text-gold-400">
                        {project.category}
                      </p>
                      <h3 className="mt-1 font-display text-xl">{project.title}</h3>
                    </div>
                    <div className="flex shrink-0 gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          aria-label={`Ver demonstração de ${project.title}`}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 transition-colors hover:border-gold-500/50 hover:text-gold-600 dark:border-parchment/10 dark:hover:text-gold-400"
                        >
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          aria-label={`Ver repositório de ${project.title}`}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 transition-colors hover:border-gold-500/50 hover:text-gold-600 dark:border-parchment/10 dark:hover:text-gold-400"
                        >
                          <Github className="h-4 w-4" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-ink/60 dark:text-parchment/60">
                    {project.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-ink/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ink/50 dark:bg-parchment/5 dark:text-parchment/50"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <RevealOnScroll className="mt-12 text-center text-sm text-ink/50 dark:text-parchment/50">
            Nenhum projeto encontrado nesta categoria.
          </RevealOnScroll>
        )}
      </div>
    </section>
  )
}
