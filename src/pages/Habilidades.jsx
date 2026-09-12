import { skills } from '../data/projetos'

export default function Habilidades() {
  return (
    <section className="container mx-auto px-4 py-16">
      <p className="text-mint-400 uppercase tracking-widest text-sm font-bold">Habilidades</p>
      <h2 className="text-3xl font-extrabold mb-8">O que eu uso no dia a dia</h2>

      <ul className="space-y-5 max-w-3xl">
        {skills.map((skill) => (
          <li key={skill.nome}>
            <div className="flex justify-between mb-1">
              <strong>{skill.nome}</strong>
              <span>{skill.nivel}%</span>
            </div>
            <div className="h-2.5 rounded-full bg-navy-700 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-mint-400 to-indigo-400"
                style={{ width: `${skill.nivel}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
