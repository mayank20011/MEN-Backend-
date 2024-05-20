// whenever we send password fom a form to server it is sent hidden in req body, lets try to access it.

import express from "express";
const server=express();

server.use(express.json());
const auth=(req,res,next)=>
{
   if(req.body.password==='123')
    {
      next();
    }
    else
    {
      res.sendStatus(401);
    }
}


server.get('/', auth, (req,res)=>
  {
    res.set('Content-Type','text/html');
    res.send('<h1>Access Granted</h1>');
  })


server.listen(8080,()=>
  {
    console.log('Server started');
  })