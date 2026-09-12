import { Code2 } from 'lucide-react'

export default function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="bg-navy-800 border-t border-slate-700 mt-auto">
      <div className="container mx-auto px-4 py-8 text-center text-slate-400">
        <div className="flex items-center justify-center gap-2 mb-3 text-slate-100">
          <Code2 className="text-mint-400" size={22} />
          <span className="font-bold">Thales Torsatto</span>
        </div>
        <p>© {ano} Revisão Front-End N1 · React · SENAI Valinhos</p>
        <p className="text-sm mt-1">HTML5 · CSS3 · JavaScript · React + Vite</p>
      </div>
    </footer>
  )
}
