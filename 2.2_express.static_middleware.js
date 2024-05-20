import express from "express";
import morgan from "morgan";

const server=express();

// server.use(morgan('dev'));
server.use(morgan('default'));

server.get('/product/:id',(req,res)=>
  {
    res.send('hello');
  })
// server.use(express.static('public'));

server.listen(8080,()=>
  {
    console.log("Server Started");
  }); 