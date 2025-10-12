export default function Skills({ id }: {id: string}){
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
  return(
    <section id={id} className="min-h-screen flex flex-col justify-center items-center p-8 bg-gray-800">
      <h2 className="text-4xl font-bold mb-4">Skills</h2>
      <ul className="flex flex-wrap justify-center gap-4 mt-4">
        {skills.map((skill) => (
          <li key={skill} className="px-4 py-2 bg-gray-700 rounded">{skill}</li>
        ))}
      </ul>
    </section>
 );
}