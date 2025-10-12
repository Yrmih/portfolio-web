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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        <div className="p-6 bg-gray-800 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">Quem Sou Eu</h3>
          <p className="text-gray-300 leading-relaxed text-justify">
            Me chamo <strong>Yrmih Ian Gonçalves de Lima</strong>, tenho 30 anos
            e sou de <strong>Ananindeua - PA</strong>. Estudo{" "}
            <strong>Análise e Desenvolvimento de Sistemas</strong> na
            Universidade Estácio de Sá.
            <br />
            <br />
            Estagiei por 2 anos na{" "}
            <strong>Defensoria Pública do Estado do Pará</strong> como
            desenvolvedor Front-end, onde desenvolvi e implementei WebApps,
            SPAs, CSR (Client-Side Rendering) e SSR (Server-Side Rendering),
            utilizando tecnologias como{" "}
            <strong>
              Next.js, TypeScript, TailwindCSS, ShadCN + Zod, React Hook Form
            </strong>{" "}
            e <strong>Vite Testing</strong>.
            <br />
            <br />
            Também atuo com frameworks server-side TypeScript/JavaScript como{" "}
            <strong>NestJS, TypeORM, Prisma, Express</strong> e APIs REST,
            realizando integrações com bancos <strong>PostgreSQL, MySQL</strong>{" "}
            e configurações com <strong>Docker</strong>.
            <br />
            <br />
            Atualmente, estou em aprendizado sobre aplicações em nuvem com{" "}
            <strong>AWS</strong>. Paralelamente, trabalho como{" "}
            <strong>Desenvolvedor Fullstack Freelancer</strong>, criando
            soluções personalizadas e focadas nas necessidades dos clientes.
          </p>
        </div>

        <div className="p-6 bg-gray-800 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">
            Informações Pessoais
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Nome:</span>
              <span className="font-medium">Yrmih Ian Gonçalves de Lima</span>
            </li>
            <li className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Localização:</span>
              <span className="font-medium">Ananindeua, Pará, Brasil</span>
            </li>
            <li className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Especialidade:</span>
              <span className="font-medium">
                Desenvolvimento Client e Server Side
              </span>
            </li>
            <li className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Disponibilidade:</span>
              <span className="font-medium">Freelance & Contrato</span>
            </li>
            <li className="flex justify-between border-b  border-gray-700 pb-2">
              <span className="text-gray-400">Experiência:</span>
              <span className="font-medium">2+ anos</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
