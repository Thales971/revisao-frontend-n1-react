import { FaCode, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { perfil } from '../data/perfil'

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-white mt-auto border-t border-slate-700">
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <FaCode size={22} className="text-mint-400" />
          <span className="text-xl font-bold">{perfil.curto} Dev</span>
        </div>

        <div className="flex justify-center gap-5 text-2xl mb-4">
          <a href={perfil.links.github} target="_blank" rel="noreferrer" className="hover:text-mint-400">
            <FaGithub />
          </a>
          <a href={perfil.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-mint-400">
            <FaLinkedin />
          </a>
          <a href={perfil.links.instagram} target="_blank" rel="noreferrer" className="hover:text-mint-400">
            <FaInstagram />
          </a>
        </div>

        <p className="text-slate-400">{perfil.frase}</p>
        <p className="mt-3 text-sm text-slate-500">
          © {new Date().getFullYear()} {perfil.instituicao} · {perfil.cidade}
        </p>
      </div>
    </footer>
  )
}
