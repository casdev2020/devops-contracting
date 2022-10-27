FROM node:16.3.0-alpine

RUN mkdir -p App

WORKDIR /App
COPY yarn.lock /App
COPY package.json /App
COPY /src /App/src

RUN yarn install --frozen-lock --prod

EXPOSE 80
CMD yarn nodemon src/index.js 