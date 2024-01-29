# Backend Tech Challenge

## A. Desenho da arquitetura

### i.Os requisitos do negocio (problema)

O processo de pedido de lanche se inicia quando um cliente se dirigi a um terminal de autoautendimento para fazer o pedido. O cliente chega no terminal e escolhe se irá fazer login no sistema com seu CPF ou se fará um pedido de forma anonima.

Depois disso o terminal apresenta ao cliente uma lista de lanches.

O cliente escolhe o lanche desejado. O terminal então apresenta a opção de acompanhamentos para o cliente.

O cliente escolhe se deseja acompanhamento no pedido.

A ultima escolha é referente a bebida. O cliente então fecha o carrinho de pedido.

Com os itens do pedido do cliente, o sistema gera uma ordem de pedido, calcula o total do mesmo e apresenta as informações referente aos itens e valor total para o cliente.

O cliente revisa as informações e ao confirmar, solicita a informação de pagamento. O sistema realiza a comunicação com o gateway de pagamento e apresenta um QR Code para que o pagamento seja realizado.

O cliente realiza o pagamento do pedido.

O Gateway confirma o pagamento para o sistema que por sua vez, altera o status do pedido para “Recebido” e envia o mesmo para a cozinha.

### ii: Os requisitos de infraestrutura.

A aplicação é desenvolvida em NodeJs com o framework Nest.js e como banco de dados utiliza MariaDB.

Não fizemos o deploy em ambiente de cloud. Para o ambiente de desenvolvimento, o MariaDB é executado em um pod do kubernetes.

![image info](./assets/design-kubernets.png)

## B. Collection das apis.

#### i. Collection do Postman (Json).

A colletion esta na raiz do projeto com o nome,
`COLLECTION DA API.postman_collection.json`,

## C. Guia completo para execução do projeto.

#### Instalação

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

Baixe e instale o Node.js em https://nodejs.org/en/download.

Instale as dependencias do projeto com o comando

```bash
  npm install
```

Instale o Docker https://www.docker.com/products/docker-desktop/

Ative o Kubernets https://docs.docker.com/desktop/kubernetes/

Instale ou execute uma instancia de MariaDB no seu computador. Você precisa informar no arquivo `.env` os detalhes de conexão do banco de dados. Você pode também executar um container docker do MariaDB.

> IMPORTANTE: Para execução de imagem via Kubernetes com os arquivos .yaml, tenha certeza de definir o valor da variável `DB_HOST` para `svc-mysql-fiap`, caso contrário a aplicação não conseguirá se conectar ao pod com o banco dados.

#### 4. Desenvolvimento local

Após configurado, para executar o projeto localmente, execute o comando `npm run start:dev`.

A documentação da aplicação pode ser acessada no seu navegador através do endereço: http://localhost:9001/docs

#### 5. Execute o APP com o Kubernetes

A imagem do banco de dados e da aplicação já constam nos arquivos .yaml para execução do projeto.

Para executar usando a configuração atual, abra um terminal na raiz do projeto e execute o comando

```bash
kubect apply -f ./src/infrastructure/k8s/
```
A documentação da aplicação pode ser acessada no seu navegador através do endereço: http://localhost:30000/docs

Para derrubar toda a soluçao, execute `kubectl delete namespace fiap`.

##### Editando a imagem

Caso você queira editar ou usar uma imagem diferente, faça as alterações n código, e no Dockerfile (caso necessário).

Faça o build da sua imagem:

```bash
docker build -t <nome:versão> .
```

Atualize a linha 18 do arquivo `node-fiap-deployment.yaml` com o nome da imagem que você deu no comando de build. Você não precisa fazer o upload para docker hub dessa imagem se não quiser, a configuração do projeto busca pela imagem localmente antes de tentar acessar a mesma no repositório online do Docker Hub.

#### 8. Importe a colletion da API

Agora você deve ter o aplicativo funcionando localmente em seu ambiente.

O arquivo da colletion esta na raiz do projeto e está nomeada de `COLLECTION DA API.postman_collection.json`.

## D. Link video demonstrativo.

#### link video youtube.
