# Artista

## Database setup
- Install mySql Server and mySql Workbench (https://dev.mysql.com/downloads/file/?id=473605),
- run create_script.sql,
- run create_testData_script.sql,
- change root password to test.

### Database model
![alt text](https://github.com/tomazlunder/artista2/blob/master/artista-db/model.png "Model")


## API setup
To start the api:
- Install NodeJS (https://nodejs.org/en/)
- cmd
- cd to ../artista-api-idea
- npm start

### API test tool
https://www.getpostman.com/

### API usage example (table user)
- Get all users: 	 GET localhost:3000/Users
- Get specific user: GET localhost:3000/Users/1
- Insert user: 		 POST localhost:3000/Users/   
 					 Header(key:value) = Content-Type : application/json  
 					 Body: { "name":"Marko Apijevec", "email":"marko@mail.com", "pwdhash"="0000"}
