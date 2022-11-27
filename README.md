# team-hacknode-e-wallet-api

An e-wallet API created with Node.js, PostgreSQL and Sequelize.

**TABLE OF CONTENTS

- Introduction
- Features
- Technologies
- How to setup project locally
- How to setup the database
- Contributions

**INTRODUCTION

Welcome aboard! This e-wallet API is a software app that allows users register and carry out a number of financial activities with ease.


**FEATURES

*Users => Registration
         payments
         transfers
         notifications
         transaction history
*Admin => User management 
         Security


**TECHNOLOGIES 

NodeJS
ExpressJS
PostgreSQL : Database
Sequelize : Database ORM
Flutterwave : for Payments
Sendgrid : for Email management
Twilio : for SMS management
JWT => for Token management


**HOW TO SET UP AND RUN THE PROJECT LOCALLY

- clone this repo to your local editor
- Setup your postgreSQL database
- run the database migration. For step-by-step guide, see next section below.
- Start the node server via NPM.


**HOW TO SET UP THE DATATBASE

- First create your database using pgAdmin or using 'createdb' on CLI. Follow the steps in https://www.postgresql.org/download/windows/ to install postgres locally.

- In code editor, Run 'npm install sequelize pg --save'. pg is the library for using PostgreSQL.

- Run 'npm install --save pg pg-hstore' to install Sequelize database driver for Postgres.

- Run 'sequelize init'. This will create the config, migrations, seeders, and models directories.

- Edit database configuration file (config.json), with  connection details to reflect your project.

- Run sequelize db:migrate to test your connection.


**CONTRIBUTIONS

