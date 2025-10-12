"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, MessageCircle } from "lucide-react";

export default function Contact({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100"
    >
      {/* Título */}
      <motion.h2
        className="text-4xl font-bold mb-6 text-center text-blue-500"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Vamos trabalhar juntos?
      </motion.h2>

      {/* Descrição */}
      <motion.p
        className="text-lg text-gray-300 max-w-2xl text-center mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Entre em contato comigo hoje e vamos conversar sobre como podemos
        transformar suas ideias em projetos digitais incríveis e funcionais.
      </motion.p>

      {/* Botão WhatsApp */}
      <motion.a
        href="https://wa.me/5591981312498"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-8 py-4 bg-green-600 rounded-full hover:bg-green-700 transition-all mb-12"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-lg font-semibold">Fale comigo no WhatsApp</span>
        <MessageCircle className="w-5 h-5" />
      </motion.a>

      {/* Ícones de contato */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {[
          {
            icon: <Mail className="w-5 h-5 text-blue-400" />,
            text: "yrmihiangoncalvesdelima@gmail.com",
            link: "mailto:yrmihiangoncalvesdelima@gmail.com",
          },
          {
            icon: <Github className="w-5 h-5 text-blue-400" />,
            text: "Github",
            link: "https://github.com/Yrmih",
          },
          {
            icon: <Linkedin className="w-5 h-5 text-blue-400" />,
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/yrmihian",
          },
          {
            icon: <Instagram className="w-5 h-5 text-blue-400" />,
            text: "Instagram",
            link: "https://www.instagram.com/yrmih.ian/",
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            {item.icon}
            <span>{item.text}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
