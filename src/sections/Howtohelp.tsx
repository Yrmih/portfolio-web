"use client";

import { motion } from "framer-motion";

export default function Howtohelp({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="py-20 bg-[#0b0c14] text-gray-200 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-center text-blue-500">
            E como posso te ajudar?
          </h2>
          <p className="text-gray-400 mb-8">
            Combinando tecnologia, design e estratégia para criar soluções
            digitais que impulsionam resultados reais. Conheça os principais
            benefícios:
          </p>
        </motion.div>
      </div>
    </section>
  );
}
