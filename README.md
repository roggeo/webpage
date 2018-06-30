# Webpage

The web personal page.


## Install

    git clone git@github.com:roggeo/webpage.git
    cd webpage
    npm install
    cd api
    npm install
    cd ../

## Running


    sudo npm start & npm start --prefix api


Look at [localhost:3000](http://localhost:3000)

and server [localhost:3003](http://localhost:3003)

## Test

    npm test


## Building React project

    npm run build


## Stopping ports in Linux

    sudo kill $(sudo lsof -t -i:3003)

    # or 

    fuser -n tcp -k 3003
