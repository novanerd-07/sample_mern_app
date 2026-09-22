let express = require('express');
let app = express();
let mongoose = require('mongoose');
let hrroutes = require('./routes/hr_routes');
//localhost:3000/api/hr/viewemployees
let emproutes = require('./routes/emp_routes');
//localhost:3000/api/emp/viewemployee
// indicating server incoming json format Data
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/hrmanagement").then(()=>{console.log("db connection success")}).catch((err)=>console.log(err));


// // localhost:3000/register
// app.post("/register",(req,res)=>{
//     res.send("register route called");
// })

// app.get("/viewstudent",(req,res)=>{
//     res.send("viewstudent page called");
// })
app.use("/api/hr",hrroutes);

app.use("/api/emp",emproutes);

//run the server
app.listen(3000,()=>{
    console.log("server listening on port 3000");
})