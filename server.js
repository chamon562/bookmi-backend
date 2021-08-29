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

// pars request of content-type - application/json
app.use(bodyParser.json())


app.listen(8318, () =>{
    console.log("Backend server is running");
})