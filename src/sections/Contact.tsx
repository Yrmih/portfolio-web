"use client";

import { motion } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactGrid from "@/components/ContactGrid";

export default function Contact({ id }: { id: string }) {
  return (
    <section id={id} className="min-h-screen flex flex-col justify-center items-center p-8 bg-gray-950 text-gray-100">
      <motion.h2
        className="text-4xl font-bold mb-6 text-center text-blue-500"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Vamos trabalhar juntos?
      </motion.h2>

      <motion.p
        className="text-lg max-w-2xl text-center mb-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Entre em contato comigo hoje e vamos conversar sobre como podemos transformar suas ideias em projetos digitais incríveis e funcionais.
      </motion.p>

      <WhatsAppButton />
      <ContactGrid />
    </section>
  );
}
