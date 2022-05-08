# node_mysql_rest_api
Restfull api of Programming Languages using NodeJS Express and MySql
This Project consist to Manage Users : Create , Read , Update , Delete programming language with their github and tiobe rank


# Getting Started
If you wanna clone and test this project , 

## You run these command only the first time you've cloned the project after that you'll use only npm start

you must run first :

### `npm install`
It will install all dependencies that this projects needs

### Configure .env file like this example
PORT = 4000 or the port that you want to launch the api server,  
HOST = your mysql host,  
USER = your mysql username,  
PASSWORD = your mysql password,  
DATABASE = api

### do the migration
run the sql file on your mysql console ('source migration.sql;')  or import that on phpmyadmin


The command above must be runned only one time;
The command below will launch the api server :

### `npm start`

Runs the app .
Open [http://localhost:4000 or the port you've choosen] to test

### `npm run server` on another terminal
Runs the json-server backend
