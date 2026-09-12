import { Github, Linkedin, Instagram, Mail, MapPin } from 'lucide-react'
import Formulario from '../components/Formulario'
import { perfil } from '../data/perfil'

export default function Contato() {
  const itens = [
    { icone: Mail, label: 'E-mail', valor: perfil.links.emailTexto, href: perfil.links.email },
    { icone: Github, label: 'GitHub', valor: perfil.github, href: perfil.links.github },
    { icone: Linkedin, label: 'LinkedIn', valor: 'Thales Torsatto Silva', href: perfil.links.linkedin },
    { icone: Instagram, label: 'Instagram', valor: '@thaleslynx', href: perfil.links.instagram },
    { icone: MapPin, label: 'Cidade', valor: `${perfil.cidade} — Brasil` },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-mint-400 uppercase tracking-widest text-sm font-bold">Contato</p>
          <h2 className="text-3xl font-extrabold mb-4">Se conecte comigo</h2>
          <p className="text-slate-400 mb-6">
            Os mesmos canais do meu README. O formulário só valida no React e não dispara API.
          </p>
          <ul className="space-y-3">
            {itens.map((item) => {
              const Icone = item.icone
              const conteudo = (
                <span className="flex items-center gap-3">
                  <Icone size={18} className="text-mint-400" />
                  <span>
                    <strong className="text-slate-100">{item.label}:</strong> {item.valor}
                  </span>
                </span>
              )

              return (
                <li key={item.label} className="text-slate-400">
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="hover:text-mint-400">
                      {conteudo}
                    </a>
                  ) : conteudo}
                </li>
              )
            })}
          </ul>
        </div>

        <Formulario />
      </div>
    </section>
  )
}
