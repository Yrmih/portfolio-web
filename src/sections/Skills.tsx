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

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
  };

  const bigCategories = [
    "Frontend",
    "Backend",
    "DevOps / Cloud",
    "API / Tools",
  ];
  const smallCategories = categories.filter((c) => !bigCategories.includes(c));

  return (
    <section
      id={id}
      className="relative min-h-screen flex flex-col justify-center items-center p-8 bg-gray-950 text-gray-100"
    >
      <AtomsAnimation />

      <h2 className="text-4xl font-bold mb-12 text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] z-10">
        Minhas Stacks
      </h2>

      <div
        className="grid gap-10 w-full max-w-7xl"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
      >
        {bigCategories.map((category) => (
          <motion.div
            key={category}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              {category}
            </h3>
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              }}
            >
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
          </motion.div>
        ))}
      </div>

      <div
        className="grid gap-8 mt-12 w-full max-w-7xl"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}
      >
        {smallCategories.map((category) => (
          <motion.div
            key={category}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-lg font-semibold mb-3 text-blue-300">
              {category}
            </h3>
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
              }}
            >
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 0px 20px rgba(59,130,246,0.4)",
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="relative px-4 py-3 bg-gray-800/60 rounded-2xl text-center font-medium 
                      backdrop-blur-sm transition-all duration-200 hover:bg-blue-600/20"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-10 h-10 mx-auto mb-1">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs md:text-sm">{skill.name}</span>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .grid div > .relative {
            padding: 2px 4px !important;
          }
          .grid div > .relative .w-10 {
            width: 32px !important;
            height: 32px !important;
          }
          .grid div > .relative span {
            font-size: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
