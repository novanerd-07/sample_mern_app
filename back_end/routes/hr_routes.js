let express = require('express');
let router = express.Router();

router.get("/viewemployees",(req,res)=>{
    res.send("view employee page called");
})

router.post("/assigntask",(req,res)=>{
    res.send("assign task router called");
})

router.get("/viewtask",(req,res)=>{
    res.send("view task router called");
})

router.delete("/deleteemployee",(req,res)=>{
    res.send("delete employee router called");
})


module.exports = router;