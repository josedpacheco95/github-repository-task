# PROJECT

I recommend to install the dependencies and configure the backend first so you can run the frontend confortable

#Backend

In the root of the repository enter to the backend folder

`cd backend`

install the dependencies with:

`yarn`

or 

`npm install`

We are going to use sqlite for the database.

## Install SQLite on Windows
Step 1 − Go to SQLite download page, and download precompiled binaries from Windows section

`https://www.sqlite.org/download.html`

Step 2 − Download sqlite-shell-win32-*.zip and sqlite-dll-win32-*.zip zipped files.

Step 3 − Create a folder C:\>sqlite and unzip above two zipped files in this folder, which will give you sqlite3.def, sqlite3.dll and sqlite3.exe files.

Step 4 − Add C:\>sqlite in your PATH environment variable and finally go to the command prompt and issue sqlite3 command, which should display the following result.

`C:\>sqlite3
SQLite version 3.7.15.2 2013-01-09 11:53:05
Enter ".help" for instructions
Enter SQL statements terminated with a ";"
sqlite>`

###Install SQLite on Linux

Today, almost all the flavours of Linux OS are being shipped with SQLite. So you just issue the following command to check if you already have SQLite installed on your machine.

`$sqlite3
SQLite version 3.7.15.2 2013-01-09 11:53:05
Enter ".help" for instructions
Enter SQL statements terminated with a ";"
sqlite>`

If you do not see the above result, then it means you do not have SQLite installed on your Linux machine. Following are the following steps to install SQLite −

Step 1 − Go to SQLite download page and download sqlite-autoconf-*.tar.gz from source code section.

`https://www.sqlite.org/download.html`

Step 2 − Run the following commands −

`$tar xvfz sqlite-autoconf-3071502.tar.gz`

`$cd sqlite-autoconf-3071502`

`$./configure --prefix=/usr/local`

`$make`

`$make install`

The above command will end with SQLite installation on your Linux machine. Which you can verify as explained above.

## Install SQLite on Mac OS X

Though the latest version of Mac OS X comes pre-installed with SQLite but if you do not have installation available then just follow these following steps −

Step 1 − Go to SQLite download page, and download sqlite-autoconf-*.tar.gz from source code section.

`https://www.sqlite.org/download.html`

Step 2 − Run the following commands −

`$tar xvfz sqlite-autoconf-3071502.tar.gz`

`$cd sqlite-autoconf-3071502`

`$./configure --prefix=/usr/local`

`$make`

`$make install`

The above procedure will end with SQLite installation on your Mac OS X machine. Which you can verify by issuing the following command −

`$sqlite3
SQLite version 3.7.15.2 2013-01-09 11:53:05
Enter ".help" for instructions
Enter SQL statements terminated with a ";"
sqlite>`

Finally, you have SQLite command prompt where you can issue SQLite commands for your exercises.

To run this project, you will need to add the following environment variables to your .env file,
the .env file it have to be located in the backend folder.

`APP_AUTH_SECRET` → This is the key used to encrypt the jwt, you can use any string you want

`APP_DB_NAME` → Database name e.g. dbtest that will be generated with sequelize


`APP_DB_USER` → Database username  that will be generated with sequelize


`APP_DB_PASSWORD` →  Database password that will be generated with sequelize

`APP_DB_PATH` → In this path is where the database file of sqlite will be created

`APP_GITHUBKEY` This is the key of the repository, It will be in the body of the email

Install nodemon

`npm install -g nodemon `

When everything is done you can run the server with the command.

`yarn start`

or 

`npm run start`



## Frontend

In the root of the repository, enter to the frontend folder

To run this project, you will need to add the following environment variables to your .env file,
the .env file it have to be located in the fronted folder. (You can avoid this part since the documentation is in this moment just to run the project locally)

`REACT_APP_BASE_API` → This is the url of the backend, since the documentation is in this moment just to run the project locally, you can put 'http://localhost:5020' as url


`cd frontend`

install the dependencies with:

`yarn`

or 

`npm install`

you can run the project frontend with the command(It's important that you have the server in the backend already running you can make the requests when you use the app)

`npm run dev`

or

`yarn dev`