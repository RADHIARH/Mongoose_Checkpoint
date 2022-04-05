const express = require("express");
const router = express.Router();
const controller = require("../controllers/Controller");
router.post("/:id", controller.updatepc);
module.exports = router;
