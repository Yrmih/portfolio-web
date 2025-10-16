"use client";

import { motion } from "framer-motion";
// import Image from "next/image";

interface SkillsProps {
  id: string;
}

export default function Skills({ id }: SkillsProps) {
  const skills = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Angular",
      icon: "/https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
    },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "/icons/express.svg" },
    { name: "NestJS", icon: "/icons/nestjs.svg" },
    { name: "Git", icon: "/icons/git.svg" },
    { name: "Vercel", icon: "/icons/vercel.svg" },
    { name: "Axios", icon: "/icons/axios.svg" },
    { name: "Swagger", icon: "/icons/swagger.svg" },
    { name: "Figma", icon: "/icons/figma.svg" },
    { name: "Postman", icon: "/icons/postman.svg" },
  ];

  const container = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center items-center p-8 bg-gray-900 text-white"
    >
      <h2 className="text-4xl font-bold mb-8 text-blue-500">Minhas Stacks</h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            className="px-6 py-3 bg-gray-800 rounded-xl text-center font-medium hover:bg-blue-600 hover:scale-105 transition-all duration-300"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              width={40}
              height={40}
              className="mx-auto mb-2"
            />
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
