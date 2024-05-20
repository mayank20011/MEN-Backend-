// lets write helloworld using expressjs

import express from "express";
import * as fs from "node:fs";

const server=express();
const jsondata=fs.readFileSync("package.json",'utf-8');



//  middleware

server.use((req,res,next)=>
  {
      console.log(`Request methode is ${req.method} , ip from which req is done is: ${req.ip}, hostname for request is ${req.hostname} and useragent is ${req.get('User-Agent')}`);
      next();
  });



server.get('/',(req,res)=>
  {
    res.set('Content-Type', 'text/html')
    res.send('Hello World!!!!!');
  });

server.post('/',(req,res)=>
    {
      res.set('Content-Type','application/json');
      res.send({"data":"My name is maynk behl"});
    })

server.get('/sendFile',(req,res)=>
  {
    res.set('Content-Type','text/html');
    res.sendFile('C:\\Users\\Priyank Behl\\.vscode\\EXPRESS MONDODB NODEJS\\index.html');
  });

server.get('/jsonFile',(req,res)=>
  {
    res.set('Content-Type','application/json');
    res.sendFile('C:/Users/Priyank Behl/.vscode/EXPRESS MONDODB NODEJS/Dummydata.json')
  });

server.options('/jsondata',(req,res)=>
  {
    res.set('Content-Type','application/json');
    res.json(jsondata);
  });

server.get('//',(req,res)=>
  {
    res.sendStatus(404);
  })

server.delete("/delete",(req,res)=>
  {
    res.set('Content-Type','text/html');
    res.status(201).sendFile("C:\\Users\\Priyank Behl\\.vscode\\EXPRESS MONDODB NODEJS\\index2.html");
  })


// request methodes

server.get("/requestmethode",(req,res)=>
  {
    res.set('Content-Type','application/json');
    res.json({"RequestType":"GET REQUEST"});
  });

server.post('/requestmethode',(req,res)=>
  {
    res.set('Content-Type','application/json');
    res.json({"RequestType":"POST REQUEST"});
  })

server.put('/requestmethode',(req,res)=>
  {
    res.set('Content-Type','application/json');
    res.json({"RequestType":"PUT REQUEST"});
  })

server.patch('/requestmethode',(req,res)=>
  { 
    res.set('Content-Type','application/json');
    res.json({"RequestType":"PATCH REQUEST"});
  });

server.delete('/requestmethode',(req,res)=>
  {
    res.set('Content-Type','application/json');
    res.json({"RequestType":"DELETE REQUEST"});
  });

server.head('/requestmethode',(req,res)=>
  {
    // not working, why?
    res.set('Content-Type','application/json');
    res.json({"RequestType":"HEAD REQUEST"});
  });

server.options('/requestmethode',(req,res)=>
  {
    res.set('Content-Type','application/json');
    res.json({"RequestType":"OPTIONS REQUEST"});
  });







server.listen(8080,()=>
  {
    console.log("Listening on port 8080");
  })

  // lets learn about types of middleware in next file