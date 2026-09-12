import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FaPaperPlane } from 'react-icons/fa'
import { contatoSchema } from '../schemas/contatoSchema'
import Button from './Button'

export default function Formulario() {
  const [ok, setOk] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(contatoSchema),
    defaultValues: { nome: '', email: '', assunto: '', mensagem: '' },
  })

  const onSubmit = () => {
    setOk(true)
    reset()
  }

  const campo = 'w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-700 outline-none focus:border-mint-400'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-navy-800 border border-slate-700 rounded-2xl p-6 space-y-4">
      <div>
        <label htmlFor="nome" className="block mb-1 font-semibold">Nome</label>
        <input id="nome" className={campo} {...register('nome')} />
        {errors.nome && <p className="text-red-400 text-sm mt-1">{errors.nome.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 font-semibold">E-mail</label>
        <input id="email" type="email" className={campo} {...register('email')} />
        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="assunto" className="block mb-1 font-semibold">Assunto</label>
        <select id="assunto" className={campo} {...register('assunto')}>
          <option value="">Selecione</option>
          <option value="projeto">Projeto / portfólio</option>
          <option value="estudo">Estudo / atividade</option>
          <option value="outro">Outro</option>
        </select>
        {errors.assunto && <p className="text-red-400 text-sm mt-1">{errors.assunto.message}</p>}
      </div>
      <div>
        <label htmlFor="mensagem" className="block mb-1 font-semibold">Mensagem</label>
        <textarea id="mensagem" rows="5" className={`${campo} resize-none`} {...register('mensagem')} />
        {errors.mensagem && <p className="text-red-400 text-sm mt-1">{errors.mensagem.message}</p>}
      </div>
      <Button type="submit" className="w-full gap-2">
        <FaPaperPlane /> Enviar
      </Button>
      {ok && <p className="text-emerald-400">Beleza, formulário validou. Aqui não manda pra API não.</p>}
    </form>
  )
}
