# team-hacknode-e-wallet-api

An e-wallet API created with Node.js, PostgreSQL and Sequelize.

## TABLE OF CONTENTS

- Introduction
- Features
- Technologies
- How to setup project locally
- How to setup the database
- Contributions

## Introduction

Welcome aboard! This e-wallet API is a software app that allows users register and carry out a number of financial activities with ease.


## Features

- Users=> Registration
- payments
- transfers
- transaction history
- Admin=> User management 
- User Authentication


## Technologies

- NodeJS
- ExpressJS
- PostgreSQL : Database
- Sequelize : Database ORM
- Flutterwave : for Payments
- Sendgrid : for Email management
- Twilio : for SMS management
- JWT => for Token management


### How to set up project locally

- clone this repo to your local editor
- Setup your postgreSQL database
- run the database migration. For step-by-step guide, see next section below.
- Start the node server via NPM.


### How to setup datatbase

- First create your database using pgAdmin or using 'createdb' on CLI. Follow the steps [here](https://www.postgresql.org/download/windows/) to install postgres locally.

- In code editor, Run `npm install sequelize pg --save` pg is the library for using PostgreSQL.

- Run `npm install --save pg pg-hstore` to install Sequelize database driver for Postgres.

- Run `sequelize init`. This will create the config, migrations, seeders, and models directories.

- Edit database configuration file (config.json), with  connection details to reflect your project.

- Run `sequelize db:migrate` to test your connection.


## Contributions..

