const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  nom: String,
  url: String,
  prix: Number,
  garantie: Number,
  processeur: String,
  disque_dur: String,
  ram: String,
  systeme_exploitation: String,
  carte_graphique: String,
  connecteurs: String,
  taille_ecran: String,
  perepheriques: String,
});
const pc = mongoose.model("pcs", ProductSchema);
module.exports = pc;
