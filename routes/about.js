const express=require("express");
const { route } = require("express/lib/router");
const router=express.Router();
router.get("/",(req,res)=>{
    res.render("about")
})
module.exports = router;