"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5591981312498"
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg hover:shadow-emerald-500/50 transition-all overflow-hidden"
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-600 opacity-0 hover:opacity-20 blur-lg transition-opacity" />
      <span className="text-lg font-semibold text-white">Fale comigo no WhatsApp</span>
      <Image
        src="https://img.icons8.com/?size=100&id=964RahB4l606&format=png&color=25D366"
        alt="WhatsApp"
        width={32}
        height={32}
        className="drop-shadow-[0_0_#25D366]"
      />
    </motion.a>
  );
}
