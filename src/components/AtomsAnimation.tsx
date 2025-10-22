"use client";

import { motion, useMotionValue } from "framer-motion";

export default function AtomsAnimation() {
  const leftX = useMotionValue(0);
  const leftY = useMotionValue(0);

  const rightX = useMotionValue(0);
  const rightY = useMotionValue(0);

  return (
    <div className="pointer-events-auto absolute inset-0 w-full h-full overflow-hidden">
      <motion.img
        src="/img/atomo512.png"
        alt="Átomo Amarelo"
        className="absolute left-6 top-10 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 cursor-grab"
        style={{ x: leftX, y: leftY }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.05, 1], // pulsação
          y: [0, -5, 0], // leve oscilação
          filter: ["hue-rotate(50deg) saturate(1.8) brightness(1.1)"],
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 12, ease: "linear" },
          scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        whileHover={{ scale: 1.2 }}
        drag
        dragElastic={0.3}
        dragMomentum={false}
        onDragEnd={() => {
          leftX.set(0);
          leftY.set(0);
        }}
      />

      {/* Átomo azul à direita */}
      <motion.img
        src="/img/atomo512.png"
        alt="Átomo Azul React"
        className="absolute right-6 bottom-10 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 cursor-grab"
        style={{ x: rightX, y: rightY }}
        animate={{
          rotate: [0, -360],
          scale: [1, 1.05, 1],
          y: [0, -5, 0],
          filter: ["hue-rotate(200deg) saturate(2) brightness(1)"],
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 12, ease: "linear" },
          scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        whileHover={{ scale: 1.2 }}
        drag
        dragElastic={0.3}
        dragMomentum={false}
        onDragEnd={() => {
          rightX.set(0);
          rightY.set(0);
        }}
      />
    </div>
  );
}
