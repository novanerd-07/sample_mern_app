let express = require('express');
let app = express();

// // localhost:3000/register
// app.post("/register",(req,res)=>{
//     res.send("register route called");
// })

// app.get("/viewstudent",(req,res)=>{
//     res.send("viewstudent page called");
// })


let hrroutes = require('./routes/hr_routes');
//localhost:3000/api/hr/viewemployees

app.use("/api/hr",hrroutes);

//run the server
app.listen(3000,()=>{
    console.log("server listening on port 3000");
})