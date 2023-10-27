# Admin Bot Identifier

Admin do projeto Bot Identifier. Permite visualizar e acessar os registros de acessos recebidos pela API.

## Requisitos

- NodeJs >= 18
- Yarn >= 1.22

## Configuração

Descomente o arquivo `.env.example` para `.env` e adicione seus valores as variáveis conforme preferir.

## Instalando as dependências
 
```bash
$ yarn install
```

## Gerando versão de produção
 
```bash
$ yarn build
```

## Executando o projeto

```bash
$ npm install --global serve
$ serve -s build
```

Em seguida, acesse [http://localhost:3000](http://localhost:3000).

## Executando os testes

```bash
$ yarn test
```