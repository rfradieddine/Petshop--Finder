# PetshopFinder
Sistema para encontrar o melhor Petshop para você e seu pet!
# Sobre o projeot

O objetivo do projeto é facilitar a busca do Sr. Eduardo pelo melhor petshop, levando em consideração o dia da semana. Cada petshop tem diferentes preços para cães de porte pequeno e grande, os quais variam de acordo com o dia.

# Instruções para Executar o Sistema

## Backend

O backend foi desenvolvido em **Node.js** utilizando o framework **Express.js** e o construtor de consultas SQL chamado **Knex.js**.

Para executar o backend, é necessário ter o **Node** instalado na máquina (versão 18.17.1 ou superior).

### Passos para Configurar o Backend:

1. **Clone o Projeto**:
    - Execute o seguinte comando no terminal para clonar o repositório:
        ```
        git clone https://github.com/rfradieddine/Petshop--Finder
        ```

2. **Acesse a Pasta Raiz do Projeto**:
    - Navegue até a pasta raiz do projeto:
        ```
        cd petshop-finder/apipetshopfinder
        ```

3. **Instale as Dependências**:
    - Execute o seguinte comando para baixar todas as dependências do projeto:
        ```
        npm install
        ```

4. **Knex**:
    - Caso não tenha o **Knex** instalado na sua máquina, execute o seguinte comando:
        ```
        npm install -g knex
        ```

5. **Configuração do Banco de Dados**:
    - Com uma conexão ao **PostgreSQL**, crie um banco de dados chamado "**petshopfinder**".

6. **Criação de Tabelas**:
    - Execute o seguinte comando para criar as tabelas:
        ```
        knex migrate:latest
        ```

7. **Inserção de Dados**:
    - Execute o seguinte comando para inserir os dados iniciais:
        ```
        knex seed:run
        ```

8. **Observação**:
    - Se desejar alterar as credenciais de acesso, modifique o arquivo **knexfile.js** localizado na pasta raiz "**apipetshopfinder**".

### Executando o Projeto Backend:

- Execute o seguinte comando:
    ```
    npm start
    ```
  O backend estará funcionando.


# Instruções para Executar o Frontend

O projeto frontend foi desenvolvido utilizando **Next.js**, que é baseado em **React**, e utiliza o **Material-UI** para estilização.

Para executar o frontend, é necessário ter o **Node** instalado na máquina (versão 18.17.1 ou superior).

## Passos para Configurar o Frontend:

1. **Acesse a Pasta Raiz do Projeto**:
    - Navegue até a pasta raiz do projeto:
        ```
        cd petshop-finder/webpetshopfinder/petshopfinder
        ```

2. **Instale as Dependências**:
    - Execute o seguinte comando para baixar todas as dependências do projeto:
        ```
        npm install
        ```

3. **Executando o Programa**:
    - Execute o seguinte comando para iniciar o servidor de desenvolvimento:
        ```
        npm run dev
        ```
    O frontend estará sendo executado.

Lembre-se de manter seu **README.md** atualizado e claro para que outros desenvolvedores possam entender e colaborar com seu projeto! 🚀

# Lista de premissas assumidas

- Para realizar a busca por PetShops, é necessário preencher todos os campos corretamente conforme solicitado pelo sistema.
- Em caso de inserção manual dos dados, certifique-se de que estejam corretamente cadastrados conforme o funcionamento padrão do sistema.

# Decisões de projeto

### Uso de Bibliotecas para Facilitar o Desenvolvimento

Durante o desenvolvimento do projeto, utilizei algumas bibliotecas para agilizar o processo e melhorar a qualidade do código. Aqui estão algumas das principais bibliotecas que foram incorporadas:

1. **Material-UI**:
    - O Material-UI é uma biblioteca de componentes React baseada no design do Material Design do Google. Ele oferece uma ampla variedade de componentes estilizados prontos para uso, como botões, caixas de diálogo, barras de navegação e muito mais. 

2. **Axios**:
    - O Axios é um cliente HTTP baseado em Promises que facilita a realização de requisições HTTP em aplicativos JavaScript (como React). Ele é amplamente utilizado para fazer chamadas à API do backend e manipular respostas de forma assíncrona. 

3. **date-fns**:
    - O date-fns é uma biblioteca leve e flexível para manipulação de datas em JavaScript. Ele oferece funções para formatar datas, calcular diferenças entre datas, adicionar ou subtrair períodos de tempo e muito mais. É uma alternativa popular ao Moment.js. 

4. **Knex.js**:
    - O Knex.js é um construtor de consultas SQL para Node.js. Ele simplifica a criação e execução de consultas ao banco de dados, permitindo que você escreva consultas em JavaScript em vez de SQL puro. É especialmente útil para gerenciar migrações e seeds de dados.

### Banco de dados

**Postgres**:
- É um sistema de gerenciamento de banco de dados relacional de código aberto. Ele é conhecido por sua confiabilidade, escalabilidade e recursos avançados, possuindo compatibilidade com a biblioteca Knex.js.