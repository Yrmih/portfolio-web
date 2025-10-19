"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projectsData";


export default function Projects({ id }: { id: string }) {
  return (
    <section 
      id={id}
      className="min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 "
    >
       <motion.h2
        className="text-4xl font-bold mb-12 text-blue-500"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Projetos
      </motion.h2>
          <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-6xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </motion.div>

    </section>
  );
}