import express from "express";
import * as fs from "node:fs";

let data=fs.readFileSync('Dummydata.json','utf-16le').trim();

// This is how we make server using express
const server=express();

// server.put('/',(req,res)=>
// {
//   res.send("Got a put request");
// })

// server.post('/',(res)=>
// {
//   res.send("Got a post request");
// });

// server.delete('/',()=>
// {
//   res.send("Got a Delete request");
// })

// server.get('/data',(req,res)=>
// {
//    res.setHeader('Content-Type','application/json');
//    res.send(data);
// })

server.get('/',(req,res)=>
{
  // res.send('<h1>Hello</h1>');
  res.json(JSON.parse(data));
})

// listening at port 8080
server.listen(8080, ()=>
{
  console.log("Server listening on port 8080");
});

