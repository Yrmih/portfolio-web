export default function About({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100"
    >
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-500">
        Sobre mim
      </h2>
      <p className="max-w-3xl text-center text-gray-300 mb-12">
        Desenvolvedor Web com paixão por criar experiências digitais interativas
        e eficientes. Combinando conhecimento técnico com visão criativa para
        entregar projetos de alto impacto.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-12 w-full">
        <div className="p-6 bg-gray-800 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold text-blue-400 mb-2">
            Desenvolvimento Frontend
          </h3>
          <p className="text-gray-400">
            Criação de interfaces modernas e responsivas, focando em experiência
            do usuário, performance e acessibilidade.
          </p>
        </div>

        <div className="p-6 bg-gray-800 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold text-blue-400 mb-2">
            Desenvolvimento Backend
          </h3>
          <p className="text-gray-400">
            Desenvolvimento de APIs robustas, integrações e lógica de servidor
            com NestJS, TypeORM, Prisma e Express.
          </p>
        </div>
      </div>

      <div>

      </div>
    </section>
  );
}
