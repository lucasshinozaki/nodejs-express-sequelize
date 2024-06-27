# Projeto ORM usando Sequelize com Node.js e Express

Projeto ORM usando Sequelize com Node.js e Express. Este projeto demonstra como utilizar o Sequelize, um poderoso ORM para Node.js, para interagir com o SQLite um bancos de dados relacionais. Uma API estruturada e organizada usando o padrão MVC para aprimorar habilidades em JavaScript backend.

## Sobre o Projeto
Este projeto tem como objetivo:
- Criar uma API com Node.js e algumas de suas principais bibliotecas.
- Aprender na prática como funciona um ORM.
- Usar o Sequelize para fazer operações em bancos de dados sem usar SQL.
- Desenvolver uma aplicação organizada no modelo MVC.
- Aprimorar seus conhecimentos em JavaScript para backend.
- Sair do CRUD básico e implementar mais funcionalidades na API.
- Utilizar as funcionalidades do Sequelize para refinar consultas ao banco de dados.
- Aprender mais sobre o funcionamento de bancos relacionais.

## Primeiros Passos

### Pré-requisitos
Antes de começar, certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em sua máquina.

### Uso
Para iniciar o servidor, execute:
```sh
npm run dev
```

A API estará disponível em `http://localhost:3000`.

## Executando Migrações
O Sequelize fornece comandos para gerenciar migrações de banco de dados. Aqui estão alguns dos comandos mais utilizados:

- Executar todas as migrações pendentes:
  ```sh
  npx sequelize db:migrate
  ```

- Adicionar marcação de data/hora a uma tabela de migração:
  ```sh
  npx sequelize db:migrate:schema:timestamps:add
  ```

- Exibir o status de todas as migrações:
  ```sh
  npx sequelize db:migrate:status
  ```

- Reverter a migração mais recente:
  ```sh
  npx sequelize db:migrate:undo
  ```

- Reverter todas as migrações:
  ```sh
  npx sequelize db:migrate:undo:all
  ```

## Semear o Banco de Dados
Para adicionar dados ao banco de dados usando seeders, você pode usar os seguintes comandos:

- Executar um seeder específico:
  ```sh
  npx sequelize db:seed
  ```

- Deletar os últimos dados inseridos via seeds:
  ```sh
  npx sequelize db:seed:undo
  ```

- Executar todos os seeders:
  ```sh
  npx sequelize db:seed:all
  ```

- Deletar todos os dados inseridos via seeds:
  ```sh
  npx sequelize db:seed:undo:all
  ```

## Comandos do Sequelize

- Inicializar um projeto:
  ```sh
  npx sequelize init
  ```

- Inicializar as configurações:
  ```sh
  npx sequelize init:config
  ```

- Inicializar migrações:
  ```sh
  npx sequelize init:migrations
  ```

- Inicializar modelos:
  ```sh
  npx sequelize init:models
  ```

- Inicializar seeders:
  ```sh
  npx sequelize init:seeders
  ```

- Gerar um novo arquivo de migração:
  ```sh
  npx sequelize migration:generate --name nome-da-migracao
  ```

- Gerar um modelo e sua migração:
  ```sh
  npx sequelize model:generate --name NomeDoModelo --attributes atributo1:string,atributo2:integer
  ```

- Gerar um novo arquivo de seed:
  ```sh
  npx sequelize seed:generate --name nome-do-seed
  ```