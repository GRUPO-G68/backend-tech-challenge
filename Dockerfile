FROM node
WORKDIR /home/node/app
COPY package.json .
COPY src/ .
COPY server.js .
RUN npm install
CMD ["npm", "run", "dev"]