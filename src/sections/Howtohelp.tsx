"use client";

import { motion } from "framer-motion";
import { MessageSquare, Settings, TrendingUp } from "lucide-react";

export default function HelpSection({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center items-center p-8 bg-gray-950 text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-blue-500">
            E como posso te ajudar?
          </h2>

          <p className="mb-8 text-lg text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
            Unindo tecnologia e design, desenvolvo soluções web personalizadas
            para ajudar sua empresa a crescer com eficiência, performance e
            presença digital profissional.
          </p>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <MessageSquare className="w-6 h-6 text-blue-400 mt-1" />
              <div>
                <p className="font-semibold">Comunicação Eficiente</p>
                <p className="text-sm text-gray-400">
                  Interfaces claras e intuitivas que melhoram a experiência do
                  usuário.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <Settings className="w-6 h-6 text-cyan-400 mt-1" />
              <div>
                <p className="font-semibold">Gestão Centralizada</p>
                <p className="text-sm text-gray-400">
                  Painéis e sistemas integrados que simplificam o controle de
                  dados e processos.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <TrendingUp className="w-6 h-6 text-indigo-400 mt-1" />
              <div>
                <p className="font-semibold">Desempenho e Crescimento</p>
                <p className="text-sm text-gray-400">
                  Aplicações otimizadas e escaláveis que acompanham o
                  crescimento do seu negócio.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center items-center relative"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 80px -10px rgba(59,130,246,0.3)",
                "0 0 100px -10px rgba(59,255,255,0.5)",
                "0 0 80px -10px rgba(59,130,246,0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full bg-[#0f1019] flex flex-col justify-center items-center overflow-hidden border border-blue-500"
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                opacity: [0.2, 0.5, 0.2],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background:
                  "radial-gradient(circle at center, rgba(59,130,246,0.4) 0%, transparent 70%)",
                mixBlendMode: "screen",
              }}
            />

            <span className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]">
              100%
            </span>
            <p
              className="mt-2 text-lg tracking-wide font-semibold 
             text-transparent bg-clip-text 
             bg-gradient-to-r from-blue-400 via-cyan-300 to-white 
             drop-shadow-[0_0_15px_rgba(0,200,255,0.8)] 
             animate-pulse"
            >
              Profissional
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
