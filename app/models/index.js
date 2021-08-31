// Initialize Mongoose
const mongoose = require("mongoose");
mongosse.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;