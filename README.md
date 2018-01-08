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
- Get all users: 	 
```
GET localhost:3000/Users
```
- Get specific user:
```
 GET localhost:3000/Users/1
```
- Insert user: 		 
```
	POST localhost:3000/Users/
 	Header(key:value) = Content-Type : application/json
 	Body: { "name":"Marko Apijevec", "email":"marko@mail.com", "pwdhash"="0000"}
```

### Uploading pictures (currently .png only)
- Uploading profile picture for seller with id = 1
```
	POST localhost:3000/Pictures/addProfile
	Body (form-data) key:value ..
	picture : example.png
	seller : 1
```
- Uploading picture for sellers portfolio
```
	POST localhost:3000/Pictures/addPortfolio
	Body (form-data) key:value ..
	picture : example.png
	seller : 1
```
- Uploading picture for seller's (id = 1) listing (id = 1)
```
	POST localhost:3000/Pictures/addListing
	Body (form-data) key:value ..
	picture : example.png
	seller : 1
	listing : 1
```