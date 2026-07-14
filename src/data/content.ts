import type { SkillGroup, TimelineStep, Project, Testimonial, FaqItem, Differential } from '@/types'

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'Atom', level: 95 },
      { name: 'TypeScript', icon: 'FileCode2', level: 92 },
      { name: 'Tailwind CSS', icon: 'Paintbrush', level: 94 },
      { name: 'Vanilla JS (ESM)', icon: 'Braces', level: 90 },
    ],
  },
  {
    category: 'Backend & Dados',
    items: [
      { name: 'Node.js / Express', icon: 'Server', level: 93 },
      { name: 'Supabase (Postgres)', icon: 'Database', level: 90 },
      { name: 'REST APIs', icon: 'Webhook', level: 92 },
      { name: 'Auth & RBAC', icon: 'ShieldCheck', level: 88 },
    ],
  },
  {
    category: 'Infraestrutura',
    items: [
      { name: 'Vercel (Serverless)', icon: 'Cloud', level: 91 },
      { name: 'Git & GitHub', icon: 'GitBranch', level: 93 },
      { name: 'CI/CD', icon: 'Workflow', level: 85 },
      { name: 'Vercel Blob Storage', icon: 'HardDrive', level: 87 },
    ],
  },
  {
    category: 'Produto & Design',
    items: [
      { name: 'UI/UX sob medida', icon: 'LayoutTemplate', level: 90 },
      { name: 'Acessibilidade (WCAG)', icon: 'Accessibility', level: 88 },
      { name: 'Performance Web', icon: 'Gauge', level: 89 },
      { name: 'Arquitetura de Sistemas', icon: 'Network', level: 91 },
    ],
  },
]

export const timelineSteps: TimelineStep[] = [
  { numeral: 'I', title: 'Descoberta', description: 'Imersão no seu negócio: objetivos, usuários e restrições reais do projeto.', icon: 'Search' },
  { numeral: 'II', title: 'Planejamento', description: 'Arquitetura técnica, escopo e cronograma definidos com precisão.', icon: 'ClipboardList' },
  { numeral: 'III', title: 'Design', description: 'Identidade visual e interfaces desenhadas sob medida para a marca.', icon: 'PenTool' },
  { numeral: 'IV', title: 'Desenvolvimento', description: 'Código limpo, tipado e versionado, construído para durar.', icon: 'Code2' },
  { numeral: 'V', title: 'Testes', description: 'Validação funcional, responsiva e de segurança antes do lançamento.', icon: 'FlaskConical' },
  { numeral: 'VI', title: 'Implantação', description: 'Deploy em produção com monitoramento e domínio configurado.', icon: 'Rocket' },
  { numeral: 'VII', title: 'Suporte', description: 'Acompanhamento contínuo, ajustes e evolução do produto.', icon: 'LifeBuoy' },
]

export const projects: Project[] = [
  {
    id: 'pagecaldasebrito',
    title: 'Caldas & Brito — Landing Page Institucional',
    category: 'Institucional',
    description:
      'Landing page profissional para escritório de advocacia, desenvolvida com Nest.js e React, utilizando Tailwind CSS para garantir uma interface moderna, responsiva e consistente, voltada à apresentação institucional e à comunicação clara do escritório.',
    stack: ['Nest.js', 'React', 'Tailwind CSS'],
    image: 'caldasebrito.png',
    demoUrl: 'https://pagecaldasebrito.vercel.app/',
    featured: true,
  },
  {
    id: 'gessicasampaio',
    title: 'Gessica Sampaio Advocacia — Site Profissional',
    category: 'Landing Page',
    description:
      'Site institucional profissional para advogada, construído com HTML e CSS puros e enriquecido com JavaScript, oferecendo uma experiência leve e direta, com foco em organização de conteúdo, identidade visual e usabilidade para fins de apresentação e contato.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    image: 'gessicasampaio.png',
    demoUrl: 'https://www.gessicasampaioadvocacia.com/',
  },
  {
    id: 'eagleform',
    title: 'EagleForm — Evento IFCE (Turma de SI)',
    category: 'Gestão',
    description:
      'Site de apresentação do evento do IFCE da Turma de Sistemas de Informação, com página institucional para explicar o projeto e uma área de gerenciamento de inscrições e equipe. O sistema também permite selecionar os cursos de interesse dos participantes, utilizando Neon como banco de dados e implementado com Express e JavaScript.',
    stack: ['Express', 'JavaScript', 'Neon (Postgres)'],
    image: 'eagle.png',
    demoUrl: 'https://eagleform.vercel.app/',
  },
  {
    id: 'esdrasdev',
    title: 'Esdras Brito — Portfólio Profissional',
    category: 'Landing Page',
    description:
      'Portfólio pessoal de Esdras Brito, apresentado com foco em organização, clareza e credibilidade técnica. Construído utilizando Nest.js, com ênfase em uma navegação intuitiva e em uma apresentação profissional dos projetos e competências.',
    stack: ['Nest.js'],
    image: 'esdrasportfolio.png',
    demoUrl: 'https://esdrasdev.vercel.app/',
  },
  {
    id: 'nexusio',
    title: 'Nexusio — Apresentação de Empresa de Tecnologia',
    category: 'Institucional',
    description:
      'Site de apresentação da Nexusio, empresa de tecnologia responsável pelo desenvolvimento de sistemas e sites. O conteúdo foi estruturado para apresentar serviços, posicionamento e proposta de valor de forma objetiva, apoiando a comunicação com potenciais clientes através de uma experiência digital clara e consistente.',
    stack: [],
    image: 'nexusio.png',
    demoUrl: 'https://nexusio-pi.vercel.app/',
  },
  {
    id: 'milklog',
    title: 'Milk Log — Gestão de Vendas e Relatórios',
    category: 'Gestão',
    description:
      'Plataforma de gerenciamento voltada para controle de vendas e acompanhamento de indicadores, reunindo informações como quantidade de clientes, volume de leite vendido e débitos por cliente. O sistema organiza os registros de forma clara para facilitar a tomada de decisão e o acompanhamento operacional. Além disso, permite a geração de relatórios em PDF por períodos específicos, apoiando análises e prestação de contas.',
    stack: [],
    image: 'milklog.png',
    demoUrl: 'https://milklog-demo.netlify.app/',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Caldas & Brito Advocacia',
    role: 'Cliente — Plataforma de Gestão Jurídica',
    quote: 'Sistema construído sob medida para a rotina do escritório, com atenção a cada detalhe do fluxo de trabalho jurídico.',
    avatar: 'CB',
  },
  {
    id: 't2',
    name: 'Gessica Sampaio',
    role: 'Cliente — Dashboard de Gestão',
    quote: 'Entrega precisa, comunicação clara e um produto final que superou o que eu imaginava para o projeto.',
    avatar: 'GS',
  },
  {
    id: 't3',
    name: 'Parceiro de Negócios',
    role: 'Consultoria em Transformação Digital',
    quote: 'Raro encontrar alguém que une qualidade de engenharia com sensibilidade de design como a EB CODEX.',
    avatar: 'PN',
  },
]

export const faqItems: FaqItem[] = [
  {
    question: 'Como funciona o prazo de entrega de 7 dias?',
    answer: 'Para escopos objetivos e bem definidos, do briefing à implantação em produção, o ciclo completo pode ser concluído em até 7 dias corridos. Projetos mais complexos recebem um cronograma detalhado na etapa de planejamento.',
  },
  {
    question: 'Quais tecnologias vocês utilizam?',
    answer: 'O stack principal é React, TypeScript, Node.js e Supabase, hospedado em infraestrutura serverless na Vercel — combinação escolhida por desempenho, escalabilidade e custo previsível.',
  },
  {
    question: 'O projeto inclui manutenção após o lançamento?',
    answer: 'Sim. Todo projeto pode incluir um plano de suporte contínuo, com correções, pequenas evoluções e acompanhamento técnico mensal.',
  },
  {
    question: 'Vocês atendem empresas fora do Ceará?',
    answer: 'Sim, o atendimento é 100% remoto e já inclui clientes em diferentes regiões do Brasil, com comunicação por vídeo, e-mail e mensagens.',
  },
  {
    question: 'Como é feito o orçamento?',
    answer: 'Após a etapa de descoberta, é enviada uma proposta com escopo, prazo e investimento claros — sem custos ocultos ao longo do projeto.',
  },
]

export const differentials: Differential[] = [
  { title: 'Entrega Ágil', description: 'Projetos objetivos implantados em produção em até 7 dias.', icon: 'Zap' },
  { title: 'Código Próprio', description: 'Arquitetura limpa e documentada, sem dependência de terceiros.', icon: 'FileCode' },
  { title: 'Design Sob Medida', description: 'Nenhum template genérico — cada identidade é construída do zero.', icon: 'Sparkles' },
  { title: 'Comunicação Direta', description: 'Contato próximo com quem constrói o seu produto, do início ao fim.', icon: 'MessageCircle' },
]
