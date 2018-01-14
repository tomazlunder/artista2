# Artista

## This project includes:
	- MySQL Database (artista-db)
	- Express DB API (artista-api-idea)
	- PHP Web Application (artista-webpage)
	- Android Application (artista-android, apk)


## ARTISTA-DB

### Database setup
- Install mySql Server and mySql Workbench (https://dev.mysql.com/downloads/file/?id=473605) or use phpMyAdmin,
- run create_script.sql,
- run create_testData_script.sql,
- change root password to test.

### Database model
![alt text](https://github.com/tomazlunder/artista2/blob/master/artista-db/model.png "Model")

##ARTISTA-API

### API setup
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
<details>
  <summary>Response</summary>

```
  {
    "user": [
        {
            "id": 1,
            "name": "Anton Banana",
            "email": "anton.banana@mail.com",
            "pwdhash": "0000",
            "regTimestamp": "2018-01-13T18:39:28.000Z",
            "type": 0
        },
        {
            "id": 2,
            "name": "Benjamin Hruška",
            "email": "ben.hr@mail.com",
            "pwdhash": "0000",
            "regTimestamp": "2018-01-13T18:39:28.000Z",
            "type": 0
        }
    ]
}
```

</details>

- Get specific user:
```
 GET localhost:3000/Users/1
```
<details>
  <summary>Response</summary>

```
  {
    "user": [
        {
            "id": 1,
            "name": "Anton Banana",
            "email": "anton.banana@mail.com",
            "pwdhash": "0000",
            "regTimestamp": "2018-01-13T18:39:28.000Z",
            "type": 0
        }
    ]
}
```

</details>

- Insert user: 		 
```
	POST localhost:3000/Users/
 	Header(key:value) = Content-Type : application/json
 	Body: { "name":"Marko Apijevec", "email":"marko@mail.com", "pwdhash"="0000"}
```




### API - Pictures
Pictures are stored in "../artista-api-idea/public/pictures"
When uploaded they are renamed to picture-random_number-timestamp.png and the path to the file is saved in the picture table of the database.

#### Getting pictures
- Pictures can be retreived by their id:

```
	GET localhost:3000/Pictures/[id]
```



- Sellers profile picture can be retreived by his id (if there is no profile picture it retrieves the default image)
```
	GET localhost:3000/Sellers/[id]/picture
```



- You can also retrieve picture ids of certain listings (to then use to retrieve the them)
```
	GET localhost:3000/Listings/[id]/pictures

	Example result: [45,47,67]
```

- Same for portfolios 
```
	GET localhost:3000/Portfolios/[seller id]/pictures

	Example result: [20,51,105]
```


#### Uploading pictures (currently .png/ .jpg only)
UPDATED (13.1.18 12:40)

- Uploading profile picture for seller with id = 1
```
	POST localhost:3000/Sellers/[id]/picture

	Body (form-data) key:value ..
	picture : example.png
```

- Uploading picture for sellers portfolio
```
	POST localhost:3000/Portfolios/[seller id]/picture

	Body (form-data) key:value ..
	picture : example.png
```

- Uploading picture for seller's (id = 1) listing (id = 1)
```
	POST localhost:3000/Listings/[id]/picture

	Body (form-data) key:value ..
	picture : example.png
```


