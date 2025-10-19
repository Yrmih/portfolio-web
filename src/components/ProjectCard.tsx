"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({project, index}: ProjectCardProps){
  return(
    <motion.div
      className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    ></motion.div>
  )
}