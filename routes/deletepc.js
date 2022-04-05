const express = require("express");
const router = express.Router();
const controller = require("../controllers/Controller");
router.get("/:id", controller.deletepc);
module.exports = router;
