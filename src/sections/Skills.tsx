"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AtomsAnimation from "@/components/AtomsAnimation";
import { skills } from "@/data/skillsData";

interface SkillsProps {
  id: string;
}

export default function Skills({ id }: SkillsProps) {
  
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

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
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">{category}</h3>

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
