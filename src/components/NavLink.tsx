"use client";

import { useEffect, useState } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({href, children}: NavLinkProps) {

  const [ active, setActive ] = useState(false);

  
  return <a href=""></a>;
}
