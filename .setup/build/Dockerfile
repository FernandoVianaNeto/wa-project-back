FROM node:latest as development

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock .

RUN yarn install

COPY . .

RUN npm run build

CMD ["node", "dist/src/main.js"]
