# Training Cypress

Este repositório contém um projeto de treinamento para automação de testes utilizando o framework [Cypress](https://www.cypress.io/).

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Bruninho2104/training-cypress.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd training-cypress
   ```

3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

## Executando os Testes

### Abrir o Cypress (modo interativo)
Para abrir a interface gráfica do Cypress e executar os testes:
```bash
npx cypress open
# ou
yarn cypress open
```

### Executar os testes no terminal
Para rodar os testes diretamente no terminal:
```bash
npx cypress run
# ou
yarn cypress run
```

## Estrutura do Projeto

- `cypress/fixtures`: Contém arquivos de dados estáticos para uso nos testes.
- `cypress/integration`: Contém os arquivos de teste.
- `cypress/support`: Contém configurações e comandos customizados.
