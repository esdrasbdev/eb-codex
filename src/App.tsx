import { ThemeProvider } from '@/context/ThemeContext'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Timeline } from '@/components/Timeline'
import { Portfolio } from '@/components/Portfolio'
import { Founder } from '@/components/Founder'
import { Differentials } from '@/components/Differentials'
import { FAQ } from '@/components/FAQ'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <a
        href="#topo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-parchment"
      >
        Pular para o conteúdo principal
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Portfolio />
        <Founder />
        <Differentials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
