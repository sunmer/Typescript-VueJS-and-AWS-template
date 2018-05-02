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

**Step 4 - verify that the application is up and running**

Open your favorite browser and go to http://localhost. You should see a blank page with a form for creating users.


**Step 5 - run the integration tests** 

Use your terminal and go to the root folder. Execute the following commands:

```sh

  docker-compose run --rm server npm run unit-test
  docker-compose run --rm server npm run integration-coverage

```
