"use client";

import { motion } from "framer-motion";

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
        <div></div>
      </div>
    </section>
  );
}
