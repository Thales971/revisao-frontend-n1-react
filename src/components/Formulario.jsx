import { useState } from 'react'
import Button from './Button'

const estadoInicial = { nome: '', email: '', assunto: '', mensagem: '' }

export default function Formulario() {
  const [formData, setFormData] = useState(estadoInicial)
  const [erros, setErros] = useState({})
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validar = () => {
    const novo = {}
    if (formData.nome.trim().length < 3) novo.nome = 'Digite um nome com pelo menos 3 letras.'
    if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(formData.email)) novo.email = 'Digite um e-mail válido.'
    if (!formData.assunto) novo.assunto = 'Escolha um assunto.'
    if (formData.mensagem.trim().length < 10) novo.mensagem = 'A mensagem precisa ter no mínimo 10 caracteres.'
    return novo
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const novo = validar()
    setErros(novo)

    if (Object.keys(novo).length > 0) {
      setStatus('erro')
      return
    }

    setStatus('ok')
    setFormData(estadoInicial)
  }

  const campo = 'w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-700 outline-none focus:border-mint-400'

  return (
    <form onSubmit={handleSubmit} className="bg-navy-800 border border-slate-700 rounded-2xl p-6 space-y-4" noValidate>
      <div>
        <label htmlFor="nome" className="block mb-1 font-semibold">Nome</label>
        <input id="nome" name="nome" value={formData.nome} onChange={handleChange} className={campo} />
        {erros.nome && <p className="text-red-400 text-sm mt-1">{erros.nome}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 font-semibold">E-mail</label>
        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className={campo} />
        {erros.email && <p className="text-red-400 text-sm mt-1">{erros.email}</p>}
      </div>

      <div>
        <label htmlFor="assunto" className="block mb-1 font-semibold">Assunto</label>
        <select id="assunto" name="assunto" value={formData.assunto} onChange={handleChange} className={campo}>
          <option value="">Selecione</option>
          <option value="projeto">Projeto / portfólio</option>
          <option value="estudo">Estudo / atividade</option>
          <option value="outro">Outro</option>
        </select>
        {erros.assunto && <p className="text-red-400 text-sm mt-1">{erros.assunto}</p>}
      </div>

      <div>
        <label htmlFor="mensagem" className="block mb-1 font-semibold">Mensagem</label>
        <textarea id="mensagem" name="mensagem" rows="5" value={formData.mensagem} onChange={handleChange} className={`${campo} resize-none`} />
        {erros.mensagem && <p className="text-red-400 text-sm mt-1">{erros.mensagem}</p>}
      </div>

      <Button type="submit" className="w-full">Enviar mensagem</Button>

      {status === 'ok' && (
        <p className="text-emerald-400">Mensagem validada com sucesso. Neste modo ela só fica no navegador.</p>
      )}
      {status === 'erro' && (
        <p className="text-red-400">Confere os campos em vermelho e tenta de novo.</p>
      )}
    </form>
  )
}
