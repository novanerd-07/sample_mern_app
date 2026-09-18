let express = require('express');
let router = express.Router();

router.post("/register",(req,res)=>{
    res.send("register router called");
})

router.post("/login",(req,res)=>{
    res.send("login router called");
})

router.get("/viewtask",(req,res)=>{
    res.send("view task router called");
})

router.put("/updateprofile",(req,res)=>{
    res.send("update profile router called");
})

module.exports = router;