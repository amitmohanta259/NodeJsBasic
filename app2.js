const express =  require('express');
const app =  express();
const { products } = require('./data.js') ;

app.get('/',(req,res)=>{
    res.send('<h1>Welocme to home page</h1><a href="/api/products">PRODUCTS</a>')
    res.json(products);
});

app.get('/api/products',(req,res)=>{

    const newProducts = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image};
    });
    res.json(newProducts);
});
app.get('/api/products/:productId',(req,res)=>{
    console.log(req.params);
    const {productId} = req.params; 
    const singleProduct = products.find((product) => product.id === Number(productId));
    if(!singleProduct){
        res.status(404).send('Product Not Found');
    }
    res.json(singleProduct);
});

app.get('/api/products/:productId/review/:reviewId',(req,res)=>{
    //const {productId, reviewId} = req.params;
    console.log(req.params);
    res.send('hello world')
});

app.get('/api/v1/query',(req,res)=>{
    console.log(req.query);
    //let sortProducts = [...products];
    const {search,limit} = req.query;
    let sortedProduct = [...products];
    if(search){
        sortedProduct = sortedProduct.filter((products)=>{
            return products.name.startsWith(search);
        });
    }
    if(limit){
        sortedProduct = sortedProduct.slice(0,Number(limit));
    }
    if(sortedProduct.length < 1){
        res.status(404).json({success:true,data:[]});
    }
    res.status(200).json(sortedProduct);
    
});

app.listen(5005,()=>{
    console.log("Listening to Server 5005.....");
});