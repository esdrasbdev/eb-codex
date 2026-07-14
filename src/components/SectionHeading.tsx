import { RevealOnScroll } from './RevealOnScroll'

interface SectionHeadingProps {
  numeral: string
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ numeral: _numeral, eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <RevealOnScroll className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-gold-600 dark:text-gold-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-balance leading-tight">{title}</h2>
      {description && (
        <p className="text-base sm:text-lg text-ink/60 dark:text-parchment/60 text-balance leading-relaxed">
          {description}
        </p>
      )}
    </RevealOnScroll>
  )
}
