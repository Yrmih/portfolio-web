"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Smartphone,
  Database,
  Server,
  Cloud,
  Lock,
  Wrench,
  Cpu,
  Code,
  ArrowDown,
} from "lucide-react";
import AtomsAnimation from "@/components/AtomsAnimation";

const services = [
  {
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    title: "Desenvolvimento de Interfaces",
    desc: "Criação de interfaces modernas, responsivas e acessíveis.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-purple-400" />,
    title: "Design Responsivo",
    desc: "Layout otimizado para qualquer dispositivo ou tela.",
  },
  {
    icon: <Code className="w-6 h-6 text-pink-400" />,
    title: "Componentes Reutilizáveis",
    desc: "Desenvolvimento modular e otimizado com React e ShadCN.",
  },
  {
    icon: <Server className="w-6 h-6 text-green-400" />,
    title: "APIs Escaláveis",
    desc: "Criação de APIs REST com NestJS e Node.js.",
  },
  {
    icon: <Database className="w-6 h-6 text-yellow-400" />,
    title: "Banco de Dados",
    desc: "Integração com PostgreSQL, Prisma e TypeORM.",
  },
  {
    icon: <Cloud className="w-6 h-6 text-cyan-400" />,
    title: "Deploy em Nuvem",
    desc: "Deploy automatizado em plataformas como Vercel e Railway.",
  },
  {
    icon: <Lock className="w-6 h-6 text-red-400" />,
    title: "Autenticação Segura",
    desc: "Login com JWT, OAuth e integração com Auth providers.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-orange-400" />,
    title: "Integrações",
    desc: "Conexão com APIs externas e sistemas legados.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-indigo-400" />,
    title: "Performance e Otimização",
    desc: "Monitoramento, caching e otimização de queries.",
  },
];

export default function Services({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex flex-col justify-center items-center py-20 px-8 bg-gray-950 text-gray-100"
    >
      <AtomsAnimation />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center text-blue-400"
      >
        Meus Serviços
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 0px 25px 5px rgba(0,150,255,0.4)",
            }}
            className="relative bg-[#11121a] p-8 rounded-2xl overflow-hidden border border-blue-500/10 transition-all duration-300 group z-10"
          >
            {/* Efeito elétrico atrás do card */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 20%, rgba(0,150,255,0.15) 0%, transparent 80%)",
                  "radial-gradient(circle at 80% 80%, rgba(0,150,255,0.2) 0%, transparent 80%)",
                  "radial-gradient(circle at 50% 50%, rgba(0,150,255,0.3) 0%, transparent 90%)",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10 flex items-center mb-4">
              {service.icon}
            </div>
            <h3 className="relative z-10 text-xl font-semibold mb-2 text-blue-400">
              {service.title}
            </h3>
            <p className="relative z-10 text-gray-400 text-sm">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.a
        href="#howtohelp"
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 14px rgba(0,200,255,0.8)",
        }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-blue-400 hover:text-blue-300 font-medium tracking-wide cursor-pointer group z-20"
      >
        <span className="relative z-10 mb-2 text-lg group-hover:animate-pulse">
          Ver mais
        </span>

        <motion.div
          animate={{
            y: [0, 10, 0],
            filter: [
              "drop-shadow(0 0 6px rgba(0,200,255,0.5))",
              "drop-shadow(0 0 15px rgba(0,200,255,1))",
              "drop-shadow(0 0 6px rgba(0,200,255,0.5))",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={30} className="group-hover:text-blue-300" />
        </motion.div>

        <motion.span
          className="absolute w-28 h-28 rounded-full bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </motion.a>
    </section>
  );
}
