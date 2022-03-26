const express = require("express");
const router = express.Router();
const clothescontr = require("../controllers/Controller");
router.get("/:idd", clothescontr.getproduct);

module.exports = router;
