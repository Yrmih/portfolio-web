"use client";

import { ArrowDown, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4"
    >
      <p className="text-lg text-gray-400 mb-2">Olá, eu sou</p>
      <h1 className="text-6xl md:text-7xl font-bold mb-4">Yrmih Ian</h1>
      <p className="text-xl text-gray-400 mb-8">Desenvolvedor Full Stack</p>

      <div className="flex flex-col md:flex-row gap-4 mb-16">
        <a
          href="#portfolio"
          className="relative px-6 py-3 rounded overflow-hidden group font-semibold text-white"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 opacity-70 group-hover:opacity-100 transition-opacity blur-sm"></span>
          <span className="relative z-10">Conheça meu trabalho</span>
        </a>

        <motion.a
          href="#contact"
          className="relative flex items-center gap-3 px-6 py-3 rounded bg-blue-600 hover:bg-blue-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle className="w-6 h-6 text-white" />
          <span className="text-lg font-semibold text-white">
            Fale comigo
          </span>
        </motion.a>
      </div>

      <a
        href="#about"
        className="flex flex-col items-center text-gray-400 hover:text-white transition"
      >
        Ver mais
        <ArrowDown className="animate-bounce mt-2" size={24} />
      </a>
    </section>
  );
}
