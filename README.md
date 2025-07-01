# API Clean Architecture — Aprofunda

Esta é uma API simples construída com **Node.js**, **Express** e **TypeScript**, seguindo uma estrutura de pastas inspirada na **Clean Architecture**.  
A API permite cadastrar e listar textos com título, conteúdo, status e autor. O ID e a data de criação são gerados automaticamente.

---

## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- UUID
- CORS
- ts-node-dev

---

## Instruções para Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/clean-architecture-aprofunda.git
   cd clean-architecture-aprofunda/api-clean-archicture
2. Instale as dependências:
   ```bash
     npm install
3. Inicie o servidor:
   ```bash
   npm run dev
4. O servidor estará rodando em:
   ```bash
   http://localhost:3000

## Como Testar as Rotas

Use o Postman ou Thunder Client para testar os endpoints:

    Listar textos
    GET http://localhost:3000/api/texts

    Criar texto
    POST http://localhost:3000/api/create-text
    Corpo (JSON):
      {
        "titulo": "Meu texto",
        "conteudo": "Conteúdo do texto",
        "status": "ativo",
        "autor": "Bianca"
      }


