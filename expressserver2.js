// importing express and fs to read and render

import * as fs from 'node:fs';
import express from "express";
const jsondata=fs.readFileSync('Dummydata.json','utf16le');
const indexfile=fs.readFileSync('index.html','utf16le');
console.log(jsondata);

// lets create server

const server=express();


server.get('/',(req,res)=>
  {
    res.send(indexfile);
  })

// server.get('/file2',(req,res)=>
//   {
       //someerror encountered because of path
//      res.sendFile('C:\Users\Priyank Behl\.vscode\EXPRESS MONDODB NODEJS\index2.html');
//   })

 server.get('/json',(req,res)=>
  {
    res.json(jsondata);
  })

server.post('/', (req,res)=>
  {
     res.json({'type':'POST'});
  });

server.put('/',(req,res)=>
  {
    res.json({'type':'PUT'});
  })

server.delete('/',(req,res)=>
  {
    res.json({'type':'DELETE'});
  })

server.patch('/',(req,res)=>
  {
    res.json({'type':'PATCH'})
  })

server.head('/',(req,res)=>
  {
    res.json({'type':'HEAD'});
  })

server.options('/',(req,res)=>
  {
    res.json({'type':'OPTIONS'});
  })










server.listen(8080,()=>
  {
    console.log('server Started');
  });


