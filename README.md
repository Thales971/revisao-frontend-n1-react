# Portfólio React — Thales Torsatto

Versão em React da revisão Front-End N1. A outra entrega ficou em HTML/CSS/JS no [revisao-frontend-n1](https://github.com/Thales971/revisao-frontend-n1).

Atividade de Desenvolvimento de Sistemas — SENAI Valinhos.
Aluno: **Thales Torsatto Silva** (`Thales971`).

## Telas

- `/` — Home com foto e cards
- `/sobre` — escola, interesse, comida e esporte
- `/habilidades` — ícones da stack + barras
- `/projetos` — filtro + modal
- `/contato` — links + formulário com Zod

## Como rodar

```bash
git clone https://github.com/Thales971/revisao-frontend-n1-react.git
cd revisao-frontend-n1-react
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Stack

- React 19 + Vite
- Tailwind CSS
- React Router DOM
- react-icons
- lucide-react
- Zod + React Hook Form

## Estrutura

```
src/
├── components/   Header, Footer, Button, Card, Formulario, ProjetoCard
├── pages/        Home, Sobre, Habilidades, Projetos, Contato
├── data/         perfil.js
├── schemas/      contatoSchema.js
├── App.jsx
└── main.jsx
```
