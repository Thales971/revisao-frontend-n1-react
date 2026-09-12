import { MapPin, Mail, Github, Linkedin, Instagram } from 'lucide-react'
import Formulario from '../components/Formulario'
import { perfil } from '../data/perfil'

export default function Contato() {
  return (
    <>
      <section className="bg-gradient-to-r from-navy-800 to-navy-900 py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">Fala comigo</h1>
          <p className="text-slate-300 max-w-xl mx-auto">
            Mesmos links do perfil. O form valida com Zod, igual o React-form-zod.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            <a
              href={perfil.links.email}
              className="bg-navy-800 border border-slate-700 p-6 rounded-xl text-center hover:border-mint-400 transition"
            >
              <Mail className="w-10 h-10 text-mint-400 mx-auto mb-3" />
              <h3 className="font-bold mb-1">E-mail</h3>
              <p className="text-slate-400 text-sm">{perfil.links.emailTexto}</p>
            </a>

            <a
              href={perfil.links.github}
              target="_blank"
              rel="noreferrer"
              className="bg-navy-800 border border-slate-700 p-6 rounded-xl text-center hover:border-mint-400 transition"
            >
              <Github className="w-10 h-10 text-mint-400 mx-auto mb-3" />
              <h3 className="font-bold mb-1">GitHub</h3>
              <p className="text-slate-400 text-sm">{perfil.github}</p>
            </a>

            <div className="bg-navy-800 border border-slate-700 p-6 rounded-xl text-center">
              <MapPin className="w-10 h-10 text-mint-400 mx-auto mb-3" />
              <h3 className="font-bold mb-1">Cidade</h3>
              <p className="text-slate-400 text-sm">{perfil.cidade}</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Manda uma mensagem</h2>
              <p className="text-slate-400 mb-6">
                Não tem backend aqui. Só valida os campos e mostra que mandou.
              </p>
              <Formulario />
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Redes</h2>
              <div className="bg-navy-800 border border-slate-700 rounded-xl p-8 space-y-4">
                <a href={perfil.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-mint-400">
                  <Linkedin /> LinkedIn
                </a>
                <a href={perfil.links.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-mint-400">
                  <Instagram /> @thaleslynx
                </a>
                <a href={perfil.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-mint-400">
                  <Github /> github.com/Thales971
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
