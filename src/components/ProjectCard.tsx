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
      className="relative group overflow-hidden rounded-2xl shadow-lg bg-gray-800 transition-transform duration-300 hover:scale-[1.03]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
    >
      <div className="h-56 overflow-hidden relative">
        <a href={project.image} target="_blank" rel="noopener noreferrer">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
          />
        </a>

        {project.category && (
          <div className="absolute top-3 right-3 bg-blue-600 text-xs px-3 py-1 rounded-full text-white">
            {project.category}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-400 mb-2">
          {project.name}
        </h3>
        <p className="text-gray-400 text-sm mb-3">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.stack?.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
