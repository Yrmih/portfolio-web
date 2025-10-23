import { Layout, Smartphone, Database, Server, Cloud, Lock, Wrench, Cpu, Code } from "lucide-react";


export const topServices = [
  {
    icon: "/img/web-development-svgrepo-com.svg",
    title: "Desenvolvimento Frontend",
    desc: "Criação de interfaces modernas e responsivas, focando em experiência do usuário, performance e acessibilidade.",
  },
  {
    icon: "/img/development-svgrepo-com.svg",
    title: "Desenvolvimento Backend",
    desc: "Desenvolvimento de APIs robustas, integrações e lógica de servidor com NestJS, TypeORM, Prisma e Express.",
  },
];

export const services = [
  {
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    title: "Desenvolvimento de Interfaces",
    desc: "Criação de interfaces modernas, responsivas e acessíveis.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-purple-400" />,
    title: "Design Responsivo",
    desc: "Layout otimizado para qualquer dispositivo ou tela.",
  },
  {
    icon: <Code className="w-6 h-6 text-pink-400" />,
    title: "Componentes Reutilizáveis",
    desc: "Desenvolvimento modular e otimizado com React e ShadCN.",
  },
  {
    icon: <Server className="w-6 h-6 text-green-400" />,
    title: "APIs Escaláveis",
    desc: "Criação de APIs REST com NestJS e Node.js.",
  },
  {
    icon: <Database className="w-6 h-6 text-yellow-400" />,
    title: "Banco de Dados",
    desc: "Integração com PostgreSQL, Prisma e TypeORM.",
  },
  {
    icon: <Cloud className="w-6 h-6 text-cyan-400" />,
    title: "Deploy em Nuvem",
    desc: "Deploy automatizado em plataformas como Vercel e Railway.",
  },
  {
    icon: <Lock className="w-6 h-6 text-red-400" />,
    title: "Autenticação Segura",
    desc: "Login com JWT, OAuth e integração com Auth providers.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-orange-400" />,
    title: "Integrações",
    desc: "Conexão com APIs externas e sistemas legados.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-indigo-400" />,
    title: "Performance e Otimização",
    desc: "Monitoramento, caching e otimização de queries.",
  },
];
