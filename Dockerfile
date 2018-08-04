FROM node:8-alpine

WORKDIR /notes

COPY .babelrc .
COPY .modernizrrc .

COPY package-lock.json .
COPY package.json .

COPY internal ./internal
COPY public ./public
COPY config ./config
COPY shared ./shared
COPY server ./server
COPY client ./client

RUN npm install

ARG BASE_PATH

RUN npm run build

CMD node build/server
