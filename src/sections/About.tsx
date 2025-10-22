"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About({ id }: { id: string }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
  };

  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center items-center p-8 bg-gray-950 text-gray-100"
    >
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.2 }}
        className="text-4xl font-bold mb-6 text-center text-blue-500"
      >
        Sobre mim
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-3xl text-center mb-8 text-lg text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
      >
        Desenvolvedor Web com paixão por criar experiências digitais interativas
        e eficientes. Combinando conhecimento técnico com visão criativa para
        entregar projetos de alto impacto.
      </motion.p>

      {/* Seção "Quem Sou Eu" e "Informações Pessoais" */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full"
      >
        {[
          {
            title: "Quem Sou Eu",
            content: (
              <p className="text-gray-300 leading-relaxed text-justify relative z-10">
                Me chamo <strong>Yrmih Ian Gonçalves de Lima</strong>, tenho 30
                anos e sou de <strong>Ananindeua - PA</strong>. Estudo{" "}
                <strong>Análise e Desenvolvimento de Sistemas</strong> na
                Universidade Estácio de Sá.
                <br />
                <br />
                Estagiei por 2 anos na{" "}
                <strong>Defensoria Pública do Estado do Pará</strong> como
                desenvolvedor Front-end, onde desenvolvi e implementei WebApps,
                SPAs, CSR (Client-Side Rendering) e SSR (Server-Side Rendering),
                utilizando tecnologias como{" "}
                <strong>
                  Next.js, TypeScript, TailwindCSS, ShadCN + Zod, React Hook
                  Form
                </strong>{" "}
                e <strong>Vite Testing</strong>.
                <br />
                <br />
                Também atuo com frameworks server-side TypeScript/JavaScript
                como <strong>NestJS, TypeORM, Prisma, Express</strong> e APIs
                REST, realizando integrações com bancos{" "}
                <strong>PostgreSQL, MySQL</strong> e configurações com{" "}
                <strong>Docker</strong>.
                <br />
                <br />
                Atualmente, estou em aprendizado sobre aplicações em nuvem com{" "}
                <strong>AWS</strong>. Paralelamente, trabalho como{" "}
                <strong>Desenvolvedor Fullstack Freelancer</strong>, criando
                soluções personalizadas e focadas nas necessidades dos clientes.
              </p>
            ),
          },
          {
            title: "Informações Pessoais",
            content: (
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
                    width={500}
                    height={500}
                    className="opacity-90 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                  />
                </div>
              </div>
            ),
          },
        ].map((card) => (
          <motion.div
            key={card.title}
            whileHover={{
              scale: 1.04,
              boxShadow: "0px 0px 18px rgba(59,130,246,0.3)",
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative p-6 bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-200"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">
              {card.title}
            </h3>
            {card.content}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
