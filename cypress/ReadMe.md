# Serverest Web Automation - Cypress

## Objetivo do Framework
Este framework de teste automatizado com Cypress tem o objetivo de testar o processo de login na aplicação web Serverest. Cypress é uma poderosa ferramenta de teste de front-end que facilita a escrita de testes automatizados robustos para aplicações web.

## Pré-requisitos
- Node.js e npm: Cypress é um framework baseado em Node.js. Instale a versão mais recente de Node.js que inclui npm, que é o gerenciador de pacotes do Node.
- Cypress: Instalado como uma dependência de desenvolvimento no seu projeto.

## Instalação do Cypress
Execute `npm install cypress --save-dev` em seu projeto para instalar o Cypress como uma dependência de desenvolvimento.

## Executando os Testes
Após a instalação, você pode abrir o Cypress com o comando `npx cypress open`. Isso abrirá o Test Runner do Cypress, onde você pode executar os testes interativamente.

Para executar testes sem interface gráfica, execute `npx cypress run`

## Estrutura do Código
- `login.spec.js`: Contém o teste de automação para o cenário de login. Ele visita a página de login, preenche as credenciais e verifica se o login é bem-sucedido.

## Descrição do Teste
- Visita a página de login.
- Preenche os campos de usuário e senha.
- Clica no botão de login.
- Verifica se a URL mudou para indicar que o login foi bem-sucedido.

## Notações
- `describe` e `it`: Notações do Cypress para estruturar os testes. `describe` define uma suíte de testes, enquanto `it` define um teste individual.