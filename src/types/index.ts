export type Theme = 'light' | 'dark'

export interface Skill {
  name: string
  icon: string // nome do ícone lucide-react
  level: number // 0-100, proficiência aproximada
}

export interface SkillGroup {
  category: string
  items: Skill[]
}

export interface TimelineStep {
  numeral: string // numeral romano — capítulo do processo
  title: string
  description: string
  icon: string
}

export type ProjectCategory = 'Todos' | 'Landing Page' | 'Gestão' | 'Institucional'

export interface Project {
  id: string
  title: string
  category: Exclude<ProjectCategory, 'Todos'>
  description: string
  stack: string[]
  image: string
  demoUrl?: string
  repoUrl?: string
  featured?: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  avatar: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Differential {
  title: string
  description: string
  icon: string
}

export interface ContactFormData {
  name: string
  email: string
  projectType: string
  message: string
}

export interface FormErrors {
  name?: string
  email?: string
  projectType?: string
  message?: string
}
