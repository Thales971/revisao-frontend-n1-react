import { z } from 'zod'

export const contatoSchema = z.object({
  nome: z.string().min(3, 'Nome muito curto, escreve direito aí'),
  email: z.string().email('E-mail inválido'),
  assunto: z.string().min(1, 'Escolhe um assunto'),
  mensagem: z.string().min(10, 'Manda pelo menos 10 caracteres'),
})
