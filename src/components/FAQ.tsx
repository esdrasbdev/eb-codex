import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { RevealOnScroll } from './RevealOnScroll'
import { faqItems } from '@/data/content'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative bg-parchment-elevated/60 px-6 py-28 dark:bg-ink-soft/60 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-3xl">
        <SectionHeading numeral="VIII" eyebrow="Perguntas Frequentes" title="Dúvidas comuns, respondidas com clareza." />

        <div className="mt-14 flex flex-col gap-3">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <RevealOnScroll key={item.question} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-ink/8 bg-parchment-soft/70 dark:border-parchment/8 dark:bg-ink-elevated/50">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-trigger-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-medium">{item.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-gold-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-ink/60 dark:text-parchment/60">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
