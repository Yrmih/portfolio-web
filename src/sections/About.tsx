"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function About({ id }: { id: string }) {
  // Variantes para título e parágrafo
  const fadeUpFast: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Variantes para os cards surgindo de lados opostos
  const leftCard: Variants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const rightCard: Variants = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center items-center p-8 bg-gray-950 text-gray-100"
    >
      {/* Título mágico */}
      <motion.h2
        variants={fadeUpFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="text-4xl font-bold mb-6 text-center text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.4)]"
      >
        Sobre mim
      </motion.h2>

      {/* Parágrafo de introdução */}
      <motion.p
        variants={fadeUpFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-3xl text-center mb-12 text-lg text-gray-200 leading-relaxed drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
      >
        Desenvolvedor Web com paixão por criar experiências digitais interativas e eficientes. Combinando conhecimento técnico com visão criativa para entregar projetos de alto impacto.
      </motion.p>

      {/* Cards com animação dos lados */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        <motion.div
          variants={leftCard}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.04, boxShadow: "0px 0px 18px rgba(59,130,246,0.3)" }}
          transition={{ duration: 0.3 }}
          className="relative p-6 bg-gray-800/70 rounded-2xl shadow-lg overflow-hidden transition-all duration-200 backdrop-blur-sm border border-gray-700/40"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">
            Quem Sou Eu
          </h3>
          <p className="text-gray-300 leading-relaxed text-justify relative z-10">
            Me chamo <strong>Yrmih Ian Gonçalves de Lima</strong>, tenho 30 anos e sou de <strong>Ananindeua - PA</strong>. Estudo <strong>Análise e Desenvolvimento de Sistemas</strong> na Universidade Estácio de Sá.
            <br /><br />
            Estagiei por 2 anos na <strong>Defensoria Pública do Estado do Pará</strong> como desenvolvedor Front-end, onde desenvolvi e implementei WebApps, SPAs, CSR e SSR utilizando <strong>Next.js, TypeScript, TailwindCSS, ShadCN + Zod e React Hook Form</strong>.
            <br /><br />
            Também atuo com frameworks server-side como <strong>NestJS, TypeORM, Prisma</strong> e <strong>Express</strong>, além de integrações com bancos <strong>PostgreSQL</strong> e <strong>MySQL</strong> via <strong>Docker</strong>.
            <br /><br />
            Atualmente, estudo aplicações em nuvem com <strong>AWS</strong> e trabalho como <strong>Desenvolvedor Fullstack Freelancer</strong>.
          </p>
        </motion.div>

        <motion.div
          variants={rightCard}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.04, boxShadow: "0px 0px 18px rgba(59,130,246,0.3)" }}
          transition={{ duration: 0.3 }}
          className="relative p-6 bg-gray-800/70 rounded-2xl shadow-lg overflow-hidden transition-all duration-200 backdrop-blur-sm border border-gray-700/40"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">
            Informações Pessoais
          </h3>
          <div className="relative flex flex-col justify-center items-center space-y-4">
            <ul className="space-y-3 text-gray-300 relative z-10">
              {[
                ["Nome:", "Yrmih Ian Gonçalves de Lima"],
                ["Localização:", "Ananindeua, Pará, Brasil"],
                ["Especialidade:", "Desenvolvimento Client e Server Side"],
                ["Disponibilidade:", "Freelance & Contrato"],
                ["Experiência:", "2+ anos"],
              ].map(([label, value]) => (
                <li
                  key={label}
                  className="flex justify-between border-b border-gray-700 pb-2"
                >
                  <span className="text-gray-400">{label}</span>
                  <span className="font-medium">{value}</span>
                </li>
              ))}
            </ul>

            <div className="w-full flex justify-center items-center mt-6">
              <Image
                src="/img/slogan-tiger.png"
                alt="Logo do Tigre"
                width={480}
                height={480}
                className="opacity-90 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
