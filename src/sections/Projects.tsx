// src/sections/Projects.tsx
export default function Projects({ id }: { id: string }) {
  const projects = [
    { name: "Kanban App", link: "#" },
    { name: "Sistema Defensoria", link: "#" },
    { name: "Portfolio", link: "#" },
  ];
  return (
    <section id={id} className="min-h-screen flex flex-col justify-center items-center p-8">
      <h2 className="text-4xl font-bold mb-8">Projetos</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a key={project.name} href={project.link} className="p-4 bg-gray-700 rounded hover:bg-gray-600">
            {project.name}
          </a>
        ))}
      </div>
    </section>
  );
}
