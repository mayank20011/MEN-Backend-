// lets create api according to rest standard
// Create to create we use post methode
// Read to read we use get methode
// Update to update we use put methode
// Patch  to patch we use put methode
// Delete to delete we use delete methode

import express from "express";
import * as fs from "node:fs";

const server = express();

// Body parser 
server.use(express.json());

const jsondata = JSON.parse(fs.readFileSync("Dummydata.json", "UTF-8"));
const products=jsondata.products;



// REST API

// 1)

// create POST /product
server.post("/product", (req, res) => {
   products.push(req.body);
   res.status(200).json(products);
});



// 2)

// Read GET /products
server.get('/products',(req,res)=>
  {
     res.status(201).json(products);
  })


// more specific read request
// Read Get /products/:id
server.get('/products/:id',(req,res)=>
  {
    const id=+req.params.id;
    const product=products.find(p => p.id===id);
    res.json(product);
  });


// 3) 

// Update PUT /products/:id

server.put('/products/:id',(req,res)=>
  {
    const id= +req.params.id;
    const productIndex=products.findIndex(p=>p.id===id);
    products.splice(productIndex,1,{id:id, ...req.body});
    res.json(req.body);
  });


// update PATCH /products/:id

server.patch('/products/:id',(req,res)=>
  {
    const id=+req.params.id;
    const productIndex=products.findIndex(p=>p.id===id);
    const product=products[productIndex];
    products.splice(productIndex,1,{...product, ...req.body});
    res.json(products);
  });




// 4)

// delete DELETE products/:id

server.delete('/products/:id',(req,res)=>
  {
    const id= +req.params.id;
    const productIndex=products.findIndex(p=>p.id===id);
    const product=products[productIndex];
    products.splice(productIndex,1);
    res.json(product);
  });



server.listen(8080 ,()=>console.log("Server Started"));
