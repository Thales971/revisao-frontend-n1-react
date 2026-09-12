import { useState } from 'react'
import { projetos } from '../data/projetos'
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
      <p className="text-mint-400 uppercase tracking-widest text-sm font-bold">Projetos realizados</p>
      <h2 className="text-3xl font-extrabold mb-6">Alguns trabalhos do curso</h2>

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
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-navy-800 border border-slate-700 rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-3">{selecionado.titulo}</h3>
            <p className="text-slate-300 mb-6">{selecionado.detalhes}</p>
            <Button variante="linha" onClick={() => setSelecionado(null)}>Fechar</Button>
          </div>
        </div>
      )}
    </section>
  )
}
