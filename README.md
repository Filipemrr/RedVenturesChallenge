# Desafio RedBentures - Documentação completa do Projeto - por Filipe Raposo
O desafio consiste em fazer um CRUD de gerência de endereços. Este é um guia prático sobre a aplicação.
  1. Guia para Instalar e Rodar o projeto localmente
  2. Telas e Funcionalidades
  3. Backend e Arquitetura


  [Visite a Documentacao dos Endpoints]() -> Veja a Documentacao da API<br>
  [Como rodar e demostrando o projeto](https://youtu.be/6BtPyS0E5s4)  -> Veja meu video Mostrando o projeto
## Rodando o Backend
Para rodar o Server localmente voce precisa adicionar um arquivo .ENV com esses
atributos:

```env
JWT_SECRET= SEU SEGREDO JWT
DB_HOST='127.0.0.1'
DB_USER=postgres
DB_PASSWORD= SUA SENHA 
DB_NAME= NOME DO SEU BANCO
PORT=5432
```

```bash
$ cd server
$ npm i
```

Para registrar as tabelas no banco, coloque 'synchronize: true', set synchronize para false novamente apos registrar as tabelas no banco: <br>
📂 Core  <br>
&nbsp;&nbsp;&nbsp;&nbsp;📂Data <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://emoji.gg/emoji/8584-typescript"><img src="https://cdn3.emoji.gg/emojis/8584-typescript.png" width="12px" height="12px" alt="TypeScript"></a> data.providers.ts<br>
```
import { DataSource } from 'typeorm';
import * as process from 'process';
import * as dotenv from 'dotenv';

dotenv.config();
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        port: 5432,
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false, ## TROQUE POR 'TRUE' APENAS NA PRIMEIRA VEZ QUE RODAR O SERVIDOR
      });
      return dataSource.initialize();
    },
  },
];

```
```
$ npm run start #lembre de setar syncronize como false apos rodar npm run start
$ npm run migration
```

# Telas e Funcionalidades👇🏻
## Escolha seu pedido.
<p align="center">
  <img src="" alt="Texto alternativo da imagem" width="600">
</p>

***
<br>

## Pedido realizado com successo'
<p align="center">
  <img src="" alt="Texto alternativo da imagem" width="600">
</p>

***
<br>

# Arquitetura do Backend e Conceitos Técnicos👇🏻

## Arquitetura
A arquitetura do backend foi baseada em duas arquiteturas comuns, Clean Architecture e Modules Architecture. Essa combinação é usada em projetos mais robustos, engloba todas as propriedades importantes de uma arquitetura MVC, por exemplo, mas resolve alguns problemas da Model-View-Controller.

A arquitetura base do projeto define os módulos como entidades não relacionadas, e todos os conteúdos e funcionalidades integradas estão na base/core

<h4>Representacao Visual<h4/>
<img src="./client/public/arquitetura.png" alt="Texto alternativo da imagem" width="600">
<h4>Representacao Pratica<h4/>
<img src="./client/public/pastas.png" alt="Texto alternativo da imagem" width="600">

### Core
É a camada responsável por conter as dependências do projeto, middlewares, serviços compartilhados, utilitários…

📂 Core  <br>
&nbsp;&nbsp;&nbsp;&nbsp;📂Data <br>
&nbsp;&nbsp;&nbsp;&nbsp;📂Domain <br>
&nbsp;&nbsp;&nbsp;&nbsp;📂Infra

       📂Data:  Contem a declaracao das entidades do banco de dados 
                suas relacoes com outras tabelas, caracteristica das 
                colunas. Modularizacao e configuracao do TYPEORM. 
***

      📂Domain:  temos tudo o que pertence ao nosso domínio, funcionalidades
      globais da aplicacao, nesse caso declarei a classe de CustomResponse
      essa classe define uma resposta constumizada e padronizada que se 
      comunica com o lado do cliente e estritamente todas as requisicoes
      devolvem uma CustomResponse(statusCode, message, data)

***

      📂Infra:  Na Infra, temos tudo o que dita a infraestrutura 
      do projeto middlewares, configurações… Nesse caso como o projeto
      eh simples, essa camada apresenta o middleware de autenticacao JWT
      entao toda a validacao relacionada a tokenizacao acontece nesse 
      middlewares, alem de que toda rota protegida deve passar por ele 
      para autenticar o usuario.

### Modules
É a camada responsável por conter os modulos, cada modulo contem um controller, um
service e um modulo.


📂 modules  <br>
&nbsp;&nbsp;&nbsp;&nbsp;📂meals <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📂dtos <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📂pipes <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://emoji.gg/emoji/8584-typescript"><img src="https://cdn3.emoji.gg/emojis/8584-typescript.png" width="12px" height="12px" alt="TypeScript"></a> meals.controller.ts <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://emoji.gg/emoji/8584-typescript"><img src="https://cdn3.emoji.gg/emojis/8584-typescript.png" width="12px" height="12px" alt="TypeScript"></a> meals.module.ts<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://emoji.gg/emoji/8584-typescript"><img src="https://cdn3.emoji.gg/emojis/8584-typescript.png" width="12px" height="12px" alt="TypeScript"></a> meals.service.ts
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 📂orders <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📂dtos <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📂pipes <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://emoji.gg/emoji/8584-typescript"><img src="https://cdn3.emoji.gg/emojis/8584-typescript.png" width="12px" height="12px" alt="TypeScript"></a> order.controller.ts <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://emoji.gg/emoji/8584-typescript"><img src="https://cdn3.emoji.gg/emojis/8584-typescript.png" width="12px" height="12px" alt="TypeScript"></a> order.module.ts<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://emoji.gg/emoji/8584-typescript"><img src="https://cdn3.emoji.gg/emojis/8584-typescript.png" width="12px" height="12px" alt="TypeScript"></a> order.service.ts


       💡 Controller:  Responsável por lidar com as requisições HTTP, 
                       definindo endpoints e mapeando rotas. Processa 
                       entradas do usuário, chama serviços para a
                       lógica de negócios e retorna respostas.
***

      💡 Module:  Define quem devem ser os controllers, services, 
                  providers,rotas protegidas por middleware. Estrutura a 
                  aplicação de forma modular, facilitando a manutenção 
                  e escalabilidade.

***

      💡 Service: Contém a lógica de negócios. Unica 
         camada que acessa o banco de dados e manipula 
         de fato os dados. 


