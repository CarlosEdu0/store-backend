# 👕 FashionStore API - Gestão de Vendas & Estoque

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23C1E1C1?style=for-the-badge&logo=swagger&logoColor=black)

Esta é uma API REST desenvolvida para simular o ecossistema de uma loja de roupas profissional. O sistema gerencia desde o catálogo de produtos (com variações de tamanho e cor) até a baixa automática de estoque no momento da venda.

## 🚀 Funcionalidades

- **Gestão de Produtos:** CRUD completo com suporte a categorias.
- **Controle de Inventário:** Entrada e saída de mercadorias com logs de movimentação.
- **Sistema de Vendas:** Registro de pedidos e atualização de saldo em tempo real.
- **Documentação:** Interface interativa para testes de endpoints.

## 🛠️ Tecnologias e Ferramentas

- **Runtime:** Node.js v18+
- **Framework:** [Fastify](https://www.fastify.io/) (Focado em performance)
- **Linguagem:** TypeScript
- **Banco de Dados:** MySQL
- **ORM:** Prisma ou TypeORM (opcional)
- **Validação:** Zod
- **Documentação:** Swagger (Fastify Swagger UI)

## 🏗️ Estrutura do Projeto

```text
src/
 ├── @types/       # Definições de tipos do TypeScript
 ├── config/       # Configurações de DB e variáveis de ambiente
 ├── controllers/  # Orquestração das requisições e respostas
 ├── routes/       # Definição dos endpoints
 ├── services/     # Regras de negócio (Coração da aplicação)
 ├── utils/        # Funções auxiliares e validadores
 └── server.ts     # Inicialização do servidor
```
