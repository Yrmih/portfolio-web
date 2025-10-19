"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      <div className="relative h-52 overflow-hidden group">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-xs px-3 py-1 rounded-full">
          {project.category}
        </div>
      </div>

      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-2xl font-semibold text-blue-400">{project.name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-700 text-xs rounded-full text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-all"
        >
          Ver Projeto
        </a>
      </div>
    </motion.div>
  );
}
