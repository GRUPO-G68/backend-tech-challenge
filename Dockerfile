FROM node
WORKDIR /home/node/app
COPY package.json .
COPY tsconfig.json .
COPY src/ .
# COPY server.js .
# COPY prisma ./prisma/
RUN npm install
CMD ["npm", "run", "dev"]