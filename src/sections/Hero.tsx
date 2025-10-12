"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4"
    >
      <p className="text-lg text-gray-400 mb-2">Olá, me chamo</p>
      <h1 className="text-6xl md:text-7xl font-bold mb-4">Yrmih Ian</h1>
      <p className="text-xl text-gray-400 mb-8">Desenvolvedor Full Stack</p>
      <a
        href="#about"
        className="px-6 py-3 bg-blue-500 rounded hover:bg-blue-600"
      >
        Ver mais
      </a>

      <div className="flex flex-col md:flex-row gap-4 mb-16">
        <a
          href="#portfolio"
          className="px-6 py-3 bg-blue-500 rounded hover:bg-blue-600 transition"
        >
          Conheça meu Trabalho
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
        >
          Fale comigo
        </a>
      </div>
    </section>
  );
}
