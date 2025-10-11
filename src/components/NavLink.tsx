"use client";

import { useEffect, useState } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(href);
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= 0;
      setActive(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [href]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.querySelector(href);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <a
      href={href}
      onClick={handleClick}
      className={`transition-colors duration-200 ${
        active
          ? "text-blue-500 font-semibold"
          : "text-gray-300 hover:text-blue-400"
      }`}
    >
      {children}
    </a>
  );
}
