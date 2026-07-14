import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { useActiveSection } from '@/hooks/useActiveSection'

const NAV_ITEMS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'competencias', label: 'Competências' },
  { id: 'metodo', label: 'Método' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'fundador', label: 'Fundador' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contato', label: 'Contato' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const active = useActiveSection(NAV_ITEMS.map((i) => i.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-parchment/75 dark:bg-ink/70 backdrop-blur-xl border-b border-ink/5 dark:border-parchment/5 shadow-soft dark:shadow-soft-dark'
          : 'bg-transparent'
      }`}
    >
      <nav aria-label="Navegação principal" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#topo"
          onClick={(e) => { e.preventDefault(); handleNavClick('topo') }}
          className="flex items-center gap-3"
          aria-label="EB CODEX"
        >
          <img
            src="/logo ebcodex branca.png"
            alt="EB CODEX"
            className="h-8 w-auto hidden dark:block lg:h-11"
          />
          <img
            src="/logo_ebcodex_preta.png"
            alt="EB CODEX"
            className="h-8 w-auto block dark:hidden lg:h-11"
          />
        </a>


        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                  active === item.id
                    ? 'text-ink dark:text-parchment'
                    : 'text-ink/55 hover:text-ink dark:text-parchment/55 dark:hover:text-parchment'
                }`}

                aria-current={active === item.id ? 'true' : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => handleNavClick('contato')}
            className="rounded-full bg-ink px-5 py-2 text-xs font-mono uppercase tracking-widest text-parchment transition-transform hover:scale-105 dark:bg-ink dark:text-parchment"

          >
            Iniciar Projeto
          </button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 dark:border-parchment/10"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-ink/5 bg-parchment/95 px-6 py-6 backdrop-blur-xl dark:border-parchment/5 dark:bg-ink/95 lg:hidden">
          <ul className="flex flex-col gap-5">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className="font-mono text-sm uppercase tracking-widest text-ink/70 dark:text-parchment/70"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
