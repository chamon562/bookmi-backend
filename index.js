const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

app.listen(8318, () =>{
    console.log("Backend server is running");
})