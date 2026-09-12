import { useState } from 'react'
import { projetos } from '../data/perfil'
import ProjetoCard from '../components/ProjetoCard'
import Button from '../components/Button'

const filtros = [
  { id: 'todos', label: 'Todos' },
  { id: 'front', label: 'Front-end' },
  { id: 'back', label: 'Back-end' },
  { id: 'full', label: 'Full stack' },
]

export default function Projetos() {
  const [filtro, setFiltro] = useState('todos')
  const [selecionado, setSelecionado] = useState(null)

  const lista = projetos.filter((item) => filtro === 'todos' || item.categoria === filtro)

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-2">Projetos</h2>
      <p className="text-slate-400 mb-6">Algumas coisas que eu já fiz no curso e no GitHub.</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {filtros.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFiltro(item.id)}
            className={`px-4 py-2 rounded-full border ${
              filtro === item.id
                ? 'bg-mint-400 text-navy-900 border-mint-400 font-bold'
                : 'border-slate-700 hover:bg-navy-800'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {lista.map((projeto) => (
          <ProjetoCard key={projeto.id} projeto={projeto} onDetalhes={setSelecionado} />
        ))}
      </div>

      {selecionado && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-navy-800 border border-slate-700 rounded-2xl max-w-md w-full overflow-hidden">
            <img src={selecionado.imagem} alt={selecionado.titulo} className="w-full h-44 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{selecionado.titulo}</h3>
              <p className="text-slate-300 mb-6">{selecionado.detalhes}</p>
              <div className="flex flex-wrap gap-3">
                {selecionado.url && (
                  <a href={selecionado.url} target="_blank" rel="noreferrer">
                    <Button>Ver no GitHub</Button>
                  </a>
                )}
                <Button variant="outline" onClick={() => setSelecionado(null)}>
                  Fechar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
