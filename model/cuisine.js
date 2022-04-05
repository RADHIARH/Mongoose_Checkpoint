const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  nom: String,
  url: String,
  prix: Number,
  garantie: Number,
  materiau: String,
  points_forts: String,
});
const cuisine_products = mongoose.model("cuisine", ProductSchema);
module.exports = cuisine_products;
