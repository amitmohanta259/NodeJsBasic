const { Router } = require('express');
const express = require('express');
let { people } = require('./data');
const app = express();
const router = express.Router();

app.use(express.static('public'));
app.use(express.urlencoded({ extended:false}))
// app.post('/login',(req,res)=>{
//     const {name} = req.body;
//     if(name){
//         return res.status(200).send(`Welcome ${name}`)
//     }
//     //console.log(req.body);    
//     res.status(401).send("Please PRovide credntials Post request")
// });

app.listen(5007,()=>{
    console.log("Listening to port 5007...");
});
