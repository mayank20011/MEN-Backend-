import * as http from 'node:http';
import * as fs from 'node:fs';

const indexfile=fs.readFileSync('index.html','utf-8');
const jsondata=fs.readFileSync('Dummydata.json','utf-8');
const server=http.createServer((req,res)=>
{
  // res.end("hello");
  res.end(indexfile.toString());
});

server.listen(8080);