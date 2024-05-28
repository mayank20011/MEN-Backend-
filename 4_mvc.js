import express from "express";
import {createProduct, allProducts, product, changeProduct, updateProduct, deleteProduct} from './controller/product.js';
const server=express();

server.use(express.json());

// Create Post /product
server.post('/product',createProduct);

// Read Get /product/:id
server.get('/products',allProducts);

// Read Get /product/:id
server.get('/product/:id',product);

// Overwrite Put /product/:id
server.put('/product/:id',changeProduct);

// update Patch /product/:id
server.patch('/product/:id',updateProduct);

// Delete delete /product/:id
server.delete('/product/:id',deleteProduct);

server.listen(8080,()=>
  {
    console.log("Server Started");
  });