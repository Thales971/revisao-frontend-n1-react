export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'px-6 py-3 rounded-lg font-semibold transition inline-flex items-center justify-center gap-2'
  const variants = {
    primary: 'bg-mint-400 text-navy-900 hover:opacity-90',
    outline: 'border-2 border-mint-400 text-mint-400 hover:bg-mint-400 hover:text-navy-900',
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
