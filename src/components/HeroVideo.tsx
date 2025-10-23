"use client";

import { motion } from "framer-motion";

export default function HeroVideo() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,255,255,0.15) 0%, rgba(255,255,0,0.1) 30%, transparent 70%)",
          mixBlendMode: "overlay",
        }}
      />

      <div className="absolute inset-0 bg-black/50 z-20" />

      {/* Desktop */}
      <motion.video
        key="desktop-video"
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
        style={{
          transformOrigin: "center",
          transform: "scale(1.2)",
          filter: "brightness(1.5)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <source
          src="/video/Mystical_Panther_Emerges_From_Darkness.mp4"
          type="video/mp4"
        />
      </motion.video>

      {/* Tablet / iPhones */}
      <motion.video
        key="tablet-video"
        autoPlay
        loop
        muted
        playsInline
        className="hidden sm:block md:hidden absolute top-0 left-0 w-full h-full object-cover"
        style={{
          objectPosition: "center top",
          transform: "scale(1)",
          filter: "brightness(1.4)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <source
          src="/video/Mystical_Panther_Emerges_From_Darkness.mp4"
          type="video/mp4"
        />
      </motion.video>

      {/* Mobile */}
      <motion.video
        key="mobile-video"
        autoPlay
        loop
        muted
        playsInline
        className="block sm:hidden absolute top-0 left-0 w-full h-full"
        style={{
          objectFit: "contain",
          transform: "scale(1.35)",
          objectPosition: "center 111px",
          backgroundColor: "black",
          filter: "brightness(1.3)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <source
          src="/video/Mystical_Panther_Emerges_From_Darkness.mp4"
          type="video/mp4"
        />
      </motion.video>
    </div>
  );
}
