var express = require("express");
var router = express.Router();
const controller = require("../controllers/Controller");
router.get("/", controller.getuser);
module.exports = router;
