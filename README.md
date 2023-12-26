# Desafio Backend - API de Investimento em Bitcoins

## Requisitos

Certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)
- [MySQL](https://www.mysql.com/) (ou outro banco de dados de sua escolha)
- [Docker](https://www.docker.com/) (opcional, mas recomendado para facilitar a configuração do banco de dados)

## Configuração do Banco de Dados (com Docker)

Se você optar por usar o Docker para o banco de dados, siga estas etapas:

1. Clone o repositório: `git clone https://github.com/athosfilipi/bitcoin-investment-api.git`
2. Navegue até o diretório do projeto: `cd docker`
3. Execute o Docker Compose para iniciar o MySQL: `docker-compose up -d`

## Configuração do Banco de Dados (sem Docker)

Se você preferir configurar o banco de dados manualmente, siga estas etapas:

1. Instale e configure o MySQL no seu sistema.
2. Crie um banco de dados chamado `eduzz_teste`.
3. Configure as variáveis de ambiente no arquivo `ormconfig.js` na raiz do projeto.

## Instalação

1. Instale as dependências do projeto: `npm install`

## Execução

1. Inicie o servidor: `npm run dev`
2. Acesse a API em http://localhost:3000 (ou a porta que você configurou no arquivo `.env`).

## Endpoints

A API possui os seguintes endpoints: (WIP)

### Autenticação

- **Registrar um novo usuário:** `POST /api/v1/auth/register`
  - Payload: `{ "nome": "Nome do Usuário", "email": "usuario@example.com", "senha": "suaSenha" }`

- **Login:** `POST /api/v1/auth/login`
  - Payload: `{ "email": "usuario@example.com", "senha": "suaSenha" }`
  - Retorna um token JWT para autenticação em endpoints protegidos.

### Operações Financeiras

- **Realizar Depósito:** `POST /api/v1/deposit`
  - Payload: `{ "valor": 100.00 }`
  - Autenticado: Sim
  - Realiza um depósito na conta do usuário.

- **Consultar Saldo:** `GET /api/v1/balance`
  - Autenticado: Sim
  - Retorna o saldo disponível em reais na conta do usuário.

- **Consultar Cotação do Bitcoin:** `GET /api/v1/quotation`
  - Autenticado: Sim
  - Retorna a cotação atual de compra e venda do Bitcoin.

- **Realizar Compra de Bitcoin:** `POST /api/v1/purchase`
  - Payload: `{ "valor": 50.00 }`
  - Autenticado: Sim
  - Realiza a compra de Bitcoin usando o saldo disponível.

- **Consultar Posição dos Investimentos:** `GET /api/v1/investment-position`
  - Autenticado: Sim
  - Retorna a posição dos investimentos do usuário.

- **Realizar Venda de Bitcoin:** `POST /api/v1/sale`
  - Payload: `{ "valor": 30.00 }`
  - Autenticado: Sim
  - Realiza a venda de Bitcoin e credita o valor na conta do usuário.

### Histórico e Relatórios

- **Consultar Extrato:** `GET /api/v1/statement`
  - Autenticado: Sim
  - Retorna o extrato de depósitos, compras e vendas nos últimos 90 dias.

- **Consultar Volume de Bitcoins:** `GET /api/v1/volume`
  - Autenticado: Sim
  - Retorna o total de Bitcoins comprados e vendidos no dia corrente.

- **Consultar Histórico de Cotação do Bitcoin:** `GET /api/v1/historical`
  - Autenticado: Sim
  - Retorna o histórico de valores de compra/venda do Bitcoin nos últimos 24 horas.

Todos os endpoints exigem autenticação, exceto os de autenticação (`/auth`). Certifique-se de incluir o token JWT nos cabeçalhos das requisições autenticadas.


## Documentação da API (wip)

- Acesse a documentação Swagger em http://localhost:3000/api-docs após iniciar o servidor.

## Uso do Redis (wip)

- Futuramente haverá um servidor Redis que estará junto ao docker-compose

## Dúvidas

Se tiver alguma dúvida, entre em contato pelo e-mail selecao.dev@eduzz.com.
