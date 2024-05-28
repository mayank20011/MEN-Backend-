import express from "express";
import {create,read,readAll,update,change,deletee} from "../controller/products.js";

const productRouter=express.Router();

productRouter
.get("/products",readAll)
.get("/products/:id",read)
.post('/products',create)
.put('/products/:id',update)
.patch('/products/:id',change)
.delete('/products/:id',deletee);

export default productRouter;


