"use client";

import { motion } from "framer-motion";
import { Code, Layout, Smartphone, Database, Server, Cloud, Lock, Wrench, Cpu } from "lucide-react";

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
]

export default function Services({ id }: { id: string }) {
  return (
    <section id={id} className="py-20 bg=[#0a0a0f] text-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6 text-center text-blue-500"
        >
          Meus Serviços
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map}
        </div>
      </div>
    </section>
  );
}
