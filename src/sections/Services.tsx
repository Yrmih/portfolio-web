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
} from "lucide-react";

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
    desc: "Integração com PostgreSQL, Prisma, TypeORM.",
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
    <section id={id} className="py-20 bg=[#0a0a0f] text-blue-500">
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
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-[#11121a] p-6 rounded-2xl shadow-lg hover:shadow-blue-500/10 transition-all border border-white/5"
            >
              <div className="flex items-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
