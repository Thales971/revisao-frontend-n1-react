import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
} from 'react-icons/fa'
import { SiPrisma, SiTailwindcss, SiPostgresql, SiTypescript } from 'react-icons/si'
import { competencias, skills, techs } from '../data/perfil'

const icones = [
  { nome: 'HTML5', icone: FaHtml5, cor: 'text-orange-500' },
  { nome: 'CSS3', icone: FaCss3Alt, cor: 'text-blue-400' },
  { nome: 'JavaScript', icone: FaJs, cor: 'text-yellow-400' },
  { nome: 'TypeScript', icone: SiTypescript, cor: 'text-blue-500' },
  { nome: 'React', icone: FaReact, cor: 'text-cyan-400' },
  { nome: 'Tailwind', icone: SiTailwindcss, cor: 'text-sky-400' },
  { nome: 'Node.js', icone: FaNodeJs, cor: 'text-green-500' },
  { nome: 'Prisma', icone: SiPrisma, cor: 'text-slate-200' },
  { nome: 'PostgreSQL', icone: SiPostgresql, cor: 'text-sky-600' },
  { nome: 'Python', icone: FaPython, cor: 'text-yellow-300' },
  { nome: 'Git', icone: FaGitAlt, cor: 'text-orange-600' },
]

export default function Habilidades() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-2">Habilidades</h2>
      <p className="text-slate-400 mb-8">
        Stack que eu uso no SENAI e nos repos. Ícones do react-icons, igual na loja da academia.
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-12">
        {icones.map((item) => (
          <div
            key={item.nome}
            className="bg-navy-800 border border-slate-700 rounded-xl p-4 flex flex-col items-center gap-2"
          >
            <item.icone className={`${item.cor} text-4xl`} />
            <span className="text-xs text-center">{item.nome}</span>
          </div>
        ))}
      </div>

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
          <div
            key={item.nome}
            className="flex items-center justify-between bg-navy-800 border border-slate-700 rounded-xl px-4 py-3"
          >
            <strong>{item.nome}</strong>
            <span className="text-xs font-bold bg-mint-500 text-white px-2 py-1 rounded">{item.nivel}</span>
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
                className="h-full rounded-full bg-mint-400"
                style={{ width: `${skill.nivel}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
