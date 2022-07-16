const express = require("express");
const app = express();


app.use(express.static('./public'));


app.get('/',(req,res)=>{
    res.json([{name:'Amit'},{name:'Mohanta'}]);
});

//for Page Not Found
app.all('*',(req,res)=>{
    res.status(400).send('Resource Not Found');
});

//app.listen
app.listen(5003, ()=>{
    console.log("Listening 5003 server");
});
