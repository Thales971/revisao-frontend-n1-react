export default function Card({ titulo, children, icone }) {
  return (
    <article className="bg-navy-800 border border-slate-700 rounded-2xl p-6 shadow-lg">
      {icone && (
        <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-navy-700 text-mint-400 font-extrabold mb-3">
          {icone}
        </span>
      )}
      {titulo && <h3 className="text-xl font-bold mb-2">{titulo}</h3>}
      <div className="text-slate-400">{children}</div>
    </article>
  )
}
