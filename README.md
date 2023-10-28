# Backend Tech Challenge

## Instalação

Para começar a usar o projeto, siga os passos abaixo:

#### 1. Clone o repositório

Clone o projeto para o seu ambiente de desenvolvimento usando o comando git clone:

```bash
  git clone https://github.com/GRUPO-G68/backend-tech-challenge.git
```

#### 2. Entre no diretório do projeto

Navegue para o diretório recém-clonado usando o comando cd:

```bash
  cd backend-tech-challenge
```

#### 3. Instale as dependências

Use o gerenciador de pacotes Node.js (npm) para instalar todas as dependências do projeto:

```bash
  npm install
```

#### 4. Configure os arquivos de exemplo

Há arquivos/pastas de exemplo no projeto que você deve configurar para suas necessidades. Para fazer isso, siga estas etapas:

- Localize os arquivos/pastas com nomes terminando em `.exemple` e faça cópias deles sem a extensão `.exemple`. Por exemplo, `.env.exemple` deve ser renomeado para `.env`.

#### 5. Inicie o aplicativo com o Docker

Certifique-se de ter o Docker instalado em sua máquina e execute o seguinte comando para iniciar o aplicativo:

```bash
  docker compose up -d
```

Isso iniciará os contêineres Docker necessários para executar o projeto.

#### 6. Execute as migrations

Após o container iniciado por completo execute o seguinte comando para realizar as migrações do banco:

**Obs:** Certifique-se de que o container e o banco esteja de pé

```bash
  npm run migrate
```

#### 7. Execute os seeders

Após as migrations executadas, execute os seeders:

```bash
  npm run seed
```

#### 10. Importe a colletion da API

Agora você deve ter o aplicativo funcionando localmente em seu ambiente.

O arquivo da colletion esta no diretório e esta nomeada de `COLLECTION DA API.postman_collection.json`,

#### 9. Acesse a documentação

Esse projeto utiliza a documentação dinâmica [swagger](https://swagger.io/docs/specification/adding-examples/) e [redocly](https://redocly.com/docs/), para acessar navegue a seguinte URL

redocly :

```bash
  localhost:9001/documentacao
```

swagger :

```bash
  localhost:9001/docs
```

**Nota:** Certifique-se de ler a documentação completa do projeto.
