const express = require("express");
const path = require('path')
const products = require('./product')
const app = express();

app.use(express.json());


app.get("/get/products", (req,res)=>{
    res.json(products);
});

app.post("/add/products", (req,res)=>{
    const product={
        id: products.length+1,
        Product_name: req.body.Product_name,
        Product_description:req.body.Product_description,
        Price: req.body.Price,
    }

    products.push(product)
    res.json(product)
});


app.listen(4000, function(req,res){
    console.log("service")
});