# Typescript, VueJS (with Vuex) and Postgres example.
## Requirements
 * NodeJS 6.10.2+ Support ES6
 * NPM 3.10.10+ 
 * Docker latest

## Install server

Inside the server folder use the command

```sh

  npm install
  npm run compile
  
```

## Install web

Inside the web folder use the command

```sh

  npm install
  
```

To start the server, use the command:

```sh

  docker-compose up
 
```

## Run tests

```sh

  docker-compose run --rm server npm run unit-test
  docker-compose run --rm server npm run integration-coverage

```

## Notes

Inspect container: ``docker exec -it paybird_server_1 sh``
