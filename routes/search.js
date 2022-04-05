const express = require("express");
const router = express.Router();
const contr = require("../controllers/Controller");
router.get("/", contr.searchdata);
module.exports = router;
