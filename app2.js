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

app.listen(5004,()=>{
    console.log("Listening to Server 5004.....");
});