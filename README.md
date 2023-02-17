# Personnel API

API for customer X's personnel register.


## Run API locally
Clone the repository to get a clean install.

To install all prerequisites needed for this application, run:

```shell
npm install
```

In the project directory, you can run:

```
npm start
```

Runs the server in the development mode.
Open [http://localhost:1337/api/v1](http://localhost:1337/api/v1) to view it in the browser.

```
npm run prod
```

Runs the server in the production mode.

```
npm run test
```

Runs the test suite.

## Run API with Docker
Clone the repository to get a clean install.

```
docker-compose up
```
Starts database without logs, starts the server and runs test suite. 

Open [http://localhost:1337/api/v1](http://localhost:1337/api/v1) to view it in the browser.

```
docker-compose up mongodb express
```

Starts database without logs and starts the server.

```
docker-compose up -d
```

Starts database and server in detached mode. 

```
docker-compose down
```
Close down the docker containers, shuts down database and the server.

### REST-API manual

Coming.
