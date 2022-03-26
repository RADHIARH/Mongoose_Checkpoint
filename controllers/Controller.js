const { items } = require("../model/items.json");
const { cuisine } = require("../model/cuisine.json");
const { pcs } = require("../model/pcs.json");
const getallprod = (req, res) => {
  res.render("home", { i: items, cuisine: cuisine, pcs: pcs });
};

const getproductbyid = (req, res) => {
  const id = req.params.idd;
  const product = items.find((el) => {
    return el.id == id;
  });
  res.render("description", { prod: product });
};
const getprodcuisine = (req, res) => {
  const id = req.params.idprod;
  const product = cuisine.find((el) => {
    return el.id == id;
  });
  res.render("description_cuisine", { produit: product });
};
const getprodpc = (req, res) => {
  const id = req.params.idpc;
  const product = pcs.find((el) => {
    return el.id == id;
  });
  res.render("description_pc", { pc: product });
};
const getserchedproduct = (req, res) => {
  const user = req.query.username;
  const prodcuisine = cuisine.filter((el) => {
    return el.nom.toLowerCase().includes(user.toLowerCase());
  });
  const prodelectro = items.filter((el) => {
    return el.nom.toLowerCase().includes(user.toLowerCase());
  });
  const prodpc = pcs.filter((el) => {
    return el.nom.toLowerCase().includes(user.toLowerCase());
  });
  console.log(user);
  res.render("search", {
    pr: prodcuisine,
    prelectro: prodelectro,
    prpc: prodpc,
  });
};
module.exports.getproducts = getallprod;
module.exports.getproduct = getproductbyid;
module.exports.getprodcuisine = getprodcuisine;
module.exports.getpc = getprodpc;
module.exports.getsearch = getserchedproduct;
