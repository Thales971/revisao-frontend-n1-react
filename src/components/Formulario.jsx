import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FaPaperPlane } from 'react-icons/fa'
import { contatoSchema } from '../schemas/contatoSchema'
import Button from './Button'

export default function Formulario() {
  const [enviou, setEnviou] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contatoSchema),
    defaultValues: {
      nome: '',
      email: '',
      assunto: '',
      mensagem: '',
    },
  })

  const onSubmit = () => {
    setEnviou(true)
    reset()
    setTimeout(() => setEnviou(false), 3000)
  }

  const inputClass =
    'w-full px-4 py-3 rounded-lg bg-navy-900 border border-slate-700 outline-none focus:border-mint-400'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input type="text" placeholder="Seu nome" className={inputClass} {...register('nome')} />
        {errors.nome && <p className="text-red-400 text-sm mt-1">{errors.nome.message}</p>}
      </div>

      <div>
        <input type="email" placeholder="Seu e-mail" className={inputClass} {...register('email')} />
        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <select className={inputClass} {...register('assunto')}>
          <option value="">Assunto</option>
          <option value="projeto">Projeto / portfólio</option>
          <option value="estudo">Estudo / atividade</option>
          <option value="outro">Outro</option>
        </select>
        {errors.assunto && <p className="text-red-400 text-sm mt-1">{errors.assunto.message}</p>}
      </div>

      <div>
        <textarea rows="5" placeholder="Sua mensagem" className={`${inputClass} resize-none`} {...register('mensagem')} />
        {errors.mensagem && <p className="text-red-400 text-sm mt-1">{errors.mensagem.message}</p>}
      </div>

      <Button type="submit" className="w-full">
        <FaPaperPlane />
        {enviou ? 'Mandou! ✓' : 'Enviar mensagem'}
      </Button>
    </form>
  )
}
