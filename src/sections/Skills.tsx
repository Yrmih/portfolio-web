import Image from "next/image";

interface SkillsProps {
  id: string;
}

export default function Skills({ id }: SkillsProps) {
  const skills = [
    { name: "React", icon: "/icons/react.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "HTML5", icon: "/icons/html5.svg" },
    { name: "CSS3", icon: "/icons/css3.svg" },
    { name: "TailwindCSS", icon: "/icons/tailwind.svg" },
    { name: "Angular", icon: "/icons/angular.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Express", icon: "/icons/express.svg" },
    { name: "NestJS", icon: "/icons/nestjs.svg" },
    { name: "Git", icon: "/icons/git.svg" },
    { name: "Vercel", icon: "/icons/vercel.svg" },
    { name: "Axios", icon: "/icons/axios.svg" },
    { name: "Swagger", icon: "/icons/swagger.svg" },
    { name: "Figma", icon: "/icons/figma.svg" },
    { name: "Postman", icon: "/icons/postman.svg" },
  ];

  const container = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.6, ease: "easeOut" },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
  };
  
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-[#0b0b22] to-[#050512]"
    >
      <h2 className="text-4xl font-bold text-indigo-400 mb-4 text-center">
        Minhas Stacks
      </h2>
      <p className="text-gray-300 text-center max-w-2xl mb-12">
        Ferramentas e tecnologias que utilizo para criar soluções modernas e
        eficientes.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2 bg-[#11112b] hover:bg-[#1b1b3a] transition-all rounded-2xl p-6 shadow-md shadow-black/30 hover:scale-105 hover:shadow-indigo-500/20"
          >
            <div className="relative w-12 h-12">
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-gray-200 text-sm font-medium">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
