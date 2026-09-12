export const perfil = {
  nome: 'Thales Torsatto Silva',
  curto: 'Thales',
  github: 'Thales971',
  cidade: 'Valinhos, SP',
  curso: 'Técnico de Desenvolvimento de Sistemas',
  instituicao: 'SENAI Valinhos',
  objetivo: 'Desenvolvedor Full Stack',
  estudando: 'JavaScript e React',
  interesses: ['Front-end', 'Segurança Cibernética', 'IoT'],
  comida: 'Strogonoff de carne e açaí',
  esporte: 'Armwrestling (queda de braço)',
  frase: 'A terra só floresce depois da tempestade — persista além dos bugs aparentemente impossíveis.',
  foto: 'https://github.com/Thales971.png',
  links: {
    github: 'https://github.com/Thales971',
    linkedin: 'https://www.linkedin.com/in/thales-torsatto-silva-04bb1b370',
    instagram: 'https://www.instagram.com/thaleslynx/',
    email: 'mailto:torsattothales@gmail.com',
    emailTexto: 'torsattothales@gmail.com',
  },
}

export const techs = [
  'JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3', 'C', 'C++',
  'Tailwind', 'React', 'Angular', 'Next.js', 'Expo',
  'Node.js', 'Express', 'Prisma', 'PostgreSQL',
  'Git', 'GitHub', 'Figma', 'VS Code', 'Postman', 'Linux',
]

export const competencias = [
  { nome: 'Lógica de Programação', nivel: 'Avançado' },
  { nome: 'Administração de Sistemas', nivel: 'Avançado' },
  { nome: 'Engenharia de Requisitos', nivel: 'Avançado' },
  { nome: 'Redes e Segurança', nivel: 'Avançado' },
  { nome: 'Modelagem de Dados', nivel: 'Avançado' },
  { nome: 'Desenvolvimento Web', nivel: 'Avançado' },
  { nome: 'Desenvolvimento Mobile', nivel: 'Avançado' },
  { nome: 'DevOps & CI/CD', nivel: 'Avançado' },
]

export const skills = [
  { nome: 'JavaScript / React', nivel: 85 },
  { nome: 'HTML5 e CSS3 / Tailwind', nivel: 88 },
  { nome: 'Node.js, Express e Prisma', nivel: 78 },
  { nome: 'TypeScript', nivel: 70 },
  { nome: 'Mobile (Expo / React Native)', nivel: 68 },
  { nome: 'PostgreSQL e modelagem', nivel: 72 },
  { nome: 'Git e GitHub', nivel: 82 },
  { nome: 'Redes e segurança', nivel: 74 },
]

export const projetos = [
  {
    id: 'lanchonete',
    titulo: 'Lanchonete Sabor Código',
    categoria: 'full',
    tags: 'Node · Prisma · MVC',
    imagem: 'https://images.unsplash.com/photo-1550547660-d9450f859913?w=600',
    resumo: 'API REST de lanchonete com CPF único e cálculo automático de pedido.',
    detalhes: 'API REST com MVC, Prisma e umas regras chatas de propósito: CPF único, total calculado sozinho e status do pedido controlado.',
    url: 'https://github.com/Thales971/Lanchonete-sabor-codigo',
  },
  {
    id: 'countdown',
    titulo: 'Final Countdown',
    categoria: 'back',
    tags: 'Express · Prisma · PDF',
    imagem: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
    resumo: 'Catálogo de produtos e fornecedores com PDF e API Key.',
    detalhes: 'Catálogo com Express, Prisma, ViaCEP, upload de imagem e relatório em PDF. Backend da Sprint.',
    url: 'https://github.com/Thales971/BackEnd-Final-Countdown',
  },
  {
    id: 'cafeteria',
    titulo: 'DevCoffee React',
    categoria: 'front',
    tags: 'React · Tailwind · Router',
    imagem: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600',
    resumo: 'Front da cafeteria fictícia DevCoffee, no padrão das aulas de React.',
    detalhes: 'Home, cardápio com filtro, sobre e contato. React 19 + Vite + Tailwind + React Router.',
    url: 'https://github.com/Thales971/cafeteriaDev-React',
  },
  {
    id: 'academia',
    titulo: 'IronFit Store',
    categoria: 'front',
    tags: 'React · Tailwind · Icons',
    imagem: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600',
    resumo: 'Loja de academia com várias telas, react-icons e imagens próprias.',
    detalhes: 'Landing da IronFit. Header fixo, menu mobile, páginas de produto/plano/contato e um monte de ícone do react-icons.',
    url: 'https://github.com/Thales971/react-loja-academia',
  },
]
