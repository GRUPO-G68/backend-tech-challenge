FROM node
WORKDIR /home/node/app
COPY package.json .
COPY tsconfig.json .
COPY src/ .
COPY swagger.json .
COPY index.html .
RUN npm install
CMD ["lss"]
CMD ["npm", "run", "start"]