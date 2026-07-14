import { Github, Linkedin, Instagram, Mail } from 'lucide-react'

const SOCIAL_LINKS = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/esdrasbdev' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/esdrasbdev/' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/_esdrasb/' },
  { icon: Mail, label: 'E-mail', href: 'mailto:contato@ebcodex.dev' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-ink/8 px-6 py-14 dark:border-parchment/8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <picture>
            <source srcSet="/logo ebcodex branca.png" media="(prefers-color-scheme: dark)" />
            <img src="/logo_ebcodex_preta.png" alt="EB CODEX" className="h-8 w-auto lg:h-12" />
          </picture>
          <p className="mt-1 text-xs text-ink/45 dark:text-parchment/45">
            Engenharia de software de alto padrão · Cedro, CE — Brasil
          </p>
        </div>

        <nav aria-label="Redes sociais" className="flex gap-3">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={link.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 transition-colors hover:border-ink/40 hover:text-ink dark:border-parchment/10 dark:hover:text-parchment"
            >
              <link.icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </nav>

        <div className="text-center sm:text-left">
          <p className="font-mono text-[11px] text-ink/40 dark:text-parchment/40">
            © {new Date().getFullYear()} EB CODEX. Todos os direitos reservados.
          </p>
          <p className="mt-1 font-mono text-[11px] text-ink/40 dark:text-parchment/40">
            Desenvolvido por{' '}
            <span className="font-bold text-gold-600 dark:text-gold-400">Esdras Brito</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
