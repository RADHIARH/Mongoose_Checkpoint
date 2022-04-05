const express = require("express");
const router = express.Router();
const controller = require("../controllers/Controller");
router.get("/", controller.login);
router.get("/home", controller.gethomepage);
router.get("/:idd", controller.getproduct);
module.exports = router;
