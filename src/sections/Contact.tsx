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

      <a
        href="91 98131-2498"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-6 roudend-full hover: bg-green-700 transition-colors mb-12"
      >
        <span>Fale comigo no WhatsApp</span>
        <MessageCircle className="w-5 h-5" />
      </a>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        <a
          href="email:yrmihiangoncalvesdelima@gmail.com"
          className="flex items-center gap-2 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Mail className="w-5 h-5 text-blue-400" />
          <span>yrmihiangoncalvesdelima@gmail.com</span>
        </a>

        <a
          href="https://github.com/Yrmih"
          className="flex items-center gap-2 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Github className="w-5 h-5 text-blue-400" />
          <span>Github</span>
        </a>

        <a
          href="https://www.linkedin.com/in/yrmihian"
          className="flex items-center gap-2 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Linkedin className="w-5 h-5 text-blue-400" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://www.instagram.com/yrmih.ian/"
          className="flex items-center gap-2 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Instagram className="w-5 h-5 text-blue-400" />
          <span>Instagram</span>
        </a>
      </div>
    </section>
  );
}
