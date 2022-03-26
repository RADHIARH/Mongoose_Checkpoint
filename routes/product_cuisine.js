const express = require("express");
const router = express.Router();
const clothescontr = require("../controllers/Controller");
router.get("/:idprod", clothescontr.getprodcuisine);

module.exports = router;
