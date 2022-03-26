const express = require("express");
const router = express.Router();
const contr = require("../controllers/Controller");
router.get("/", contr.getsearch);

module.exports = router;
