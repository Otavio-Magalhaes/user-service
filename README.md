# User Service

Este projeto é um microserviço responsável pelo gerenciamento de usuários, construído em Node.js com Express e Prisma ORM. Ele faz parte de uma arquitetura de microsserviços e será integrado futuramente com RabbitMQ para comunicação assíncrona entre serviços.

## 📦 Tecnologias Utilizadas

- **Node.js** com **Express** 
- **Prisma ORM** – Acesso ao banco de dados MySQL
- **Mysql** – Banco de dados relacional
- **dotenv** – Gerenciamento de variáveis de ambiente

---

## 🚀 Funcionalidades

- ✅ Criação de novos usuários (pacientes, médicos, gestores, admins)
- ✅ Listagem geral e por ID
- ✅ Atualização de dados cadastrais
- ✅ Exclusão de usuários
- ✅ Validação de permissões via middleware `checkRole`

> 💡 Este serviço **não** é responsável pela autenticação ou troca de senha. Essas funcionalidades estão no `auth-service`.

---

## 📡 Rotas da API

| Método | Endpoint        | Descrição                         |
|--------|------------------|-----------------------------------|
| GET    | `/users`         | Lista todos os usuários           |
| GET    | `/users/:id`     | Retorna um usuário por ID         |
| POST   | `/users`         | Cria um novo usuário              |
| PUT    | `/users/:id`     | Atualiza dados do usuário         |
| DELETE | `/users/:id`     | Deleta um usuário                 |

> 🔐 Algumas rotas requerem permissões de **Admin** ou **Gestor**, verificadas via `checkRole`.

---

## 🔄 Integração com outros serviços

Este serviço irá se comunicar com os demais via chamadas REST e, futuramente, via eventos assíncronos com **RabbitMQ**.

- 🔑 **auth-service**: autenticação, login, refresh token, troca de senha
- 🩺 **patient-service** (futuro): dados clínicos e históricos médicos de pacientes

---

## 📌 Futuro / TODO

- [ ] Integração com RabbitMQ
- [ ] Validações com Zod ou Joi
- [ ] Observabilidade (logs estruturados e métricas)
- [ ] Documentação Swagger

---

## 🧠 Observações

- Cada usuário possui um `role` (ADMIN, GESTOR, MEDICO, PACIENTE)
- Campo `crm` é opcional e usado apenas por médicos
- O campo `refreshToken` é controlado pelo `auth-service`
