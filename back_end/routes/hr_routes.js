let express = require('express');
let router = express.Router();
let {users} = require('../models/users');
router.get("/viewemployees",async(req,res)=>{
    let result = await users.find();
    res.send(result);
})
//open postman choose get method 
//localhost:3000/api/hr/viewemployees

router.post("/assigntask",(req,res)=>{
    res.send("assign task router called");
})

router.get("/viewtask",(req,res)=>{
    res.send("view task router called");
})

router.delete("/deleteemployee/:id",async(req,res)=>{
    let deleterec = await users.findByIdAndDelete(req.params.id);
    if(deleterec){
        res.send("record deleted successfully");
    }
})


module.exports = router;