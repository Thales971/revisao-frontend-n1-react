import { Code2, Github, Linkedin, Instagram } from 'lucide-react'
import { perfil } from '../data/perfil'

export default function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="bg-navy-800 border-t border-slate-700 mt-auto">
      <div className="container mx-auto px-4 py-8 text-center text-slate-400">
        <div className="flex items-center justify-center gap-2 mb-3 text-slate-100">
          <Code2 className="text-mint-400" size={22} />
          <span className="font-bold">{perfil.nome}</span>
        </div>
        <div className="flex justify-center gap-4 mb-4">
          <a href={perfil.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
          <a href={perfil.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href={perfil.links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
        </div>
        <p>© {ano} {perfil.instituicao} · {perfil.cidade}</p>
        <p className="text-sm mt-1">{perfil.interesses.join(' · ')}</p>
      </div>
    </footer>
  )
}
