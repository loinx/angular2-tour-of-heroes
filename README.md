# Angular2 tour of Heroes

This is an example of training session.

## Install Dependencies

We use Node Package Manager `npm`, `@angular/cli` as cli to develop and deploy

- Make sure you have [node.js](https://nodejs.org/) installed version 6.5+ and npm version 3+

- Make sure you have @angular/cli which is installed  globally via `npm install -g @angluar/cli`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run `ng serve --host [host-name] --port [port]`. Navigate to `http://[host-name]:[port]`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Production build and deployment via Docker

The docker and docker-engine must be installed in your system. More detail about docker installation [here](https://docs.docker.com/engine/installation/)

Run the following command to build and start the app:

```bash

 #  build
$ docker build .

# Start
$ docker run -dit angular2-tour-of-heroes

# By default the port is exposed via 80. You can change it by adding option `-p 80:80 `
$ docker run -p 80:80 -dit angular2-tour-of-heroes

```

Run following command to push our docker image into docker hub
You must have an account of the docker hub or create new account via `https://hub.docker.com/`

``` bash

# Login to docker hub

$ docker login # this requires you input usename and password

# Tag our image. Use username login above step
$ docker tag angular2-tour-of-heroes username/angular2-tour-of-heroes:[tag name]

# Push tagged image into docker hub then you can find your image on docker hub
$ docker push username/angular2-tour-of-heroes:[tag name]

```

In order to deploy into your docker registry you can follow the step:

``` bash
# Login your docker registry. You have to provide usename and password to login
$ docker login [docker-host]:[port]

# Tag image
$ docker tag angular2-tour-of-heroes [docker-host]:[port]/angular2-tour-of-heroes:[tag name]

# Deploy into docker registry
$ docker push [docker-host]:[port]/angular2-tour-of-heroes:[tag name]

```
