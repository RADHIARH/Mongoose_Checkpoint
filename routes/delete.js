const express = require("express");
const router = express.Router();
const controller = require("../controllers/Controller");
router.get("/:id", controller.deletecuisineproduct);
module.exports = router;
