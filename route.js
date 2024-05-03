import * as http from 'node:http';
import * as fs from 'node:fs';

const indexhtml=fs.readFileSync('index.html','utf-8');
const dummyJsonData=fs.readFileSync('Dummydata.json','utf-8');

const server=http.createServer((req,res)=>{
  console.log(req.url);
  switch(req.url)
  {
     case '/' :
      res.setHeader('Content-Type','text/html');
      res.end(indexhtml);
      break;

    case '/api':
      res.setHeader('Content-Type','application/json');
      res.end(dummyJsonData);
      break;
    
    default:
      res.writeHead(404);
      res.end();
  } 
});

server.listen(8080);