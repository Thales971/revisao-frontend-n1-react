import { competencias, skills, techs } from '../data/perfil'

export default function Habilidades() {
  return (
    <section className="container mx-auto px-4 py-16">
      <p className="text-mint-400 uppercase tracking-widest text-sm font-bold">Habilidades</p>
      <h2 className="text-3xl font-extrabold mb-3">Tecnologias que mais utilizo</h2>
      <p className="text-slate-400 mb-8">A mesma lista do meu perfil no GitHub, agora no portfólio.</p>

      <div className="flex flex-wrap gap-2 mb-12">
        {techs.map((tech) => (
          <span key={tech} className="px-3 py-1 rounded-full border border-slate-700 bg-navy-800 text-sm">
            {tech}
          </span>
        ))}
      </div>

      <h3 className="text-2xl font-bold mb-5">Competências</h3>
      <div className="grid sm:grid-cols-2 gap-3 mb-12">
        {competencias.map((item) => (
          <div key={item.nome} className="flex items-center justify-between bg-navy-800 border border-slate-700 rounded-xl px-4 py-3">
            <strong>{item.nome}</strong>
            <span className="text-xs font-bold bg-emerald-600 text-white px-2 py-1 rounded">{item.nivel}</span>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold mb-5">Nível prático</h3>
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
