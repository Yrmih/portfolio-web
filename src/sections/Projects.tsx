"use client";

import { motion } from "framer-motion";

export default function Projects({ id }: { id: string }) {
  const projects = [
    { name: "Kanban App", link: "#" },
    { name: "Sistema Defensoria", link: "#" },
    { name: "Portfolio", link: "#" },
  ];

  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100"
    >
      {/* título animado */}
      <motion.h2
        className="text-4xl font-bold mb-8 text-blue-500"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Projetos
      </motion.h2>

      {/* grid de projetos */}
      <motion.div
        className="grid md:grid-cols-3 gap-6 max-w-5xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {projects.map((project, index) => (
          <motion.a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-6 bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-200 group"
            whileHover={{
              scale: 1.04,
              boxShadow: "0px 0px 18px rgba(59,130,246,0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            {/* camada de brilho diagonal suave */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

            {/* conteúdo do card */}
            <h3 className="text-lg font-semibold text-blue-400 mb-2 relative z-10">
              {project.name}
            </h3>
            <p className="text-gray-400 text-sm relative z-10">
              Clique para visualizar detalhes do projeto.
            </p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
