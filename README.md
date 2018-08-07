# Webpage

The web personal page.

Example [roggeo.net](http://roggeo.net)


## Install

    git clone git@github.com:roggeo/webpage.git
    cd webpage
    npm install
    cd api
    npm install
    cd ../

Note: two application go run Client and API.

## Running in DEV mode


    sudo npm start & npm start --prefix api


Look at [localhost:3000](http://localhost:3000)

and server (api folder)  [localhost:3003](http://localhost:3003)

## Test

    npm test


## Deploy

1 - Configure ``/config/RestApi.js``

2 - Build the project: ``npm run build``. Loot at build folder

3 - Move files in build folder to remote server

4 - Move the API folder to Node enviroment



## Stopping ports in Linux

    sudo kill $(sudo lsof -t -i:3003)

    # or 

    fuser -n tcp -k 3003
