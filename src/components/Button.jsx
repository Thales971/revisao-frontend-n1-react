export default function Button({ children, type = 'button', onClick, className = '', variante = 'principal' }) {
  const base = 'inline-flex items-center justify-center min-h-[46px] px-5 rounded-xl font-bold transition'
  const estilos = {
    principal: 'bg-mint-400 text-navy-900 hover:opacity-90',
    linha: 'border border-slate-600 text-slate-100 hover:bg-navy-700',
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${estilos[variante]} ${className}`}>
      {children}
    </button>
  )
}
