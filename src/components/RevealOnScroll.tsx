import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  delay?: number
}

/** Anima a entrada de qualquer bloco quando ele entra na viewport */
export function RevealOnScroll({ children, className, delay = 0 }: RevealOnScrollProps) {
  const { ref, isVisible } = useScrollReveal()
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
