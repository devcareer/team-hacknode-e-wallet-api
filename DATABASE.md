# Database documentation

  This file explains the structure of the database folder 

## Database folder

  The database folder is a seperate folder from the `src` which houses the server files, since the database is a seperate instance from the server itself. All files and concerns regarding the database can be found within this folder.

## Folder Structure 

The folder structure is as shown below
```
database/
 |--migrations/
 |--seeders/
 |--config.js
 |--database.js
```

> migrations 

    This folder will contain the migration files for the various models in the models folder

> seeders

    This folder will contain the files for seeding the database with dummy data if needed

> config.js

    This file is a module containing the configuration file for the database connection.

> database.js

    This file contains the various config states for sequelize database depending on the mode the server is running on i.e "development", "testing" or "production". 

### Setting up database 

Configure the .env file using .env.example setting the values for the database instance.