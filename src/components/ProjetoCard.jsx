export default function ProjetoCard({ projeto, onDetalhes }) {
  return (
    <article className="bg-navy-800 border border-slate-700 rounded-2xl overflow-hidden flex flex-col shadow-lg">
      <div className={`${projeto.cor} min-h-[120px] flex items-center justify-center text-3xl font-extrabold text-navy-900`}>
        {projeto.capa}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-mint-400 text-sm font-bold mb-1">{projeto.tags}</p>
        <h3 className="text-lg font-bold mb-2">{projeto.titulo}</h3>
        <p className="text-slate-400 flex-grow">{projeto.resumo}</p>
        <button
          type="button"
          onClick={() => onDetalhes(projeto)}
          className="mt-4 text-indigo-300 font-bold text-left hover:underline"
        >
          Ver detalhes
        </button>
      </div>
    </article>
  )
}
