const express = require("express");
const router = express.Router();
const controller = require("../controllers/Controller");
router.get("/", controller.getcontactlists);
module.exports = router;
