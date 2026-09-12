import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-wrap gap-6 items-start">
        <div className="flex-1 min-w-[280px]">
          <p className="text-mint-400 uppercase tracking-widest text-sm font-bold mb-3">
            Desenvolvedor Júnior · SENAI Valinhos
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Olá, eu sou o <span className="text-mint-400">Thales</span>.
          </h1>
          <p className="text-slate-400 text-lg max-w-xl">
            Aluno de Desenvolvimento de Sistemas. Esta é a versão em React da revisão Front-End N1:
            mesmas seções do portfólio, agora com componentes, rotas e estado.
          </p>
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
          <h2 className="text-2xl font-bold">Thales Torsatto</h2>
          <p className="text-slate-400 mb-4">Valinhos / SP</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['HTML5', 'CSS3', 'JavaScript', 'React'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full border border-slate-700 bg-navy-700 text-sm">
                {tag}
              </span>
            ))}
          </div>
        </aside>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mt-16">
        <Card icone="</>" titulo="HTML5">
          Semântica com header, nav, main, section e footer. Agora quebrado em páginas e componentes React.
        </Card>
        <Card icone="#" titulo="CSS3 + Tailwind">
          Mesma cara do projeto offline, com Flexbox/grid do Tailwind e paleta navy/mint.
        </Card>
        <Card icone="{ }" titulo="React">
          useState, props, listas com map, rotas e validação de formulário sem API externa.
        </Card>
      </div>
    </section>
  )
}
