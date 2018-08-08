# Webpage

The web personal page.

Example [roggeo.net](http://roggeo.net)


## Install

    git clone git@github.com:roggeo/webpage.git
    cd webpage
    npm install

## Running in DEV mode


    npm start


Look at [localhost:3000](http://localhost:3000)


## Test

    npm test


## Deploy

1 - Configure ``/config/RestApi.js``

2 - Build the project: ``npm run build``. Loot at ``build`` folder

3 - Move files in build folder to remote server



## Stopping ports in Linux

    sudo kill $(sudo lsof -t -i:3000)

    # or 

    fuser -n tcp -k 3000
