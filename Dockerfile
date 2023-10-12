FROM node
WORKDIR /home/node/app
COPY package.json .
COPY src/ .
COPY server.js .
#migrations
COPY prisma/ .
#script usado para executar a migration apos o banco ser criado 
COPY wait-for-it.sh /wait-for-it.sh
RUN npm install
# CMD para aguardar o banco de dados e executar migrações do Prisma
CMD ["/bin/sh", "-c", "/wait-for-it.sh db:3306 -- npx prisma migrate dev --name init && npm run dev"]