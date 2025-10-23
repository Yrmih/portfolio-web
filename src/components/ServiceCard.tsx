"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CardData } from "./servicesData";

interface ServiceCardProps extends CardData {
  isTopCard?: boolean;
}

export default function ServiceCard({ icon, iconType = "component", title, desc, isTopCard = false }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.07,
        boxShadow: "0px 0px 25px 5px rgba(0,150,255,0.4)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`relative p-6 rounded-2xl shadow-lg overflow-hidden transition-all duration-200 flex flex-col items-center text-center
        ${isTopCard ? "flex-1 bg-gray-800" : "bg-[#11121a] border border-blue-500/10"}`}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300">
        {!isTopCard && (
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, rgba(0,150,255,0.15) 0%, transparent 80%)",
                "radial-gradient(circle at 80% 80%, rgba(0,150,255,0.2) 0%, transparent 80%)",
                "radial-gradient(circle at 50% 50%, rgba(0,150,255,0.3) 0%, transparent 90%)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          />
        )}
      </div>

      {isTopCard && iconType === "image" ? (
        <Image
          src={icon as string}
          alt={title}
          width={48}
          height={48}
          className="mb-4 relative z-10 opacity-90 hover:opacity-100 transition-opacity duration-300"
          style={{ objectFit: "contain" }}
        />
      ) : (
        <div className="relative z-10 flex items-center mb-4">{icon}</div>
      )}

      <h3 className="text-lg font-semibold text-blue-400 mb-2 relative z-10">{title}</h3>
      <p className="text-gray-400 relative z-10 text-sm">{desc}</p>
    </motion.div>
  );
}
