# Typescript, VueJS (with Vuex) and Postgres example
## Software requirements
 * Docker

## Stack
 * Elastic Beanstalk
 * Nginx
 * Postgres (9.6)
 * Node (7.5+)
 * Typescript (2.8.3+)
 * Express (4.15.3+)
 * VueJS (2.5.13+)
 * Vuex (3.0.1+)
 * Webpack (2.7.0+)

This template demonstrates a Typescript stack which is also easily deployable to Amazons AWS.
Running inside a multi container Docker environment, there's basically four parts to the application.

## Stack
 * Server (folder: /server)
 * * The API of the application
 * Nginx
 * Postgres (9.6)
 * Node (7.5+)

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
