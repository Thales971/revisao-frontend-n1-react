# Revisão Front-End N1 — Portfólio em React

Versão em **React** da atividade de revisão Front-End N1 (portfólio de desenvolvedor júnior).

A primeira entrega ficou em HTML/CSS/JS puro no repositório [revisao-frontend-n1](https://github.com/Thales971/revisao-frontend-n1). Esta aqui sobe o mesmo conteúdo para o padrão dos meus outros projetos React: Vite, componentes, rotas e Tailwind.

Atividade de Desenvolvimento de Sistemas — SENAI Valinhos.  
Aluno: **Thales Torsatto Silva** (`Thales971`).

## Telas

- `/` — Home com hero, card de perfil e cards de HTML / CSS / React
- `/sobre` — formação e jeito de trabalhar
- `/habilidades` — barras de nível
- `/projetos` — filtro por categoria + modal de detalhes
- `/contato` — dados + formulário com validação

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
- Lucide React (ícones)
- useState, props, listas com `map` e validação de formulário

## Estrutura

```text
src/
├── components/   Header, Footer, Button, Card, Formulario, ProjetoCard
├── pages/        Home, Sobre, Habilidades, Projetos, Contato
├── data/         projetos e skills
├── App.jsx
└── main.jsx
```
