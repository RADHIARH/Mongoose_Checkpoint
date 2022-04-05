const express = require("express");
const router = express.Router();
const controller = require("../controllers/Controller");
router.post("/:id", controller.updateelectro);
module.exports = router;
