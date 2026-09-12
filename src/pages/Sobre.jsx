import Card from '../components/Card'

export default function Sobre() {
  return (
    <section className="container mx-auto px-4 py-16">
      <p className="text-mint-400 uppercase tracking-widest text-sm font-bold">Sobre</p>
      <h2 className="text-3xl font-extrabold mb-8">Quem sou eu</h2>

      <div className="grid md:grid-cols-3 gap-5">
        <Card titulo="Formação">
          Curso técnico em Desenvolvimento de Sistemas no SENAI Valinhos, em paralelo com o ensino médio.
          Estudo frontend, backend com Node.js e organização de projetos no GitHub.
        </Card>
        <Card titulo="O que eu gosto de fazer">
          Transformar enunciado em tela funcional: estrutura semântica, layout organizado,
          responsividade de verdade e um JavaScript que o usuário sente funcionar.
        </Card>
        <Card titulo="Como eu trabalho">
          Código limpo, pastas separadas, commits em português e README explicando como abrir o projeto.
          Prefiro entregar algo estável do que encher de efeito que quebra no celular.
        </Card>
      </div>
    </section>
  )
}
