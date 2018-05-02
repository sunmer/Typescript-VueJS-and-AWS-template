# Typescript, VueJS (with Vuex) and Postgres example
## Requirements
 * Docker

This template shows how to set up a complete project, with the following frameworks:
*  

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
