const express = require("express");
const router = express.Router();
const controller = require("../controllers/Controller");
router.get("/", controller.getproducts);
router.get("/:idd", controller.getproduct);
module.exports = router;
