import Card from '../components/Card'
import { perfil } from '../data/perfil'

export default function Sobre() {
  return (
    <section className="container mx-auto px-4 py-16">
      <p className="text-mint-400 uppercase tracking-widest text-sm font-bold">Sobre</p>
      <h2 className="text-3xl font-extrabold mb-4">Quem sou eu</h2>
      <p className="text-slate-400 max-w-3xl mb-10">
        Eu sou o {perfil.nome}. Curso {perfil.curso} no {perfil.instituicao}
        e moro em {perfil.cidade}. O alvo é claro: {perfil.objetivo}.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card titulo="Formação">
          Técnico de Desenvolvimento de Sistemas no SENAI de Valinhos. Estudo frontend agora
          e vou empilhando backend, banco e mobile no caminho.
        </Card>
        <Card titulo="O que estou estudando">
          Aprofundando {perfil.estudando}. Também mexo com TypeScript, Expo, Prisma e PostgreSQL
          quando o projeto pede.
        </Card>
        <Card titulo="Interesses">
          {perfil.interesses.join(', ')}. Gosto de entender como a tela funciona, como a rede se comporta
          e como as coisas conectadas conversam.
        </Card>
        <Card titulo="Esporte">
          {perfil.esporte}. Treino pesado e levo a mesma lógica pro código: técnica, volume e consistência.
        </Card>
        <Card titulo="Comida favorita">
          {perfil.comida}. Combinação honesta, igual README de projeto que precisa funcionar de primeira.
        </Card>
        <Card titulo="Como eu trabalho">
          Commits em português, pasta organizada e GitHub sempre atualizado. Prefiro entregar estável
          do que encher de efeito que quebra no celular.
        </Card>
      </div>
    </section>
  )
}
