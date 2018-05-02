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

## Application architecture
 **Server**
 * The API of the application which is served via Express. Folder /server.

 **Web**
 * The front-end of the application which is served via the http-server. Folder /web.

 **Nginx**
 * Serves as a reverse proxy to route requests to either the API or the Web. Folder /proxy.


## How do I get the application running locally?

**Step 1 - compiling the API** 
Set up the API by going to your terminal and to the folder /server. Then execute the following commands:

```sh

  npm install
  npm run compile
  
```

**Step 2 - compiling the front-end** 
Set up the front-end by going to your terminal and to the folder /web. Then execute the following commands:

```sh

  npm install
  npm run webpack
  
```

**Step 3 - running the application** 
To start the application, use your terminal and go to the root folder. Then execute the following command:

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
