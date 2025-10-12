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
      <motion.h2
        className="text-4xl font-bold mb-8 text-blue-500"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Projetos
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {projects.map((project, index) => (
          <motion.a
            key={project.name}
            href={project.link}
            className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:bg-gray-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              {project.name}
            </h3>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
