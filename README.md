# DataEntryApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Environement Setup

Install latest version of node as per your device OS by visiting https://nodejs.org/en/download/ . Node comes with node package manager(npm) which is required to download your project dependencies.

Once installation is complete you can verify by executing below commands in your terminal.

1) `node -v`[Example output : v10.15.3]
2) `npm -v` [Example output : v6.4.1]

## Installing Angular CLI

Once the Node is setup, Angular cli can be installed by executing below commands

`npm install -g @angular/cli`

You can verify the cli version by executing below command from any working directory since you have installed angular-cli globally

`ng v` or `ng version`

Example output:

Angular CLI: 7.2.3
Node: 10.15.3
OS: darwin x64
Angular: 
... 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.12.3
@angular-devkit/core         7.2.3
@angular-devkit/schematics   7.2.3
@schematics/angular          7.2.3
@schematics/update           0.12.3
rxjs                         6.3.3
typescript                   3.2.2

## Installing project dependencies
Make sure you are inside the project folder, To be more precise in the exact path where your projects package.json resides.

Now run `npm install` to install the dependencies specified in package.json.

The above step will create folder by name "node_modules" which will have dependent libraries required to run your app. 

## Development server
Once angular-cli & project dependencies are installed you can run the app in development mode.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

The default port is 4200. You can change the port by passing the port argument while serving the app.

Example: `ng serve --port 3000`
[This will start the app locally on 3000 port]

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Different app environments
Multiple app environments can be supported. 
Currently there are two environments, 
-   For development purposes environment.ts can be used to update configs.
-   For production purposes environment.prod.ts can be used to update configs.

## Running this app as a docker container

The Dockerfile is a multistage docker file since it reduces the image size significantly.
-   stage 1
    Here we are using node:10.15.3-alpine as base node environment to build our application since for Angular 8 it requires node to be 10 or higher version and 10.15.3 is a stable LTS node version, could be verified on https://nodejs.org/en/download/ and we have used alpine distribution of linux since it uses the least amount of space. The rest of the steps are similar to what has been explainied in the above steps(altogether written in Dockerfile).

-   stage 2
    After building the app we need a server to serve the app when requested, So we are using nginx server by copying the dist folder obtained from stage 1 to nginx server's /usr/share/nginx/html folder. nginx configuration is also added such that the server re-routes all the requests to index.html.

*   Note: We also have a .dockerignore, you can add app files/folders to this .dockerignore        which do not add any value while building your app image.

You can build the image by executing below command from the exact path where your project Dockerfile resides.
`docker build -t angular-de-app:1.0 .`
Once the image is built you can Run `docker images` command, you will be able to see the image with name angular-de-app and tag 1.0

you can run this image as a container by executing
`docker run -it -d -p 4200:80 --name data-entry-app-container angular-de-app:1.0`
Here we are mapping port 80 of the container to 4200 of host machine(If you check the dockerfile we have exposed the server on port 80). 
-   data-entry-app-container is the name of the container and
-   angular-de-app:1.0 is the image name with tag

Run `docker ps` to be able to see the container  "data-entry-app-container" listed, indicating it is running.

open up the browser and type localhost:4200 , you should see the Digital Data Entry app running. 

If you would like to interact with the container may be to see the folders inside it or to check some configurations inside the container, use below command:
`docker exec -it [container-ID] /bin/sh`

## Using mock backend 
This app can be run with a mock backend  that is served by json-server which would again be a docker container.

The only thing you need to do is mount db.json from your local to json-server, doing so would expose basic crud required by your application. 
While mounting 
-   the part to the left of the : is the location of our file/directory (db.json in this case)     on our machine 
-   the part to the right of the : is the location that we are linking to in our container.

Execute the below command to 

`docker run -it -d -p 8080:80 -v ~/Documents/angular-DE/DataEntryApp/data/db.json:/data/db.json clue/json-server`

*   Note: Do not forget to change the location of db.json as per your machine folder               structure. 
    Also note your mock backend services are now available on localhost:8080

you can checkout more about the json-server @ https://github.com/typicode/json-server

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Additional good to know information

If you have want to upgrade any dependency of your angular application to its corresponding latest beta release you can simply do it by appending @next while installing that dependency.

Example `npm install @angular/compiler@next` or 
you can upgrade multiple dependencies by specifying them in the same command
Example  `npm install @angular/core@next @angular/forms@next @angular/platform-browser@next`