FROM node

WORKDIR /home/node/app

COPY package.json .
COPY tsconfig.json .
COPY swagger.json .
COPY index.html .
COPY .env.exemple .env
COPY src/ ./src

RUN npm install

CMD npm run migrate && npm run generate && npm run seed && npm run start
