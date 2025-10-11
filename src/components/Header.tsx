"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header className="fixed w-full bg-gray-900/90 backdrop-blur-md z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-blue-800"> Yrmih Ian</div>
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-blue-500">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </nav>
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-900/95 space-y-4 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
