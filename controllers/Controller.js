const electro_product = require("../model/electromenager");
const users = require("../model/users");
const pc = require("../model/pc");
const cuisine_products = require("../model/cuisine");
const mongoose = require("mongoose");
const { render, redirect } = require("express/lib/response");
const res = require("express/lib/response");
const { body } = require("express-validator");
const req = require("express/lib/request");
//connect to mongoclusetr
const url = `mongodb+srv://radhia_rh:RADHIARAHMANI2022@cluster0.b8mc7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
const getcontactlists = async (req, res) => {
  const list = await users.find();
  res.render("contact", { list: list });
  console.log(list);
};

const login = async (req, res) => {
  const electro = await electro_product.find();
  const pcs = await pc.find();
  const cuisine = await cuisine_products.find();
  const user = await users.findOne({
    Email: req.query.email,
    password: req.query.password,
  });
  if (user) {
    res.render("home", {
      i: electro,
      user: user,
      cuisine: cuisine,
      pcs: pcs,
    });
  } else {
    res.render("login", {
      message: "Invalid username or password",
      messageClass: "alert-danger",
    });
  }
};
const gethomepage = async (req, res) => {
  const electro = await electro_product.find();
  const pcs = await pc.find();
  const cuisine = await cuisine_products.find();
  res.render("home", {
    i: electro,
    cuisine: cuisine,
    pcs: pcs,
  });
};
const getuser = async (req, res) => {
  const user = await users.findOne({
    Lastname: req.query.email,
    password: req.query.password,
  });
  res.render("navbar", { user: user });
};
const getproductbyid = async (req, res) => {
  const { idd } = req.params;
  const product = await electro_product.findById(idd);
  const user = await users.findOne({
    Lastname: req.query.nom,
    password: req.query.password,
  });
  res.render("description", { prod: product, user: user });
};
const getprodcuisine = async (req, res) => {
  const { id } = req.params;
  const product = await cuisine_products.findById(id);
  console.log(product);
  res.render("description_cuisine", { produit: product });
};
const getprodpc = async (req, res) => {
  const { idpc } = req.params;
  const product = await pc.findById(idpc);
  res.render("description_pc", { pc: product });
};
const deletecuisineproduct = async (req, res) => {
  const { id } = req.params;
  await cuisine_products.findByIdAndDelete(id);
  console.log(id);
  res.redirect("/products/home");
};
// delete products
const deletepc = async (req, res) => {
  const { id } = req.params;
  await pc.findByIdAndDelete(id);
  console.log(id);
  res.redirect("/products/home");
};
const deleteelectro = async (req, res) => {
  const { id } = req.params;
  await electro_product.findByIdAndDelete(id);
  console.log(id);
  res.redirect("/products/home");
};
// update products
const updatecuisine = async (req, res) => {
  const { idd } = req.params;
  await cuisine_products.findByIdAndUpdate(idd, {
    materiau: req.body.materiau,
    garantie: req.body.garantie,
    points_forts: req.body.pointsf,
  });
  console.log(idd);
  res.redirect("/products/home");
};
const updateelectro = async (req, res) => {
  const { id } = req.params;
  await electro_product.findByIdAndUpdate(id, {
    puissance: req.body.puissance,
    pression: req.body.pression,
    capacite: req.body.capacite,
    garantie: req.body.garantie,
    points_forts: req.body.pointsf,
  });
  res.redirect("/products/home");
};
const updatepc = async (req, res) => {
  const { id } = req.params;
  await pc.findByIdAndUpdate(id, {
    processeur: req.body.processeur,
    disque_dur: req.body.disque,
    ram: req.body.ram,
    garantie: req.body.garantie,
    systeme_exploitation: req.body.systeme,
    perepheriques: req.body.perepherique,
    connecteurs: req.body.connecteurs,
    disque_dur: req.body.disque,
    taille_ecran: req.body.taille,
    carte_graphique: req.body.carte,
  });
  console.log("done");
  res.redirect("/products/home");
};
const searchdata = async (req, res) => {
  var ex = req.query.data;
  const cuisine = await cuisine_products.find({ nom: new RegExp(ex, "i") });
  const electro = await electro_product.find({
    nom: new RegExp(ex, "i"),
  });
  const prpc = await pc.find({ nom: new RegExp(ex, "i") });
  console.log(ex);
  console.log(prpc);
  res.render("search", { produit: cuisine, el: electro, p: prpc });
};
module.exports.getproduct = getproductbyid;
module.exports.getprodcuisine = getprodcuisine;
module.exports.getpc = getprodpc;
module.exports.getcontactlists = getcontactlists;
module.exports.login = login;
module.exports.getuser = getuser;
module.exports.deletecuisineproduct = deletecuisineproduct;
module.exports.deletepc = deletepc;
module.exports.deleteelectro = deleteelectro;
module.exports.updatecuisine = updatecuisine;
module.exports.updateelectro = updateelectro;
module.exports.updatepc = updatepc;
module.exports.gethomepage = gethomepage;
module.exports.searchdata = searchdata;
