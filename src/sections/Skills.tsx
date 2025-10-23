"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AtomsAnimation from "@/components/AtomsAnimation";

interface SkillsProps {
  id: string;
}

interface Skill {
  name: string;
  icon: string;
  category: string;
}

export default function Skills({ id }: SkillsProps) {
  const skills: Skill[] = [
    // --- Frontend ---
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      category: "Frontend",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      category: "Frontend",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      category: "Frontend",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      category: "Frontend",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      category: "Frontend",
    },
    {
      name: "Angular",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
      category: "Frontend",
    },
    {
      name: "Redux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      category: "Frontend",
    },

    // --- Backend ---
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      category: "Backend",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      category: "Backend",
    },
    {
      name: "NestJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
      category: "Backend",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      category: "Backend",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      category: "Backend",
    },
    {
      name: "GraphQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      category: "Backend",
    },

    // --- DevOps / Cloud ---
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      category: "DevOps / Cloud",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      category: "DevOps / Cloud",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
      category: "DevOps / Cloud",
    },
    {
      name: "Vercel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
      category: "DevOps / Cloud",
    },

    // --- API / Tools ---
    {
      name: "Swagger",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
      category: "API / Tools",
    },
    {
      name: "Axios",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
      category: "API / Tools",
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      category: "API / Tools",
    },

    // --- Testing ---
    {
      name: "Jest",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
      category: "Testing",
    },

    // --- Monitoring ---
    {
      name: "Sentry",
      icon: "https://sentry-brand.storage.googleapis.com/sentry-logo-black.svg",
      category: "Monitoring",
    },

    // --- UI / Design ---
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      category: "UI / Design",
    },

    // --- CMS / Web Tools ---
    {
      name: "WordPress",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg",
      category: "CMS / Web Tools",
    },

    // --- Mobile ---
    {
      name: "Android",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
      category: "Mobile",
    },
    {
      name: "iOS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg",
      category: "Mobile",
    },

    // --- Project Management ---
    {
      name: "ClickUp",
      icon: "https://cdn.brandfetch.io/idU6lzwMYA/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1678376729733",
      category: "Project Management",
    },
    {
      name: "Trello",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg",
      category: "Project Management",
    },
    {
      name: "OpenProject",
      icon: "https://cdn-icons-png.flaticon.com/512/1459/1459087.png",
      category: "Project Management",
    },
  ];

  // Agrupa skills por categoria
  const categories = Array.from(
    new Set(skills.map((skill) => skill.category))
  );

  return (
    <section
      id={id}
      className="relative min-h-screen flex flex-col justify-center items-center p-8 bg-gray-950 text-gray-100 overflow-auto"
    >
      <AtomsAnimation />

      <h2 className="text-4xl font-bold mb-8 text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] z-10">
        Minhas Stacks
      </h2>

      {categories.map((category) => (
        <div key={category} className="mb-12 w-full max-w-7xl">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">
            {category}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0px 0px 25px rgba(59,130,246,0.5)",
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="relative px-6 py-4 bg-gray-800/60 rounded-2xl text-center font-medium 
                    backdrop-blur-sm transition-all duration-200 hover:bg-blue-600/30"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative w-10 h-10 mx-auto mb-2">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <span className="text-sm md:text-base">{skill.name}</span>
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}
