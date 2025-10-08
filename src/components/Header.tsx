"use client"; 


export default function Header(){

  const links = [
    {name: "Início", href: "#home"},
    {name: "Sobre", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projetos", href: "#projects"},
    {name: "Contato", href: "#contact"},
  ];


  return(
    <header className="fixed w-full bg-gray-900/90 backdrop-blur-md z-50">
      <nav>

      </nav>
    </header>
  );
}