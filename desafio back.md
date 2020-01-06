# Teste de Dev Backend

Esse teste foi desenhado para os perfís pleno e senior de desenvolvedor web back end, porém juniors são bem vindos a testar seus conhecimenos e mandar para a gente suas soluções.

## Avaliação

Considerando seu nível de conhecimento, faça até onde for possível no tempo que você se propuser a gastar no desafio. Não se preocupe se não der para acabar tudo, isso não terá muita relevância e não queremos que você desista de tentar.

O que é obrigatório:

- Instruções para execução da aplicação no linux
- Validações de dados
- Legibilidade do código
- Funcionamento da Aplicação (mesmo que parcial)

O que é recomendável

- Clean Code
- Códigos de Resposta/Verbos HTTP corretos
- ORM/ODM
- Separation of Concerns
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

Preferêncialmente o sistema deverá ser feito em uma das seguintes linguagens:

- PHP (Lumen) ★★★★★
- NodeJS (Typescript é um plus) ★★★★
- .NET Core ★★★
- Spring Boot ★★

### Integrações

- Api do mercadobitcoin: https://www.mercadobitcoin.net/api/BTC/ticker/
- Apis de email com tier gratuíto, como: SendGrid e Mandrill 

## Objetivo

Desenvolver uma **API** de investimento em bitcoins

## Especificação do Desafio

#### 1) Database

Qualquer uma, relacional ou não relacional

#### 2) Contas

O sistema deve permitir cadastro (nome, email e senha) e login com token JWT

Todos os demais endpoints devem exigir autenticação

#### 3) Depósitos

O cliente deve poder fazer depósitos de valores em reais na plataforma a qualquer momento. (apenas a inserção do valor na conta, sem a transferência real de valores)

Deve ser enviado um email informando o valor depositado.

#### 4) Cotação

O cliente deve poder ver a cotação atual do bitcoin, compra e venda

#### 5) Compra

O Cliente deve poder fazer compras de bitcoins usando seu saldo disponível na conta. Essa compra será a conversão do valor em reais pela cotação de venda.

Deve ser enviado um email informando o valor investido em R$ e o valor comprado de BTC.

#### 6) Posição dos investimentos

O Cliente deve poder ver a posição de seus investimentos com as informações:

data de compra, valor investido, valor do btc no momento da compra, percentual de variação do preço do bitcoin e valor bruto atual do investimento

#### 7) Venda

O Cliente poderá vender seus bitcoins. O valor será debitado de seus investimentos, na ordem da compra e na cotação do momento do BTC até atingir o valor de saque desejado. O dinheiro deve retornar para a conta dele na plataforma.

No caso de venda parcial o investimento deve ser liquidado completamente, e o valor residual deve ser reinvestido usando a cotação original do BTC. As duas transações (saque parcial e investimento) devem estar presentes no extrato.

Deve ser enviado um email informando o valor vendido em BTC e o valor resgatado em R$

#### 8) Extrato

Deverá ser possível listar os depósitos, compras e resgates, com suas respectivas datas e cotações para o cliente ter transparência do que foi feito nos últimos 90 dias ou por intervalo customizado.

#### 9) Volume

Faça um endpoint que retorne o total de bitcoins comprados e vendidos no dia corrente.

#### 10) Histórico

Deve haver um endpoint com o histórico de valor de compra/venda do bitcoin que retorne o valor com frequência de 10 minutos (8:00, 8:10, 8:20, ...) das últimas 24 horas.

dados com mais de 90 dias devem ser expurgados automaticamente.

## Como entregar

Versione o projeto em um repositório privado do github e adicione acesso ao usuário @caferrari