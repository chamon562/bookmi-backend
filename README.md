# bookmi-backend
 - Reference can be found [https://www.bezkoder.com/node-js-mongodb-auth-jwt/]
## Installing Dependency
- npm init -y
- npm install express mongoose body-parser cors jsonwebtoken bcryptjs

## Setup Express Web Server
```js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")

let corsOptions = {
    origin: "http://localhost:8318"
}

app.use(cors(corsOptions));

// parse request of content-type - application/json
app.use(bodyParser.json());

// parse request of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welecom to application" });
})

app.listen(8318, () => {
    console.log("Backend server is running");
})
```
- Above just import express, body-parser and cors modules: 
    - Express is for building the Rest apis
    - body-parser helps to parse the quest and create the req.body object
    - cors provies Express middleware to enable CORS
- create an Express app, then add body-parser and cors middlewares using app.use() method. Notice that we set origin: http://localhost:8318.
- define a GET route which i simple for test.
- listen on port 8080 for incoming requests.

Now lets run the app with command: node server.js.
Open browser with url http:localhost:8318, you will see
```json
{
"message": "Welecom to application"
}
```

## Create User and Role data models
- mkdir models and inside create role.model.js and user.model.js
- code inside role.model.js
```js 
// create User and ROle data model 
const mongoose = require("mongoose");

const Role = mongoose.model(
    "Role",
    new mongoose.Schema({
        name: String
    })
);

module.exports = Role;

```
- Code inside user.model.js
```js
const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ]
    })
)

module.exports = User;
```
These Mongoose Models represent users & roles collection in MongoDB database. User object will have a roles array that contains ids in roles collection as reference.

This kind is called Reference Data Models or Normaliation. 

After initializing Mongoose, we don't need to write CRUD functions because Mongoose supports all of them: 
- create a new User: object.save()
- find a User by id: User.findById(id)
- find User by email: User.findByOne({email: ...})
- find User by username: User.findOne({username: ...})
- find all Roles which name is given roles array: Role.find({ name: {$in: roles}})

These functions will be used in our Controllers and Middlewares. 
