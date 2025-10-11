export default function About({ id }: { id: string }) {
  return (
    <section id={id} className="min-h-screen flex flex-col justify-center items-center p-8">
      <h2 className="text-4xl font-bold mb-4">Sobre mim</h2>
      <p className="max-w-2xl text-center text-gray-300">
        Sou desenvolvedor Front-end em transição para Fullstack, focado em construir aplicações modernas e responsivas usando Next.js, Tailwind CSS e TypeScript.
      </p>
    </section>
  );
}