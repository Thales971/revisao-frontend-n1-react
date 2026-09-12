import { GraduationCap, BookOpen, Shield, Dumbbell, UtensilsCrossed, Github } from 'lucide-react'
import { perfil } from '../data/perfil'

export default function Sobre() {
  const cards = [
    {
      icone: GraduationCap,
      titulo: 'Escola',
      texto: `Técnico no ${perfil.instituicao}. Front agora, back e mobile no caminho.`,
    },
    {
      icone: BookOpen,
      titulo: 'Estudando',
      texto: `${perfil.estudando}, TypeScript e Prisma quando o trabalho pede.`,
    },
    {
      icone: Shield,
      titulo: 'Interesses',
      texto: perfil.interesses.join(', '),
    },
    {
      icone: Dumbbell,
      titulo: 'Esporte',
      texto: perfil.esporte,
    },
    {
      icone: UtensilsCrossed,
      titulo: 'Comida',
      texto: perfil.comida,
    },
    {
      icone: Github,
      titulo: 'GitHub',
      texto: 'Commit em português e repo atualizado.',
    },
  ]

  return (
    <>
      <section className="bg-gradient-to-r from-navy-800 to-navy-900 py-14">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <img
            src={perfil.foto}
            alt={perfil.nome}
            className="w-40 h-40 rounded-2xl object-cover border-4 border-mint-400"
          />

          <div>
            <h1 className="text-4xl font-bold mb-3">Quem sou eu</h1>
            <p className="text-slate-300 max-w-2xl">
              {perfil.nome}, {perfil.cidade}. Faço {perfil.curso} e o plano é virar {perfil.objetivo}.
            </p>
            <p className="text-mint-400 mt-4 italic">“{perfil.frase}”</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) => (
            <article key={card.titulo} className="bg-navy-800 border border-slate-700 rounded-xl p-6">
              <card.icone className="text-mint-400 mb-3" size={28} />
              <h3 className="text-xl font-bold mb-2">{card.titulo}</h3>
              <p className="text-slate-400">{card.texto}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
