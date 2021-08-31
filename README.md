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
