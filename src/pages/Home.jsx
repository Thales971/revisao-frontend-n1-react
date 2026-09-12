import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import { perfil } from '../data/perfil'

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-wrap gap-6 items-start">
        <div className="flex-1 min-w-[280px]">
          <p className="text-mint-400 uppercase tracking-widest text-sm font-bold mb-3">
            {perfil.curso} · {perfil.instituicao}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Olá, eu sou o <span className="text-mint-400">{perfil.curto}</span>.
          </h1>
          <p className="text-slate-400 text-lg max-w-xl">
            Focado em me tornar <strong className="text-slate-100">{perfil.objetivo}</strong>.
            Interesses em {perfil.interesses.join(', ')}. Agora aprofundando {perfil.estudando}.
          </p>
          <p className="text-slate-500 mt-4 max-w-xl italic">“{perfil.frase}”</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link to="/projetos">
              <Button>Ver projetos</Button>
            </Link>
            <Link to="/contato">
              <Button variante="linha">Falar comigo</Button>
            </Link>
          </div>
        </div>

        <aside className="flex-1 min-w-[260px] max-w-sm bg-navy-800 border border-slate-700 rounded-2xl p-6 text-center shadow-lg">
          <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-navy-700 text-mint-400 flex items-center justify-center text-4xl font-black">
            TT
          </div>
          <h2 className="text-2xl font-bold">{perfil.nome}</h2>
          <p className="text-slate-400 mb-4">{perfil.cidade} — Brasil</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['React', 'JavaScript', 'Node.js', 'Front-end'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full border border-slate-700 bg-navy-700 text-sm">
                {tag}
              </span>
            ))}
          </div>
        </aside>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mt-16">
        <Card titulo="Front-end">
          HTML, CSS, Tailwind, React, Angular e Next.js. É onde eu mais corto código no dia a dia do curso.
        </Card>
        <Card titulo="Full stack">
          Node.js, Express, Prisma e PostgreSQL. Quero sair do SENAI sabendo ligar tela, API e banco.
        </Card>
        <Card titulo="Além do código">
          Segurança cibernética, IoT, queda de braço e um strogonoff com açaí no final do treino.
        </Card>
      </div>
    </section>
  )
}
