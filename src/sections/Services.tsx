"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import ScrollIndicator from "@/components/ScrollIndicator";
import { topServices, services } from "@/data/servicesData";

export default function Services({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex flex-col justify-center items-center py-20 px-8 bg-gray-950 text-gray-100"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center text-blue-400"
      >
        Meus Serviços
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full mb-12">
        {topServices.map((card) => (
          <ServiceCard key={card.title} {...card} isTopCard />
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {services.map((card, i) => (
          <ServiceCard key={i} {...card} />
        ))}
      </div>

      <div className="w-full flex justify-center mt-12">
        <ScrollIndicator target="#howtohelp" label="Ver mais" />
      </div>
    </section>
  );
}
