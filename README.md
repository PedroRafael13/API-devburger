<H1>API DEVBURGER</H1>
O DevBurger é uma API desenvolvida para gerenciar operações de uma lanchonete, estruturada no modelo MVC (Model-View-Controller) e integrando dois bancos de dados: PostgreSQL (relacional) e MongoDB (não relacional/NoSQL). A aplicação foi construída utilizando Node.js e Express, com os bancos hospedados em containers Docker para maior flexibilidade e escalabilidade.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente de `<NodeJS / Sequelize / Docker>`
- Você tem uma máquina `<Windows / Linux / Mac>`. Indique qual sistema operacional é compatível / não compatível.

# ✅ Como rodar o projeto
```bash
# Clone este respositório
$ git clone [URL]

# Instale as dependências
$ yarn install

# Execute a aplicação
$ yarn dev

A porta usada foi a 3001
```
## ✅Tecnologias Utilizadas
- [X] Javascript
- [X] Node
- [X] Express
- [X] Sequelize
- [X] Sequelize-cli
- [X] Mongoose
- [X] Sucrase
- [X] PostgreSQL
- [X] MongoDB
- [X] Cors
- [X] Bcrypt
- [X] JsonWebToken
- [X] Multer
- [X] Yup
- [X] Yarn
- [X] Eslint
- [X] Prettier

## 🔧 Funcionalidades 
- Comunicação com o front end, enviando os dados armazenados
- Autenticação de usuário com email, senha, admin e token
- Tratamento de dados
- Upload de fotos
- Comunicação com o banco de dados (PostgreSQL, MongoDB)
- Rotas privadas
- Rota de criação de usuário
- Rota de Login
- Rota de criação da categoria
- Rota de "get" da categoria
- Rota de "update" de categoria
- Rota de "delete" de categoria
- Rota de criação do pedido
- Rota de criação de produto
- Rota de "get" do produto
- Rota de "update" de produto
- Rota de "delete" do produto
- Rota de "get" do produto
- Rota de "get" do pedido
- Rota de "update" de status do pedido
- Rota de "delete" do pedido
