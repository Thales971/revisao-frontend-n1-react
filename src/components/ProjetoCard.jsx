export default function ProjetoCard({ projeto, onDetalhes }) {
  return (
    <article className="bg-navy-800 border border-slate-700 rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 transition">
      <div className="h-40 overflow-hidden bg-navy-700">
        <img src={projeto.imagem} alt={projeto.titulo} className="w-full h-full object-cover" />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <p className="text-mint-400 text-sm font-bold mb-1">{projeto.tags}</p>
        <h3 className="text-lg font-bold mb-2">{projeto.titulo}</h3>
        <p className="text-slate-400 flex-grow">{projeto.resumo}</p>

        <button
          type="button"
          onClick={() => onDetalhes(projeto)}
          className="mt-4 text-mint-400 font-semibold text-left hover:underline"
        >
          Ver detalhes →
        </button>
      </div>
    </article>
  )
}
