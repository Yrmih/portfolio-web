import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    name: "Kanban App",
    description: "Aplicação fullstack com NestJS, Prisma e React.",
    image: "/images/kanban.jpg",
    link: "#",
    techs: ["React", "NestJS", "Prisma", "PostgreSQL"],
    stack: ["Fullstack"],
    category: "Pessoal",
  },
  {
    name: "Livre",
    description: "Sistema de registro e validação de eventos da Defensoria.",
    image: "/images/defensoria.jpg",
    link: "#",
    techs: ["Next.js", "TypeScript", "ShadCN", "Tailwind"],
    stack: ["Frontend"],
    category: "Profissional",
  },
  {
    name: "Portal Defensoria",
    description: "Meu portfólio pessoal com animações e design minimalista.",
    image: "/images/portfolio.jpg",
    link: "#",
    techs: ["Next.js", "Framer Motion", "Tailwind"],
    stack: ["Frontend"],
    category: "Pessoal",
  },
];
