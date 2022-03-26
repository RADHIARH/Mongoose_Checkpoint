var express=require("express");
var router=express.Router();
const clothescontr = require("../controllers/Controller");
router.get('/',(req,res)=>{
    res.render("navbar")
});
module.exports = router;