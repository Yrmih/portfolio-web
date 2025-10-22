"use client";

import { motion } from "framer-motion";

export default function AtomsAnimation() {
  return (
    <div className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden">
      {/* Átomo azul à esquerda (gira sentido horário) */}
      <motion.img
        src="/img/atomo512.png"
        alt="Átomo React Azul"
        className="absolute left-6 top-10 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36"
        animate={{
          rotate: [0, 360],
          filter: [
            "hue-rotate(0deg) saturate(1.2)",   // azul puro
            "hue-rotate(100deg) saturate(1.4)", // levemente verde
            "hue-rotate(0deg) saturate(1.2)",   // volta pro azul
          ],
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 12, ease: "linear" },
          filter: { repeat: Infinity, duration: 8, ease: "easeInOut" },
        }}
      />

      {/* Átomo amarelo à direita (gira sentido anti-horário) */}
      <motion.img
        src="/img/atomo512.png"
        alt="Átomo React Amarelo"
        className="absolute right-6 bottom-10 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36"
        animate={{
          rotate: [0, -360],
          filter: [
            "hue-rotate(50deg) saturate(1.3)",  // amarelo
            "hue-rotate(300deg) saturate(1.4)", // puxa pro vermelho
            "hue-rotate(50deg) saturate(1.3)",  // volta pro amarelo
          ],
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 12, ease: "linear" },
          filter: { repeat: Infinity, duration: 8, ease: "easeInOut" },
        }}
      />
    </div>
  );
}
