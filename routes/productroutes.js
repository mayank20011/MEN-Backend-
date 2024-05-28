import express from "express";
import {create , read ,readall , change , update, deletee} from "../controller2/product2.js";
const productrouter=express.Router();

productrouter.post('/',create)
.get('/',readall)
.get('/:id',read)
.put('/:id',update)
.patch('/:id',change)
.delete('/:id',deletee);


export default productrouter;