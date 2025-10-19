"use client";

import { ArrowDown, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-black"
    >
      
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover scale-[1.2]"
          style={{
            transformOrigin: "center",
            filter: "brightness(0.85)",
          }}
        >
          <source src="/video/panther.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/30" />
      </div>

      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16">
        
        <motion.div
          className="flex flex-col items-center md:items-start max-w-lg text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-300 mb-2">Olá, eu sou</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-blue-400">
            Yrmih Ian
          </h1>
          <p className="mb-8 text-lg text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
            Desenvolvedor Full Stack — criando experiências digitais com
            criatividade e código limpo.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mb-16">
            
            <a
              href="#services"
              className="relative px-6 py-3 rounded overflow-hidden group font-semibold text-white"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 opacity-70 group-hover:opacity-100 transition-opacity blur-sm"></span>
              <span className="relative z-10">Conheça meu trabalho</span>
            </a>

            
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
            className="flex flex-col items-center text-gray-300 hover:text-white transition"
          >
            Ver mais
            <ArrowDown className="animate-bounce mt-2" size={24} />
          </a>
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
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
