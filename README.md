# EB CODEX — Landing Page

Landing page/portfólio de página única para a marca EB CODEX, construída com React 18, TypeScript e Tailwind CSS.

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  components/   # Componentes de UI, um por seção/elemento
  context/      # ThemeContext (modo claro/escuro com persistência)
  data/         # Conteúdo textual centralizado (content.ts)
  hooks/        # useScrollReveal, useActiveSection
  types/        # Tipos compartilhados
public/         # favicon, og-image, robots.txt, sitemap.xml
```

## Personalização

- Cores e fontes: `tailwind.config.ts`
- Textos, portfólio, depoimentos e FAQ: `src/data/content.ts`
- Substituir domínio real em `index.html`, `public/robots.txt` e `public/sitemap.xml`
- Foto do fundador: trocar o placeholder em `src/components/Founder.tsx`
- Envio do formulário: implementar a chamada real em `src/components/Contact.tsx` (função `handleSubmit`)
