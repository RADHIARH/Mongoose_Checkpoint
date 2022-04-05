const express = require("express");
const router = express.Router();
const controller = require("../controllers/Controller");
router.get("/:idpc", controller.getpc);
module.exports = router;
