"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroVideo from "@/components/HeroVideo";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-black"
    >
      <HeroVideo />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16">
        <motion.div
          className="flex flex-col items-center md:items-start max-w-lg text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-300 mb-2">Olá, eu sou</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-blue-400 drop-shadow-[0_0_15px_rgba(0,150,255,0.6)]">
            Yrmih Ian
          </h1>
          <p className="mb-8 text-lg text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
            Desenvolvedor Full Stack — criando experiências digitais com
            criatividade e código limpo.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <motion.a
              href="#services"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59,130,246,0.7)",
              }}
              className="relative px-8 py-3 rounded-xl overflow-hidden group font-semibold text-white border border-blue-500/30 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 opacity-70 group-hover:opacity-100 transition-opacity blur-sm"></span>
              <span className="relative z-10">Conheça meu trabalho</span>
              <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[radial-gradient(circle_at_center,rgba(0,150,255,0.3)_0%,transparent_80%)]"></span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(0,180,255,0.7)",
              }}
              className="relative flex items-center gap-3 px-8 py-3 rounded-xl overflow-hidden group font-semibold text-white border border-blue-500/30 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 opacity-70 group-hover:opacity-100 transition-opacity blur-sm"></span>

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  filter: [
                    "drop-shadow(0 0 5px rgba(0,200,255,0.7))",
                    "drop-shadow(0 0 15px rgba(0,200,255,1))",
                    "drop-shadow(0 0 5px rgba(0,200,255,0.7))",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </motion.div>

              <span className="relative z-10 text-lg font-semibold">
                Fale comigo
              </span>

              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 20%, rgba(0,150,255,0.2) 0%, transparent 80%)",
                    "radial-gradient(circle at 80% 80%, rgba(0,200,255,0.25) 0%, transparent 80%)",
                    "radial-gradient(circle at 50% 50%, rgba(0,150,255,0.3) 0%, transparent 90%)",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 50px rgba(59, 130, 246, 0.7)",
            }}
            className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl transition-shadow relative"
          >
            <Image
              src="/img/eu.png"
              alt="Yrmih Ian"
              width={384}
              height={384}
              className="w-full h-full object-cover"
              style={{
                objectFit: "cover",
                objectPosition: "center 35%",
              }}
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator target="#about" label="Ver mais" />
    </section>
  );
}
