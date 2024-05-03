import * as http from 'node:http';
import * as fs from 'node:fs';

const indexfile=fs.readFileSync('index.html','utf-8');
const jsondata=fs.readFileSync('Dummydata.json','utf-8');

const server=http.createServer((req,res)=>
{
  // res.setHeader('Content-Type','text/html');;
  // res.end(indexfile);
  res.setHeader('Content-Type','application/json');
  res.end(jsondata);
  console.log(req.url);
});
server.listen(8080);