import Formulario from '../components/Formulario'

export default function Contato() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-mint-400 uppercase tracking-widest text-sm font-bold">Contato</p>
          <h2 className="text-3xl font-extrabold mb-4">Vamos conversar</h2>
          <p className="text-slate-400 mb-6">
            O formulário valida os campos no React e mostra uma mensagem na tela — sem enviar nada para API.
          </p>
          <ul className="text-slate-400 space-y-2 list-disc pl-5">
            <li><strong className="text-slate-100">E-mail:</strong> thales.t.silva6@aluno.senai.br</li>
            <li><strong className="text-slate-100">Cidade:</strong> Valinhos / SP</li>
            <li><strong className="text-slate-100">Instituição:</strong> SENAI Valinhos</li>
            <li><strong className="text-slate-100">GitHub:</strong> Thales971</li>
          </ul>
        </div>

        <Formulario />
      </div>
    </section>
  )
}
