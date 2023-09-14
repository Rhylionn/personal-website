FROM node:current-bullseye-slim

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

CMD ["node", "index.js"] 