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

Se tiver alguma dúvida, entre em contato pelo e-mail sr.athosfilipi@gmail.com.

#
#
#
#
#
### Abaixo você tem acesso à solicitação original do teste ↓


# Teste de Dev Backend

Esse teste foi desenhado para os perfís pleno e senior de desenvolvedor web back end, porém juniors são bem vindos a testar seus conhecimenos e mandar para a gente suas soluções.

## Avaliação

Considerando seu nível de conhecimento, faça até onde for possível no tempo que você se propuser a gastar no desafio. Não se preocupe se não der para acabar tudo, nós sabemos que o desafio é bastante complexo e queremos saber até onde você consegue se virar. Então envie o que você conseguir.

O que é obrigatório:

- Instruções para execução da aplicação no linux
- Validações de dados
- Legibilidade do código
- Funcionamento da Aplicação (mesmo que parcial)

O que é recomendável

- Clean Code
- SOLID
- Separation of Concerns
- Padrões de Arquitetura (DDD, Hexagonal, Onion, Clean, CQRS, etc.)
- Códigos de Resposta/Verbos HTTP corretos
- ORM/ODM
- Testes
- Padronização e Sintaxe do código
- Inglês (código preferencialmente em inglês)

Diferenciais:

- Logs
- Segurança
- Migrations
- Utilização de Cache
- Utilização de Filas
- Escalabilidade
- Docker

## Tecnologias

### Linguagem de Programação

Preferêncialmente o sistema deverá ser feito em NodeJS (Express/Fastfy com Typescript):

### Integrações

- Api do mercadobitcoin: https://www.mercadobitcoin.net/api/BTC/ticker/
- Apis de email com tier gratuíto, como: SendGrid e Mandrill

## Exemplos

- Postman: https://cdn.eduzzcdn.com/files/desafio-postman.json

## Dúvidas

Dúvidas são bem vindas, é só enviar um email para selecao.dev@eduzz.com

## Objetivo

Desenvolver uma **API** de investimento em bitcoins

## Especificação do Desafio

#### 1) Database

MariaDB, Postgres ou MongoDB

#### 2) Contas

O sistema deve permitir cadastro (nome, email e senha) e login com token JWT

Todos os demais endpoints devem exigir autenticação

#### 3) Depósitos

O cliente deve poder fazer depósitos de valores em reais na plataforma a qualquer momento. (apenas a inserção do valor na conta, sem a transferência real de valores)

Deve ser enviado um email informando o valor depositado.

#### 4) Saldo

Deve ser possível consultar o saldo disponível em reais na conta do cliente

#### 5) Cotação

O cliente deve poder ver a cotação atual do bitcoin, compra e venda

#### 6) Compra

O Cliente deve poder fazer compras de bitcoins usando seu saldo disponível na conta. Essa compra será a conversão do valor em reais pela cotação de venda.

Deve ser enviado um email informando o valor investido em R$ e o valor comprado de BTC.

#### 7) Posição dos investimentos

O Cliente deve poder ver a posição de seus investimentos com as informações:

data de compra, valor investido, valor do btc no momento da compra, percentual de variação do preço do bitcoin e valor bruto atual do investimento

#### 8) Venda

O Cliente poderá vender seus bitcoins. O valor será debitado de seus investimentos, na ordem da compra e na cotação do momento do BTC até atingir o valor de saque desejado. O dinheiro deve retornar para a conta dele na plataforma.

No caso de venda parcial o investimento deve ser liquidado completamente, e o valor residual deve ser reinvestido usando a cotação original do BTC. As duas transações (saque parcial e investimento) devem estar presentes no extrato.

Deve ser enviado um email informando o valor vendido em BTC e o valor resgatado em R$

#### 9) Extrato

Deverá ser possível listar os depósitos, compras e resgates, com suas respectivas datas e cotações para o cliente ter transparência do que foi feito nos últimos 90 dias ou por intervalo customizado.

#### 10) Volume

Faça um endpoint que retorne o total de bitcoins comprados e vendidos no dia corrente.

#### 11) Histórico

Deve haver um endpoint com o histórico de valor de compra/venda do bitcoin que retorne o valor com frequência de 10 minutos (8:00, 8:10, 8:20, ...) das últimas 24 horas.

Dados com mais de 90 dias devem ser expurgados automaticamente.

## Como entregar

Versione o projeto em um repositório privado do github ou bitbucket, adicione acesso ao usuário @caferrari e envie o endereço do repositorio ou o codigo zipado para selecao.dev@eduzz.com


