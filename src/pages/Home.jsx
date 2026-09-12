import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import Card from '../components/Card'
import Button from '../components/Button'
import { perfil } from '../data/perfil'

export default function Home() {
  const cards = [
    {
      title: 'Front-end',
      description: 'React, Tailwind, HTML e CSS. É o que mais aparece nas atividades do SENAI.',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500',
      link: '/projetos',
      linkText: 'Ver projetos',
    },
    {
      title: 'Back-end',
      description: 'Node, Express e Prisma. Quero sair do curso sabendo ligar API no banco.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500',
      link: '/habilidades',
      linkText: 'Ver skills',
    },
    {
      title: 'Fora do PC',
      description: `${perfil.esporte}. Comida favorita: ${perfil.comida}.`,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500',
      link: '/sobre',
      linkText: 'Quem sou eu',
    },
  ]

  return (
    <>
      <section className="bg-gradient-to-br from-navy-800 to-navy-900 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-mint-400 font-semibold mb-3">
              {perfil.curso} · {perfil.instituicao}
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fala, eu sou o <span className="text-mint-400">{perfil.curto}</span>
            </h1>

            <p className="text-lg text-slate-300 mb-6">
              Quero ser {perfil.objetivo}. Curto {perfil.interesses.join(', ').toLowerCase()} e tô estudando {perfil.estudando} pra valer.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Link to="/projetos">
                <Button>Ver projetos</Button>
              </Link>

              <a href={perfil.links.github} target="_blank" rel="noreferrer">
                <Button variant="outline">
                  <FaGithub /> GitHub
                </Button>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 max-w-sm">
            <img
              src={perfil.foto}
              alt={perfil.nome}
              className="rounded-2xl shadow-2xl w-full border-4 border-mint-400"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">O que eu ando fazendo</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, i) => (
              <Card key={i} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
