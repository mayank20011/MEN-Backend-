import express from "express";
import {create, readall, read, update, change, deletee} from "../controller2/user.js";
const userroutes=express.Router();

userroutes
.post('/',create)
.get('/',readall)
.get('/:id',read)
.put('/:id',update)
.patch('/:id',change)
.delete('/:id',deletee);

export default userroutes;