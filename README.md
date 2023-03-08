<h1 align="center"> API - Cookenu </h1>

<p align="center">
  Uma rede social, na qual os usuários podem dividir informações relevantes sobre comidas e receitas que tenham experimentado.
  <br/>
</p>

<div align="center">

  [Documentação](https://documenter.getpostman.com/view/22530775/2s93CHuaJz) | 
  [Deploy](https://lammar-cookenu.onrender.com) 
  <br/>
</div>

## Endpoints: 

#### Signup
- Para realizar o cadastro, informar: O e-mail, nome e a senha do usuário através do body.

#### Login
- Para efetuar o login, basta informar o email e a senha do usuário corretamente através do body.

#### Get Profile
- A partir do token de autenticação fornecido no login, o usuário deve ser capaz de ver as suas informações salvas no banco (id, nome e email);
- O token deve ser informado via header Authorization.

#### Get User
- Para visualizar informações de usuário cadastrotos, informar o id do mesmo via path params;
- Além de informar o token de acesso de quem busca essas informações via header Authorization.

#### Create Recipe
- A receita deve ter os seguintes atributos: título e descrição, ambos fornecidos via body;
- Para criar uma nova receita o usuário deve fornecer seu token de acesso via header Authorization.

#### Get Recipe
- Para visualizar informações de receitas cadastratas, informar o id da mesma via path params; 
- Além de informar o token de acesso de quem busca essas informações via header Authorization.

## Ferramentas e Tecnologias Utilizadas:

- Node.js
- TypeScript
- Knex
- Express
- Mysql
