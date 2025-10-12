"use client";

import { useState, useEffect } from "react";
import NavLink from "./NavLink";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 flex justify-center">
      <div
        className={`grid grid-cols-2 md:grid-cols-3 items-center w-full max-w-6xl p-4 rounded-lg transition-all
          ${scrolled ? "bg-gray-900/95 shadow-lg" : "bg-gray-900/70"}
        `}
      >
        <div className="text-2xl font-bold text-blue-500 col-span-1">
          Yrmih Ian
        </div>

        <ul className="hidden md:flex justify-end col-span-2 space-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.name}</NavLink>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex justify-end col-span-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl p-2 rounded hover:bg-gray-800 transition"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-900/95 space-y-4 py-4 mt-2 rounded-lg">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
