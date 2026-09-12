import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaCode } from 'react-icons/fa'

export default function Header() {
  const [aberto, setAberto] = useState(false)

  const classeLink = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition ${
      isActive ? 'bg-mint-400 text-navy-900 font-bold' : 'hover:bg-navy-700'
    }`

  const links = [
    { to: '/', label: 'Início', end: true },
    { to: '/sobre', label: 'Sobre' },
    { to: '/habilidades', label: 'Habilidades' },
    { to: '/projetos', label: 'Projetos' },
    { to: '/contato', label: 'Contato' },
  ]

  return (
    <header className="bg-navy-800/90 backdrop-blur sticky top-0 z-50 border-b border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80">
            <FaCode className="text-mint-400 text-2xl" />
            <span className="font-bold text-mint-400">&lt;TT /&gt;</span>
            <span className="hidden sm:inline font-bold">Thales Torsatto</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className={classeLink}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button className="md:hidden p-2 border border-slate-700 rounded-xl" onClick={() => setAberto(!aberto)}>
            {aberto ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {aberto && (
          <nav className="md:hidden pb-4 flex flex-col gap-1">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className={classeLink} onClick={() => setAberto(false)}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
