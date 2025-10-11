export default function Skills({ id }: {id: string}){
  const skills = ["Typescript", "React", "Next.js", "Angular", "Node.js", "Express", "Nest.js"]
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