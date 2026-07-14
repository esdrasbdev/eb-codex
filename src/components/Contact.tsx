import { useState, type ChangeEvent, type FormEvent } from 'react'
import { CheckCircle2, Loader2, Mail, Send } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { RevealOnScroll } from './RevealOnScroll'
import type { ContactFormData, FormErrors } from '@/types'

const PROJECT_TYPES = ['Sistema / SaaS', 'Site Institucional', 'Dashboard', 'E-commerce', 'Outro']

const EMPTY_FORM: ContactFormData = { name: '', email: '', projectType: '', message: '' }
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(data: ContactFormData): FormErrors {
  const errors: FormErrors = {}
  if (data.name.trim().length < 2) errors.name = 'Informe seu nome completo.'
  if (!EMAIL_REGEX.test(data.email)) errors.email = 'Informe um e-mail válido.'
  if (!data.projectType) errors.projectType = 'Selecione o tipo de projeto.'
  if (data.message.trim().length < 10) errors.message = 'Conte um pouco mais sobre o projeto (mín. 10 caracteres).'
  return errors
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function Contact() {
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const PHONE_WHATSAPP = '88998127580'

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const validation = validate(form)
    setErrors(validation)
    if (Object.keys(validation).length > 0) return

    setStatus('submitting')

    try {
      const whatsappMessage = [
        'Novo contato pelo formulário:',
        `Nome: ${form.name}`,
        `E-mail: ${form.email}`,
        `Tipo de projeto: ${form.projectType}`,
        `Mensagem: ${form.message}`,
      ].join('\n')

      const url = `https://wa.me/${PHONE_WHATSAPP}?text=${encodeURIComponent(whatsappMessage)}`

      window.open(url, '_blank', 'noopener,noreferrer')
      setStatus('success')
      setForm(EMPTY_FORM)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section id="contato" className="relative px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-xl text-center">
          <RevealOnScroll className="flex flex-col items-center gap-4">
            <CheckCircle2 className="h-12 w-12 text-gold-500" strokeWidth={1.5} aria-hidden="true" />
            <h2 className="font-display text-3xl">Mensagem enviada.</h2>
            <p className="text-ink/60 dark:text-parchment/60">
              Obrigado pelo contato. A resposta chega em até 1 dia útil no e-mail informado.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-4 rounded-full border border-ink/15 px-6 py-2.5 font-mono text-xs uppercase tracking-widest dark:border-parchment/15"
            >
              Enviar outra mensagem
            </button>
          </RevealOnScroll>
        </div>
      </section>
    )
  }

  return (
    <section id="contato" className="relative px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          numeral="IX"
          eyebrow="Contato"
          title="Vamos escrever o próximo capítulo do seu produto."
          description="Conte um pouco sobre o projeto e retorno com os próximos passos em até 1 dia útil."
        />

        <RevealOnScroll delay={0.1}>
          <form onSubmit={handleSubmit} noValidate className="mt-14 flex flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink/60 dark:text-parchment/60">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="w-full rounded-xl border border-ink/12 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 dark:border-parchment/12"
                  placeholder="Seu nome"
                />
                {errors.name && <p id="name-error" className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink/60 dark:text-parchment/60">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full rounded-xl border border-ink/12 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 dark:border-parchment/12"
                  placeholder="voce@email.com"
                />
                {errors.email && <p id="email-error" className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="projectType" className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink/60 dark:text-parchment/60">
                Tipo de projeto
              </label>
              <select
                id="projectType"
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                aria-invalid={!!errors.projectType}
                aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                className="w-full rounded-xl border border-ink/12 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 dark:border-parchment/12"
              >
                <option value="" disabled>Selecione uma opção</option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type} className="bg-parchment dark:bg-ink">{type}</option>
                ))}
              </select>
              {errors.projectType && <p id="projectType-error" className="mt-1.5 text-xs text-red-500">{errors.projectType}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink/60 dark:text-parchment/60">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="w-full resize-none rounded-xl border border-ink/12 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 dark:border-parchment/12"
                placeholder="Descreva o objetivo do projeto, prazo desejado e principais funcionalidades."
              />
              {errors.message && <p id="message-error" className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-mono uppercase tracking-widest text-parchment transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 dark:bg-gold-500 dark:text-ink"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Enviar Mensagem
                </>
              )}
            </button>

            {status === 'error' && (
              <p role="alert" className="text-sm text-red-500">
                Não foi possível enviar agora. Tente novamente ou escreva para{' '}
                <a href="mailto:contato@ebcodex.dev" className="underline">contato@ebcodex.dev</a>.
              </p>
            )}

            <p className="flex items-center gap-2 text-xs text-ink/40 dark:text-parchment/40">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              Prefere e-mail direto? Escreva para contato@ebcodex.dev
            </p>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  )
}
