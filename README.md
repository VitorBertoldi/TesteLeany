
# 🧠 Pokémon Trainer API

Desafio técnico da Leany – Desenvolvedor Backend Júnior

Esta API RESTful permite gerenciar **treinadores**, **times de Pokémon** e adicionar/remover Pokémons reais (integrando com a PokéAPI). Desenvolvida com **NestJS**, banco de dados **MySQL via Docker** e documentação com **Swagger**.

---

## 🚀 Tecnologias

- ✅ NestJS (TypeScript)
- ✅ TypeORM (MySQL)
- ✅ PokéAPI (https://pokeapi.co)
- ✅ Swagger (documentação)
- ✅ Docker + Docker Compose
- ✅ Testes e2e com Jest + Supertest

---

## 🧪 Como rodar localmente

### Pré-requisitos

- Docker e Docker Compose
- Node.js 20+

### 1. Clone o projeto

```bash
git clone https://github.com/seu-usuario/poke-trainer-api.git
cd poke-trainer-api
```

### 2. Suba o banco de dados

```bash
docker-compose up -d
```

Isso cria um banco MySQL acessível em `localhost:3307` com:

- usuário: `root`
- senha: `root`
- banco: `pokemon`

### 3. Instale dependências e inicie o projeto

```bash
npm install
npm run start:dev
```

---

## 📚 Documentação da API (Swagger)

Acesse:

```
http://localhost:3000/api
```

Você poderá testar endpoints como:

- `POST /trainers` – Criar treinador
- `POST /teams` – Criar time para treinador
- `POST /teams/:teamId/pokemons` – Adicionar Pokémon validado via PokéAPI
- `GET /teams/:teamId/pokemons` – Listar Pokémons do time com nome, tipo e sprite
- `DELETE /teams/:teamId/pokemons/:id` – Remover Pokémon do time

---

## ✅ Testes automatizados

O projeto possui **testes end-to-end (e2e)** para:

- `TrainerController`
- `TeamController`
- `TeamPokemonController`

Execute com:

```bash
npm run test:e2e
```

---

## 🧠 Decisões de Projeto

- **Arquitetura em camadas:** separação clara entre controller, service, DTO, entity.
- **Integração isolada com PokéAPI:** via `PokeapiService`.
- **Validação de DTOs:** com `class-validator`.
- **Limite de 6 Pokémons por time:** implementado com validação.
- **Swagger habilitado para facilitar o uso.**

---

## 💡 Possíveis melhorias

- Cache em memória para chamadas repetidas à PokéAPI
- Testes unitários com mocks de serviços
- Paginação de listagens
- Autenticação com JWT

---

## 📽️ Vídeo explicativo (opcional)

👉 Assista no Loom: [COLE O LINK AQUI]

---

## ✨ Autor

Desenvolvido por **Vitor Bertoldi** como parte do desafio técnico para a vaga de Backend Júnior na Leany.
