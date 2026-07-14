import { SectionHeading } from './SectionHeading'
import { RevealOnScroll } from './RevealOnScroll'
import { skillGroups } from '@/data/content'
import { getIcon } from '@/data/icon-map'

export function Skills() {
  return (
    <section id="competencias" className="relative bg-parchment-elevated/60 px-6 py-28 dark:bg-ink-soft/60 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          numeral="II"
          eyebrow="Competências"
          title="Um stack enxuto, dominado em profundidade."
          description="Tecnologia é meio, não fim — por isso o stack é deliberadamente reduzido: o suficiente para construir qualquer produto com solidez, sem dispersão."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <RevealOnScroll key={group.category} delay={gi * 0.08}>
              <div className="rounded-2xl border border-ink/8 bg-parchment-soft/70 p-8 dark:border-parchment/8 dark:bg-ink-elevated/50">
                <h3 className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-400">
                  {group.category}
                </h3>
                <ul className="mt-6 flex flex-col gap-5">
                  {group.items.map((skill) => {
                    const Icon = getIcon(skill.icon)
                    return (
                      <li key={skill.name}>
                        <div className="flex items-center justify-between gap-3">
                          <span className="flex items-center gap-3 text-sm text-ink/80 dark:text-parchment/80">
                            <Icon className="h-4 w-4 text-gold-500" strokeWidth={1.5} aria-hidden="true" />
                            {skill.name}
                          </span>
                          <span className="font-mono text-xs text-ink/40 dark:text-parchment/40">{skill.level}%</span>
                        </div>
                        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-ink/8 dark:bg-parchment/8">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-gold-500 to-codex-violetLight transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
