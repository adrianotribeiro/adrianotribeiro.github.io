# Adriano Ribeiro | Portfólio

Portfólio pessoal construído com React, TypeScript e Vite.

🔗 [Acesse o site aqui](https://adrianotribeiro.github.io/)

---

## Tech Stack

| Categoria               | Tecnologias                     |
| ----------------------- | ------------------------------- |
| **Frontend**            | React 19, TypeScript            |
| **Estilização**         | Tailwind CSS 4, Shadcn/UI       |
| **Roteamento**          | TanStack Router                 |
| **Formulários**         | TanStack Form + Formspree       |
| **Internacionalização** | i18next                         |
| **Qualidade**           | ESLint, Prettier, Husky, Vitest |

---

## Começando

### Pré-requisitos

- Node.js (v22+)
- pnpm (v9+)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/adrianotribeiro/adrianotribeiro.github.io.git

# Entre na pasta
cd adrianotribeiro.github.io

# Instale as dependências
pnpm install
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz baseado no `.env.example`:

```env
VITE_FORMSPREE_FORM_ID=seu_id_aqui
```

### Desenvolvimento

```bash
# Inicia o servidor de desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Preview do build
pnpm preview
```

---

## Estrutura

src/
├── components/ # Componentes React (Header, Hero, About, etc.)
├── hooks/ # Hooks customizados
├── lib/ # Utilitários e configuração do i18n
├── routes/ # Rotas do TanStack Router
├── index.css # Estilos globais
└── main.tsx # Ponto de entrada

## Licença

Este projeto está sob a licença [MIT](./LICENSE).
