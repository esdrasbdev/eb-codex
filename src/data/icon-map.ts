import {
  Atom,
  FileCode2,
  Paintbrush,
  Braces,
  Server,
  Database,
  Webhook,
  ShieldCheck,
  Cloud,
  GitBranch,
  Workflow,
  HardDrive,
  LayoutTemplate,
  Accessibility,
  Gauge,
  Network,
  Search,
  ClipboardList,
  PenTool,
  Code2,
  FlaskConical,
  Rocket,
  LifeBuoy,
  Zap,
  FileCode,
  Sparkles,
  MessageCircle,
  Code,
  Circle,
  Star,
  type LucideIcon,
} from 'lucide-react'

// Importação nomeada e explícita: mantém o bundle enxuto (tree-shaking real)
export const iconMap: Record<string, LucideIcon> = {
  Atom, FileCode2, Paintbrush, Braces, Server, Database, Webhook, ShieldCheck,
  Cloud, GitBranch, Workflow, HardDrive, LayoutTemplate, Accessibility, Gauge, Network,
  Search, ClipboardList, PenTool, Code2, FlaskConical, Rocket, LifeBuoy,
  Zap, FileCode, Sparkles, MessageCircle,
  Code, Circle, Star,
}

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Code
}
