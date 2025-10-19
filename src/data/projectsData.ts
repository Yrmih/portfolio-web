import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    name: "Kanban App - Sistema de Gestão de Tarefas",
    description:
      "Aplicação fullstack desenvolvida como projeto freelancer para a empresa Dr.Click, voltada ao gerenciamento de tarefas e fluxos internos. O sistema conta com autenticação de usuários, interface moderna com drag & drop e persistência de dados utilizando NestJS, TypeORM e PostgreSQL.",
    image: "/img/kanban.png",
    link: "#",
    techs: [
      "React",
      "TypeScript",
      "Material UI",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "Framer Motion",
    ],
    stack: ["Fullstack"],
    category: "Freelancer",
  },
  {
    name: "Livre - Sistema interno Defensoria Pública do Pará",
    description:
      "Colaborei no desenvolvimento do sistema Livre, plataforma interna da Defensoria Pública do Estado do Pará, voltada ao gerenciamento de informações de pessoas privadas de liberdade, visitantes e defensores públicos. Atuei na criação de formulários dinâmicos, componentes reutilizáveis, DataTables interativas e na implementação de testes unitários com Vitest e React Testing Library.",
    image: "/img/livre-painel.png",
    link: "#",
    techs: ["Next.js", "TypeScript", "ShadCN", "Tailwind"],
    stack: ["Frontend"],
    category: "Colaborativo",
  },
  {
    name: "Portal Web - Defensoria Pública do Pará",
    description:
      "Colaboração no desenvolvimento e manutenção do portal institucional da Defensoria Pública do Estado do Pará, atuando em ajustes visuais, componentes em React e melhorias de acessibilidade.",
    image: "/img/portal-dpe.png",
    link: "#",
    techs: ["Next.js", "Framer Motion", "Tailwind", "Material Ui"],
    stack: ["Frontend"],
    category: "Colaborativo",
  },
  {
    name: "To-Do List Acadêmico",
    description:
      "Aplicação web voltada para gerenciamento de tarefas e estudos, permitindo que estudantes organizem suas atividades acadêmicas de forma eficiente. O sistema possibilita criar, editar e remover tarefas, definir prioridades e datas de entrega, e acompanhar o progresso diário. Desenvolvido com foco em interface intuitiva, responsividade e produtividade, facilitando o acompanhamento de disciplinas, trabalhos e projetos.",
    image: "/img/to-do-list.png",
    link: "#",
    techs: ["React.js", "Framer Motion", "Tailwind"],
    stack: ["Frontend"],
    category: "Projeto Acadêmico",
  },
  {
    name: "Sistema de resumo de Reunioes",
    description:
      "explicação...",
    image: "/img/echo-meet.jpeg",
    link: "#",
    techs: ["React.js", "Framer Motion", "Tailwind"],
    stack: ["Frontend"],
    category: "Projeto Acadêmico",
  },
];
