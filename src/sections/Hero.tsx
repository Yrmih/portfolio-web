"use client";

import { ArrowDown, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import myPhoto from "@/public/img/me.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gray-900 text-white px-4 md:px-16 gap-12"
    >
      {/* Lado do texto e botões */}
      <motion.div
        className="flex flex-col justify-center items-start max-w-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg text-gray-400 mb-2">Olá, eu sou</p>
        <h1 className="text-6xl md:text-7xl font-bold mb-4">Yrmih Ian</h1>
        <p className="text-xl text-gray-400 mb-8">Desenvolvedor Full Stack</p>

        <div className="flex flex-col md:flex-row gap-4 mb-16">
          {/* Conheça meu trabalho */}
          <a
            href="#portfolio"
            className="relative px-6 py-3 rounded overflow-hidden group font-semibold text-white"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 opacity-70 group-hover:opacity-100 transition-opacity blur-sm"></span>
            <span className="relative z-10">Conheça meu trabalho</span>
          </a>

          {/* Fale comigo */}
          <a
            href="#contact"
            className="relative flex items-center gap-3 px-6 py-3 rounded overflow-hidden group font-semibold text-white"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-70 group-hover:opacity-100 transition-opacity blur-sm"></span>
            <MessageCircle className="relative z-10 w-6 h-6 text-white" />
            <span className="relative z-10 text-lg font-semibold">
              Fale comigo
            </span>
          </a>
        </div>

        <a
          href="#about"
          className="flex flex-col items-center text-gray-400 hover:text-white transition"
        >
          Ver mais
          <ArrowDown className="animate-bounce mt-2" size={24} />
        </a>
      </motion.div>

      {/* Lado da foto com animação e hover */}
      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 40px rgba(59, 130, 246, 0.5)",
          }}
          className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl transition-shadow relative"
        >
          <Image
            src="/img/me.png"
            alt="Yrmih Ian"
            width={384}
            height={384}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
