const express = require("express");
const router = express.Router();
const controller = require("../controllers/Controller");
router.get("/", (req, res) => {
  res.render("login");
});
module.exports = router;
