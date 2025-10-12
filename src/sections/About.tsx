export default function About({ id }: { id: string }) {
  return (
    <section id={id} className="min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-500">Sobre mim</h2>
      <p className="max-w-3xl text-center text-gray-300 mb-12">
        Desenvolvedor Web com paixão por criar experiências digitais
        interativas e eficientes. Combinando conhecimento técnico com visão
        criativa para entregar projetos de alto impacto.
      </p>

    </section>
  );
}