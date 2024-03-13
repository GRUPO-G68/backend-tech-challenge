FROM node:alpine

WORKDIR /home/node/app

# Copia os arquivos de configuração
COPY package-lock.json ./
COPY .env.exemple .env
COPY package.json ./
COPY tsconfig.json ./
COPY tsconfig.build.json ./
COPY nest-cli.json ./
COPY swagger.json ./
COPY .prettierrc ./
COPY index.html ./

# Cria o diretório 'src' e copia o conteúdo
RUN mkdir src
COPY src/ /home/node/app/src/

# Instala as dependências
RUN npm install

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]