const express = require('express');
const logger = require('./logger');
const morgan = require('morgan');
const authorize = require('./authorize');
const app = express();

//Middleware
app.use(morgan('combined'));

app.get("/",(req,res)=>{
    res.send("Home")
});

app.get("/about",(req,res)=>{
    res.send("About");
});

app.get("/api/products",(req,res)=>{
    res.send("Product");
});

app.get("/api/items",(req,res)=>{
    console.log(req.user);
    res.send("Itesms");
});

app.listen(5006,()=>{
    console.log("listening 5006 server...")
});