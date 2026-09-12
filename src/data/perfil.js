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
    capa: 'LC',
    cor: 'bg-mint-400',
    resumo: 'API REST de lanchonete com regras de negócio, CPF único e cálculo automático de pedidos.',
    detalhes:
      'API REST com arquitetura MVC, Prisma e regras rigorosas: CPF único, cálculo automático de pedidos e status controlado.',
    url: 'https://github.com/Thales971/Lanchonete-sabor-codigo',
  },
  {
    id: 'countdown',
    titulo: 'Final Countdown',
    categoria: 'back',
    tags: 'Express · Prisma · PDF',
    capa: 'FC',
    cor: 'bg-indigo-400',
    resumo: 'Catálogo de produtos e fornecedores, upload de imagens, relatório PDF e autenticação por API Key.',
    detalhes:
      'Catálogo de produtos e fornecedores com Express, Prisma, ViaCEP, upload de imagens e relatório em PDF.',
    url: 'https://github.com/Thales971/BackEnd-Final-Countdown',
  },
  {
    id: 'cafeteria',
    titulo: 'DevCoffee React',
    categoria: 'front',
    tags: 'React · Tailwind · Router',
    capa: 'DC',
    cor: 'bg-amber-400',
    resumo: 'Front-end da cafeteria fictícia DevCoffee, no padrão das atividades React do SENAI.',
    detalhes:
      'Projeto com React 19, Vite, Tailwind e React Router: home, cardápio com filtro, sobre e contato.',
    url: 'https://github.com/Thales971/cafeteriaDev-React',
  },
  {
    id: 'offline',
    titulo: 'Revisão Front-End N1',
    categoria: 'front',
    tags: 'HTML · CSS · JS puro',
    capa: 'N1',
    cor: 'bg-fuchsia-400',
    resumo: 'Versão offline da revisão: página 100% sem internet, Flexbox e JavaScript puro.',
    detalhes:
      'Atividade individual offline. Esta versão em React é a evolução desse mesmo portfólio.',
    url: 'https://github.com/Thales971/revisao-frontend-n1',
  },
]
