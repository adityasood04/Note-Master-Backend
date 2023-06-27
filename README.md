# Simple Auth + CRUD api

This is an simple api created in Express JS having the authentication feature and basic CRUD functionality.

## Features

- SignUp a User
- Login a User
- Save a note
- Get all notes
- Update a note
- Delete a note

## Usage

#### Base Url :

```
  https://notemaster-api.onrender.com/
```

#### Sign Up:

```
POST https://notemaster-api.onrender.com//users/signup
Content-type: application/json;
Body:
{
    "userName":"number",
    "email":"string",
    "password":"string"  
}

Sample Response:
{
   {
    "user": {
        "username": "testuser",
        "password": "$2b$10$Z2EnrLWDEEN6OvDV99WffuLesnuK6vjHYU3WMQi",
        "email": "testuser@gmail.com",
        "_id": "649a7cf6031a0bcc111c6393",
        "createdAt": "2023-06-27T06:08:54.550Z",
        "updatedAt": "2023-06-27T06:08:54.550Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}
}
```

#### Sign In:

```
POST https://notemaster-api.onrender.com/users/signin
Content-type: application/json;
Body:
{
    "email":"string",
    "password":"string",
}

Sample Response:
{
   {
    "user": {
        "username": "testuser",
        "password": "$2b$10$Z2EnrLWDEEN6OvDV99WffuLesnuK6vjHYU3WMQi",
        "email": "testuser@gmail.com",
        "_id": "649a7cf6031a0bcc111c6393",
        "createdAt": "2023-06-27T06:08:54.550Z",
        "updatedAt": "2023-06-27T06:08:54.550Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}
}
```

### CRUD 


#### Save Note

```
POST https://notemaster-api.onrender.com/note
Content-type: application/json;
Body:
{
    "title":"string",
    "description":"string",
}

Sample Response:
{
    "title": "This is test title",
    "description": "This is a test description. lol",
    "userId": "649a7cf6031a0bcc111c6393",
    "_id": "649a7fc4031a0bcc111c6396",
    "createdAt": "2023-06-27T06:20:52.230Z",
    "updatedAt": "2023-06-27T06:20:52.230Z",
    "__v": 0
}
```
#### Get All Notes

```
GET https://notemaster-api.onrender.com/note
Content-type: application/json;

Sample Response:
[
    {
        "_id": "649a7fc4031a0bcc111c6396",
        "title": "This is test title",
        "description": "This is a test description. lol",
        "userId": "649a7cf6031a0bcc111c6393",
        "createdAt": "2023-06-27T06:20:52.230Z",
        "updatedAt": "2023-06-27T06:20:52.230Z",
        "__v": 0
    }
]
```

#### Update a Note

```
PUT https://notemaster-api.onrender.com/note/{noteId}
Content-type: application/json;
Body:
{
    "title":"string",
    "description":"string",
}

Sample Response:
{
    "title": "This is new test title",
    "description": "This is a new test description. lol",
    "userId": "649a7cf600bcc111c6393"
}
```
#### Delete a Note

```
DELETE https://notemaster-api.onrender.com/note/{noteId}
Content-type: application/json;
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.
