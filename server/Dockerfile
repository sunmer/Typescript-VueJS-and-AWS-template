FROM node:7.5.0

RUN mkdir /server

RUN npm install nodemon -g

WORKDIR /server
COPY package.json /server/package.json
RUN npm install

COPY nodemon.json /server/nodemon.json

EXPOSE 3000

CMD npm run start-dev