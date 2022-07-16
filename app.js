const express = require("express");
const app = express();


app.use(express.static('./public'))
//get
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./'))
});
//post


//put

//patch



//app.listen
app.listen(5003, ()=>{
    console.log("Listening 5003 server");
});
