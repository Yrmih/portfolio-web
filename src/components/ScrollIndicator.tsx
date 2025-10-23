"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface ScrollIndicatorProps {
  target?: string;
  label?: string;
}

export default function ScrollIndicator({
  target = "#about",
  label = "Ver mais",
}: ScrollIndicatorProps) {
  return (
    <motion.a
      href={target}
      whileHover={{
        scale: 1.1,
        textShadow: "0px 0px 14px rgba(0,200,255,0.8)",
      }}
      transition={{ duration: 0.3 }}
      className="absolute bottom-10 sm:bottom-14 md:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center text-blue-400 hover:text-blue-300 font-medium tracking-wide cursor-pointer group z-20 w-full max-w-[200px]"
    >
      <span className="relative z-10 mb-2 text-lg group-hover:animate-pulse">
        {label}
      </span>

      <motion.div
        animate={{
          y: [0, 10, 0],
          filter: [
            "drop-shadow(0 0 6px rgba(0,200,255,0.5))",
            "drop-shadow(0 0 15px rgba(0,200,255,1))",
            "drop-shadow(0 0 6px rgba(0,200,255,0.5))",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <ArrowDown size={30} className="group-hover:text-blue-300" />
      </motion.div>

      <motion.span
        className="absolute w-28 h-28 rounded-full bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
      />
    </motion.a>
  );
}
