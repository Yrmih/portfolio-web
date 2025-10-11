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
      const isVisible = rect.top<= window.innerHeight/ 2 && rect.bottom >=0;
      setActive(isVisible);
    };
  }, [href]);
  return <a href=""></a>;
}
