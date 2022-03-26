const express = require("express");
const router = express.Router();
const clothescontr = require("../controllers/Controller");
router.get("/:idpc", clothescontr.getpc);

module.exports = router;
