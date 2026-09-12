import { FaCode, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { perfil } from '../data/perfil'

export default function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="bg-navy-800 border-t border-slate-700 mt-auto">
      <div className="container mx-auto px-4 py-8 text-center text-slate-400">
        <div className="flex items-center justify-center gap-2 mb-3 text-slate-100">
          <FaCode className="text-mint-400 text-xl" />
          <span className="font-bold">{perfil.nome}</span>
        </div>
        <div className="flex justify-center gap-4 mb-4 text-xl">
          <a href={perfil.links.github} target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href={perfil.links.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href={perfil.links.instagram} target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
        <p>© {ano} {perfil.instituicao} · {perfil.cidade}</p>
      </div>
    </footer>
  )
}
