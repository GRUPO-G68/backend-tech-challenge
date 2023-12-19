FROM node
WORKDIR /home/node/app
COPY package*.json .
COPY tsconfig.json .
COPY src/ .
RUN npm install
CMD ["npm", "run", "start:dev"]


