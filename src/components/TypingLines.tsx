import { motion } from 'framer-motion'
import React from 'react'

export type TypingLinesProps = {
  /**
   * Modo simples (atual): anima com este array de linhas uma vez.
   */
  lines: string[]
  /**
   * Modo avançado: anima em loop alternando entre vários conjuntos de linhas.
   * Quando definido (e com length > 0), `lines` vira fallback.
   */
  typingSets?: string[][]
  /**
   * Intervalo entre trocas de conjuntos (ms). Ex.: 2600.
   */
  cycleMs?: number
  prefersReducedMotion: boolean
}

function useIsomorphicLayoutEffect(effect: React.EffectCallback, deps: React.DependencyList) {
  // Evita warning em SSR; projeto Vite/SPA provavelmente não tem SSR, mas fica seguro.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const useLayoutEffect =
    typeof window !== 'undefined' ? React.useLayoutEffect : (React.useEffect as unknown as typeof React.useLayoutEffect)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useLayoutEffect(effect, deps)
}

export function TypingLines({
  lines,
  typingSets,
  cycleMs = 2600,
  prefersReducedMotion,
}: TypingLinesProps) {
  const sets = typingSets && typingSets.length > 0 ? typingSets : [lines]
  const [activeSetIndex, setActiveSetIndex] = React.useState(0)
  const activeLines = sets[Math.min(activeSetIndex, sets.length - 1)] ?? lines

  const [typed, setTyped] = React.useState<number[]>(() => activeLines.map(() => 0))

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion) {
      setTyped(activeLines.map((l) => l.length))
      return
    }

    let cancelled = false
    const intervals: number[] = []

    // Reset ao iniciar um novo conjunto
    setTyped(activeLines.map(() => 0))

    // Tipar linha a linha (de cima pra baixo)
    const baseStartDelayMs = 320
    const lineGapMs = 210

    activeLines.forEach((line, idx) => {
      const start = baseStartDelayMs + idx * lineGapMs
      const intervalDelay = start

      window.setTimeout(() => {
        if (cancelled) return

        // Mais lento e com sensação "mais orgânica"
        // (quanto menor a linha, mais espaçado; quanto maior, ainda assim controlado)
        const speedMs = Math.max(32, Math.floor((420 / Math.max(1, line.length)) * 1.4))
        const intervalId = window.setInterval(() => {
          setTyped((prev) => {
            const next = [...prev]
            const current = next[idx] ?? 0
            if (current >= line.length) return next
            next[idx] = current + 1
            return next
          })
        }, speedMs)

        intervals.push(intervalId)
      }, intervalDelay)
    })

    return () => {
      cancelled = true
      intervals.forEach((id) => window.clearInterval(id))
    }
  }, [activeSetIndex, prefersReducedMotion, activeLines])

  const cursorChar = '|'

  // Loop de sets (apenas se houver mais de 1)
  React.useEffect(() => {
    if (prefersReducedMotion) return
    if (sets.length <= 1) return

    const id = window.setInterval(() => {
      setActiveSetIndex((prev) => (prev + 1) % sets.length)
    }, Math.max(1200, cycleMs))

    return () => window.clearInterval(id)
  }, [cycleMs, prefersReducedMotion, sets.length])

  return (
    <div className="flex flex-col gap-3 font-mono text-xs text-ink/50 dark:text-parchment/50">
      {activeLines.map((line, i) => {
        const count = typed[i] ?? 0
        const shown = line.slice(0, count)
        const isLast = i === activeLines.length - 1

        return (
          <div key={line} className="flex items-center gap-3">
            <motion.span
              className="text-gold-500/70"
              initial={prefersReducedMotion ? undefined : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: prefersReducedMotion ? 0 : i * 0.06 }}
            >
              {String(i + 1).padStart(2, '0')}
            </motion.span>

            <span className="leading-snug">
              {shown}
              {isLast && !prefersReducedMotion ? (
                <motion.span
                  className="ml-1 inline-block text-gold-500/70 origin-left"
                  initial={{ opacity: 1, scaleY: 1 }}
                  animate={{ opacity: [1, 0.25, 1], scaleY: [1, 0.65, 1] }}
                  transition={{ duration: 1.15, repeat: Infinity, ease: 'easeInOut' }}
                  aria-hidden="true"
                >
                  {cursorChar}
                </motion.span>
              ) : null}
            </span>
          </div>
        )
      })}
    </div>
  )
}
