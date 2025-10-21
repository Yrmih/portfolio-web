"use client";

import { motion } from "framer-motion";

export default function AtomsAnimation() {
  return (
    <div className="relative w-full h-[400px] md:h-96">
      {/* Átomo 1 - canto superior esquerdo (azul ↔ verde) */}
      <motion.img
        src="/img/atomo512.png"
        alt="Átomo React"
        className="absolute left-4 top-4 w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32"
        animate={{
          rotate: 360,
          filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"]
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      />

      {/* Átomo 2 - canto inferior direito (amarelo ↔ vermelho) */}
      <motion.img
        src="/img/atomo512.png"
        alt="Átomo React"
        className="absolute right-4 bottom-4 w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32"
        animate={{
          rotate: -360,
          filter: ["hue-rotate(30deg)", "hue-rotate(0deg)", "hue-rotate(30deg)"]
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      />
    </div>
  );
}
