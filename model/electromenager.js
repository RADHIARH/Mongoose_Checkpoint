const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  nom: String,
  url: String,
  prix: Number,
  garantie: Number,
  puissance: Number,
  pression: Number,
  capacite: Number,
  points_forts: String,
});
const electro_product = mongoose.model("electro", ProductSchema);
module.exports = electro_product;
