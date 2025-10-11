"use client";
import { Mail, Github, Linkedin, Instagram, MessageCircle } from "lucide-react";

export default function Contact({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center items-center p-8 bg-gray-900 text-white"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">
        {" "}
        Vamos trabalhar juntos?
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-8">
        Entre em contato comigo hoje e vamos conversar sobre como podemos
        transformar suas ideias em projetos digitais incríveis e funcionais.
      </p>

      <div>
        <a href=""></a>

        <a href=""></a>

        <a href=""></a>

        <a href=""></a>

        <a href=""></a>
      </div>
    </section>
  );
}
