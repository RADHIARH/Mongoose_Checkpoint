const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  Lastname: String,
  Firstname: String,
  email: String,
  age: Number,
  password:String
});
const users = mongoose.model("Users", ProductSchema);
module.exports = users;
