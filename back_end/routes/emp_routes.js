let express = require('express');
let router = express.Router();
let {users} = require('../models/users');
let bcrypt = require('bcrypt');

router.post("/register",async(req,res)=>{
    // res.send("register router called");
    let data = req.body;
    data.password = await bcrypt.hash(data.password,10);
    let newuser = new users(data);
    let result = await newuser.save();
    res.send(result);
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