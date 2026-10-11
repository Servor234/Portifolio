<!-- Este template foi criado para servir como referência e pode ser facilmente adaptado para diferentes projetos de desenvolvimento -->

---

# 🏷️ Portifolio 👨‍💻

<table>
  <tr>
    <td width="800px">
      <div align="justify">
        Este projeto representa a coleção de trabalhos e experiencias profissionais que compoem minha jornada academica e profissional
      </div>
    </td>
    <td>
      <div>
        <img src="https://joaopauloaramuni.github.io/image/cc-puc.jpg" alt="Logo do Projeto" width="120px"/>
      </div>
    </td>
  </tr> 
</table>

---

## 🚧 Status do Projeto

### Exemplos de badges básicos:

[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/joaopauloaramuni/joaopauloaramuni/main.yml?branch=main)](https://github.com/joaopauloaramuni/joaopauloaramuni/actions/workflows/main.yml)
[![Test Coverage](https://codecov.io/gh/joaopauloaramuni/laboratorio-de-desenvolvimento-de-software/branch/main/graph/badge.svg)](https://codecov.io/gh/joaopauloaramuni/laboratorio-de-desenvolvimento-de-software)
[![Versão](https://img.shields.io/badge/Versão-v1.0.0-blue)](https://github.com/joaopauloaramuni/laboratorio-de-desenvolvimento-de-software/releases)
[![Licença](https://img.shields.io/github/license/joaopauloaramuni/laboratorio-de-desenvolvimento-de-software)](#licença)

### Outros exemplos de badges:

[![Versão](https://img.shields.io/badge/Versão-v1.0.0-blue?style=for-the-badge)](https://github.com/joaopauloaramuni/laboratorio-de-desenvolvimento-de-software/releases) ![React](https://img.shields.io/badge/React-19.1.1-007ec6?style=for-the-badge&logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-7.1.2-007ec6?style=for-the-badge&logo=vite&logoColor=white) ![Java](https://img.shields.io/badge/Java-17-007ec6?style=for-the-badge&logo=openjdk&logoColor=white) ![Maven](https://img.shields.io/badge/Maven-3.9.9-007ec6?style=for-the-badge&logo=apachemaven&logoColor=white) ![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.3.5-007ec6?style=for-the-badge&logo=springboot&logoColor=white) ![Thymeleaf](https://img.shields.io/badge/Thymeleaf-3.1.1-007ec6?style=for-the-badge&logo=thymeleaf&logoColor=white) ![GitHub repo size](https://img.shields.io/github/repo-size/joaopauloaramuni/laboratorio-de-desenvolvimento-de-software?style=for-the-badge&logo=files) ![GitHub directory file count](https://img.shields.io/github/directory-file-count/joaopauloaramuni/laboratorio-de-desenvolvimento-de-software?style=for-the-badge&logo=files) ![GitHub stars](https://img.shields.io/github/stars/joaopauloaramuni/laboratorio-de-desenvolvimento-de-software?style=for-the-badge&logo=github) ![GitHub forks](https://img.shields.io/github/forks/joaopauloaramuni/laboratorio-de-desenvolvimento-de-software?style=for-the-badge&logo=git) ![GitHub language count](https://img.shields.io/github/languages/count/joaopauloaramuni/laboratorio-de-desenvolvimento-de-software?style=for-the-badge&logo=python) ![GitHub license](https://img.shields.io/github/license/joaopauloaramuni/laboratorio-de-desenvolvimento-de-software?style=for-the-badge&color=007ec6&logo=opensourceinitiative) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/joaopauloaramuni/laboratorio-de-desenvolvimento-de-software?style=for-the-badge&color=007ec6&logo=gitkraken) ![GitHub last commit](https://img.shields.io/github/last-commit/joaopauloaramuni/laboratorio-de-desenvolvimento-de-software?style=for-the-badge&logo=clockify) ![Vercel](https://vercelbadge.vercel.app/api/joaopauloaramuni/joaopauloaramuni-portfolio?style=for-the-badge) ![Views Counter](https://views-counter.vercel.app/badge?pageId=https%3A%2F%2Fgithub%2Ecom%2Fjoaopauloaramuni%2Flaboratorio-de-desenvolvimento-de-software&leftColor=555555&rightColor=007ec6&type=total&label=RepoViews)

---

## 📚 Índice
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
  - [Exemplos de diagramas](#exemplos-de-diagramas)
- [Instalação e Execução](#-instalação-e-execução)
  - [Pré-requisitos](#pré-requisitos)
  - [Variáveis de Ambiente](#-variáveis-de-ambiente)
     - [1 Back-end (Spring Boot)](#1-back-end-spring-boot)
     - [2 Front-end (React, Vite)](#2-front-end-react-vite)
     - [3 Exemplos de Variáveis de Ambiente na Vercel](#3-exemplos-de-variáveis-de-ambiente-na-vercel)
  - [Instalação de Dependências](#-instalação-de-dependências)
    - [Front-end (React)](#front-end-react)
    - [Back-end (Spring Boot)](#back-end-spring-boot)
  - [Inicialização do Banco de Dados (PostgreSQL)](#-inicialização-do-banco-de-dados-postgresql)
  - [Como Executar a Aplicação](#-como-executar-a-aplicação)
    - [Terminal 1: Back-end (Spring Boot)](#terminal-1-back-end-spring-boot)
    - [Terminal 2: Front-end (React, Vite)](#terminal-2-front-end-react-vite)
    - [Execução Local Completa com Docker Compose (Incluindo Banco de Dados)](#-execução-local-completa-com-docker-compose-incluindo-banco-de-dados)
    - [Passos para build, inicialização e execução](#-passos-para-build-inicialização-e-execução)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração](#-demonstração)
  - [Aplicativo Mobile](#-aplicativo-mobile)
  - [Aplicação Web](#-aplicação-web)
  - [Exemplo de saída no Terminal (para Back-end, API, CLI)](#-exemplo-de-saída-no-terminal-para-back-end-api-cli)
- [Testes](#-testes)
- [Documentações utilizadas](#-documentações-utilizadas)
- [Autores](#-autores)
- [Contribuição](#-contribuição)
- [Agradecimentos](#-agradecimentos)
- [Licença](#-licença)

---

## 📝 Sobre o Projeto
O projeto foi criado com o intuito de demonstrar a minha trajetoria profissional com um historico de tudo feito até hoje, demonstrando meu crescimento na área e suas aplicações

---

## ✨ Funcionalidades Principais
-> Menu funcional -> Menu funcional no topo de cada pagina;
-> Envio de Emails -> Funcionalidade do envio de emails a partir da pagina diretamente para seu criador;
-> Sorteio de pokemons -> A pagina tem a opção de sortear 3 pokemons conforme a vontade do usuario;
-> Timeline de projetos dinamico -> Timeline de projetos feitos que mostra os projetos conforme se é clicado nas "bolas" da timeline;
-> Mudança de Linguagens -> Botão que realiza a mudança da linguagem da pagina principal do projeto.

---

## 🛠 Tecnologias Utilizadas

### 💻 Front-end

- **HTML5:** estruturação das páginas e dos componentes.
- **CSS3:** estilização, posicionamento dos elementos, animações e responsividade.
- **JavaScript:** manipulação do DOM, gerenciamento dos eventos de clique e atualização dinâmica dos conteúdos.
- **tsParticles:** criação do fundo animado com partículas interativas.
- **API pública de Pokémon:** obtenção dos dados utilizados na seção de Pokémon.

### 🧰 Ferramentas de desenvolvimento

- **Visual Studio Code:** edição e manutenção dos arquivos.
- **Git:** controle de versão.
- **GitHub:** hospedagem do código-fonte e documentação dos projetos.
- **Navegador web:** execução e testes da aplicação.

---

## 🏗 Arquitetura

O projeto segue uma arquitetura de aplicação web estática, organizada em páginas HTML, folhas de estilo CSS e arquivos JavaScript responsáveis pelas interações.

### Organização das responsabilidades

| Componente | Responsabilidade |
|---|---|
| HTML | Define a estrutura e o conteúdo das páginas. |
| CSS | Controla o layout, as cores, a tipografia e os efeitos visuais. |
| JavaScript | Implementa a interação com os elementos da página. |
| tsParticles | Renderiza o fundo animado de partículas. |
| API de Pokémon | Fornece os dados utilizados para gerar os cartões de Pokémon. |

### Fluxo de funcionamento

1. O navegador carrega a página HTML.
2. Os arquivos CSS definem a apresentação visual dos elementos.
3. O JavaScript configura os eventos e as interações.
4. Ao clicar em um ponto da linha do tempo, o painel do projeto correspondente é exibido.
5. Na seção de Pokémon, o JavaScript consulta a API e apresenta os dados retornados.

### Estrutura de diretórios

A estrutura abaixo é ilustrativa e pode ser ajustada à organização real do repositório.

```text
portfolio/
├── PaginaP/
│   ├── Curriculo.html
│   ├── Curriculo.css
│   ├── Curriculo.js
│   └── futaba.jpeg
├── Proj/
│   ├── Projetos.html
│   ├── Projetos.css
│   └── Projetos.js
├── Exp/
│   ├── Exp.html
│   ├── Exp.css
│   └── Exp.js
├── Contato/
│   ├── Contato.html
│   ├── Contato.css
│   └── Contato.js
└── README.md
```

---

## ⚙️ Instalação e Execução

### Pré-requisitos

- Navegador atualizado, como Google Chrome, Microsoft Edge ou Firefox.
- Editor de código, como Visual Studio Code.
- Extensão Live Server para facilitar a execução durante o desenvolvimento (opcional).
- Conexão com a internet para carregar bibliotecas externas e consultar a API de Pokémon.

### 1. Clonar o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd portfolio
```

### 2. Executar o projeto

**Opção A — Abrir diretamente**

Abra o arquivo `PaginaP/Curriculo.html` no navegador.

**Opção B — Utilizar o Live Server**

1. Abra a pasta do projeto no Visual Studio Code.
2. Instale a extensão Live Server, caso ainda não esteja instalada.
3. Abra o arquivo `PaginaP/Curriculo.html`.
4. Clique com o botão direito e selecione **Open with Live Server**.

O navegador abrirá a página localmente. A partir dela, será possível navegar pelas demais seções.

---

### 🔑 Variáveis de Ambiente

Crie arquivos `.env` específicos e/ou configure as variáveis de ambiente no seu sistema para cada parte da aplicação.

#### 1 Back-end (Spring Boot)

Configure estas variáveis como **variáveis de ambiente do sistema** ou em um arquivo de configuração do Spring (ex: `application.properties`/`application.yml`).

| Variável | Descrição | Exemplo |
| :--- | :--- | :--- |
| `SERVER_PORT` | Porta onde o Back-end será executado. | `8080` |
| `SPRING_DATASOURCE_URL` | URL de conexão JDBC (PostgreSQL). | `jdbc:postgresql://localhost:5432/meubanco` |
| `SPRING_DATASOURCE_USERNAME` | Usuário do banco de dados. | `postgres` |
| `SPRING_DATASOURCE_PASSWORD` | Senha do banco de dados. | `senha-segura-123` |
| `JWT_SECRET` | Chave secreta para assinatura de tokens (Opcional). | `chave_super_segura_base64` |

#### 2 Front-end (React, Vite)

Crie um arquivo **`.env`** na raiz da pasta `/frontend` e use o prefixo `VITE_` (ou `REACT_APP_` se estiver usando CRA) para expor as variáveis ao *bundle* da aplicação.

| Variável | Descrição | Exemplo |
| :--- | :--- | :--- |
| `VITE_API_URL` | URL base do endpoint do Backend Spring Boot. | `http://localhost:8080/api` |
| `VITE_EMAILJS_PUBLIC_KEY` | Chave pública para serviços de e-mail (Exemplo). | `sua_public_key_aqui` |
| `VITE_GOOGLE_MAPS_KEY` | Chave de API para serviços de mapas (Opcional). | `AIzaSy...` |

---

#### 3. Exemplos de Variáveis de Ambiente na Vercel

A Vercel permite configurar variáveis no painel (Project Settings > Environment Variables).
Aqui estão exemplos comuns utilizadas em aplicações front-end e full-stack:

---

##### **Exemplo 1 – Front-end com Next.js usando API externa**

```
NEXT_PUBLIC_API_URL=https://meu-backend.vercel.app/api
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-seu_google_analytics_id_aqui
```

---

##### **Exemplo 2 – Aplicação Full-stack (Next.js + Prisma + PostgreSQL)**

```
DATABASE_URL=postgresql://admin:senha-super-segura@ep-meu-banco.aws.neon.tech:5432/verceldb
NEXTAUTH_SECRET=uma_chave_muito_longa_e_segura
NEXTAUTH_URL=https://meu-sistema.vercel.app
```

---

##### **Exemplo 3 – Integração com APIs externas**

```
STRIPE_SECRET_KEY=sk_live_seu_stripe_key_aqui
OPENAI_API_KEY=sk-sua_openai_key_aqui
SENDGRID_API_KEY=SG.sua_sendgrid_key_aqui
```

---

##### **Exemplo 4 – Frontend com Vite (EmailJS)**

```
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID_FOR_ME=seu_template_id_for_me_aqui
VITE_EMAILJS_TEMPLATE_ID_FOR_SENDER=seu_template_id_for_sender_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

> **Obs:** As variáveis de ambiente em projetos **Vite** precisam começar com `VITE_` para que o Vite as reconheça e as inclua no *bundle* do frontend; variáveis sem esse prefixo não ficam disponíveis no código do cliente.

---

Para adicionar essas variáveis:

1.  Acesse a página de Environment Variables do seu projeto no Vercel (ex.: `https://vercel.com/<seu-usuario>/<seu-projeto>/settings/environment-variables`)
2.  Clique em **"Add"** para adicionar cada variável com o nome e valor correspondente.

Alternativamente, se estiver desenvolvendo localmente, crie um arquivo **`.env.local`** dentro da pasta **`frontend`** do seu projeto com o seguinte conteúdo:

```
# Variável essencial para conectar ao Back-end Spring Boot rodando localmente (normalmente na porta 8080)
VITE_API_URL=http://localhost:8080/api

# Variáveis para integrações externas de serviço de e-mail
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID_FOR_ME=seu_template_id_for_me_aqui
VITE_EMAILJS_TEMPLATE_ID_FOR_SENDER=seu_template_id_for_sender_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui

# Outras chaves de serviço
VITE_GOOGLE_MAPS_KEY=AIzaSy...
```

> 💡 **Localização:** Garanta que este arquivo esteja em **`/frontend/.env.local`** para que o **Vite** consiga carregá-lo e disponibilizar as variáveis para o Front-end durante o desenvolvimento.

---

### 📦 Instalação de Dependências

Clone o repositório e instale as dependências.

1.  **Clone o Repositório:**

```bash
git clone <URL_DO_SEU_REPOSITÓRIO>
cd <pasta-do-projeto>
```

2.  **Instale as Dependências (Monorepo):**

Como o projeto está dividido, você precisa instalar as dependências separadamente para o Front-end (React, usando NPM/Yarn) e garantir que o Back-end (Spring Boot, usando Maven/Gradle Wrapper) tenha suas dependências resolvidas.

#### Front-end (React)

Acesse a pasta do Front-end e instale as dependências do Node.js:

```bash
cd frontend
npm install
# ou
yarn install
cd .. # Retorna para a raiz
```

#### Back-end (Spring Boot)

O Spring Boot utiliza o **Maven Wrapper** (`./mvnw`) ou **Gradle Wrapper** (`./gradlew`) para gerenciar dependências. Execute o comando de instalação/build limpo antes de rodar.

* **Usando Maven (`pom.xml`):**
    ```bash
    cd backend
    ./mvnw clean install
    cd ..
    ```

* **Usando Gradle (`build.gradle`):**
    ```bash
    cd backend
    ./gradlew clean build
    cd ..
    ```
---

### 💾 Inicialização do Banco de Dados (PostgreSQL)

O projeto utiliza **PostgreSQL**. A forma mais fácil de inicializar o banco é via Docker (para execução sem `docker-compose`):

1. **Rode o Container do PostgreSQL:**  
   (Certifique-se que o Docker está em execução)

```bash
docker run --name minha_db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=senha-segura-123 -e POSTGRES_DB=nome_do_banco -p 5432:5432 -d postgres:16
```

2. **Execute as Migrações:**  
   O Back-end **Spring Boot** geralmente gerencia o schema do banco de dados automaticamente no startup (via Hibernate `ddl-auto`) ou utilizando ferramentas como **Flyway** ou **Liquibase**.

* **Se o Spring Boot gerencia o schema (padrão):** Nenhuma ação manual é necessária, basta rodar o Back-end (veja a próxima seção).
* **Se usar Flyway/Liquibase via Maven:**
    ```bash
    cd backend
    ./mvnw flyway:migrate
    # ou
    ./mvnw liquibase:update
    ```
---

### ⚡ Como Executar a Aplicação
Execute a aplicação em modo de desenvolvimento em **dois terminais separados**.

#### Terminal 1: Back-end (Spring Boot)

Inicie a API do Spring Boot. Ela tentará se conectar ao banco de dados rodando no Docker.

```bash
cd backend
./mvnw spring-boot:run
```
🚀 *O Back-end estará disponível em **http://localhost:8080**.*

---

#### Terminal 2: Front-end (React, Vite)

Inicie o servidor de desenvolvimento do Front-end.

```bash
cd frontend
npm run dev
# ou
yarn dev
```
🎨 *O Front-end estará disponível em **http://localhost:5173** (ou a porta configurada no Vite/CRA).*

---

#### 🐳 Execução Local Completa com Docker Compose (Incluindo Banco de Dados)

Para uma execução local que inclui o serviço de Back-end (**Spring Boot**), Front-end (**React**) e o banco de dados **PostgreSQL**, usaremos o **`docker-compose`** para orquestração.

Antes de tudo, certifique-se de que o **Docker Desktop** (no Mac/Windows) ou o **serviço Docker** (em Linux) está em execução.

- **No Mac/Windows**: basta abrir o aplicativo **Docker Desktop**.
- **No Linux**: rode o comando abaixo para iniciar o serviço:

```bash
sudo systemctl start docker
```

---

#### 📦 Passos para build, inicialização e execução

1. Acesse a pasta raiz do projeto (onde o arquivo `docker-compose.yml` está localizado):

```bash
cd /caminho/do/projeto/nome-do-projeto
```

2. Suba todos os serviços (Back-end, Front-end e Banco de Dados) definidos no `docker-compose.yml`:

```bash
docker-compose up --build -d
```

> [!NOTE]
> 💡 O parâmetro `--build` garante que as imagens mais recentes do projeto sejam geradas, e `-d` executa em segundo plano.

3. Verifique se os containers estão rodando:

```bash
docker ps
```

4. **Execute as Migrações do Banco de Dados:**
   O Back-end **Spring Boot** geralmente gerencia o schema do banco de dados (via Flyway/Liquibase ou Hibernate) na **inicialização do serviço**.

* **Verificação:** Se o serviço de Back-end (`backend` ou `api`) for o responsável pelas migrações, verifique os logs para confirmar se o processo foi concluído.
    ```bash
    docker logs <nome_do_container_backend>
    ```
* *Atenção:* O comando `npm run db:migrate` é exclusivo para Node.js e **não** deve ser usado.

5. Abra no navegador:
   O Front-end deve estar acessível na porta configurada no `docker-compose` (Exemplo: <http://localhost:3000> ou <http://localhost:5173>)

6. Para parar e remover todos os containers, redes e volumes (exceto volumes nomeados):

```bash
docker-compose down
```

✅ **Em resumo:** Usar **`docker-compose`** simplifica a execução do ambiente completo, isolando as dependências de **Java (Spring Boot)** e **Node.js (React)** e garantindo que o PostgreSQL esteja disponível.

---

## 📂 Estrutura de Pastas

Descreva o propósito das pastas principais.

```
.
├── .editorconfig                # ✍️ Padronização de estilo de código.
├── .env.local                   # 🔒 Variáveis SENSÍVEIS do ambiente LOCAL (não versionado).
├── .env.test                    # 🧪 Variáveis de ambiente para TESTES AUTOMATIZADOS.
├── .env.staging                 # ☁️ Variáveis de ambiente para STAGING/HOMOLOGAÇÃO.
├── .env.example                 # 🧩 Exemplo de TODAS as variáveis necessárias (sem valores sensíveis).
├── .gitignore                   # 🧹 Ignora arquivos/pastas não versionadas (.env, node_modules, target, etc.).
├── .vscode/                     # ⚙️ Configurações de ambiente da IDE (opcional).
├── .github/                     # 🤖 CI/CD (Actions), templates de Issues e Pull Requests.
├── README.md                    # 📘 Documentação principal do projeto.
├── CONTRIBUTING.md              # 🤝 Guia de contribuição.
├── LICENSE                      # ⚖️ Licença do projeto.
├── docker-compose.yml           # 🐳 Orquestração dos containers (front/back/db/etc).
├── docker-compose.override.yml  # 🐳 Configurações extras apenas para desenvolvimento.
│
├── /frontend                    # 📁 Aplicação React
│   ├── .env.example             # 🧩 Variáveis de ambiente do Front-end.
│   ├── Dockerfile               # 🐳 Docker build do Front-end.
│   ├── .eslintrc.js             # ✨ Regras do ESLint.
│   ├── .prettierrc              # 🎨 Configuração do Prettier.
│   ├── /public                  # 📂 Arquivos estáticos e index.html.
│   ├── /src                     # 📂 Código-fonte React
│   │   ├── /components          # 🧱 Componentes reutilizáveis (UI).
│   │   ├── /pages               # 📄 Páginas/rotas da aplicação.
│   │   ├── /services            # 🔌 Serviços e chamadas HTTP.
│   │   ├── /hooks               # 🎣 Hooks personalizados.
│   │   ├── /styles              # 🎨 Estilos globais, temas, Design System.
│   │   ├── /assets              # 🖼️ Recursos estáticos importados
│   │   │   ├── /images          # 🖼️ Imagens.
│   │   │   ├── /icons           # 💡 Ícones.
│   │   │   └── /fonts           # ✒️ Fontes personalizadas.
│   │   └── /utils               # 🛠️ Funções utilitárias.
│   ├── package.json             # 📦 Dependências e scripts.
│   └── yarn.lock / package-lock.json # 🔒 Lockfile das dependências.
│
├── /backend                     # 📁 Aplicação Spring Boot
│   ├── .env.example             # 🧩 Variáveis de ambiente do Back-end.
│   ├── Dockerfile               # 🐳 Docker build do Back-end.
│   │
│   ├── /src/main/java           # 📂 Código-fonte Java
│   │   └── /com/exemplo/app
│   │       ├── /controller      # 🎮 Endpoints REST.
│   │       ├── /service         # ⚙️ Regras e lógica de negócio.
│   │       ├── /repository      # 🗄️ Repositórios (JPA/Hibernate).
│   │       ├── /model           # 🧬 Entidades persistentes (JPA).
│   │       ├── /domain          # 🌐 Objetos de Domínio puro (sem anotações).
│   │       ├── /dto             # ✉️ Data Transfer Objects.
│   │       ├── /config          # 🔧 Configurações gerais (DB, Swagger, CORS, etc.).
│   │       ├── /exception       # 💥 Exceptions e handlers globais.
│   │       └── /security        # 🛡️ Autenticação e Autorização (Spring Security).
│   │
│   ├── /src/main/resources      # 📂 Recursos do Spring Boot
│   │   ├── application.yml         # ⚙️ Configuração principal da aplicação
│   │   ├── application-dev.yml     # 🧪 Configurações específicas do ambiente de DESENVOLVIMENTO
│   │   ├── application-prod.yml    # 🚀 Configurações específicas para PRODUÇÃO
│   │   ├── application-test.yml    # 🧪 Configurações usadas nos testes automatizados
│   │   ├── /static                # 🌐 Arquivos estáticos (HTML/CSS/JS).
│   │   ├── /templates             # 🖼️ Templates Thymeleaf/Freemarker.
│   │   ├── /messages              # 🌎 Arquivos de internacionalização (i18n).
│   │   └── /db                    # 💾 Scripts de banco usados pela aplicação
│   │       └── /migration         # 📜 Migrações do banco (Flyway/Liquibase).
│   │
│   ├── /src/test/java            # 🧪 Testes unitários e de integração.
│   └── pom.xml / build.gradle    # 🛠️ Build e dependências.
│
├── /scripts                      # 📜 Scripts de automação
│   ├── dev.sh                    # 🚀 Ambiente de desenvolvimento completo.
│   ├── build_all.sh              # 🛠️ Build geral (front + back).
│   └── deploy.sh                 # ☁️ Deploy em produção/homologação.
│
├── /docs                         # 📚 Documentação, arquitetura, modelos C4, Swagger/OpenAPI.
└── /tests                        # 🧪 Testes End-to-End (Cypress/Playwright).
```

---

## 🎥 Demonstração

Use GIFs e prints para mostrar o projeto em ação.  

> [!WARNING]
> Dê preferência a hospedar suas imagens em um **CDN** (Content Delivery Network) ou no **GitHub Pages** para garantir que elas carreguem rapidamente e não quebrem. Saiba mais sobre o GitHub Pages clicando [aqui](https://github.com/joaopauloaramuni/joaopauloaramuni.github.io).

### 📱 Aplicativo Mobile

- GIF de demonstração (exemplo de fluxo de usuário):  

| Demonstração 1 | Demonstração 2 | Demonstração 3 | Demonstração 4 |
|----------------|----------------|----------------|----------------|
| <img src="https://joaopauloaramuni.github.io/image/fundo_mobile_engsoft.jpeg" alt="Demonstração 1" height="400"> | <img src="https://joaopauloaramuni.github.io/image/fundo_mobile_engsoft.jpeg" alt="Demonstração 2" height="400"> | <img src="https://joaopauloaramuni.github.io/image/fundo_mobile_engsoft.jpeg" alt="Demonstração 3" height="400"> | <img src="https://joaopauloaramuni.github.io/image/fundo_mobile_engsoft.jpeg" alt="Demonstração 4" height="400"> |
| _Sua gif aqui_ | _Sua gif aqui_ | _Sua gif aqui_ | _Sua gif aqui_ |

Para melhor visualização, as telas principais estão organizadas lado a lado.

| Tela | Captura de Tela |
| :---: | :---: |
| **Tela Inicial (Home)** | **Tela de Perfil / Settings** |
| <img src="https://joaopauloaramuni.github.io/image/aramunilogo.png" alt="Tela 1 do Mobile" width="120px" height="120px"> | <img src="https://joaopauloaramuni.github.io/image/aramunilogo.png" alt="Tela 2 do Mobile" width="120px" height="120px"> |
| **Tela de Cadastro** | **Tela de Lista / Detalhes** |
| <img src="https://joaopauloaramuni.github.io/image/aramunilogo.png" alt="Tela 3 do Mobile" width="120px" height="120px"> | <img src="https://joaopauloaramuni.github.io/image/aramunilogo.png" alt="Tela 4 do Mobile" width="120px" height="120px"> |

### 🌐 Aplicação Web

Para melhor visualização, as telas principais estão organizadas lado a lado.

| Tela | Captura de Tela |
| :---: | :---: |
| **Página Inicial (Home)** | **Página de Login** |
| <img src="https://joaopauloaramuni.github.io/image/aramunilogo.png" alt="Tela Inicial da Aplicação Web" width="120px" height="120px"> | <img src="https://joaopauloaramuni.github.io/image/aramunilogo.png" alt="Tela de Login" width="120px" height="120px"> |
| **Cadastro de Clientes** | **Cadastro de Produtos** |
| <img src="https://joaopauloaramuni.github.io/image/aramunilogo.png" alt="Tela de Cadastro de Clientes" width="120px" height="120px"> | <img src="https://joaopauloaramuni.github.io/image/aramunilogo.png" alt="Tela de Cadastro de Produtos" width="120px" height="120px"> |
| **Dashboard (Visão Geral)** | **Página Admin / Configurações** |
| <img src="https://joaopauloaramuni.github.io/image/aramunilogo.png" alt="Tela de Dashboard" width="120px" height="120px"> | <img src="https://joaopauloaramuni.github.io/image/aramunilogo.png" alt="Tela Administrativa" width="120px" height="120px"> |

### 💻 Exemplo de Saída no Terminal (para Back-end, API, CLI)

Caso o projeto seja focado em serviços de Back-end (API, microserviço, CLI), utilize esta seção para demonstrar a interação com o sistema e a resposta esperada.

#### 1. Demonstração da API (Exemplo com cURL)

Mostra uma chamada simples para um endpoint da API (ex: GET de listagem).

```bash
# Chama o endpoint de listagem de usuários com o token de autenticação
curl -X GET 'http://localhost:3000/api/v1/users' \
     -H 'Authorization: Bearer <seu-jwt-token>'
```

**Saída Esperada:**
```json
{
  "total": 2,
  "users": [
    {
      "id": "1a2b3c",
      "name": "Prof. Aramuni",
      "email": "contato@exemplo.com",
      "status": "active"
    },
    {
      "id": "4d5e6f",
      "name": "Colaborador Teste",
      "email": "teste@exemplo.com",
      "status": "inactive"
    }
  ]
}
```

---

#### 2. Demonstração de Execução de CLI/Script

Mostra como executar uma ferramenta de linha de comando ou um script de manutenção do projeto (ex: rodar migrações ou um job agendado).

```bash
# Executa a ferramenta de validação de Schema
npm run cli validate:schema --target=production
```

**Saída Esperada:**
```text
[INFO] Iniciando validação do banco de dados...
[SUCCESS] 15/15 tabelas verificadas.
[WARNING] Coluna 'descricao' na tabela 'produtos' é nullable.
[SUCCESS] Validação concluída. Nenhum erro crítico encontrado.
Tempo de execução: 1.25s
```

---

## 🧪 Testes

### Testes Unitários e de Integração
Para rodar os testes da unidade e integração:

```
npm run test
```
*Ferramenta utilizada: Jest, Vitest, Mocha, etc.*

### Testes End-to-End (E2E)
Para rodar os testes de ponta a ponta (E2E):

```
npm run test:e2e
```
*Ferramenta utilizada: Cypress, Playwright, Selenium, etc.*

---

## 🔗 Documentações utilizadas

Liste aqui links para documentação técnica, referências de bibliotecas complexas ou guias de estilo que foram cruciais para o projeto.

* 📖 **Framework/Biblioteca (Front-end):** [Documentação Oficial do **React**](https://react.dev/reference/react)
* 📖 **Build Tool (Front-end):** [Guia de Configuração do **Vite**](https://vitejs.dev/config/)
* 📖 **Framework (Back-end):** [Documentação Oficial do **Spring Boot**](https://docs.spring.io/spring-boot/docs/current/reference/html/)
* 📖 **Containerização:** [Documentação de Referência do **Docker**](https://docs.docker.com/)
* 📖 **Guia de Estilo:** [**Conventional Commits** (Padrão de Mensagens)](https://www.conventionalcommits.org/en/v1.0.0/)
* 📖 **Documentação Interna:** [Design System do Projeto](./docs/design-system.md)

---

## 👥 Autores
Liste os principais contribuidores. Você pode usar links para seus perfis.

| 👤 Nome | 🖼️ Foto | :octocat: GitHub | 💼 LinkedIn | 📤 Gmail |
|---------|----------|-----------------|-------------|-----------|
| Nome 1  | <div align="center"><img src="https://joaopauloaramuni.github.io/image/aramunilogo.png" width="70px" height="70px"></div> | <div align="center"><a href="https://github.com/user1"><img src="https://joaopauloaramuni.github.io/image/github6.png" width="50px" height="50px"></a></div> | <div align="center"><a href="https://www.linkedin.com/in/user1"><img src="https://joaopauloaramuni.github.io/image/linkedin2.png" width="50px" height="50px"></a></div> | <div align="center"><a href="mailto:user1@gmail.com"><img src="https://joaopauloaramuni.github.io/image/gmail3.png" width="50px" height="50px"></a></div> |
| Nome 2  | <div align="center"><img src="https://joaopauloaramuni.github.io/image/aramunilogo.png" width="70px" height="70px"></div> | <div align="center"><a href="https://github.com/user2"><img src="https://joaopauloaramuni.github.io/image/github6.png" width="50px" height="50px"></a></div> | <div align="center"><a href="https://www.linkedin.com/in/user2"><img src="https://joaopauloaramuni.github.io/image/linkedin2.png" width="50px" height="50px"></a></div> | <div align="center"><a href="mailto:user2@gmail.com"><img src="https://joaopauloaramuni.github.io/image/gmail3.png" width="50px" height="50px"></a></div> |

> [!TIP]
> 💡 **Dica:** Escolha uma foto profissional, preferencialmente de rosto, evitando imagens com baixa qualidade, filtros excessivos ou elementos distrativos.

---

## 🤝 Contribuição
Guia para contribuições ao projeto.

1.  Faça um `fork` do projeto.
2.  Crie uma branch para sua feature (`git checkout -b feature/minha-feature`).
3. Commit suas mudanças (`git commit -m 'feat: Adiciona nova funcionalidade X'`). **(Utilize [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/))**
4.  Faça o `push` para a branch (`git push origin feature/minha-feature`).
5.  Abra um **Pull Request (PR)**.

> [!IMPORTANT]
> 📝 **Regras:** Por favor, verifique o arquivo [`CONTRIBUTING.md`](./CONTRIBUTING.md) para detalhes sobre nosso guia de estilo de código e o processo de submissão de PRs.

---

## 🙏 Agradecimentos
Em ambiente acadêmico, citar fontes e inspirações é crucial (integridade acadêmica). Em ambiente profissional, mostra humildade e conexão com a comunidade.

Gostaria de agradecer aos seguintes canais e pessoas que foram fundamentais para o desenvolvimento deste projeto:

* [**Engenharia de Software PUC Minas**](https://www.instagram.com/engsoftwarepucminas/) - Pelo apoio institucional, estrutura acadêmica e fomento à inovação e boas práticas de engenharia.
* [**Prof. Dr. João Paulo Aramuni**](https://github.com/joaopauloaramuni) - Pelos valiosos ensinamentos sobre **Arquitetura de Software** e **Padrões de Projeto**.
* [**Fernanda Kipper**](https://www.instagram.com/kipper.dev/) - Pelos valiosos ensinamentos em **Desenvolvimento Web**, **DevOps** e melhores práticas em **Front-end**.
* [**Rodrigo Branas**](https://branas.io/) - Pela didática excepcional em **Clean Architecture** e **Clean Code**.
* [**Código Fonte TV**](https://codigofonte.tv/) - Pelo vasto conteúdo e cobertura de notícias, tutoriais e apoio à comunidade de **Desenvolvimento Web**.

---

## 📄 Licença

Este projeto é distribuído sob a **[Licença MIT](https://github.com/joaopauloaramuni/laboratorio-de-desenvolvimento-de-software/blob/main/LICENSE)**.

---
